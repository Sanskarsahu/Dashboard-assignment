// src/components/AddWidgetModal.js
import React, { useState } from 'react';

const AddWidgetModal = ({ onClose, onAddWidget }) => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    onAddWidget(name, content);
    setName('');
    setContent('');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4">Add Widget</h3>
        <input
          type="text"
          placeholder="Widget Name"
          className="border p-2 mb-4 w-full rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Widget Content"
          className="border p-2 mb-4 w-full rounded"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white px-4 py-2 rounded mr-2"
        >
          Add
        </button>
        <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddWidgetModal;
