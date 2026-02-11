// =========================================
// University-Level OS Quiz (Hard) - 20 Q
// Features:
// - Instant correction (coloring correct/wrong)
// - Explanation after each answer
// - Final score + percentage + level
// - Anonymous tester ID (no name input)
// =========================================

// --- Anonymous tester id (per device/browser) ---
function getOrCreateTesterId() {
  const key = "tester_id_os_quiz";
  let id = localStorage.getItem(key);
  if (!id) {
    const rand = Math.random().toString(16).slice(2, 10).toUpperCase();
    id = `Tester-${rand}`;
    localStorage.setItem(key, id);
  }
  return id;
}
const testerId = getOrCreateTesterId();

// --- Questions ---
const questions = [
  {
    question: "س1) أي عبارة أدق عن الفرق بين Process و Thread؟",
    answers: [
      "الـ Thread يمتلك مساحة عنوان (Address Space) مستقلة بالكامل",
      "الـ Process يشارك نفس الـ Stack بين كل Threads",
      "الـ Threads داخل نفس العملية تشترك في نفس الـ Address Space بينما لكل Thread سجلات/Stack خاص",
      "لا يوجد فرق عملي بينهما"
    ],
    correct: 2,
    explanation:
      "الـ Threads داخل نفس العملية تشترك في نفس مساحة العنوان والموارد العامة، بينما لكل Thread سجلات CPU وStack خاص."
  },
  {
    question: "س2) في Context Switch، أكثر جزء يسبب Overhead عادةً هو:",
    answers: [
      "تحديث الـ UI فقط",
      "حفظ/استرجاع سجلات المعالج + احتمالية فقدان الـ Cache/TLB",
      "قراءة لوحة المفاتيح",
      "زيادة تردد المعالج"
    ],
    correct: 1,
    explanation:
      "التبديل السياقي يتطلب حفظ/استرجاع سياق التنفيذ وقد يسبب TLB flush أو فقدان locality مما يزيد الزمن."
  },
  {
    question: "س3) ما السبب الرئيسي لاستخدام Dual-Mode Operation (User/Kernel)؟",
    answers: [
      "لتسريع الشبكة",
      "لحماية النظام ومنع البرامج من تنفيذ تعليمات حساسة مباشرة",
      "لزيادة حجم الذاكرة",
      "لجعل البرامج تعمل بدون ملفات"
    ],
    correct: 1,
    explanation:
      "Dual-Mode يوفر حماية: تعليمات privileged تُنفذ في Kernel mode فقط."
  },
  {
    question: "س4) أي مما يلي يُعد مثالًا على Trap؟",
    answers: [
      "انقطاع كهرباء خارجي",
      "System Call من البرنامج إلى النواة",
      "توقف المروحة",
      "تغيير لون الشاشة"
    ],
    correct: 1,
    explanation:
      "الـ Trap هو Interrupt متزامن يحدث بسبب تنفيذ تعليمة (مثل system call أو exception)."
  },
  {
    question: "س5) في جدولة المعالج، أي خوارزمية قد تسبب Starvation بدون آلية Aging؟",
    answers: [
      "FCFS",
      "Round Robin بزمن شريحة ثابت",
      "Priority Scheduling",
      "FIFO في الأقراص"
    ],
    correct: 2,
    explanation:
      "Priority Scheduling قد تؤخر العمليات منخفضة الأولوية لفترة طويلة (Starvation) ما لم نستخدم Aging."
  },
  {
    question: "س6) (صح/خطأ) Round Robin مع Time Quantum صغير جدًا يزيد من معدل الـ Context Switch بشكل كبير.",
    answers: ["صح", "خطأ"],
    correct: 0,
    explanation:
      "صحيح. كلما صغرت الشريحة الزمنية زاد عدد مرات التبديل السياقي (Overhead أعلى)."
  },
  {
    question: "س7) في حالة Deadlock، أي شرط من شروط Coffman غير صحيح؟",
    answers: [
      "Mutual Exclusion",
      "Hold and Wait",
      "No Preemption",
      "Random Scheduling"
    ],
    correct: 3,
    explanation:
      "الشروط الأربعة هي: Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait. لا يوجد شرط اسمه Random Scheduling."
  },
  {
    question: "س8) ما الفرق الدقيق بين Paging و Segmentation؟",
    answers: [
      "Paging يعتمد على تقسيم منطقي بمعنى (Code/Data/Stack) بشكل متغير",
      "Segmentation يستخدم كتل ثابتة الحجم دائمًا",
      "Paging يستخدم صفحات ثابتة الحجم، بينما Segmentation يعتمد على مقاطع منطقية متغيرة الحجم",
      "كلاهما لا يحتاج جدول ترجمة"
    ],
    correct: 2,
    explanation:
      "Paging: fixed-size pages/frames. Segmentation: variable-size logical segments (مثل code/data/stack)."
  },
  {
    question: "س9) ما الوظيفة الأساسية لـ TLB؟",
    answers: [
      "تخزين الملفات المؤقتة على القرص",
      "تسريع ترجمة العناوين عبر Cache لمدخلات جدول الصفحات",
      "زيادة حجم الذاكرة الفعلية",
      "منع المقاطعات"
    ],
    correct: 1,
    explanation:
      "TLB هو Cache لترجمات العناوين (Page Table entries) لتسريع address translation."
  },
  {
    question: "س10) (صح/خطأ) Page Fault يعني دائمًا أن الصفحة غير موجودة في الذاكرة الرئيسية حالياً.",
    answers: ["صح", "خطأ"],
    correct: 0,
    explanation:
      "صحيح في السياق الشائع للـ demand paging: الصفحة المطلوبة غير موجودة في RAM وتحتاج جلبها من القرص."
  },
  {
    question: "س11) في Virtual Memory، لماذا يزيد Locality من كفاءة النظام؟",
    answers: [
      "لأنه يقلل من حاجة الـ Context Switch",
      "لأنه يجعل كل الصفحات تُجلب مرة واحدة فقط",
      "لأن البرامج تميل لاستخدام مجموعة صغيرة من الصفحات في فترة قصيرة (Temporal/Spatial)",
      "لأنه يمنع Deadlock"
    ],
    correct: 2,
    explanation:
      "Locality يعني أن الوصول يتركز على صفحات قريبة/متكررة؛ وهذا يقلل Page Faults ويحسن الأداء."
  },
  {
    question: "س12) في Synchronization، الـ Mutex يختلف عن Semaphore لأن:",
    answers: [
      "Semaphore لا يمكن استخدامه للمزامنة",
      "Mutex يسمح بمالك (Owner) واحد للقفل، بينما Semaphore قد يسمح بعدة دخول حسب القيمة",
      "Mutex دائمًا عدّاد أكبر من 1",
      "Mutex يمنع تعدد المعالجات"
    ],
    correct: 1,
    explanation:
      "Mutex عادةً قفل ثنائي مع مفهوم الملكية؛ Semaphore عدّاد يسمح بعدد من السماحات (counting)."
  },
  {
    question: "س13) أي مشكلة تعالجها تقنية Priority Inheritance؟",
    answers: [
      "Starvation في FCFS",
      "Priority Inversion في الأقفال (Locks)",
      "Page Thrashing",
      "Fragmentation في Paging"
    ],
    correct: 1,
    explanation:
      "Priority Inheritance ترفع أولوية من يحمل القفل مؤقتًا لتجنب Priority Inversion."
  },
  {
    question: "س14) (صح/خطأ) في UNIX: fork() ينشئ عملية جديدة، و exec() يستبدل صورة العملية الحالية ببرنامج جديد.",
    answers: ["صح", "خطأ"],
    correct: 0,
    explanation:
      "صحيح. fork ينشئ child. exec يستبدل برنامج العملية الحالية."
  },
  {
    question: "س15) أي سياسة Replace للصفحات هي الأمثل نظريًا (لكن غير عملية بالكامل)؟",
    answers: [
      "FIFO",
      "LRU",
      "Optimal (MIN)",
      "Second-Chance"
    ],
    correct: 2,
    explanation:
      "Optimal تختار الصفحة التي لن تُستخدم لأطول فترة مستقبلية. تتطلب معرفة المستقبل لذا هي مرجعية نظرية."
  },
  {
    question: "س16) ظاهرة Belady’s Anomaly مرتبطة غالبًا بـ:",
    answers: [
      "LRU فقط",
      "Optimal فقط",
      "FIFO في استبدال الصفحات",
      "TLB hit ratio"
    ],
    correct: 2,
    explanation:
      "Belady’s anomaly قد تحدث مع FIFO حيث زيادة الإطارات قد تزيد Page Faults."
  },
  {
    question: "س17) ما المقصود بـ Thrashing؟",
    answers: [
      "زيادة سرعة المعالج بسبب Cache",
      "قضاء وقت كبير في swapping/page faults بدل تنفيذ فعلي بسبب ضغط الذاكرة",
      "توقف الشبكة",
      "تعطل المعالج نهائيًا"
    ],
    correct: 1,
    explanation:
      "Thrashing يحدث عندما تعمل العمليات على مجموعات عمل كبيرة وتكثر page faults بشكل يقتل الأداء."
  },
  {
    question: "س18) في Disk Scheduling، ما الهدف الأساسي من SCAN/Elevator مقارنة بـ FCFS؟",
    answers: [
      "زيادة مساحة القرص",
      "تقليل حركة رأس القرص (Seek Time) وتحسين الأداء",
      "منع المقاطعات",
      "زيادة عدد العمليات"
    ],
    correct: 1,
    explanation:
      "SCAN يقلل تنقلات الرأس العشوائية مقارنة بـ FCFS وبالتالي يقلل seek time عادةً."
  },
  {
    question: "س19) (صح/خطأ) Race Condition يمكن أن يحدث فقط في أنظمة متعددة المعالجات (Multi-CPU).",
    answers: ["صح", "خطأ"],
    correct: 1,
    explanation:
      "خطأ. يمكن حدوثه حتى على معالج واحد بسبب التبديل السياقي/المقاطعات بين خيوط/عمليات."
  },
  {
    question: "س20) أي عبارة أدق عن SJF؟",
    answers: [
      "يضمن عدم حدوث Starvation دائمًا",
      "يقلل متوسط زمن الانتظار نظريًا لكنه يحتاج معرفة زمن burst (تقدير/تنبؤ)",
      "أفضل من RR في الاستجابة التفاعلية دائمًا",
      "لا يعمل إلا في الوقت الحقيقي"
    ],
    correct: 1,
    explanation:
      "SJF يقلل متوسط الانتظار نظريًا، لكنه يعتمد على معرفة/تقدير burst time وقد يسبب starvation للمهام الطويلة."
  }
];

