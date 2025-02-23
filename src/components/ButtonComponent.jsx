import React, { useState } from 'react';
import { useDrag } from 'react-dnd';

const ButtonComponent = ({ id, updateComponent, isPreviewMode }) => {
  const [buttonText, setButtonText] = useState('');
  const [isEmpty, setIsEmpty] = useState(false); 

  const [, drag] = useDrag({
    type: 'button',
    item: { id },
  });

  const handleButtonTextChange = (e) => {
    const newText = e.target.value;
    setButtonText(newText);
    setIsEmpty(newText.trim() === ''); 
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
        <button>{buttonText || 'Empty Button'}</button>
      ) : (
        <div>
          <input
            type="text"
            value={buttonText}
            onChange={handleButtonTextChange}
            placeholder="Button Text"
          />
          {isEmpty && <p style={{ color: 'red', fontSize: '12px' }}>Button text cannot be empty!</p>}
        </div>
      )}
    </div>
  );
};

export default ButtonComponent;