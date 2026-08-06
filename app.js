const formConfig = [
  {
    sectionId: "rationale",
    sectionTitle: "1. לחזק את הלמהש מדיניות AI לקורס",
    intro:
      "כאן מבהירים מה המדיניות נועדה לשרת, ואיך היא תומכת במטרות הלמידה של הקורס.",
    questions: [
      {
        id: "course_goals",
        label: "מה אופי הידע ומיומנויות שחשוב שההסטודנטים ירכשו בקורס?",
        type: "checkbox",
        required: true,
        options: [
          "ידע תיאורטי ומושגי בתחום",
          "הבנה של עקרונות מרכזיים",
          "יישום ידע במצבים מקצועיים",
          "פתרון בעיות",
          "חשיבה ביקורתית",
          "ניתוח מידע ומקורות",
          "כתיבה וניסוח מקצועי",
          "יצירה ופיתוח של תוצר עצמאי",
          "עבודה תהליכית ומחקרית",
          "עבודת צוות ושיתוף פעולה",
          "שיקול דעת אתי ומקצועי"
        ],
        allowOther: true,
        otherLabel: "אחר"
      },
      {
        id: "ai_skills",
        label: "אילו מיומנויות עבודה עם AI חשוב שהסטודנטים יפתחו בקורס?",
        type: "checkbox",
        required: true,
        options: [
          "ניסוח פרומפטים מדויקים",
          "היכרות עם כלים ומודלים שונים והתאמתם למשימה",
          "שימוש ב-AI לסיעור מוחות ופיתוח רעיונות",
          "שימוש ב-AI להבנת מושגים ופיתוח חומרי למידה עצמית",
          "שימוש ב-AI לקבלת משוב על טיוטות",
          "שיפור ניסוח, הגהה או תרגום",
          "בדיקת אמינות של מידע שהתקבל מ-AI",
          "זיהוי טעויות, הטיות ומגבלות של הכלי",
          "תיעוד ושקיפות בשימוש בכלים"
        ],
        allowOther: true,
        otherLabel: "אחר"
      },
      {
        id: "skills_at_risk",
        label: "במה שימוש ב-AI בזמן הלמידה בקורס עלול לפגוע?",
        type: "checkbox",
        required: true,
        options: [
          "הבנה עצמאית של החומר",
          "זכירה של מושגי יסוד",
          "פתרון בעיות באופן עצמאי",
          "כתיבה אישית ומקורית",
          "ניתוח מקורות ומידע",
          "פיתוח רעיונות עצמאיים",
          "שליטה בכלים מקצועיים הנלמדים בקורס",
          "לקיחת אחריות על תהליך הלמידה"
        ],
        allowOther: true,
        otherLabel: "אחר"
      }
    ]
  },
  {
    sectionId: "boundaries",
    sectionTitle: "2. לשרטט את גבולות הגזרהע בקורס: מה מותר ואסור לבצע בקורס – מה מותר ומה אסור",
    intro:
      "זה הזמן להגדיר בבירור מה מותר, מה מוגבל ומה מחוץ לתחום, כדי לצמצם אי-ודאות ולחזק אמון. שימו לב להגדיר גבולות שתוכלו לנטר ולאכוף.",
    questions: [
      {
        id: "allowed_stages",
        label: "באילו שלבים בקורס מותר ואף מומלץ לבצע שימוש בAI?",
        type: "checkbox",
        required: true,
        options: ["במהלך השיעורים והתרגולים בקורס", "מטלות האמצע", "מטלה מסכמת", "למידה עצמית בין השיעורים"],
        allowOther: true,
        otherLabel: "אחר"
      },
      {
        id: "boundary_level",
        label: "מה רמת השימוש ב-AI המותרת בקורס?",
        helpText: "בחרו את הרמה המתאימה או נסחו הגדרה מותאמת אישית.",
        type: "radio",
        required: true,
        options: [
          "רמה 1: אין לבצע שימוש בטכנולוגיה – חל איסור על שימוש ב־AI בכל חלקי הקורס, כולל בלמידה עצמאית.",
          "רמה 2: שימוש בAI כעוזר למידה – ניתן להשתמש בטכנולוגיה לחיזוק הלמידה בקורס, לדוגמה עבור הסבר מושגים או תרגום וסיעור מוחות. חל איסור על שילוב תוצרי AI במטלות להגשה.",
          "רמה 3: שילוב מפוקח חלקי – ניתן להיעזר ב־AI לעריכה, לאיסוף מידע ולהפקת חלקים מהתוצר, לצד דיווח ובדיקה ביקורתית. אין לבצע הפקה מלאה של תוצרים ב-AI. ",
          "רמה 4: שילוב מלא – אפשר ואף רצוי להשתמש ב־AI לאורך הקורס, אין הגבלה על אופי השימוש בטכנולוגיה, על הסטודנטים לדווח על השימוש, לבדוק את התוצרים ולהפעיל שיקול דעת."
        ],
        allowOther: true,
        otherLabel: "אני רוצה להגדיר לבד"
      },
      {
        id: "recommended_ai",
        label: "באילו כלים ולאילו שימושים מומלץ להיעזר בAI בקורס?",
        helpText: "מומלץ לבחור 2–3 דוגמאות לפחות. אפשר לבחור מכל צד כמה פריטים שרוצים.",
        type: "dual-checkbox",
        required: true,
        groups: [
          {
            id: "recommended_uses",
            title: "שימושים",
            options: [
              "שאלות הבהרה על מושגים מתוך חומרי הקורס",
              "יצירת דוגמאות לתרגול",
              "יצירת חומרי עזר ללמידה",
              "סיעור מוחות ראשוני",
              "קבלת משוב על טיוטה",
              "שיפור ניסוח ועריכה לשונית",
              "תרגום וסיוע בשפה",
              "בניית תוכנית עבודה או חלוקת משימה לשלבים",
              "סימולציה של שיחה, ראיון או הצגת רעיון",
              "בדיקת קוד, חישוב או לוגיקה",
              "השוואה בין רעיונות או פתרונות",
              "יצירת קוד, תמונה, טקסט, אודיו או וידאו"
            ],
            allowOther: true,
            otherLabel: "אחר"
          },
          {
            id: "recommended_tools",
            title: "כלים",
            options: [
              "ChatGPT",
              "Claude",
              "Google Gemini",
              "Perplexity",
              "Gemini Notebook",
              "Elicit",
              "Consensus",
              "Canva AI",
              "Adobe AI",
              "Gamma",
              "Beautiful.ai",
              "GitHub Copilot",
              "Cursor",
              "Claude Code",
              "Codex"
            ],
            allowOther: true,
            otherLabel: "אחר"
          }
        ]
      }
    ]
  },
  {
    sectionId: "responsibility",
    sectionTitle: "3. להבהיר מי האחראי/ית/ית",
    intro:
      "היו ברורים וישירים, השימוש ב-AI אינו מחליף אחריות אישית, אקדמית ואתית על התוצר המוגש.",
    questions: [
      {
        id: "student_responsibility",
        label: "מי אחראי על התוצרים אשר נוצרו בAI במסגרת הקורס?כם?",
        type: "radio",
        required: true,
        options: [
          "נוסח מוצע: האחריות המלאה על כל תוצר שנוצר או מוגש במסגרת הקורס שייכת לסטודנטים היוצרים. יש לבדוק את מהימנות המידע, לזהות טעויות והטיות, לוודא שהתוצר עומד בדרישות המטלה, ולפעול בהתאם לכללי האתיקה, זכויות היוצרים והפרטיות. שימוש ב־AI אינו מחליף אחריות אישית ואקדמית."
        ],
        allowOther: true,
        otherLabel: "כתיבה חופשית"
      },
      {
        id: "verification_level",
        label: "מה רמת בדיקת האמינות הנדרשת למידע שמתקבל מ־AI?",
        type: "radio",
        required: true,
        options: [
          "בדיקה בסיסית: בדיקה מול חומרי הקורס",
          "בדיקה רחבה: בדיקה מול מגוון מקורות דיגיטליים שאינם בהכרח אקדמיים",
          "בדיקה מעמיקה: בדיקה מול מספר מקורות אקדמיים ואתרים של גופים רשמיים, כולל תיעוד המקורות"
        ]
      },
      {
        id: "privacy_warnings",
        label: "האם ישנם דגשים בנושאי פרטיות ואבטחת מידע הרלוונטיים לקורס?",
        type: "checkbox",
        required: true,
        helpText:
          "סעיף זה חשוב במיוחד בקורסים שעוסקים בפרויקטים, בלקוחות חיצוניים, בבריאות, בטיפול או במשפט, ובכל מצב שבו עשוי להיות מידע רגיש.",
        options: [
          "אין להזין לכלי AI מידע אישי, רגיש, חסוי או מזהה של סטודנטים או של אנשים אחרים.",
          "אין להעלות חומרים פנימיים של ארגונים, מוסדות או לקוחות.",
          "אין להעלות נתונים רפואיים, טיפוליים או משפטיים."
        ],
        allowOther: true,
        otherLabel: "אחר"
      }
    ]
  },
  {
    sectionId: "transparency",
    sectionTitle: "4. להסדיר את פורמט הדיווח הקורס הקורס",
    intro:
      "הגדירו איך מדווחים על שימוש ב-AI, כדי לחזק שקיפות, אחריות ובהירות. סעיף זה משקף את דרישותיכם ברמה הטכנית ונועד כדי לייצר פורמט אחיד וברור עבור הסטודנטים.",
    questions: [
      {
        id: "reporting_scope",
        label: "איזה מידע על הסטודנטים לכלול במסגרת דיווח שימוש בAI במטלות הקורס?",
        type: "checkbox",
        required: true,
        options: [
          "שם הכלי",
          "מטרת השימוש",
          "פרומפט מרכזי מהשיחה",
          "תיעוד שיחה מלא או לינק לשיחה",
          "השלב במטלה או בקורס שבו נעשה השימוש",
          "תהליך בדיקת האמינות שנעשה",
          "רפלקציה על השימוש בהתאם לשאלות מנחות שינתנו בהנחיות המטלה"
        ],
        allowOther: true,
        otherLabel: "אחר"
      },
      {
        id: "reporting_format",
        label: "מהי תבנית הדיווח בקורס?",
        type: "radio",
        required: true,
        options: [
          {
            value: "תבנית בסיס: הצהרת שימוש ב-AI במטלות",
            titleHtml:
              '<a href="assets/files/הצהרה על שימוש בכלי בינה מלאכותית במטלות.docx" target="_blank" rel="noopener">תבנית בסיס: יש להעלות קובץ עדכני של אונו</a>'
          },
          {
            value: "קישור לתבנית שלכם",
            title: "קישור לתבנית שלכם",
            conditionalInput: {
              id: "reporting_format_link",
              placeholder: "הדביקו כאן קישור למסמך שיתופי או לטופס",
              ariaLabel: "קישור לתבנית הדיווח שלכם",
              required: true
            }
          }
        ]
      },
      {
        id: "reporting_timing",
        label: "מתי הסטודנטים נדרשים לדווח על שימוש ב-AI?",
        type: "checkbox",
        required: true,
        options: ["בכל מטלה שבה נעשה שימוש ב-AI", "במטלת האמצע", "במטלה מסכמת"],
        allowOther: true,
        otherLabel: "אחר"
      },
      {
        id: "citation_guidance",
        label: "כיצד על הסטודנטים לצטט ולהפנות לתוכן שנוצר על ידי AI בכתיבה האקדמית?",
        type: "textarea",
        required: false,
        placeholder: "ניתן לציין כאן את כללי הציטוט הביבליוגרפי המקובלים בקורס."
      },
      {
        id: "mastery_checks",
        label: "כיצד תיבדק בקיאות הסטודנטים בחומר הנלמד ובמטלה שהוגשה?",
        type: "checkbox",
        required: true,
        options: [
          "בחינת הגנה בעל פה",
          "הצגה בכיתה",
          "הגשת קבצי ביניים לאורך תהליך העבודה",
          "בחינה ללא גישה לכלי AI"
        ],
        allowOther: true,
        otherLabel: "אחר"
      }
    ]
  },
  {
    sectionId: "enforcement",
    sectionTitle: "5. להבהיר את ההשלכות",
    intro:
      "בחלק זה עליכם לשקף לסטודנטים מה קורה כאשר הם לא עומדי בגבולות שהגדרתם או בתיעוד הנדרש. הקפידו להיות ברורים לגבי ההשלכות האפשריות ושימו לב שאתם יכולים לאכוף אותן. איומי סרק יפגעו באמינות שלכם מול הסטודנטים. <strong>יש להקפיד על עמידה ותאימות מוחלטת לנהלי המוסד והפקולטה</strong>.הם, <strong>תוך התאמה לנהלי המכון והפקולטה</strong>.",
    questions: [
      {
        id: "boundary_consequences",
        label: "מה ההשלכות לשימוש ב-AI החורג מחוץ לגבולות שהוגדרו בקורס?",
        type: "checkbox",
        required: true,
        options: ["דרישה לתיקון או להגשה חוזרת", "דרישה לביצוע הגנה בעל פה על העבודה", "הפחתת ניקוד", "פסילת רכיב מסוים במטלה"],
        allowOther: true,
        otherLabel: "אחר"
      },
      {
        id: "reporting_consequences",
        label: "מה ההשלכות לאי-דיווח על שימוש ב-AI או ביצוע דיווח חלקי שאינו תואם לדרישות הקורס?",
        type: "checkbox",
        required: true,
        options: [
          "בקשה להשלמת דיווח בדיעבד",
          "הפחתת ניקוד ברכיב השקיפות או התהליך",
          "דרישה להגשה חוזרת עם דיווח מלא",
          "בדיקת בקיאות או הגנה על העבודה בעל פה",
          "אי בדיקת העבודה"
        ],
        allowOther: true,
        otherLabel: "אחר"
      }
    ]
  },
  {
    sectionId: "equity",
    sectionTitle: "6. זה הזמן לוודא שאנחנו שומרים על הוגנות",
    intro:
      "רגע לפני סיום, וודאו שהמדיניות מתחשבת בכלל הסטודנטיות והסטודנטים: בפערי גישה, זמינות ואוריינות טכנולוגית. השאלות בסעיף זה נועדו לעורר מחשבה על הקורס ואין צורך לענות עליהן בממשק.",
    questions: [
      {
        id: "equity_paid_tools",
        label: "האם הקורס נשען על כלים בתשלום? אם כן, איזו חלופה או פתרון חלופי יהיה זמין לסטודנטיות ולסטודנטים שאינם יכולים לעמוד בעלות הכלים?",
        type: "reflection",
        required: false
      },
      {
        id: "equity_support",
        label: "אילו משאבים או סוגי תמיכה ניתן להציע לסטודנטיות ולסטודנטים המגיעים לקורס עם פערי אוריינות שימוש ב-AI?",
        type: "reflection",
        required: false
      }
    ]
  }
];

