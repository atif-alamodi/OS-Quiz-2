// =========================================
// OS Quiz (15 MCQ) - Instant correction
// SCORE FIRST on correction + final score
// =========================================

const questions = [
  {
    question: "1) أحد أهداف نظام التشغيل هو:",
    answers: ["تقليل حجم البرامج", "الاستفادة القصوى من موارد الحاسب", "زيادة استهلاك الطاقة", "إلغاء العمليات"],
    correct: 1,
    explanation: "من أهداف نظام التشغيل إدارة الموارد بكفاءة وتحقيق أفضل استفادة من موارد الحاسب."
  },
  {
    question: "2) ما هو نظام التشغيل؟",
    answers: ["برنامج لتصميم المواقع", "برنامج وسيط بين المستخدم وأجهزة الحاسب", "أداة لمعالجة النصوص", "برنامج لحذف الفيروسات"],
    correct: 1,
    explanation: "نظام التشغيل وسيط يدير موارد الحاسب ويقدم خدمات للتطبيقات والمستخدم."
  },
  {
    question: "3) أيٌّ من الآتي يُعد من مكونات الحاسب الأساسية؟",
    answers: ["الطابعة", "وحدة المعالجة المركزية", "الماسح الضوئي", "الكاميرا"],
    correct: 1,
    explanation: "CPU من المكونات الأساسية، بينما الطابعة/الماسح/الكاميرا أجهزة طرفية."
  },
  {
    question: "4) نظام التشغيل الذي يتطلب استجابة زمنية سريعة يسمى:",
    answers: ["الدفعي", "متعدد المستخدمين", "الوقت الفعلي", "الشبكي"],
    correct: 2,
    explanation: "أنظمة الوقت الفعلي (Real-Time) تتطلب استجابة ضمن زمن محدد."
  },
  {
    question: "5) المقصود بهيكل نظام التشغيل هو:",
    answers: ["شكل واجهة المستخدم", "نوع المعالج المستخدم", "طريقة تنظيم مكونات نظام التشغيل وتفاعلاتها", "حجم نظام التشغيل"],
    correct: 2,
    explanation: "هيكل النظام يصف تنظيم مكونات نظام التشغيل وكيف تتواصل معًا."
  },
  {
    question: "6) فائدة تقسيم نظام التشغيل إلى طبقات هي:",
    answers: ["زيادة التعقيد", "تسهيل التصميم والصيانة", "تقليل سرعة النظام", "حذف الأخطاء نهائيًا"],
    correct: 1,
    explanation: "التقسيم إلى طبقات يسهل التطوير والصيانة وتتبع الأخطاء."
  },
  {
    question: "7) من وظائف خدمة اكتشاف الأخطاء:",
    answers: ["حذف جميع الملفات", "كشف المشكلات سواء في الذاكرة او النظام", "زيادة سرعة الإنترنت", "تشغيل الألعاب"],
    correct: 1,
    explanation: "خدمات اكتشاف الأخطاء تهدف لرصد المشاكل في النظام مثل الذاكرة أو الأجهزة."
  },
  {
    question: "8) أي واجهة مستخدم تعتمد على كتابة الأوامر النصية؟",
    answers: ["GUI", "Touch Interface", "CLI", "Voice Interface"],
    correct: 2,
    explanation: "CLI هي واجهة سطر الأوامر التي تعتمد على إدخال أوامر نصية."
  },
  {
    question: "9) من استدعاءات النظام لإنشاء ملف جديد:",
    answers: ["حذف ملف", "نسخ ملف", "إنشاء ملف", "إغلاق ملف"],
    correct: 2,
    explanation: "استدعاءات النظام الخاصة بالملفات تشمل الإنشاء/الفتح/القراءة/الكتابة/الإغلاق."
  },
  {
    question: "10) أي مما يلي يُعد من خدمات نظام التشغيل؟",
    answers: ["تنفيذ البرامج", "تصميم الصور", "كتابة التقارير", "تصفح الإنترنت فقط"],
    correct: 0,
    explanation: "تنفيذ البرامج من خدمات نظام التشغيل الأساسية."
  },
  {
    question: "11) عند حدوث مقاطعة، ماذا يفعل نظام التشغيل أولًا؟",
    answers: ["إعادة تشغيل الجهاز", "حذف العملية", "حفظ حالة العملية في كتلة التحكم", "إيقاف جميع العمليات"],
    correct: 2,
    explanation: "عادةً يحفظ النظام سياق العملية الحالية (State) ليعود لها لاحقًا."
  },
  {
    question: "12) من مكونات العملية:",
    answers: ["الشاشة ولوحة المفاتيح", "المعالج فقط", "النص البرمجي والمكدس والكومة", "الطابعة والماسح الضوئي"],
    correct: 2,
    explanation: "من مكونات العملية في الذاكرة: Text/Code وStack وHeap وغيرها."
  },
  {
    question: "13) الفرق بين العملية والبرنامج هو:",
    answers: ["لا يوجد فرق", "العملية برنامج مخزن على القرص", "البرنامج قيد التنفيذ دائمًا", "العملية برنامج قيد التنفيذ بينما البرنامج مخزن على القرص"],
    correct: 3,
    explanation: "البرنامج ملف مخزن، والعملية هي البرنامج أثناء التنفيذ."
  },
  {
    question: "14) أي من حالات العملية تشير إلى أن العملية جاهزة للتنفيذ؟",
    answers: ["Running", "Waiting", "Ready", "Terminated"],
    correct: 2,
    explanation: "Ready تعني أن العملية جاهزة وتنتظر الحصول على المعالج."
  },
  {
    question: "15) ما وظيفة عداد البرنامج داخل العملية؟",
    answers: ["تخزين البيانات", "تحديد عنوان التعليمة التالية للتنفيذ", "حفظ الملفات", "إدارة الذاكرة"],
    correct: 1,
    explanation: "Program Counter يشير للتعليمة التالية التي سيقوم المعالج بتنفيذها."
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
  answered = false;
  nextBtn.disabled = true;
  answersEl.innerHTML = "";

  const q = questions[currentQuestion];
  questionEl.innerText = q.question;

  // قبل الإجابة: عرض الدرجة الحالية
  resultEl.innerHTML = `
    <div style="text-align:right;">
      <strong>الدرجة:</strong> ${score} / ${questions.length}
    </div>
    <div style="text-align:right; margin-top:6px;">
      اختر إجابة لعرض التصحيح.
    </div>
  `;

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.innerText = answer;
    btn.classList.add("answer-btn");
    btn.onclick = () => checkAnswer(index);
    answersEl.appendChild(btn);
  });
}

