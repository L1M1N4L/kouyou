import React, { useState } from 'react';

// --- Color Palette ---
// Deep Blue: #23487C
// Dark Indigo: #333F72
// Creamy Off-White: #FAF5EF
// Soft Peach: #F0B79E
// Soft Pink: #F9ABBF

// --- Sample modules data with explanations ---
const modules = [
  {
    title: "N4 Grammar - Chapter 1: Connecting Ideas & Situations",
    description: "Master how to express reasons, unexpected results, and conditional statements using 「ので」, 「のに」, and 「なら」.",
    sections: [
      {
        title: "もんだい I - Using 「ので」 for Reasons (because, so)",
        explanation: `「ので」(node) is a conjunctive particle used to state a reason or cause. It's similar to 'because' or 'so' in English. It often implies a more *logical* or *natural* consequence, and is generally considered more polite or formal than 「から」 (kara). Think of it as explaining *why* something is the way it is, or *why* an action is taken.

**Key Point:** The clause before 「ので」 is the reason, and the clause after is the result or action. The sentence often ends with a polite form (～です/～ます). For verbs and i-adjectives, attach 「ので」 directly. For na-adjectives and nouns, add 「な」 before 「ので」 (e.g., 好きな+ので, 学生な+ので).`,
        instructions: "Combine the two ideas into one sentence using 「ので」.",
        questions: [
          "*(例) <ruby>旅行<rt>りょこう</rt></ruby>します → 来月<ruby>旅行<rt>りょこう</rt></ruby>するので、パスポートを<ruby>準備<rt>じゅんび</rt></ruby>します。* (I will travel → Since I'm traveling next month, I'll prepare my passport.)",
          "**(1)** 明日<ruby>試験<rt>あした しけん</rt></ruby>があります",
          "**(2)** カメラがこわれました",
          "**(3)** パソコンの<ruby>使い方<rt>つかいかた</rt></ruby>がわかりません",
          "**(4)** <ruby>遠<rt>とお</rt></ruby>いです",
          "**(5)** <ruby>誕生日<rt>たんじょうび</rt></ruby>です",
          "**(6)** ひまです",
        ]
      },
      {
        title: "もんだい II - Using 「のに」 for Unexpected Results (even though, despite)",
        explanation: `「のに」(noni) is used to express an unexpected or surprising result given a certain situation. It translates to 'even though', 'despite the fact that', or 'although'. It highlights a discrepancy between what one might expect and what actually happens. It can sometimes carry a nuance of slight disappointment, surprise, or complaint.

**Key Point:** The clause before 「のに」 is the premise, and the clause after is the unexpected outcome. Connect it directly to verbs (plain form), i-adjectives, or noun/na-adjective + な (e.g., 学生なのに, きれいなのに).`,
        instructions: "Combine the two ideas into one sentence using 「のに」. Focus on the unexpectedness of the second part.",
        questions: [
          "*(例) <ruby>昨日<rt>きのう</rt></ruby>習<ruby>いました<rt>ならいました</rt></ruby> → <ruby>昨日<rt>きのう</rt></ruby>習<ruby>った<rt>ならった</rt></ruby>のに、もう<ruby>忘<rt>わす</rt></ruby>れました。* (Even though I learned it yesterday, I've already forgotten it.)",
          "**(1)** <ruby>手紙<rt>てがみ</rt></ruby>を<ruby>出<rt>だ</rt></ruby>しました",
          "**(2)** <ruby>友だち<rt>ともだち</rt></ruby>を<ruby>待っています<rt>まっています</rt></ruby>",
          "**(3)** この<ruby>店<rt>みせ</rt></ruby>は<ruby>高<rt>たか</rt></ruby>いです",
          "**(4)** <ruby>便利<rt>べんり</rt></ruby>です",
          "**(5)** <ruby>日曜日<rt>にちようび</rt></ruby>です",
        ]
      },
      {
        title: "もんだい III - Using 「なら」 for Conditional Statements (if that's the case, as for)",
        explanation: `「なら」(nara) is a conditional particle often used to give advice, make suggestions, or state a condition based on something that has already been mentioned or is assumed to be true. It means "if that's the case," "if it's about X," or "as for X." It's typically used when responding to someone else's statement or when setting a premise for a new topic.

**Key Point:** 「なら」 attaches directly to nouns, verbs (plain form), and adjectives. The action or suggestion comes *after* 「なら」.`,
        instructions: "Write full sentences using 「なら」 based on the given words/phrases.",
        questions: [
          "*(例1) <ruby>郵便局<rt>ゆうびんきょく</rt></ruby>／あの<ruby>ビル<rt>びる</rt></ruby>の1<ruby>階<rt>かい</rt></ruby>です。→ <ruby>郵便局<rt>ゆうびんきょく</rt></ruby>なら、あの<ruby>ビル<rt>びる</rt></ruby>の1<ruby>階<rt>かい</rt></ruby>ですよ。* (If it's the post office, it's on the 1st floor of that building.)",
          "*(例2) <ruby>車<rt>くるま</rt></ruby>／<ruby>ドイツ製<rt>せい</rt></ruby>がいいなあ。→ <ruby>車<rt>くるま</rt></ruby>なら、<ruby>ドイツ製<rt>せい</rt></ruby>がいいなあ。* (If it's a car, a German one would be nice.)",
          "**(1)** <ruby>昨日<rt>きのう</rt></ruby>の<ruby>新聞<rt>しんぶん</rt></ruby>",
          "**(2)** <ruby>キムさん</ruby>／今<ruby>コピー<rt>こぴー</rt></ruby>をとっています。",
          "**(3)** <ruby>山田<rt>やまだ</rt></ruby>さん／<ruby>昨日<rt>きのう</rt></ruby>から<ruby>出張<rt>しゅっちょう</rt></ruby>しています。",
          "**(4)** <ruby>ケーキ</ruby>／あの<ruby>店<rt>みせ</rt></ruby>が<ruby>有名<rt>ゆうめい</rt></ruby>です。",
          "**(5)** <ruby>音楽<rt>おんがく</rt></ruby>／<ruby>ジャズ<rt>じゃず</rt></ruby>が<ruby>好<rt>す</rt></ruby>きです。",
          "**(6)** <ruby>デザイン</ruby>の<ruby>勉強<rt>べんきょう</rt></ruby>／<ruby>フランス<rt>ふらんす</rt></ruby>がいいでしょう。",
        ]
      },
      {
        title: "もんだい IV - Choose the Correct Particle: 「のに」, 「なら」, or 「ので」",
        explanation: `Based on the context of each sentence, choose the most appropriate particle to connect the clauses. Remember the core meanings:
* **「ので」**: for logical reasons/causes.
* **「のに」**: for unexpected or contrasting results.
* **「なら」**: for conditions based on a previous statement or topic.`,
        instructions: "Choose the correct particle from the options and write the complete sentence.",
        questions: [
          "*(例) たくさん歩<ruby>いた<rt>ある</rt></ruby> <strong>{ のに ・ なら ・ ので }</strong> 足<ruby>痛<rt>いた</rt></ruby>くなりました。*",
          "**(1)** 早く<ruby>結婚<rt>けっこん</rt></ruby>したい <strong>{ のに ・ なら ・ ので }</strong> まだ恋人<ruby>こいびと<rt>こいびと</rt></ruby>もいません。",
          "**(2)** 目<ruby>悪<rt>わる</rt></ruby>い <strong>{ のに ・ なら ・ ので }</strong> いつもメガネ<ruby>めがね<rt>めがね</rt></ruby>をかけています。",
          "**(3)** ここは大学<ruby>だいがく<rt>だいがく</rt></ruby>の食堂<ruby>しょくどう<rt>しょくどう</rt></ruby> <strong>{ のに ・ なら ・ ので }</strong> とても安<ruby>やす<rt>やす</rt></ruby>いです。",
          "**(4)** おやつ<ruby>おやつ<rt>おやつ</rt></ruby>はチョコ<ruby>ちょこ<rt>ちょこ</rt></ruby> <strong>{ のに ・ なら ・ ので }</strong> ケーキ<ruby>けーき<rt>けーき</rt></ruby>がいいです。",
          "**(5)** お金<ruby>かね<rt>かね</rt></ruby>を入<ruby>い<rt>い</rt></ruby>れた <strong>{ のに ・ なら ・ ので }</strong> 切符<ruby>きっぷ<rt>きっぷ</rt></ruby>が出<ruby>で<rt>で</rt></ruby>ません。",
          "**(6)** スタットさん <strong>{ なのに ・ なら ・ なので }</strong> 今<ruby>コピー<rt>いま</rt></ruby>、食事<ruby>しょくじ<rt>しょくじ</rt></ruby>に行<ruby>い<rt>い</rt></ruby>っています。",
        ]
      },
      {
        title: "もんだい V - Matching Exercise: Complete the Sentences",
        explanation: `Match the first part of each sentence with the most logical or appropriate ending from the list provided. Think about the grammatical particle already present (「ので」, 「なら」, or 「のに」) and what kind of clause would follow it.

**Matching Options:**
a. おみやげ<ruby>おみやげ<rt>おみやげ</rt></ruby>を買<ruby>か<rt>か</rt></ruby>いました
b. 友<ruby>だち<rt>ともだち</rt></ruby>だちは来<ruby>き<rt>き</rt></ruby>ませんでした
c. 先週<ruby>せんしゅう<rt>せんしゅう</rt></ruby>もう見<ruby>み<rt>み</rt></ruby>ました
d. まだ掃除<ruby>そうじ<rt>そうじ</rt></ruby>していません
e. おなかがすきました
f. もう慣<ruby>な<rt>な</rt></ruby>れました
g. 学校<ruby>がっこう<rt>がっこう</rt></ruby>へ行<ruby>い<rt>い</rt></ruby>きます`,
        instructions: "Choose the letter (a-g) that best completes each sentence.",
        questions: [
          "*(例) 国<ruby>くに<rt>くに</rt></ruby>へ帰<ruby>かえ<rt>かえ</rt></ruby>ります → 国<ruby>くに<rt>くに</rt></ruby>へ帰<ruby>かえ<rt>かえ</rt></ruby>るので [a]*",
          "**(1)** 朝<ruby>あさ<rt>あさ</rt></ruby>ごはんを食べ<ruby>た<rt>た</rt></ruby>ませんでした → ので [ ]",
          "**(2)** その映画<ruby>えいが<rt>えいが</rt></ruby> → なら [ ]",
          "**(3)** 病気<ruby>びょうき<rt>びょうき</rt></ruby>が治<ruby>なおり<rt>なおり</rt></ruby>ました → ので [ ]",
          "**(4)** 3時<ruby>じ<rt>じ</rt></ruby>に約束<ruby>やくそく<rt>やくそく</rt></ruby>しました → のに [ ]",
          "**(5)** 日本<ruby>にほん<rt>にほん</rt></ruby>の生活<ruby>せいかつ<rt>せいかつ</rt></ruby> → なら [ ]",
          "**(6)** 部屋<ruby>へや<rt>へや</rt></ruby>が汚<ruby>きたな<rt>きたな</rt></ruby>いです → のに [ ]",
        ]
      }
    ]
  },
  {
    title: "I'M BALINGGGGGGGGGGGGG",
    description: "RAWRRR",
    sections: [
      {
        title: "I'M BALINGGGGGGGGGGGGG」",
        explanation: "「たら」(tara) is a common conditional used for 'if' or 'when'. 「なら」(nara) is used when talking about a topic introduced by someone else, meaning 'if that's the case' or 'as for'.",
        instructions: "Write full sentences answering the following questions.",
        questions: [
          "**(1)** What will you do if you win the lottery? (Use 「たら」)",
          "**(2)** A friend says, \"I want to study Japanese.\" What advice would you give? (Use 「なら」)",
          "**(3)** If you had a whole week free, what would you do? (Use 「たら」)",
        ]
      }
    ]
  }
];

