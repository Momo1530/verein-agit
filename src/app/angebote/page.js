"use client";
import { useState, useEffect } from 'react';

const translations = {
  de: {
    page_title: "Angebote",
    hero_title: "Unsere Angebote",
    hero_desc: "Maßgeschneiderte Gewaltprävention für jede Zielgruppe – von Kindern und Jugendlichen bis zu Fachkräften und Einrichtungen.",
    section1_title: "01 VORBEUGEN – Präventive Workshops",
    section1_text: "Unsere präventiven Angebote richten sich an Kinder, Jugendliche, pädagogische Fachkräfte und Einrichtungen. In interaktiven Workshops und Trainings schaffen wir Räume für Reflexion und Sensibilisierung. Themen umfassen: Konfliktlösung, Zivilcourage, Deeskalation, Umgang mit Aggressionen und Förderung sozialer Kompetenzen. Jedes Angebot wird nach Vorgesprächen individuell auf die Zielgruppe abgestimmt.",
    section2_title: "02 HANDELN – Intervention nach Vorfällen",
    section2_text: "Nach konkreten Gewaltvorfällen bieten wir schnelle und professionelle Intervention. Wir begleiten Einrichtungen, Teams und betroffene Personen bei der Aufarbeitung, erstellen Nachsorgekonzepte und unterstützen bei der Entwicklung von Handlungsstrategien. Unser Ziel ist es, aus Krisen Lernprozesse zu gestalten und nachhaltige Sicherheit zu schaffen.",
    section3_title: "03 STÄRKEN – Langfristige Begleitung",
    section3_text: "Über die akute Intervention hinaus bieten wir langfristige Begleitung auf dem Weg zu nachhaltiger Veränderung. Dazu gehören regelmäßige Trainings, Auffrischungsworkshops, Supervision für Teams und die Entwicklung von internen Schutzkonzepten. Wir stärken Resilienz und begleiten Einrichtungen bei der Etablierung einer gewaltsensiblen Kultur.",
    cta_title: "Sie haben ein konkretes Anliegen?",
    cta_text: "Vereinbaren Sie ein unverbindliches Vorgespräch mit uns.",
    cta_btn: "Jetzt anfragen →",
    back_btn: "← Zurück zur Startseite"
  },
  tr: {
    page_title: "Teklifler",
    hero_title: "Tekliflerimiz",
    hero_desc: "Çocuklardan gençlere, uzmanlardan kurumlara kadar her hedef grup için özel olarak hazırlanmış şiddet önleme hizmetleri.",
    section1_title: "01 ÖNLEME – Önleyici Atölyeler",
    section1_text: "Önleyici tekliflerimiz çocuklara, gençlere, eğitimcilere ve kurumlara yöneliktir. Etkileşimli atölye çalışmaları ve eğitimlerle yansıtma ve bilinçlendirme alanları yaratıyoruz. Konular: çatışma çözümü, sivil cesaret, gerilimi azaltma, saldırganlıkla başa çıkma ve sosyal becerilerin geliştirilmesi.",
    section2_title: "02 HAREKETE GEÇME – Olay Sonrası Müdahale",
    section2_text: "Somut şiddet olaylarından sonra hızlı ve profesyonel müdahale sunuyoruz. Kurumlara, ekiplere ve etkilenen kişilere olayları işleme koyma, bakım sonrası konseptler oluşturma ve eylem stratejileri geliştirme konusunda eşlik ediyoruz.",
    section3_title: "03 GÜÇLENDİRME – Uzun Vadeli Rehberlik",
    section3_text: "Akut müdahalenin ötesinde, sürdürülebilir değişim yolunda uzun vadeli rehberlik sunuyoruz. Buna düzenli eğitimler, tazeleme atölyeleri, ekipler için süpervizyon ve dahili koruma konseptlerinin geliştirilmesi dahildir.",
    cta_title: "Somut bir talebiniz mi var?",
    cta_text: "Bizimle bağlayıcı olmayan bir ön görüşme ayarlayın.",
    cta_btn: "Şimdi talep et →",
    back_btn: "← Ana sayfaya dön"
  },
  ar: {
    page_title: "العروض",
    hero_title: "عروضنا",
    hero_desc: "خدمات الوقاية من العنف مصممة خصيصًا لكل فئة مستهدفة - من الأطفال والشباب إلى المهنيين والمؤسسات.",
    section1_title: "01 الوقاية - ورش عمل وقائية",
    section1_text: "تستهدف عروضنا الوقائية الأطفال والشباب والمعلمين والمؤسسات. من خلال ورش العمل والتدريبات التفاعلية، نخلق مساحات للتفكير والتوعية. تشمل المواضيع: حل النزاعات، الشجاعة المدنية، تخفيف التصعيد، التعامل مع العدوانية وتطوير المهارات الاجتماعية.",
    section2_title: "02 العمل - التدخل بعد الحوادث",
    section2_text: "بعد حوادث العنف الملموسة، نقدم تدخلاً سريعًا ومهنيًا. نرافق المؤسسات والفرق والأشخاص المتأثرين في معالجة الأحداث، وإنشاء مفاهيم الرعاية اللاحقة، وتطوير استراتيجيات العمل.",
    section3_title: "03 التعزيز - الدعم طويل الأمد",
    section3_text: "إلى جانب التدخل الحاد، نقدم دعمًا طويل الأمد على طريق التغيير المستدام. يشمل ذلك تدريبات منتظمة وورش عمل تنشيطية وإشرافًا للفرق وتطوير مفاهيم الحماية الداخلية.",
    cta_title: "هل لديك طلب محدد؟",
    cta_text: "حدد موعدًا لاستشارة أولية غير ملزمة معنا.",
    cta_btn: "اطلب الآن ←",
    back_btn: "← العودة إلى الصفحة الرئيسية"
  },
  ku: {
    page_title: "Pêşniyar",
    hero_title: "Pêşniyarên Me",
    hero_desc: "Ji zarok û ciwanan bigire heya pispor û saziyan, ji bo her koma armancê karûbarên pêşîlêgirtina şîdetê yên li gorî xwe hatine çêkirin.",
    section1_title: "01 PÊŞÎLÊGIRTIN – Atolyeyên Pêşîlêgirtinê",
    section1_text: "Pêşniyarên me yên pêşîlêgirtinê ji bo zarok, ciwan, perwerdekar û saziyan in. Bi atolye û perwerdeyên înteraktîf, em cihên raman û hişyariyê diafirînin. Mijar: çareserkirina pevçûnan, cesareta sivîl, kêmkirina tansiyonê, rûbirûbûna êrîşkariyê û pêşxistina jêhatîbûnên civakî.",
    section2_title: "02 ÇALAKÎ – Destêwerdana Piştî Bûyeran",
    section2_text: "Piştî bûyerên şîdetê yên somut, em destêwerdana bilez û pîşeyî pêşkêş dikin. Em bi sazî, tîm û kesên bandordar re di pêvajokirina bûyeran, afirandina konseptên lênihêrîna paşîn û pêşxistina stratejiyên çalakiyê de hevalbendiyê dikin.",
    section3_title: "03 XURTKIRIN – Rêberiya Demdirêj",
    section3_text: "Ji xeynî destêwerdana akût, em li ser riya guherîna domdar rêberiya demdirêj pêşkêş dikin. Ev perwerdeyên birêkûpêk, atolyeyên nûvekirinê, çavdêriya tîman û pêşxistina konseptên parastinê yên navxweyî dihewîne.",
    cta_title: "Xwestekeke we ya somut heye?",
    cta_text: "Bi me re hevdîtineke pêşîn a bêpêbend saz bikin.",
    cta_btn: "Niha bixwaze →",
    back_btn: "← Vegere rûpela sereke"
  },
  bks: {
    page_title: "Ponude",
    hero_title: "Naše ponude",
    hero_desc: "Usluge prevencije nasilja prilagođene svakoj ciljnoj grupi – od djece i mladih do stručnjaka i institucija.",
    section1_title: "01 SPRIJEČITI – Preventivne radionice",
    section1_text: "Naše preventivne ponude namijenjene su djeci, mladima, odgajateljima i institucijama. Kroz interaktivne radionice i obuke stvaramo prostore za refleksiju i senzibilizaciju. Teme uključuju: rješavanje sukoba, građansku hrabrost, deeskalaciju, suočavanje s agresijom i razvoj socijalnih vještina.",
    section2_title: "02 DJELOVATI – Intervencija nakon incidenata",
    section2_text: "Nakon konkretnih incidenata nasilja nudimo brzu i profesionalnu intervenciju. Pratimo institucije, timove i pogođene osobe u obradi događaja, izradi postkoncepata i razvoju strategija djelovanja.",
    section3_title: "03 OSNAŽITI – Dugoročna podrška",
    section3_text: "Osim akutne intervencije, nudimo dugoročnu podršku na putu ka održivoj promjeni. To uključuje redovne obuke, osvježavajuće radionice, superviziju za timove i razvoj internih koncepata zaštite.",
    cta_title: "Imate konkretan zahtjev?",
    cta_text: "Dogovorite neobavezujući preliminarni razgovor s nama.",
    cta_btn: "Zatražite sada →",
    back_btn: "← Nazad na početnu stranicu"
  }
};

