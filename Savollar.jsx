import React from "react";

const Savollar = () => {
  const data = [
    { id: 1, en: "Who?", kr: "누구", pron: "nugu", note: "asks about a person" },
    { id: 2, en: "What?", kr: "뭐 / 무엇", pron: "mwo / mueot", note: "asks about a thing" },
    { id: 3, en: "Where?", kr: "어디", pron: "eodi", note: "asks about place" },
    { id: 4, en: "When?", kr: "언제", pron: "onje", note: "asks about time" },
    { id: 5, en: "How?", kr: "어떻게", pron: "eotteoke", note: "asks about method / way" },
    { id: 6, en: "How much? (amount)", kr: "얼마", pron: "eolma", note: "asks about money or quantity" },
    { id: 7, en: "How many? (number)", kr: "몇", pron: "myot", note: "asks about number / date" },
    { id: 8, en: "Why?", kr: "왜", pron: "wae", note: "asks about reason" },
    { id: 9, en: "To whom?", kr: "누구에게", pron: "nugu-ege", note: "direction to a person" },
    { id: 10, en: "For what?", kr: "뭐에", pron: "mwo-e", note: "for something" },
    { id: 11, en: "Which?", kr: "어느", pron: "eoneu", note: "used for choosing" },
    { id: 12, en: "From where?", kr: "어디서", pron: "eodiseo", note: "from a source / place" },
    { id: 13, en: "From whom?", kr: "누구에게서", pron: "nugu-egeseo", note: "from a person" },
  ];

  return (
    <div className="overflow-x-auto px-4 py-2">
      <h1 className="text-2xl font-bold mb-4 text-center">Question Words (의문사)</h1>
      <table className="min-w-full border border-gray-400 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">English</th>
            <th className="border px-4 py-2">Korean</th>
            <th className="border px-4 py-2">Pronunciation</th>
            <th className="border px-4 py-2">Note</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100 transition-all">
              <td className="border px-4 py-2">{item.en}</td>
              <td className="border px-4 py-2">{item.kr}</td>
              <td className="border px-4 py-2">{item.pron}</td>
              <td className="border px-4 py-2">{item.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Savollar;
