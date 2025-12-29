import React from "react";

const Colors = () => {
  const data = [
    { id: 1, english: "White", korean: "흰색", talafuz: "huin-saek" },
    { id: 2, english: "Black", korean: "검은색", talafuz: "geomeun-saek" },
    { id: 3, english: "Red", korean: "빨간색", talafuz: "ppalgan-saek" },
    { id: 4, english: "Blue", korean: "파란색", talafuz: "paran-saek" },
    { id: 5, english: "Green", korean: "초록색", talafuz: "chorok-saek" },
    { id: 6, english: "Yellow", korean: "노란색", talafuz: "noran-saek" },
    { id: 7, english: "Orange", korean: "주황색", talafuz: "juhwang-saek" },
    { id: 8, english: "Pink", korean: "분홍색", talafuz: "bunhong-saek" },
    { id: 9, english: "Dark Red (Maroon)", korean: "자주색", talafuz: "jaju-saek" },
    {
      id: 10,
      english: "Sky Blue",
      korean: "하늘색",
      talafuz: "haneul-saek",
    },
    { id: 11, english: "Gray", korean: "회색", talafuz: "hwoe-saek" },
    { id: 12, english: "Brown", korean: "갈색", talafuz: "gal-saek" },
    { id: 13, english: "Gold", korean: "금색", talafuz: "geum-saek" },
    { id: 14, english: "Silver", korean: "은색", talafuz: "eun-saek" },
    { id: 15, english: "Beige", korean: "베이지색", talafuz: "beiji-saek" },
    { id: 16, english: "Light Green", korean: "연두색", talafuz: "yeondu-saek" },
    {
      id: 17,
      english: "Dark Green",
      korean: "진초록색",
      talafuz: "jin-chorok-saek",
    },
    {
      id: 18,
      english: "Light Pink",
      korean: "연분홍색",
      talafuz: "yeon-bunhong-saek",
    },
    { id: 19, english: "Purple", korean: "보라색", talafuz: "bora-saek" },
    {
      id: 20,
      english: "Light Blue",
      korean: "연파란색",
      talafuz: "yeon-paran-saek",
    },
    {
      id: 21,
      english: "Dark Blue",
      korean: "진파란색",
      talafuz: "jin-paran-saek",
    },
    {
      id: 22,
      english: "Neon Green",
      korean: "네온 초록색",
      talafuz: "neon chorok-saek",
    },
    {
      id: 23,
      english: "Skin Tone",
      korean: "살색",
      talafuz: "sal-saek",
    },
    { id: 24, english: "Cream", korean: "크림색", talafuz: "keurim-saek" },
    { id: 25, english: "Coffee Brown", korean: "커피색", talafuz: "keopi-saek" },
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
            <tr
              key={item.id}
              className="hover:bg-gray-100 transition-all active:bg-gray-200"
            >
              <td className="border px-4 py-2">
                {item.id}. {item.english}
              </td>
              <td className="border px-4 py-2">{item.korean}</td>
              <td className="border px-4 py-2">{item.talafuz}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Colors;
