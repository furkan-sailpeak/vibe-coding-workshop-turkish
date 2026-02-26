// ── i18n ──
const i18n = {
  tr: {
    heroTag: "Vibe Kodlamaya Giriş",
    welcomeTitle: "Vibe kodlama ile uygulamanı oluştur",
    welcomeSub: "Birkaç soruya cevap ver, sana AI kodlama aracına yapıştırabileceğin hazır bir prompt oluşturalım.",
    start: "Başlayalım",
    examplesTitle: "Bu araçla neler yapabilirsin?",
    ex1Label: "Portfolyo Sitesi", ex1Desc: "İşlerini sergileyen kişisel bir web sitesi",
    ex2Label: "Ürün Sayfası", ex2Desc: "Bir ürünü tanıtan landing page",
    ex3Label: "Yapılacaklar Uygulaması", ex3Desc: "Görev takip eden basit bir uygulama",
    ex4Label: "Restoran Menüsü", ex4Desc: "Online menü ve sipariş sayfası",
    ex5Label: "Dashboard", ex5Desc: "Verileri gösteren bir kontrol paneli",
    ex6Label: "Blog Sayfası", ex6Desc: "Yazılarını paylaşabileceğin bir blog",
    examplesMore: "...ve daha birçok şey!",
    ideaLabel: "Uygulama fikrinizi açıklayın",
    ideaPlaceholder: "örn. Fotoğraflarım için bir portfolyo sitesi",
    audienceLabel: "Hedef kitle (opsiyonel)",
    audiencePlaceholder: "örn. öğrenciler, küçük işletme sahipleri...",
    featuresTitle: "Uygulamanın nelere ihtiyacı var?",
    featuresSub: "Uygun olanları seç.",
    customFeatLabel: "Ekstra özellikler",
    customFeatPlaceholder: "Yaz ve Enter'a bas...",
    featLanding: "Sadece ana sayfa",
    featLandingDesc: "Tek sayfa, backend gerekmez",
    featLandingBadge: "Çoğu proje için yeterli!",
    featAccounts: "Kullanıcı hesapları",
    featAccountsDesc: "Giriş, kayıt, profiller",
    featPayments: "Ödemeler",
    featPaymentsDesc: "Kullanıcılardan ödeme al",
    featDatabase: "Veritabanı",
    featDatabaseDesc: "Veri kaydet ve getir",
    featApi: "API bağlantısı",
    featApiDesc: "Dış servislere bağlan",
    featResponsive: "Mobil uyumlu",
    featResponsiveDesc: "Tüm cihazlarda duyarlı",
    tipLanding: "Tek bir HTML sayfası. Sunucu gerekmez, tarayıcıda açılır. En kolay başlangıç!",
    tipAccounts: "Kullanıcıların kayıt olup giriş yapabilmesi. Bir backend ve veritabanı gerektirir.",
    tipPayments: "Stripe veya benzeri bir servis ile ödeme alma. Backend gerektirir.",
    tipDatabase: "Verileri kalıcı olarak saklamak için. Örn: kullanıcı bilgileri, yazılar, ürünler.",
    tipApi: "Dış servislerden veri çekmek. Örn: hava durumu, harita, sosyal medya.",
    tipResponsive: "Uygulamanın telefon, tablet ve bilgisayarda düzgün görünmesi.",
    successBadge: "İlk promptunu oluşturdun!",
    styleLabel: "Görsel stil seçin",
    visualDetailsLabel: "Görsel detaylar (opsiyonel)",
    visualDetailsPlaceholder: "örn. koyu mavi tonlar, yuvarlak köşeler, büyük hero görsel...",
    generateBtn: "Prompt Oluştur",
    outputLabel: "Oluşturulan Prompt",
    outputHint: "Promptu düzenleyebilirsin. Değişikliklerin kopyalamaya yansır.",
    copyBtn: "Promptu Kopyala",
    copied: "Kopyalandı!",
    regenerateTitle: "Yeniden oluştur",
    exportTitle: "TXT olarak indir",
    generating: "AI ile oluşturuluyor...",
    back: "Geri", next: "İleri",
    instructionsTitle: "Bu promptu nasıl kullanırım?",
    inst1Label: "Promptu kopyala", inst1Desc: "Yukarıdaki \"Promptu Kopyala\" butonuna tıkla.",
    inst2Label: "AI aracını aç", inst2Desc: "Claude (claude.ai), Cursor, ChatGPT veya Gemini gibi bir AI kodlama aracını aç.",
    inst3Label: "Promptu yapıştır ve gönder", inst3Desc: "Kopyaladığın promptu sohbet kutusuna yapıştır ve Enter'a bas. AI senin için kodu yazacak.",
    inst4Label: "Dosyaları kaydet ve çalıştır", inst4Desc: "AI'ın ürettiği dosyaları bilgisayarına kaydet. index.html'yi tarayıcıda açarak uygulamanı gör.",
    footerDesc: "Yeni başlayanlar için pratik vibe kodlamaya giriş serisinin bir parçasıdır.",
    forumBtn: "Forum",
    forumTitle: "Forum",
    forumHelp: "Yardım",
    forumBrainstorm: "Fikir",
    forumFeedback: "Geri Bildirim",
    forumAuthorPh: "Adın",
    forumTitlePh: "Başlık",
    forumBodyPh: "Mesajını yaz...",
    forumSubmit: "Gönder",
    forumEmpty: "Henüz gönderi yok. İlk sen yaz!",
    forumReplyPh: "Yanıtını yaz...",
    forumReplyBtn: "Yanıtla",
    forumShowReplies: "Yanıtları göster",
    forumHideReplies: "Yanıtları gizle",
    forumNoConfig: "Forum henüz yapılandırılmadı. config.js dosyasına Supabase bilgilerini ekleyin.",
    aboutBtn: "Hakkında",
    aboutTitle: "Hakkında",
    aboutText1: "Vibes 101, yeni başlayanlar için pratik vibe kodlamaya giriş serisinin bir parçasıdır.",
    aboutText2: "Bu araç, herhangi bir kodlama deneyimine sahip olmadan AI destekli araçlarla uygulama oluşturmayı kolaylaştırmak için tasarlanmıştır.",
    aboutText3: "Birkaç basit soruya cevap vererek, AI kodlama aracınıza (Claude, Cursor, ChatGPT, Gemini vb.) yapıştırabileceğiniz optimize edilmiş bir prompt alırsınız.",
    aboutSeries: "YouTube Serisi: Yeni Başlayanlar İçin Pratik Vibe Kodlamaya Giriş (Türkçe)",
    aboutMade: "Furkan Demir tarafından yapılmıştır.",
  },
  en: {
    heroTag: "Vibe Kodlamaya Giriş",
    welcomeTitle: "Build your app with vibe coding",
    welcomeSub: "Answer a few questions and we'll generate a ready-to-paste prompt for your AI coding tool.",
    start: "Let's Start",
    examplesTitle: "What can you build with this?",
    ex1Label: "Portfolio Site", ex1Desc: "A personal website to showcase your work",
    ex2Label: "Product Page", ex2Desc: "A landing page to promote a product",
    ex3Label: "To-Do App", ex3Desc: "A simple task tracking app",
    ex4Label: "Restaurant Menu", ex4Desc: "Online menu and order page",
    ex5Label: "Dashboard", ex5Desc: "A control panel to display data",
    ex6Label: "Blog Page", ex6Desc: "A blog to share your writing",
    examplesMore: "...and many more!",
    ideaLabel: "Describe your app idea",
    ideaPlaceholder: "e.g. A portfolio site for my photography",
    audienceLabel: "Target audience (optional)",
    audiencePlaceholder: "e.g. students, small business owners...",
    featuresTitle: "What does your app need?",
    featuresSub: "Select all that apply.",
    customFeatLabel: "Extra features",
    customFeatPlaceholder: "Type and press Enter...",
    featLanding: "Landing page only",
    featLandingDesc: "Single page, no backend needed",
    featLandingBadge: "Enough for most projects!",
    featAccounts: "User accounts",
    featAccountsDesc: "Login, register, profiles",
    featPayments: "Payments",
    featPaymentsDesc: "Accept payments from users",
    featDatabase: "Database",
    featDatabaseDesc: "Store and retrieve data",
    featApi: "API connection",
    featApiDesc: "Connect to external services",
    featResponsive: "Mobile friendly",
    featResponsiveDesc: "Responsive on all devices",
    tipLanding: "A single HTML page. No server needed, opens in browser. Easiest starting point!",
    tipAccounts: "Let users sign up and log in. Requires a backend and database.",
    tipPayments: "Accept payments via Stripe or similar. Requires a backend.",
    tipDatabase: "Store data permanently. E.g. user info, posts, products.",
    tipApi: "Fetch data from external services. E.g. weather, maps, social media.",
    tipResponsive: "Makes your app look good on phone, tablet, and desktop.",
    successBadge: "You created your first prompt!",
    styleLabel: "Choose a visual style",
    visualDetailsLabel: "Visual details (optional)",
    visualDetailsPlaceholder: "e.g. dark blue tones, rounded corners, large hero image...",
    generateBtn: "Generate Prompt",
    outputLabel: "Your Generated Prompt",
    outputHint: "You can edit the prompt. Changes will be reflected when you copy.",
    copyBtn: "Copy Prompt",
    copied: "Copied!",
    regenerateTitle: "Regenerate",
    exportTitle: "Download as TXT",
    generating: "Generating with AI...",
    back: "Back", next: "Next",
    instructionsTitle: "How do I use this prompt?",
    inst1Label: "Copy the prompt", inst1Desc: "Click the \"Copy Prompt\" button above.",
    inst2Label: "Open an AI tool", inst2Desc: "Open an AI coding tool like Claude (claude.ai), Cursor, ChatGPT, or Gemini.",
    inst3Label: "Paste and send", inst3Desc: "Paste the prompt into the chat box and hit Enter. The AI will write the code for you.",
    inst4Label: "Save files and run", inst4Desc: "Save the files the AI generates to your computer. Open index.html in your browser to see your app.",
    footerDesc: "Part of the practical introduction to vibe coding series for beginners.",
    forumBtn: "Forum",
    forumTitle: "Forum",
    forumHelp: "Help",
    forumBrainstorm: "Ideas",
    forumFeedback: "Feedback",
    forumAuthorPh: "Your name",
    forumTitlePh: "Title",
    forumBodyPh: "Write your message...",
    forumSubmit: "Submit",
    forumEmpty: "No posts yet. Be the first to write!",
    forumReplyPh: "Write a reply...",
    forumReplyBtn: "Reply",
    forumShowReplies: "Show replies",
    forumHideReplies: "Hide replies",
    forumNoConfig: "Forum not configured yet. Add Supabase credentials to config.js.",
    aboutBtn: "About",
    aboutTitle: "About",
    aboutText1: "Vibes 101 is part of the practical introduction to vibe coding series for beginners.",
    aboutText2: "This tool is designed to make it easy to build apps with AI-powered tools, without any coding experience.",
    aboutText3: "By answering a few simple questions, you'll get an optimized prompt to paste into your AI coding tool (Claude, Cursor, ChatGPT, Gemini, etc.).",
    aboutSeries: "YouTube Series: Practical Introduction to Vibe Coding for Beginners (in Turkish)",
    aboutMade: "Made by Furkan Demir.",
  }
};

