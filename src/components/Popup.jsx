import React, { useState } from 'react';

function Popup({ onClose, onAddWidget }) {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');
  const [categoryName, setCategoryName] = useState('CSPM Executive Dashboard'); // Default to the first category

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onAddWidget function to add the widget to the selected category
    onAddWidget(categoryName, widgetName, widgetText);
    // Clear the input fields
    setWidgetName('');
    setWidgetText('');
    // Close the popup
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex items-center justify-between border-b pb-3">
          <h3 className="text-xl font-semibold">Add New Widget</h3>
          <button
            type="button"
            className="text-gray-400 hover:text-gray-900 hover:bg-gray-200 rounded-lg p-1"
            onClick={onClose}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700">
              Select Category
            </label>
            <select
              id="categoryName"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="CSPM Executive Dashboard">CSPM Executive Dashboard</option>
              <option value="CWPP Dashboard">CWPP Dashboard</option>
              <option value="Image">Image</option>
              <option value="Ticket">Ticket</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="widgetName" className="block text-sm font-medium text-gray-700">
              Widget Name
            </label>
            <input
              type="text"
              id="widgetName"
              value={widgetName}
              onChange={(e) => setWidgetName(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="widgetText" className="block text-sm font-medium text-gray-700">
              Widget Text
            </label>
            <textarea
              id="widgetText"
              value={widgetText}
              onChange={(e) => setWidgetText(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              rows="4"
              required
            />
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-2"
            >
              Add Widget
            </button>
            <button
              type="button"
              className="bg-gray-200 text-gray-900 px-4 py-2 rounded-lg"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Popup;