const state = {
  questionElements: new Map(),
  otherInputs: new Map(),
  conditionalInputs: new Map(),
  wizardQuestions: [],
  currentQuestionIndex: 0,
  answers: {},
  skippedQuestions: new Set()
};

const formSectionsEl = document.getElementById("form-sections");
const policyForm = document.getElementById("policy-form");
const validationSummaryEl = document.getElementById("validation-summary");
const resultsSection = document.getElementById("results");
const policyOutputEl = document.getElementById("policy-output");
const studentSlideEl = document.getElementById("student-slide");
const copyStatusEl = document.getElementById("copy-status");
const builderStatusEl = document.getElementById("builder-status");
const reflectionModalEl = document.getElementById("reflectionModal");
const resetConfirmModalEl = document.getElementById("resetConfirmModal");
const copyPolicyButton = document.getElementById("copy-policy");
const printPolicyButton = document.getElementById("print-policy");

// New slide export variables
const downloadSlideImageBtn = document.getElementById("download-slide-image");
const downloadSlidePdfBtn = document.getElementById("download-slide-pdf");
const slideWrapperEl = document.getElementById("slide-wrapper");
const slideEmptyStateEl = document.getElementById("slide-empty-state");

// Printing target control
let printTarget = "policy";

let reflectionModal;
let resetConfirmModal;
let policyEditor;

function renderForm(config) {
  formSectionsEl.innerHTML = "";

  config.forEach((section) => {
    const sectionEl = document.createElement("section");
    sectionEl.className = "form-section";
    sectionEl.id = section.sectionId;
    sectionEl.setAttribute("aria-labelledby", `${section.sectionId}-title`);

    const header = document.createElement("div");
    header.className = "form-section-header";
    header.innerHTML = `
      <h3 id="${section.sectionId}-title" class="h3">${section.sectionTitle}</h3>
      <p class="mb-0">${section.intro}</p>
    `;
    sectionEl.appendChild(header);

    if (section.callout) {
      const callout = document.createElement("div");
      callout.className = "question-callout mb-4";
      callout.innerHTML = `
        <span class="callout-icon" aria-hidden="true">i</span>
        <p class="mb-0">${section.callout}</p>
      `;
      sectionEl.appendChild(callout);
    }

    section.questions.forEach((question) => {
      sectionEl.appendChild(renderQuestion(question, section.sectionId));
    });

    formSectionsEl.appendChild(sectionEl);
  });
}

function renderQuestion(question, sectionId) {
  const wrapper = document.createElement("div");
  wrapper.className = "question-block";
  wrapper.id = `${question.id}-block`;
  if (question.type === "reflection") {
    wrapper.classList.add("question-block--reflection");
  }

  const fieldset = document.createElement("fieldset");
  fieldset.className = "border-0 p-0 m-0";
  fieldset.id = `${question.id}-fieldset`;
  fieldset.tabIndex = -1;

  const legend = document.createElement("legend");
  legend.className = "question-label";
  legend.innerHTML = `
    <span>${question.label}</span>
  `;
  fieldset.appendChild(legend);

  if (question.helpText) {
    const help = document.createElement("p");
    help.className = "question-help";
    help.id = `${question.id}-help`;
    help.textContent = question.helpText;
    fieldset.appendChild(help);
    fieldset.setAttribute("aria-describedby", help.id);
  }

  let inputContainer;

  switch (question.type) {
    case "checkbox":
    case "radio":
      inputContainer = renderChoiceQuestion(question);
      break;
    case "dual-checkbox":
      inputContainer = renderDualCheckboxQuestion(question);
      break;
    case "textarea":
      inputContainer = renderTextarea(question);
      break;
    case "text":
      inputContainer = renderTextInput(question);
      break;
    case "reflection":
      inputContainer = null;
      break;
    default:
      inputContainer = document.createElement("div");
  }

  if (inputContainer) {
    fieldset.appendChild(inputContainer);
  }

  const errorEl = document.createElement("p");
  errorEl.className = "field-error";
  errorEl.id = `${question.id}-error`;
  errorEl.hidden = true;
  fieldset.appendChild(errorEl);

  wrapper.appendChild(fieldset);
  state.questionElements.set(question.id, { question, fieldset, errorEl, wrapper, sectionId });
  return wrapper;
}

function createCalloutElement(text, id = "") {
  const callout = document.createElement("div");
  callout.className = "question-callout mb-4";
  if (id) {
    callout.id = id;
  }
  callout.innerHTML = `
    <span class="callout-icon" aria-hidden="true">i</span>
    <p class="mb-0">${text}</p>
  `;
  return callout;
}

function normalizeOption(option) {
  if (typeof option === "string") {
    return {
      value: option,
      title: option,
      titleHtml: "",
      description: "",
      descriptionHtml: "",
      conditionalInput: null
    };
  }

  return {
    value: option.value ?? option.title ?? "",
    title: option.title ?? option.value ?? "",
    titleHtml: option.titleHtml || "",
    description: option.description || "",
    descriptionHtml: option.descriptionHtml || "",
    conditionalInput: option.conditionalInput || null
  };
}

function makeChoiceCardInteractive(card, input) {
  card.addEventListener("click", (event) => {
    if (event.target.closest("label, input, textarea, select, button, a")) {
      return;
    }

    input.click();
    input.focus();
  });
}

function renderChoiceQuestion(question) {
  const grid = document.createElement("div");
  grid.className = "choice-grid";
  if (question.type === "radio") {
    grid.dataset.columns = "1";
  }

  const inputs = [];

  question.options.forEach((option, index) => {
    const optionData = normalizeOption(option);
    const optionId = `${question.id}-${index}`;
    const card = document.createElement("div");
    card.className = "choice-card form-check";
    card.innerHTML = `
      <input class="form-check-input" type="${question.type}" name="${question.id}" id="${optionId}" value="${optionData.value}" />
      <label class="form-check-label" for="${optionId}">
        <span class="choice-title">${optionData.titleHtml || optionData.title}</span>
        ${optionData.descriptionHtml ? `<span class="choice-description">${optionData.descriptionHtml}</span>` : ""}
        ${!optionData.descriptionHtml && optionData.description ? `<span class="choice-description">${optionData.description}</span>` : ""}
      </label>
    `;
    const input = card.querySelector("input");

    if (optionData.conditionalInput && question.type === "radio") {
      const conditionalInput = document.createElement("input");
      conditionalInput.type = "url";
      conditionalInput.className = "form-control other-input-wrap";
      conditionalInput.id = optionData.conditionalInput.id;
      conditionalInput.placeholder = optionData.conditionalInput.placeholder || "";
      conditionalInput.hidden = true;
      conditionalInput.setAttribute("aria-label", optionData.conditionalInput.ariaLabel || question.label);
      conditionalInput.addEventListener("input", () => {
        clearQuestionError(question.id);
        saveCurrentQuestionAnswer();
      });
      card.appendChild(conditionalInput);

      state.conditionalInputs.set(question.id, {
        triggerValue: optionData.value,
        input: conditionalInput,
        answerId: optionData.conditionalInput.id,
        required: Boolean(optionData.conditionalInput.required)
      });
    }

    makeChoiceCardInteractive(card, input);
    inputs.push(input);
    grid.appendChild(card);
  });

  if (question.allowOther) {
    const otherId = `${question.id}-other-toggle`;
    const otherCard = document.createElement("div");
    otherCard.className = "choice-card form-check flex-wrap";
    otherCard.innerHTML = `
      <div class="d-flex align-items-start gap-2 w-100">
        <input class="form-check-input" type="${question.type}" name="${question.id}" id="${otherId}" value="__other__" />
        <label class="form-check-label" for="${otherId}">
          <span class="choice-title">${question.otherLabel || "אחר"}</span>
          <span class="choice-description">ניתן לנסח תשובה חופשית משלכם.</span>
        </label>
      </div>
    `;
    const otherInput = document.createElement("textarea");
    otherInput.className = "form-control other-input-wrap mt-2 w-100";
    otherInput.id = `${question.id}-other-text`;
    otherInput.placeholder = question.type === "radio" ? "כתבו כאן את הנוסח שלכם" : "הוסיפו תשובה חופשית";
    otherInput.rows = 3;
    otherInput.hidden = true;
    otherInput.setAttribute("aria-label", `${question.label} - תשובה חופשית`);
    otherInput.addEventListener("input", () => {
      clearQuestionError(question.id);
      saveCurrentQuestionAnswer();
    });
    otherCard.appendChild(otherInput);
    grid.appendChild(otherCard);

    const toggle = otherCard.querySelector("input");
    makeChoiceCardInteractive(otherCard, toggle);
    state.otherInputs.set(question.id, { toggle, input: otherInput, type: question.type });

    toggle.addEventListener("change", () => {
      syncOtherField(question.id);
      if (question.type === "radio" && toggle.checked) {
        otherInput.focus();
      }
      saveCurrentQuestionAnswer();
    });

    inputs.push(toggle);
  }

  inputs.forEach((input) => {
    input.addEventListener("change", () => {
      if (question.allowOther) {
        syncOtherField(question.id);
      }
      syncConditionalField(question.id);
      clearQuestionError(question.id);
      saveCurrentQuestionAnswer();
    });
  });

  return grid;
}