// ── Templates ──
const templates = {
  portfolio: {
    tr: "Fotoğraflarımı ve projelerimi sergileyen kişisel bir portfolyo sitesi. Hakkımda bölümü, galeri ve iletişim formu olsun.",
    en: "A personal portfolio site showcasing my photos and projects. Include an about me section, gallery, and contact form."
  },
  product: {
    tr: "Bir mobil uygulama için tanıtım sayfası. Hero bölümü, özellikler listesi, ekran görüntüleri ve indirme butonu olsun.",
    en: "A landing page for a mobile app. Include a hero section, feature list, screenshots, and download button."
  },
  todo: {
    tr: "Görev ekleyip silebileceğim basit bir yapılacaklar uygulaması. Görevleri tamamlandı olarak işaretleyebileyim.",
    en: "A simple to-do app where I can add and delete tasks. I should be able to mark tasks as completed."
  },
  restaurant: {
    tr: "Bir restoran için online menü sayfası. Kategorilere ayrılmış yemekler, fiyatlar ve görseller olsun.",
    en: "An online menu page for a restaurant. Include categorized dishes, prices, and images."
  },
  dashboard: {
    tr: "Basit bir veri dashboard'u. Kartlar halinde istatistikler, bir grafik ve bir tablo göstersin.",
    en: "A simple data dashboard. Show statistics in cards, a chart, and a data table."
  },
  blog: {
    tr: "Yazılarımı paylaşabileceğim basit bir blog sayfası. Yazı listesi, yazı detay görünümü ve tarih bilgisi olsun.",
    en: "A simple blog page where I can share my posts. Include a post list, post detail view, and date info."
  }
};

