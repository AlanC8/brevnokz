import React from "react";
import { FaUser, FaRoad, FaTree, FaClock } from "react-icons/fa";
import Image from "next/image";
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('./MapComponent'), { ssr: false });

interface ReportProps {
  userImage: string;
  userName: string;
  date: string;
  distance: string;
  planted: string;
  time: string;
}

const ReportCard: React.FC<ReportProps> = ({
  userImage,
  userName,
  date,
  distance,
  planted,
  time,
}) => {
  return (
    <div className="bg-gray-50 rounded-lg shadow-lg p-6 mb-6">
      <div className="bg-white p-5 rounded-lg shadow-inner">
        <div className="flex items-center mb-5">
          <Image
            src={userImage}
            alt="User"
            className="w-16 h-16 rounded-full border-2 border-gray-300 mr-4"
            width={64} // Укажите ширину
            height={64} // Укажите высоту
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-700">{userName}</h3>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
        <div className="mb-5">
          <h4 className="text-lg font-bold text-gray-800 mb-2">Название цели: Топ 10</h4>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center">
              <FaRoad className="text-gray-500 mr-2" />
              <div>
                <p className="text-xs text-gray-500">Расстояние</p>
                <p className="font-bold text-md text-gray-700">{distance}</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaTree className="text-gray-500 mr-2" />
              <div>
                <p className="text-xs text-gray-500">Посажено</p>
                <p className="font-bold text-lg text-gray-700">{planted}</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaClock className="text-gray-500 mr-2" />
              <div>
                <p className="text-xs text-gray-500">Время</p>
                <p className="font-bold text-lg text-gray-700">{time}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden border border-gray-300" style={{ height: '200px' }}>
          <MapComponent />
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