function renderDualCheckboxQuestion(question) {
  const wrapper = document.createElement("div");
  wrapper.className = "dual-select-grid";

  question.groups.forEach((group) => {
    const panel = document.createElement("div");
    panel.className = "mini-panel";

    const title = document.createElement("h4");
    title.className = "h5";
    title.textContent = group.title;
    panel.appendChild(title);

    const grid = document.createElement("div");
    grid.className = "choice-grid";
    grid.dataset.columns = "1";

    group.options.forEach((option, index) => {
      const optionData = normalizeOption(option);
      const optionId = `${group.id}-${index}`;
      const card = document.createElement("div");
      card.className = "choice-card form-check";
      card.innerHTML = `
        <input class="form-check-input" type="checkbox" name="${group.id}" id="${optionId}" value="${optionData.value}" />
        <label class="form-check-label" for="${optionId}">
          <span class="choice-title">${optionData.titleHtml || optionData.title}</span>
          ${optionData.descriptionHtml ? `<span class="choice-description">${optionData.descriptionHtml}</span>` : ""}
          ${!optionData.descriptionHtml && optionData.description ? `<span class="choice-description">${optionData.description}</span>` : ""}
        </label>
      `;
      const input = card.querySelector("input");
      makeChoiceCardInteractive(card, input);
      input.addEventListener("change", () => {
        clearQuestionError(question.id);
        saveCurrentQuestionAnswer();
      });
      grid.appendChild(card);
    });

    if (group.allowOther) {
      const otherId = `${group.id}-other-toggle`;
      const otherCard = document.createElement("div");
      otherCard.className = "choice-card form-check";
      otherCard.innerHTML = `
        <input class="form-check-input" type="checkbox" name="${group.id}" id="${otherId}" value="__other__" />
        <label class="form-check-label" for="${otherId}">
          <span class="choice-title">${group.otherLabel || "אחר"}</span>
        </label>
      `;
      const otherInput = document.createElement("input");
      otherInput.type = "text";
      otherInput.className = "form-control other-input-wrap";
      otherInput.id = `${group.id}-other-text`;
      otherInput.placeholder = "הוסיפו תשובה חופשית";
      otherInput.hidden = true;
      otherInput.setAttribute("aria-label", `${group.title} - תשובה חופשית`);
      otherInput.addEventListener("input", () => {
        clearQuestionError(question.id);
        saveCurrentQuestionAnswer();
      });
      otherCard.appendChild(otherInput);
      grid.appendChild(otherCard);

      const toggle = otherCard.querySelector("input");
      makeChoiceCardInteractive(otherCard, toggle);
      state.otherInputs.set(group.id, { toggle, input: otherInput, type: "checkbox" });
      toggle.addEventListener("change", () => {
        syncOtherField(group.id);
        clearQuestionError(question.id);
        saveCurrentQuestionAnswer();
      });
    }

    panel.appendChild(grid);
    wrapper.appendChild(panel);
  });

  return wrapper;
}

function renderTextarea(question) {
  const textarea = document.createElement("textarea");
  textarea.className = "form-control";
  textarea.id = question.id;
  textarea.name = question.id;
  textarea.rows = 5;
  textarea.placeholder = question.placeholder || "";
  textarea.addEventListener("input", () => {
    clearQuestionError(question.id);
    saveCurrentQuestionAnswer();
  });
  return textarea;
}

function renderTextInput(question) {
  const input = document.createElement("input");
  input.type = "text";
  input.className = "form-control";
  input.id = question.id;
  input.name = question.id;
  input.placeholder = question.placeholder || "";
  input.addEventListener("input", () => {
    clearQuestionError(question.id);
    saveCurrentQuestionAnswer();
  });
  return input;
}

function syncOtherField(id) {
  const entry = state.otherInputs.get(id);
  if (!entry) {
    return;
  }
  entry.input.hidden = !entry.toggle.checked;
  entry.input.toggleAttribute("required", entry.toggle.checked && entry.type === "radio");
  if (!entry.toggle.checked) {
    entry.input.value = "";
  }
}

function syncConditionalField(id) {
  const entry = state.conditionalInputs.get(id);
  if (!entry) {
    return;
  }

  const selected = [...document.querySelectorAll(`[name="${id}"]`)].find((input) => input.checked);
  const isVisible = selected?.value === entry.triggerValue;
  entry.input.hidden = !isVisible;
  entry.input.toggleAttribute("required", isVisible && entry.required);

  if (!isVisible) {
    entry.input.value = "";
  }
}

function collectAnswers() {
  saveCurrentQuestionAnswer();
  return getAnswersSnapshot();
}

function collectChoiceValues(name, type) {
  const inputs = [...document.querySelectorAll(`[name="${name}"]`)];
  const checked = inputs.filter((input) => input.checked);
  const otherEntry = state.otherInputs.get(name);

  if (type === "radio") {
    if (!checked.length) {
      return "";
    }
    if (checked[0].value === "__other__") {
      return otherEntry?.input.value.trim() || "";
    }
    return checked[0].value;
  }

  const values = checked
    .map((input) => {
      if (input.value === "__other__") {
        return otherEntry?.input.value.trim() || "";
      }
      return input.value;
    })
    .filter(Boolean);

  return values;
}

function validateAnswers(answers) {
  const missing = [];

  formConfig.forEach((section) => {
    section.questions.forEach((question) => {
      if (!question.required) {
        return;
      }

      const value = answers[question.id];
      let isMissing = false;

      if (question.type === "checkbox") {
        isMissing = !Array.isArray(value) || value.length === 0;
      } else if (question.type === "dual-checkbox") {
        const hasValues = Object.values(value).some((groupValues) => Array.isArray(groupValues) && groupValues.length > 0);
        isMissing = !hasValues;
      } else {
        isMissing = !value || (typeof value === "string" && !value.trim());
      }

      if (isMissing) {
        missing.push({
          id: question.id,
          label: question.label
        });
      }
    });
  });

  return missing;
}

function renderValidationSummary(errors) {
  if (!errors.length) {
    validationSummaryEl.hidden = true;
    validationSummaryEl.innerHTML = "";
    return;
  }

  validationSummaryEl.hidden = false;
  validationSummaryEl.innerHTML = `
    <h3 class="h5 mb-3">שימו לב, יש שאלות שלא מולאו עדיין</h3>
    <p class="mb-2">ניתן לחזור אליהן דרך הקישורים הבאים, או לאשר בהמשך שתרצו לדלג עליהן:</p>
    <ul class="mb-0">
      ${errors
      .map(
        (error) =>
          `<li><a class="summary-link" href="#${error.id}-block" data-focus-target="${error.id}-fieldset">${error.label}</a></li>`
      )
      .join("")}
    </ul>
  `;
  validationSummaryEl.focus();
}

function markQuestionError(questionId, message) {
  const entry = state.questionElements.get(questionId);
  if (!entry) {
    return;
  }

  entry.errorEl.hidden = false;
  entry.errorEl.textContent = message;
  entry.fieldset.setAttribute("aria-describedby", `${questionId}-error`);

  const fields = getQuestionFields(entry.question);
  fields.forEach((field) => field.setAttribute("aria-invalid", "true"));
}

function clearQuestionError(questionId) {
  const entry = state.questionElements.get(questionId);
  if (!entry) {
    return;
  }

  entry.errorEl.hidden = true;
  entry.errorEl.textContent = "";

  const describedBy = `${questionId}-help`;
  if (document.getElementById(describedBy)) {
    entry.fieldset.setAttribute("aria-describedby", describedBy);
  } else {
    entry.fieldset.removeAttribute("aria-describedby");
  }

  const fields = getQuestionFields(entry.question);
  fields.forEach((field) => field.removeAttribute("aria-invalid"));
}

function clearAllErrors() {
  state.questionElements.forEach((_, questionId) => clearQuestionError(questionId));
  renderValidationSummary([]);
}

function getQuestionFields(question) {
  if (question.type === "checkbox" || question.type === "radio") {
    return [
      ...document.querySelectorAll(`[name="${question.id}"]`),
      ...(state.otherInputs.get(question.id) ? [state.otherInputs.get(question.id).input] : []),
      ...(state.conditionalInputs.get(question.id) ? [state.conditionalInputs.get(question.id).input] : [])
    ];
  }

  if (question.type === "dual-checkbox") {
    return question.groups.flatMap((group) => {
      const fields = [...document.querySelectorAll(`[name="${group.id}"]`)];
      const extra = state.otherInputs.get(group.id);
      return extra ? [...fields, extra.input] : fields;
    });
  }

  const el = document.getElementById(question.id);
  return el ? [el] : [];
}