let lang = "tr";
let currentStep = 0;
const TOTAL_STEPS = 4;

function t(key) { return i18n[lang][key] || key; }

// ── Translations ──
function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    el.placeholder = t(el.dataset.i18nPh);
  });
  document.querySelectorAll("[data-i18n-title]").forEach(el => {
    el.title = t(el.dataset.i18nTitle);
  });
  document.getElementById("langToggle").textContent = lang === "tr" ? "EN" : "TR";
}

// ── Step navigation ──
function goTo(step) {
  const prev = currentStep;
  if (step === prev) return;
  const forward = step > prev;

  // Deactivate all steps
  document.querySelectorAll(".step").forEach(s => s.classList.remove("active"));

  // Set enter direction on the target before it becomes visible
  const target = document.querySelector(`[data-step="${step}"]`);
  // Temporarily disable transition so the starting position is instant
  target.style.transition = "none";
  target.style.transform = forward ? "translateX(60px)" : "translateX(-60px)";
  target.style.opacity = "0";

  // Force reflow so the above styles are painted
  target.offsetHeight;

  // Re-enable transition and activate
  target.style.transition = "";
  target.classList.add("active");
  target.style.transform = "";
  target.style.opacity = "";

  currentStep = step;
  const pct = Math.round((step / TOTAL_STEPS) * 100);
  document.getElementById("progressFill").style.width = pct + "%";

  // Step indicator
  const indicator = document.getElementById("stepIndicator");
  if (step > 0 && step < TOTAL_STEPS) {
    indicator.textContent = `${step}/${TOTAL_STEPS - 1}`;
  } else {
    indicator.textContent = "";
  }
}

// ── Choice rows (single-select) ──
document.querySelectorAll(".choice-row").forEach(row => {
  row.querySelectorAll(".choice-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      row.querySelectorAll(".choice-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
    });
  });
});

// ── Chips input ──
const customChips = [];
document.getElementById("chipsInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const val = e.target.value.trim();
    if (val && customChips.length < 8) {
      customChips.push(val);
      e.target.value = "";
      renderChips();
    }
  }
});

function renderChips() {
  const list = document.getElementById("chipsList");
  list.innerHTML = "";
  customChips.forEach((c, i) => {
    const span = document.createElement("span");
    span.className = "chip";
    span.textContent = c;
    const x = document.createElement("span");
    x.className = "chip-x";
    x.textContent = "\u00d7";
    x.addEventListener("click", () => { customChips.splice(i, 1); renderChips(); });
    span.appendChild(x);
    list.appendChild(span);
  });
}

// ── Feature cards (toggle multi-select) ──
document.querySelectorAll(".feature-card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("selected");
  });
});

// ── Style cards ──
document.querySelectorAll(".style-card").forEach(card => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".style-card").forEach(c => c.classList.remove("selected"));
    card.classList.add("selected");
  });
});

// ── Nav buttons ──
document.querySelectorAll("[data-next]").forEach(btn => {
  btn.addEventListener("click", () => goTo(parseInt(btn.dataset.next)));
});
document.querySelectorAll("[data-prev]").forEach(btn => {
  btn.addEventListener("click", () => goTo(parseInt(btn.dataset.prev)));
});

// ── Language toggle ──
document.getElementById("langToggle").addEventListener("click", () => {
  lang = lang === "tr" ? "en" : "tr";
  applyTranslations();
});

// ── Helpers ──
function isFeatureSelected(name) {
  const card = document.querySelector(`.feature-card[data-name="${name}"]`);
  return card?.classList.contains("selected") ? "yes" : "no";
}
function getStyle() {
  return document.querySelector(".style-card.selected")?.dataset.value || "Minimal";
}

// ── Generate ──
document.getElementById("generateBtn").addEventListener("click", () => {
  goTo(4);
  generateWithAI();
});

// ── Copy ──
document.getElementById("copyBtn").addEventListener("click", () => {
  const text = document.getElementById("output").value;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById("copyBtn");
    const orig = btn.textContent;
    btn.textContent = t("copied");
    setTimeout(() => { btn.textContent = orig; }, 1800);
  });
});

// ── Regenerate ──
document.getElementById("regenerateBtn").addEventListener("click", () => {
  generateWithAI();
});

// ── Export .txt ──
document.getElementById("exportBtn").addEventListener("click", () => {
  const text = document.getElementById("output").value;
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "vibes101-prompt.txt";
  a.click();
  URL.revokeObjectURL(url);
});

// ── AI generation ──
async function generateWithAI() {
  const loading = document.getElementById("loading");
  const output = document.getElementById("output");
  const hint = document.getElementById("outputHint");
  const actions = document.getElementById("outputActions");
  const badge = document.getElementById("successBadge");
  loading.classList.remove("hidden");
  output.classList.add("hidden");
  hint.classList.add("hidden");
  actions.classList.add("hidden");
  badge.classList.add("hidden");

  const answers = {
    idea: document.getElementById("idea").value.trim() || (lang === "tr" ? "uygulamam" : "my app"),
    landing: isFeatureSelected("landing"),
    accounts: isFeatureSelected("accounts"),
    payments: isFeatureSelected("payments"),
    database: isFeatureSelected("database"),
    api: isFeatureSelected("api"),
    responsive: isFeatureSelected("responsive"),
    style: getStyle(),
    visualDetails: document.getElementById("visualDetails").value.trim(),
    audience: document.getElementById("audience").value.trim(),
    customFeatures: [...customChips],
    lang: lang,
  };

  try {
    const result = await callGroq(answers);
    loading.classList.add("hidden");
    output.value = result;
    output.classList.remove("hidden");
    hint.classList.remove("hidden");
    actions.classList.remove("hidden");
    badge.classList.remove("hidden");
  } catch (err) {
    loading.classList.add("hidden");
    output.value = (lang === "tr"
      ? "⚠ AI oluşturma başarısız. Yedek prompt kullanılıyor.\n\n"
      : "⚠ AI generation failed. Using fallback.\n\n"
    ) + buildFallbackPrompt(answers);
    output.classList.remove("hidden");
    hint.classList.remove("hidden");
    actions.classList.remove("hidden");
    badge.classList.remove("hidden");
  }
}

