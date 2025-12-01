'use client';

import { Bus, Clock, MapPin, Banknote, ArrowRight, Send } from 'lucide-react';
import { useState } from 'react';

const marmarToDashti = [
  {
    name: 'Мармар',
    times1: [
      '08:00',
      '08:30',
      '09:00',
      '09:30',
      '10:00',
      '10:30',
      '11:00',
      '11:30',
      '12:00',
      '12:30',
    ],
    times2: [
      '13:00',
      '13:30',
      '14:00',
      '14:30',
      '15:00',
      '15:30',
      '16:00',
      '16:30',
      '17:00',
      '17:30',
    ],
  },
  {
    name: 'Малихонов',
    times1: [
      '08:03',
      '08:33',
      '09:03',
      '09:33',
      '10:03',
      '10:33',
      '11:03',
      '11:33',
      '12:03',
      '12:33',
    ],
    times2: [
      '13:03',
      '13:33',
      '14:03',
      '14:33',
      '15:03',
      '15:33',
      '16:03',
      '16:33',
      '17:03',
      '17:33',
    ],
  },
  {
    name: 'Бобур Шералиев',
    times1: [
      '08:05',
      '08:35',
      '09:05',
      '09:35',
      '10:05',
      '10:35',
      '11:05',
      '11:35',
      '12:05',
      '12:35',
    ],
    times2: [
      '13:05',
      '13:35',
      '14:05',
      '14:35',
      '15:05',
      '15:35',
      '16:05',
      '16:35',
      '17:05',
      '17:35',
    ],
  },
  {
    name: '69-мактаб',
    times1: [
      '08:07',
      '08:37',
      '09:07',
      '09:37',
      '10:07',
      '10:37',
      '11:07',
      '11:37',
      '12:07',
      '12:37',
    ],
    times2: [
      '13:07',
      '13:37',
      '14:07',
      '14:37',
      '15:07',
      '15:37',
      '16:07',
      '16:37',
      '17:07',
      '17:37',
    ],
  },
  {
    name: 'Шодиев Зикриё',
    times1: [
      '08:09',
      '08:39',
      '09:09',
      '09:39',
      '10:09',
      '10:39',
      '11:09',
      '11:39',
      '12:09',
      '12:39',
    ],
    times2: [
      '13:09',
      '13:39',
      '14:09',
      '14:39',
      '15:09',
      '15:39',
      '16:09',
      '16:39',
      '17:09',
      '17:39',
    ],
  },
  {
    name: 'Сужина-Марказ',
    times1: [
      '08:12',
      '08:42',
      '09:12',
      '09:42',
      '10:12',
      '10:42',
      '11:12',
      '11:42',
      '12:12',
      '12:42',
    ],
    times2: [
      '13:12',
      '13:42',
      '14:12',
      '14:42',
      '15:12',
      '15:42',
      '16:12',
      '16:42',
      '17:12',
      '17:42',
    ],
  },
  {
    name: 'Беликсой',
    times1: [
      '08:20',
      '08:50',
      '09:20',
      '09:50',
      '10:20',
      '10:50',
      '11:20',
      '11:50',
      '12:20',
      '12:50',
    ],
    times2: [
      '13:20',
      '13:50',
      '14:20',
      '14:50',
      '15:20',
      '15:50',
      '16:20',
      '16:50',
      '17:20',
      '17:50',
    ],
  },
  {
    name: 'Даштималла',
    times1: [
      '08:30',
      '09:00',
      '09:30',
      '10:00',
      '10:30',
      '11:00',
      '11:30',
      '12:00',
      '12:30',
      '13:00',
    ],
    times2: [
      '13:30',
      '14:00',
      '14:30',
      '15:00',
      '15:30',
      '16:00',
      '16:30',
      '17:00',
      '17:30',
      '18:00',
    ],
  },
];