function buildPolicyText(answers) {
  const goals = formatList(answers.course_goals);
  const aiSkills = formatList(answers.ai_skills);
  const risks = formatList(answers.skills_at_risk);
  const allowedStages = formatList(answers.allowed_stages);
  const recommendedUses = formatList(answers.recommended_ai.recommended_uses);
  const recommendedTools = formatList(answers.recommended_ai.recommended_tools);
  const privacyWarnings = formatList(answers.privacy_warnings);
  const reportingScope = formatList(answers.reporting_scope);
  const reportingTiming = formatList(answers.reporting_timing);
  const masteryChecks = formatList(answers.mastery_checks);
  const boundaryConsequences = formatList(answers.boundary_consequences);
  const reportingConsequences = formatList(answers.reporting_consequences);

  const reportingFormat =
    answers.reporting_format === "קישור לתבנית שלכם" && answers.reporting_format_link
      ? `קישור לתבנית הדיווח שנבחרה בקורס: ${answers.reporting_format_link}.`
      : "הדיווח יתבצע באמצעות תבנית הצהרת שימוש ב-AI במטלות.";

  const citationText = answers.citation_guidance
    ? `לעניין הפניה וציטוט של תוכן שנוצר על ידי AI: ${answers.citation_guidance}`
    : "במקרים שבהם נעשה שימוש בתוכן שנוצר על ידי AI, הסטודנטים יידרשו לציין במפורש את הכלי, אופי השימוש והיקפו בהתאם להנחיות המטלה.";

  const equityBlock = [answers.equity_paid_tools, answers.equity_support].filter(Boolean);

  const text = `מדיניות שימוש ב-AI בקורס

מה עומד מאחורי המדיניות?
מטרת מדיניות השימוש בבינה מלאכותית בקורס היא שמירה על מטרות הקורס ואיכות הלמידה בעידן בו כלי AI נגישים וזמינים לסטודנטים. כחלק ממטרות הקורס תרכשו מיומנויות וידע בתחומים הבאים: ${goals}. בקורס נעסוק גם ברכישה של מיומנויות שימוש בבינה מלאכותית כגון: ${aiSkills}. עם זאת, אנו מתייחסים ברצינות לשימוש בבינה מלאכותית בקורס על מנת לקדם את הלמידה שלכם. חשוב לנו לצמצם פגיעה אפשרית בתחומים הבאים: ${risks}.

גבולות הגזרה: מה מותר ואסור לבצע בקורס: מה מותר ואסור לבצע בקורס
השימוש ב-AI מותר ואף מומלץ בעיקר בשלבים או בהקשרים הבאים: ${allowedStages}. הקו המנחה המרכזי בקורס הוא: ${answers.boundary_level}. דוגמאות לשימושים מומלצים בקורס: ${recommendedUses}. הכלים המומלצים לשימוש במסגרת הקורס הם: ${recommendedTools}.

אחריות הסטודנט/ית
${answers.student_responsibility}
רמת בדיקת האמינות המצופה מהסטודנטים היא: ${answers.verification_level}. בנוסף, יש להקפיד על ההנחיות הבאות בנושאי פרטיות ואבטחת מידע: ${privacyWarnings}.

חוות הדיווח במסגרת הקורס הקורס
כאשר נעשה שימוש ב-AI, הסטודנטים נדרשים לדווח לפחות על הפרטים הבאים: ${reportingScope}. ${reportingFormat} הדיווח נדרש במצבים הבאים: ${reportingTiming}. ${citationText} בקיאות הסטודנטים בחומר ובעבודה עשויה להיבדק גם באמצעות: ${masteryChecks}.

אכיפה והשלכות
שימוש ב-AI מחוץ לגבולות המותרים עלול להוביל לאחת או יותר מההשלכות הבאות: ${boundaryConsequences}. אי-דיווח על שימוש ב-AI עלול להוביל לאחת או יותר מההשלכות הבאות: ${reportingConsequences}.
${equityBlock.length
      ? `
נקודות למחשבה עבור המרצה
${equityBlock.map((text) => `- ${text}`).join("\n")}`
      : ""
    }
`;
  return text.replace(/::+/g, ":").replace(/\.\.+/g, ".");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function cleanValue(val) {
  if (typeof val === "string") {
    let cleaned = val.replace(/^נוסח מוצע:\s*/, "");
    cleaned = cleaned.replace(/^רמה \d+:\s*/, "");
    cleaned = cleaned.replace(/::+/g, ":");
    cleaned = cleaned.replace(/\.\.+/g, ".");
    return cleaned.trim();
  }
  return val;
}

function hasMeaningfulAnswer(value) {
  if (Array.isArray(value)) {
    return value.length > 0;
  }

  if (value && typeof value === "object") {
    return Object.values(value).some((entry) => hasMeaningfulAnswer(entry));
  }

  if (typeof value === "string") {
    return value.trim().length > 0;
  }

  return Boolean(value);
}

function getAnswerText(value) {
  if (!hasMeaningfulAnswer(value)) {
    return "";
  }

  if (Array.isArray(value)) {
    const cleaned = value.map(val => escapeHtml(cleanValue(val)));
    if (cleaned.length > 3) {
      return `<ul>${cleaned.map(item => `<li>${item}</li>`).join("")}</ul>`;
    } else if (cleaned.length >= 2) {
      return cleaned.slice(0, -1).join(", ") + " ו" + cleaned[cleaned.length - 1];
    } else {
      return cleaned[0];
    }
  }

  return escapeHtml(cleanValue(String(value)));
}

function renderHtmlParagraph(text) {
  if (text.includes("<ul>")) {
    const parts = text.split("<ul>");
    const intro = parts[0].trim();
    const list = "<ul>" + parts[1];
    const cleanIntro = intro.endsWith(".") || intro.endsWith(":") ? intro : intro + ":";
    const cleanList = list.replace(/\.\s*<\/p>$/, "</p>").replace(/\.\s*$/, "");
    return `<p>${cleanIntro}</p>${cleanList}`;
  }
  return `<p>${text}</p>`;
}

function sanitizeUrl(value) {
  if (!value) {
    return "";
  }

  try {
    const url = new URL(value, window.location.href);
    if (url.protocol === "http:" || url.protocol === "https:") {
      return url.href;
    }
  } catch (error) {
    return "";
  }

  return "";
}

function buildPolicyHtml(answers) {
  const goals = getAnswerText(answers.course_goals);
  const aiSkills = getAnswerText(answers.ai_skills);
  const risks = getAnswerText(answers.skills_at_risk);
  const allowedStages = getAnswerText(answers.allowed_stages);
  const boundaryLevel = getAnswerText(answers.boundary_level);
  const recommendedUses = getAnswerText(answers.recommended_ai.recommended_uses);
  const recommendedTools = getAnswerText(answers.recommended_ai.recommended_tools);
  const studentResponsibility = getAnswerText(answers.student_responsibility);
  const verificationLevel = getAnswerText(answers.verification_level);
  const privacyWarnings = getAnswerText(answers.privacy_warnings);
  const reportingScope = getAnswerText(answers.reporting_scope);
  const reportingTiming = getAnswerText(answers.reporting_timing);
  const masteryChecks = getAnswerText(answers.mastery_checks);
  const boundaryConsequences = getAnswerText(answers.boundary_consequences);
  const reportingConsequences = getAnswerText(answers.reporting_consequences);
  const policyLink = sanitizeUrl(answers.reporting_format_link);
  const citationGuidance = getAnswerText(answers.citation_guidance);
  const equityBlock = [answers.equity_paid_tools, answers.equity_support].filter((value) => hasMeaningfulAnswer(value));
  const sections = ['<h2>מדיניות שימוש ב-AI בקורס ________</h2>'];

  const addSection = (title, items) => {
    if (!items.length) {
      return;
    }

    sections.push(`<h3>${title}</h3>`);
    sections.push(...items.map((item) => renderHtmlParagraph(item)));
  };

  const rationaleItems = [];
  if (goals) {
    rationaleItems.push(`בקורס נעסוק ברכישת ידע ופיתוח המיומנויות הבאות: ${goals}.`);
  }
  if (aiSkills) {
    rationaleItems.push(`כמו כן, במסגרת הקורס תרכשו גם מיומנויות שימוש ב-AI כגון: ${aiSkills}.`);
  }
  if (risks) {
    rationaleItems.push(`כדי לתמוך במטרות הקורס ובפיתוח הידע והמיומנויות הנדרשים בו, חשוב להשתמש ב־AI באופן מושכל. גבולות השימוש בקורס נועדו לצמצם פגיעה אפשרית בתחומים הבאים: ${risks}.`);
  }
  if (rationaleItems.length) {
    rationaleItems.unshift("מטרת מדיניות השימוש בבינה מלאכותית בקורס היא לשמר ולחזק את הלמידה בקורס. המדיניות מחברת בין השימוש ב־AI לבין מטרות הקורס, ותומכת בלמידה משמעותית, עצמאית ואיכותית.");
  }
  addSection("מה עומד מאחורי המדיניות?", rationaleItems);

  const boundaryItems = [];
  if (allowedStages) {
    boundaryItems.push(`במהלך הקורס אפשר ואף רצוי להיעזר ב־AI בנקודות שבהן הוא תומך בלמידה ובתהליך העבודה. אלה השלבים וההקשרים שבהם השימוש מומלץ: ${allowedStages}.`);
  }
  if (boundaryLevel) {
    boundaryItems.push(`הקו המנחה המרכזי לאופי שילוב הטכנולוגיה בקורס הוא: ${boundaryLevel}.`);
  }
  if (recommendedUses) {
    boundaryItems.push(`דוגמאות לשימושים מומלצים בקורס: ${recommendedUses}.`);
  }
  if (recommendedTools) {
    boundaryItems.push(`הכלים המומלצים לשימוש במסגרת הקורס הם: ${recommendedTools}.`);
  }
  addSection("גבולות הגזרה: מה מותר ואסור לבצע בקורס", boundaryItems);

  const responsibilityItems = [];
  if (studentResponsibility) {
    responsibilityItems.push(studentResponsibility);
  }
  if (verificationLevel) {
    responsibilityItems.push(`היקף בדיקת האמינות המצופה מהסטודנטים הוא ${verificationLevel}.`);
  }
  if (privacyWarnings) {
    responsibilityItems.push(`שימו לב, יש להקפיד במיוחד על ההנחיות הבאות בנושאי פרטיות ואבטחת מידע: ${privacyWarnings}.`);
  }
  addSection("אחריות הסטודנט/ית", responsibilityItems);

  const transparencyItems = [];
  if (reportingScope) {
    transparencyItems.push(`כל שימוש ב־AI במסגרת הקורס מחייב תיעוד. בדיווח יש לכלול לפחות את הפרטים הבאים: ${reportingScope}.`);
  }
  if (hasMeaningfulAnswer(answers.reporting_format)) {
    if (answers.reporting_format === "קישור לתבנית שלכם" && answers.reporting_format_link) {
      transparencyItems.push(
        policyLink
          ? `במסגרת הקורס תוכלו לבצע שימוש בתבנית הבאה למטרת דיווח שימוש ב-AI: <a href="${escapeHtml(policyLink)}" target="_blank" rel="noopener">${escapeHtml(
            answers.reporting_format_link
          )}</a>.`
          : `במסגרת הקורס תוכלו לבצע שימוש בתבנית הבאה למטרת דיווח שימוש ב-AI: ${escapeHtml(answers.reporting_format_link)}.`
      );
    } else if (answers.reporting_format === "תבנית הצהרת שימוש ב-AI במטלות") {
      transparencyItems.push('במסגרת הקורס תוכלו לבצע שימוש בתבנית הבאה למטרת דיווח שימוש ב-AI: <a href="assets/files/הצהרה על שימוש בכלי בינה מלאכותית במטלות.docx" target="_blank" rel="noopener">תבנית הצהרת שימוש ב-AI</a>.');
    }
  }
  if (reportingTiming) {
    transparencyItems.push(`יש להקפיד על הדיווח בעיקר במקרים הבאים:  ${reportingTiming}.`);
  }
  if (citationGuidance) {
    transparencyItems.push(`במטלות הכוללות כתיבה אקדמית במסגרת הקורס יש לעמוד בכללי ציטוט בנוגע לתכנים שמקורם ב-AI, צורת הציטוט הנדרשת היא: ${citationGuidance}.`);
  }
  if (masteryChecks) {
    transparencyItems.push(`חלק מהערכת הלמידה, ההבנה של החומר ושל תהליך העבודה עשויה להיבדק גם בדרכים הבאות: ${masteryChecks}.`);
  }
  addSection("חוות הדיווח במסגרת הקורס הקורס", transparencyItems);

  const enforcementItems = [];
  if (boundaryConsequences) {
    enforcementItems.push(`עמידה במדיניות השימוש בטכנולוגיה היא חלק מדרישות הקורס. כאשר השימוש ב־AI אינו תואם את הגבולות שנקבעו, עשויות לחול אחת או יותר מההשלכות הבאות: ${boundaryConsequences}.`);
  }
  if (reportingConsequences) {
    enforcementItems.push(`שקיפות לגבי השימוש ב־AI היא חלק מהאתיקה ומהאחריות האקדמית בקורס. דיווח חסר, חלקי או כזה שאינו עומד בדרישות הקורס עשוי להוביל לאחת או יותר מההשלכות הבאות: ${reportingConsequences}.`);
  }
  addSection("אכיפה והשלכות", enforcementItems);

  if (equityBlock.length) {
    sections.push("<h3>נקודות למחשבה עבור המרצה</h3>");
    sections.push(`<ul>${equityBlock.map((text) => `<li>${escapeHtml(text)}</li>`).join("")}</ul>`);
  }

  return sections.join("\n").replace(/::+/g, ":").replace(/\.\.+/g, ".");
}

function formatSlideList(listValue) {
  if (!listValue || (Array.isArray(listValue) && listValue.length === 0)) {
    return "";
  }

  if (Array.isArray(listValue)) {
    const cleaned = listValue.map(cleanValue).filter(Boolean);
    if (cleaned.length >= 2) {
      return cleaned.slice(0, -1).join(", ") + " ו" + cleaned[cleaned.length - 1];
    } else if (cleaned.length === 1) {
      return cleaned[0];
    } else {
      return "";
    }
  }

  return cleanValue(String(listValue));
}

function renderSlideBullet(label, value) {
  if (!value) return "";
  if (value.startsWith("<ul>")) {
    return `<li>${label}:</li>${value}`;
  }
  return `<li>${label}: ${value}</li>`;
}

function buildStudentSlide(answers, forceRegenerate = false) {
  const slideWrapper = document.getElementById("slide-wrapper");
  const slideEmptyState = document.getElementById("slide-empty-state");

  // 1. Check if we have manually edited slide html in localStorage and are NOT forcing regeneration
  // Also force regeneration if cached html contains deprecated slide-pill or slide-edit-badge elements
  try {
    const savedSlideHtml = localStorage.getItem("hit_policy_edited_slide_html");
    if (savedSlideHtml && !forceRegenerate && !savedSlideHtml.includes("slide-pill") && !savedSlideHtml.includes("slide-edit-badge") && !savedSlideHtml.includes("slide-logo-placeholder") && savedSlideHtml.includes("slide-logo-wrapper") && !savedSlideHtml.includes("אחריות אישית:") && !savedSlideHtml.includes("נדרש לבדוק לפי")) {
      if (slideWrapper) slideWrapper.classList.remove("d-none");
      if (slideEmptyState) slideEmptyState.classList.add("d-none");

      let cleanedHtml = savedSlideHtml;
      // Clean up outdated margin classes that interfere with relative sizes
      cleanedHtml = cleanedHtml.replace('class="display-6 mb-2"', 'class="display-6"');
      cleanedHtml = cleanedHtml.replace('class="mb-4 text-white-50"', 'class="text-white-50 fw-bold"');
      if (!cleanedHtml.includes('class="text-white-50 fw-bold"')) {
        cleanedHtml = cleanedHtml.replace('class="text-white-50"', 'class="text-white-50 fw-bold"');
      }
      // Remove the pipe before HIT and ensure bold footer text
      cleanedHtml = cleanedHtml.replace(' | HIT', ' HIT');
      cleanedHtml = cleanedHtml.replace('class="mb-0 text-white-50 text-center"', 'class="mb-0 text-white-50 text-center fw-bold"');
      studentSlideEl.innerHTML = cleanedHtml;

      setupSlideEditListeners();
      return;
    }
  } catch (e) {
    console.warn("Error loading saved slide html from localStorage:", e);
  }

  // 2. Gather values and check which of the sections have meaningful content
  const risks = formatSlideList(answers.skills_at_risk);
  const allowedStages = formatSlideList(answers.allowed_stages);
  const boundaryLevel = cleanValue(answers.boundary_level);
  const recommendedUses = formatSlideList(answers.recommended_ai?.recommended_uses);
  const recommendedTools = formatSlideList(answers.recommended_ai?.recommended_tools);

  let studentResponsibility = cleanValue(answers.student_responsibility);
  if (studentResponsibility.includes("על הסטודנט או הסטודנטית חלה האחריות המלאה")) {
    studentResponsibility = "האחריות המלאה על מהימנות, אתיקה וזכויות יוצרים בתוצרי הקורס היא על הסטודנט/ית.";
  }

  const verificationLevel = cleanValue(answers.verification_level);
  const privacyWarnings = formatSlideList(answers.privacy_warnings);

  const reportingScope = formatSlideList(answers.reporting_scope);
  let reportingFormat = "";
  if (answers.reporting_format === "קישור לתבנית שלכם" && answers.reporting_format_link) {
    const cleanUrl = sanitizeUrl(answers.reporting_format_link) || escapeHtml(answers.reporting_format_link);
    reportingFormat = `באמצעות <a href="${cleanUrl}" target="_blank" rel="noopener">קישור לתבנית הדיווח</a>`;
  } else if (answers.reporting_format === "תבנית הצהרת שימוש ב-AI במטלות") {
    reportingFormat = `באמצעות <a href="assets/files/הצהרה על שימוש בכלי בינה מלאכותית במטלות.docx" target="_blank" rel="noopener">תבנית הצהרת שימוש ב-AI במטלות</a>`;
  }
  const reportingTiming = formatSlideList(answers.reporting_timing);

  // Combine consequences (questions 14, 15, 16)
  const combinedConsequencesList = [];
  if (Array.isArray(answers.boundary_consequences)) {
    combinedConsequencesList.push(...answers.boundary_consequences);
  }
  if (Array.isArray(answers.reporting_consequences)) {
    combinedConsequencesList.push(...answers.reporting_consequences);
  }
  const uniqueConsequences = [...new Set(combinedConsequencesList)];
  const formattedConsequences = formatSlideList(uniqueConsequences);
  const formattedMastery = formatSlideList(answers.mastery_checks);

  const equitySupport = answers.equity_support ? cleanValue(answers.equity_support) : "";

  // Check section visibility based on slide requirements (Questions 1, 2, 13, 17 are omitted)
  const hasRationale = hasMeaningfulAnswer(answers.skills_at_risk);
  const hasBoundaries = hasMeaningfulAnswer(answers.boundary_level) || hasMeaningfulAnswer(answers.allowed_stages) || hasMeaningfulAnswer(answers.recommended_ai?.recommended_uses) || hasMeaningfulAnswer(answers.recommended_ai?.recommended_tools);
  const hasResponsibility = hasMeaningfulAnswer(answers.student_responsibility) || hasMeaningfulAnswer(answers.verification_level) || hasMeaningfulAnswer(answers.privacy_warnings);
  const hasTransparency = hasMeaningfulAnswer(answers.reporting_scope) || hasMeaningfulAnswer(answers.reporting_timing) || hasMeaningfulAnswer(answers.reporting_format);
  const hasEnforcement = hasMeaningfulAnswer(answers.boundary_consequences) || hasMeaningfulAnswer(answers.reporting_consequences) || hasMeaningfulAnswer(answers.mastery_checks);
  const hasEquity = hasMeaningfulAnswer(answers.equity_support);

  // Calculate active cards
  let activeCardsCount = 0;
  if (hasRationale) activeCardsCount++;
  if (hasBoundaries) activeCardsCount++;
  if (hasResponsibility) activeCardsCount++;
  if (hasTransparency) activeCardsCount++;
  if (hasEnforcement) activeCardsCount++;
  if (hasEquity) activeCardsCount++;

  // 3. Handle Empty State (< 2 cards filled)
  if (activeCardsCount < 2) {
    if (slideWrapper) slideWrapper.classList.add("d-none");
    if (slideEmptyState) slideEmptyState.classList.remove("d-none");
    return;
  }

  if (slideWrapper) slideWrapper.classList.remove("d-none");
  if (slideEmptyState) slideEmptyState.classList.add("d-none");

  // 4. Build slide HTML
  let cardsHtml = "";

  // Card 1: הרציונאל (שמירה מפני פגיעה בלבד)
  if (hasRationale) {
    let bullets = `<li>המדיניות מאפשרת שימוש ב־AI באופן שתומך במטרות הקורס ושומר על למידה משמעותית, עצמאית ואיכותית.</li>`;
    if (risks) bullets += renderSlideBullet("בקורס חשוב לנו לשמור במיוחד על מיומנויות הליבה הבאות", risks);

    cardsHtml += `
      <div class="slide-card">
        <h4>מה עומד מאחורי המדיניות?</h4>
        <ul>${bullets}</ul>
      </div>
    `;
  }

  // Card 2: גבולות הגזרה
  if (hasBoundaries) {
    let bullets = "";
    if (boundaryLevel) bullets += `<li>${boundaryLevel}</li>`;
    if (allowedStages) bullets += renderSlideBullet("מתי מותר (ואף מומלץ) להשתמש בAI", allowedStages);
    if (recommendedUses) bullets += renderSlideBullet("דוגמאות לשימושים מומלצים", recommendedUses);
    if (recommendedTools) bullets += renderSlideBullet("כלים מומלצים", recommendedTools);

    cardsHtml += `
      <div class="slide-card">
        <h4>גבולות הגזרה: מה מותר ואסור לבצע בקורס</h4>
        <ul>${bullets}</ul>
      </div>
    `;
  }

  // Card 3: אחריות הסטודנט/ית
  if (hasResponsibility) {
    let bullets = "";
    if (studentResponsibility) bullets += `<li>${studentResponsibility}</li>`;
    if (verificationLevel) bullets += `<li>היקף אימות המידע הנדרש בקורס הוא ${verificationLevel}</li>`;
    if (privacyWarnings) bullets += renderSlideBullet("פרטיות ואבטחת מידע", privacyWarnings);

    cardsHtml += `
      <div class="slide-card">
        <h4>אחריות הסטודנט/ית</h4>
        <ul>${bullets}</ul>
      </div>
    `;
  }

  // Card 4: שקיפות וחובת דיווח
  if (hasTransparency) {
    let bullets = "";
    if (reportingScope) bullets += renderSlideBullet("פרטים שיש לדווח", reportingScope);
    if (reportingFormat) bullets += `<li>אופן הדיווח: ${reportingFormat}</li>`;
    if (reportingTiming) bullets += renderSlideBullet("יש לבצע דיווח במקרים הבאים", reportingTiming);

    cardsHtml += `
      <div class="slide-card">
        <h4>חוות הדיווח במסגרת הקורס</h4>
        <ul>${bullets}</ul>
      </div>
    `;
  }

  // Card 5: אכיפה והשלכות (unifying questions 14, 15, 16)
  if (hasEnforcement) {
    let bullets = "";
    if (formattedMastery) bullets += renderSlideBullet("על מנת לוודא בקיאות בנלמד יבוצעו: ", formattedMastery);
    if (formattedConsequences) bullets += renderSlideBullet("במקרה של חריגה מהמדיניות", formattedConsequences);

    cardsHtml += `
      <div class="slide-card">
        <h4>אכיפה והשלכות</h4>
        <ul>${bullets}</ul>
      </div>
    `;
  }

  // Card 6: שוויון ונגישות
  if (hasEquity) {
    let bullets = "";
    if (equitySupport) bullets += renderSlideBullet("פערי אוריינות", equitySupport);

    cardsHtml += `
      <div class="slide-card">
        <h4>שוויון ונגישות</h4>
        <ul>${bullets}</ul>
      </div>
    `;
  }

  // Select dynamic columns layout: 2 columns for 2 or 4 cards; 3 columns otherwise
  const gridClass = (activeCardsCount === 2 || activeCardsCount === 4) ? "slide-grid--2" : "slide-grid--3";

  const generatedHtml = `
    <div id="slide-editable-content" contenteditable="true" spellcheck="false" class="editable-slide-content">
      <div class="slide-header">
        <div class="slide-header-text">
          <h3 class="display-6">השימוש ב־AI בקורס</h3>
          <p class="text-secondary-emphasis fw-bold">כללים לשימוש אחראי בכלי AI במהלך הקורס</p>
        </div>
        <div class="slide-logo-wrapper" contenteditable="false" title="לוגו הקרייה האקדמית אונו">
          <img src="assets/logo/onoCenterLogo.png?v=1.0.56" alt="לוגו הקרייה האקדמית אונו" class="slide-logo-img" />
        </div>
      </div>
      <div class="slide-grid ${gridClass}">
        ${cardsHtml}
      </div>
    </div>
    <div class="slide-footer mt-auto">
      <p class="mb-0 text-secondary-emphasis text-center fw-bold">הופק בעזרת כלי עזר לניסוח מדניות שימוש ב-AI בקורס</p>
    </div>
  `;

  studentSlideEl.innerHTML = generatedHtml;

  // Save the generated slide html to localStorage
  try {
    localStorage.setItem("hit_policy_edited_slide_html", generatedHtml);
  } catch (e) { }

  setupSlideEditListeners();
}

function setupSlideEditListeners() {
  const slideContent = document.getElementById("slide-editable-content");
  if (slideContent) {
    const saveEdit = () => {
      try {
        localStorage.setItem("hit_policy_edited_slide_html", studentSlideEl.innerHTML);
      } catch (e) {
        console.warn("Error saving edited slide html to localStorage:", e);
      }
    };

    slideContent.addEventListener("input", saveEdit);
    slideContent.addEventListener("blur", saveEdit);
  }
}

function formatList(listValue) {
  if (!listValue || (Array.isArray(listValue) && listValue.length === 0)) {
    return "לא הוגדר בשלב זה";
  }

  if (Array.isArray(listValue)) {
    const cleaned = listValue.map(cleanValue);
    if (cleaned.length > 3) {
      return "\n" + cleaned.map(item => `  - ${item}`).join("\n");
    } else if (cleaned.length >= 2) {
      return cleaned.slice(0, -1).join(", ") + " ו" + cleaned[cleaned.length - 1];
    } else {
      return cleaned[0];
    }
  }

  return cleanValue(listValue);
}

function takeTopItems(listValue, limit) {
  if (!listValue) {
    return ["לפי הנחיות המרצה בקורס"];
  }

  if (Array.isArray(listValue) && listValue.length) {
    return listValue.slice(0, limit).map(cleanValue);
  }

  return [cleanValue(String(listValue))];
}

function saveStateToLocalStorage() {
  try {
    localStorage.setItem("hit_policy_answers", JSON.stringify(state.answers));
    localStorage.setItem("hit_policy_current_index", String(state.currentQuestionIndex));
    localStorage.setItem("hit_policy_skipped", JSON.stringify([...state.skippedQuestions]));
  } catch (error) {
    console.warn("Unable to save state to localStorage:", error);
  }
}

function loadStateFromLocalStorage() {
  try {
    const answers = localStorage.getItem("hit_policy_answers");
    const currentIndex = localStorage.getItem("hit_policy_current_index");
    const skipped = localStorage.getItem("hit_policy_skipped");

    if (answers) {
      state.answers = JSON.parse(answers);
    }
    if (currentIndex !== null) {
      state.currentQuestionIndex = parseInt(currentIndex, 10) || 0;
    }
    if (skipped) {
      state.skippedQuestions = new Set(JSON.parse(skipped));
    }
  } catch (error) {
    console.warn("Unable to load state from localStorage:", error);
  }
}

function clearStateFromLocalStorage() {
  try {
    localStorage.removeItem("hit_policy_answers");
    localStorage.removeItem("hit_policy_current_index");
    localStorage.removeItem("hit_policy_skipped");
    localStorage.removeItem("hit_policy_edited_html");
    localStorage.removeItem("hit_policy_completed");
    localStorage.removeItem("hit_policy_edited_slide_html");
    localStorage.removeItem("hit_policy_accordion_collapse-editor_open");
    localStorage.removeItem("hit_policy_accordion_collapse-slide_open");
  } catch (error) {
    console.warn("Unable to clear state from localStorage:", error);
  }
}

function initPolicyEditor() {
  if (policyEditor || !window.Quill || !policyOutputEl) {
    return;
  }

  policyEditor = new window.Quill("#policy-output", {
    theme: "snow",
    placeholder: "כאן תוכלו לערוך את המדיניות שנוצרה, להדגיש, להוסיף קישורים ולעצב את הטקסט.",
    modules: {
      toolbar: "#policy-toolbar"
    }
  });

  policyEditor.on("text-change", () => {
    try {
      localStorage.setItem("hit_policy_edited_html", getPolicyHtml());
    } catch (error) {
      console.warn("Unable to save edited html to localStorage:", error);
    }
  });
}

function setPolicyEditorContent(html) {
  if (policyEditor) {
    policyEditor.setContents([]);
    policyEditor.clipboard.dangerouslyPasteHTML(html);
    return;
  }

  policyOutputEl.innerHTML = html;
}

function getPolicyPlainText() {
  if (policyEditor) {
    return policyEditor.getText().trim();
  }

  return policyOutputEl.textContent.trim();
}

function getPolicyHtml() {
  if (policyEditor) {
    return policyEditor.root.innerHTML.trim();
  }

  return policyOutputEl.innerHTML.trim();
}

function scrollToResults() {
  resultsSection.hidden = false;

  // Collapse both results sections by default after generation
  ["collapse-editor", "collapse-slide"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      if (window.bootstrap?.Collapse) {
        const bsCollapse = window.bootstrap.Collapse.getInstance(el);
        if (bsCollapse) {
          bsCollapse.hide();
        } else {
          el.classList.remove("show");
        }
      } else {
        el.classList.remove("show");
      }
    }
    const triggers = document.querySelectorAll(`[data-bs-target="#${id}"]`);
    triggers.forEach(trig => trig.setAttribute("aria-expanded", "false"));
    const btn = document.querySelector(`button[data-bs-target="#${id}"]`);
    if (btn) {
      const textSpan = btn.querySelector(".accordion-btn-text");
      if (textSpan) textSpan.textContent = "הצג";
    }
  });

  resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function cleanHtmlForClipboard(html) {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;

  // Convert ol lists that represent bullet lists to ul
  const ols = tempDiv.querySelectorAll("ol");
  ols.forEach((ol) => {
    const firstLi = ol.querySelector("li");
    if (firstLi && firstLi.getAttribute("data-list") === "bullet") {
      const ul = document.createElement("ul");
      if (ol.hasAttributes()) {
        for (const attr of ol.attributes) {
          ul.setAttribute(attr.name, attr.value);
        }
      }
      while (ol.firstChild) {
        ul.appendChild(ol.firstChild);
      }
      ol.parentNode.replaceChild(ul, ol);
    }
  });

  // Clean data-list and ql-ui elements in all lists (bullets and ordered)
  tempDiv.querySelectorAll("li").forEach((li) => {
    li.removeAttribute("data-list");
    const qlUi = li.querySelector(".ql-ui");
    if (qlUi) {
      qlUi.remove();
    }
  });

  return tempDiv.innerHTML;
}

