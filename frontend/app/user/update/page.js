"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CirclesBackground from "@/components/background";

const animalCategories = {
  Domestic: {
    breeds: ["Dog", "Cat", "Rabbit"],
  },
  Wild: {
    breeds: ["Lion", "Tiger", "Bear"],
  },
  Poultry: {
    breeds: ["Chicken", "Duck", "Turkey"],
  },
};

export default function Form() {
  const [pets, setPets] = useState([
    { name: "", type: "", category: "", breed: "", photos: [] },
  ]);

  const handleChange = (field, value) => {
    const updatedPet = { ...pets[0], [field]: value };
    setPets([updatedPet]);
  };

  const handleFileChange = (files) => {
    const updatedPet = { ...pets[0], photos: Array.from(files) };
    setPets([updatedPet]);
  };

  const togglePublic = () => {
    const updatedPet = { ...pets[0], isPublic: !pets[0].isPublic };
    setPets([updatedPet]);
  };

  return (
    <>
      <CirclesBackground 
      height={window.innerHeight+300}
      />
      {console.log(window.innerHeight)}
      <div className="min-h-screen bg-[#0b101a] flex flex-col justify-start">
        <Navbar />

        <div className="flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg w-full bg-[#161b26] rounded-2xl shadow-2xl hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden transform transition-all hover:scale-105 duration-500 ease-in-out">
            <div className="px-10 py-12">
              <h1 className="text-center text-3xl font-extrabold text-[#fefefe] mb-6 tracking-tight hover:tracking-wide transition-all duration-300">
                Update Pet Details
              </h1>

              <form id="submitForm" className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-[#9ea4b0] mb-1"
                    >
                      Pet Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={pets[0].name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="w-full p-3 border border-[#4f545c] rounded-lg bg-[#2b2f3a] text-[#fefefe] focus:border-[#3983fb] focus:ring-[#3983fb] outline-none transition duration-150 ease-in-out"
                      placeholder="Enter pet's name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="type"
                      className="block text-sm font-semibold text-[#9ea4b0] mb-1"
                    >
                      Select Animal Type
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={pets[0].type}
                      onChange={(e) => handleChange("type", e.target.value)}
                      className="w-full p-3 border border-[#4f545c] rounded-lg bg-[#2b2f3a] text-[#fefefe] focus:border-[#3983fb] focus:ring-[#3983fb] outline-none transition duration-150 ease-in-out"
                      required
                    >
                      <option value="">Select Type</option>
                      {Object.keys(animalCategories).map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="category"
                      className="block text-sm font-semibold text-[#9ea4b0] mb-1"
                    >
                      Select Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={pets[0].category}
                      onChange={(e) => handleChange("category", e.target.value)}
                      className="w-full p-3 border border-[#4f545c] rounded-lg bg-[#2b2f3a] text-[#fefefe] focus:border-[#3983fb] focus:ring-[#3983fb] outline-none transition duration-150 ease-in-out"
                      required
                    >
                      <option value="">Select Category</option>
                      {pets[0].type &&
                        animalCategories[pets[0].type].breeds.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="breed"
                      className="block text-sm font-semibold text-[#9ea4b0] mb-1"
                    >
                      Select Breed
                    </label>
                    <select
                      id="breed"
                      name="breed"
                      value={pets[0].breed}
                      onChange={(e) => handleChange("breed", e.target.value)}
                      className="w-full p-3 border border-[#4f545c] rounded-lg bg-[#2b2f3a] text-[#fefefe] focus:border-[#3983fb] focus:ring-[#3983fb] outline-none transition duration-150 ease-in-out"
                      required
                    >
                      <option value="">Select Breed</option>
                      {pets[0].category &&
                        animalCategories[pets[0].type].breeds.map((breed) => (
                          <option key={breed} value={breed}>
                            {breed}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="photos"
                      className="block text-sm font-semibold text-[#9ea4b0] mb-1"
                    >
                      Upload Photos
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="photos"
                        name="photos"
                        accept="image/*"
                        multiple
                        onChange={(e) => handleFileChange(e.target.files)}
                        className="hidden"
                      />
                      <label
                        htmlFor="photos"
                        className="flex items-center justify-center px-4 py-2 bg-[#3983fb] text-white font-bold rounded-lg cursor-pointer hover:bg-[#0b101a] hover:text-[#3983fb] hover:shadow-lg transition-all duration-300 ease-in-out"
                      >
                        {pets[0].photos.length > 0
                          ? `${pets[0].photos.length} file(s) selected`
                          : "Choose Files"}
                      </label>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="isPublic"
                      className="block text-sm font-semibold text-[#9ea4b0] mb-1"
                    >
                      Visibility
                    </label>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="isPublic"
                        name="isPublic"
                        checked={pets[0].isPublic}
                        onChange={togglePublic}
                        className="h-5 w-5 text-[#3983fb] border border-[#4f545c] rounded focus:ring-[#3983fb] transition duration-150 ease-in-out"
                      />
                      <label
                        htmlFor="isPublic"
                        className="ml-2 text-sm text-[#9ea4b0]"
                      >
                        Make photos public
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="additionalInfo"
                    className="block text-sm font-semibold text-[#9ea4b0] mb-1"
                  >
                    Additional Information
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    className="w-full p-3 border border-[#4f545c] rounded-lg bg-[#2b2f3a] text-[#fefefe] focus:border-[#3983fb] focus:ring-[#3983fb] outline-none transition duration-150 ease-in-out"
                    placeholder="Enter any additional information about your pet"
                    rows="4"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#3983fb] text-white font-bold rounded-lg hover:bg-[#0b101a] hover:text-[#3983fb] hover:shadow-lg transition-all duration-300 ease-in-out"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
