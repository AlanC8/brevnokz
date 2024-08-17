import React from "react";
import ReportCard from "./components/ReportCard";
import WeeklyReport from "./components/WeeklyReport";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <WeeklyReport
        distance="2,92 км"
        planted="512 шт"
        time="5мин. 25сек."
      />
      <ReportCard
        userImage="https://sch41mur.gosuslugi.ru/netcat_files/22/1414/uchenik2.jpg"
        userName="Altair Zhambyl"
        date="20 июня 2024 г. в 14:21"
        distance="2,92 км"
        planted="512 шт"
        time="5мин. 25сек."
      />
      <ReportCard
        userImage="https://sch41mur.gosuslugi.ru/netcat_files/22/1414/uchenik2.jpg"
        userName="Altair Zhambyl"
        date="20 июня 2024 г. в 14:21"
        distance="2,92 км"
        planted="512 шт"
        time="5мин. 25сек."
      />
      <ReportCard
        userImage="https://sch41mur.gosuslugi.ru/netcat_files/22/1414/uchenik2.jpg"
        userName="Altair Zhambyl"
        date="20 июня 2024 г. в 14:21"
        distance="2,92 км"
        planted="512 шт"
        time="5мин. 25сек."
      />
    </div>
  );
}