async function copyPolicyText() {
  const text = getPolicyPlainText();
  const rawHtml = getPolicyHtml();
  if (!text) {
    return;
  }

  const html = cleanHtmlForClipboard(rawHtml);

  try {
    if (navigator.clipboard?.write && window.ClipboardItem) {
      await navigator.clipboard.write([
        new ClipboardItem({
          "text/plain": new Blob([text], { type: "text/plain" }),
          "text/html": new Blob([html], { type: "text/html" })
        })
      ]);
    } else {
      await navigator.clipboard.writeText(text);
    }
    showToast("הטקסט הועתק ללוח בהצלחה.");
  } catch (error) {
    showToast("לא הצלחנו להעתיק אוטומטית. אפשר לסמן ולהעתיק ידנית.");
  }
}

function showToast(message) {
  const toastEl = document.getElementById("copy-toast");
  if (toastEl && window.bootstrap?.Toast) {
    const bodyEl = toastEl.querySelector(".toast-body");
    if (bodyEl) {
      bodyEl.textContent = message;
    }
    let toastInstance = window.bootstrap.Toast.getInstance(toastEl);
    if (!toastInstance) {
      toastInstance = new window.bootstrap.Toast(toastEl, { delay: 3000 });
    }
    toastInstance.show();
  }
}