async function callGroq(a) {
  const isSimple = a.landing === "yes" && a.accounts === "no" && a.payments === "no" && a.database === "no" && a.api === "no";
  const extras = [];
  if (a.lang === "tr") {
    if (a.accounts === "yes") extras.push("kullanıcı hesapları");
    if (a.payments === "yes") extras.push("ödeme sistemi");
    if (a.database === "yes") extras.push("veritabanı");
    if (a.api === "yes") extras.push("API bağlantısı");
    if (a.responsive === "yes") extras.push("mobil uyumlu");
  } else {
    if (a.accounts === "yes") extras.push("user accounts");
    if (a.payments === "yes") extras.push("payments");
    if (a.database === "yes") extras.push("database");
    if (a.api === "yes") extras.push("API integration");
    if (a.responsive === "yes") extras.push("mobile responsive");
  }

  const systemMsg = a.lang === "tr"
    ? `Sen uzman bir prompt mühendisisin. Bir AI kodlama aracına (Claude, Cursor, ChatGPT, Gemini) yapıştırılacak yapılandırılmış bir prompt oluşturuyorsun.

ÖNEMLİ: Bu promptu kullanacak kişi büyük ihtimalle yeni başlayan biri. Teknik terimleri basitçe açıkla. Kullanıcının hangi araçlara ihtiyacı olduğunu (kod editörü, tarayıcı, dosya yapısı vb.) ve bunları nasıl kullanacağını anlat. Hiçbir şeyi bildiğini varsayma.

Oluşturacağın prompt şu yapıyı kullanmalı:
- <role> etiketi ile AI'a bir rol ver (örn: "Sen uzman bir frontend geliştiricisin")
- <task> etiketi ile ana görevi tanımla
- <context> etiketi ile proje bilgilerini ver
- <constraints> etiketi ile kuralları listele
- <phases> etiketi ile projeyi aşamalara böl (büyük projeler için)
- <behavior> etiketi ile AI'ın nasıl davranacağını belirle (sorular sorması, adım adım ilerlemesi vb.)
- <output_format> etiketi ile çıktı formatını belirle

Prompttaki <behavior> bölümü AI'a şunları emretmeli:
- EN BAŞTA kullanıcıya ihtiyaç duyacağı araçları tanıt: kod editörü (VS Code öner ve nasıl indirilir anlat), tarayıcı, dosyaları nereye kaydedeceği (masaüstünde bir klasör oluşturması gibi). Dosya yapısını açıkla (index.html, styles.css, app.js dosyalarının ne işe yaradığını kısaca anlat).
- Kod yazmaya başlamadan ÖNCE kullanıcıya kısa sorular sor (içerik, görseller, veriler hakkında). TEK TEK sor, her cevabı bekle.
- Proje büyükse aşamalara böl (max 3-5 aşama). Her aşama bağımsız çalışabilmeli ve test edilebilmeli. Her aşamadan sonra "devam et" demesini bekle.
- Dikey dilim yaklaşımı kullan: her aşamada tam bir özelliği baştan sona (HTML + CSS + JS) bitir, sonra bir sonrakine geç.
- Her kod bloğundan sonra kısa bir açıklama yap: ne yaptığını ve neden böyle yaptığını anlat. Teknik terimleri (CSS, JavaScript, HTML etiketi vb.) ilk geçtiği yerde kısaca tanımla.
- İçerik gerektiren yerlerde kullanıcıyı yönlendir (dosya yapısı, nereye ne koyacağı)
- Her aşamadan sonra opsiyonel geliştirmeler öner
- Her aşamanın sonunda kısa bir özet yaz: ne yapıldı, ne çalışıyor, sırada ne var
- Sonunda "Projeyi tarayıcıda nasıl açarsın" bölümü ekle (dosyaya çift tıkla, veya Live Server kullan gibi adım adım)

Prompttaki <constraints> bölümünde şu negatif kısıtlamalar MUTLAKA olmalı:
- Listede OLMAYAN özellikleri EKLEME
- Önceki aşamaların kodunu baştan yazma, sadece üzerine ekle
- Kullanıcı sormadıkça yeni kütüphane veya araç önerme

SADECE promptu yaz. Giriş cümlesi, açıklama veya "İşte promptunuz" gibi ifadeler EKLEME.`
    : `You are an expert prompt engineer. You are generating a structured prompt to be pasted into an AI coding tool (Claude, Cursor, ChatGPT, Gemini).

IMPORTANT: The person using this prompt is most likely a beginner. Explain technical terms simply. Tell the user what tools they need (code editor, browser, file structure, etc.) and how to use them. Do not assume any prior knowledge.

The prompt you generate must use this structure:
- <role> tag to assign the AI a persona (e.g. "You are an expert frontend developer")
- <task> tag to define the main goal
- <context> tag for project details
- <constraints> tag for rules and limitations
- <phases> tag to break the project into steps (for larger projects)
- <behavior> tag to define how the AI should interact (ask questions, work in chunks, etc.)
- <output_format> tag to specify the expected output

The <behavior> section must instruct the AI to:
- AT THE VERY START, introduce the tools the user will need: recommend a code editor (suggest VS Code and explain how to download it), a browser, and where to save files (e.g. create a folder on their desktop). Explain the file structure (what index.html, styles.css, app.js are for in simple terms).
- BEFORE writing any code, ask the user short clarifying questions (about content, images, data). Ask ONE question at a time, wait for each answer.
- For larger projects, break into phases (max 3-5). Each phase must be independently testable and working. Wait for "continue" before proceeding.
- Use a vertical slice approach: complete one full feature end-to-end (HTML + CSS + JS) before moving to the next.
- After each code block, add a brief explanation: what it does and why. Define technical terms (CSS, JavaScript, HTML tags, etc.) the first time they appear.
- Guide the user on content placement (file structure, where to put their assets)
- After each working phase, suggest 2-3 optional improvements
- At the end of each phase, write a short summary: what was built, what works, what comes next
- End with a "How to open your project in the browser" section (double-click the file, or use Live Server — step by step)

The <constraints> section MUST include these negative constraints:
- Do NOT add features not listed in the requirements
- Do NOT rewrite previous phases — only extend and build on top
- Do NOT suggest new libraries or tools unless the user asks

Output ONLY the prompt text. Do NOT add preamble like "Here is your prompt" or any explanation.`;

  const userMsg = a.lang === "tr"
    ? `Şu proje için yapılandırılmış bir prompt oluştur: "${a.idea}"

Proje bilgileri:
- Tür: ${isSimple ? "Basit statik ana sayfa" : "MVP web uygulaması"}
- Sadece ana sayfa: ${a.landing === "yes" ? "evet" : "hayır"}
- Hesap sistemi: ${a.accounts === "yes" ? "evet" : "hayır"}
- Ödeme sistemi: ${a.payments === "yes" ? "evet" : "hayır"}
- Veritabanı: ${a.database === "yes" ? "evet" : "hayır"}
- API bağlantısı: ${a.api === "yes" ? "evet" : "hayır"}
- Mobil uyumlu: ${a.responsive === "yes" ? "evet" : "hayır"}
- Görsel stil: ${a.style}${a.visualDetails ? "\n- Görsel detaylar: " + a.visualDetails : ""}${a.audience ? "\n- Hedef kitle: " + a.audience : ""}
${a.customFeatures.length ? "- Ekstra: " + a.customFeatures.join(", ") : ""}${extras.length ? "\n- Ek gereksinimler: " + extras.join(", ") : ""}

Oluşturacağın prompt XML etiketleri kullansın (<role>, <task>, <context>, <constraints>, <behavior>, <phases>, <output_format>).

<constraints> bölümü şunları içersin:
- Çıktı: index.html, styles.css, app.js
- ${a.style} görsel stili
- Framework, npm, Docker KULLANMA
- Basit HTML + CSS + JS
- ${!isSimple ? "Backend gerekirse en basit yol (tek dosya server veya ücretsiz servis)" : "Sadece statik dosyalar"}
- Kod yeni başlayanlara uygun, her satırda yorum olsun ama yapılandırılmış ve profesyonel kalitede olsun
- Listede OLMAYAN özellikleri EKLEME
- Önceki aşamaların kodunu baştan yazma, sadece üzerine ekle
- Kullanıcı sormadıkça yeni kütüphane veya araç önerme

<behavior> bölümü şunları emretsin:
- EN BAŞTA kullanıcıya araçları tanıt: VS Code (nasıl indirilir), tarayıcı, dosyaları nereye kaydedeceği. Dosya yapısını açıkla (index.html, styles.css, app.js ne işe yarar).
- Kod yazmadan ÖNCE kullanıcıya 2-3 kısa soru sor (içerik hazır mı? görseller var mı? hangi bilgiler gerekli?)
- Soruları TEK TEK sor, her cevabı bekle
- ${!isSimple ? "Projeyi aşamalara böl (max 3-5 aşama, <phases> kullan). Her aşama bağımsız çalışabilmeli ve test edilebilmeli. Her aşamadan sonra 'devam et' demesini bekle." : "Projeyi tek seferde oluştur ama adım adım açıkla"}
- Dikey dilim yaklaşımı: her aşamada tam bir özelliği baştan sona (HTML + CSS + JS) bitir, sonra bir sonrakine geç
- Her kod bloğundan sonra kısa açıklama ekle (ne yaptığı + neden). Teknik terimleri ilk geçtiği yerde kısaca tanımla.
- İçerik gerektiren yerlerde yönlendir ("görselleri images/ klasörüne koy", "verileri data.js'de düzenle" gibi)
- Her aşamadan sonra 2-3 opsiyonel geliştirme öner
- Her aşamanın sonunda kısa özet: ne yapıldı, ne çalışıyor, sırada ne var
- Sonunda "Projeyi tarayıcıda nasıl açarsın" bölümü ekle (adım adım, Live Server dahil)
- Kısa bir sorun giderme bölümü ekle (sık karşılaşılan hatalar ve çözümleri)`
    : `Generate a structured prompt for this project: "${a.idea}"

Project info:
- Type: ${isSimple ? "Simple static landing page" : "MVP web app"}
- Landing page only: ${a.landing}
- Needs accounts: ${a.accounts}
- Needs payments: ${a.payments}
- Needs database: ${a.database}
- Needs API: ${a.api}
- Mobile responsive: ${a.responsive}
- Visual style: ${a.style}${a.visualDetails ? "\n- Visual details: " + a.visualDetails : ""}${a.audience ? "\n- Target audience: " + a.audience : ""}
${a.customFeatures.length ? "- Extras: " + a.customFeatures.join(", ") : ""}${extras.length ? "\n- Additional needs: " + extras.join(", ") : ""}

The prompt you generate must use XML tags (<role>, <task>, <context>, <constraints>, <behavior>, <phases>, <output_format>).

The <constraints> section should include:
- Output files: index.html, styles.css, app.js
- ${a.style} visual style
- No frameworks, npm, Docker
- Simple HTML + CSS + JS only
- ${!isSimple ? "If backend needed, suggest simplest path (single file server or free service)" : "Static files only"}
- Beginner-friendly code with comments on every section, but well-structured and production-quality
- Do NOT add features not listed in the requirements
- Do NOT rewrite previous phases — only extend and build on top
- Do NOT suggest new libraries or tools unless the user asks

The <behavior> section must instruct the AI to:
- AT THE VERY START, introduce the tools needed: VS Code (how to download), a browser, where to save files. Explain the file structure (what index.html, styles.css, app.js are for).
- BEFORE writing code, ask the user 2-3 short clarifying questions (is content ready? do they have images? what data is needed?)
- Ask questions ONE at a time, wait for each answer
- ${!isSimple ? "Break the project into phases (max 3-5, use <phases>). Each phase must be independently testable and working. Wait for 'continue' after each phase." : "Build in one go but explain step by step"}
- Use vertical slice approach: complete one full feature end-to-end (HTML + CSS + JS) before moving to the next
- After each code block, add a brief explanation (what it does + why). Define technical terms the first time they appear.
- Guide user on content placement ("put images in images/", "edit data in data.js")
- After each phase, suggest 2-3 optional improvements
- At the end of each phase, write a short summary: what was built, what works, what comes next
- End with a "How to open your project in the browser" section (step by step, including Live Server)
- Add a short troubleshooting section (common errors and how to fix them)`;

  const res = await fetch("/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ systemMsg, userMsg }),
  });

  if (!res.ok) throw new Error(`API ${res.status}`);
  const data = await res.json();
  return data.result;
}

