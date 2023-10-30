import React from "react";
import "./Modal.css"; // Import your CSS file for styling

const Modal = ({ selectedItem, onClose }) => {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="header">
          <h2>Selected Item: {selectedItem}</h2>
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="related-jobs">
          <h3>Related Jobs:</h3>
          <ul>
            {/* {relatedJobs.map((job) => (
              <li key={job.id}>{job.position}</li>
            ))} */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
