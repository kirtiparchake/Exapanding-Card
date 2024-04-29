import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([
    { id: 1, text: 'What are hooks in React and how do they differ from class components?', expanded: false },
    { id: 2, text: 'Explain the concept of virtual DOM in React and why ?', expanded: false },
    { id: 3, text: 'What is JSX in React and why is it used?', expanded: false },
    { id: 4, text: 'How can you optimize performance in a React application?', expanded: false }
  ]);

  const [multiSelectionEnabled, setMultiSelectionEnabled] = useState(false);

  const handleItemClick = (id) => {
    if (!multiSelectionEnabled) {
      const updatedItems = items.map(item =>
        item.id === id ? { ...item, expanded: !item.expanded } : { ...item, expanded: false }
      );
      setItems(updatedItems);
    } else {
      const updatedItems = items.map(item =>
        item.id === id ? { ...item, expanded: !item.expanded } : item
      );
      setItems(updatedItems);
    }
  };

  const handleItemOneClick = (id) => {
    if (multiSelectionEnabled) {
      const updatedItems = items.map(item =>
        item.id === id ? { ...item, expanded: false } : item
      );
      setItems(updatedItems);
    }
  };

  const toggleMultiSelection = () => {
    setMultiSelectionEnabled(!multiSelectionEnabled);
    if (!multiSelectionEnabled) {
      const updatedItems = items.map(item =>
        item.id === id ? { ...item, expanded: !item.expanded } : { ...item, expanded: false }
      );
      setItems(updatedItems);
    }
  };

  return (
    <div className="App">
      <h1>Expandable List</h1>
      <button onClick={toggleMultiSelection}>
        {multiSelectionEnabled ? 'Disable Multi Selection' : 'Enable Multi Selection'}
      </button>
      <ul>
        {items.map(item => (
          <li key={item.id} onClick={() => handleItemClick(item.id)} onDoubleClick={() => handleItemOneClick(item.id)}>
            <span>{item.text}</span>
            {item.expanded && <span> - Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, dicta sint qui mollitia consequatur fugiat</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
