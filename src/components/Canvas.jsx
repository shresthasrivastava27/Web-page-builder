import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import TextBox from './TextBox';
import ImageComponent from './ImageComponent';
import ButtonComponent from './ButtonComponent';

const Canvas = ({ components, updateComponent, isPreviewMode }) => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const [, drop] = useDrop({
    accept: ['text', 'image', 'button'],
    drop: (item) => {
      updateComponent(item.id, { x: item.x, y: item.y });
    },
  });

  return (
    <div
      ref={drop}
      className="canvas"
      style={{
        backgroundColor,
        border: isPreviewMode ? 'none' : '1px dashed #000',
      }}
    >
      {!isPreviewMode && (
        <div style={{ marginBottom: '10px' }}>
          <label>Background Color: </label>
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
        </div>
      )}
      {components.map((comp) => {
        switch (comp.type) {
          case 'text':
            return (
              <TextBox
                key={comp.id}
                id={comp.id}
                updateComponent={updateComponent}
                isPreviewMode={isPreviewMode}
              />
            );
          case 'image':
            return (
              <ImageComponent
                key={comp.id}
                id={comp.id}
                updateComponent={updateComponent}
                isPreviewMode={isPreviewMode}
              />
            );
          case 'button':
            return (
              <ButtonComponent
                key={comp.id}
                id={comp.id}
                updateComponent={updateComponent}
                isPreviewMode={isPreviewMode}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default Canvas;