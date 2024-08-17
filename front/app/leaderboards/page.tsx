export default function Home() {
    return <div className="flex flex-col justify-center">
      <div className="title text-center font-bold text-2xl p-5">Лучшие 20 - Алматы</div>
      <div className="m-auto flex flex-col gap-3">
        <div className="flex bg-gray-200 rounded-md p-5 gap-7 items-center px-8">
            <div className="relative inline-block">
            {/* Аватар */}
                <img
                    src='avatar.png'
                    alt="Avatar"
                    className="w-18 h-18 rounded-full" width='50px'
                />

                {/* Уровень */}
                <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    5
                </div>
            </div>
            <div className="flex gap-6">
                <div className="inf-1 flex flex-col">
                    <span className="text-xs text-gray-600 leading-none mb-1">
                        Расстояние
                    </span>
                    <span className="text-md text-gray-800 font-semibold leading-none">
                        1 км
                    </span>
                </div>
                <div className="inf-2 flex flex-col">
                    <span className="text-xs text-gray-600 leading-none mb-1">
                        Посажено
                    </span>
                    <span className="text-md text-gray-800 font-semibold leading-none">
                        512 шт
                    </span>
                </div>
                <div className="inf-3 flex flex-col">
                    <span className="text-xs text-gray-600 leading-none mb-1">
                        Время
                    </span>
                    <span className="text-md text-gray-800 font-semibold leading-none">
                        5 мин
                    </span>
                </div>
            </div>
        </div>
        <div className="flex bg-gray-200 rounded-md p-5 m-auto gap-7 items-center px-8">
            <div className="relative inline-block">
            {/* Аватар */}
                <img
                    src='avatar.png'
                    alt="Avatar"
                    className="w-18 h-18 rounded-full" width='50px'
                />

                {/* Уровень */}
                <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    5
                </div>
            </div>
            <div className="flex gap-6">
                <div className="inf-1 flex flex-col">
                    <span className="text-xs text-gray-600 leading-none mb-1">
                        Расстояние
                    </span>
                    <span className="text-md text-gray-800 font-semibold leading-none">
                        1 км
                    </span>
                </div>
                <div className="inf-2 flex flex-col">
                    <span className="text-xs text-gray-600 leading-none mb-1">
                        Посажено
                    </span>
                    <span className="text-md text-gray-800 font-semibold leading-none">
                        512 шт
                    </span>
                </div>
                <div className="inf-3 flex flex-col">
                    <span className="text-xs text-gray-600 leading-none mb-1">
                        Время
                    </span>
                    <span className="text-md text-gray-800 font-semibold leading-none">
                        5 мин
                    </span>
                </div>
            </div>
        </div>
        <div className="flex bg-gray-200 rounded-md p-5 m-auto gap-7 items-center px-8">
            <div className="relative inline-block">
            {/* Аватар */}
                <img
                    src='avatar.png'
                    alt="Avatar"
                    className="w-18 h-18 rounded-full" width='50px'
                />

                {/* Уровень */}
                <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    5
                </div>
            </div>
            <div className="flex gap-6">
                <div className="inf-1 flex flex-col">
                    <span className="text-xs text-gray-600 leading-none mb-1">
                        Расстояние
                    </span>
                    <span className="text-md text-gray-800 font-semibold leading-none">
                        1 км
                    </span>
                </div>
                <div className="inf-2 flex flex-col">
                    <span className="text-xs text-gray-600 leading-none mb-1">
                        Посажено
                    </span>
                    <span className="text-md text-gray-800 font-semibold leading-none">
                        512 шт
                    </span>
                </div>
                <div className="inf-3 flex flex-col">
                    <span className="text-xs text-gray-600 leading-none mb-1">
                        Время
                    </span>
                    <span className="text-md text-gray-800 font-semibold leading-none">
                        5 мин
                    </span>
                </div>
            </div>
        </div>
      </div>
    </div>;
  }
  