import React from 'react';

function CwppSidebar({ widgets }) {
  // Filter widgets by the correct category name
  const cwppCategoryWidgets = widgets.filter(widget => widget.category === 'CWPP Dashboard');
  console.log('CWPP Widgets:', cwppCategoryWidgets); // Debugging statement

  return (
    <div className='flex flex-col gap-8'>
      {cwppCategoryWidgets.map(widget => (
        <div key={widget.id} className='border-2 border-black flex gap-4 px-2 mr-8 ml-8 rounded-md py-1 items-center'>
          <input type='checkbox' className='cursor-pointer text-black' />
          <h1>{widget.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default CwppSidebar;
