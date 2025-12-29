import React from "react";

const Weekdays = () => {
  const data = [
    { id: 1, en: "Monday", kr: "월요일", talaffuz: "wol-yo-il" },
    { id: 2, en: "Tuesday", kr: "화요일", talaffuz: "hwa-yo-il" },
    { id: 3, en: "Wednesday", kr: "수요일", talaffuz: "su-yo-il" },
    { id: 4, en: "Thursday", kr: "목요일", talaffuz: "mok-yo-il" },
    { id: 5, en: "Friday", kr: "금요일", talaffuz: "geum-yo-il" },
    { id: 6, en: "Saturday", kr: "토요일", talaffuz: "to-yo-il" },
    { id: 7, en: "Sunday", kr: "일요일", talaffuz: "il-yo-il" },
  ];

  return (
    <div className="overflow-x-auto px-4 py-2">
      <table className="min-w-full border border-gray-400 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-center">English</th>
            <th className="border px-4 py-2 text-center">Korean</th>
            <th className="border px-4 py-2 text-center">Pronunciation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100 transition-all active:bg-gray-200">
              <td className="border px-4 py-2">{item.id}. {item.en}</td>
              <td className="border px-4 py-2">{item.kr}</td>
              <td className="border px-4 py-2">{item.talaffuz}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Weekdays;
