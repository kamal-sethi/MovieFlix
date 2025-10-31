import React, { useState } from "react";

interface AddMovieModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (movie: any) => void;
}

const AddMovieModal: React.FC<AddMovieModalProps> = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: "",
    type: "Movie",
    director: "",
    budget: "",
    location: "",
    duration: "",
    year: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300"
    >
      <div
        className="bg-gradient-to-br from-[#f9fafb] to-[#dbeafe] rounded-2xl shadow-2xl w-[90%] max-w-lg p-6 relative animate-fadeIn"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-600 text-xl hover:text-gray-800"
        >
          ×
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add New Movie</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full p-2 border rounded-lg"
            required
          />

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          >
            <option>Movie</option>
            <option>TV Show</option>
          </select>

          <input
            name="director"
            value={formData.director}
            onChange={handleChange}
            placeholder="Director"
            className="w-full p-2 border rounded-lg"
          />
          <input
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="Budget"
            className="w-full p-2 border rounded-lg"
          />
          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full p-2 border rounded-lg"
          />
          <input
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="Duration"
            className="w-full p-2 border rounded-lg"
          />
          <input
            name="year"
            value={formData.year}
            onChange={handleChange}
            placeholder="Year"
            className="w-full p-2 border rounded-lg"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-2 px-4 rounded-lg w-full hover:opacity-90 transition"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMovieModal;
