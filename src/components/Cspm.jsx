import React, { useState, useEffect } from 'react';
import Card from './Card';
import Sidebar from './Sidebar';

function Cspm() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [widgets, setWidgets] = useState(() => {
    const storedWidgets = JSON.parse(localStorage.getItem('data'))?.categories.find(category => category.name === 'CSPM Executive Dashboard')?.widgets || [];
    return storedWidgets;
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data')) || { categories: [] };
    const updatedCategories = data.categories.map(category => {
      if (category.name === 'CSPM Executive Dashboard') {
        return { ...category, widgets };
      }
      return category;
    });
    localStorage.setItem('data', JSON.stringify({ categories: updatedCategories }));
  }, [widgets]);

  const handleAddWidgetClick = () => {
    setSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  const handleRemoveWidgetClick = (widgetId) => {
    const updatedWidgets = widgets.filter(widget => widget.id !== widgetId);
    setWidgets(updatedWidgets);
  };

  const handleAddWidget = (newWidget) => {
    setWidgets(prevWidgets => [...prevWidgets, newWidget]);
    setSidebarOpen(false);
  };

  return (
    <div className='mt-8 ml-4'>
      <h1 className='font-bold'>CSPM Executive Dashboard</h1>
      <div className='mt-4 ml-4 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 max-sm:grid-cols-1 gap-8'>
        {widgets.map(widget => (
          <div key={widget.id} className='gap-4 px-2 mr-8 rounded-md py-1 items-center'>
            <Card widget={widget.name} onRemoveWidgetClick={() => handleRemoveWidgetClick(widget.id)} />
          </div>
        ))}

        {/* Add Widget Card */}
        <div className='gap-4 px-2 mr-8 rounded-md py-1 items-center'>
          <Card widget="Add Widget" onAddWidgetClick={handleAddWidgetClick} />
        </div>
      </div>

      {/* Render Sidebar conditionally */}
      {isSidebarOpen && <Sidebar isVisible={isSidebarOpen} onClose={handleCloseSidebar} onAddWidget={handleAddWidget} />}
    </div>
  );
}

export default Cspm;
