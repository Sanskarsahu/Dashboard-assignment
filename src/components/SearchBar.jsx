
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllWidgets } from '../store/widgetsSlice';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const allWidgets = useSelector(selectAllWidgets);

  const filteredWidgets = allWidgets.filter((widget) =>
    widget.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search widgets..."
        className="border p-2 w-full rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <div className="mt-4 bg-white p-4 shadow-md rounded">
          <h3 className="font-semibold mb-3">Search Results</h3>
          {filteredWidgets.length > 0 ? (
            filteredWidgets.map((widget) => (
              <div
                key={widget.id}
                className="border-b py-2"
              >
                <h4 className="font-bold">{widget.name}</h4>
                <p>{widget.content}</p>
              </div>
            ))
          ) : (
            <p>No widgets found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
