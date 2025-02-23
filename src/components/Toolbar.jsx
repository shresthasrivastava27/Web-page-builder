import React from 'react';

const Toolbar = ({ addComponent }) => {
  return (
    <div className="toolbar">
      <button onClick={() => addComponent('text')}>Add Text</button>
      <button onClick={() => addComponent('image')}>Add Image</button>
      <button onClick={() => addComponent('button')}>Add Button</button>
    </div>
  );
};

export default Toolbar;