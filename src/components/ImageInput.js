import React from 'react';

const ImageInput = () => (
  <div id="ImageInput" className="ui middle aligned center aligned grid segment">
    <input type="file" className="inputfile" id="input-image" />

    <label htmlFor="input-image" className="ui huge red right floated button">
      <i className="ui upload icon"></i>
      Upload image
    </label>
    <input type="file" className="inputfile" id="input-image" />
  </div>
);

export default ImageInput;
