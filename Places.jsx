import React from 'react'

const Places = () => {
  const data = [
    { id: 1, en: "Home", kr: "집", talafuz: "jip" },
    { id: 2, en: "School", kr: "학교", talafuz: "hakgyo" },
    { id: 3, en: "Shop", kr: "가게", talafuz: "gage" },
    { id: 4, en: "Restaurant", kr: "식당", talafuz: "shikdang" },
    { id: 5, en: "Park", kr: "공원", talafuz: "gongwon" },
    { id: 6, en: "Hospital", kr: "병원", talafuz: "byeongwon" },
    { id: 7, en: "Station", kr: "역", talafuz: "yeok" },
    { id: 8, en: "Mosque", kr: "모스크", talafuz: "moseukeu" },
    { id: 9, en: "Kindergarten", kr: "유치원", talafuz: "yuchiwon" },
    { id: 10, en: "Shopping mall", kr: "백화점", talafuz: "baekhwajeom" },
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

export default Places
