"use client";
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from './hooks/useLanguage';

const translations = {
  de: {
    nav_angebote: "ANGEBOTE", nav_haltung: "HALTUNG", nav_team: "TEAM", nav_kontakt: "KONTAKT", nav_anfragen: "PROJEKT ANFRAGEN",
    contact_role: "Ansprechpartnerin/Bereichsleitung:<br/>MA 13 außerschulische Kinder- und Jugendarbeit",
    contact2_role: "Ansprechpartner/Bereichsleitung:<br/>MA 11 Einzel/Gruppentrainings",
    hero_subtitle: "PRÄVENTION - INTERVENTION - VERÄNDERUNG",
    hero_headline: "Gewalt ist ein schlechtes Skript.<br/>Wir schreiben die Geschichte neu.",
    hero_desc: "Wir begleiten Kinder, Jugendliche, Fachkräfte und Einrichtungen – präventiv, nach konkreten Vorfällen und auf dem Weg zu nachhaltiger Veränderung.",
    btn_angebote: "ANGEBOTE ANSEHEN", btn_mehr: "MEHR ÜBER AGIT \u2192",
    action_header: "WAS BRAUCHT IHRE EINRICHTUNG GERADE?",
    step_1: "MIKRO-EBENE", step_1_desc: "Direkte Arbeit mit dem Individuum",
    step_2: "MEZZO-EBENE", step_2_desc: "Stärkung des sozialen Nahraums",
    step_3: "MAKRO-EBENE", step_3_desc: "Gesellschaft und Strukturentwicklung",
    hintergrund_title: "Zieldefinition",
    hintergrund_text: "<strong>Gemeinsam neue Wege für eine gewaltfreie Zukunft gehen.</strong><br/><br/>Gewalt ist eine destruktive Kraft, die beim Individuum beginnt und sich negativ auf Familien, Schulen und unsere gesamte Gesellschaft auswirkt. Unser primäres Ziel ist es, diese Gewaltspiralen konsequent zu unterbrechen und jungen Menschen tragfähige Perspektiven jenseits von Aggression und Ausgrenzung aufzuzeigen.<br/><br/>Als gemeinnütziger, nicht auf Gewinn ausgerichteter Verein setzen wir an den Schnittstellen an, an denen bestehende Systeme oft an ihre Grenzen stoßen. Wir fördern aktiv die Gewaltprävention, Krisenintervention und Deeskalationsarbeit. Durch die Kombination aus präventiven, protektiven und konfrontativen Ansätzen sowie innovativen, eigens entwickelten Methoden stärken wir die soziale Stabilität und die Zivilcourage im Raum Wien und ganz Österreich. Unser Ziel ist eine Gesellschaft, in der Konflikte gewaltfrei gelöst werden und jeder junge Mensch die Chance erhält, sich selbstbestimmt und verantwortungsvoll zu entwickeln.",
    form_title: "Treten Sie mit uns in Kontakt",
    form_subtitle: "Schreiben Sie uns Ihr Anliegen, wir melden uns verlässlich zurück.",
    form_name: "Name", form_email: "E-Mail", form_phone: "Telefonnummer (optional)", form_subject: "Betreff", form_message: "Nachricht", form_submit: "Nachricht senden", form_success: "Ihre Nachricht wurde erfolgreich gesendet!",
    footer_desc: "Verein Antigewalt und Gewaltprävention", kontakt_title: "Kontakt", impressum_title: "Impressum"
  },
  tr: {
    nav_angebote: "TEKLİFLER", nav_haltung: "TUTUM", nav_team: "EKİP", nav_kontakt: "İLETİŞİM", nav_anfragen: "PROJE TALEP ET",
    hero_subtitle: "ÖNLEME - MÜDAHALE - DEĞİŞİM",
    hero_headline: "Şiddet kötü bir senaryodur.<br/>Hikâyeyi yeniden yazıyoruz.",
    hero_desc: "Çocuklara, gençlere, uzmanlara ve kurumlara eşlik ediyoruz – önleyici olarak, somut olaylardan sonra ve sürdürülebilir değişim yolunda.",
    btn_angebote: "TEKLİFLERİ GÖR", btn_mehr: "AGIT HAKKINDA DAHA FAZLA \u2192",
    action_header: "KURUMUNUZUN ŞU ANDA NEYE İHTİYACI VAR?",
    step_1: "MİKRO SEVİYE", step_1_desc: "Bireyle doğrudan çalışma",
    step_2: "MEZZO SEVİYE", step_2_desc: "Yakın sosyal çevreyi güçlendirme",
    step_3: "MAKRO SEVİYE", step_3_desc: "Toplum ve yapı geliştirme",
    hintergrund_title: "Hedef Tanımı",
    hintergrund_text: "<strong>Şiddetten arındırılmış bir gelecek için birlikte yeni yollar açalım.</strong><br/><br/>Şiddet, bireyden başlayan ve aileleri, okulları ve tüm toplumumuzu olumsuz etkileyen yıkıcı bir güçtür. Öncelikli hedefimiz, bu şiddet sarmallarını kararlılıkla kırmak ve gençlere saldırganlık ve dışlanmanın ötesinde ayakları yere basan perspektifler sunmaktır.<br/><br/>Kâr amacı gütmeyen bir dernek olarak, mevcut sistemlerin çoğu zaman sınırlarına dayandığı kesişim noktalarında çalışıyoruz. Şiddeti önleme, kriz müdahalesi ve gerilimi azaltma çalışmalarını aktif olarak destekliyoruz. Önleyici, koruyucu ve yüzleştirici yaklaşımların yanı sıra yenilikçi, kendi geliştirdiğimiz yöntemlerin birleşimi sayesinde Viyana ve tüm Avusturya'da sosyal istikrarı ve sivil cesareti güçlendiriyoruz. Hedefimiz, çatışmaların şiddet kullanılmadan çözüldüğü ve her gencin kendi kaderini tayin ederek ve sorumluluk bilinciyle gelişme şansına sahip olduğu bir toplumdur.",
    form_title: "Bizimle İletişime Geçin", form_subtitle: "Talebinizi bize yazın, size güvenilir bir şekilde geri dönüş yapacağız.", form_name: "İsim", form_email: "E-Posta", form_phone: "Telefon Numarası (isteğe bağlı)", form_subject: "Konu", form_message: "Mesaj", form_submit: "Mesajı Gönder", form_success: "Mesajınız başarıyla gönderildi!",
    footer_desc: "Şiddet Karşıtı ve Şiddeti Önleme Derneği", kontakt_title: "İletişim", impressum_title: "Künye"
  },
  ar: {
    nav_angebote: "العروض", nav_haltung: "الموقف", nav_team: "الفريق", nav_kontakt: "اتصل بنا", nav_anfragen: "طلب مشروع",
    hero_subtitle: "الوقاية - التدخل - التغيير",
    hero_headline: "العنف سيناريو سيئ.<br/>نحن نعيد كتابة القصة.",
    hero_desc: "نحن نرافق الأطفال والشباب والمهنيين والمؤسسات - بشكل وقائي، بعد أحداث محددة وعلى طريق التغيير المستدام.",
    btn_angebote: "عرض العروض", btn_mehr: "المزيد عن AGIT \u2192",
    action_header: "ما الذي تحتاجه مؤسستك الآن؟",
    step_1: "المستوى الصغير", step_1_desc: "العمل المباشر مع الفرد",
    step_2: "المستوى المتوسط", step_2_desc: "تعزيز المحيط الاجتماعي القريب",
    step_3: "المستوى الكبير", step_3_desc: "المجتمع وتطوير البنية",
    hintergrund_title: "تعريف الهدف",
    hintergrund_text: "<strong>نسير معًا في طرق جديدة من أجل مستقبل خالٍ من العنف.</strong><br/><br/>العنف قوة مدمرة تبدأ عند الفرد وتؤثر سلبًا على الأسر والمدارس ومجتمعنا بأكمله. هدفنا الأساسي هو قطع دوامات العنف هذه بشكل حاسم وإظهار آفاق مستدامة للشباب تتجاوز العدوان والإقصاء.<br/><br/>بصفتنا جمعية غير هادفة للربح، نعمل عند نقاط التقاطع التي غالبًا ما تصل عندها الأنظمة القائمة إلى حدودها. نعزز بنشاط الوقاية من العنف والتدخل في الأزمات وعمل نزع فتيل التصعيد. من خلال الجمع بين الأساليب الوقائية والحماوية والمواجهة وكذلك الأساليب المبتكرة التي طورناها بأنفسنا، نعزز الاستقرار الاجتماعي والشجاعة المدنية في منطقة فيينا وفي جميع أنحاء النمسا. هدفنا هو مجتمع يتم فيه حل النزاعات دون عنف ويحصل فيه كل شاب على الفرصة للتطور بتقرير المصير والمسؤولية.",
    form_title: "تواصل معنا", form_subtitle: "اكتب لنا طلبك وسنرد عليك بشكل موثوق.", form_name: "الاسم", form_email: "البريد الإلكتروني", form_phone: "رقم الهاتف (اختياري)", form_subject: "الموضوع", form_message: "الرسالة", form_submit: "إرسال الرسالة", form_success: "تم إرسال رسالتك بنجاح!",
    footer_desc: "جمعية مكافحة العنف والوقاية منه", kontakt_title: "اتصل", impressum_title: "بصمة"
  },
  ku: {
    nav_angebote: "PÊŞNIYAR", nav_haltung: "HELWEST", nav_team: "TÎM", nav_kontakt: "TÊKILÎ", nav_anfragen: "PROJE BIXWAZE",
    hero_subtitle: "PÊŞÎLÊGIRTIN - DESTÊWERDAN - GUHERÎN",
    hero_headline: "Şîdet senaryoyek xerab e.<br/>Em çîrokê ji nû ve dinivîsin.",
    hero_desc: "Em bi zarok, ciwan, pispor û saziyan re hevalbendiyê dikin - ji bo pêşîlêgirtinê, piştî bûyerên taybetî û li ser riya guherîna domdar.",
    btn_angebote: "PÊŞNIYARAN BIBÎNE", btn_mehr: "ZÊDETIR LI SER AGIT \u2192",
    action_header: "SAZIYA TE NIHA HEWCEYÎ ÇI YE?",
    step_1: "ASTA MÎKRO", step_1_desc: "Xebata rasterast bi kesekî re",
    step_2: "ASTA MEZZO", step_2_desc: "Xurtkirina rewşa civakî ya nêz",
    step_3: "ASTA MAKRO", step_3_desc: "Civak û pêşxistina avahiyê",
    hintergrund_title: "Pênaseya Armancê",
    hintergrund_text: "<strong>Em bi hev re rêyên nû bo paşerojeke bê şîdet vekin.</strong><br/><br/>Şîdet hêzeke wêranker e ku ji êzgeh dest pê dike û bandoreke neyînî li ser malbat, dibistan û tevahiya civaka me dike. Armanca me ya sereke ew e ku em van zirarên şîdetê bi israr bidin beramber û ji bo ciwanan perspektîfên mayînde yên li derveyî agresyon û derxistinê nîşan bidin.<br/><br/>Wekî komeleyek ne li ser qezencê, em li ser wan xalên hevbeş dixebitin ku pergala heye gelek caran gihiştin sînorên xwe. Em bi çalakî pêşîlêgirtina şîdetê, destwerdana krîzê û xebata dekalkanê pêşve dibin. Bi hevgirtina rêbazên pêşgirî, parêzker û rûbirûyê û her weha rêbazên nûjen ên ku me bi xwe pêşxistiye, em xurtkirina civakî û cesaretê medenî li herêma Viyan û tevahiya Awistirya xurt dikin. Armanca me civakek e ku têkoşînên di nav de bê şîdet têne çareser kirin û her ciwan derfeta pêşxistina xwe bi xwe biryardar û berpirsiyar werdigire.",
    form_title: "Bi me re têkiliyê daynin", form_subtitle: "Daxwaza xwe ji me re binivîsin, em ê bi pêbawerî bersiva we bidin.", form_name: "Nav", form_email: "E-Mail", form_phone: "Hejmara Telefonê (vebijarkî)", form_subject: "Mijar", form_message: "Peyam", form_submit: "Peyamê Bişîne", form_success: "Peyama we bi serkeftî hate şandin!",
    footer_desc: "Komeleya Dijî Şîdetê û Pêşîlêgirtinê", kontakt_title: "Têkilî", impressum_title: "Nasname"
  },
  bks: {
    nav_angebote: "PONUDE", nav_haltung: "STAV", nav_team: "TIM", nav_kontakt: "KONTAKT", nav_anfragen: "ZATRAŽI PROJEKAT",
    hero_subtitle: "PREVENCIJA - INTERVENCIJA - PROMJENA",
    hero_headline: "Nasilje je loš scenarij.<br/>Mi priču pišemo iznova.",
    hero_desc: "Pratimo djecu, mlade, stručnjake i institucije – preventivno, nakon konkretnih incidenata i na putu ka održivoj promjeni.",
    btn_angebote: "POGLEDAJ PONUDE", btn_mehr: "VIŠE O AGIT \u2192",
    action_header: "ŠTA VAŠA INSTITUCIJA TRENUTNO TREBA?",
    step_1: "MIKRO RAZINA", step_1_desc: "Direktan rad s pojedincem",
    step_2: "MEZZO RAZINA", step_2_desc: "Jačanje bliskog socijalnog okruženja",
    step_3: "MAKRO RAZINA", step_3_desc: "Društvo i razvoj struktura",
    hintergrund_title: "Definicija cilja",
    hintergrund_text: "<strong>Zajedno koracijemo novim putevima ka budućnosti bez nasilja.</strong><br/><br/>Nasilje je destruktivna sila koja počinje kod pojedinca i negativno utječe na porodice, škole i cijelo naše društvo. Naš primarni cilj je dosljedno prekidati te spirale nasilja i mladim ljudima pokazati održive perspektive izvan agresije i isključenosti.<br/><br/>Kao neprofitno udruženje, djelujemo na granicama na kojima postojeći sistemi često dostižu svoje granice. Aktivno podržavamo prevenciju nasilja, intervenciju u krizama i rad deeskalacije. Kombinacijom preventivnih, zaštitnih i konfrontativnih pristupa te inovativnih, samostalno razvijenih metoda jačamo socijalnu stabilnost i civilnu hrabrost u regiji Beč i cijeloj Austriji. Naš cilj je društvo u kojem se konflikti rješavaju bez nasilja i u kojem svaki mladi čovjek dobija priliku da se razvija samostalno i odgovorno.",
    form_title: "Stupite u kontakt s nama", form_subtitle: "Napišite nam svoj zahtjev, pouzdano ćemo vam odgovoriti.", form_name: "Ime", form_email: "E-Mail", form_phone: "Broj telefona (opcionalno)", form_subject: "Predmet", form_message: "Poruka", form_submit: "Pošalji poruku", form_success: "Vaša poruka je uspješno poslana!",
    footer_desc: "Udruženje protiv nasilja i prevencije", kontakt_title: "Kontakt", impressum_title: "Impresum"
  },
  fa: {
    nav_angebote: "خدمات", nav_haltung: "موضع‌گیری", nav_team: "تیم", nav_kontakt: "تماس", nav_anfragen: "درخواست پروژه",
    contact_role: "مخاطب/مدیر بخش:<br/>MA 13 کار با کودکان و نوجوانان خارج از مدرسه",
    contact2_role: "مخاطب/مدیر بخش:<br/>MA 11 آموزش‌های فردی/گروهی",
    hero_subtitle: "پیشگیری - مداخله - تغییر",
    hero_headline: "خشونت یک فیلم‌نامه بد است.<br/>ما داستان را از نو می‌نویسیم.",
    hero_desc: "ما کودکان، نوجوانان، متخصصان و مؤسسات را همراهی می‌کنیم – پیشگیرانه، پس از وقایع مشخص و در مسیر تغییر پایدار.",
    btn_angebote: "مشاهده خدمات", btn_mehr: "بیشتر درباره AGIT →",
    action_header: "مؤسسه شما در حال حاضر به چه چیزی نیاز دارد؟",
    step_1: "سطح خرد", step_1_desc: "کار مستقیم با فرد",
    step_2: "سطح میانی", step_2_desc: "تقویت محیط اجتماعی نزدیک",
    step_3: "سطح کلان", step_3_desc: "جامعه و توسعه ساختاری",
    hintergrund_title: "تعریف هدف",
    hintergrund_text: "<strong>با هم راه‌های نو برای آینده‌ای عاری از خشونت برداریم.</strong><br/><br/>خشونت نیرویی ویرانگر است که از فرد آغاز می‌شود و بر خانواده‌ها، مدارس و کل جامعه ما تأثیر منفی می‌گذارد. هدف اصلی ما شکستن پیوسته این چرخه‌های خشونت و نشان دادن چشم‌اندازهای پایدار برای جوانان فراسوی پرخاشگری و طرد شدن است.<br/><br/>ما به عنوان یک انجمن غیرانتفاعی و بدون هدف سود، در نقطه‌های تقاطعی کار می‌کنیم که سیستم‌های موجود اغلب به حدود خود می‌رسند. ما به طور فعال پیشگیری از خشونت، مداخله در بحران و کار تنش‌زدایی را تقویت می‌کنیم. از طریق ترکیب رویکردهای پیشگیرانه، حمایتی و رویارویی و همچنین روش‌های نوآورانه‌ای که خودمان توسعه داده‌ایم، ثبات اجتماعی و شجاعت مدنی را در منطقه وین و سراسر اتریش تقویت می‌کنیم. هدف ما جامعه‌ای است که در آن تعارض‌ها بدون خشونت حل شوند و هر جوان این فرصت را داشته باشد که خودتعیین‌گر و مسئولانه رشد کند.",
    form_title: "با ما در تماس باشید", form_subtitle: "درخواست خود را برای ما بنویسید، ما به طور قابل اعتماد پاسخ خواهیم داد.", form_name: "نام", form_email: "ایمیل", form_phone: "شماره تلفن (اختیاری)", form_subject: "موضوع", form_message: "پیام", form_submit: "ارسال پیام", form_success: "پیام شما با موفقیت ارسال شد!",
    footer_desc: "انجمن ضدخشونت و پیشگیری از خشونت", kontakt_title: "تماس", impressum_title: "مشخصات"
  }
};

