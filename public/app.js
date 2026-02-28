// ── i18n ──
const i18n = {
  tr: {
    heroTag: "Vibe Kodlamaya Giriş",
    welcomeTitle: "Vibe kodlama ile uygulamanı oluştur",
    welcomeSub: "Birkaç soruya cevap ver, sana AI kodlama aracına yapıştırabileceğin hazır bir prompt oluşturalım.",
    start: "Başlayalım",
    examplesTitle: "Bu araçla neler yapabilirsin?",
    ex1Label: "Portfolyo Sitesi", ex1Desc: "İşlerini sergileyen kişisel bir web sitesi",
    ex2Label: "Ürün Sayfası", ex2Desc: "Bir ürünü tanıtan web sayfası",
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
    inst2Label: "AI aracını aç", inst2Desc: "Claude, Copilot, ChatGPT veya Gemini gibi bir yapay zeka kodlama aracını aç.",
    inst3Label: "Promptu yapıştır ve gönder", inst3Desc: "Kopyaladığın promptu mesaj kutusuna yapıştır ve Enter'a bas. Yapay zeka senin için kodu yazacak.",
    inst4Label: "Dosyaları kaydet ve çalıştır", inst4Desc: "Yapay zekanın ürettiği dosyaları bilgisayarına kaydet. \"index.html\" dosyasını tarayıcıda açarak uygulamanı gör.",
    footerDesc: "Fikirlerini yapılandırılmış, AI-ready promptlara dönüştüren ücretsiz araç. Kodlama bilgisi gerekmez.",
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
    aboutText1: "Vibes 101, uygulama fikirlerini yapay zeka için özel olarak yapılandırılmış promptlara dönüştüren ücretsiz bir araçtır.",
    aboutText2: "Birkaç soruya cevap verin: fikriniz, ihtiyacınız olan özellikler, görsel stil tercihiniz. Sonra herhangi bir yapay zeka kodlama aracına (Claude, Cursor, ChatGPT, Gemini) yapıştırabileceğiniz optimize edilmiş, aşamalı bir prompt alın.",
    aboutText3: "Kodlama deneyimi gerekmez. Oluşturulan promptlar XML yapısı, aşamalı geliştirme planı ve yeni başlayanlara uygun açıklamalar içerir.",
    aboutSeries: "YouTube: Yeni Başlayanlar İçin Vibe Kodlamaya Giriş (Türkçe)",
    aboutMade: "Furkan Demir tarafından yapılmıştır.",
    privacyBtn: "Gizlilik",
    privacyTitle: "Gizlilik Politikası",
    privacyText1: "Vibes 101 kişisel veri toplamaz ve saklamaz. Girdiğiniz bilgiler yalnızca prompt oluşturmak için kullanılır ve sunucularımızda kaydedilmez.",
    privacyText2: "Prompt oluşturmak için üçüncü parti bir AI servisi (Groq API) kullanılır. Gönderdiğiniz bilgiler yalnızca prompt üretimi için işlenir.",
    privacyText3: "Dil tercihiniz tarayıcınızda (localStorage) saklanır ve yalnızca deneyiminizi iyileştirmek için kullanılır.",
    termsBtn: "Koşullar",
    termsTitle: "Kullanım Koşulları",
    termsText1: "Vibes 101, AI kodlama araçları için prompt oluşturan ücretsiz bir araçtır. Araç \"olduğu gibi\" sunulur, herhangi bir garanti verilmez.",
    termsText2: "Oluşturulan promptlar yalnızca başlangıç noktasıdır. Üretilen kodun doğruluğu veya güvenliği garanti edilmez. Kodu kullanmadan önce gözden geçirmeniz önerilir.",
    termsText3: "Bu aracı kullanarak bu koşulları kabul etmiş sayılırsınız.",
    aiFallbackNote: "⚠ AI oluşturma başarısız oldu. Şablon prompt kullanılıyor.",
    editToggle: "Düzenle",
    viewToggle: "Görüntüle",
    resumeText: "Kaldığın yerden devam etmek ister misin?",
    resumeBtn: "Devam Et",
    startFreshBtn: "Baştan Başla",
    toastCopied: "Kopyalandı!",
    a11yBtn: "Erişilebilirlik",
    a11yTitle: "Erişilebilirlik Bildirimi",
    a11yText1: "Vibes 101 olarak, aracımızın herkes tarafından erişilebilir olmasını sağlamaya kararlıyız.",
    a11yText2: "Uygulamamızda klavye ile gezinme, ekran okuyucu desteği, atlama bağlantıları, odak yönetimi ve ARIA etiketleri gibi erişilebilirlik özellikleri bulunmaktadır.",
    a11yText3: "Erişilebilirlik konusunda bir sorun yaşarsanız veya öneriniz varsa, lütfen bizimle iletişime geçin.",
    learnCta: "Aşağıdaki başlangıç rehberine göz atmayı unutma!",
    learnBtn: "Öğren",
    learnTitle: "Öğren",
    learnPromptTitle: "Prompt Nedir?",
    learnPromptP1: "Prompt, bir yapay zeka modeline ne yapmasını istediğini anlatan yapılandırılmış bir talimat \"mesajıdır\". Harvard Üniversitesi'nin AI araştırmalarına göre, spesifik ve bağlam içeren promptlar genel olanlara kıyasla çok daha doğru sonuçlar üretir.",
    learnPromptP2: "Etkili prompt mühendisliği birkaç temel ilkeye dayanır: açık ve doğrudan olma, bağlam sağlama, format belirtme, örnekler verme ve kısıtlamaları açıkça tanımlama. Bu ilkeler hem akademik araştırmalarla hem de Anthropic'in en iyi uygulamalarıyla desteklenmektedir.",
    learnPromptP3: "Vibes 101, bu ilkeleri uygulayarak senin cevaplarını yapılandırılmış promptlara dönüştürür. Ayrıntılar için aşağıdaki \"Metodolojimiz\" bölümüne bakabilirsin.",
    learnMethodTitle: "Metodolojimiz",
    learnMethodP1: "Vibes 101'in prompt üretim sistemi, Anthropic'in resmi prompt mühendisliği kılavuzunda önerilen XML etiketleme yapısını temel alır. Her prompt <role>, <task>, <context>, <constraints>, <behavior>, <phases> ve <output_format> etiketleriyle yapılandırılır. Bu sayede AI modeli talimatları, bağlamı ve kısıtlamaları belirsizlik olmadan ayrıştırabilir.",
    learnMethodP2: "Bu yaklaşım, Harvard HUIT'in belirlediği en iyi uygulamalarla da örtüşmektedir: rol atama (\"Act as if\" tekniği), çıktı formatı belirtme, dahil/hariç parametreleri tanımlama ve hedef kitle netliği sağlama. Promptlarımız bu ilkelerin tümünü otomatik olarak uygular.",
    learnMethodP3: "Aşamalı geliştirme modeli (phased development), her aşamanın bağımsız çalışan ve test edilebilir bir özellik dilimi (vertical slice) olmasını sağlar. AI'a davranış kuralları verilir: teknik terimleri açıkla, projeye özel sorular sor, her kod bloğunu açıkla. Negatif kısıtlamalar (istenmeyenler listesi) hallüsinasyonu ve kapsam kaymasını azaltır.",
    learnMethodSources: "Kaynaklar",
    learnMethodSource1: "Anthropic: Claude Prompting Best Practices, XML Tags ile Yapılandırma",
    learnMethodSource2: "Harvard HUIT: AI Prompts, En İyi Uygulamalar",
    learnToolsTitle: "Yapay Zeka Kodlama Araçları",
    learnToolsP1: "Yapay zeka destekli kodlama araçları hızla gelişen bir alan. Metin prompt kabul eden popüler araçlar arasında Claude, ChatGPT, Cursor ve Gemini bulunmaktadır. Vibes 101'in ürettiği promptlar, metin girdisi kabul eden herhangi bir yapay zeka aracıyla uyumludur.",
    learnToolsP2: "Bu araçların her biri farklı güçlü yönlere sahiptir. Projeniz için en uygun aracı seçerken güncel yeteneklerini, fiyatlandırmalarını ve kullanım koşullarını değerlendirmenizi öneririz. Hangi uygulamayı kullanmanız gerektiği konusunda karar veremediyseniz sitemizin \"Forum\" kısmından sorularınızı sorabilirsiniz.",
    learnToolsDisclaimer: "Vibes 101, yukarıda adı geçen araçlarla sponsorluk veya ortaklık ilişkisi içinde değildir. Bunlar piyasada mevcut olan üçüncü taraf ürünlerdir.",
    learnGitTitle: "Git & GitHub Nedir?",
    learnGitP1: "Git, GitHub'un resmi dokümantasyonunda tanımlandığı üzere, projenizdeki değişiklikleri izleyen bir versiyon kontrol sistemidir (DVCS). Her geliştirici projenin bir kopyasına sahiptir ve her değişiklik (kim tarafından, ne zaman, neden yapıldığı) kayıt altına alınır.",
    learnGitP2: "Temel kavramlar: Repository (depo, dosya), projenizin tüm dosyalarını ve revizyon geçmişini içerir. Commit'ler, kodunuzun belirli anlardaki anlık görüntüleridir. Branch'ler (dallar), birbirinden bağımsız geliştirme alanları oluşturmanızı sağlar.",
    learnGitP3: "GitHub, Git depolarını barındırır ve pull request, kod inceleme ve sorun takibi gibi işbirliği özellikleri ekler. Codespaces özelliği ile tarayıcıdan doğrudan kod yazabilirsiniz, bilgisayarınıza kurulum gerektirmez.",
    learnGitSource: "Kaynak: GitHub Docs, About Git",
    learnTutorialTitle: "Fikirden Uygulamaya: Adım Adım",
    learnStep1Title: "GitHub hesabı oluştur",
    learnStep1Desc: "github.com adresine git ve ücretsiz bir hesap oluştur.",
    learnStep2Title: "Yeni bir repo oluştur",
    learnStep2Desc: "GitHub'da boş bir repository (repo) oluştur.",
    learnStep3Title: "Codespaces'te aç",
    learnStep3Desc: "Repoda \"Code\" → \"Codespaces\" → \"Create\" butonuna tıkla. Tarayıcıda bir kod editörü açılacak.",
    learnStep4Title: "Vibes 101 ile prompt oluştur",
    learnStep4Desc: "Bu aracı kullanarak uygulamanın promptunu oluştur.",
    learnStep5Title: "Promptu Codespaces'e yapıştır",
    learnStep5Desc: "Codespaces'teki yapay zeka ajanına (Copilot Chat gibi) promptu yapıştır. Ajan kodu doğrudan Codespace dosyalarına yazacak.",
    learnStep6Title: "Uygulamanı gör",
    learnStep6Desc: "Uygulamanı önizle. Fikrini canlı olarak gör!",
    learnScreenshot: "Ekran görüntüsü yakında eklenecek",
    learnNextTitle: "Sırada Ne Var?",
    learnNextP1: "Tebrikler, ilk uygulamanı oluşturdun!",
    learnNextP2: "Sonraki adımlar: Yapay zekayla konuşmaya devam ederek uygulamana farklı özellikler ekleyebilirsin. Eğer soruların varsa sitemizin forum kısmından bize ve diğer kullanıcılara sorabilirsin.",
  },
  en: {
    heroTag: "Introduction to Vibe Coding",
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
    footerDesc: "Free tool that turns your ideas into structured, AI-ready prompts. No coding experience needed.",
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
    aboutText1: "Vibes 101 is a free tool that turns app ideas into structured, AI-ready prompts.",
    aboutText2: "Answer a few questions: your idea, the features you need, your visual style. Then get an optimized, phased prompt you can paste into any AI coding tool (Claude, Cursor, ChatGPT, Gemini).",
    aboutText3: "No coding experience needed. Generated prompts include XML structure, phased development plans, and beginner-friendly explanations.",
    aboutSeries: "YouTube: Intro to Vibe Coding for Beginners (Turkish)",
    aboutMade: "Made by Furkan Demir.",
    privacyBtn: "Privacy",
    privacyTitle: "Privacy Policy",
    privacyText1: "Vibes 101 does not collect or store personal data. The information you enter is used only to generate prompts and is not saved on our servers.",
    privacyText2: "A third-party AI service (Groq API) is used to generate prompts. The information you submit is processed solely for prompt generation.",
    privacyText3: "Your language preference is stored in your browser (localStorage) and is used only to improve your experience.",
    termsBtn: "Terms",
    termsTitle: "Terms of Service",
    termsText1: "Vibes 101 is a free tool that generates prompts for AI coding tools. The tool is provided \"as is\" without any warranty.",
    termsText2: "Generated prompts are only a starting point. The accuracy or security of the generated code is not guaranteed. We recommend reviewing the code before use.",
    termsText3: "By using this tool, you agree to these terms.",
    aiFallbackNote: "⚠ AI generation failed. Using a template prompt instead.",
    editToggle: "Edit",
    viewToggle: "View",
    resumeText: "Want to pick up where you left off?",
    resumeBtn: "Resume",
    startFreshBtn: "Start Fresh",
    toastCopied: "Copied!",
    a11yBtn: "Accessibility",
    a11yTitle: "Accessibility Statement",
    a11yText1: "At Vibes 101, we are committed to making our tool accessible to everyone.",
    a11yText2: "Our app includes accessibility features such as keyboard navigation, screen reader support, skip links, focus management, and ARIA labels.",
    a11yText3: "If you experience any accessibility issues or have suggestions, please reach out to us.",
    learnCta: "New here? Check out the beginner's guide below",
    learnBtn: "Learn",
    learnTitle: "Learn",
    learnPromptTitle: "What is a Prompt?",
    learnPromptP1: "A prompt is a structured instruction that tells an AI model what to build. According to Harvard University's AI research, specific and context-rich prompts produce significantly more accurate results than generic ones.",
    learnPromptP2: "Effective prompt engineering relies on several core principles: being clear and direct, providing context, specifying output format, giving examples, and explicitly defining constraints. These principles are supported by both academic research and Anthropic's official best practices.",
    learnPromptP3: "Vibes 101 applies these principles to turn your answers into structured prompts. See the \"Our Methodology\" section below for details.",
    learnMethodTitle: "Our Methodology",
    learnMethodP1: "Vibes 101's prompt generation system is built on the XML tagging structure recommended in Anthropic's official prompt engineering guide. Each prompt is structured with <role>, <task>, <context>, <constraints>, <behavior>, <phases>, and <output_format> tags. This enables the AI model to parse instructions, context, and constraints unambiguously.",
    learnMethodP2: "This approach also aligns with the best practices identified by Harvard HUIT: role assignment (the \"Act as if\" technique), output format specification, do/don't parameter definition, and audience clarity. Our prompts automatically apply all of these principles.",
    learnMethodP3: "The phased development model ensures each phase is an independently working and testable feature slice (vertical slice). The AI is given behavioral rules: explain technical terms, ask project-specific questions, explain each code block. Negative constraints (a list of what not to do) reduce hallucination and scope creep.",
    learnMethodSources: "Sources",
    learnMethodSource1: "Anthropic: Claude Prompting Best Practices, Structuring with XML Tags",
    learnMethodSource2: "Harvard HUIT: AI Prompts, Best Practices",
    learnToolsTitle: "AI Coding Tools",
    learnToolsP1: "AI-assisted coding tools are a rapidly evolving space. Popular tools that accept text prompts include Claude, ChatGPT, Cursor, and Gemini. Prompts generated by Vibes 101 are compatible with any AI tool that accepts text input.",
    learnToolsP2: "Each of these tools has different strengths. When choosing the right tool for your project, we recommend evaluating their current capabilities, pricing, and terms of use.",
    learnToolsDisclaimer: "Vibes 101 has no sponsorship or partnership relationship with the tools mentioned above. These are third-party products available in the market.",
    learnGitTitle: "What is Git & GitHub?",
    learnGitP1: "Git, as defined in GitHub's official documentation, is a distributed version control system (DVCS) that tracks changes in your project. Every developer has a complete copy of the project, and every change (who made it, when, and why) is recorded.",
    learnGitP2: "Key concepts: A Repository contains all project files and revision history. Commits are snapshots of your code at specific moments. Branches let you create independent lines of development.",
    learnGitP3: "GitHub hosts Git repositories and adds collaboration features like pull requests, code review, and issue tracking. Public repos are free. With Codespaces, you can write code directly from your browser, no local setup required.",
    learnGitSource: "Source: GitHub Docs, About Git",
    learnTutorialTitle: "From Idea to App: Step by Step",
    learnStep1Title: "Create a GitHub account",
    learnStep1Desc: "Go to github.com and create a free account.",
    learnStep2Title: "Create a new repository",
    learnStep2Desc: "Create an empty repository (repo) on GitHub.",
    learnStep3Title: "Open in Codespaces",
    learnStep3Desc: "In your repo, click \"Code\" → \"Codespaces\" → \"Create\". A code editor will open in your browser.",
    learnStep4Title: "Generate your prompt with Vibes 101",
    learnStep4Desc: "Use this tool to generate the prompt for your app.",
    learnStep5Title: "Paste prompt into Codespaces",
    learnStep5Desc: "Paste the prompt into the AI agent in Codespaces (like Copilot Chat). The agent will write the code directly into your Codespace files.",
    learnStep6Title: "Preview your app",
    learnStep6Desc: "Preview your app. It's live!",
    learnScreenshot: "Screenshot coming soon",
    learnNextTitle: "What's Next?",
    learnNextP1: "Congratulations, you just built your first app!",
    learnNextP2: "Next steps: customize the code, try a different style, share it with friends, or create an entirely new project.",
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

let lang = localStorage.getItem("lang") || "tr";
let currentStep = 0;
const TOTAL_STEPS = 4;

function t(key) { return i18n[lang][key] || key; }

// ── Translations ──
function applyTranslations() {
  document.documentElement.lang = lang;
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
  localStorage.setItem("lang", lang);
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

// ── Toast ──
function showToast(message) {
  const existing = document.querySelector(".toast");
  if (existing) existing.remove();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span class="toast-check">&#10003;</span><span>${message}</span>`;
  document.body.appendChild(toast);
  setTimeout(() => { toast.classList.add("fade-out"); }, 1700);
  setTimeout(() => { toast.remove(); }, 2000);
}

// ── Copy ──
document.getElementById("copyBtn").addEventListener("click", () => {
  const text = document.getElementById("output").value;
  navigator.clipboard.writeText(text).then(() => {
    showToast(t("toastCopied"));
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
  clearProgress();
  const loading = document.getElementById("loading");
  const output = document.getElementById("output");
  const hint = document.getElementById("outputHint");
  const actions = document.getElementById("outputActions");
  const badge = document.getElementById("successBadge");
  const toggleRow = document.getElementById("outputToggleRow");
  const highlighted = document.getElementById("outputHighlighted");
  loading.classList.remove("hidden");
  output.classList.add("hidden");
  highlighted.classList.add("hidden");
  toggleRow.classList.add("hidden");
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

  // Hide any previous fallback note
  const prevNote = document.getElementById("fallbackNote");
  if (prevNote) prevNote.classList.add("hidden");

  try {
    const result = await callGroq(answers);
    loading.classList.add("hidden");
    output.value = result;
    editMode = false;
    renderHighlightedOutput();
    highlighted.classList.remove("hidden");
    toggleRow.classList.remove("hidden");
    hint.classList.remove("hidden");
    actions.classList.remove("hidden");
    badge.classList.remove("hidden");
  } catch (err) {
    loading.classList.add("hidden");
    output.value = buildFallbackPrompt(answers);
    editMode = false;
    renderHighlightedOutput();
    highlighted.classList.remove("hidden");
    toggleRow.classList.remove("hidden");
    hint.classList.remove("hidden");
    actions.classList.remove("hidden");
    badge.classList.remove("hidden");

    // Show fallback notice
    let note = document.getElementById("fallbackNote");
    if (!note) {
      note = document.createElement("p");
      note.id = "fallbackNote";
      note.style.cssText = "color:#f5a623;font-size:0.85rem;margin-top:8px;text-align:center;";
      output.parentNode.insertBefore(note, output);
    }
    note.textContent = t("aiFallbackNote");
    note.classList.remove("hidden");
  }
}

// ── Detailed style descriptions (technical, based on the visual previews) ──
const styleDescriptions = {
  en: {
    "Minimal": "Minimal style: clean white backgrounds, monochrome black-and-white palette, generous whitespace, thin horizontal lines as dividers, no decorative elements, sharp and simple typography, flat design with no shadows or gradients, content-first layout with maximum breathing room",
    "Modern": "Modern style: purple-to-violet gradient backgrounds (e.g. #667eea → #764ba2), frosted glass card elements with backdrop-filter blur and semi-transparent white overlays (rgba 255,255,255,0.2), rounded corners (12px+), soft shadows, clean sans-serif typography, layered depth with translucent panels on colorful gradient backdrops",
    "Pixel Art": "Pixel Art style: dark navy background (#1a1a2e), retro 8-bit aesthetic with sharp pixelated edges, bold accent colors — hot pink (#e94560) and deep blue (#0f3460), checkerboard/grid patterns, blocky UI elements with hard edges (no border-radius), monospace or pixel-style typography, nostalgic retro gaming vibe",
    "Brutalist": "Brutalist style: off-white/cream background (#f5f0e8), heavy black borders (3-4px), raw unpolished aesthetic, bold oversized monospace typography (Courier New or similar), stark black-on-cream contrast, no rounded corners, no gradients, no shadows, deliberately rough and anti-design, thick divider lines, exposed grid structure",
    "Glassmorphism": "Glassmorphism style: deep dark gradient background (#0f0c29 → #302b63 → #24243e), frosted glass panels with very subtle white tint (rgba 255,255,255,0.1), thin semi-transparent white borders (1px solid rgba 255,255,255,0.2), strong backdrop-filter blur (6-10px), rounded corners (10px+), layered translucent cards floating on dark backgrounds, subtle light refraction effect",
    "Retro Neon": "Retro Neon style: very dark almost-black background (#0a0015), neon magenta/pink (#ff00ff) for borders and key elements with glowing box-shadow effects, cyan (#00ffff) accent lines with glow, synthwave/cyberpunk aesthetic, thin neon-bordered containers, glowing text effects, dark-on-dark with vivid neon highlights, 80s retro-futuristic vibe",
    "Pastel": "Pastel style: soft gradient backgrounds blending pink (#fbc2eb) to light blue (#a6c1ee), rounded shapes and circular elements, semi-transparent white overlays (rgba 255,255,255,0.5), gentle and airy color palette with no harsh contrasts, soft shadows, large border-radius on all elements, friendly and approachable aesthetic, light and whimsical feel",
    "Dark Luxury": "Dark Luxury style: near-black background (#0c0c0c), gold/champagne accent color (#c9a84c) for borders and highlights, thin elegant lines (1-1.5px), subtle gradient gold dividers that fade to transparent on edges, minimal decoration, premium and sophisticated feel, high contrast between dark background and gold accents, serif or thin elegant typography, jewelry-brand aesthetic",
    "Gradient Mesh": "Gradient Mesh style: vibrant multi-color animated gradient background blending pink (#f093fb), coral-red (#f5576c), bright blue (#4facfe), and cyan (#00f2fe), continuously shifting and flowing color transitions, bold and dynamic visual energy, vivid saturated colors, modern and eye-catching, content overlaid on the colorful mesh with white or semi-transparent containers for readability",
    "Constructivism": "Constructivism style: bold sans-serif typography, geometric shapes (triangles, circles, rectangles) as key visual elements, red-black-cream color palette, diagonal and asymmetric layouts with elements aligned to one side, propaganda poster aesthetic, strong visual hierarchy, overlapping shapes, angular compositions",
    "Swiss": "Swiss style: strong modular grid system, clean Helvetica/sans-serif typography, minimal and realistic photos or illustrations, poster-inspired composition, black-white-red accent palette, generous whitespace within grid cells, asymmetric but balanced layouts, objective and functional design, clear information hierarchy",
    "Editorial": "Editorial style: print magazine-inspired layout, high contrast between headline and body fonts (bold serif headlines with clean sans-serif body), large hero visuals and photography, decorative elements like drop caps and pull quotes, multi-column text layouts, elegant dividers and ornamental details, sophisticated typography-driven design",
    "Hand-drawn": "Hand-drawn style: handwritten or script fonts (Comic Sans, cursive families), sketchy illustrations and brush stroke textures, slightly misaligned or free-form layout that feels organic, intentional visual chaos, doodle-like borders and underlines, paper-like off-white backgrounds, playful and personal feel, imperfect shapes and hand-lettered headings",
    "Flat": "Flat style: total flatness with no shadows, gradients, or 3D effects, pastel and muted tones (#3498db, #2ecc71, #e74c3c, #f39c12), clean highly readable sans-serif fonts, simple geometric icons, solid color blocks, minimal UI chrome, content-focused with bold color accents on neutral backgrounds",
    "Bento": "Bento style: grid of rectangular rounded content blocks (12-16px border-radius) arranged tightly like a bento box, very little empty space between blocks, each block contains a distinct piece of content, no decorative or unconventional design tricks, clean and organized, neutral or subtle backgrounds within blocks, varying block sizes for visual interest, card-based modular layout"
  },
  tr: {
    "Minimal": "Minimal stil: temiz beyaz arka planlar, siyah-beyaz monokrom palet, bol beyaz boşluk, ince yatay çizgi ayırıcılar, dekoratif öğe yok, keskin ve sade tipografi, gölge veya gradyan yok düz tasarım, içerik öncelikli yerleşim ile maksimum boşluk",
    "Modern": "Modern stil: mordan-violeye gradyan arka planlar (örn. #667eea → #764ba2), backdrop-filter blur ile buzlu cam kart öğeleri ve yarı saydam beyaz kaplamalar (rgba 255,255,255,0.2), yuvarlatılmış köşeler (12px+), yumuşak gölgeler, temiz sans-serif tipografi, renkli gradyan arka planlar üzerinde yarı saydam katmanlı derinlik",
    "Pixel Art": "Pixel Art stil: koyu lacivert arka plan (#1a1a2e), retro 8-bit estetik ve keskin piksel kenarlar, cesur vurgu renkleri — sıcak pembe (#e94560) ve koyu mavi (#0f3460), dama/grid desenleri, sert kenarlı blok UI öğeleri (border-radius yok), monospace veya piksel tarzı tipografi, nostaljik retro oyun havası",
    "Brutalist": "Brutalist stil: krem/kirli beyaz arka plan (#f5f0e8), kalın siyah kenarlıklar (3-4px), ham cilasız estetik, cesur büyük boyutlu monospace tipografi (Courier New veya benzeri), keskin siyah-krem kontrast, yuvarlatılmış köşe yok, gradyan yok, gölge yok, kasıtlı olarak kaba ve anti-tasarım, kalın ayırıcı çizgiler",
    "Glassmorphism": "Glassmorphism stil: derin koyu gradyan arka plan (#0f0c29 → #302b63 → #24243e), çok hafif beyaz tonlu buzlu cam paneller (rgba 255,255,255,0.1), ince yarı saydam beyaz kenarlıklar (1px solid rgba 255,255,255,0.2), güçlü backdrop-filter blur (6-10px), yuvarlatılmış köşeler (10px+), koyu arka planlar üzerinde süzülen yarı saydam kartlar",
    "Retro Neon": "Retro Neon stil: çok koyu neredeyse siyah arka plan (#0a0015), kenarlıklar ve ana öğeler için parlayan box-shadow efektli neon magenta/pembe (#ff00ff), parlayan cyan (#00ffff) vurgu çizgileri, synthwave/cyberpunk estetik, ince neon kenarlıklı konteynerler, parlayan metin efektleri, canlı neon vurgularla koyu-üstüne-koyu, 80'ler retro-fütüristik hava",
    "Pastel": "Pastel stil: pembe (#fbc2eb) ve açık maviye (#a6c1ee) karışan yumuşak gradyan arka planlar, yuvarlatılmış şekiller ve dairesel öğeler, yarı saydam beyaz kaplamalar (rgba 255,255,255,0.5), sert kontrastı olmayan nazik ve havadar renk paleti, yumuşak gölgeler, tüm öğelerde büyük border-radius, samimi ve yaklaşılabilir estetik",
    "Dark Luxury": "Dark Luxury stil: neredeyse siyah arka plan (#0c0c0c), kenarlıklar ve vurgular için altın/şampanya vurgu rengi (#c9a84c), ince zarif çizgiler (1-1.5px), kenarlara doğru saydamlaşan altın gradyan ayırıcılar, minimal dekorasyon, premium ve sofistike his, koyu arka plan ile altın vurgular arasında yüksek kontrast, serif veya ince zarif tipografi",
    "Gradient Mesh": "Gradient Mesh stil: pembe (#f093fb), mercan kırmızı (#f5576c), parlak mavi (#4facfe) ve cyan (#00f2fe) karışan canlı çok renkli animasyonlu gradyan arka plan, sürekli değişen ve akan renk geçişleri, cesur ve dinamik görsel enerji, canlı doygun renkler, okunabilirlik için renkli mesh üzerinde beyaz veya yarı saydam konteynerlerle içerik",
    "Constructivism": "Konstrüktivizm stil: cesur sans-serif tipografi, geometrik şekiller (üçgenler, daireler, dikdörtgenler) ana görsel öğeler olarak, kırmızı-siyah-krem renk paleti, çapraz ve asimetrik yerleşimler, öğeler sayfanın bir tarafına hizalı, propaganda poster estetiği, güçlü görsel hiyerarşi, üst üste binen şekiller, açılı kompozisyonlar",
    "Swiss": "İsviçre stil: güçlü modüler grid sistemi, temiz Helvetica/sans-serif tipografi, minimal ve gerçekçi fotoğraflar veya illüstrasyonlar, poster esinli kompozisyon, siyah-beyaz-kırmızı vurgu paleti, grid hücreleri içinde bol beyaz boşluk, asimetrik ama dengeli yerleşimler, nesnel ve işlevsel tasarım, net bilgi hiyerarşisi",
    "Editorial": "Editöryal stil: baskı dergi esinli yerleşim, başlık ve gövde yazı tipleri arasında yüksek kontrast (cesur serif başlıklar ile temiz sans-serif gövde), büyük kahraman görseller ve fotoğraflar, süslü büyük baş harfler ve alıntılar gibi dekoratif öğeler, çok sütunlu metin düzenleri, zarif ayırıcılar, sofistike tipografi odaklı tasarım",
    "Hand-drawn": "Elle çizim stil: el yazısı veya script fontlar (Comic Sans, cursive aileler), eskiz illüstrasyonlar ve fırça darbesi dokuları, hafif hizasız veya serbest formlu organik hissiyatlı yerleşim, kasıtlı görsel kaos, karalama tarzı kenarlıklar ve alt çizgiler, kağıt benzeri kirli beyaz arka planlar, eğlenceli ve kişisel his, kusurlu şekiller ve el yazısı başlıklar",
    "Flat": "Düz stil: gölge, gradyan veya 3D efekt olmadan tamamen düz tasarım, pastel ve soluk tonlar (#3498db, #2ecc71, #e74c3c, #f39c12), temiz ve okunabilir sans-serif yazı tipleri, basit geometrik simgeler, düz renk blokları, minimal UI, nötr arka planlar üzerinde cesur renk vurguları ile içerik odaklı tasarım",
    "Bento": "Bento stil: bento kutusu gibi sıkıca dizilmiş yuvarlak köşeli dikdörtgen içerik blokları (12-16px border-radius), bloklar arasında çok az boşluk, her blok ayrı bir içerik parçası barındırır, dekoratif veya alışılmadık tasarım hileleri yok, temiz ve düzenli, bloklar içinde nötr veya hafif arka planlar, görsel ilgi için farklı blok boyutları, kart tabanlı modüler yerleşim"
  }
};

function getStyleDescription(style, lang) {
  const l = lang === "tr" ? "tr" : "en";
  return styleDescriptions[l][style] || style;
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

FORMATLAMA KURALLARI (KESİNLİKLE UYULMALI):
- Her XML bölümünde (<constraints>, <behavior>, <phases>, <output_format>) madde işaretli liste (bullet points) kullan, ASLA düz paragraf yazma.
- <role> bölümünde "Kullanıcının hiçbir teknik bilgisi olmadığını varsay — her adımı sıfırdan açıkla" ifadesini ekle.

Oluşturacağın prompt şu yapıyı kullanmalı (HER etiketi MUTLAKA kapat — açılan her <tag> için </tag> olmalı):
- <role>...</role> etiketi ile AI'a bir rol ver (örn: "Sen uzman bir frontend geliştiricisin") + yeni başlayanlara sıfırdan açıklama yapması gerektiğini belirt
- <task>...</task> etiketi ile ana görevi tanımla
- <context>...</context> etiketi ile proje bilgilerini ver
- <constraints>...</constraints> etiketi ile kuralları madde madde listele
- <phases>...</phases> etiketi ile projeyi aşamalara böl
- <behavior>...</behavior> etiketi ile AI'ın nasıl davranacağını madde madde belirle
- <output_format>...</output_format> etiketi ile çıktı formatını madde madde belirle

AŞAMA KURALLARI (<phases> bölümü için):
- Her aşama tek başına çalışan, test edilebilir bir özellik olmalı (dikey dilim). "Dosya oluştur" gibi sadece iskele kuran aşamalar YAPMA.
- İlk aşama her zaman en temel özelliği çalışır halde içermeli (örn: to-do uygulaması → görev ekleme + listeleme bir arada).
- Kullanıcının SEÇTİĞİ özellikler (responsive, veritabanı vb.) opsiyonel DEĞİL, temel aşamalara dahil edilmeli.
- İlişkisiz özellikleri aynı aşamaya koyma (örn: responsive + veritabanı aynı aşamada OLMAZ).
- Her aşamanın açıklaması kısa ve net olmalı: "Bu aşamada X özelliği eklenecek ve Y çalışır hale gelecek."

Prompttaki <behavior> bölümü AI'a şunları emretmeli:
- EN BAŞTA kullanıcıya ihtiyaç duyacağı araçları tanıt: kod editörü (VS Code öner ve nasıl indirilir anlat), tarayıcı, dosyaları nereye kaydedeceği (masaüstünde bir klasör oluşturması gibi). Dosya yapısını açıkla (index.html, styles.css, app.js dosyalarının ne işe yaradığını kısaca anlat).
- Kod yazmaya başlamadan ÖNCE kullanıcıya PROJEYE ÖZEL kısa sorular sor (genel sorular değil, projenin içeriğine göre). TEK TEK sor, her cevabı bekle.
- Her aşamada tam bir özelliği baştan sona (HTML + CSS + JS) bitir, sonra bir sonrakine geç.
- Her kod bloğundan sonra kısa bir açıklama yap: ne yaptığını ve neden böyle yaptığını anlat. Teknik terimleri (CSS, JavaScript, HTML etiketi vb.) ilk geçtiği yerde kısaca tanımla.
- İçerik gerektiren yerlerde kullanıcıyı yönlendir (dosya yapısı, nereye ne koyacağı)
- Her aşamadan sonra opsiyonel geliştirmeler öner
- Her aşamanın sonunda kısa bir özet yaz: ne yapıldı, ne çalışıyor, sırada ne var

Prompttaki <constraints> bölümünde şu negatif kısıtlamalar MUTLAKA olmalı:
- Listede OLMAYAN özellikleri EKLEME
- Önceki aşamaların kodunu baştan yazma, sadece üzerine ekle
- Kullanıcı sormadıkça yeni kütüphane veya araç önerme

Prompttaki <output_format> bölümü şunları İÇERMELİ:
- Dosya listesi: index.html, styles.css, app.js
- Her dosyanın başında dosya adını belirt
- "Projeyi tarayıcıda nasıl açarsın" bölümü (index.html'e çift tıkla veya VS Code Live Server kullan — adım adım)
- Kısa bir "Sorun giderme" bölümü (sık karşılaşılan hatalar ve çözümleri)

KRİTİK: Her XML etiketini MUTLAKA kapat. Örnek: <role>...içerik...</role>, <task>...içerik...</task> vb. Kapanmamış etiket BIRAKMA.

SADECE promptu yaz. Giriş cümlesi, açıklama veya "İşte promptunuz" gibi ifadeler EKLEME.`
    : `You are an expert prompt engineer. You are generating a structured prompt to be pasted into an AI coding tool (Claude, Cursor, ChatGPT, Gemini).

IMPORTANT: The person using this prompt is most likely a beginner. Explain technical terms simply. Tell the user what tools they need (code editor, browser, file structure, etc.) and how to use them. Do not assume any prior knowledge.

FORMATTING RULES (MUST FOLLOW):
- In every XML section (<constraints>, <behavior>, <phases>, <output_format>), use bullet points. NEVER write prose paragraphs.
- In the <role> section, include "Assume the user has zero technical knowledge — explain every step from scratch."

The prompt you generate must use this structure (EVERY tag MUST be closed — each <tag> needs a matching </tag>):
- <role>...</role> tag to assign the AI a persona (e.g. "You are an expert frontend developer") + state that the user is a beginner and needs everything explained from scratch
- <task>...</task> tag to define the main goal
- <context>...</context> tag for project details
- <constraints>...</constraints> tag for rules — as a bullet-point list
- <phases>...</phases> tag to break the project into steps
- <behavior>...</behavior> tag to define how the AI should interact — as a bullet-point list
- <output_format>...</output_format> tag to specify the expected output — as a bullet-point list

PHASE RULES (for the <phases> section):
- Each phase must be a standalone, testable feature (vertical slice). Do NOT create phases that only scaffold files with no working feature.
- Phase 1 must always include the most basic working feature (e.g. for a to-do app → adding + listing tasks together, not just "create HTML structure").
- Features the user SELECTED (responsive, database, etc.) are NOT optional — they must be included in the core phases.
- Do NOT bundle unrelated features in the same phase (e.g. responsive + database in one phase is WRONG).
- Each phase description should be short and clear: "In this phase, X feature will be added and Y will work."

The <behavior> section must instruct the AI to:
- AT THE VERY START, introduce the tools the user will need: recommend a code editor (suggest VS Code and explain how to download it), a browser, and where to save files (e.g. create a folder on their desktop). Explain the file structure (what index.html, styles.css, app.js are for in simple terms).
- BEFORE writing any code, ask the user short clarifying questions that are SPECIFIC TO THE PROJECT (not generic questions — tailor them to what the app actually needs). Ask ONE question at a time, wait for each answer.
- Complete one full feature end-to-end (HTML + CSS + JS) per phase before moving to the next.
- After each code block, add a brief explanation: what it does and why. Define technical terms (CSS, JavaScript, HTML tags, etc.) the first time they appear.
- Guide the user on content placement (file structure, where to put their assets)
- After each working phase, suggest 2-3 optional improvements
- At the end of each phase, write a short summary: what was built, what works, what comes next

The <constraints> section MUST include these negative constraints:
- Do NOT add features not listed in the requirements
- Do NOT rewrite previous phases — only extend and build on top
- Do NOT suggest new libraries or tools unless the user asks

The <output_format> section MUST include:
- File list: index.html, styles.css, app.js
- Label each file clearly at the top
- A "How to open your project in the browser" section (double-click index.html, or use VS Code Live Server — step by step)
- A short "Troubleshooting" section (common errors and how to fix them)

CRITICAL: Every XML tag MUST be closed. Example: <role>...content...</role>, <task>...content...</task>, etc. Do NOT leave any unclosed tags.

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
- Görsel stil: ${getStyleDescription(a.style, "tr")}${a.visualDetails ? "\n- Görsel detaylar: " + a.visualDetails : ""}${a.audience ? "\n- Hedef kitle: " + a.audience : ""}
${a.customFeatures.length ? "- Ekstra: " + a.customFeatures.join(", ") : ""}${extras.length ? "\n- Ek gereksinimler: " + extras.join(", ") : ""}

Oluşturacağın prompt XML etiketleri kullansın (<role>...</role>, <task>...</task>, <context>...</context>, <constraints>...</constraints>, <behavior>...</behavior>, <phases>...</phases>, <output_format>...</output_format>).
HER etiketi MUTLAKA kapat (açılan her <tag> için </tag> olmalı). HER bölümde madde işaretli liste kullan, düz paragraf YAZMA.

<phases> bölümü için kurallar:
- Her aşama tek başına çalışan bir özellik olmalı (sadece dosya oluşturma gibi aşamalar YAPMA)
- İlk aşama en temel özelliği çalışır halde içermeli
- Kullanıcının SEÇTİĞİ özellikler (responsive, veritabanı vb.) opsiyonel DEĞİL, temel aşamalara dahil et
- İlişkisiz özellikleri aynı aşamaya koyma

<constraints> bölümü şunları içersin:
- Çıktı: index.html, styles.css, app.js
- ${getStyleDescription(a.style, "tr")} — bu stili tüm UI öğelerine uygula
- Framework, npm, Docker KULLANMA
- Basit HTML + CSS + JS
- ${!isSimple ? "Backend gerekirse en basit yol (tek dosya server veya ücretsiz servis)" : "Sadece statik dosyalar"}
- Kod yeni başlayanlara uygun, her satırda yorum olsun ama yapılandırılmış ve profesyonel kalitede olsun
- Listede OLMAYAN özellikleri EKLEME
- Önceki aşamaların kodunu baştan yazma, sadece üzerine ekle
- Kullanıcı sormadıkça yeni kütüphane veya araç önerme

<behavior> bölümü şunları emretsin:
- EN BAŞTA kullanıcıya araçları tanıt: VS Code (nasıl indirilir), tarayıcı, dosyaları nereye kaydedeceği. Dosya yapısını açıkla (index.html, styles.css, app.js ne işe yarar).
- Kod yazmadan ÖNCE kullanıcıya PROJEYE ÖZEL 2-3 kısa soru sor (genel sorular değil, bu projenin içeriğine özel sorular). Soruları TEK TEK sor, her cevabı bekle.
- ${!isSimple ? "Projeyi aşamalara böl (max 3-5 aşama, <phases> kullan). Her aşama bağımsız çalışabilmeli ve test edilebilmeli. Her aşamadan sonra 'devam et' demesini bekle." : "Projeyi tek seferde oluştur ama adım adım açıkla"}
- Her aşamada tam bir özelliği baştan sona (HTML + CSS + JS) bitir, sonra bir sonrakine geç
- Her kod bloğundan sonra kısa açıklama ekle (ne yaptığı + neden). Teknik terimleri ilk geçtiği yerde kısaca tanımla.
- İçerik gerektiren yerlerde yönlendir ("görselleri images/ klasörüne koy", "verileri data.js'de düzenle" gibi)
- Her aşamadan sonra 2-3 opsiyonel geliştirme öner
- Her aşamanın sonunda kısa özet: ne yapıldı, ne çalışıyor, sırada ne var

<output_format> bölümü şunları içersin:
- Dosya listesi: index.html, styles.css, app.js
- Her dosyanın başında dosya adı
- "Projeyi tarayıcıda nasıl açarsın" bölümü (adım adım, Live Server dahil)
- Kısa "Sorun giderme" bölümü (sık hatalar ve çözümleri)`
    : `Generate a structured prompt for this project: "${a.idea}"

Project info:
- Type: ${isSimple ? "Simple static landing page" : "MVP web app"}
- Landing page only: ${a.landing}
- Needs accounts: ${a.accounts}
- Needs payments: ${a.payments}
- Needs database: ${a.database}
- Needs API: ${a.api}
- Mobile responsive: ${a.responsive}
- Visual style: ${getStyleDescription(a.style, "en")}${a.visualDetails ? "\n- Visual details: " + a.visualDetails : ""}${a.audience ? "\n- Target audience: " + a.audience : ""}
${a.customFeatures.length ? "- Extras: " + a.customFeatures.join(", ") : ""}${extras.length ? "\n- Additional needs: " + extras.join(", ") : ""}

The prompt you generate must use XML tags (<role>...</role>, <task>...</task>, <context>...</context>, <constraints>...</constraints>, <behavior>...</behavior>, <phases>...</phases>, <output_format>...</output_format>).
EVERY tag MUST be closed (each <tag> needs a matching </tag>). Use bullet points in EVERY section. NEVER write prose paragraphs.

Phase rules for the <phases> section:
- Each phase must be a standalone working feature (no scaffolding-only phases)
- Phase 1 must include the most basic working feature
- Features the user SELECTED (responsive, database, etc.) are NOT optional — include them in core phases
- Do NOT bundle unrelated features in the same phase

The <constraints> section should include:
- Output files: index.html, styles.css, app.js
- ${getStyleDescription(a.style, "en")} — apply this style to all UI elements
- No frameworks, npm, Docker
- Simple HTML + CSS + JS only
- ${!isSimple ? "If backend needed, suggest simplest path (single file server or free service)" : "Static files only"}
- Beginner-friendly code with comments on every section, but well-structured and production-quality
- Do NOT add features not listed in the requirements
- Do NOT rewrite previous phases — only extend and build on top
- Do NOT suggest new libraries or tools unless the user asks

The <behavior> section must instruct the AI to:
- AT THE VERY START, introduce the tools needed: VS Code (how to download), a browser, where to save files. Explain the file structure (what index.html, styles.css, app.js are for).
- BEFORE writing code, ask the user 2-3 short clarifying questions SPECIFIC TO THIS PROJECT (not generic questions — tailor them to what the app needs). Ask ONE at a time, wait for each answer.
- ${!isSimple ? "Break the project into phases (max 3-5, use <phases>). Each phase must be independently testable and working. Wait for 'continue' after each phase." : "Build in one go but explain step by step"}
- Complete one full feature end-to-end (HTML + CSS + JS) per phase before moving to the next
- After each code block, add a brief explanation (what it does + why). Define technical terms the first time they appear.
- Guide user on content placement ("put images in images/", "edit data in data.js")
- After each phase, suggest 2-3 optional improvements
- At the end of each phase, write a short summary: what was built, what works, what comes next

The <output_format> section must include:
- File list: index.html, styles.css, app.js
- Label each file at the top
- "How to open your project in the browser" section (step by step, including Live Server)
- Short "Troubleshooting" section (common errors and fixes)`;

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
${a.audience ? "Hedef kitle: " + a.audience + "\n" : ""}Görsel stil: ${getStyleDescription(a.style, "tr")}${a.visualDetails ? "\nGörsel detaylar: " + a.visualDetails : ""}
${extrasArr.length ? "Ek gereksinimler: " + extrasArr.join(", ") : ""}${a.customFeatures.length ? "\nEkstra özellikler: " + a.customFeatures.join(", ") : ""}
</context>

<constraints>
- Çıktı dosyaları: index.html, styles.css, app.js
- ${getStyleDescription(a.style, "tr")} — bu stili tüm UI öğelerine uygula
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
${a.audience ? "Target audience: " + a.audience + "\n" : ""}Visual style: ${getStyleDescription(a.style, "en")}${a.visualDetails ? "\nVisual details: " + a.visualDetails : ""}
${extrasArr.length ? "Additional needs: " + extrasArr.join(", ") : ""}${a.customFeatures.length ? "\nExtra features: " + a.customFeatures.join(", ") : ""}
</context>

<constraints>
- Output files: index.html, styles.css, app.js
- ${getStyleDescription(a.style, "en")} — apply this style to all UI elements
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

// ── Modals (About, Privacy, Terms) ──
function openModal(id) { document.getElementById(id).classList.remove("hidden"); }
function closeModal(id) { document.getElementById(id).classList.add("hidden"); }

document.getElementById("learnFooterBtn").addEventListener("click", () => {
  const el = document.getElementById("learnSection");
  if (el) el.scrollIntoView({ behavior: "smooth" });
});
document.getElementById("learnCta").addEventListener("click", (e) => {
  e.preventDefault();
  const el = document.getElementById("learnSection");
  if (el) el.scrollIntoView({ behavior: "smooth" });
});

// ── Tutorial Stepper ──
(function initStepper() {
  const stepper = document.getElementById("tutorialStepper");
  if (!stepper) return;
  const tabs = stepper.querySelectorAll(".stepper-tab");
  const panels = stepper.querySelectorAll(".stepper-panel");
  let current = 0;

  function goTo(idx) {
    if (idx === current) return;
    tabs[current].classList.remove("active");
    tabs[current].classList.add("completed");
    panels[current].classList.remove("active");
    current = idx;
    tabs[current].classList.add("active");
    panels[current].classList.add("active");
    // Mark all previous tabs as completed
    tabs.forEach((tab, i) => {
      if (i < current) tab.classList.add("completed");
      else tab.classList.remove("completed");
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => goTo(parseInt(tab.dataset.stepIdx)));
  });
})();

document.getElementById("aboutFooterBtn").addEventListener("click", () => openModal("aboutModal"));
document.getElementById("privacyBtn").addEventListener("click", () => openModal("privacyModal"));
document.getElementById("termsBtn").addEventListener("click", () => openModal("termsModal"));

document.querySelectorAll("[data-close-modal]").forEach(btn => {
  btn.addEventListener("click", () => closeModal(btn.dataset.closeModal));
});
document.querySelectorAll(".modal-backdrop[data-modal]").forEach(bd => {
  bd.addEventListener("click", () => closeModal(bd.dataset.modal));
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

// ── Accessibility statement modal ──
document.getElementById("a11yBtn").addEventListener("click", () => openModal("a11yModal"));

// ── Syntax highlighting ──
function highlightXML(text) {
  const escaped = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return escaped
    .replace(/(&lt;\/?[\w_]+&gt;)/g, '<span class="hl-tag">$1</span>')
    .replace(/^(\s*[-•*])/gm, '<span class="hl-bullet">$1</span>');
}

let editMode = false;
function renderHighlightedOutput() {
  const output = document.getElementById("output");
  const highlighted = document.getElementById("outputHighlighted");
  highlighted.innerHTML = highlightXML(output.value);
}

document.getElementById("editToggleBtn").addEventListener("click", () => {
  editMode = !editMode;
  const output = document.getElementById("output");
  const highlighted = document.getElementById("outputHighlighted");
  const btn = document.getElementById("editToggleBtn");
  if (editMode) {
    highlighted.classList.add("hidden");
    output.classList.remove("hidden");
    btn.classList.add("active");
    btn.querySelector("[data-i18n]").textContent = t("viewToggle");
  } else {
    renderHighlightedOutput();
    output.classList.add("hidden");
    highlighted.classList.remove("hidden");
    btn.classList.remove("active");
    btn.querySelector("[data-i18n]").textContent = t("editToggle");
  }
});

// ── Save/Resume progress ──
const PROGRESS_KEY = "vibes101_progress";

function saveProgress() {
  const data = {
    currentStep,
    idea: document.getElementById("idea").value,
    audience: document.getElementById("audience").value,
    visualDetails: document.getElementById("visualDetails").value,
    features: {},
    style: getStyle(),
    customChips: [...customChips],
  };
  document.querySelectorAll(".feature-card").forEach(card => {
    data.features[card.dataset.name] = card.classList.contains("selected");
  });
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(data));
}

function clearProgress() {
  localStorage.removeItem(PROGRESS_KEY);
}

function restoreProgress(data) {
  document.getElementById("idea").value = data.idea || "";
  document.getElementById("audience").value = data.audience || "";
  document.getElementById("visualDetails").value = data.visualDetails || "";

  if (data.features) {
    document.querySelectorAll(".feature-card").forEach(card => {
      if (data.features[card.dataset.name]) {
        card.classList.add("selected");
      } else {
        card.classList.remove("selected");
      }
    });
  }

  if (data.style) {
    document.querySelectorAll(".style-card").forEach(c => c.classList.remove("selected"));
    const sc = document.querySelector(`.style-card[data-value="${data.style}"]`);
    if (sc) sc.classList.add("selected");
  }

  customChips.length = 0;
  if (data.customChips) data.customChips.forEach(c => customChips.push(c));
  renderChips();

  if (data.currentStep > 0) goTo(data.currentStep);
}

function showResumeBanner() {
  const saved = localStorage.getItem(PROGRESS_KEY);
  if (!saved) return;
  const data = JSON.parse(saved);
  if (!data || data.currentStep <= 0) return;

  const banner = document.createElement("div");
  banner.className = "resume-banner";
  banner.id = "resumeBanner";
  banner.innerHTML = `
    <span class="resume-banner-text">${t("resumeText")}</span>
    <div class="resume-banner-actions">
      <button class="btn-back" id="startFreshBtn">${t("startFreshBtn")}</button>
      <button class="btn-next" id="resumeBtn">${t("resumeBtn")}</button>
    </div>
  `;

  const stepContent = document.querySelector('[data-step="0"] .step-content');
  stepContent.insertBefore(banner, stepContent.firstChild);

  document.getElementById("resumeBtn").addEventListener("click", () => {
    restoreProgress(data);
    banner.remove();
  });
  document.getElementById("startFreshBtn").addEventListener("click", () => {
    clearProgress();
    banner.remove();
  });
}

// Hook save into navigation and inputs
const origGoTo = goTo;
goTo = function(step) {
  origGoTo(step);
  saveProgress();

  // Accessibility: move focus to the new step heading
  const target = document.querySelector(`[data-step="${step}"]`);
  const heading = target.querySelector("h1, h2");
  if (heading) { heading.setAttribute("tabindex", "-1"); heading.focus(); }

  // Update progressbar aria
  const pct = Math.round((step / TOTAL_STEPS) * 100);
  document.querySelector(".progress").setAttribute("aria-valuenow", pct);
};

document.getElementById("idea").addEventListener("input", saveProgress);
document.getElementById("audience").addEventListener("input", saveProgress);
document.getElementById("visualDetails").addEventListener("input", saveProgress);
document.querySelectorAll(".feature-card").forEach(card => {
  card.addEventListener("click", () => setTimeout(saveProgress, 0));
});
document.querySelectorAll(".style-card").forEach(card => {
  card.addEventListener("click", () => setTimeout(saveProgress, 0));
});

// ── Accessibility: Modal focus trap ──
let lastFocusedElement = null;

const origOpenModal = openModal;
openModal = function(id) {
  lastFocusedElement = document.activeElement;
  origOpenModal(id);
  const modal = document.getElementById(id);
  const closeBtn = modal.querySelector(".modal-close");
  if (closeBtn) closeBtn.focus();

  modal._trapHandler = function(e) {
    if (e.key === "Escape") { closeModal(id); return; }
    if (e.key !== "Tab") return;
    const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  };
  modal.addEventListener("keydown", modal._trapHandler);
};

const origCloseModal = closeModal;
closeModal = function(id) {
  const modal = document.getElementById(id);
  if (modal._trapHandler) { modal.removeEventListener("keydown", modal._trapHandler); }
  origCloseModal(id);
  if (lastFocusedElement) { lastFocusedElement.focus(); lastFocusedElement = null; }
};

// ── Service Worker registration ──
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

// ── Init ──
showResumeBanner();
applyTranslations();
