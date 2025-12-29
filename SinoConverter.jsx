import React, { useState } from "react";

// Sino digits
const sinoUnits = {
  1: { kr: "일", tr: "il" },
  2: { kr: "이", tr: "i" },
  3: { kr: "삼", tr: "sam" },
  4: { kr: "사", tr: "sa" },
  5: { kr: "오", tr: "o" },
  6: { kr: "육", tr: "yuk" },
  7: { kr: "칠", tr: "chil" },
  8: { kr: "팔", tr: "pal" },
  9: { kr: "구", tr: "gu" },
};

// Native units
const nativeUnits = {
  1: { kr: "하나", tr: "hana" },
  2: { kr: "둘", tr: "dul" },
  3: { kr: "셋", tr: "set" },
  4: { kr: "넷", tr: "net" },
  5: { kr: "다섯", tr: "daseot" },
  6: { kr: "여섯", tr: "yeoseot" },
  7: { kr: "일곱", tr: "ilgop" },
  8: { kr: "여덟", tr: "yeodeol" },
  9: { kr: "아홉", tr: "ahop" },
  10: { kr: "열", tr: "yeol" },
  20: { kr: "스물", tr: "seumul" },
  30: { kr: "서른", tr: "seoreun" },
  40: { kr: "마흔", tr: "maheun" },
  50: { kr: "쉰", tr: "shwin" },
  60: { kr: "예순", tr: "yesun" },
  70: { kr: "일흔", tr: "ilheun" },
  80: { kr: "여든", tr: "yeodeun" },
  90: { kr: "아흔", tr: "aheun" },
  100: { kr: "백", tr: "baek" },
  200: { kr: "두백", tr: "dubaek" },
  300: { kr: "세백", tr: "sebaek" },
  400: { kr: "네백", tr: "nebaek" },
  500: { kr: "다섯백", tr: "daseotbaek" },
  600: { kr: "여섯백", tr: "yeoseotbaek" },
  700: { kr: "일곱백", tr: "ilgopbaek" },
  800: { kr: "여덟백", tr: "yeodeolbaek" },
  900: { kr: "아홉백", tr: "ahopbaek" },
  1000: { kr: "천", tr: "cheon" },
};

const SinoNativeConverter = () => {
  const [number, setNumber] = useState("");
  const [sinoResult, setSinoResult] = useState({ kr: "", tr: "" });
  const [nativeResult, setNativeResult] = useState({ kr: "", tr: "" });

  // Convert to Sino Korean
  const convertSino = (num) => {
    const n = parseInt(num);
    if (n < 1 || n > 1000) return { kr: "❌ 1–1000", tr: "Only 1–1000" };
    if (n === 1000) return { kr: "천", tr: "cheon" };

    const digits = n.toString().padStart(3, "0").split("");
    const hundreds = parseInt(digits[0]);
    const tens = parseInt(digits[1]);
    const ones = parseInt(digits[2]);

    let kr = "";
    let tr = "";

    if (hundreds) {
      if (hundreds > 1) {
        kr += sinoUnits[hundreds].kr;
        tr += sinoUnits[hundreds].tr + "-";
      }
      kr += "백";
      tr += "baek";
    }

    if (tens) {
      if (tens > 1) {
        kr += sinoUnits[tens].kr;
        tr += "-" + sinoUnits[tens].tr;
      }
      kr += "십";
      tr += "-ship";
    }

    if (ones) {
      kr += sinoUnits[ones].kr;
      tr += "-" + sinoUnits[ones].tr;
    }

    return { kr, tr: tr.replace(/^-|--/g, "").replace(/-$/g, "") };
  };

  // Convert to Native Korean (1–1000)
  const convertNative = (num) => {
    let n = parseInt(num);
    if (n < 1 || n > 1000) return { kr: "❌ 1–1000", tr: "Only 1–1000" };
    if (nativeUnits[n]) return nativeUnits[n];

    let hundreds = Math.floor(n / 100) * 100;
    let remainder = n % 100;

    let tens = Math.floor(remainder / 10) * 10;
    let ones = remainder % 10;

    let kr = "";
    let tr = "";

    if (hundreds) {
      kr += nativeUnits[hundreds]?.kr || "";
      tr += nativeUnits[hundreds]?.tr || "";
    }
    if (tens) {
      kr += nativeUnits[tens]?.kr || "";
      tr += (tr ? "-" : "") + (nativeUnits[tens]?.tr || "");
    }
    if (ones) {
      kr += nativeUnits[ones]?.kr || "";
      tr += (tr ? "-" : "") + (nativeUnits[ones]?.tr || "");
    }

    return { kr, tr };
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setNumber(val);
    setSinoResult(convertSino(val));
    setNativeResult(convertNative(val));
  };

  return (
    <div className="p-4 max-w-md mx-auto space-y-6">
      <h2 className="text-xl font-bold text-center">🔢 Korean Number Converter (1–1000)</h2>
      <input
        type="number"
        placeholder="Enter a number 1–1000"
        value={number}
        onChange={handleChange}
        className="border px-3 py-1 rounded w-full mb-2"
      />

      {sinoResult.kr && (
        <div className="bg-blue-100 p-3 rounded shadow">
          <h3 className="font-semibold mb-1">🇰🇷 Sino Korean:</h3>
          <p><b>Korean:</b> {sinoResult.kr}</p>
          <p><b>Pronunciation:</b> {sinoResult.tr}</p>
        </div>
      )}

      {nativeResult.kr && (
        <div className="bg-green-100 p-3 rounded shadow">
          <h3 className="font-semibold mb-1">🏠 Native Korean:</h3>
          <p><b>Korean:</b> {nativeResult.kr}</p>
          <p><b>Pronunciation:</b> {nativeResult.tr}</p>
        </div>
      )}
    </div>
  );
};

export default SinoNativeConverter;
