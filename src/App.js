import React, { useState } from 'react';
import Toolbar from './components/Toolbar';
import Canvas from './components/Canvas';
import './styles.css';

const App = () => {
  const [components, setComponents] = useState([]);
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const addComponent = (type) => {
    const newComponent = { id: Date.now(), type };
    setComponents([...components, newComponent]);
  };

  const updateComponent = (id, updates) => {
    setComponents(components.map(comp => comp.id === id ? { ...comp, ...updates } : comp));
  };

  return (
    <div className="app">
      <Toolbar addComponent={addComponent} />
      <Canvas
        components={components}
        updateComponent={updateComponent}
        isPreviewMode={isPreviewMode}
      />
      <button onClick={() => setIsPreviewMode(!isPreviewMode)}>
        {isPreviewMode ? 'Design Mode' : 'Preview Mode'}
      </button>
    </div>
  );
};

export default App;