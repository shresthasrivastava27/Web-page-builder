import React, { useState } from 'react';
import { useDrag } from 'react-dnd';

const TextBox = ({ id, updateComponent, isPreviewMode }) => {
  const [text, setText] = useState('');
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isEmpty, setIsEmpty] = useState(false); 

  const [, drag] = useDrag({
    type: 'text',
    item: { id },
  });

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    setIsEmpty(newText.trim() === ''); 
  };

  const textStyle = {
    fontWeight: isBold ? 'bold' : 'normal',
    fontStyle: isItalic ? 'italic' : 'normal',
    fontSize: `${fontSize}px`,
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
        <p style={textStyle}>{text || 'Empty Text Box'}</p>
      ) : (
        <div>
          <textarea
            value={text}
            onChange={handleTextChange}
            style={{ width: '100%', height: '100px', ...textStyle }}
            placeholder="Type something..."
          />
          {isEmpty && <p style={{ color: 'red', fontSize: '12px' }}>Text cannot be empty!</p>}
          <div>
            <button onClick={() => setIsBold(!isBold)}>B</button>
            <button onClick={() => setIsItalic(!isItalic)}>I</button>
            <select
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
            >
              <option value={12}>12</option>
              <option value={16}>16</option>
              <option value={20}>20</option>
              <option value={24}>24</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default TextBox;