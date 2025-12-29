import React from 'react'

const KunlikIboralar = () => {
  const data = [
    { id: 1, en: "Hello", kr: "안녕하세요", talaffuz: "annyeonghaseyo" },
    { id: 2, en: "Hi / Bye (to friends)", kr: "안녕", talaffuz: "annyeong" },
    { id: 3, en: "Thank you", kr: "감사합니다", talaffuz: "gamsahamnida" },
    { id: 4, en: "Thanks (informal)", kr: "고마워요", talaffuz: "gomawoyo" },
    { id: 5, en: "Sorry", kr: "미안합니다", talaffuz: "mianhamnida" },
    { id: 6, en: "Excuse me (formal)", kr: "죄송합니다", talaffuz: "joesonghamnida" },
    { id: 7, en: "Yes", kr: "네", talaffuz: "ne" },
    { id: 8, en: "No", kr: "아니요", talaffuz: "aniyo" },
    { id: 9, en: "It’s okay / Alright", kr: "괜찮아요", talaffuz: "gwaenchanayo" },
    { id: 10, en: "How are you?", kr: "잘 지내세요?", talaffuz: "jal jinaeseyo?" },
    { id: 11, en: "I’m fine", kr: "잘 지내요", talaffuz: "jal jinaeyo" },
    { id: 12, en: "What is your name?", kr: "이름이 뭐예요?", talaffuz: "ireumi mwoyeyo?" },
    { id: 13, en: "My name is ...", kr: "제 이름은 ...입니다", talaffuz: "je ireumeun ... imnida" },
    { id: 14, en: "Have a nice day!", kr: "좋은 하루 되세요", talaffuz: "joeun haru doeseyo" },
    { id: 15, en: "Goodbye!", kr: "안녕히 계세요", talaffuz: "annyeonghi gyeseyo" },
    { id: 16, en: "See you!", kr: "또 봐요", talaffuz: "tto bwayo" },
    { id: 17, en: "Please", kr: "제발", talaffuz: "jebal" },
    { id: 18, en: "Let’s go!", kr: "가자!", talaffuz: "gaja!" },
    { id: 19, en: "Come in / Please come!", kr: "오세요!", talaffuz: "oseyo!" },
    { id: 20, en: "I don’t know", kr: "몰라요", talaffuz: "mollayo" },
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
              <td className="border px-4 py-2">{item.kr}</td>
              <td className="border px-4 py-2">{item.talaffuz}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default KunlikIboralar