const dashtiToMarmar = [
  {
    name: 'Даштималла',
    times1: [
      '08:30',
      '09:00',
      '09:30',
      '10:00',
      '10:30',
      '11:00',
      '11:30',
      '12:00',
      '12:30',
    ],
    times2: [
      '13:00',
      '13:30',
      '14:00',
      '14:30',
      '15:00',
      '15:30',
      '16:00',
      '16:30',
      '17:00',
    ],
  },
  {
    name: 'Беликсой',
    times1: [
      '08:35',
      '09:05',
      '09:35',
      '10:05',
      '10:35',
      '11:05',
      '11:35',
      '12:05',
      '12:35',
    ],
    times2: [
      '13:05',
      '13:35',
      '14:05',
      '14:35',
      '15:05',
      '15:35',
      '16:05',
      '16:35',
      '17:05',
    ],
  },
  {
    name: 'Сужина-Марказ',
    times1: [
      '08:40',
      '09:10',
      '09:40',
      '10:10',
      '10:40',
      '11:10',
      '11:40',
      '12:10',
      '12:40',
    ],
    times2: [
      '13:10',
      '13:40',
      '14:10',
      '14:40',
      '15:10',
      '15:40',
      '16:10',
      '16:40',
      '17:10',
    ],
  },
  {
    name: 'Шодиев Зикриё',
    times1: [
      '08:45',
      '09:15',
      '09:45',
      '10:15',
      '10:45',
      '11:15',
      '11:45',
      '12:15',
      '12:45',
    ],
    times2: [
      '13:15',
      '13:45',
      '14:15',
      '14:45',
      '15:15',
      '15:45',
      '16:15',
      '16:45',
      '17:15',
    ],
  },
  {
    name: '69-мактаб',
    times1: [
      '08:47',
      '09:17',
      '09:47',
      '10:17',
      '10:47',
      '11:17',
      '11:47',
      '12:17',
      '12:47',
    ],
    times2: [
      '13:17',
      '13:47',
      '14:17',
      '14:47',
      '15:17',
      '15:47',
      '16:17',
      '16:47',
      '17:17',
    ],
  },
  {
    name: 'Бобур Шералиев',
    times1: [
      '08:50',
      '09:20',
      '09:50',
      '10:20',
      '10:50',
      '11:20',
      '11:50',
      '12:20',
      '12:50',
    ],
    times2: [
      '13:20',
      '13:50',
      '14:20',
      '14:50',
      '15:20',
      '15:50',
      '16:20',
      '16:50',
      '17:20',
    ],
  },
  {
    name: 'Малихонов',
    times1: [
      '08:55',
      '09:25',
      '09:55',
      '10:25',
      '10:55',
      '11:25',
      '11:55',
      '12:25',
      '12:55',
    ],
    times2: [
      '13:25',
      '13:55',
      '14:25',
      '14:55',
      '15:25',
      '15:55',
      '16:25',
      '16:55',
      '17:25',
    ],
  },
  {
    name: 'Мармар',
    times1: [
      '09:00',
      '09:30',
      '10:00',
      '10:30',
      '11:00',
      '11:30',
      '12:00',
      '12:30',
      '13:00',
    ],
    times2: [
      '13:30',
      '14:00',
      '14:30',
      '15:00',
      '15:30',
      '16:00',
      '16:30',
      '17:00',
      '17:30',
    ],
  },
];

const prices = [
  { from: 'Мармар', to: 'Малихонов', price: '2' },
  { from: 'Мармар', to: 'Дашт', price: '3 ' },
  { from: 'Мармар', to: 'Марказ', price: '4 ' },
  { from: 'Мармар', to: 'Терешкова', price: '5 ' },
  { from: 'Мармар', to: 'Даштималла', price: '6 ' },
];

const pricesReverse = [
  { from: 'Даштималла', to: 'Терешкова', price: '2 ' },
  { from: 'Даштималла', to: 'Марказ', price: '3 ' },
  { from: 'Даштималла', to: '69-мактаб', price: '5 ' },
  { from: 'Даштималла', to: 'Бобур', price: '5 ' },
  { from: 'Даштималла', to: 'Мармар', price: '6 ' },
];

