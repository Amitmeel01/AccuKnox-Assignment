import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import Ticket from './Ticket';
import Image from './Image';
import CwppSidebar from './CwppSidebar';
import CspmSidebar from './CspmSidebar';
import Popup from './Popup';

function Sidebar({ isVisible, onClose, onAddWidget }) {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [widgets, setWidgets] = useState(() => {
    const storedData = localStorage.getItem('data');
    return storedData ? JSON.parse(storedData).categories.flatMap(cat => cat.widgets) : [];
  });
  const location = useLocation();

  useEffect(() => {
    const data = {
      categories: [
        { name: 'Image', widgets: widgets.filter(w => w.category === 'Image') },
        { name: 'CWPP Dashboard', widgets: widgets.filter(w => w.category === 'CWPP Dashboard') },
        { name: 'Ticket', widgets: widgets.filter(w => w.category === 'Ticket') },
        { name: 'CSPM Executive Dashboard', widgets: widgets.filter(w => w.category === 'CSPM Executive Dashboard') },
      ],
    };
    localStorage.setItem('data', JSON.stringify(data));
  }, [widgets]);

  const handleAddClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const handleAddWidget = (categoryName, widgetName, widgetText) => {
    const newWidget = {
      id: widgets.length + 1,
      name: widgetName,
      text: widgetText,
      category: categoryName,
    };
    const updatedWidgets = [...widgets, newWidget];
    setWidgets(updatedWidgets);
    onAddWidget(newWidget); // Call the callback function to update Cspm
    setPopupVisible(false);
  };

  const renderContent = () => {
    switch (location.pathname) {
      case '/ticket':
        return <Ticket widgets={widgets.filter(widget => widget.category === 'Ticket')} />;
      case '/image':
        return <Image widgets={widgets.filter(widget => widget.category === 'Image')} />;
      case '/cwpp':
        return <CwppSidebar widgets={widgets.filter(widget => widget.category === 'CWPP Dashboard')} />;
      case '/cspm':
        return <CspmSidebar widgets={widgets.filter(widget => widget.category === 'CSPM Executive Dashboard')} />;
      default:
        return null;
    }
  };

  return (
    <>
      {isVisible && (
        <div className='w-[500px] lg:w-[700px] max-sm:w-[350px] h-full text-black shadow-md fixed top-0 right-0 z-10 bg-white'>
          <div className='p-4 flex items-center border-b border-gray-700 justify-between bg-purple-700'>
            <h2 className='text-lg font-semibold text-white'>Add Widget</h2>
            <RxCross2 className='text-3xl cursor-pointer text-white' onClick={onClose} />
          </div>

          <nav className='mt-6'>
            <h2 className='ml-8'>Personalize your dashboard by adding the following widgets:</h2>
            <ul className='space-y-2 flex items-center justify-around'>
              <li>
                <Link
                  to="/cspm"
                  className={
                    location.pathname === '/cspm'
                      ? 'flex items-center p-4 underline underline-offset-2 text-purple-500 transition duration-300'
                      : 'flex items-center p-4 hover:underline hover:underline-offset-2 hover:text-purple-600 transition duration-300'
                  }
                >
                  <span className='ml-0'>CSPM</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/cwpp"
                  className={
                    location.pathname === '/cwpp'
                      ? 'flex items-center p-4 underline underline-offset-2 text-purple-500 transition duration-300'
                      : 'flex items-center p-4 hover:underline hover:underline-offset-2 hover:text-purple-600 transition duration-300'
                  }
                >
                  <span className='ml-0'>CWPP</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/image"
                  className={
                    location.pathname === '/image'
                      ? 'flex items-center p-4 underline hover:underline-offset-2 text-purple-500 transition duration-300'
                      : 'flex items-center p-4 hover:underline hover:underline-offset-2 hover:text-purple-600 transition duration-300'
                  }
                >
                  <span className='ml-0'>Image</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/ticket"
                  className={
                    location.pathname === '/ticket'
                      ? 'flex items-center p-4 underline underline-offset-2 text-purple-500 transition duration-300'
                      : 'flex items-center p-4 hover:underline hover:underline-offset-2 hover:text-purple-600 transition duration-300'
                  }
                >
                  <span className='ml-0'>Ticket</span>
                </Link>
              </li>
            </ul>
            <hr className='w-[420px] ml-10 mb-5 lg:w-[620px]' />
            {renderContent()}
          </nav>

          <div className='flex gap-4 justify-end mr-10 fixed bottom-5 right-0'>
            <button className='border-2 border-black p-2 rounded-xl' onClick={onClose}>Confirm</button>
            <button className='border-2 border-black p-2 px-4 bg-black text-white rounded-xl text-center' onClick={onClose}>Cancel</button>
          </div>

          <button className='border-2 border-black w-12 text-center bg-purple-600 text-white ml-12 mt-8 rounded-md' onClick={handleAddClick}>
            Add
          </button>
        </div>
      )}
      {isPopupVisible && <Popup onClose={handleClosePopup} onAddWidget={handleAddWidget} />}
    </>
  );
}

export default Sidebar;
