"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CirclesBackground from "@/components/background";

const User = () => {
    const [owner, setOwner] = useState(null);
    const [pets, setPets] = useState(["Buddy (Dog)", "Mittens (Cat)"]);

    useEffect(() => {
        const storedOwner = localStorage.getItem("ownerInfo");
        if (storedOwner) {
            setOwner(JSON.parse(storedOwner));
        }
    }, []);

    return (
        <>
            <CirclesBackground
                height={window.innerHeight+100}
            />
            <div className="min-h-screen flex flex-col bg-gradient-to-b from-black to-gray-900 text-white">
                <Navbar />
                <main className="flex flex-col md:flex-row p-6 space-x-0 md:space-x-6 z-10">
                    <div className="w-full md:w-1/4 bg-gray-800 p-4 rounded-lg shadow-lg mb-6 md:mb-0">
                        <h2 className="text-xl font-semibold mb-4">Recent Data</h2>
                        <ul className="space-y-4">
                            <li className="p-4 bg-gray-700 rounded-lg">Recent Adoption: Buddy</li>
                            <li className="p-4 bg-gray-700 rounded-lg">Recent Update: Mittens</li>
                        </ul>
                    </div>

                    <div className="w-full md:w-3/4 bg-gray-800 p-6 rounded-lg shadow-lg">
                        <div className="flex items-center mb-6">
                            <img
                                src="/animal.png"
                                alt="Profile"
                                className="rounded-full w-24 h-24 border-2 border-gray-700"
                            />
                            <div className="ml-4">
                                <h1 className="text-2xl font-bold">{owner ? owner.full_name : "Loading..."}</h1>
                                <p className="text-gray-400">{owner ? owner.email : ""}</p>
                                <p className="mt-1">Some bio about the pet owner goes here.</p>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-2xl font-semibold mb-4">Pets Registered</h2>
                            {pets.length > 0 ? (
                                <ul className="space-y-4">
                                    {pets.map((pet, index) => (
                                        <li key={index} className="p-4 bg-gray-700 rounded-lg">{pet}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-400">None</p>
                            )}
                            <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg transition duration-200">
                                <a href="/user/update">Update Pets</a>
                            </button>
                        </div>

                        {/* <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-4">Pet Equipments Accessed</h2>
                        <ul className="space-y-4">
                            <li className="p-4 bg-gray-700 rounded-lg">
                                <h3 className="font-semibold">Pet Bed</h3>
                                <p className="text-gray-400">Comfortable bed for your pet.</p>
                            </li>
                            <li className="p-4 bg-gray-700 rounded-lg">
                                <h3 className="font-semibold">Cat Tree</h3>
                                <p className="text-gray-400">Play area for your cat.</p>
                            </li>
                        </ul>
                    </div> */}

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Recent Activities</h2>
                            <div className="p-4 bg-gray-700 rounded-lg">
                                <p className="text-gray-400">No recent activity found.</p>
                                <div className="h-32 bg-gray-600 mt-2 rounded-lg"></div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default User;
