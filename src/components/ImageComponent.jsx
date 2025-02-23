import React, { useState } from 'react';
import { useDrag } from 'react-dnd';

const ImageComponent = ({ id, updateComponent, isPreviewMode }) => {
  const [image, setImage] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false); 

  const [, drag] = useDrag({
    type: 'image',
    item: { id },
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
        setIsEmpty(false); 
      };
      reader.readAsDataURL(file);
    } else {
      setIsEmpty(true); 
    }
  };

  return (
    <div
      ref={drag}
      style={{
        cursor: isPreviewMode ? 'default' : 'move',
        margin: '10px',
        padding: '10px',
        border: isEmpty ? '2px solid red' : '1px solid #000',
      }}
    >
      {isPreviewMode ? (
        image ? (
          <img src={image} alt="Uploaded" style={{ maxWidth: '100%' }} />
        ) : (
          <p>No Image Uploaded</p>
        )
      ) : (
        <div>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          {isEmpty && <p style={{ color: 'red', fontSize: '12px' }}>Please upload an image!</p>}
        </div>
      )}
    </div>
  );
};

export default ImageComponent;