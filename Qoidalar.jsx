import React from "react";

const Qoidalar = () => {
  const data = [
    {
      id: 1,
      title: "Present Tense",
      rule: "Add ~아요 or ~어요 to the verb stem.",
      note: "If the vowel is a/o, use ~아요; for other vowels, use ~어요.",
      example: { en: "He/She goes", kr: "가요", pronunciation: "gayo" },
    },
    {
      id: 2,
      title: "Past Tense",
      rule: "Add ~았어요 / ~었어요 to the verb stem.",
      note: "If the vowel is a/o, use ~았어요; for other vowels, use ~었어요.",
      example: { en: "He/She ate", kr: "먹었어요", pronunciation: "meogeosseoyo" },
    },
    {
      id: 3,
      title: "Future Tense",
      rule: "Add ~ㄹ 거예요 / ~을 거예요 to the verb stem.",
      note: "If the verb ends with a vowel, use ~ㄹ 거예요; if it ends with a consonant, use ~을 거예요.",
      example: { en: "I will go", kr: "갈 거예요", pronunciation: "gal geoyeyo" },
    },
    {
      id: 4,
      title: "Suggestion Form",
      rule: "Add ~까요? or ~자.",
      note: "~까요? is a question-suggestion, ~자 is a casual suggestion.",
      example: { en: "Shall we go?", kr: "갈까요?", pronunciation: "galkkayo?" },
    },
    {
      id: 5,
      title: "Question Form",
      rule: "Add ~습니까? or ~아요?/어요?",
      note: "~습니까? is formal, ~아요?/어요? is for casual questions.",
      example: { en: "Are you going?", kr: "갑니까?", pronunciation: "gamnikka?" },
    },
  ];

  return (
    <div className="px-4 py-2">
      <h1 className="text-2xl font-bold text-center mb-4">Verb Tense Rules</h1>
      <div className="space-y-6">
        {data.map((q) => (
          <div
            key={q.id}
            className="border p-4 rounded-xl shadow-xl bg-white hover:shadow-2xl transition-all cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2">
              {q.id}. {q.title}
            </h2>
            <p>
              <strong>Rule:</strong> {q.rule}
            </p>
            <p>
              <strong>Note:</strong> {q.note}
            </p>
            <p className="mt-2 font-medium">Example:</p>
            <p className="ml-4">
              <span className="text-gray-700">{q.example.en} → </span>
              <span className="text-blue-600">{q.example.kr}</span>{" "}
              (<i>{q.example.pronunciation}</i>)
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Qoidalar;