function checkAnswer(selectedIndex) {
  if (answered) return;
  answered = true;

  const q = questions[currentQuestion];
  const correctIndex = q.correct;

  const buttons = document.querySelectorAll(".answer-btn");
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === correctIndex) btn.classList.add("correct");
    if (idx === selectedIndex && selectedIndex !== correctIndex) btn.classList.add("wrong");
  });

  const isCorrect = selectedIndex === correctIndex;
  if (isCorrect) score++;

  // ✅ الدرجة أولًا عند التصحيح
  resultEl.innerHTML = `
    <div style="text-align:right; line-height:1.9;">
      <div style="font-size:18px; margin-bottom:8px;">
        <strong>الدرجة:</strong> ${score} / ${questions.length}
      </div>
      <div style="margin-bottom:6px;">
        ${isCorrect ? "إجابة صحيحة ✅" : "إجابة خاطئة ❌"}
      </div>
      <div><strong>الإجابة الصحيحة:</strong> ${q.answers[correctIndex]}</div>
      <div style="margin-top:6px;"><strong>الشرح:</strong> ${q.explanation}</div>
    </div>
  `;

  nextBtn.disabled = false;
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showFinalResult();
  }
};

function showFinalResult() {
  questionEl.innerText = "انتهى الاختبار 🎉";
  answersEl.innerHTML = "";
  nextBtn.style.display = "none";

  const percent = Math.round((score / questions.length) * 100);

  resultEl.innerHTML = `
    <div style="text-align:center; line-height:2;">
      <h2>الدرجة النهائية</h2>
      <h1>${score} / ${questions.length}</h1>
      <h3>${percent}%</h3>
      <button id="restartBtn"
        style="background:#16a34a; color:#fff; padding:10px 16px; border-radius:8px; border:none; cursor:pointer;">
        إعادة الاختبار
      </button>
    </div>
  `;

  document.getElementById("restartBtn").onclick = () => {
    currentQuestion = 0;
    score = 0;
    nextBtn.style.display = "inline-block";
    loadQuestion();
  };
}

loadQuestion();
