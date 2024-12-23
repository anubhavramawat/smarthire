import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import user from './assets/user.jpg'

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/5 bg-white shadow-lg">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-bold">BlueChat</h1>
        </div>
        <div className="p-4 overflow-y-auto">
          <h2 className="text-sm font-semibold text-gray-600 mb-2">Messages</h2>
          <ul>
            <li className="mb-3 flex items-center justify-between p-2 bg-blue-100 rounded-lg">
              <span> Anubhav Ramawat</span>
              <span className="text-xs text-gray-500">5m</span>
            </li>
            <li className="mb-3 flex items-center justify-between p-2 bg-gray-50 rounded-lg">
              <span>George Klein</span>
              <span className="text-xs text-gray-500">1h 54m</span>
            </li>
            <li className="mb-3 flex items-center justify-between p-2 bg-gray-50 rounded-lg">
              <span>999-999-9999</span>
              <span className="text-xs text-gray-500">6h 21m</span>
            </li>
            <li className="mb-3 flex items-center justify-between p-2 bg-gray-50 rounded-lg">
              <span>Samuel Steve</span>
              <span className="text-xs text-gray-500">6h 21m</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 bg-white shadow-lg flex flex-col">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Anubhav Ramawat</h2>
          <button className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg">Messenger</button>
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="mb-4">
            <p className="text-sm text-gray-600">This is the very beginning of your direct message history with Anubhav Ramawat.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <p className="text-sm">I keep getting "error while creating a new pop up" for the first time setup...</p>
          </div>
          <div className="text-right">
            <div className="inline-block bg-blue-500 text-white p-4 rounded-lg">
              <p className="text-sm">Hey, #firstname, I saw you were curious about our products...</p>
            </div>
          </div>
        </div>
        <div className="p-4 border-t border-gray-200 flex">
          <input
            type="text"
            className="flex-1 border rounded-lg px-4 py-2"
            placeholder="Message anubhav..."
          />
          <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg">Send</button>
        </div>
      </div>

      {/* Details Panel */}
      <div className="w-1/4 bg-white shadow-lg p-4">
        <div className="flex items-center mb-4">
          <img
            src={user}
            alt="anubhav ramawat"
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-4">
            <h3 className="font-semibold">Anubhav Ramawat</h3>
            <p className="text-xs text-gray-500">11:59pm in Delhi, India</p>
          </div>
        </div>
        <div className="mb-4">
          <h4 className="text-sm font-semibold">Revenue</h4>
          <p className="text-lg font-bold">$3,452</p>
        </div>
        <div className="mb-4">
          <h4 className="text-sm font-semibold">Web Visits</h4>
          <p className="text-lg font-bold">42</p>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <h4 className="text-sm font-semibold mb-2">Contact</h4>
          <p className="flex items-center text-sm mb-2">
            <FaEnvelope className="mr-2" /> anubhav@gmail.com
          </p>
          <p className="flex items-center text-sm mb-2">
            <FaPhone className="mr-2" /> +91 9999999999
          </p>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <h4 className="text-sm font-semibold mb-2">Tags</h4>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-gray-200 text-xs rounded-lg">Abandoned Cart</span>
            <span className="px-2 py-1 bg-gray-200 text-xs rounded-lg">Popup</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
