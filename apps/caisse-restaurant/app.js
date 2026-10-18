// ==========================================================================
// SDBO SMART GEST - Logique Interactive & Système Bilingue FR / AR
// ==========================================================================

const i18nData = {
  fr: {
    logo_sub: "Solutions de Gestion & Caisse",
    nav_solutions: "Solutions",
    nav_features: "Fonctionnalités",
    nav_whatsapp: "Module WhatsApp",
    nav_downloads: "Téléchargements",
    nav_faq: "Guide & FAQ",
    nav_contact: "Activation",
    header_wa_btn: "Activer Licence",
    
    hero_pill: "Version 2026 : Caisse Tactile PC & Prise de Commande Mobile",
    hero_title_prefix: "Le Système de Caisse Tactile Ultime pour",
    hero_title_highlight: "Restaurants, Snacks & Cafés",
    hero_desc: "Une application puissante, intuitive et 100% autonome. Prise de commande ultra-rapide, gestion des tables, synchronisation mobile sans fil et module Textile avec partage de catalogues et remises directes par WhatsApp.",
    
    tab_resto: "SMART Caisse (Restauration & Snacks)",
    tab_textile: "SMART Textile (Mode & Commerce WhatsApp)",
    
    hero_download_pc: "Télécharger Installateur PC (97 Mo)",
    hero_download_apk: "Télécharger APK Mobile (4 Mo)",
    hero_cta_wa: "Activation Immédiate sur WhatsApp",
    mockup_sync: "● Live Sync Wi-Fi Actif",
    
    feat_tag: "Performance & Fiabilité",
    feat_title: "Conçu pour Accélérer vos Ventes au Quotidien",
    feat_sub: "Des fonctionnalités pensées pour les professionnels les plus exigeants, sans abonnement contraignant.",
    
    f1_title: "Prise de Commande Ultra-Rapide",
    f1_desc: "Interface tactile fluide optimisée au millimètre. Ajoutez des produits en un clic, appliquez des remises, saisissez le poids des produits pesables et encaissez en quelques secondes.",
    
    f2_title: "Gestion Visuelle des Tables",
    f2_desc: "Basculez entre Sur Place, Emporter et Livraison. Visualisez l'état des tables (Libre, Occupée, Active), enregistrez les commandes en attente et imprimez l'addition à tout moment.",
    
    f3_title: "Serveur Mobile & QR Code (LAN)",
    f3_desc: "Vos serveurs prennent les commandes directement en salle depuis leur smartphone ou tablette (Android/iOS). Synchronisation en temps réel via le réseau Wi-Fi local sans connexion internet requise.",
    
    f4_title: "Impression Thermique ESC/POS",
    f4_desc: "Impression automatique des bons de commande en Cuisine, Bar et tickets d'addition au comptoir. Compatible avec toutes les imprimantes thermiques 80mm et 58mm (USB et Réseau).",
    
    f5_title: "Rapports Financiers X & Z Certifiés",
    f5_desc: "Consultez votre chiffre d'affaires en direct avec le Rapport X utilisateur et clôturez la journée en toute sécurité grâce au Rapport Z avec répartition des modes de paiement et export CSV.",
    
    f6_title: "100% Autonome & Hors-Ligne",
    f6_desc: "Vos données restent stockées en toute sécurité sur votre machine locale. Aucune dépendance au cloud, aucun risque d'arrêt en cas de coupure internet et zéro frais mensuels cachés.",
    
    wa_spot_title: "Partagez vos Catalogues et Remises directement sur WhatsApp !",
    wa_spot_desc: "Révolutionnez la relation avec vos clients ! L'édition Textile de SMART GEST intègre un module natif d'envoi WhatsApp permettant de transmettre instantanément le ticket de caisse, les remises accordées et les catalogues de nouveautés sans surcoût.",
    wa_b1: "Envoi du reçu d'achat et détails de la remise sur le WhatsApp du client",
    wa_b2: "Partage du catalogue complet ou par catégorie avec photos, prix et tailles",
    wa_b3: "Gestion des variantes textile : tailles (S, M, L, XL), pointures et coloris",
    wa_b4: "Compatible douchette code-barres et lecteur laser pour un encaissement express",
    btn_dl_textile_wa: "Télécharger l'Édition Textile (250 Mo)",
    
    dl_tag: "Centre de Téléchargement",
    dl_title: "Téléchargez Gratuitement et Testez Immédiatement",
    dl_sub: "20 tickets complets offerts pour essayer toutes les options sans limite avant activation.",
    dl1_desc: "Installateur tout-en-un pour PC tactile et ordinateurs de caisse. Configure automatiquement le pare-feu et les raccourcis bureau.",
    btn_dl_resto: "Télécharger pour PC (.exe)",
    dl2_desc: "Application mobile Android pour serveurs et serveuses. Prise de commande en salle et synchronisation instantanée avec le PC de caisse.",
    btn_dl_apk: "Télécharger l'APK Android",
    dl3_desc: "Version dédiée au textile avec gestion des tailles, couleurs, codes-barres et partage WhatsApp des remises et catalogues.",
    btn_dl_textile: "Télécharger le Pack Textile (.zip)",
    
    act_title: "Comment Activer votre Logiciel Définitivement ?",
    act_desc: "Votre version de démonstration inclut 20 tickets pour tout tester sans engagement. Pour passer en version complète et illimitée, suivez ces 3 étapes simples :",
    step1_title: "Installez et lancez l'application",
    step1_desc: "Téléchargez l'installateur ci-dessus et suivez l'assistant d'installation sur votre ordinateur.",
    step2_title: "Relevez votre Identifiant Matériel (Hardware ID)",
    step2_desc: "Sur l'écran de verrouillage ou dans le menu de licence, copiez votre code unique (ex: SDBO-XXXX-XXXX).",
    step3_title: "Contactez-nous sur WhatsApp pour votre clé",
    step3_desc: "Envoyez-nous votre identifiant. Votre clé d'activation à vie vous est transmise instantanément par nos conseillers !",
    card_act_title: "Activation Immédiate",
    card_act_sub: "Assistance technique et fourniture de licence 7j/7 par nos experts SDBO.",
    btn_contact_wa: "Contacter sur WhatsApp (0661605369)",
    
    faq_tag: "Guide Pratique & FAQ",
    faq_title: "Tout Savoir sur l'Utilisation de l'Application",
    faq_sub: "Découvrez les réponses aux questions les plus fréquentes et les étapes pas-à-pas.",
    
    q1: "1. Comment installer l'application sur mon PC Windows ?",
    a1: "Téléchargez simplement le fichier <strong>INSTALLATEUR_SMART_CAISSE.exe</strong> depuis la section téléchargement. Double-cliquez sur l'exécutable : l'assistant installe automatiquement l'application dans <code>C:\SMART_Caisse</code>, configure les autorisations de pare-feu pour le serveur mobile et dépose des raccourcis prêts à l'emploi sur votre Bureau et dans le menu Démarrer.",
    
    q2: "2. Comment ouvrir une session de caisse et démarrer la journée ?",
    a2: "Au premier lancement, connectez-vous avec le code PIN par défaut (<strong>0000</strong> pour l'administrateur ou <strong>1234</strong> pour le caissier). Cliquez sur le bouton vert <em>'Ouvrir la journée'</em>, saisissez le montant de votre fond de caisse initial (ex: 200 DH), puis validez. L'interface de vente devient immédiatement active.",
    
    q3: "3. Comment prendre une commande et gérer les tables (Sur place, Emporter, Livraison) ?",
    a3: "Sélectionnez la catégorie en haut de l'écran, puis touchez les articles souhaités pour les ajouter au panier. Cliquez sur le bouton <em>'🪑 Table'</em> pour choisir le numéro de table (Table 1 à 16 ou Terrasses). Vous pouvez basculer le mode entre <strong>Sur place</strong>, <strong>À emporter</strong> et <strong>Livraison</strong>. Les tables occupées apparaissent avec leur montant en cours et peuvent être reprises à tout instant.",
    
    q4: "4. Comment imprimer le ticket de caisse et l'addition ?",
    a4: "Pour imprimer l'addition provisoire d'une table sans encaisser, cliquez sur le bouton <em>'🧾 Addition'</em> dans le panier. Lors du paiement final, cliquez sur <em>'Espèces'</em> ou <em>'Carte TPE'</em> : le ticket de caisse définitif et le bon de cuisine sont automatiquement envoyés à vos imprimantes thermiques ESC/POS configurées.",
    
    q5: "5. Comment utiliser l'accès mobile sur smartphone ou tablette pour les serveurs ?",
    a5: "Sur le PC de caisse, cliquez sur le bouton <em>'📱 Accès Mobile'</em> ou lancez <code>LANCER_SERVEUR_MOBILE.bat</code>. Un QR Code s'affiche. Connectez le smartphone au même réseau Wi-Fi que le PC et scannez le QR Code (ou entrez l'adresse IP affichée). Le serveur peut alors prendre des commandes directement en salle, qui apparaissent en direct sur le PC de caisse !",
    
    q6: "6. Comment clôturer la caisse en fin de journée (Rapports X et Z) ?",
    a6: "En cours de service, vous pouvez imprimer un <strong>Rapport X</strong> pour vérifier le total provisoire sans fermer la session. En fin de journée, allez dans le menu Actions et choisissez <strong>Rapport Z</strong> : le système calcule le chiffre d'affaires, le montant espèces/carte, imprime le récapitulatif fiscal officiel et clôture la journée de manière sécurisée.",
    
    q7: "7. Comment fonctionne l'envoi de remises et du catalogue par WhatsApp (Édition Textile) ?",
    a7: "Dans l'édition Textile, après avoir appliqué une remise personnalisée ou sélectionné des articles, cliquez sur le bouton <em>'Partager WhatsApp'</em>. L'application génère un message préformaté avec le détail des articles, les tailles choisies, la réduction fidélité et le total à payer, et ouvre WhatsApp Web ou l'application WhatsApp directement sur le numéro de votre client !",
    
    q8: "8. Comment activer définitivement la licence après les 20 tickets d'essai ?",
    a8: "Lorsque la limite d'essai approche, relevez votre <strong>Identifiant Matériel</strong> (Hardware ID) affiché sur l'écran d'activation. Cliquez sur le bouton WhatsApp du support SDBO (+212 661-605369) pour transmettre cet identifiant. Vous recevrez immédiatement votre clé d'activation permanente (format XXXX-XXXX-XXXX-XXXX) à coller dans le champ d'activation.",
    
    wa_tooltip: "Contact WhatsApp Direct",
    footer_desc: "Éditeur de logiciels de caisse tactile et solutions de gestion commerciale pour restaurants, snacks, cafés et boutiques de textile au Maroc et à l'international.",
    footer_prod: "Solutions",
    footer_dl: "Téléchargements",
    footer_support: "Support & Contact"
  },
  
  ar: {
    logo_sub: "حلول نقاط البيع والبرامج التجارية",
    nav_solutions: "الحلول",
    nav_features: "المميزات",
    nav_whatsapp: "نظام واتساب",
    nav_downloads: "التحميلات",
    nav_faq: "دليل الاستخدام",
    nav_contact: "التفعيل",
    header_wa_btn: "تفعيل الترخيص",
    
    hero_pill: "إصدار 2026 : كاشير تفاعلي للحاسوب والطلب عبر الهاتف",
    hero_title_prefix: "نظام الكاشير التفاعلي المتكامل لإدارة",
    hero_title_highlight: "المطاعم، الوجبات السريعة والمقاهي",
    hero_desc: "تطبيق قوي وسهل الاستخدام يعمل بدون إنترنت. تسجيل سريع للطلبات، إدارة احترافية للطاولات، تزامن لاسلكي مع هواتف النوادل، ونظام خاص بمحلات الملابس مع مشاركة التخفيضات والكتالوج عبر واتساب.",
    
    tab_resto: "كاشير المطاعم والوجبات السريعة",
    tab_textile: "كاشير الملابس والنسيج مع واتساب",
    
    hero_download_pc: "تحميل البرنامج للحاسوب (97 ميغابايت)",
    hero_download_apk: "تحميل تطبيق الهاتف APK (4 ميغابايت)",
    hero_cta_wa: "طلب كود التفعيل عبر واتساب",
    mockup_sync: "● التزامن المباشر Wi-Fi نشط",
    
    feat_tag: "السرعة والاعتمادية",
    feat_title: "مصمم لتسريع مبيعاتك وتسهيل عملك اليومي",
    feat_sub: "خصائص متطورة تلبي احتياجات أصحاب المطاعم والمحلات التجارية بدون اشتراكات شهرية.",
    
    f1_title: "تسجيل الطلبات بسرعة فائقة",
    f1_desc: "شاشة تفاعلية باللمس مصممة بدقة عالية. إضافة الأصناف بنقرة واحدة، تطبيق الخصومات، وزن المنتجات وإتمام الدفع في ثوانٍ معدودة.",
    
    f2_title: "إدارة بصرية للطاولات والطلبات",
    f2_desc: "التنقل السهل بين طلبات المحلي، السفري والتوصيل. عرض حالة الطاولات (فارغة، مشغولة، نشطة)، تعليق الطلبات وطباعة الحساب في أي وقت.",
    
    f3_title: "تطبيق النوادل عبر الهاتف (شبكة محلية)",
    f3_desc: "يقوم النوادل بأخذ الطلبات من الطاولات مباشرة عبر هواتفهم الذكية (أندرويد وآيفون). التزامن فوري وتلقائي عبر الواي فاي المحلي بدون الحاجة للإنترنت.",
    
    f4_title: "طباعة حرارية للمطبخ والصندوق",
    f4_desc: "إرسال تلقائي لأوامر التحضير لمطابخ ومشروبات المحل، مع طباعة فواتير الزبائن. متوافق مع كافة الطابعات الحرارية USB وشبكية 80 ملم و58 ملم.",
    
    f5_title: "تقارير مالية رسمية (X و Z)",
    f5_desc: "متابعة مداخيل اليومية لحظة بلحظة عبر تقرير X المؤقت، وإغلاق الصندوق اليومي بأمان عبر تقرير Z الرسمي وتصدير البيانات إلى ملف Excel.",
    
    f6_title: "100% مستقل ويعمل بدون إنترنت",
    f6_desc: "جميع بياناتك ومبيعاتك محفوظة على جهازك الخاص بأمان تام. لا انقطاع في العمل عند تعطل الإنترنت وبدون أي رسوم شهرية خفية.",
    
    wa_spot_title: "شارك الكتالوج وقسائم التخفيض مباشرة عبر واتساب!",
    wa_spot_desc: "طوّر علاقتك بزبائنك! يحتوي نظام الملابس والتجارة من SMART GEST على وحدة متطورة ترسل فاتورة الشراء وتفاصيل التخفيضات والكتالوج الجديد مباشرة إلى رقم واتساب الخاص بالزبون بنقرة واحدة.",
    wa_b1: "إرسال وصل الشراء ونسبة الخصم مباشرة لرقم واتساب الزبون",
    wa_b2: "مشاركة كتالوج المنتجات كاملاً أو حسب الصنف مع الصور والأسعار والمقاسات",
    wa_b3: "إدارة مقاسات الملابس والأحذية والألوان بدقة واحترافية",
    wa_b4: "متوافق مع قارئ الباركود والليزر لسرعة فائقة في الحساب والدفع",
    btn_dl_textile_wa: "تحميل نظام الملابس والنسيج (250 ميغا)",
    
    dl_tag: "مركز التحميل المباشر",
    dl_title: "حمّل نسختك مجاناً وجرّب كافة الخصائص الآن",
    dl_sub: "20 وصل شراء كامل مجاناً لتجربة كل مزايا البرنامج بدون أي التزام مسبق.",
    dl1_desc: "برنامج التثبيت الشامل للحاسوب والشاشات التفاعلية. يضبط تلقائياً جدار الحماية واختصارات سطح المكتب.",
    btn_dl_resto: "تحميل للحاسوب (.exe)",
    dl2_desc: "تطبيق أندرويد لهواتف النوادل. أخذ الطلبات في الصالة وتزامن فوري ومباشر مع حاسوب الكاشير.",
    btn_dl_apk: "تحميل تطبيق أندرويد (APK)",
    dl3_desc: "نسخة مخصصة لمحلات الملابس مع المقاسات والألوان والباركود وإرسال التخفيضات عبر واتساب.",
    btn_dl_textile: "تحميل حزمة الملابس والنسيج (.zip)",
    
    act_title: "كيف تقوم بتفعيل البرنامج بشكل دائم؟",
    act_desc: "تمنحك النسخة التجريبية 20 وصلاً لاختبار جميع وظائف البرنامج. لتفعيل النسخة الدائمة وغير المحدودة، اتبع هذه الخطوات الثلاث البسيطة:",
    step1_title: "ثبّت البرنامج وشغّله على حاسوبك",
    step1_desc: "قم بتحميل المثبت أعلاه واتبع خطوات التثبيت البسيطة على جهازك.",
    step2_title: "انسخ المعرّف الخاص بجهازك (Hardware ID)",
    step2_desc: "في شاشة التفعيل أو قائمة البرنامج، ستجد معرّفاً فريداً لجهازك (مثل: SDBO-XXXX-XXXX).",
    step3_title: "راسلنا على واتساب للحصول على مفتاحك الدائم",
    step3_desc: "أرسل المعرف وسيزودك فريق الدعم الفني بمفتاح التفعيل الدائم مدى الحياة فوراً!",
    card_act_title: "تفعيل فوري ومباشر",
    card_act_sub: "دعم فني وتوفير مفاتيح التفعيل 7 أيام في الأسبوع من خبراء SDBO.",
    btn_contact_wa: "تواصل معنا عبر واتساب (0661605369)",
    
    faq_tag: "الدليل العملي والأسئلة الشائعة",
    faq_title: "كل ما تحتاج معرفته لاستخدام البرنامج بسهولة",
    faq_sub: "إليك شروحات خطوة بخطوة وإجابات مفصلة عن أكثر الأسئلة تداولاً.",
    
    q1: "1. كيف أقوم بتثبيت البرنامج على حاسوب ويندوز؟",
    a1: "قم بتحميل ملف <strong>INSTALLATEUR_SMART_CAISSE.exe</strong> من قسم التحميلات، ثم افتحه بالنقر المزدوج. يقوم معالج التثبيت بإنشاء مجلد <code>C:\SMART_Caisse</code> تلقائياً، وإعداد جدار الحماية للاتصال بالهاتف، ووضع اختصارات التشغيل على سطح المكتب وقائمة ابدأ.",
    
    q2: "2. كيف أفتح جلسة الصندوق لبدء العمل اليومي؟",
    a2: "عند فتح البرنامج، سجّل الدخول برمز PIN الافتراضي (<strong>0000</strong> للمدير أو <strong>1234</strong> للكاشير). اضغط على الزر الأخضر <em>'فتح اليومية'</em>، ثم أدخل رصيد بداية اليومية (مثل 200 درهم صرافة)، ثم أكّد. ستفتح شاشة البيع فوراً وتصبح جاهزة.",
    
    q3: "3. كيف أسجل الطلبات وأدير الطاولات (محلي، سفري، توصيل)؟",
    a3: "اختر الصنف من أعلى الشاشة، ثم انقر على المنتجات لإضافتها للطلب. اضغط على زر <em>'🪑 طاولة'</em> لاختيار رقم الطاولة (من 1 إلى 16 أو التراس). يمكنك التبديل بسهولة بين <strong>محلي</strong>، <strong>سفري</strong> أو <strong>توصيل</strong>. الطاولات المشغولة تظهر بلون مميز مع المبلغ الحالي ويمكن الرجوع إليها لإضافة أصناف أخرى في أي وقت.",
    
    q4: "4. كيف أطبع وصل الطلب وفاتورة الحساب؟",
    a4: "لطباعة فاتورة الحساب للزبون قبل الدفع، انقر على زر <em>'🧾 الحساب'</em> في شاشة السلة. وعند إتمام الدفع نقداً أو بالبطاقة البنكية، تخرج الفاتورة النهائية وتُرسل أوامر التحضير تلقائياً إلى طابعة المطبخ أو المشروبات.",
    
    q5: "5. كيف أستخدم تطبيق الهاتف أو التابلت للنوادل في الصالة؟",
    a5: "على حاسوب الكاشير، اضغط على زر <em>'📱 Accès Mobile'</em> أو شغّل ملف <code>LANCER_SERVEUR_MOBILE.bat</code>، سيظهر رمز QR Code. قم بوصل الهاتف بنفس شبكة الواي فاي وامسح الرمز بكاميرا الهاتف. يستطيع النادل فوراً أخذ الطلبات وتسجيلها لتظهر لحظياً في الكاشير والمطبخ!",
    
    q6: "6. كيف أقوم بإغلاق الصندوق وطباعة تقرير اليومية (X و Z)؟",
    a6: "أثناء ساعات العمل، يمكنك طباعة <strong>تقرير X</strong> لمتابعة الحصيلة المؤقتة دون إغلاق الصندوق. وفي نهاية اليوم، ادخل إلى قائمة الإجراءات واختر <strong>تقرير Z</strong>: يحسب البرنامج إجمالي المبيعات، ومبالغ النقد والبطاقة، ويطبع ملخص اليومية الرسمي ويقفل الصندوق بأمان.",
    
    q7: "7. كيف تعمل خاصية إرسال التخفيضات والكتالوج عبر واتساب في نظام الملابس؟",
    a7: "في إصدار الملابس، بعد تسجيل البيع وتطبيق الخصم المطلوب، اضغط على زر <em>'مشاركة واتساب'</em>. يولد البرنامج رسالة جاهزة ومرتبة تتضمن تفاصيل المشتريات، المقاسات، نسبة الخصم الممنوحة والإجمالي، ويفتح تطبيق واتساب لإرسالها فوراً لرقم الزبون!",
    
    q8: "8. كيف أفعل النسخة الدائمة بعد انتهاء فترة التجربة؟",
    a8: "عند وصولك لـ 20 وصلاً، انسخ <strong>معرف الجهاز (Hardware ID)</strong> الظاهر على شاشة القفل، ثم اضغط على زر واتساب للتواصل مع الدعم الفني لشركة SDBO على الرقم (+212 661-605369). ستتلقى مفتاح التفعيل الدائم مدى الحياة لإدخاله ومتابعة العمل بدون حدود.",
    
    wa_tooltip: "تواصل معنا مباشرة عبر واتساب",
    footer_desc: "شركة متخصصة في تطوير برمجيات نقاط البيع التفاعلية والحلول التجارية للمطاعم، المقاهي ومحلات الملابس والنسيج في المغرب وخارجه.",
    footer_prod: "الحلول البرمجية",
    footer_dl: "التحميلات",
    footer_support: "الدعم والتواصل"
  }
};

