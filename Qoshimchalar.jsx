import React from "react";

const Qoshimchalar = () => {
  const data = [
    { id: 1, en: "Who? What? (subject)", kr: "~이 / ~가", pron: "i / ga", note: "indicates the subject" },
    { id: 2, en: "-(object)", kr: "~을 / ~를", pron: "eul / reul", note: "direct object marker" },
    { id: 3, en: "possessive (-'s)", kr: "~의", pron: "ui", note: "indicates possession" },
    { id: 4, en: "to (direction)", kr: "~에", pron: "e", note: "direction or location" },
    { id: 5, en: "at / in (place)", kr: "~에서", pron: "eseo", note: "location where action happens" },
    { id: 6, en: "from (origin)", kr: "~에서부터", pron: "eseobuteo", note: "starting point" },
    { id: 7, en: "from / by", kr: "~부터 / ~에게서", pron: "buteo / egeseo", note: "source or start" },
    { id: 8, en: "to (person)", kr: "~에게", pron: "ege", note: "directed to someone" },
    { id: 9, en: "with", kr: "~와 / ~과", pron: "wa / gwa", note: "indicates togetherness" },
    { id: 10, en: "by / with (means)", kr: "~(으)로", pron: "ro / euro", note: "means or direction" },
    { id: 11, en: "and", kr: "~하고", pron: "hago", note: "conjunction" },
    { id: 12, en: "also / too", kr: "~도", pron: "do", note: "adds something (me too)" },
    { id: 13, en: "only", kr: "~만", pron: "man", note: "limits (only him)" },
    { id: 14, en: "even", kr: "~까지", pron: "kkaji", note: "adds inclusion" },
    { id: 15, en: "except", kr: "~밖에", pron: "bakk-e", note: "used with negation" },
    { id: 16, en: "through", kr: "~통해서", pron: "tonghaeseo", note: "means / path" },
    { id: 17, en: "from (time)", kr: "~부터", pron: "buteo", note: "start of time" },
    { id: 18, en: "until (time)", kr: "~까지", pron: "kkaji", note: "end of time" },
    { id: 19, en: "than / compared to", kr: "~보다", pron: "boda", note: "comparison" },
    { id: 20, en: "manner / way", kr: "~게 / ~히", pron: "ge / hi", note: "changes adjective to adverb" },
    { id: 21, en: "question (shall we?)", kr: "~까?", pron: "kka?", note: "suggestion or question" },
    { id: 22, en: "question (yes/no)", kr: "~습니까? / ~니?", pron: "seumnikka / ni?", note: "question form" },
    { id: 23, en: "both ... and", kr: "~도 ... 도", pron: "do ... do", note: "shows two things together" },
    { id: 24, en: "as well as", kr: "~뿐만 아니라", pron: "ppunman anira", note: "not only ... but also ..." },
    { id: 25, en: "because / why", kr: "~왜냐하면", pron: "waenyahamyeon", note: "reasoning" },
    { id: 26, en: "-are we?", kr: "~습니까?, ~나요?", pron: "seumnikka / nayo?", note: "question: are we doing it?" },
    { id: 27, en: "-is doing / I am doing", kr: "~고 있어요", pron: "go isseoyo", note: "present continuous tense" },
    { id: 28, en: "-let's (suggestion)", kr: "~자", pron: "ja", note: "let's do it together" },
    { id: 29, en: "right? / correct?", kr: "~지요? / ~죠?", pron: "jiyo / jyo", note: "confirmation" },
    { id: 30, en: "-if", kr: "~면", pron: "myeon", note: "conditional" },
    { id: 31, en: "-I (1st person)", kr: "~어요 / ~입니다", pron: "eoyo / imnida", note: "1st person singular present" },
    { id: 32, en: "-we (1st person plural)", kr: "~어요 / ~입니다", pron: "eoyo / imnida", note: "1st person plural" },
    { id: 33, en: "-you (2nd person)", kr: "~어 / ~야", pron: "eo / ya", note: "2nd person informal" },
    { id: 34, en: "-you (2nd formal)", kr: "~세요 / ~입니다", pron: "seyo / imnida", note: "2nd person formal" },
    { id: 35, en: "-did (past)", kr: "~았어요 / ~었어요", pron: "asseoyo / eosseoyo", note: "past tense" },
    { id: 36, en: "-is doing (present continuous)", kr: "~고 있어요", pron: "go isseoyo", note: "present continuous action" },
    { id: 37, en: "-was (past state)", kr: "~였어요 / ~이었어요", pron: "yeosseoyo / ieosseoyo", note: "past tense state" },
    { id: 38, en: "-done / finished", kr: "~됐어요 / ~했어요", pron: "dwaesseoyo / haesseoyo", note: "action completed" },
    { id: 39, en: "question: shall we go?", kr: "~갈까요?", pron: "galkkayo?", note: "suggestion" },
    { id: 40, en: "command: go!", kr: "~가세요 / ~가라", pron: "gaseyo / gara", note: "command" },
    { id: 41, en: "again", kr: "또", pron: "tto", note: "again / repeat" },
    { id: 42, en: "again?", kr: "또요?", pron: "ttoyo?", note: "again? (question form)" },
    { id: 43, en: "not only", kr: "~만은 아니다", pron: "maneun anida", note: "not only" },
    { id: 44, en: "not", kr: "~이/가 아니다", pron: "i/ga anida", note: "negation" },
  ];

  return (
    <div className="overflow-x-auto px-4 py-2">
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

export default Qoshimchalar;
