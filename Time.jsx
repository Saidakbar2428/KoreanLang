import React from "react";

const Time = () => {
  const data = [
    { id: 1, en: "What time is it?", kr: "지금 몇 시예요?", talafuz: "jigeum myeot siyeyo?" },
    { id: 2, en: "It is ... o'clock now", kr: "지금 ... 시예요", talafuz: "jigeum ... siyeyo" },
    { id: 3, en: "It is 1:00 now", kr: "지금 한 시예요", talafuz: "jigeum han siyeyo" },
    { id: 4, en: "It is 11:00 now", kr: "지금 열한 시예요", talafuz: "jigeum yeolhan siyeyo" },
    { id: 5, en: "It is 3:30 now", kr: "지금 세 시 삼십 분이에요", talafuz: "jigeum se shi samship bun-ieyo" },
    { id: 6, en: "It is 7:15 now", kr: "지금 일곱 시 십오 분이에요", talafuz: "jigeum ilgop shi sibo bun-ieyo" },
    { id: 7, en: "Morning", kr: "아침", talafuz: "achim" },
    { id: 8, en: "Noon", kr: "점심", talafuz: "jeomsim" },
    { id: 9, en: "Evening", kr: "저녁", talafuz: "jeonyeok" },
    { id: 10, en: "Today", kr: "오늘", talafuz: "oneul" },
    { id: 11, en: "Yesterday", kr: "어제", talafuz: "eoje" },
    { id: 12, en: "Tomorrow", kr: "내일", talafuz: "naeil" },
    { id: 13, en: "Hour", kr: "시", talafuz: "shi" },
    { id: 14, en: "Minute", kr: "분", talafuz: "bun" },
    { id: 15, en: "Second", kr: "초", talafuz: "cho" },
    { id: 16, en: "Year", kr: "년", talafuz: "nyeon" },
    { id: 17, en: "Month", kr: "월", talafuz: "wol" },
    { id: 18, en: "Week", kr: "주", talafuz: "ju" },
    { id: 19, en: "Century", kr: "세기", talafuz: "segi" },
    { id: 20, en: "1:15 (quarter past 1)", kr: "한 시 십오 분", talafuz: "han shi sibo bun (chorak o‘tdi)" },
    { id: 21, en: "3:30 (half past 3)", kr: "세 시 반", talafuz: "se shi ban (yarim)" },
    { id: 22, en: "5:45 (quarter to 6)", kr: "다섯 시 사십오 분", talafuz: "daseot shi sasibo bun (chorak qoldi)" },
    { id: 23, en: "11:30", kr: "열한 시 반", talafuz: "yeolhan shi ban" },
    { id: 24, en: "17:30 (half past 5)", kr: "열일곱 시 반", talafuz: "yeolilgop shi ban" },
    { id: 25, en: "12:15", kr: "열두 시 십오 분", talafuz: "yeoldu shi sibo bun" },
    { id: 26, en: "7:45", kr: "일곱 시 사십오 분", talafuz: "ilgop shi sasibo bun" },
    { id: 27, en: "Today's date", kr: "오늘 날짜", talafuz: "oneul naljja" },
    { id: 28, en: "Year", kr: "년", talafuz: "nyeon" },
    { id: 29, en: "Month", kr: "월", talafuz: "wol" },
    { id: 30, en: "Day", kr: "일", talafuz: "il" },
    { id: 31, en: "July 5, 2025", kr: "2025년 7월 5일", talafuz: "i-cheon-i-sib-o nyeon chil wol o il" },
    { id: 32, en: "When is your birthday?", kr: "생일이 언제예요?", talafuz: "saengil-i eonje-yeyo?" },
    { id: 33, en: "My birthday is...", kr: "제 생일은 ...이에요", talafuz: "je saengil-eun ... ieyo" },
    { id: 34, en: "Happy birthday!", kr: "생일 축하합니다!", talafuz: "saengil chukha-hamnida!" },
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
            <tr key={item.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{item.id}. {item.en}</td>
              <td className="border px-4 py-2">{item.kr}</td>
              <td className="border px-4 py-2">{item.talafuz}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Time;
