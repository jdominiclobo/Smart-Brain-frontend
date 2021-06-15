import React from "react";
import "./ImageLinkForm";
const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
  return (
    <div>
      <p className="f3">{"This brain detects faces in your picture"}</p>
      <div className="center">
        <div className="form center pa4 br3 shadow-3">
          <input
            type="text"
            className="f4 pa2 w-70 center"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-orange"
            onClick={onPictureSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};
export default ImageLinkForm;
