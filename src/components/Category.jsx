
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../store/widgetsSlice';
import Widget from './Widget';
import AddWidgetModal from './AddWidgetModal';

const Category = ({ category }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleAddWidget = (name, content) => {
    dispatch(addWidget({ categoryId: category.id, name, content }));
    setShowModal(false);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
      <div className="flex flex-row gap-5" >
      {category.widgets.map((widget) => (
        <Widget key={widget.id} widget={widget} categoryId={category.id} />
      ))}
      <div onClick={() => setShowModal(true)} className="bg-gray-200 w-96 h-52 p-3 mb-3 rounded-md shadow-md flex items-center justify-center cursor-pointer hover:bg-gray-400">
        + Add Widget
      </div>
      </div>
      
      {showModal && (
        <AddWidgetModal
          onClose={() => setShowModal(false)}
          onAddWidget={handleAddWidget}
        />
      )}
    </div>
  );
};

export default Category;
