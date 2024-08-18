"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import Image from 'next/image';

// eventsData.ts
const eventsData: Array<{
    id: number;
    imageUrl: string;
    title: string;
  }> = [
    {
      id: 1,
      imageUrl: "https://tengrinews.kz/userdata/opinion/opinion_982/aee2c08be93a1d2302841409ea474590.JPG",
      title: "Возможность набрать очки",
    },
    {
      id: 2,
      imageUrl: "https://tengrinews.kz/userdata/opinion/opinion_982/aee2c08be93a1d2302841409ea474590.JPG",
      title: "Возможность набрать очки",
    },
    {
      id: 3,
      imageUrl: "https://tengrinews.kz/userdata/opinion/opinion_982/aee2c08be93a1d2302841409ea474590.JPG",
      title: "Возможность набрать очки",
    },
  ];
  

const Events = () => {
    const router = useRouter();
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Ивенты</h1>
      <div className="space-y-4">
        {eventsData.map((event) => (
          <div onClick={() => router.push(`/events/${event.id}`)} key={event.id} className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
              <h2 className="text-lg font-semibold text-white drop-shadow-md">{event.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
