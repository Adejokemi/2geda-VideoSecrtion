import React, { useState } from "react";
import PropTypes from "prop-types";
import Avatar from "react-avatar";

const Comment = ({ name, jobDescription, text }) => {
  return (
    <div className="flex flex-col items-start mb-2 p-4 shadow-md">
      {/* User Avatar */}
      <div className="flex mb-1">
        <Avatar name={name} size="40" round={true} className="mr-4" />

        {/* Comment Content */}
        <div className="flex flex-col">
          {/* User Name and Job Description */}
          <div className="flex flex-col">
            <p className="font-bold">{name}</p>
            <p className="text-gray-500 text-sm">{jobDescription}</p>
          </div>
        </div>
      </div>

      {/* Comment Text */}
      <p className="rounded-lg">{text}</p>
    </div>
  );
};

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  jobDescription: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const CommentSection = () => {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Mark jude",
      jobDescription: "Software Engineer",
      text: "This is a great comment!",
    },
    {
      id: 2,
      name: "Mark jude",
      jobDescription: "Software Engineer",
      text: "This is another great comment!",
    },
    {
      id: 3,
      name: "Mark jude",
      jobDescription: "Software Engineer",
      text: "And here's one more!",
    },
  ]);

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== "") {
      const newCommentObject = {
        id: comments.length + 1,
        name: "John Doe", 
        jobDescription: "Job Title", 
        text: newComment,
      };

      setComments([...comments, newCommentObject]);
      setNewComment("");
    }
  };

  return (
    <div>
      <div className="flex justify-start items-center gap-4 mb-4">
        <h2 className="text-2xl font-bold py-2">Comments</h2>
        <div className="bg-violet-700 w-14 rounded-xl text-white text-xl px-3 p-2 ">
          254
        </div>
      </div>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          name={comment.name}
          jobDescription={comment.jobDescription}
          text={comment.text}
        />
      ))}
      {/* New Comment Section */}
      <div className="my-12">
        <div className="bg-gray-100 p-3 rounded-md">
        <p className="mb-2">Comment</p>
      <div className="flex mb-4 gap-4 ">
        <textarea
          placeholder="Add your comment..."
          className="w-full h-12 px-2 border rounded-md mr-2"
          value={newComment}
          onChange={handleCommentChange}
          ></textarea>
        <button
          className="bg-violet-700 text-white  w-40 rounded-md"
          onClick={handleCommentSubmit}
          >
          Post
        </button>
      </div>
    </div>
    </div>
    </div>
  );
};

export default CommentSection;