function handleSubmit(event) {
  event.preventDefault();
  goToNextQuestion();
}

function flattenQuestions(config) {
  return config.flatMap((section) => {
    const questions = section.questions
      .filter((question) => question.id !== "reporting_format_link")
      .map((question) => ({
        ...question,
        sectionId: section.sectionId,
        sectionTitle: section.sectionTitle,
        sectionIntro: section.intro,
        sectionCallout: section.callout || ""
      }));

    if (section.sectionId === "equity") {
      return [
        {
          pageId: `${section.sectionId}-page`,
          sectionId: section.sectionId,
          sectionTitle: section.sectionTitle,
          sectionIntro: section.intro,
          sectionCallout: section.callout || "",
          calloutPlacement: "afterQuestions",
          questions
        }
      ];
    }

    return questions.map((question) => ({
      pageId: question.id,
      sectionId: section.sectionId,
      sectionTitle: section.sectionTitle,
      sectionIntro: section.intro,
      sectionCallout: section.callout || "",
      calloutPlacement: "beforeQuestions",
      questions: [question]
    }));
  });
}

function renderWizard() {
  formSectionsEl.innerHTML = `
    <div class="wizard-shell" aria-labelledby="wizard-title">
      <div class="wizard-topbar">
        <div id="wizard-section-header" class="form-section-header mb-0"></div>
        <p class="visually-hidden" id="wizard-progress-text" aria-live="polite"></p>
      </div>
      <div class="progress wizard-progress" role="progressbar" aria-labelledby="wizard-progress-text" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar" id="wizard-progress-bar"></div>
      </div>
      <div id="wizard-question" class="wizard-question"></div>
      <div class="wizard-actions">
        <div class="wizard-actions-group">
          <button type="button" class="btn btn-outline-primary" id="wizard-prev">הקודם</button>
          <button type="button" class="btn btn-outline-secondary d-none" id="wizard-clear">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16" aria-hidden="true" style="vertical-align: middle; margin-inline-end: 0.35rem;">
              <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
              <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
            </svg><span>נקה תשובות</span>
          </button>
        </div>
        <div class="wizard-actions-group">
          <button type="button" class="btn btn-outline-primary" id="wizard-skip">דלג על השאלה</button>
          <button type="submit" class="btn btn-primary" id="wizard-next">הבא</button>
        </div>
      </div>
    </div>
  `;

  const handleClear = () => {
    if (resetConfirmModal) {
      resetConfirmModal.show();
    } else if (confirm("להתחיל מחדש? כל המידע שמילאת יימחק.")) {
      resetWizard();
    }
  };

  document.getElementById("wizard-prev").addEventListener("click", goToPreviousQuestion);
  document.getElementById("wizard-clear").addEventListener("click", handleClear);
  document.getElementById("wizard-skip").addEventListener("click", () => {
    const total = state.wizardQuestions.length;
    if (state.currentQuestionIndex === total - 1) {
      handleClear();
    } else {
      skipCurrentQuestion();
    }
  });

  showQuestion(state.currentQuestionIndex);
}

function showQuestion(index, options = {}) {
  state.currentQuestionIndex = Math.min(Math.max(index, 0), state.wizardQuestions.length - 1);

  try {
    localStorage.setItem("hit_policy_current_index", String(state.currentQuestionIndex));
  } catch (e) { }

  const page = state.wizardQuestions[state.currentQuestionIndex];
  const questionMount = document.getElementById("wizard-question");

  state.questionElements.clear();
  state.otherInputs.clear();
  state.conditionalInputs.clear();
  questionMount.innerHTML = "";

  const sectionHeaderEl = document.getElementById("wizard-section-header");
  if (sectionHeaderEl) {
    sectionHeaderEl.innerHTML = `
      <h3 id="${page.sectionId}-title" class="h4 mb-1">${page.sectionTitle}</h3>
      <p class="mb-0 text-secondary-emphasis" style="font-size: 0.95rem;">${page.sectionIntro}</p>
    `;
  }

  const wrapper = document.createElement("div");
  wrapper.className = "form-section";
  wrapper.setAttribute("aria-labelledby", `${page.sectionId}-title`);

  if (page.sectionCallout && page.calloutPlacement !== "afterQuestions") {
    wrapper.appendChild(createCalloutElement(page.sectionCallout, `${page.sectionId}-callout-shown`));
  }

  page.questions.forEach((question, questionIndex) => {
    const questionEl = renderQuestion(question, question.sectionId);
    if (page.questions.length > 1 && questionIndex === 0) {
      questionEl.classList.add("question-block--mb-3");
    }
    wrapper.appendChild(questionEl);
  });

  if (page.sectionCallout && page.calloutPlacement === "afterQuestions") {
    wrapper.appendChild(createCalloutElement(page.sectionCallout, `${page.sectionId}-callout-shown`));
  }

  questionMount.appendChild(wrapper);

  // Restore answers now that elements are mounted in the DOM
  page.questions.forEach((question) => {
    restoreQuestionAnswer(question, state.answers[question.id]);
  });

  updateWizardProgress();
  clearAllErrors();

  if (options.focusQuestion) {
    state.questionElements.get(page.questions[0]?.id)?.fieldset.focus();
  }
}

