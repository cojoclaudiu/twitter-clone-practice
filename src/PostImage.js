import React from 'react';
import './PostImage.css';


function PostImage({ imageURL }) {
  return (
    <div className="imageContainer">
      <img src={imageURL} alt="imageGIF" />
    </div>
  );

}


export default PostImage;
