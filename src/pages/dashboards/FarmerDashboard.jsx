import { useState } from "react";
import EventHostProfileForm from "../../components/ProfileCompletionForm/EventHostProfileForm";
import NGOProfileForm from "../../components/ProfileCompletionForm/NGOProfileForm";
import CustomerProfileForm from "../../components/ProfileCompletionForm/CustomerProfileForm";
import FarmerProfileForm from "../../components/ProfileCompletionForm/FarmerProfileForm";
import { FaShoppingBasket } from "react-icons/fa";

const Sidebar = ({ setSelectedOption }) => {
  return (
    <div className="w-64 p-5 bg-gray-800 text-white h-full shadow-lg">
      <h3 className="text-xl font-bold flex items-center gap-2">
        <FaShoppingBasket /> Farmer's Market
      </h3>
      <ul className="mt-6 space-y-3">
        {["Dashboard", "Farmers", "Events", "NGOs", "Customers"].map((option) => (
          <li
            key={option}
            className="p-3 cursor-pointer rounded-lg text-lg font-medium hover:bg-gray-600 transition-all"
            onClick={() => setSelectedOption(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

const FarmerDashboard = () => {
  const [selectedOption, setSelectedOption] = useState("Dashboard");

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 bg-gray-100">
        {/* Sidebar */}
        <Sidebar setSelectedOption={setSelectedOption} />

        {/* Main Content */}
        <div className="flex-1 p-6">
          {selectedOption === "Farmers" && (
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold mb-4 text-gray-800">Farmers Market</h1>
              <FarmerProfileForm />
            </div>
          )}
          {selectedOption === "NGOs" && (
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold mb-4 text-gray-800">NGO Profile</h1>
              <NGOProfileForm />
            </div>
          )}
          {selectedOption === "Events" && (
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold mb-4 text-gray-800">Event Host Profile</h1>
              <EventHostProfileForm />
            </div>
          )}
          {selectedOption === "Customers" && (
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold mb-4 text-gray-800">Customer Profile</h1>
              <CustomerProfileForm />
            </div>
          )}
          {selectedOption === "Dashboard" && (
            <div>
              <h1 className="text-3xl font-bold mb-4 text-gray-800">Dashboard</h1>
              <p className="text-gray-600">Welcome to the Dashboard!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;