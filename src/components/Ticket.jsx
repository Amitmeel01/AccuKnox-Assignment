import React from 'react';

function Image({ widgets }) {
  const TicketCategoryWidgets = widgets.filter(widget => widget.category === 'Ticket');

  return (
    <div className='flex flex-col gap-8'>
      {TicketCategoryWidgets.map(widget => (
        <div key={widget.id} className='border-2 border-black flex gap-4 px-2 mr-8 ml-8 rounded-md py-1 items-center'>
          <input type='checkbox' className='cursor-pointer text-black' />
          <h1>{widget.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default Image;