export default function Home() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang] || translations.de;
  const isRtl = lang === 'ar';
  
  const [menuOpen, setMenuOpen] = useState(false);

  const [formSuccess, setFormSuccess] = useState(false);
  const [charCount, setCharCount] = useState({ name: 0, email: 0, phone: 0, subject: 0, message: 0 });
  const [focusedField, setFocusedField] = useState(null);
  const [invalidChar, setInvalidChar] = useState(false);
  const ansprechpartnerSectionRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || window.turnstileLoaded) return;
    window.turnstileLoaded = true;
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const section = ansprechpartnerSectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('is-visible');
            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormSuccess(false);

    const form = e.target;

    const submitForm = async () => {
      const formData = new FormData(form);
      formData.append('lang', lang);

      try {
        const res = await fetch('/mail.php', {
          method: 'POST',
          body: formData
        });
        const data = await res.json();
        if (data.success) {
          setFormSuccess(true);
          form.reset();
          setTimeout(() => setFormSuccess(false), 6000);
        }
      } catch {
        // silent fail
      }
    };

    if (!window.turnstile) {
      await submitForm();
      return;
    }

    try {
      const token = await new Promise((resolve, reject) => {
        window.turnstile.render('#cf-turnstile-container', {
          sitekey: '0x4AAAAAAECHdB2byZJ3ZQG5',
          callback: resolve,
          'error-callback': reject
        });
      });

      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = 'cf-turnstile-response';
      input.value = token;
      form.appendChild(input);

      await submitForm();
      input.remove();
      window.turnstile.remove('#cf-turnstile-container');
    } catch {
      // silent fail
    }
  };

  return (
    <div id="app" dir={isRtl ? 'rtl' : 'ltr'}>
      <header className="navbar">
        <a href="/" className="logo-link">
          <div className="logo">
            <svg className="nav-logo" viewBox="0 0 1024 1024" width="auto" height="90">
              <defs>
                <filter id="remove-white-header">
                  <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -2 -2 -2 0 5" />
                </filter>
              </defs>
              <image href="/agit_logo.jpg" width="1024" height="1024" filter="url(#remove-white-header)" />
            </svg>
          </div>
        </a>
        <nav className={`nav-links${menuOpen ? ' open' : ''}`}>
          <a href="/angebote" onClick={() => setMenuOpen(false)}>{t.nav_angebote}</a>
          <a href="/haltung" onClick={() => setMenuOpen(false)}>{t.nav_haltung}</a>
          <a href="/team" onClick={() => setMenuOpen(false)}>{t.nav_team}</a>
          <a href="/kontakt" onClick={() => setMenuOpen(false)}>{t.nav_kontakt}</a>
        </nav>
        <div className="nav-actions">
          <div className="lang-selector">
            <select id="langSwitch" value={lang} onChange={(e) => setLang(e.target.value)}>
              <option value="de">DE</option>
              <option value="tr">TR</option>
              <option value="ar">AR</option>
              <option value="ku">KU</option>
              <option value="bks">BKS</option>
              <option value="fa">FA</option>
            </select>
          </div>
          <a href="/kontakt" className="btn btn-primary">{t.nav_anfragen}</a>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menü">
            <span className={`hamburger-line${menuOpen ? ' open' : ''}`}></span>
            <span className={`hamburger-line${menuOpen ? ' open' : ''}`}></span>
            <span className={`hamburger-line${menuOpen ? ' open' : ''}`}></span>
          </button>
        </div>
      </header>

      <main>
        <section className="hero" style={{ flexDirection: isRtl ? 'row-reverse' : 'row' }}>
          <div className="hero-content">
            <p className="subtitle">{t.hero_subtitle}</p>
            <h1 className="headline" dangerouslySetInnerHTML={{ __html: t.hero_headline }}></h1>
            <p className="description">{t.hero_desc}</p>
          </div>
          <div className="hero-image">
            <img src="/hero.jpg" alt="Group discussion on violence prevention" />
          </div>
        </section>

        <section className="action-steps">
          <div className="steps-grid">
            <a href="/angebote#vorbeugen" className="step">
              <h3>{t.step_1}</h3>
              <p className="step-desc">{t.step_1_desc}</p>
              <span className="arrow">&rarr;</span>
            </a>
            <a href="/angebote#handeln" className="step">
              <h3>{t.step_2}</h3>
              <p className="step-desc">{t.step_2_desc}</p>
              <span className="arrow">&rarr;</span>
            </a>
            <a href="/angebote#staerken" className="step">
              <h3>{t.step_3}</h3>
              <p className="step-desc">{t.step_3_desc}</p>
              <span className="arrow">&rarr;</span>
            </a>
          </div>
        </section>

        <section className="hintergrund-section" id="hintergrund-section">
          <div className="hintergrund-container">
            <div className="hintergrund-content">
              <h2 className="hintergrund-title">{t.hintergrund_title}</h2>
              <div className="hintergrund-text" dangerouslySetInnerHTML={{ __html: t.hintergrund_text }} />
            </div>
          </div>
        </section>

        <section className="contact-form-section" id="kontakt-formular">
          <div className="contact-form-container">
            <h2 className="form-title">{t.form_title}</h2>
            <p className="form-subtitle">{t.form_subtitle}</p>
            
            <form id="main-contact-form" className="glass-form" onSubmit={handleFormSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">{t.form_name}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    maxLength="50"
                    onChange={(e) => setCharCount((c) => ({ ...c, name: e.target.value.length }))}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                  />
                  {focusedField === 'name' && (
                    <span className={`char-counter ${charCount.name >= 50 ? 'limit-reached' : ''}`}>
                      {charCount.name} / 50
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="email">{t.form_email}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    maxLength="50"
                    onChange={(e) => setCharCount((c) => ({ ...c, email: e.target.value.length }))}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                  />
                  {focusedField === 'email' && (
                    <span className={`char-counter ${charCount.email >= 50 ? 'limit-reached' : ''}`}>
                      {charCount.email} / 50
                    </span>
                  )}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">{t.form_phone}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    maxLength="20"
                    onChange={(e) => {
                      const v = e.target.value;
                      const cleaned = v.replace(/[^0-9+]/g, '');
                      if (v !== cleaned) setInvalidChar(true);
                      else setInvalidChar(false);
                      e.target.value = cleaned;
                      setCharCount((c) => ({ ...c, phone: cleaned.length }));
                    }}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                  />
                  {focusedField === 'phone' && (
                    <span className={`char-counter ${invalidChar ? 'limit-reached' : ''}`}>
                      {charCount.phone} / 20
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="subject">{t.form_subject}</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    maxLength="50"
                    onChange={(e) => setCharCount((c) => ({ ...c, subject: e.target.value.length }))}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                  />
                  {focusedField === 'subject' && (
                    <span className={`char-counter ${charCount.subject >= 50 ? 'limit-reached' : ''}`}>
                      {charCount.subject} / 50
                    </span>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">{t.form_message}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  maxLength="2500"
                  onChange={(e) => setCharCount((c) => ({ ...c, message: e.target.value.length }))}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                ></textarea>
                {focusedField === 'message' && (
                  <span className={`char-counter ${charCount.message >= 2500 ? 'limit-reached' : ''}`}>
                    {charCount.message} / 2500
                  </span>
                )}
              </div>
              <div className="form-group hp-field" aria-hidden="true" style={{ position: 'absolute', left: '-9999px', opacity: 0 }}>
                <label htmlFor="website">Website</label>
                <input type="text" id="website" name="website" tabIndex="-1" autoComplete="off" />
              </div>
              <button type="submit" className="btn btn-primary form-submit-btn">{t.form_submit}</button>
              <div id="cf-turnstile-container" style={{ marginTop: '12px' }}></div>
              {formSuccess && (
                <div id="form-success-msg" className="form-success">{t.form_success}</div>
              )}
            </form>
          </div>
        </section>

        <section className="ansprechpartner-section" id="ansprechpartner-section" ref={ansprechpartnerSectionRef}>
          <div className="ansprechpartner-row">
            <a href="/team" className="ansprechperson-image-col fly-from-left delay-1" aria-label="Zum Team">
              <img src="/murat.png" alt="Murat Percin" onError={(e) => { e.target.onerror = null; e.target.src='/mann.svg'; }} />
            </a>
            <a href="/team" className="ansprechperson-text-col fly-from-right delay-2" aria-label="Zum Team">
              <h3>Murat Percin, BA</h3>
              <p className="ansprechperson-role">Sozialarbeiter, Antigewalt- und konfrontativer Ressourcentrainer</p>
            </a>

            <a href="/team" className="ansprechperson-image-col fly-from-left delay-3" aria-label="Zum Team">
              <img src="/kuebra.png" alt="Kübra Erik" onError={(e) => { e.target.onerror = null; e.target.src='/mann.svg'; }} />
            </a>
            <a href="/team" className="ansprechperson-text-col fly-from-right delay-4" aria-label="Zum Team">
              <h3>Kübra Erik, BA</h3>
            </a>
          </div>
        </section>
        
        <footer id="impressum" className="site-footer">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <svg className="nav-logo" viewBox="0 0 1024 1024" width="auto" height="90">
                  <defs>
                    <filter id="remove-white-footer">
                      <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  -2 -2 -2 0 5" />
                    </filter>
                  </defs>
                  <image href="/agit_logo.jpg" width="1024" height="1024" filter="url(#remove-white-footer)" />
                </svg>
              </div>
              <p className="footer-desc">{t.footer_desc}</p>
            </div>
            
            <div className="footer-contact">
              <h4>{t.kontakt_title}</h4>
              <p>Hallergasse 8/1/47, 1110 Wien, Österreich</p>
              <p>E-Mail: <a href="mailto:office@verein-agit.at">office@verein-agit.at</a></p>
              <p>Murat Percin: <a href="tel:+4369910097285">+43 699 10097285</a></p>
              <p>Kübra Erik: <a href="tel:+436606251500">+43 660 6251500</a></p>
            </div>

            <div className="footer-legal">
              <h4>{t.impressum_title}</h4>
              <p>ZVR-Zahl: 1897049103<br/>Behörde: LPD Wien</p>
              <p className="small-text"><a href="/impressum">Impressum</a> | <a href="/datenschutz">Datenschutzerklärung</a></p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Verein AGIT. Alle Rechte vorbehalten.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
