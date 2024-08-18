"use client"
import { useEffect, useState } from "react";
import apiClient from "../services/Interceptors";
import Image from "next/image";

// Определяем интерфейс для пользователя
export interface User {
    _id: string;
    email: string;
    username: string;
    password: string;
    city: string;
    treeCount: number;
    icon: string;
    bonus: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export default function LeaderBoard() {
    const [users, setUsers] = useState<User[]>([]);

    const getUsers = async () => {
        const response = await apiClient.get("/api/v1/users");
        const sortedUsers = response.data.sort((a: User, b: User) => b.treeCount - a.treeCount);
        setUsers(sortedUsers);
    };

    useEffect(() => {
        if(window !== undefined){
            getUsers();
        }
    }, []);

    return (
        <div className="flex flex-col justify-center">
            <div className="title text-center font-bold text-2xl p-5 text-gray-900">Лучшие 20 - Казахстан</div>
            <div className="m-auto flex flex-col gap-4 w-full max-w-md">
                {users.map((user) => (
                    <div key={user._id} className="flex mx-4 bg-white rounded-lg shadow-lg p-4 items-center">
                        <div className="relative">
                            <Image
                                src={'/avatar.png'}
                                alt="Avatar"
                                className="w-14 h-14 rounded-full"
                            />
                            <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                                {Math.floor(user.treeCount / 10)}
                            </div>
                        </div>
                        <div className="ml-4 flex-1">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold text-gray-900">{user.username}</h3>
                                <span className="text-xs text-gray-500">{user.city}</span>
                            </div>
                            <div className="mt-2 grid grid-cols-3 gap-4">
                                <div className="flex flex-col items-center">
                                    <span className="text-xs text-gray-600">Посажено</span>
                                    <span className="text-md text-gray-800 font-semibold">{user.treeCount} шт</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-xs text-gray-600">Бонусы</span>
                                    <span className="text-md text-gray-800 font-semibold">{user.bonus}</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-xs text-gray-600">Уровень</span>
                                    <span className="text-md text-gray-800 font-semibold">{Math.floor(user.treeCount / 10)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
