// SinoNumbers.jsx
import React from "react";

const sino = [
  // 1–10
  { en: "1", kr: "일", tr: "il" },
  { en: "2", kr: "이", tr: "i" },
  { en: "3", kr: "삼", tr: "sam" },
  { en: "4", kr: "사", tr: "sa" },
  { en: "5", kr: "오", tr: "o" },
  { en: "6", kr: "육", tr: "yuk" },
  { en: "7", kr: "칠", tr: "chil" },
  { en: "8", kr: "팔", tr: "pal" },
  { en: "9", kr: "구", tr: "gu" },
  { en: "10", kr: "십", tr: "ship" },

  // 20–90
  { en: "20", kr: "이십", tr: "i-ship" },
  { en: "30", kr: "삼십", tr: "sam-ship" },
  { en: "40", kr: "사십", tr: "sa-ship" },
  { en: "50", kr: "오십", tr: "o-ship" },
  { en: "60", kr: "육십", tr: "yuk-ship" },
  { en: "70", kr: "칠십", tr: "chil-ship" },
  { en: "80", kr: "팔십", tr: "pal-ship" },
  { en: "90", kr: "구십", tr: "gu-ship" },

  // 100–900
  { en: "100", kr: "백", tr: "baek" },
  { en: "200", kr: "이백", tr: "i-baek" },
  { en: "300", kr: "삼백", tr: "sam-baek" },
  { en: "400", kr: "사백", tr: "sa-baek" },
  { en: "500", kr: "오백", tr: "o-baek" },
  { en: "600", kr: "육백", tr: "yuk-baek" },
  { en: "700", kr: "칠백", tr: "chil-baek" },
  { en: "800", kr: "팔백", tr: "pal-baek" },
  { en: "900", kr: "구백", tr: "gu-baek" },

  // 1000–9000
  { en: "1000", kr: "천", tr: "cheon" },
  { en: "2000", kr: "이천", tr: "i-cheon" },
  { en: "3000", kr: "삼천", tr: "sam-cheon" },
  { en: "4000", kr: "사천", tr: "sa-cheon" },
  { en: "5000", kr: "오천", tr: "o-cheon" },
  { en: "6000", kr: "육천", tr: "yuk-cheon" },
  { en: "7000", kr: "칠천", tr: "chil-cheon" },
  { en: "8000", kr: "팔천", tr: "pal-cheon" },
  { en: "9000", kr: "구천", tr: "gu-cheon" },

  // 10,000–90,000
  { en: "10,000", kr: "만", tr: "man" },
  { en: "20,000", kr: "이만", tr: "i-man" },
  { en: "30,000", kr: "삼만", tr: "sam-man" },
  { en: "40,000", kr: "사만", tr: "sa-man" },
  { en: "50,000", kr: "오만", tr: "o-man" },
  { en: "60,000", kr: "육만", tr: "yuk-man" },
  { en: "70,000", kr: "칠만", tr: "chil-man" },
  { en: "80,000", kr: "팔만", tr: "pal-man" },
  { en: "90,000", kr: "구만", tr: "gu-man" },

  // 100,000–1,000,000
  { en: "100,000", kr: "십만", tr: "ship-man" },
  { en: "200,000", kr: "이십만", tr: "i-ship-man" },
  { en: "300,000", kr: "삼십만", tr: "sam-ship-man" },
  { en: "1,000,000", kr: "백만", tr: "baek-man" },
  { en: "10,000,000", kr: "천만", tr: "cheon-man" },
];

const SinoNumbers = () => {
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
          {sino.map((n, i) => (
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

export default SinoNumbers;