let currentLang = "fr";

function setLanguage(lang) {
  if (!i18nData[lang]) return;
  currentLang = lang;
  
  const htmlEl = document.documentElement;
  htmlEl.setAttribute("lang", lang);
  htmlEl.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  
  // Mettre à jour les boutons du sélecteur
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });
  
  // Mettre à jour tous les textes data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (i18nData[lang][key]) {
      el.innerHTML = i18nData[lang][key];
    }
  });
  
  try {
    localStorage.setItem("sdbo_site_lang", lang);
  } catch(e) {}
}

// Initialisation du sélecteur de langue
document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const l = btn.getAttribute("data-lang");
    setLanguage(l);
  });
});

// Accordéon FAQ
document.querySelectorAll(".faq-trigger").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq-item");
    const isOpen = item.classList.contains("open");
    
    // Fermer les autres questions
    document.querySelectorAll(".faq-item").forEach(other => {
      if (other !== item) {
        other.classList.remove("open");
        const trig = other.querySelector(".faq-trigger");
        if (trig) trig.setAttribute("aria-expanded", "false");
      }
    });
    
    if (isOpen) {
      item.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    } else {
      item.classList.add("open");
      btn.setAttribute("aria-expanded", "true");
    }
  });
});

// Solution Switcher (Restauration vs Textile)
const tabResto = document.getElementById("tabResto");
const tabTextile = document.getElementById("tabTextile");
const heroTitleHighlight = document.getElementById("heroTitleHighlight");
const mockupTitle = document.getElementById("mockupTitle");
const mockupCats = document.getElementById("mockupCats");
const mockupGrid = document.getElementById("mockupGrid");
const heroDownloadBtn = document.getElementById("heroDownloadBtn");
const heroDownloadText = document.getElementById("heroDownloadText");