// ── Fallback prompt builder (XML-structured) ──
function buildFallbackPrompt(a) {
  const simple = a.landing === "yes" && a.accounts === "no" && a.payments === "no" && a.database === "no" && a.api === "no";
  const extrasArr = [];

  if (a.lang === "tr") {
    if (a.accounts === "yes") extrasArr.push("basit kullanıcı giriş/kayıt");
    if (a.payments === "yes") extrasArr.push("basit ödeme akışı");
    if (a.database === "yes") extrasArr.push("veritabanı");
    if (a.api === "yes") extrasArr.push("API bağlantısı");

    return `<role>
Sen uzman bir frontend geliştiricisin. Yeni başlayanlara yardım eden, sabırlı bir mentorsun. Kullanıcının hiçbir teknik bilgisi olmadığını varsay — her adımı sıfırdan açıkla.
</role>

<task>
${simple ? "Basit bir ana sayfa oluştur" : "Basit bir MVP web uygulaması oluştur"}: ${a.idea}
</task>

<context>
${a.audience ? "Hedef kitle: " + a.audience + "\n" : ""}Görsel stil: ${a.style}${a.visualDetails ? "\nGörsel detaylar: " + a.visualDetails : ""}
${extrasArr.length ? "Ek gereksinimler: " + extrasArr.join(", ") : ""}${a.customFeatures.length ? "\nEkstra özellikler: " + a.customFeatures.join(", ") : ""}
</context>

<constraints>
- Çıktı dosyaları: index.html, styles.css, app.js
- ${a.style} görsel stilini uygula
- Framework, npm, Docker KULLANMA — sadece HTML + CSS + JS
- Her kod bloğunda yorum satırları ile açıklama yap, yapılandırılmış ve profesyonel kalitede kod yaz${a.responsive === "yes" ? "\n- Mobil uyumlu (responsive) olsun" : ""}
- ${!simple ? "Backend gerekirse en basit yolu öner (tek dosya server veya ücretsiz servis)" : "Sunucu gerekmez, statik dosyalar yeterli"}
- Listede OLMAYAN özellikleri EKLEME
- Önceki aşamaların kodunu baştan yazma, sadece üzerine ekle
- Kullanıcı sormadıkça yeni kütüphane veya araç önerme
</constraints>

<behavior>
- EN BAŞTA bana ihtiyacım olan araçları tanıt:
  * Kod editörü: VS Code öner (https://code.visualstudio.com), nasıl indirip kurulacağını anlat
  * Masaüstümde bir proje klasörü oluşturmamı söyle
  * index.html, styles.css, app.js dosyalarının ne işe yaradığını kısaca açıkla (HTML = sayfa yapısı, CSS = görünüm, JS = etkileşim)
- Kod yazmaya başlamadan ÖNCE bana 2-3 kısa soru sor:
  * İçeriklerim (yazılar, görseller, veriler) hazır mı?
  * Hangi bilgileri eklemem gerekiyor?
  * Özel bir renk/font tercihi var mı?
- Soruları TEK TEK sor, her cevabımı bekle
- ${!simple ? "Projeyi aşamalara böl (max 3-5 aşama). Her aşama bağımsız çalışabilmeli ve test edilebilmeli. Her aşamadan sonra 'devam et' dememi bekle." : "Projeyi tek seferde oluştur ama adım adım açıkla"}
- Dikey dilim yaklaşımı: her aşamada tam bir özelliği baştan sona (HTML + CSS + JS) bitir, sonra bir sonrakine geç
- Her kod bloğundan sonra kısa bir açıklama ekle: ne yaptığını ve neden böyle yaptığını anlat. Teknik terimleri ilk geçtiği yerde kısaca tanımla.
- İçerik gerektiren yerlerde beni yönlendir:
  * "Fotoğraflarını images/ klasörüne koy"
  * "Site bilgilerini data.js dosyasında düzenle"
  * "Bu bölümdeki metinleri kendi içeriklerinle değiştir"
- Her aşamadan sonra 2-3 opsiyonel geliştirme öner (kolay → zor sıralı)
- Her aşamanın sonunda kısa özet: ne yapıldı, ne çalışıyor, sırada ne var
</behavior>

<output_format>
- Dosyalar: index.html, styles.css, app.js
- Bir README.md dosyası oluştur (proje açıklaması, kurulum, kullanım)
- Bir .gitignore dosyası oluştur (node_modules, .env, .DS_Store vb.)
- Her dosyanın başında dosya adını belirt
- Sonunda "Projeyi tarayıcıda nasıl açarsın" bölümü ekle:
  * index.html dosyasına çift tıkla
  * VEYA VS Code'da Live Server eklentisini kur ve "Go Live" butonuna bas
  * Adım adım, ekran görüntüsü tarif eder gibi anlat
- Kısa bir "Sorun giderme" bölümü ekle (sık karşılaşılan hatalar ve çözümleri)
</output_format>`;
  } else {
    if (a.accounts === "yes") extrasArr.push("simple user login/register");
    if (a.payments === "yes") extrasArr.push("basic payment flow");
    if (a.database === "yes") extrasArr.push("database");
    if (a.api === "yes") extrasArr.push("API integration");

    return `<role>
You are an expert frontend developer. You are a patient mentor who helps beginners. Assume the user has zero technical knowledge — explain every step from scratch.
</role>

<task>
${simple ? "Build a simple landing page" : "Build a simple MVP web app"}: ${a.idea}
</task>

<context>
${a.audience ? "Target audience: " + a.audience + "\n" : ""}Visual style: ${a.style}${a.visualDetails ? "\nVisual details: " + a.visualDetails : ""}
${extrasArr.length ? "Additional needs: " + extrasArr.join(", ") : ""}${a.customFeatures.length ? "\nExtra features: " + a.customFeatures.join(", ") : ""}
</context>

<constraints>
- Output files: index.html, styles.css, app.js
- Apply ${a.style} visual style
- No frameworks, npm, Docker — plain HTML + CSS + JS only
- Add comments explaining every section of code, well-structured and production-quality${a.responsive === "yes" ? "\n- Make it mobile responsive" : ""}
- ${!simple ? "If backend is needed, suggest the simplest path (single file server or free service)" : "No server needed, static files only"}
- Do NOT add features not listed in the requirements
- Do NOT rewrite previous phases — only extend and build on top
- Do NOT suggest new libraries or tools unless the user asks
</constraints>

<behavior>
- AT THE VERY START, introduce the tools I'll need:
  * Code editor: recommend VS Code (https://code.visualstudio.com), explain how to download and install it
  * Tell me to create a project folder on my desktop
  * Briefly explain what index.html, styles.css, and app.js are for (HTML = page structure, CSS = appearance, JS = interactivity)
- BEFORE writing any code, ask me 2-3 short questions:
  * Is my content (text, images, data) ready?
  * What specific info do I need to provide?
  * Any color/font preferences?
- Ask questions ONE at a time, wait for each answer
- ${!simple ? "Break the project into phases (max 3-5). Each phase must be independently testable and working. Wait for me to say 'continue' after each phase." : "Build in one go but explain step by step"}
- Use vertical slice approach: complete one full feature end-to-end (HTML + CSS + JS) before moving to the next
- After each code block, add a brief explanation: what it does and why. Define technical terms the first time they appear.
- Guide me on content placement:
  * "Put your images in the images/ folder"
  * "Edit your site data in data.js"
  * "Replace the placeholder text with your own content"
- After each phase, suggest 2-3 optional improvements (easy → hard)
- At the end of each phase, write a short summary: what was built, what works, what comes next
</behavior>

<output_format>
- Files: index.html, styles.css, app.js
- Create a README.md file (project description, setup, usage)
- Create a .gitignore file (node_modules, .env, .DS_Store, etc.)
- Label each file clearly at the top
- End with a "How to open your project in the browser" section:
  * Double-click the index.html file
  * OR install the Live Server extension in VS Code and click "Go Live"
  * Explain step by step, as if describing a screenshot
- Add a short "Troubleshooting" section (common errors and how to fix them)
</output_format>`;
  }
}

