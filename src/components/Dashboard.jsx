import React from 'react';
import { useSelector } from 'react-redux';
import Category from './Category';

const Dashboard = () => {
  const categories = useSelector((state) => state.widgets.categories);

  return (
    <div className="grid grid-row-1 md:grid-row-2 lg:grid-row-3 gap-6">
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Dashboard;