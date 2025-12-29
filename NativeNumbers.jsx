// NativeNumbers.jsx
import React from "react";

const native = [
  { en: "1", kr: "하나", tr: "hana" },
  { en: "2", kr: "둘", tr: "dul" },
  { en: "3", kr: "셋", tr: "set" },
  { en: "4", kr: "넷", tr: "net" },
  { en: "5", kr: "다섯", tr: "daseot" },
  { en: "6", kr: "여섯", tr: "yeoseot" },
  { en: "7", kr: "일곱", tr: "ilgop" },
  { en: "8", kr: "여덟", tr: "yeodeol" },
  { en: "9", kr: "아홉", tr: "ahop" },
  { en: "10", kr: "열", tr: "yeol" },
  { en: "20", kr: "스물", tr: "seumul" },
  { en: "30", kr: "서른", tr: "seoreun" },
  { en: "40", kr: "마흔", tr: "maheun" },
  { en: "50", kr: "쉰", tr: "shwin" },
  { en: "60", kr: "예순", tr: "yesun" },
  { en: "70", kr: "일흔", tr: "ilheun" },
  { en: "80", kr: "여든", tr: "yeodeun" },
  { en: "90", kr: "아흔", tr: "aheun" },
  { en: "100", kr: "온", tr: "on" },
  { en: "200", kr: "온둘", tr: "on-dul" },
  { en: "300", kr: "온셋", tr: "on-set" },
  { en: "400", kr: "온넷", tr: "on-net" },
  { en: "500", kr: "온다섯", tr: "on-daseot" },
  { en: "600", kr: "온여섯", tr: "on-yeoseot" },
  { en: "700", kr: "온일곱", tr: "on-ilgop" },
  { en: "800", kr: "온여덟", tr: "on-yeodeol" },
  { en: "900", kr: "온아홉", tr: "on-ahop" },
  { en: "1000", kr: "천", tr: "cheon" }
];

const NativeNumbers = () => {
  return (
    <div className="p-4">
      <table className="min-w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-2 py-1">English</th>
            <th className="border px-2 py-1">Korean</th>
            <th className="border px-2 py-1">Pronunciation</th>
          </tr>
        </thead>
        <tbody>
          {native.map((n, i) => (
            <tr key={i} className="hover:bg-gray-50">
              <td className="border px-2 py-1">{n.en}</td>
              <td className="border px-2 py-1">{n.kr}</td>
              <td className="border px-2 py-1">{n.tr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NativeNumbers;
