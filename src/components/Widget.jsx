// src/components/Widget.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../store/widgetsSlice';

const Widget = ({ widget, categoryId }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeWidget({ categoryId, widgetId: widget.id }));
  };

  return (
    <div className="bg-gray-100 w-96 h-52 p-3 mb-3 rounded-md shadow-md">
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-semibold">{widget.name}</h4>
        <button
          onClick={handleRemove}
          className="text-red-500 hover:text-red-700"
        >
          ✕
        </button>
      </div>
      <p>{widget.content}</p>
    </div>
  );
};

export default Widget;
