import React from "react";

const Months = () => {
  const data = [
    { id: 1, en: "January", kr: "하나월", talaffuz: "hana-wol" },
    { id: 2, en: "February", kr: "둘월", talaffuz: "dul-wol" },
    { id: 3, en: "March", kr: "셋월", talaffuz: "set-wol" },
    { id: 4, en: "April", kr: "넷월", talaffuz: "net-wol" },
    { id: 5, en: "May", kr: "다섯월", talaffuz: "daseot-wol" },
    { id: 6, en: "June", kr: "여섯월", talaffuz: "yeoseot-wol" },
    { id: 7, en: "July", kr: "일곱월", talaffuz: "ilgop-wol" },
    { id: 8, en: "August", kr: "여덟월", talaffuz: "yeodeol-wol" },
    { id: 9, en: "September", kr: "아홉월", talaffuz: "ahop-wol" },
    { id: 10, en: "October", kr: "열월", talaffuz: "yeol-wol" },
    { id: 11, en: "November", kr: "열하나월", talaffuz: "yeol-hana-wol" },
    { id: 12, en: "December", kr: "열둘월", talaffuz: "yeol-dul-wol" },
  ];

  return (
    <div className="overflow-x-auto px-4 py-2">
      <table className="min-w-full border border-gray-400 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-center">English</th>
            <th className="border px-4 py-2 text-center">
              Korean (hana, dul...)
            </th>
            <th className="border px-4 py-2 text-center">Pronunciation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="hover:bg-gray-100 transition-all active:bg-gray-200"
            >
              <td className="border px-4 py-2">
                {item.id}. {item.en}
              </td>
              <td className="border px-4 py-2">{item.kr}</td>
              <td className="border px-4 py-2">{item.talaffuz}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Months;