export default function AngebotePage() {
  const [lang, setLang] = useState('de');
  const t = translations[lang] || translations.de;
  const isRtl = lang === 'ar';

  // Beim Laden zur richtigen Stelle scrollen, wenn Hash in URL
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const id = window.location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return (
    <div id="app" dir={isRtl ? 'rtl' : 'ltr'}>
      <header className="navbar">
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
        <nav className="nav-links">
          <a href="/">{lang === 'de' ? 'STARTSEITE' : lang === 'tr' ? 'ANA SAYFA' : lang === 'ar' ? 'الصفحة الرئيسية' : lang === 'ku' ? 'RÛPELA SEREKE' : 'POČETNA STRANICA'}</a>
          <a href="/haltung">{lang === 'de' ? 'HALTUNG' : lang === 'tr' ? 'TUTUM' : lang === 'ar' ? 'الموقف' : lang === 'ku' ? 'HELWEST' : 'STAV'}</a>
          <a href="/team">{lang === 'de' ? 'TEAM' : lang === 'tr' ? 'EKİP' : lang === 'ar' ? 'الفريق' : lang === 'ku' ? 'TÎM' : 'TIM'}</a>
          <a href="/kontakt">{lang === 'de' ? 'KONTAKT' : lang === 'tr' ? 'İLETİŞİM' : lang === 'ar' ? 'اتصل بنا' : lang === 'ku' ? 'TÊKILÎ' : 'KONTAKT'}</a>
        </nav>
        <div className="nav-actions">
          <div className="lang-selector">
            <select value={lang} onChange={(e) => setLang(e.target.value)}>
              <option value="de">DE</option>
              <option value="tr">TR</option>
              <option value="ar">AR</option>
              <option value="ku">KU</option>
              <option value="bks">BKS</option>
            </select>
          </div>
          <a href="/kontakt" className="btn btn-primary">{lang === 'de' ? 'PROJEKT ANFRAGEN' : lang === 'tr' ? 'PROJE TALEP ET' : lang === 'ar' ? 'طلب مشروع' : lang === 'ku' ? 'PROJE BIXWAZE' : 'ZATRAŽI PROJEKAT'}</a>
        </div>
      </header>

      <main>
        <section className="subpage-hero">
          <div className="subpage-hero-content">
            <h1>{t.hero_title}</h1>
            <p className="subpage-hero-desc">{t.hero_desc}</p>
          </div>
        </section>

        <section className="subpage-content">
          <div className="content-block" id="vorbeugen">
            <h2>{t.section1_title}</h2>
            <p>{t.section1_text}</p>
          </div>
          <div className="content-block" id="handeln">
            <h2>{t.section2_title}</h2>
            <p>{t.section2_text}</p>
          </div>
          <div className="content-block" id="staerken">
            <h2>{t.section3_title}</h2>
            <p>{t.section3_text}</p>
          </div>
        </section>

        <section className="subpage-cta">
          <h2>{t.cta_title}</h2>
          <p>{t.cta_text}</p>
          <a href="/kontakt" className="btn btn-solid">{t.cta_btn}</a>
        </section>
      </main>

      <footer className="site-footer">
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
            <p className="footer-desc">{lang === 'de' ? 'Verein Antigewalt und Gewaltprävention' : lang === 'tr' ? 'Şiddet Karşıtı ve Şiddeti Önleme Derneği' : lang === 'ar' ? 'جمعية مكافحة العنف والوقاية منه' : lang === 'ku' ? 'Komeleya Dijî Şîdetê û Pêşîlêgirtinê' : 'Udruženje protiv nasilja i prevencije'}</p>
          </div>
          <div className="footer-contact">
            <h4>{lang === 'de' ? 'Kontakt' : lang === 'tr' ? 'İletişim' : lang === 'ar' ? 'اتصل' : lang === 'ku' ? 'Têkilî' : 'Kontakt'}</h4>
            <p>Gerichtsgasse 1<br/>1230 Wien<br/>Österreich</p>
            <p>Telefon: +43/1/111111111<br/>E-Mail: <a href="mailto:office@verein-agit.at">office@verein-agit.at</a></p>
          </div>
          <div className="footer-legal">
            <h4>{lang === 'de' ? 'Impressum' : lang === 'tr' ? 'Künye' : lang === 'ar' ? 'بصمة' : lang === 'ku' ? 'Nasname' : 'Impresum'}</h4>
            <p>ZVR-Zahl: (bitte einfügen)<br/>Behörde: LPD Wien</p>
            <p className="small-text"><a href="/datenschutz">Datenschutzerklärung</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Verein AGIT. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}