// --- State ---
let currentQuestion = 0;
let score = 0;
let answered = false;

// --- DOM ---
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

function showHeader(msg) {
  resultEl.innerHTML = `
    <div style="text-align:right; opacity:.9; margin-bottom:10px;">
      <strong>معرّف المختبر:</strong> ${testerId}
    </div>
    <div style="text-align:right;">${msg}</div>
  `;
}

function loadQuestion() {
  answered = false;
  nextBtn.disabled = true;
  answersEl.innerHTML = "";

  const q = questions[currentQuestion];
  questionEl.innerText = q.question;

  showHeader("اختر إجابة لعرض التصحيح والشرح.");

  q.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.innerText = answer;
    button.classList.add("answer-btn");
    button.onclick = () => checkAnswer(index);
    answersEl.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {
  if (answered) return;
  answered = true;

  const q = questions[currentQuestion];
  const correctIndex = q.correct;
  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === correctIndex) btn.classList.add("correct");
    if (index === selectedIndex && selectedIndex !== correctIndex) btn.classList.add("wrong");
  });

  const isCorrect = selectedIndex === correctIndex;
  if (isCorrect) score++;

  resultEl.innerHTML = `
    <div style="text-align:right; line-height:1.9">
      <div style="opacity:.9; margin-bottom:8px;">
        <strong>معرّف المختبر:</strong> ${testerId}
      </div>

      <div style="font-size:18px; margin-bottom:6px;">
        ${isCorrect ? "إجابة صحيحة ✅" : "إجابة خاطئة ❌"}
      </div>

      <div>
        <strong>الإجابة الصحيحة:</strong> ${q.answers[correctIndex]}
      </div>

      <div style="margin-top:6px;">
        <strong>الشرح:</strong> ${q.explanation}
      </div>
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
  const total = questions.length;
  const percent = Math.round((score / total) * 100);

  let level = "يحتاج مراجعة";
  if (percent >= 90) level = "ممتاز جدًا";
  else if (percent >= 80) level = "ممتاز";
  else if (percent >= 70) level = "جيد جدًا";
  else if (percent >= 60) level = "جيد";
  else if (percent >= 50) level = "مقبول";

  questionEl.innerText = "انتهى الاختبار 🎉";
  answersEl.innerHTML = "";
  nextBtn.style.display = "none";

  resultEl.innerHTML = `
    <div style="text-align:center; line-height:2">
      <div style="text-align:right; opacity:.9; margin-bottom:10px;">
        <strong>معرّف المختبر:</strong> <span id="tid">${testerId}</span>
        <button id="copyBtn"
          style="margin-right:10px; background:#334155; color:#fff; border:none; padding:6px 10px; border-radius:8px; cursor:pointer;">
          نسخ المعرّف
        </button>
      </div>

      <h2>درجتك النهائية</h2>
      <h1>${score} / ${total}</h1>
      <h3>${percent}% - ${level}</h3>

      <button id="restartBtn"
        style="background:#16a34a; color:#fff; padding:10px 16px; border-radius:8px; border:none; cursor:pointer;">
        إعادة الاختبار
      </button>
    </div>
  `;

  document.getElementById("copyBtn").onclick = async () => {
    try {
      await navigator.clipboard.writeText(testerId);
      document.getElementById("copyBtn").innerText = "تم النسخ ✅";
      setTimeout(() => (document.getElementById("copyBtn").innerText = "نسخ المعرّف"), 1200);
    } catch {
      alert("لم يتم النسخ تلقائيًا. انسخ المعرّف يدويًا.");
    }
  };

  document.getElementById("restartBtn").onclick = () => {
    currentQuestion = 0;
    score = 0;
    nextBtn.style.display = "inline-block";
    loadQuestion();
  };
}

// Start
loadQuestion();