function updateWizardProgress() {
  const total = state.wizardQuestions.length;
  const current = state.currentQuestionIndex + 1;
  const percent = Math.round((current / total) * 100);
  const progressText = document.getElementById("wizard-progress-text");
  const progressBar = document.getElementById("wizard-progress-bar");
  const progress = progressBar?.closest(".progress");
  const prevButton = document.getElementById("wizard-prev");
  const nextButton = document.getElementById("wizard-next");
  const skipButton = document.getElementById("wizard-skip");
  const clearButton = document.getElementById("wizard-clear");

  progressText.textContent = `שאלה ${current} מתוך ${total}`;
  progressBar.style.width = `${percent}%`;
  progress?.setAttribute("aria-valuenow", String(percent));
  prevButton.disabled = state.currentQuestionIndex === 0;
  nextButton.textContent = state.currentQuestionIndex === total - 1 ? "להפקת נוסח המדיניות" : "הבא";

  if (clearButton) {
    const isVisible = state.currentQuestionIndex > 0 && state.currentQuestionIndex < total - 1;
    clearButton.classList.toggle("d-none", !isVisible);
  }

  if (skipButton) {
    if (state.currentQuestionIndex === total - 1) {
      skipButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16" aria-hidden="true" style="vertical-align: middle; margin-inline-end: 0.35rem;">
          <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
          <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
        </svg><span>התחלה מחדש</span>
      `;
      skipButton.className = "btn btn-outline-secondary";
    } else {
      skipButton.innerHTML = "דלג על השאלה";
      skipButton.className = "btn btn-outline-primary";
    }
  }
}

function saveCurrentQuestionAnswer() {
  const page = state.wizardQuestions[state.currentQuestionIndex];
  if (!page) {
    return;
  }

  page.questions.forEach((question) => {
    const answer = collectQuestionAnswer(question);
    state.answers[question.id] = answer;
  });

  if (page.questions.every((question) => !question.required || isQuestionAnswered(question, state.answers[question.id]))) {
    state.skippedQuestions.delete(page.pageId);
  }

  saveStateToLocalStorage();
}

function collectQuestionAnswer(question) {
  let answer;

  switch (question.type) {
    case "checkbox":
      answer = collectChoiceValues(question.id, "checkbox");
      break;
    case "radio":
      answer = collectChoiceValues(question.id, "radio");
      break;
    case "dual-checkbox": {
      answer = {};
      question.groups.forEach((group) => {
        answer[group.id] = collectChoiceValues(group.id, "checkbox");
      });
      break;
    }
    case "textarea":
    case "text": {
      const input = document.getElementById(question.id);
      answer = input ? input.value.trim() : "";
      break;
    }
    case "reflection":
      answer = "";
      break;
    default:
      answer = "";
  }

  const conditionalEntry = state.conditionalInputs.get(question.id);
  if (conditionalEntry) {
    state.answers[conditionalEntry.answerId] = answer === conditionalEntry.triggerValue ? conditionalEntry.input.value.trim() : "";
  }

  return answer;
}

function restoreQuestionAnswer(question, answer) {
  if (answer === undefined || answer === null) {
    syncConditionalField(question.id);
    return;
  }

  if (question.type === "reflection") {
    return;
  }

  if (question.type === "checkbox") {
    restoreChoiceAnswer(question.id, question.options, answer, "checkbox");
  } else if (question.type === "radio") {
    restoreChoiceAnswer(question.id, question.options, answer, "radio");
  } else if (question.type === "dual-checkbox") {
    question.groups.forEach((group) => {
      restoreChoiceAnswer(group.id, group.options, answer[group.id] || [], "checkbox");
    });
  } else {
    const input = document.getElementById(question.id);
    if (input) {
      input.value = answer;
    }
  }

  const conditionalEntry = state.conditionalInputs.get(question.id);
  if (conditionalEntry) {
    syncConditionalField(question.id);
    conditionalEntry.input.value = state.answers[conditionalEntry.answerId] || "";
  }
}

function restoreChoiceAnswer(name, options, answer, type) {
  const values = Array.isArray(answer) ? answer : [answer].filter(Boolean);
  const optionValues = options.map((option) => normalizeOption(option).value);
  const optionSet = new Set(optionValues);
  const customValues = values.filter((value) => !optionSet.has(value));

  values.forEach((value) => {
    const input = [...document.querySelectorAll(`[name="${name}"]`)].find((candidate) => candidate.value === value);
    if (input) {
      input.checked = true;
    }
  });

  if (customValues.length) {
    const otherEntry = state.otherInputs.get(name);
    if (otherEntry) {
      otherEntry.toggle.checked = true;
      syncOtherField(name);
      otherEntry.input.value = type === "radio" ? customValues[0] : customValues.join(", ");
    }
  }
}

function isQuestionAnswered(question, answer) {
  if (question.type === "checkbox") {
    return Array.isArray(answer) && answer.length > 0;
  }

  if (question.type === "dual-checkbox") {
    return Object.values(answer || {}).some((groupAnswers) => Array.isArray(groupAnswers) && groupAnswers.length > 0);
  }

  if (question.type === "reflection") {
    return true;
  }

  return Boolean(typeof answer === "string" ? answer.trim() : answer);
}

function defaultQuestionAnswer(question) {
  if (question.type === "checkbox") {
    return [];
  }

  if (question.type === "dual-checkbox") {
    const answer = {};
    question.groups.forEach((group) => {
      answer[group.id] = [];
    });
    return answer;
  }

  return "";
}

function getAnswersSnapshot() {
  const answers = {};
  state.wizardQuestions.forEach((page) => {
    page.questions.forEach((question) => {
      answers[question.id] = state.answers[question.id] ?? defaultQuestionAnswer(question);
    });
  });
  Object.keys(state.answers).forEach((key) => {
    if (!(key in answers)) {
      answers[key] = state.answers[key];
    }
  });
  return answers;
}

function validateCurrentQuestion({ allowSkip = false } = {}) {
  const page = state.wizardQuestions[state.currentQuestionIndex];
  let firstError = null;

  page.questions.forEach((question) => {
    clearQuestionError(question.id);
    const answer = collectQuestionAnswer(question);
    state.answers[question.id] = answer;

    if (allowSkip || state.skippedQuestions.has(page.pageId) || firstError) {
      return;
    }

    if (question.required && !isQuestionAnswered(question, answer)) {
      firstError = {
        id: question.id,
        message: "כדי להמשיך יש לענות על השאלה או לבחור בכפתור \"דלג על השאלה\"."
      };
      return;
    }

    const conditionalEntry = state.conditionalInputs.get(question.id);
    if (conditionalEntry && answer === conditionalEntry.triggerValue && conditionalEntry.required && !conditionalEntry.input.value.trim()) {
      firstError = {
        id: question.id,
        message: "כדי להמשיך יש להוסיף קישור לתבנית שבחרתם."
      };
    }
  });

  if (!firstError) {
    saveStateToLocalStorage();
    return true;
  }

  markQuestionError(firstError.id, firstError.message);
  state.questionElements.get(firstError.id)?.fieldset.focus();
  return false;
}

function goToNextQuestion() {
  if (!validateCurrentQuestion()) {
    return;
  }

  if (state.currentQuestionIndex === state.wizardQuestions.length - 1) {
    finishWizard();
    return;
  }

  showQuestion(state.currentQuestionIndex + 1, { focusQuestion: true });
}

function goToPreviousQuestion() {
  saveCurrentQuestionAnswer();
  showQuestion(state.currentQuestionIndex - 1, { focusQuestion: true });
}

function skipCurrentQuestion() {
  const page = state.wizardQuestions[state.currentQuestionIndex];
  page.questions.forEach((question) => {
    state.answers[question.id] = defaultQuestionAnswer(question);
    const conditionalEntry = state.conditionalInputs.get(question.id);
    if (conditionalEntry) {
      state.answers[conditionalEntry.answerId] = "";
    }
    clearQuestionError(question.id);
  });
  state.skippedQuestions.add(page.pageId);

  saveStateToLocalStorage();

  if (state.currentQuestionIndex === state.wizardQuestions.length - 1) {
    finishWizard({ allowCurrentSkip: true });
    return;
  }

  showQuestion(state.currentQuestionIndex + 1, { focusQuestion: true });
}

function resetWizard() {
  clearStateFromLocalStorage();

  state.answers = {};
  state.skippedQuestions.clear();
  state.currentQuestionIndex = 0;

  if (resultsSection) {
    resultsSection.hidden = true;
  }

  if (policyEditor) {
    policyEditor.setContents([]);
  } else if (policyOutputEl) {
    policyOutputEl.innerHTML = "";
  }

  showQuestion(0, { focusQuestion: true });

  const builderSection = document.getElementById("builder");
  if (builderSection) {
    builderSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function finishWizard(options = {}) {
  clearAllErrors();
  if (copyStatusEl) {
    copyStatusEl.textContent = "";
  }

  if (!options.allowCurrentSkip && !validateCurrentQuestion()) {
    return;
  }

  const answers = collectAnswers();
  const policyHtml = buildPolicyHtml(answers);
  buildStudentSlide(answers, true);
  scrollToResults();
  if (!policyEditor) {
    initPolicyEditor();
  }
  setPolicyEditorContent(policyHtml);
  builderStatusEl.textContent = "המדיניות הופקה בהצלחה.";

  try {
    localStorage.setItem("hit_policy_completed", "true");
    localStorage.setItem("hit_policy_edited_html", policyHtml);
  } catch (e) { }

  if (reflectionModal) {
    reflectionModal.show();
  }
}

function setupSummaryLinks() {
  validationSummaryEl.addEventListener("click", (event) => {
    const link = event.target.closest("[data-focus-target]");
    if (!link) {
      return;
    }

    event.preventDefault();
    const block = document.getElementById(link.getAttribute("href").slice(1));
    const fieldset = document.getElementById(link.dataset.focusTarget);
    block?.scrollIntoView({ behavior: "smooth", block: "center" });
    fieldset?.focus();
  });
}

function setupGuidelineObserver() {
  const cards = document.querySelectorAll(".guideline-card");
  if (!("IntersectionObserver" in window)) {
    cards.forEach((card) => card.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  cards.forEach((card) => observer.observe(card));
}

function setupNavHighlight() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = [...document.querySelectorAll("#main-nav .nav-link")];

  if (!("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
      });
    },
    { threshold: 0.45 }
  );

  sections.forEach((section) => observer.observe(section));
}

function init() {
  state.wizardQuestions = flattenQuestions(formConfig);

  loadStateFromLocalStorage();

  renderWizard();
  setupSummaryLinks();
  setupGuidelineObserver();
  setupNavHighlight();

  if (reflectionModalEl && window.bootstrap?.Modal) {
    reflectionModal = new window.bootstrap.Modal(reflectionModalEl);
  }

  try {
    const completed = localStorage.getItem("hit_policy_completed") === "true";
    if (completed) {
      const savedHtml = localStorage.getItem("hit_policy_edited_html");
      if (savedHtml) {
        resultsSection.hidden = false;
        buildStudentSlide(state.answers);
        if (!policyEditor) {
          initPolicyEditor();
        }
        setPolicyEditorContent(savedHtml);
        restoreAccordionStates();
      }
    }
  } catch (e) { }

  if (resetConfirmModalEl && window.bootstrap?.Modal) {
    resetConfirmModal = new window.bootstrap.Modal(resetConfirmModalEl);
  }

  const confirmResetBtn = document.getElementById("confirm-reset-btn");
  if (confirmResetBtn) {
    confirmResetBtn.addEventListener("click", () => {
      if (resetConfirmModal) {
        resetConfirmModal.hide();
      }
      resetWizard();
    });
  }

  if (downloadSlideImageBtn) {
    downloadSlideImageBtn.addEventListener("click", downloadSlideAsImage);
  }
  if (downloadSlidePdfBtn) {
    downloadSlidePdfBtn.addEventListener("click", downloadSlideAsPdf);
  }

  const resultsResetBtn = document.getElementById("results-reset-btn");
  if (resultsResetBtn) {
    resultsResetBtn.addEventListener("click", () => {
      if (resetConfirmModal) {
        resetConfirmModal.show();
      } else if (confirm("להתחיל מחדש? כל המידע שמילאת יימחק.")) {
        resetWizard();
      }
    });
  }

  policyForm.addEventListener("submit", handleSubmit);
  copyPolicyButton.addEventListener("click", copyPolicyText);
  printPolicyButton.addEventListener("click", () => {
    printTarget = "policy";
    window.print();
  });

  window.addEventListener("beforeprint", () => {
    const printContainer = document.getElementById("policy-print-container");
    if (printContainer) {
      if (printTarget === "slide") {
        document.body.classList.add("printing-slide");

        // Append dynamic landscape page orientation style
        let styleEl = document.getElementById("dynamic-print-style");
        if (!styleEl) {
          styleEl = document.createElement("style");
          styleEl.id = "dynamic-print-style";
          styleEl.innerHTML = `
            @page {
              size: landscape;
              margin: 0;
            }
          `;
          document.head.appendChild(styleEl);
        }

        const slideContent = document.getElementById("student-slide");
        if (slideContent) {
          printContainer.innerHTML = slideContent.innerHTML;
        }
      } else {
        printContainer.innerHTML = getPolicyHtml();
      }
    }
  });

  window.addEventListener("afterprint", () => {
    document.body.classList.remove("printing-slide");

    // Remove dynamic landscape page orientation style
    const styleEl = document.getElementById("dynamic-print-style");
    if (styleEl) {
      styleEl.remove();
    }

    const printContainer = document.getElementById("policy-print-container");
    if (printContainer) {
      printContainer.innerHTML = "";
    }
    printTarget = "policy";
  });

  // Auto-close mobile menu on nav link click
  const navLinks = document.querySelectorAll("#navbarContent .nav-link");
  const navbarCollapseEl = document.getElementById("navbarContent");
  if (navLinks && navbarCollapseEl) {
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (navbarCollapseEl.classList.contains("show")) {
          const bsCollapse = window.bootstrap.Collapse.getInstance(navbarCollapseEl) || new window.bootstrap.Collapse(navbarCollapseEl);
          bsCollapse.hide();
        }
      });
    });
  }

  // Hide header on scroll down, show on scroll up; toggle back-to-top button visibility
  let lastScrollY = window.scrollY;
  const mainNav = document.getElementById("main-nav");
  const backToTopBtn = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (mainNav) {
      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        mainNav.classList.add("navbar-hidden");
      } else {
        mainNav.classList.remove("navbar-hidden");
      }
    }

    if (backToTopBtn) {
      if (currentScrollY > 300) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    }

    lastScrollY = currentScrollY;
  }, { passive: true });

  // Scroll to top on click and reset focus to start of document
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      document.body.setAttribute("tabindex", "-1");
      document.body.focus({ preventScroll: true });
    });
  }

  // Hero Animation Play/Pause Control
  const toggleHeroAnimBtn = document.getElementById("toggle-hero-anim");
  const heroGridBg = document.getElementById("hero-grid-bg");
  const srAnnouncer = document.getElementById("sr-announcer");

  if (toggleHeroAnimBtn && heroGridBg) {
    const iconPause = toggleHeroAnimBtn.querySelector(".icon-pause");
    const iconPlay = toggleHeroAnimBtn.querySelector(".icon-play");

    // Helper to set paused state
    const setAnimationsState = (isPaused, announce = false) => {
      if (isPaused) {
        heroGridBg.classList.add("animations-paused");
        if (iconPause) iconPause.style.display = "none";
        if (iconPlay) iconPlay.style.display = "block";
        toggleHeroAnimBtn.setAttribute("aria-label", "הפעלת אנימציית רקע");
        toggleHeroAnimBtn.setAttribute("title", "הפעלת אנימציית רקע");
        if (announce && srAnnouncer) {
          srAnnouncer.textContent = "אנימציית רקע הופסקה";
        }
      } else {
        heroGridBg.classList.remove("animations-paused");
        if (iconPause) iconPause.style.display = "block";
        if (iconPlay) iconPlay.style.display = "none";
        toggleHeroAnimBtn.setAttribute("aria-label", "עצירת אנימציית רקע");
        toggleHeroAnimBtn.setAttribute("title", "עצירת אנימציית רקע");
        if (announce && srAnnouncer) {
          srAnnouncer.textContent = "אנימציית רקע הופעלה";
        }
      }
    };

    // Load initial preference from localStorage
    let isPausedLocal = false;
    try {
      isPausedLocal = localStorage.getItem("hit_hero_anim_paused") === "true";
    } catch (e) { }

    // Check system preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const initialPaused = isPausedLocal || prefersReducedMotion;

    setAnimationsState(initialPaused);

    // Toggle click listener
    toggleHeroAnimBtn.addEventListener("click", () => {
      const currentlyPaused = heroGridBg.classList.contains("animations-paused");
      const nextPausedState = !currentlyPaused;

      setAnimationsState(nextPausedState, true);

      try {
        localStorage.setItem("hit_hero_anim_paused", nextPausedState.toString());
      } catch (e) { }
    });
  }

  // Mouse-following Glow in Hero Section
  const heroSection = document.getElementById("top");
  if (heroSection) {
    let glowEl = heroSection.querySelector(".hero-mouse-glow");
    if (!glowEl) {
      glowEl = document.createElement("div");
      glowEl.className = "hero-mouse-glow";
      heroSection.appendChild(glowEl);
    }
    heroSection.addEventListener("mousemove", (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glowEl.style.setProperty("--x", `${x}px`);
      glowEl.style.setProperty("--y", `${y}px`);
    }, { passive: true });
  }

  // Mouse-following Glow in Workspace Container (Builder & Results)
  const workspaceContainer = document.getElementById("workspace-container");
  if (workspaceContainer) {
    let glowEl = workspaceContainer.querySelector(".workspace-mouse-glow");
    if (!glowEl) {
      glowEl = document.createElement("div");
      glowEl.className = "workspace-mouse-glow";
      workspaceContainer.appendChild(glowEl);
    }
    workspaceContainer.addEventListener("mousemove", (e) => {
      const rect = workspaceContainer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glowEl.style.setProperty("--x", `${x}px`);
      glowEl.style.setProperty("--y", `${y}px`);
    }, { passive: true });
  }

  // Handle results accordion collapse button text & state updates
  ["collapse-editor", "collapse-slide"].forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.addEventListener("show.bs.collapse", () => {
      try {
        localStorage.setItem(`hit_policy_accordion_${id}_open`, "true");
      } catch (e) { }
      const triggers = document.querySelectorAll(`[data-bs-target="#${id}"]`);
      triggers.forEach(trig => trig.setAttribute("aria-expanded", "true"));
      const btn = document.querySelector(`button[data-bs-target="#${id}"]`);
      if (btn) {
        const textSpan = btn.querySelector(".accordion-btn-text");
        if (textSpan) textSpan.textContent = "הסתר";
      }
    });

    el.addEventListener("hide.bs.collapse", () => {
      try {
        localStorage.setItem(`hit_policy_accordion_${id}_open`, "false");
      } catch (e) { }
      const triggers = document.querySelectorAll(`[data-bs-target="#${id}"]`);
      triggers.forEach(trig => trig.setAttribute("aria-expanded", "false"));
      const btn = document.querySelector(`button[data-bs-target="#${id}"]`);
      if (btn) {
        const textSpan = btn.querySelector(".accordion-btn-text");
        if (textSpan) textSpan.textContent = "הצג";
      }
    });
  });
}

function restoreAccordionStates() {
  ["collapse-editor", "collapse-slide"].forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;

    try {
      const isOpen = localStorage.getItem(`hit_policy_accordion_${id}_open`) === "true";
      if (isOpen) {
        if (window.bootstrap?.Collapse) {
          const bsCollapse = window.bootstrap.Collapse.getOrCreateInstance(el, { toggle: false });
          bsCollapse.show();
        } else {
          el.classList.add("show");
        }
        const triggers = document.querySelectorAll(`[data-bs-target="#${id}"]`);
        triggers.forEach(trig => trig.setAttribute("aria-expanded", "true"));
        const btn = document.querySelector(`button[data-bs-target="#${id}"]`);
        if (btn) {
          const textSpan = btn.querySelector(".accordion-btn-text");
          if (textSpan) textSpan.textContent = "הסתר";
        }
      }
    } catch (e) { }
  });
}

async function downloadSlideAsImage() {
  const slideCollapseEl = document.getElementById("collapse-slide");
  if (slideCollapseEl && !slideCollapseEl.classList.contains("show")) {
    if (window.bootstrap?.Collapse) {
      const bsCollapse = window.bootstrap.Collapse.getOrCreateInstance(slideCollapseEl);
      bsCollapse.show();
    } else {
      slideCollapseEl.classList.add("show");
    }
    await new Promise((resolve) => setTimeout(resolve, 350));
  }

  const slideEl = document.getElementById("student-slide");
  if (!slideEl || !window.html2canvas) {
    return;
  }

  // Measure exact bounding dimensions on screen
  const rect = slideEl.getBoundingClientRect();
  const width = Math.round(rect.width) || slideEl.offsetWidth || 1200;
  const height = Math.round(rect.height) || slideEl.offsetHeight || 675;

  // 1. Create an isolated off-screen export container directly under document.body
  const exportWrapper = document.createElement("div");
  exportWrapper.style.position = "fixed";
  exportWrapper.style.left = "-9999px";
  exportWrapper.style.top = "0";
  exportWrapper.style.width = width + "px";
  exportWrapper.style.height = height + "px";
  exportWrapper.style.zIndex = "-9999";
  exportWrapper.style.containerType = "inline-size";
  exportWrapper.style.overflow = "hidden";
  exportWrapper.style.background = "#ffffff";

  // 2. Clone the live slide element
  const clonedSlide = slideEl.cloneNode(true);
  clonedSlide.style.width = width + "px";
  clonedSlide.style.height = height + "px";
  clonedSlide.style.background = "linear-gradient(135deg, #f7fce6 0%, #e7f698 50%, #e2e8f5 100%)";
  clonedSlide.style.color = "#121212";
  clonedSlide.style.boxSizing = "border-box";

  // Remove contenteditable attributes from cloned elements to prevent rendering quirks
  clonedSlide.removeAttribute("contenteditable");
  clonedSlide.querySelectorAll("[contenteditable]").forEach((el) => el.removeAttribute("contenteditable"));

  exportWrapper.appendChild(clonedSlide);
  document.body.appendChild(exportWrapper);

  exportWrapper.style.fontFamily = "var(--font-body), 'FoodiFOT', sans-serif";
  clonedSlide.style.fontFamily = "var(--font-body), 'FoodiFOT', sans-serif";

  // 3. Resolve all cqw units to exact computed pixel values from the live element on screen
  const sourceElements = slideEl.querySelectorAll("*");
  const clonedElements = clonedSlide.querySelectorAll("*");

  sourceElements.forEach((sourceEl, i) => {
    const clonedEl = clonedElements[i];
    if (!clonedEl) {
      return;
    }

    const comp = window.getComputedStyle(sourceEl);
    clonedEl.style.fontSize = comp.fontSize;
    clonedEl.style.fontFamily = comp.fontFamily;
    clonedEl.style.fontWeight = comp.fontWeight;
    clonedEl.style.fontStyle = comp.fontStyle;
    clonedEl.style.textAlign = comp.textAlign;
    clonedEl.style.letterSpacing = comp.letterSpacing;
    clonedEl.style.lineHeight = comp.lineHeight;
    clonedEl.style.padding = comp.padding;
    clonedEl.style.margin = comp.margin;
    clonedEl.style.gap = comp.gap;
    clonedEl.style.boxShadow = comp.boxShadow;
    clonedEl.style.borderRadius = comp.borderRadius;
    clonedEl.style.border = comp.border;
    clonedEl.style.color = comp.color;
    clonedEl.style.width = comp.width;
    clonedEl.style.height = comp.height;
    clonedEl.style.minWidth = comp.minWidth;
    clonedEl.style.display = comp.display;
    clonedEl.style.flexDirection = comp.flexDirection;
    clonedEl.style.alignItems = comp.alignItems;
    clonedEl.style.justifyContent = comp.justifyContent;

    if (comp.backgroundColor && comp.backgroundColor !== "rgba(0, 0, 0, 0)" && comp.backgroundColor !== "transparent") {
      clonedEl.style.backgroundColor = comp.backgroundColor;
    }
  });

  // Short delay to ensure browser paint cycle completes
  await new Promise((resolve) => setTimeout(resolve, 60));

  try {
    const canvas = await window.html2canvas(clonedSlide, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#ffffff",
      logging: false,
      width: width,
      height: height
    });

    const imgData = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = imgData;
    link.download = "מדיניות_AI_קורס_שקף.png";
    link.click();
  } catch (err) {
    console.error("Error generating slide image:", err);
    alert("מצטערים, אירעה שגיאה ביצירת קובץ התמונה.");
  } finally {
    if (document.body.contains(exportWrapper)) {
      document.body.removeChild(exportWrapper);
    }
  }
}

function downloadSlideAsPdf() {
  printTarget = "slide";
  window.print();
}

init();
