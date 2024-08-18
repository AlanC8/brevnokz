"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { User } from "../leaderboards/page";
import { UserService } from "../services/UserService";

const Navigation: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [logged, setLogged] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [showImage, setShowImage] = useState<boolean>(false);

  const getUser = async () => {
    try {
      const response = await UserService.getInstance().userInfo();
      setUser(response);
    } catch (error) {
      console.error("Error fetching user data:", error);
      localStorage.removeItem("access");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const access = localStorage.getItem("access");
      if (access) {
        getUser();
        setLogged(true);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access");
    setUser(null);
    setLogged(false);
    window.location.href = "/auth/login";
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleImage = () => {
    setShowImage(!showImage);
  };

  return (
    <>
      <header className="flex items-center justify-between bg-customGreen h-[64px] px-5">
        <span
          onClick={toggleImage}
          className="text-white font-bold text-lg cursor-pointer"
        >
          BrevnoKz
        </span>
        <ul className="flex gap-5 items-center">
          <li>
            <img
              src="/icons/notification.svg"
              alt="Notifications"
              className="h-6 w-6"
            />
          </li>
          {logged ? (
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="text-white font-semibold focus:outline-none"
              >
                {user?.username}
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                  <p className="px-4 py-2 text-gray-700">
                    Привет, {user?.username}!
                  </p>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Выйти
                  </button>
                </div>
              )}
            </li>
          ) : (
            <li>
              <Link href={"/auth/login"} className="text-white font-semibold">
                Вход
              </Link>
            </li>
          )}
        </ul>
      </header>

      {showImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src="/map-almaty.jpg"
              alt="Map"
              className="max-w-full max-h-full"
            />
            <button
              onClick={toggleImage}
              className="absolute top-2 right-2 bg-white text-black rounded-full p-2"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
