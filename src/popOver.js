import React, { useState } from "react";

const Popover = () => {
  const [modal, setModal] = useState(false);
  const showModal = () => {
    setModal(true);
  };
  const hideModal = () => {
    setModal(false);
  };
  return (
    <div className="box">
      <button
        className="btn"
        type="button"
        onMouseOver={showModal}
        // onMouseLeave={hideModal}
      >
        hover me
      </button>
      {modal && (
        <div onMouseLeave={hideModal}>
          <div></div>
          <div className="modal">
            <h2>Hello Modal</h2>
            <p>
              Sharing your coding journey and achievements on LinkedIn can be a
              great way to showcase your skills and connect with others in the
              tech community. When posting about solving LeetCode problems, you
              can follow a format that includes the problem statement, your
              solution, and what you learned. Here's an example of what you
              might post
            </p>
            <button onClick={hideModal}>close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popover;
