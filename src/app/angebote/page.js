"use client";
import { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';

const translations = {
  de: {
    page_title: "Angebote",
    hero_title: "Unsere Angebote",
    hero_desc: "Wir begegnen dem komplexen Phänomen Gewalt auf drei miteinander verschränkten Ebenen, um eine nachhaltige Veränderung zu bewirken:",
    section1_title: "Mikro-Ebene: Direkte Arbeit mit dem Individuum",
    section1_text: "<strong>Antigewalt-Individuell-Training (AGIT):</strong> Hochfokussierte Einzelarbeit zur individuellen Aufarbeitung von Aggressionen, Verhaltensänderung und Aktivierung persönlicher Ressourcen.<br/><strong>Gruppentrainings & Workshops:</strong> Kollektives soziales Lernen, Erlernen von Deeskalationsstrategien und Stärkung der sozialen Kompetenzen direkt in Gruppen oder Schulklassen.<br/><strong>Beratung, Begleitung & Betreuung:</strong> Kontinuierliche, vertrauensvolle Unterstützung der Jugendlichen in akuten Krisensituationen und kritischen Lebensphasen.",
    section2_title: "Mezzo-Ebene: Stärkung des sozialen Nahraums",
    section2_text: "<strong>Elternarbeit:</strong> Schulungen und intensive Begleitung von Eltern zur Stärkung der Erziehungskompetenz und Deeskalation im familiären Kreis.<br/><strong>Helfer:innenkonferenzen:</strong> Fallbezogene, interdisziplinäre Koordination in professionellen Netzwerken zur optimalen Unterstützung des Jugendlichen.<br/><strong>Fortbildungen & Seminare:</strong> Fachspezifische Workshops für Lehrkräfte, Sozialarbeiter:innen und Multiplikator:innen zur Professionalisierung im Umgang mit Gewalt und Krisen.",
    section3_title: "Makro-Ebene: Gesellschaft und Strukturentwicklung",
    section3_text: "<strong>Netzwerk- und Kooperationsarbeit:</strong> Aktiver Austausch und enge Zusammenarbeit mit Systempartnern wie Schulen, der MA 11, Behörden und der Justiz.<br/><strong>Aus- und Weiterbildung:</strong> Durchführung zertifizierter Lehrgänge (z. B. zur Ausbildung von Antigewalttrainer:innen) zur Qualitätssicherung in der Präventionslandschaft.<br/><strong>Öffentlichkeitsarbeit & Konzeptentwicklung:</strong> Sensibilisierung der breiten Öffentlichkeit für Gewaltfreiheit und Zivilcourage sowie die wissenschaftlich begleitete Weiterentwicklung innovativer Interventionsmethoden.",
    cta_title: "Sie haben ein konkretes Anliegen?",
    cta_text: "Vereinbaren Sie ein unverbindliches Vorgespräch mit uns.",
    cta_btn: "Jetzt anfragen →",
    back_btn: "← Zurück zur Startseite"
  },
  tr: {
    page_title: "Teklifler",
    hero_title: "Tekliflerimiz",
    hero_desc: "Çocuklardan gençlere, uzmanlardan kurumlara kadar her hedef grup için özel olarak hazırlanmış şiddet önleme hizmetleri.",
    section1_title: "ÖNLEME – Önleyici Atölyeler",
    section1_text: "Önleyici tekliflerimiz çocuklara, gençlere, eğitimcilere ve kurumlara yöneliktir. Etkileşimli atölye çalışmaları ve eğitimlerle yansıtma ve bilinçlendirme alanları yaratıyoruz. Konular: çatışma çözümü, sivil cesaret, gerilimi azaltma, saldırganlıkla başa çıkma ve sosyal becerilerin geliştirilmesi.",
    section2_title: "HAREKETE GEÇME – Olay Sonrası Müdahale",
    section2_text: "Somut şiddet olaylarından sonra hızlı ve profesyonel müdahale sunuyoruz. Kurumlara, ekiplere ve etkilenen kişilere olayları işleme koyma, bakım sonrası konseptler oluşturma ve eylem stratejileri geliştirme konusunda eşlik ediyoruz.",
    section3_title: "GÜÇLENDİRME – Uzun Vadeli Rehberlik",
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
    section1_title: "الوقاية - ورش عمل وقائية",
    section1_text: "تستهدف عروضنا الوقائية الأطفال والشباب والمعلمين والمؤسسات. من خلال ورش العمل والتدريبات التفاعلية، نخلق مساحات للتفكير والتوعية. تشمل المواضيع: حل النزاعات، الشجاعة المدنية، تخفيف التصعيد، التعامل مع العدوانية وتطوير المهارات الاجتماعية.",
    section2_title: "العمل - التدخل بعد الحوادث",
    section2_text: "بعد حوادث العنف الملموسة، نقدم تدخلاً سريعًا ومهنيًا. نرافق المؤسسات والفرق والأشخاص المتأثرين في معالجة الأحداث، وإنشاء مفاهيم الرعاية اللاحقة، وتطوير استراتيجيات العمل.",
    section3_title: "التعزيز - الدعم طويل الأمد",
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
    section1_title: "PÊŞÎLÊGIRTIN – Atolyeyên Pêşîlêgirtinê",
    section1_text: "Pêşniyarên me yên pêşîlêgirtinê ji bo zarok, ciwan, perwerdekar û saziyan in. Bi atolye û perwerdeyên înteraktîf, em cihên raman û hişyariyê diafirînin. Mijar: çareserkirina pevçûnan, cesareta sivîl, kêmkirina tansiyonê, rûbirûbûna êrîşkariyê û pêşxistina jêhatîbûnên civakî.",
    section2_title: "ÇALAKÎ – Destêwerdana Piştî Bûyeran",
    section2_text: "Piştî bûyerên şîdetê yên somut, em destêwerdana bilez û pîşeyî pêşkêş dikin. Em bi sazî, tîm û kesên bandordar re di pêvajokirina bûyeran, afirandina konseptên lênihêrîna paşîn û pêşxistina stratejiyên çalakiyê de hevalbendiyê dikin.",
    section3_title: "XURTKIRIN – Rêberiya Demdirêj",
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
    section1_title: "SPRIJEČITI – Preventivne radionice",
    section1_text: "Naše preventivne ponude namijenjene su djeci, mladima, odgajateljima i institucijama. Kroz interaktivne radionice i obuke stvaramo prostore za refleksiju i senzibilizaciju. Teme uključuju: rješavanje sukoba, građansku hrabrost, deeskalaciju, suočavanje s agresijom i razvoj socijalnih vještina.",
    section2_title: "DJELOVATI – Intervencija nakon incidenata",
    section2_text: "Nakon konkretnih incidenata nasilja nudimo brzu i profesionalnu intervenciju. Pratimo institucije, timove i pogođene osobe u obradi događaja, izradi postkoncepata i razvoju strategija djelovanja.",
    section3_title: "OSNAŽITI – Dugoročna podrška",
    section3_text: "Osim akutne intervencije, nudimo dugoročnu podršku na putu ka održivoj promjeni. To uključuje redovne obuke, osvježavajuće radionice, superviziju za timove i razvoj internih koncepata zaštite.",
    cta_title: "Imate konkretan zahtjev?",
    cta_text: "Dogovorite neobavezujući preliminarni razgovor s nama.",
    cta_btn: "Zatražite sada →",
    back_btn: "← Nazad na početnu stranicu"
  },
  fa: {
    page_title: "پیشنهادات",
    hero_title: "پیشنهادات ما",
    hero_desc: "خدمات پیشگیری از خشونت متناسب با هر گروه هدف - از کودکان و نوجوانان تا متخصصان و مؤسسات.",
    section1_title: "پیشگیری - کارگاه‌های پیشگیرانه",
    section1_text: "پیشنهادات پیشگیرانه ما متوجه کودکان، نوجوانان، مربیان و مؤسسات است. در کارگاه‌ها و آموزش‌های تعاملی، فضاهایی برای تأمل و حساس‌سازی ایجاد می‌کنیم. موضوعات شامل: حل تعارض، شجاعت مدنی، کاهش تنش، مقابله با پرخاشگری و تقویت مهارت‌های اجتماعی.",
    section2_title: "اقدام - مداخله پس از حوادث",
    section2_text: "پس از حوادث خشونت‌آمیز مشخص، مداخله سریع و حرفه‌ای ارائه می‌دهیم. ما مؤسسات، تیم‌ها و افراد آسیب‌دیده را در پردازش رویدادها، ایجاد مفاهیم مراقبت پس از حادثه و توسعه استراتژی‌های عملی همراهی می‌کنیم.",
    section3_title: "تقویت - همراهی بلندمدت",
    section3_text: "فراتر از مداخله حاد، ما همراهی بلندمدت در مسیر تغییر پایدار ارائه می‌دهیم. این شامل آموزش‌های منظم، کارگاه‌های به‌روزرسانی، نظارت برای تیم‌ها و توسعه مفاهیم حفاظت داخلی است.",
    cta_title: "درخواست مشخصی دارید؟",
    cta_text: "یک جلسه مقدماتی بدون تعهد با ما هماهنگ کنید.",
    cta_btn: "اکنون درخواست دهید ←",
    back_btn: "← بازگشت به صفحه اصلی"
  }
};

export default function AngebotePage() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang] || translations.de;
  const isRtl = lang === 'ar' || lang === 'fa';

  // Beim Laden zur richtigen Stelle scrollen, wenn Hash in URL
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const id = window.location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  }, []);

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
        <nav className="nav-links">
          <a href="/">{lang === 'de' ? 'STARTSEITE' : lang === 'tr' ? 'ANA SAYFA' : lang === 'ar' ? 'الصفحة الرئيسية' : lang === 'ku' ? 'RÛPELA SEREKE' : lang === 'bks' ? 'POČETNA STRANICA' : 'صفحه اصلی'}</a>
          <a href="/haltung">{lang === 'de' ? 'HALTUNG' : lang === 'tr' ? 'TUTUM' : lang === 'ar' ? 'الموقف' : lang === 'ku' ? 'HELWEST' : lang === 'bks' ? 'STAV' : 'موضع'}</a>
          <a href="/team">{lang === 'de' ? 'TEAM' : lang === 'tr' ? 'EKİP' : lang === 'ar' ? 'الفريق' : lang === 'ku' ? 'TÎM' : lang === 'bks' ? 'TIM' : 'تیم'}</a>
          <a href="/kontakt">{lang === 'de' ? 'KONTAKT' : lang === 'tr' ? 'İLETİŞİM' : lang === 'ar' ? 'اتصل بنا' : lang === 'ku' ? 'TÊKILÎ' : lang === 'bks' ? 'KONTAKT' : 'تماس'}</a>
        </nav>
        <div className="nav-actions">
          <div className="lang-selector">
            <select value={lang} onChange={(e) => setLang(e.target.value)}>
              <option value="de">DE</option>
              <option value="tr">TR</option>
              <option value="ar">AR</option>
              <option value="ku">KU</option>
              <option value="bks">BKS</option>
              <option value="fa">FA</option>
            </select>
          </div>
          <a href="/kontakt" className="btn btn-primary">{lang === 'de' ? 'PROJEKT ANFRAGEN' : lang === 'tr' ? 'PROJE TALEP ET' : lang === 'ar' ? 'طلب مشروع' : lang === 'ku' ? 'PROJE BIXWAZE' : lang === 'bks' ? 'ZATRAŽI PROJEKAT' : 'درخواست پروژه'}</a>
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
            <p dangerouslySetInnerHTML={{ __html: t.section1_text }} />
          </div>
          <div className="content-block" id="handeln">
            <h2>{t.section2_title}</h2>
            <p dangerouslySetInnerHTML={{ __html: t.section2_text }} />
          </div>
          <div className="content-block" id="staerken">
            <h2>{t.section3_title}</h2>
            <p dangerouslySetInnerHTML={{ __html: t.section3_text }} />
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
            <p className="footer-desc">{lang === 'de' ? 'Verein Antigewalt und Gewaltprävention' : lang === 'tr' ? 'Şiddet Karşıtı ve Şiddeti Önleme Derneği' : lang === 'ar' ? 'جمعية مكافحة العنف والوقاية منه' : lang === 'ku' ? 'Komeleya Dijî Şîdetê û Pêşîlêgirtinê' : lang === 'bks' ? 'Udruženje protiv nasilja i prevencije' : 'انجمن مبارزه با خشونت و پیشگیری از خشونت'}</p>
          </div>
          <div className="footer-contact">
            <h4>{lang === 'de' ? 'Kontakt' : lang === 'tr' ? 'İletişim' : lang === 'ar' ? 'اتصل' : lang === 'ku' ? 'Têkilî' : lang === 'bks' ? 'Kontakt' : 'تماس'}</h4>
            <p>Hallergasse 8/1/47<br/>1110 Wien<br/>Österreich</p>
            <p>Telefon: +43/1/111111111<br/>E-Mail: <a href="mailto:office@verein-agit.at">office@verein-agit.at</a></p>
          </div>
          <div className="footer-legal">
            <h4>{lang === 'de' ? 'Impressum' : lang === 'tr' ? 'Künye' : lang === 'ar' ? 'بصمة' : lang === 'ku' ? 'Nasname' : lang === 'bks' ? 'Impresum' : 'مشخصات'}</h4>
            <p>ZVR-Zahl: (bitte einfügen)<br/>Behörde: LPD Wien</p>
            <p className="small-text"><a href="/datenschutz">Datenschutzerklärung</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Verein AGIT. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}
