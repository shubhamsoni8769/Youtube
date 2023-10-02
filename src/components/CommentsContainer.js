import React from "react";

const commentsData = [
  {
    name: "Sweta Soni",
    text: "Showcase profile to top companies and consultants.",
    replies: [
      {
        name: "Sweta Soni",
        text: "Showcase profile to top companies and consultants.",
        replies: [],
      },
      {
        name: "Sweta Soni",
        text: "Showcase profile to top companies and consultants.",
        replies: [],
      },
    ],
  },
  {
    name: "Sweta Soni",
    text: "Showcase profile to top companies and consultants.",
    replies: [],
  },
  {
    name: "Sweta Soni",
    text: "Showcase profile to top companies and consultants.",
    replies: [
      {
        name: "Sweta Soni",
        text: "Showcase profile to top companies and consultants.",
        replies: [
          {
            name: "Sweta Soni",
            text: "Showcase profile to top companies and consultants.",
            replies: [],
          },
          {
            name: "Sweta Soni",
            text: "Showcase profile to top companies and consultants.",
            replies: [],
          },
        ],
      },
      {
        name: "Sweta Soni",
        text: "Showcase profile to top companies and consultants.",
        replies: [],
      },
    ],
  },
  {
    name: "Sweta Soni",
    text: "Showcase profile to top companies and consultants.",
    replies: [],
  },
  {
    name: "Sweta Soni",
    text: "Showcase profile to top companies and consultants.",
    replies: [
      {
        name: "Sweta Soni",
        text: "Showcase profile to top companies and consultants.",
        replies: [],
      },
      {
        name: "Sweta Soni",
        text: "Showcase profile to top companies and consultants.",
        replies: [],
      },
    ],
  },
  {
    name: "Sweta Soni",
    text: "Showcase profile to top companies and consultants.",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex shadow bg-gray-100 rounded-lg p-2 my-2 hover:bg-gray-400">
      <div>
        <img
          className="h-12"
          alt="user"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
        />
      </div>
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment  data={comment} />
      <div className="pl-5 ml-5 border border-l-black">
    <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
