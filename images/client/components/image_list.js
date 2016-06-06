import React, { PropTypes } from 'react';
import ImageDetail from './image_detail.js';

const ImageList = (props) => {
  const validImages = props.images.filter(image => !image.is_album);

  const RenderedImages = validImages.map(function (image) {
    return <ImageDetail key={image.title} image={image}/>
  });

  return (
      <ul className="media-list list-group">
        {RenderedImages}
      </ul>
  );
};

export default ImageList;
