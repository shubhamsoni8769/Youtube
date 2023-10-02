import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(28) + "👌",
        })
      );
    }, 1500);
    // API Pooling
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="p-2 border border-black ml-2 w-full h-[450px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="flex w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Sweta Soni",
              message: liveMessage,
            })
          );
          setLiveMessage("")
        }}
      >
        <input
          className="px-2 w-96 "
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-300">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
