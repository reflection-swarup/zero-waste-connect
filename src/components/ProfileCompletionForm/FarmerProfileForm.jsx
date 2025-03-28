import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FarmerProfileForm = ({ setShowForm }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    farmName: "",
    farmAddress: "",
    farmSize: "",
    farmType: "Organic",
    idProof: null,
    yearsOfExperience: "",
    cropsGrown: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user")) || {};
    user.isProfileComplete = true;
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/dashboard");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 max-w-2xl mx-auto relative">
      {/* Close Button */}
      <button
        onClick={() => setShowForm(false)}
        className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
      >
        ✖
      </button>

      <h2 className="text-xl font-semibold mb-4">Complete Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Farm Name</label>
            <input type="text" name="farmName" value={formData.farmName} onChange={handleChange} className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500" required />
          </div>
          <div>
            <label className="block mb-2">Farm Address</label>
            <input type="text" name="farmAddress" value={formData.farmAddress} onChange={handleChange} className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500" required />
          </div>
          <div>
            <label className="block mb-2">Farm Size (in acres)</label>
            <input type="number" name="farmSize" value={formData.farmSize} onChange={handleChange} className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500" required />
          </div>
          <div>
            <label className="block mb-2">Farm Type</label>
            <select name="farmType" value={formData.farmType} onChange={handleChange} className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500">
              <option value="Organic">Organic</option>
              <option value="Dairy">Dairy</option>
              <option value="Aquaculture">Aquaculture</option>
              <option value="Poultry">Poultry</option>
              <option value="Horticulture">Horticulture</option>
            </select>
          </div>
          <div>
            <label className="block mb-2">Years of Experience</label>
            <input type="number" name="yearsOfExperience" value={formData.yearsOfExperience} onChange={handleChange} className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block mb-2">Crops Grown (comma separated)</label>
            <input type="text" name="cropsGrown" value={formData.cropsGrown} onChange={handleChange} className="w-full p-2 border rounded" />
          </div>
        </div>

        <div className="mt-4">
          <label className="block mb-2">Upload ID Proof</label>
          <input type="file" name="idProof" onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>

        {/* Green Submit Button */}
        <button type="submit" className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
          Submit Profile
        </button>
      </form>
    </div>
  );
};

export default FarmerProfileForm;