// ── Example templates ──
document.querySelectorAll(".example-card[data-template]").forEach(card => {
  card.style.cursor = "pointer";
  card.addEventListener("click", () => {
    const key = card.dataset.template;
    const features = card.dataset.features ? card.dataset.features.split(",") : [];
    const style = card.dataset.style || "Minimal";

    // Fill idea
    document.getElementById("idea").value = templates[key][lang];

    // Set features
    document.querySelectorAll(".feature-card").forEach(fc => fc.classList.remove("selected"));
    features.forEach(f => {
      const fc = document.querySelector(`.feature-card[data-name="${f}"]`);
      if (fc) fc.classList.add("selected");
    });

    // Set style
    document.querySelectorAll(".style-card").forEach(sc => sc.classList.remove("selected"));
    const sc = document.querySelector(`.style-card[data-value="${style}"]`);
    if (sc) sc.classList.add("selected");

    // Go to step 1
    goTo(1);
  });
});

// ── About modal (from footer) ──
document.getElementById("aboutFooterBtn").addEventListener("click", () => {
  document.getElementById("aboutModal").classList.remove("hidden");
});
document.getElementById("aboutClose").addEventListener("click", () => {
  document.getElementById("aboutModal").classList.add("hidden");
});
document.querySelector(".modal-backdrop")?.addEventListener("click", () => {
  document.getElementById("aboutModal").classList.add("hidden");
});

