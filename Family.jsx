import React from "react";

const Family = () => {
  const data = [
    { id: 1, en: "Family", korean: "가족", talafuz: "gajok" },
    {
      id: 2,
      en: "Mother",
      korean: "어머니 / 엄마",
      talafuz: "eomeoni / eomma",
    },
    {
      id: 3,
      en: "Father",
      korean: "아버지 / 아빠",
      talafuz: "abeoji / appa",
    },
    { id: 4, en: "Grandmother", korean: "할머니", talafuz: "halmeoni" },
    { id: 5, en: "Grandfather", korean: "할아버지", talafuz: "harabeoji" },
    {
      id: 6,
      en: "Older brother (said by a male)",
      korean: "형",
      talafuz: "hyeong",
    },
    {
      id: 7,
      en: "Older brother (said by a female)",
      korean: "오빠",
      talafuz: "oppa",
    },
    {
      id: 8,
      en: "Older sister (said by a male)",
      korean: "누나",
      talafuz: "nuna",
    },
    {
      id: 9,
      en: "Older sister (said by a female)",
      korean: "언니",
      talafuz: "eonni",
    },
    {
      id: 10,
      en: "Younger brother",
      korean: "남동생",
      talafuz: "namdongsaeng",
    },
    {
      id: 11,
      en: "Younger sister",
      korean: "여동생",
      talafuz: "yeodongsaeng",
    },
    { id: 12, en: "Son", korean: "아들", talafuz: "adeul" },
    { id: 13, en: "Daughter", korean: "딸", talafuz: "ttal" },
    {
      id: 14,
      en: "Uncle (father’s or mother’s brother)",
      korean: "삼촌",
      talafuz: "samchon",
    },
    { id: 15, en: "Aunt (mother’s sister)", korean: "이모", talafuz: "imo" },
    { id: 16, en: "Aunt (father’s sister)", korean: "고모", talafuz: "gomo" },
    { id: 17, en: "Niece / Nephew", korean: "조카", talafuz: "joka" },
    { id: 18, en: "Husband", korean: "남편", talafuz: "nampyeon" },
    { id: 19, en: "Wife", korean: "아내", talafuz: "anae" },
    { id: 20, en: "Daughter-in-law", korean: "며느리", talafuz: "myeoneuri" },
    { id: 21, en: "Son-in-law", korean: "사위", talafuz: "sawi" },
    { id: 22, en: "Me / I", korean: "나 / 저", talafuz: "na / cho" },
    { id: 23, en: "You (informal)", korean: "너", talafuz: "neo" },
    {
      id: 24,
      en: "You (formal)",
      korean: "당신 / 선생님",
      talafuz: "dangsin / seonsaengnim",
    },
    { id: 25, en: "He", korean: "그", talafuz: "geu" },
    { id: 26, en: "She", korean: "그녀", talafuz: "geunyeo" },
    { id: 27, en: "We / Us", korean: "우리 / 저희", talafuz: "uri / chohyi" },
    { id: 28, en: "You all", korean: "여러분", talafuz: "yeoreobun" },
    { id: 29, en: "They", korean: "그들", talafuz: "geudeul" },
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
                {item.id}. {item.en}
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

export default Family;
