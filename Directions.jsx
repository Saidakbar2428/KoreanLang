import React from 'react'

const Directions = () => {
  const data = [
    { id: 1, en: "Where is it?", kr: "어디예요?", talafuz: "eodiyeyo?" },
    { id: 2, en: "I am lost", kr: "길을 잃었어요", talafuz: "gireul ilheosseoyo" },
    { id: 3, en: "How do I get here?", kr: "여기 어떻게 가요?", talafuz: "yeogi eotteoke gayo?" },
    { id: 4, en: "Turn left", kr: "왼쪽으로 가세요", talafuz: "oenjjogeuro gaseyo" },
    { id: 5, en: "Turn right", kr: "오른쪽으로 가세요", talafuz: "oreunjjogeuro gaseyo" },
    { id: 6, en: "Go straight", kr: "쭉 가세요", talafuz: "jjuk gaseyo" },
    { id: 7, en: "Is it nearby?", kr: "가까워요?", talafuz: "gakkawoyo?" },
    { id: 8, en: "Can you help me?", kr: "도와줄 수 있어요?", talafuz: "dowajul su isseoyo?" },
    { id: 9, en: "Where is the taxi?", kr: "택시 어디예요?", talafuz: "taeksi eodiyeyo?" },
    { id: 10, en: "How do I get to the station?", kr: "역에 어떻게 가요?", talafuz: "yeoge eotteoke gayo?" },
  ]

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
          {data.map(item => (
            <tr key={item.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{item.id}. {item.en}</td>
              <td className="border px-4 py-2">{item.kr}</td>
              <td className="border px-4 py-2">{item.talafuz}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Directions