if (tabResto && tabTextile) {
  tabResto.addEventListener("click", () => {
    tabResto.classList.add("active-resto");
    tabTextile.classList.remove("active-textile");
    
    heroTitleHighlight.className = "highlight-teal";
    heroTitleHighlight.textContent = currentLang === "ar" ? "المطاعم، الوجبات السريعة والمقاهي" : "Restaurants, Snacks & Cafés";
    
    mockupTitle.textContent = "SDBO_SMART_GEST_CAISSE v2026 - Mode Vente Tactile";
    heroDownloadBtn.href = "downloads/INSTALLATEUR_SMART_CAISSE.exe";
    heroDownloadText.textContent = currentLang === "ar" ? "تحميل البرنامج للحاسوب (97 ميغابايت)" : "Télécharger Installateur PC (97 Mo)";
    
    mockupCats.innerHTML = `
      <span class="mockup-cat-pill active">🍽️ Tous</span>
      <span class="mockup-cat-pill">🍔 Fast-Food</span>
      <span class="mockup-cat-pill">🍕 Pizzas</span>
      <span class="mockup-cat-pill">🍹 Jus & Boissons</span>
      <span class="mockup-cat-pill">🥞 Desserts</span>
    `;
    
    mockupGrid.innerHTML = `
      <div class="mockup-item-card"><div class="mockup-item-icon">🍔</div><div class="mockup-item-name">Burger Spécial SDBO</div><div class="mockup-item-price">45.00 DH</div></div>
      <div class="mockup-item-card"><div class="mockup-item-icon">🍕</div><div class="mockup-item-name">Pizza 4 Saisons</div><div class="mockup-item-price">60.00 DH</div></div>
      <div class="mockup-item-card"><div class="mockup-item-icon">🌮</div><div class="mockup-item-name">Tacos Viande Hachée</div><div class="mockup-item-price">35.00 DH</div></div>
      <div class="mockup-item-card"><div class="mockup-item-icon">🍹</div><div class="mockup-item-name">Jus Panaché Royal</div><div class="mockup-item-price">22.00 DH</div></div>
      <div class="mockup-item-card"><div class="mockup-item-icon">☕</div><div class="mockup-item-name">Café Crème</div><div class="mockup-item-price">14.00 DH</div></div>
      <div class="mockup-item-card"><div class="mockup-item-icon">🥞</div><div class="mockup-item-name">Crêpe Nutella Amandes</div><div class="mockup-item-price">25.00 DH</div></div>
    `;
  });
  
  tabTextile.addEventListener("click", () => {
    tabTextile.classList.add("active-textile");
    tabResto.classList.remove("active-resto");
    
    heroTitleHighlight.className = "highlight-indigo";
    heroTitleHighlight.textContent = currentLang === "ar" ? "محلات الملابس، النسيج والأحذية (مع واتساب)" : "Boutiques de Vêtements, Textile & Mode (WhatsApp Inclus)";
    
    mockupTitle.textContent = "SMART GEST TEXTILE v2026 - Module Remises & WhatsApp";
    heroDownloadBtn.href = "downloads/SMART-GEST-CAISSE-TEXTILE.zip";
    heroDownloadText.textContent = currentLang === "ar" ? "تحميل نظام الملابس (250 ميغابايت)" : "Télécharger Pack Textile & WhatsApp (250 Mo)";
    
    mockupCats.innerHTML = `
      <span class="mockup-cat-pill active" style="background: var(--primary-indigo);">👗 Tous Articles</span>
      <span class="mockup-cat-pill">👔 Chemises & Costumes</span>
      <span class="mockup-cat-pill">👖 Jeans & Pantalons</span>
      <span class="mockup-cat-pill">👟 Chaussures</span>
      <span class="mockup-cat-pill">💬 Partage WhatsApp</span>
    `;
    
    mockupGrid.innerHTML = `
      <div class="mockup-item-card"><div class="mockup-item-icon">👗</div><div class="mockup-item-name">Robe Soirée Satin (T38)</div><div class="mockup-item-price">450.00 DH</div></div>
      <div class="mockup-item-card"><div class="mockup-item-icon">👔</div><div class="mockup-item-name">Chemise Slim Fit Blanche</div><div class="mockup-item-price">180.00 DH</div></div>
      <div class="mockup-item-card"><div class="mockup-item-icon">👖</div><div class="mockup-item-name">Jean Denim Stretch (T42)</div><div class="mockup-item-price">220.00 DH</div></div>
      <div class="mockup-item-card"><div class="mockup-item-icon">🧥</div><div class="mockup-item-name">Veste Cuir Bomber</div><div class="mockup-item-price">590.00 DH</div></div>
      <div class="mockup-item-card"><div class="mockup-item-icon">👟</div><div class="mockup-item-name">Baskets Sport Confort</div><div class="mockup-item-price">320.00 DH</div></div>
      <div class="mockup-item-card" style="border-color: #25d366; background: rgba(37,211,102,0.1);"><div class="mockup-item-icon">💬</div><div class="mockup-item-name" style="color: #25d366;">Envoyer Remise WhatsApp</div><div class="mockup-item-price">-10% Direct</div></div>
    `;
  });
}

// Charger la langue sauvegardée si existante
const savedLang = localStorage.getItem("sdbo_site_lang");
if (savedLang === "ar") {
  setLanguage("ar");
}

console.log("[SDBO SMART GEST Web] Prêt & Opérationnel");