function renderExplanation(explanation) {
  // Split by newlines
  const lines = explanation.split(/\r?\n/).filter(line => line.trim() !== '');
  const items = [];
  let inList = false;
  let listItems = [];
  
  lines.forEach(line => {
    if (/^[-*]\s+/.test(line)) {
      // Start or continue a list
      inList = true;
      // Replace **...** with <strong>...</strong> in list items
      const html = line.replace(/^[-*]\s+/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      listItems.push(html);
    } else {
      if (inList) {
        // End the list
        items.push(<ul className="list-disc list-inside mb-2" key={items.length}>{listItems.map((li, idx) => <li key={idx} dangerouslySetInnerHTML={{ __html: li }} />)}</ul>);
        listItems = [];
        inList = false;
      }
      // Replace **...** with <strong>...</strong> in normal lines
      const html = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      items.push(<div className="mb-1" key={items.length} dangerouslySetInnerHTML={{ __html: html }} />);
    }
  });
  
  if (inList && listItems.length > 0) {
    items.push(<ul className="list-disc list-inside mb-2" key={items.length}>{listItems.map((li, idx) => <li key={idx} dangerouslySetInnerHTML={{ __html: li }} />)}</ul>);
  }
  
  return items;
}

// --- Main React Component ---
function ModuleHomepage() {
  const [input, setInput] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [selectedModule, setSelectedModule] = useState(null);

  const handleSubmit = () => {
    if (input === 'harosekai') {
      setAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
      setInput('');
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setSelectedModule(null);
    setInput('');
    setError('');
  };

  // --- Password Screen ---
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FAF5EF] via-[#F0B79E]/5 to-[#F9ABBF]/5 flex items-center justify-center p-4 relative overflow-hidden">
        <div className="relative bg-white/95 backdrop-blur-md p-10 rounded-3xl shadow-2xl shadow-stone-400/20 w-full max-w-md border border-white/50 transform transition-all duration-500 hover:scale-105">
          <div className="text-center mb-10">
            <div className="relative w-20 h-20 bg-gradient-to-br from-[#F0B79E] via-[#F9ABBF] to-[#23487C]/20 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-white shadow-xl transform transition-transform duration-300 hover:rotate-12">
              <span className="text-4xl animate-bounce">🌸</span>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#F9ABBF] rounded-full animate-ping opacity-75"></div>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#23487C] to-[#333F72] bg-clip-text text-transparent mb-2">日本語学習</h2>
            <p className="text-[#333F72]/80 text-lg font-medium">Enter password to access materials</p>
          </div>
          
          <div className="space-y-6">
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && handleSubmit()}
                className="w-full px-6 py-4 bg-white/80 backdrop-blur-sm border-2 border-[#F0B79E]/30 rounded-2xl text-[#333F72] placeholder-[#333F72]/50 focus:outline-none focus:ring-4 focus:ring-[#F0B79E]/20 focus:border-[#F0B79E] transition-all shadow-lg text-lg"
                autoFocus
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#F0B79E]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
            
            {error && (
              <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-400 text-red-700 px-6 py-4 rounded-xl text-sm shadow-lg animate-pulse">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {error}
                </div>
              </div>
            )}
            
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-[#F0B79E] to-[#F9ABBF] text-white font-bold py-4 rounded-2xl hover:shadow-2xl hover:shadow-[#F0B79E]/40 transition-all transform hover:scale-105 active:scale-95 shadow-xl text-lg relative overflow-hidden group"
            >
              <span className="relative z-10">Access Modules</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F9ABBF] to-[#F0B79E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- Module Selection Screen ---
  if (selectedModule === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FAF5EF] via-[#F0B79E]/3 to-[#F9ABBF]/3 flex items-center justify-center p-4 relative overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-6 py-8">
          <header className="flex items-center justify-between mb-12 bg-white/50 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/30">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#F0B79E] to-[#F9ABBF] rounded-xl flex items-center justify-center text-white text-2xl shadow-lg">
                🌸
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[#23487C] to-[#333F72] bg-clip-text text-transparent">日本語学習</h1>
                <p className="text-[#333F72]/80 text-sm">Japanese Learning Modules</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="px-6 py-3 bg-gradient-to-r from-[#F9ABBF]/20 to-[#F0B79E]/20 text-[#333F72] rounded-xl hover:from-[#F9ABBF]/30 hover:to-[#F0B79E]/30 transition-all border border-[#F9ABBF]/30 shadow-md font-medium"
            >
              Logout
            </button>
          </header>

          <main className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-[#23487C] to-[#333F72] bg-clip-text text-transparent mb-4">Available Learning Modules</h2>
              <p className="text-[#333F72]/80 text-xl max-w-3xl mx-auto">Choose a module to begin your Japanese grammar practice. Each module contains detailed explanations and exercises.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
              {modules.map((module, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedModule(index)}
                  className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-xl shadow-stone-400/20 border border-white/50 p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#F0B79E]/20"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#F0B79E] to-[#F9ABBF] rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:rotate-12 transition-transform">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-bold text-[#23487C] mb-3 group-hover:text-[#333F72] transition-colors">{module.title}</h3>
                      <p className="text-[#333F72]/80 text-lg leading-relaxed mb-4">{module.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-[#F0B79E] font-medium">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          {module.sections.length} sections
                        </div>
                        <div className="flex items-center gap-2 text-[#333F72] group-hover:text-[#F0B79E] transition-colors">
                          <span className="font-medium">Start Module</span>
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    );
  }

  // --- Module Detail / Worksheet View ---
  const module = modules[selectedModule];
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF5EF] via-[#F0B79E]/3 to-[#F9ABBF]/3 font-serif flex items-center justify-center p-4 relative overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-6 py-8">
        <header className="flex items-center justify-between mb-12 bg-white/50 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/30">
          <button
            onClick={() => setSelectedModule(null)}
            className="px-6 py-3 bg-white/90 backdrop-blur-sm border border-[#F0B79E]/30 rounded-xl text-[#333F72] hover:bg-[#F0B79E]/10 hover:border-[#F0B79E] transition-all shadow-md flex items-center gap-3 font-medium group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Modules
          </button>
          <button
            onClick={handleLogout}
            className="px-6 py-3 bg-gradient-to-r from-[#F9ABBF]/20 to-[#F0B79E]/20 text-[#333F72] rounded-xl hover:from-[#F9ABBF]/30 hover:to-[#F0B79E]/30 transition-all border border-[#F9ABBF]/30 shadow-md font-medium"
          >
            Logout
          </button>
        </header>

        <main className="space-y-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#23487C] to-[#333F72] bg-clip-text text-transparent mb-4">{module.title}</h2>
            <p className="text-[#333F72]/80 text-xl max-w-3xl mx-auto">{module.description}</p>
          </div>

          {module.sections.map((section, sectionIndex) => (
            <section key={sectionIndex} className="bg-white/95 backdrop-blur-md rounded-3xl shadow-xl shadow-stone-400/20 border border-white/50 p-8 mb-10">
              <h3 className="text-3xl font-bold text-[#23487C] mb-6 border-b-2 border-[#F0B79E]/50 pb-3">{section.title}</h3>
              <div className="text-[#333F72] text-lg leading-relaxed mb-6">
                {renderExplanation(section.explanation)}
              </div>
              <p className="text-[#333F72]/90 italic mb-6 border-t border-b border-[#FAF5EF] py-4 px-4 bg-[#FAF5EF]/50 rounded-lg">
                <strong>Instructions:</strong> {section.instructions}
              </p>
              <div className="space-y-5">
                {section.questions.map((question, questionIndex) => (
                  <div key={questionIndex} className="bg-[#FAF5EF]/70 p-4 rounded-xl border border-[#F0B79E]/20 shadow-sm flex items-start gap-3">
                    <span className="text-[#F0B79E] font-bold text-xl leading-none pt-1">{question.startsWith("*(例)") ? "例" : `Q${questionIndex + 1}`}</span>
                    <p className="text-[#333F72] text-lg flex-1" dangerouslySetInnerHTML={{ __html: question.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}

export default ModuleHomepage;