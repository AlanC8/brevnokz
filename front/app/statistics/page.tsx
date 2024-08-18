"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { UserService } from "../services/UserService";
import { useEffect, useState } from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { ChartTooltip } from "@/components/ui/chart";

const Modal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
        <h2 className="text-xl font-bold mb-4">Необходимо войти в аккаунт</h2>
        <p className="mb-4">Для того чтобы посмотреть свою статистику, пожалуйста, войдите в аккаунт.</p>
        <div className="flex justify-end">
          <Link href="/auth/login" className="bg-[#254D32] text-white py-2 px-4 rounded-md hover:bg-[#1a3a22]">
            Войти
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function Component() {
  const [user, setUser] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const getUser = async () => {
    try {
      const response = await UserService.getInstance().userInfo();
      if (!response) {
        setIsModalOpen(true);
      } else {
        setUser(response);
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
      setIsModalOpen(true);
    }
  };

  useEffect(() => {
    if(window !== undefined){
      getUser();
    }
  }, []);

  if (isModalOpen) {
    return <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  const currentLevel = Math.floor(user.treeCount / 10);
  const treesToNextLevel = 10 - (user.treeCount % 10);

  return (
    <div className="p-6 max-w-lg mx-auto">
      <Card className="shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center bg-[#254D32] p-4 sm:p-6">
          <Avatar>
            <AvatarImage src={user.icon || "/placeholder-user.jpg"} alt="User Avatar" />
            <AvatarFallback>🌳</AvatarFallback>
          </Avatar>
          <div className="ml-4 text-white">
            <h2 className="text-xl sm:text-2xl font-bold">{user.username}</h2>
            <p className="text-sm sm:text-base text-gray-200">{user.city}</p>
            <p className="text-sm sm:text-base text-gray-200">Email: {user.email}</p>
          </div>
        </div>
        <CardContent className="p-4 sm:p-6 bg-white">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <h3 className="text-sm sm:text-lg font-semibold text-gray-800">Посажено</h3>
              <p className="text-lg sm:text-xl font-bold text-[#254D32]">{user.treeCount} 🌳</p>
            </div>
            <div>
              <h3 className="text-sm sm:text-lg font-semibold text-gray-800">Уровень</h3>
              <p className="text-lg sm:text-xl font-bold text-[#254D32]">{currentLevel}</p>
            </div>
            <div>
              <h3 className="text-sm sm:text-lg font-semibold text-gray-800">До след. уровня</h3>
              <p className="text-lg sm:text-xl font-bold text-[#254D32]">{treesToNextLevel} 🌳</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="mt-6">
        <h3 className="text-center text-lg sm:text-xl font-bold text-gray-800 mb-2">Прогресс</h3>
        <Card className="shadow-md">
          <CardContent className="p-4 sm:p-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-lg sm:text-2xl font-bold">5</div>
                <p className="text-xs sm:text-sm text-gray-500">Посажено</p>
              </div>
              <div className="text-green-500 text-xs sm:text-sm font-semibold">12% ↑</div>
            </div>
            <div className="w-full h-[150px]">
              <LinechartChart />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function LinechartChart() {
  return (
    <div>
      <LineChart
        width={300}
        height={150}
        data={[
          { month: "January", desktop: 1 },
          { month: "February", desktop: 0 },
          { month: "March", desktop: 1 },
          { month: "April", desktop: 0 },
          { month: "May", desktop: 1 },
          { month: "June", desktop: 2 },
        ]}
        margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => value.slice(0, 3)} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Line dataKey="desktop" type="natural" stroke="#FFA500" strokeWidth={2} dot={false} />
      </LineChart>
    </div>
  );
}

function ChartTooltipContent({ payload, label }: any) {
  return (
    <div className="p-2 bg-white shadow rounded">
      <p className="text-sm font-semibold">{label}</p>
      <p className="text-sm text-gray-500">{payload?.[0]?.value} Users</p>
    </div>
  );
}
