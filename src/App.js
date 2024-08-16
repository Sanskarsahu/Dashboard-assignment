// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Dashboard from './components/Dashboard';
import SearchBar from './components/SearchBar';
function App() {
  return (
    <Provider store={store}>
      <div className="bg-gray-100 min-h-screen p-6">
        <div className="">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <SearchBar/>
        </div>
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