function StopCard({
  stop,
  idx,
  colorScheme,
}: {
  stop: (typeof marmarToDashti)[0];
  idx: number;
  colorScheme: 'blue' | 'emerald';
}) {
  const [expanded, setExpanded] = useState(false);
  const gradientFrom =
    colorScheme === 'blue' ? 'from-blue-500' : 'from-emerald-500';
  const gradientTo = colorScheme === 'blue' ? 'to-blue-600' : 'to-teal-600';
  const bgHover =
    colorScheme === 'blue' ? 'hover:bg-blue-50' : 'hover:bg-emerald-50';

  return (
    <div
      className={`rounded-2xl bg-white shadow-lg overflow-hidden transition-all duration-300 ${
        expanded ? 'ring-2 ring-blue-400' : ''
      }`}
      onClick={() => setExpanded(!expanded)}
    >
      <div
        className={`flex items-center gap-3 p-4 cursor-pointer ${bgHover} transition-colors`}
      >
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br ${gradientFrom} ${gradientTo} text-sm font-bold text-white shadow-lg`}
        >
          {idx + 1}
        </span>
        <span className="font-bold text-gray-800 text-lg">{stop.name}</span>
        <span
          className={`ml-auto text-xs font-medium ${
            expanded ? 'rotate-180' : ''
          } transition-transform`}
        >
          {expanded ? '▲' : '▼'}
        </span>
      </div>

      {expanded && (
        <div className="px-4 pb-4 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <div className="rounded-xl bg-linear-to-r from-emerald-50 to-green-50 p-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></span>
              <span className="text-xs font-bold text-emerald-700">
                1-СМЕНА (Тушгача)
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {stop.times1.map((time, i) => (
                <span
                  key={i}
                  className="rounded-lg bg-white px-2 py-1 text-xs font-semibold text-emerald-700 shadow-sm border border-emerald-200"
                >
                  {time}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-linear-to-r from-amber-50 to-orange-50 p-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-amber-500"></span>
              <span className="text-xs font-bold text-amber-700">
                2-СМЕНА (Тушдан кейин)
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {stop.times2.map((time, i) => (
                <span
                  key={i}
                  className="rounded-lg bg-white px-2 py-1 text-xs font-semibold text-amber-700 shadow-sm border border-amber-200"
                >
                  {time}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function BusSchedule() {
  return (
    <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
      <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-linear-to-r from-sky-500 via-blue-600 to-indigo-600 p-4 md:p-8 shadow-2xl">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="relative flex flex-col items-center justify-center gap-3 md:gap-4">
          <div className="rounded-2xl bg-white/20 p-3 backdrop-blur-sm">
            <Bus className="h-8 w-8 md:h-10 md:w-10 text-white" />
          </div>
          <div className="text-center">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-black tracking-tight text-white text-balance">
              СУЖИНА – МАРМАР – ДАШТИМАЛЛА
            </h1>
            <p className="mt-1 text-sm md:text-lg font-medium text-sky-100">
              ЙЎНАЛИШИ ЖАДВАЛИ
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:block overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-gray-200">
        <div className="bg-linear-to-r from-blue-600 to-blue-700 p-5">
          <div className="flex items-center justify-center gap-3">
            <div className="rounded-xl bg-white/20 p-2">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-xl font-bold text-white md:text-2xl">
              1. МАРМАРДАН → ДАШТИМАЛЛАГА
            </h2>
          </div>
          <div className="mt-3 flex items-center justify-center gap-2">
            <Clock className="h-5 w-5 text-blue-200" />
            <p className="font-medium text-blue-100">
              Иш вақти: 08:00 дан 17:30 гача
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-linear-to-r from-blue-50 to-sky-50">
                <th className="border-b-2 border-blue-200 p-4 text-left font-bold text-blue-900">
                  БЕКАТ НОМИ
                </th>
                <th className="border-b-2 border-blue-200 p-4 text-center font-bold text-blue-900">
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-emerald-700">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></span>
                    1-СМЕНА (Тушгача)
                  </span>
                </th>
                <th className="border-b-2 border-blue-200 p-4 text-center font-bold text-blue-900">
                  <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-amber-700">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-amber-500"></span>
                    2-СМЕНА (Тушдан кейин)
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {marmarToDashti.map((stop, idx) => (
                <tr
                  key={idx}
                  className={`transition-colors hover:bg-blue-50 ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                  }`}
                >
                  <td className="border-r border-blue-100 p-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-blue-600 text-sm font-bold text-white shadow-md">
                        {idx + 1}
                      </span>
                      <span className="font-semibold text-gray-800">
                        {stop.name}
                      </span>
                    </div>
                  </td>
                  <td className="border-r border-blue-100 p-4">
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {stop.times1.map((time, i) => (
                        <span
                          key={i}
                          className="rounded-lg bg-linear-to-r from-emerald-100 to-green-100 px-2.5 py-1 text-xs font-semibold text-emerald-700 shadow-sm"
                        >
                          {time}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {stop.times2.map((time, i) => (
                        <span
                          key={i}
                          className="rounded-lg bg-linear-to-r from-amber-100 to-orange-100 px-2.5 py-1 text-xs font-semibold text-amber-700 shadow-sm"
                        >
                          {time}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="md:hidden space-y-4">
        <div className="rounded-2xl bg-linear-to-r from-blue-600 to-blue-700 p-4 shadow-xl">
          <div className="flex items-center justify-center gap-2">
            <MapPin className="h-5 w-5 text-white" />
            <h2 className="text-lg font-bold text-white">
              1. МАРМАРДАН → ДАШТИМАЛЛАГА
            </h2>
          </div>
          <div className="mt-2 flex items-center justify-center gap-2">
            <Clock className="h-4 w-4 text-blue-200" />
            <p className="text-sm font-medium text-blue-100">08:00 - 17:30</p>
          </div>
        </div>

        <div className="space-y-3">
          {marmarToDashti.map((stop, idx) => (
            <StopCard key={idx} stop={stop} idx={idx} colorScheme="blue" />
          ))}
        </div>
      </div>

      <div className="hidden md:block overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-gray-200">
        <div className="bg-linear-to-r from-emerald-600 to-teal-600 p-5">
          <div className="flex items-center justify-center gap-3">
            <div className="rounded-xl bg-white/20 p-2">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-xl font-bold text-white md:text-2xl">
              2. ДАШТИМАЛЛАДАН → МАРМАРГА
            </h2>
          </div>
          <div className="mt-3 flex items-center justify-center gap-2">
            <Clock className="h-5 w-5 text-emerald-200" />
            <p className="font-medium text-emerald-100">
              Иш вақти: 08:30 дан 17:00 гача
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-linear-to-r from-emerald-50 to-teal-50">
                <th className="border-b-2 border-emerald-200 p-4 text-left font-bold text-emerald-900">
                  БЕКАТ НОМИ
                </th>
                <th className="border-b-2 border-emerald-200 p-4 text-center font-bold text-emerald-900">
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-emerald-700">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></span>
                    1-СМЕНА (Тушгача)
                  </span>
                </th>
                <th className="border-b-2 border-emerald-200 p-4 text-center font-bold text-emerald-900">
                  <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-amber-700">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-amber-500"></span>
                    2-СМЕНА (Тушдан кейин)
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {dashtiToMarmar.map((stop, idx) => (
                <tr
                  key={idx}
                  className={`transition-colors hover:bg-emerald-50 ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                  }`}
                >
                  <td className="border-r border-emerald-100 p-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-emerald-500 to-teal-600 text-sm font-bold text-white shadow-md">
                        {idx + 1}
                      </span>
                      <span className="font-semibold text-gray-800">
                        {stop.name}
                      </span>
                    </div>
                  </td>
                  <td className="border-r border-emerald-100 p-4">
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {stop.times1.map((time, i) => (
                        <span
                          key={i}
                          className="rounded-lg bg-linear-to-r from-emerald-100 to-green-100 px-2.5 py-1 text-xs font-semibold text-emerald-700 shadow-sm"
                        >
                          {time}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {stop.times2.map((time, i) => (
                        <span
                          key={i}
                          className="rounded-lg bg-linear-to-r from-amber-100 to-orange-100 px-2.5 py-1 text-xs font-semibold text-amber-700 shadow-sm"
                        >
                          {time}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="md:hidden space-y-4">
        <div className="rounded-2xl bg-linear-to-r from-emerald-600 to-teal-600 p-4 shadow-xl">
          <div className="flex items-center justify-center gap-2">
            <MapPin className="h-5 w-5 text-white" />
            <h2 className="text-lg font-bold text-white">
              2. ДАШТИМАЛЛАДАН → МАРМАРГА
            </h2>
          </div>
          <div className="mt-2 flex items-center justify-center gap-2">
            <Clock className="h-4 w-4 text-emerald-200" />
            <p className="text-sm font-medium text-emerald-100">
              08:30 - 17:00
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {dashtiToMarmar.map((stop, idx) => (
            <StopCard key={idx} stop={stop} idx={idx} colorScheme="emerald" />
          ))}
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl md:rounded-3xl bg-linear-to-br from-amber-400 via-yellow-400 to-orange-400 shadow-2xl">
        <div className="bg-black/10 p-4 md:p-5">
          <div className="flex items-center justify-center gap-2 md:gap-3">
            <div className="rounded-xl bg-white/30 p-2 backdrop-blur-sm">
              <Banknote className="h-6 w-6 md:h-8 md:w-8 text-amber-900" />
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-amber-900">
              НАРХНОМА
            </h2>
            <div className="rounded-xl bg-white/30 p-2 backdrop-blur-sm">
              <Banknote className="h-6 w-6 md:h-8 md:w-8 text-amber-900" />
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:gap-6 p-4 md:p-6 md:grid-cols-2">
          {/* Marmar -> Dashti Malla narxlari */}
          <div className="overflow-hidden rounded-2xl bg-white/95 shadow-xl backdrop-blur-sm">
            <div className="bg-linear-to-r from-blue-600 to-blue-700 px-4 py-3">
              <h3 className="text-center font-bold text-white">Мармардан</h3>
            </div>
            <div className="space-y-2 p-3 md:p-4">
              {prices.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-xl bg-linear-to-r from-blue-50 to-sky-50 p-2.5 md:p-3 transition-transform hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-1.5 md:gap-2 font-medium text-gray-700 text-sm md:text-base">
                    <span className="truncate max-w-[60px] md:max-w-none">
                      {item.from}
                    </span>
                    <ArrowRight className="h-3 w-3 md:h-4 md:w-4 text-blue-500 shrink-0" />
                    <span className="truncate max-w-[60px] md:max-w-none">
                      {item.to}
                    </span>
                  </div>
                  <span className="rounded-full bg-linear-to-r from-emerald-500 to-green-500 px-2.5 md:px-4 py-1 md:py-1.5 text-xs md:text-sm font-bold text-white shadow-md whitespace-nowrap">
                    {item.price} сомони
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Dashti Malla -> Marmar narxlari */}
          <div className="overflow-hidden rounded-2xl bg-white/95 shadow-xl backdrop-blur-sm">
            <div className="bg-linear-to-r from-emerald-600 to-teal-600 px-4 py-3">
              <h3 className="text-center font-bold text-white">
                Даштималладан
              </h3>
            </div>
            <div className="space-y-2 p-3 md:p-4">
              {pricesReverse.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-xl bg-linear-to-r from-emerald-50 to-teal-50 p-2.5 md:p-3 transition-transform hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-1.5 md:gap-2 font-medium text-gray-700 text-sm md:text-base">
                    <span className="truncate max-w-[60px] md:max-w-none">
                      {item.from}
                    </span>
                    <ArrowRight className="h-3 w-3 md:h-4 md:w-4 text-emerald-500 shrink-0" />
                    <span className="truncate max-w-[60px] md:max-w-none">
                      {item.to}
                    </span>
                  </div>
                  <span className="rounded-full bg-linear-to-r from-emerald-500 to-green-500 px-2.5 md:px-4 py-1 md:py-1.5 text-xs md:text-sm font-bold text-white shadow-md whitespace-nowrap">
                    {item.price} сомони
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-black/10 px-4 py-3 md:py-4 text-center">
          <p className="font-bold text-amber-900">Яхши сафар тилаймиз!</p>
        </div>
      </div>

      <footer className="rounded-2xl md:rounded-3xl bg-linear-to-r from-slate-800 to-slate-900 p-4 md:p-6 shadow-2xl">
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="text-sm text-slate-400">Powered by</p>
          <a
            href="https://t.me/dinmuhammad05"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full bg-linear-to-r from-sky-500 to-blue-600 px-5 py-2.5 font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-sky-500/25 hover:shadow-xl"
          >
            <Send className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            <span>Dinmuhammad</span>
          </a>
          <p className="text-xs text-slate-500 mt-1">
            Telegram orqali bog'lanish
          </p>
        </div>
      </footer>
    </div>
  );
}
