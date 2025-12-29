import React from "react";

const Fellar = () => {
  const data = [
    { id: 1, en: "To go", korean: "가다", talafuz: "gada" },
    { id: 2, en: "To come", korean: "오다", talafuz: "oda" },
    { id: 3, en: "To eat", korean: "먹다", talafuz: "meokda" },
    { id: 4, en: "To drink", korean: "마시다", talafuz: "masida" },
    { id: 5, en: "To see", korean: "보다", talafuz: "boda" },
    { id: 6, en: "To hear", korean: "듣다", talafuz: "deutda" },
    { id: 7, en: "To speak", korean: "말하다", talafuz: "malhada" },
    { id: 8, en: "To read", korean: "읽다", talafuz: "ikda" },
    { id: 9, en: "To write", korean: "쓰다", talafuz: "sseuda" },
    { id: 10, en: "To study", korean: "공부하다", talafuz: "gongbuhada" },
    { id: 11, en: "To work", korean: "일하다", talafuz: "ilhada" },
    { id: 12, en: "To sleep", korean: "자다", talafuz: "jada" },
    { id: 13, en: "To wake up", korean: "일어나다", talafuz: "ireonada" },
    { id: 14, en: "To wear", korean: "입다", talafuz: "ipda" },
    { id: 15, en: "To take off (clothes)", korean: "벗다", talafuz: "beotda" },
    { id: 16, en: "To buy", korean: "사다", talafuz: "sada" },
    { id: 17, en: "To sell", korean: "팔다", talafuz: "palda" },
    { id: 18, en: "To make", korean: "만들다", talafuz: "mandeulda" },
    { id: 19, en: "To clean", korean: "청소하다", talafuz: "cheongsohada" },
    { id: 20, en: "To cook", korean: "요리하다", talafuz: "yorihada" },
    { id: 21, en: "To walk", korean: "걷다", talafuz: "geotda" },
    { id: 22, en: "To run", korean: "뛰다", talafuz: "ttwida" },
    { id: 23, en: "To sit", korean: "앉다", talafuz: "anda" },
    { id: 24, en: "To stand", korean: "서다", talafuz: "seoda" },
    { id: 25, en: "To live", korean: "살다", talafuz: "salda" },
    { id: 26, en: "To die", korean: "죽다", talafuz: "jukda" },
    { id: 27, en: "To love", korean: "사랑하다", talafuz: "saranghada" },
    { id: 28, en: "To like", korean: "좋아하다", talafuz: "joahada" },
    { id: 29, en: "To dislike", korean: "싫어하다", talafuz: "shireohada" },
    { id: 30, en: "To wait", korean: "기다리다", talafuz: "gidarida" },
    { id: 31, en: "To start", korean: "시작하다", talafuz: "shijakhada" },
    { id: 32, en: "To finish", korean: "끝나다", talafuz: "kkeutnada" },
    { id: 33, en: "To give", korean: "주다", talafuz: "juda" },
    { id: 34, en: "To receive", korean: "받다", talafuz: "batda" },
    { id: 35, en: "To learn", korean: "배우다", talafuz: "baeuda" },
    { id: 36, en: "To teach", korean: "가르치다", talafuz: "gareuchida" },
    { id: 37, en: "To get married", korean: "결혼하다", talafuz: "gyeolhonhada" },
    { id: 38, en: "To make a phone call", korean: "전화하다", talafuz: "jeonhwahada" },
    { id: 39, en: "To laugh", korean: "웃다", talafuz: "utda" },
    { id: 40, en: "To cry", korean: "울다", talafuz: "ulda" },
    { id: 41, en: "To dance", korean: "춤추다", talafuz: "chumchuda" },
    { id: 42, en: "To sing", korean: "노래하다", talafuz: "noraehada" },
    { id: 43, en: "To wash", korean: "씻다", talafuz: "shidda" },
    { id: 44, en: "To rest", korean: "쉬다", talafuz: "shwida" },
    { id: 45, en: "To ride / get on (transport)", korean: "타다", talafuz: "tada" },
    { id: 46, en: "To drive", korean: "운전하다", talafuz: "unjeonhada" },
    { id: 47, en: "To disappear", korean: "사라지다", talafuz: "sarajida" },
    { id: 48, en: "To help", korean: "도와주다", talafuz: "dowajuda" },
    { id: 49, en: "To remember", korean: "기억하다", talafuz: "gieokhada" },
    { id: 50, en: "To show", korean: "보여주다", talafuz: "boyeojuda" },
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

export default Fellar;