// ── Forum ──
let forumCat = "help";
let sbClient = null;

function hasSupabaseConfig() {
  const url = typeof SUPABASE_URL !== "undefined" ? SUPABASE_URL : "";
  const key = typeof SUPABASE_ANON_KEY !== "undefined" ? SUPABASE_ANON_KEY : "";
  return url && url !== "YOUR_SUPABASE_URL" && key && key !== "YOUR_SUPABASE_ANON_KEY";
}

let supabaseLoading = null;
function loadSupabaseLib() {
  if (window.supabase) return Promise.resolve();
  if (supabaseLoading) return supabaseLoading;
  supabaseLoading = new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js";
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
  return supabaseLoading;
}

function getCreateClient() {
  const sb = window.supabase;
  if (!sb) return null;
  // v2 UMD may expose createClient directly or nested
  if (typeof sb.createClient === "function") return sb.createClient;
  if (typeof sb === "function") return sb;
  // Check for default export pattern
  if (sb.default && typeof sb.default.createClient === "function") return sb.default.createClient;
  return null;
}

async function initSupabase() {
  if (sbClient) return true;
  if (!hasSupabaseConfig()) return false;
  try {
    await loadSupabaseLib();
    const createClient = getCreateClient();
    if (!createClient) return false;
    sbClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    return true;
  } catch (e) { return false; }
}

