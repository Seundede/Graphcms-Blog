import React, { useState, useRef } from "react";

const CommentForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  const handleSubmit = () => {
    setError(false);
    if (!commentEl.current.value) {
    }
  };
  return (
    <div className="shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Comments</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100"
          ref={commentEl}
          placeholder="Comment"
          name="comment"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100"
          type="text"
          ref={nameEl}
          placeholder="Name"
          name="name"
        />
        <input
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100"
          type="text"
          ref={emailEl}
          placeholder="Email"
          name="email"
        />
      </div>
      {error && <p className="text-red-500 text-xs">All fields are required</p>}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleSubmit}
          className="transition duration-500 ease hover:bg-slate-400 inline-block bg-pink-600 text-lg text-white rounded-full px-8 py-3 cursor-pointer"
        >
          {" "}
          Post Comment
        </button>
        {showSuccessMessage && (
          <span className="float-right text-xl font-semibold mt-3 text-green-500">
            Comment submitted
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentForm;
