import React, { useState } from 'react'

const WatchLaterBtn = ({isWatchLater, id}) => {
  const [watchLaterBtn, setWatchLaterBtn] = useState(
    isWatchLater ? "Remove from Watch Later" : "Add to Watch Later"
  );
  const getItems = JSON.parse(localStorage.getItem("items"));



  const watchLater = (e) => {
    e.preventDefault();
    if (!getItems) {
      localStorage.setItem("items", JSON.stringify([id]));
    } else {
      const getItems = JSON.parse(localStorage.getItem("items"));
      const result = getItems.includes(id);
      if (result) {
        setWatchLaterBtn("Add to Watch Later");
        const filteredItems = getItems.filter((item) => item !== id);
        localStorage.setItem("items", JSON.stringify(filteredItems));
        window.dispatchEvent(new Event("storage"));
      } else {
        setWatchLaterBtn("Remove from Watch Later");
        getItems.push(id);
        localStorage.setItem("items", JSON.stringify(getItems));
      }
    }
  };

  return (
    <div>
       <button
            className="bg-red-300 shadow border border-red-800"
            onClick={(e) => watchLater(e)}
          >
            {watchLaterBtn}
          </button>
    </div>
  )
}

export default WatchLaterBtn;