document.getElementById("forumBtn").addEventListener("click", async () => {
  document.getElementById("forumOverlay").classList.remove("hidden");
  document.getElementById("forumLoading").classList.remove("hidden");
  document.getElementById("forumEmpty").classList.add("hidden");

  const ready = await initSupabase();
  document.getElementById("forumLoading").classList.add("hidden");

  if (ready) {
    loadPosts();
  } else {
    const empty = document.getElementById("forumEmpty");
    empty.textContent = t("forumNoConfig");
    empty.classList.remove("hidden");
  }
});

document.getElementById("forumClose").addEventListener("click", () => {
  document.getElementById("forumOverlay").classList.add("hidden");
});

// Tab switching
document.querySelectorAll(".forum-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".forum-tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    forumCat = tab.dataset.cat;
    if (sbClient) loadPosts();
  });
});

// Submit post
document.getElementById("forumSubmit").addEventListener("click", async () => {
  const authorEl = document.getElementById("forumAuthor");
  const titleEl = document.getElementById("forumPostTitle");
  const bodyEl = document.getElementById("forumPostBody");
  const author = authorEl.value.trim().slice(0, 50);
  const title = titleEl.value.trim().slice(0, 200);
  const body = bodyEl.value.trim().slice(0, 5000);

  // Highlight empty fields
  [authorEl, titleEl, bodyEl].forEach(el => el.style.borderColor = "");
  const missing = [];
  if (!author) missing.push(authorEl);
  if (!title) missing.push(titleEl);
  if (!body) missing.push(bodyEl);
  if (missing.length) {
    missing.forEach(el => { el.style.borderColor = "var(--accent)"; });
    missing[0].focus();
    return;
  }

  if (!(await initSupabase())) {
    alert(t("forumNoConfig"));
    return;
  }

  const btn = document.getElementById("forumSubmit");
  const origText = btn.textContent;
  btn.disabled = true;
  btn.textContent = "...";

  const { error } = await sbClient.from("forum_posts").insert({
    category: forumCat, author, title, body
  });

  btn.disabled = false;
  btn.textContent = origText;

  if (error) {
    console.error("Forum post error:", error);
    alert(error.message || "Error posting");
    return;
  }

  authorEl.value = "";
  titleEl.value = "";
  bodyEl.value = "";
  loadPosts();
});

async function loadPosts() {
  const container = document.getElementById("forumPosts");
  const empty = document.getElementById("forumEmpty");
  const loading = document.getElementById("forumLoading");
  empty.classList.add("hidden");
  loading.classList.remove("hidden");

  // Clear old posts
  container.querySelectorAll(".forum-post").forEach(p => p.remove());

  const { data, error } = await sbClient
    .from("forum_posts")
    .select("*")
    .eq("category", forumCat)
    .order("created_at", { ascending: false })
    .limit(50);

  loading.classList.add("hidden");

  if (error || !data || data.length === 0) {
    empty.textContent = t("forumEmpty");
    empty.classList.remove("hidden");
    return;
  }

  data.forEach(post => {
    container.appendChild(createPostEl(post));
  });
}

function createPostEl(post) {
  const el = document.createElement("div");
  el.className = "forum-post";
  const date = new Date(post.created_at).toLocaleDateString(lang === "tr" ? "tr-TR" : "en-US", {
    day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit"
  });

  el.innerHTML = `
    <div class="forum-post-header">
      <span class="forum-post-author">${esc(post.author)}</span>
      <span class="forum-post-date">${date}</span>
    </div>
    <div class="forum-post-title">${esc(post.title)}</div>
    <div class="forum-post-body">${esc(post.body)}</div>
    <div class="forum-reply-section">
      <button class="forum-toggle-replies" data-post-id="${post.id}">${t("forumShowReplies")}</button>
      <div class="forum-replies hidden" data-replies-for="${post.id}"></div>
      <div class="forum-reply-form">
        <input type="text" class="forum-input" data-reply-input="${post.id}" placeholder="${t("forumReplyPh")}" />
        <button class="forum-reply-btn" data-reply-btn="${post.id}">${t("forumReplyBtn")}</button>
      </div>
    </div>
  `;

  // Toggle replies
  el.querySelector(".forum-toggle-replies").addEventListener("click", async (e) => {
    const repliesDiv = el.querySelector(`[data-replies-for="${post.id}"]`);
    if (!repliesDiv.classList.contains("hidden")) {
      repliesDiv.classList.add("hidden");
      e.target.textContent = t("forumShowReplies");
      return;
    }
    repliesDiv.classList.remove("hidden");
    e.target.textContent = t("forumHideReplies");
    await loadReplies(post.id, repliesDiv);
  });

  // Submit reply
  el.querySelector(`[data-reply-btn="${post.id}"]`).addEventListener("click", async () => {
    const input = el.querySelector(`[data-reply-input="${post.id}"]`);
    const body = input.value.trim();
    const author = document.getElementById("forumAuthor").value.trim() || "Anonim";
    if (!body) return;

    await sbClient.from("forum_replies").insert({
      post_id: post.id, author, body
    });

    input.value = "";
    const repliesDiv = el.querySelector(`[data-replies-for="${post.id}"]`);
    repliesDiv.classList.remove("hidden");
    el.querySelector(".forum-toggle-replies").textContent = t("forumHideReplies");
    await loadReplies(post.id, repliesDiv);
  });

  return el;
}

async function loadReplies(postId, container) {
  container.innerHTML = '<div class="forum-loading"><div class="spinner"></div></div>';

  const { data } = await sbClient
    .from("forum_replies")
    .select("*")
    .eq("post_id", postId)
    .order("created_at", { ascending: true });

  container.innerHTML = "";
  if (!data || data.length === 0) return;

  data.forEach(r => {
    const date = new Date(r.created_at).toLocaleDateString(lang === "tr" ? "tr-TR" : "en-US", {
      day: "numeric", month: "short", hour: "2-digit", minute: "2-digit"
    });
    const div = document.createElement("div");
    div.className = "forum-reply";
    div.innerHTML = `
      <span class="forum-reply-author">${esc(r.author)}</span>
      <div class="forum-reply-body">${esc(r.body)}</div>
      <span class="forum-reply-date">${date}</span>
    `;
    container.appendChild(div);
  });
}

function esc(str) {
  const d = document.createElement("div");
  d.textContent = str;
  return d.innerHTML;
}

// ── Init ──
applyTranslations();
