"use client";
import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';

const translations = {
  de: {
    page_title: "Impressum",
    hero_title: "Impressum",
    hero_desc: "Offenlegung gemäß § 25 Mediengesetz und Angaben gemäß § 5 E-Commerce-Gesetz (ECG)",
    sections: [
      {
        title: "Medieninhaber & Herausgeber",
        content: "<strong>Vereinsname:</strong> AGIT – Antigewalt- und Interventionsteam<br/><strong>Sitz des Vereins:</strong> Wien, Österreich<br/><strong>Postanschrift:</strong> Hallergasse 8/1/47, 1110 Wien, Österreich<br/><strong>E-Mail:</strong> <a href=\"mailto:office@verein-agit.at\">office@verein-agit.at</a>"
      },
      {
        title: "Vereinsregister & Behörde",
        content: "<strong>ZVR-Zahl (Zentrales Vereinsregister):</strong> 1897049103<br/><strong>Zuständige Vereinsbehörde:</strong> Landespolizeidirektion Wien, Referat Vereins-, Versammlungs- und Medienrechtsangelegenheiten"
      },
      {
        title: "Gemeinnützigkeit & Vereinszweck",
        content: "Der Verein ist nicht auf Gewinn ausgerichtet und verfolgt ausschließlich und unmittelbar gemeinnützige Zwecke im Sinne der §§ 34 ff Bundesabgabenordnung (BAO).<br/><br/><strong>Zweck des Vereins:</strong> Förderung der Gewaltprävention, Krisenintervention und Deeskalationsarbeit, insbesondere für Kinder, Jugendliche und junge Erwachsene; Durchführung präventiver, protektiver und konfrontativer Arbeitsansätze; Förderung der fachlichen Qualität im Bereich Antigewalt- und Deeskalationsarbeit."
      },
      {
        title: "Grundlegende Richtung der Website („Blattlinie“)",
        content: "Diese Website dient der Information über die Ziele, Angebote, Projekte und Tätigkeiten des Vereins „AGIT – Antigewalt- und Interventionsteam“ sowie der Sensibilisierung der Öffentlichkeit für Gewaltfreiheit, Deeskalation und Zivilcourage."
      },
      {
        title: "Hinweis zu Bildrechten und KI-generierten Inhalten",
        content: "Zur Illustration unserer Vereinsarbeit setzen wir unter anderem KI-gestützte Bildmedien ein:<br/><br/><strong>Workshop- & Gruppendarstellungen:</strong> Bei den abgebildeten Gruppenszenen handelt es sich um didaktische Symbolbilder (Fotomontagen). Die dargestellten jugendlichen Teilnehmer sind synthetisch erzeugt und stellen keine realen Personen dar (generiert via OpenAI / ChatGPT im Auftrag des Vereins)."
      }
    ]
  },
  tr: {
    page_title: "Künye",
    hero_title: "Künye",
    hero_desc: "§ 25 Medya Yasası ve § 5 E-Ticaret Yasası (ECG) uyarınca açıklamalar",
    sections: [
      { title: "Medya Sahibi ve Yayıncı", content: "<strong>Dernek Adı:</strong> AGIT – Antigewalt- und Interventionsteam<br/><strong>Derneğin Merkezi:</strong> Viyana, Avusturya<br/><strong>Posta Adresi:</strong> Hallergasse 8/1/47, 1110 Viyana, Avusturya<br/><strong>E-Posta:</strong> <a href=\"mailto:office@verein-agit.at\">office@verein-agit.at</a>" },
      { title: "Dernek Sicili ve Yetkili Makam", content: "<strong>ZVR Numarası (Merkezi Dernek Sicili):</strong> 1897049103<br/><strong>Yetkili Dernek Makamı:</strong> Landespolizeidirektion Wien, Dernek, Toplantı ve Medya Hukuku Dairesi" },
       { title: "Kamu Yararı ve Dernek Amacı", content: "Dernek kâr amacı gütmez ve §§ 34 ff Bundesabgabenordnung (BAO – Federal Vergi Usul Kanunu) anlamında yalnızca ve doğrudan kamu yararına yönelik amaçlar izler.<br/><br/><strong>Derneğin Amacı:</strong> Özellikle çocuklar, gençler ve genç yetişkinler için şiddet önleme, kriz müdahalesi ve gerilim azaltma çalışmalarının teşvik edilmesi; önleyici, koruyucu ve yüzleştirici çalışma yaklaşımlarının uygulanması; şiddet karşıtı ve gerilim azaltma çalışmaları alanındaki mesleki kalitenin teşvik edilmesi." },
       { title: "Web Sitesinin Temel Yönelimi („Yayın Çizgisi“)", content: "Bu web sitesi, „AGIT – Antigewalt- und Interventionsteam“ derneğinin hedefleri, faaliyetleri, projeleri ve çalışmaları hakkında bilgi vermeye ve kamuoyunu şiddetsizlik, gerilim azaltma ve sivil cesaret konusunda bilinçlendirmeye hizmet etmektedir." }
      ]
      },
  ar: {
    page_title: "بصمة",
    hero_title: "بصمة",
    hero_desc: "الإفصاح وفقًا للمادة 25 من قانون الإعلام والمادة 5 من قانون التجارة الإلكترونية",
    sections: [
      { title: "مالك الوسيلة الإعلامية", content: "<strong>اسم الجمعية:</strong> AGIT – Antigewalt- und Interventionsteam<br/><strong>مقر الجمعية:</strong> فيينا، النمسا<br/><strong>العنوان البريدي:</strong> Hallergasse 8/1/47، 1110 فيينا، النمسا<br/><strong>البريد الإلكتروني:</strong> <a href=\"mailto:office@verein-agit.at\">office@verein-agit.at</a>" },
      { title: "سجل الجمعيات والسلطة المختصة", content: "<strong>رقم ZVR:</strong> 1897049103<br/><strong>السلطة المختصة بالجمعيات:</strong> Landespolizeidirektion Wien" },
      { title: "النفع العام وغرض الجمعية", content: "الجمعية لا تسعى إلى تحقيق الربح وتتبع أغراض النفع العام حصريًا ومباشرة بالمعنى المقصود في §§ 34 ff Bundesabgabenordnung (BAO – قانون الضرائب الفيدرالي النمساوي).<br/><br/><strong>غرض الجمعية:</strong> تعزيز الوقاية من العنف والتدخل في الأزمات والعمل على خفض التصعيد، خاصة للأطفال والشباب والبالغين الشباب؛ تنفيذ أساليب عمل وقائية وحمائية ومواجهة؛ تعزيز الجودة المهنية في مجال مكافحة العنف وخفض التصعيد." },
      { title: "التوجه الأساسي للموقع الإلكتروني („الخط التحريري“)", content: "يخدم هذا الموقع الإلكتروني إطلاع الجمهور على أهداف وعروض ومشاريع وأنشطة جمعية „AGIT – Antigewalt- und Interventionsteam“ وتوعية الرأي العام بحرية العنف وخفض التصعيد والشجاعة المدنية." }
    ]
  },
  ku: {
    page_title: "Nasname",
    hero_title: "Nasname",
    hero_desc: "Li gorî § 25 Qanûna Medyayê û § 5 Qanûna E-Bazirganiyê (ECG) vekirina agahiyan",
    sections: [
      { title: "Xwediyê Medyayê & Weşander", content: "<strong>Navê Komeleyê:</strong> AGIT – Antigewalt- und Interventionsteam<br/><strong>Cihê Komeleyê:</strong> Viyana, Awistirya<br/><strong>Navnîşana Postê:</strong> Hallergasse 8/1/47, 1110 Viyana, Awistirya<br/><strong>E-Mail:</strong> <a href=\"mailto:office@verein-agit.at\">office@verein-agit.at</a>" },
      { title: "Tomara Komeleyan & Saziyê Berpirsiyar", content: "<strong>Hejmara ZVR:</strong> 1897049103<br/><strong>Saziyê Berpirsiyar:</strong> Landespolizeidirektion Wien" },
       { title: "Bêqazancî & Armanca Komeleyê", content: "Komele ji bo qazancê neketiye damezrandin û tenê armancên bêqazanciyê di çarçoveya §§ 34 ff Bundesabgabenordnung (BAO – Qanûna Bacê ya Federal) dike.<br/><br/><strong>Armanca Komeleyê:</strong> Pêşxistina pêşîlêgirtina şîdetê, destêwerdana krizê û xebata kêmkirina şidatê, bi taybetî ji bo zarok, ciwan û mezinên ciwan; pêkanîna teknîkên xebata pêşîlêgirtinê, parastinê û konfrontasyonê; pêşxistina kalîteya pisporiyê di warê xebata dijî-şîdet û kêmkirina şidatê de." },
       { title: "Rêya Bingehîn a Malperê („Lînya Editoryalê“)", content: "Ev malper ji bo agahdarkirina derbarê armanc, pêşnigar, projeyên û çalakiyên komeleya „AGIT – Antigewalt- und Interventionsteam“ û ji bo hişyarkirina raya giştî derbarê azadiya şîdetê, kêmkirina şidatê û cesareta sivîl e." }
      ]
      },
  bks: {
    page_title: "Impresum",
    hero_title: "Impresum",
    hero_desc: "Raskrinkavanje prema § 25 Medijskog zakona i podacima prema § 5 Zakona o elektroničkoj trgovini",
    sections: [
      { title: "Vlasnik medija & Izdavač", content: "<strong>Naziv udruženja:</strong> AGIT – Antigewalt- und Interventionsteam<br/><strong>Sjedište udruženja:</strong> Beč, Austrija<br/><strong>Poštanska adresa:</strong> Hallergasse 8/1/47, 1110 Beč, Austrija<br/><strong>E-Mail:</strong> <a href=\"mailto:office@verein-agit.at\">office@verein-agit.at</a>" },
      { title: "Registar udruženja & Nadležno tijelo", content: "<strong>ZVR broj:</strong> 1897049103<br/><strong>Nadležno tijelo za udruženja:</strong> Landespolizeidirektion Wien" },
       { title: "Neprofitabilnost & Svrha udruženja", content: "Udruženje nije usmjereno na dobit i slijedi isključivo i neposredno neprofitabilne svrhe u smislu §§ 34 ff Bundesabgabenordnung (BAO – Savezni zakon o porezima).<br/><br/><strong>Svrha udruženja:</strong> Promicanje prevencije nasilja, intervencije u krizama i rada na deeskalaciji, posebno za djecu, mlade i mlade odrasle; provođenje preventivnih, protektivnih i konfrontativnih pristupa rada; promicanje stručne kvalitete u području antinasilnog i rada na deeskalaciji." },
       { title: "Osnovni smjer web stranice („urednička politika“)", content: "Ova web stranica služi informiranju o ciljevima, ponudama, projektima i aktivnostima udruženja „AGIT – Antigewalt- und Interventionsteam“ te osviještavanju javnosti o slobodi od nasilja, deeskalaciji i građanskoj hrabrosti." }
      ]
      },
  fa: {
    page_title: "مشخصات",
    hero_title: "مشخصات نشر",
    hero_desc: "افشا بر اساس ماده ۲۵ قانون رسانه و اطلاعات بر اساس ماده ۵ قانون تجارت الکترونیک",
    sections: [
      { title: "مالک رسانه و ناشر", content: "<strong>نام انجمن:</strong> AGIT – Antigewalt- und Interventionsteam<br/><strong>محل انجمن:</strong> وین، اتریش<br/><strong>آدرس پستی:</strong> Hallergasse 8/1/47، 1110 وین، اتریش<br/><strong>ایمیل:</strong> <a href=\"mailto:office@verein-agit.at\">office@verein-agit.at</a>" },
      { title: "ثبت انجمن & مرجع صالح", content: "<strong>شماره ZVR:</strong> 1897049103<br/><strong>مرجع صالح برای انجمن‌ها:</strong> Landespolizeidirektion Wien" },
      { title: "غیرانتفاعی بودن & هدف انجمن", content: "انجمن هدف سودآوری را دنبال نمی‌کند و به طور انحصاری و مستقیم اهداف عام‌المنفعه را به معنای §§ 34 ff Bundesabgabenordnung (BAO – قانون مالیات فدرال اتریش) دنبال می‌کند.<br/><br/><strong>هدف انجمن:</strong> ارتقاء پیشگیری از خشونت، مداخله در بحران و کار کاهش تنش، به ویژه برای کودکان، نوجوانان و بزرگسالان جوان؛ اجرای رویکردهای پیشگیرانه، حمایتی و روبروشونده؛ ارتقاء کیفیت حرفه‌ای در زمینه کار ضدخشونت و کاهش تنش." },
      { title: "جهت‌گیری اساسی وب‌سایت („خط سردبیری“)", content: "این وب‌سایت در جهت اطلاع‌رسانی درباره اهداف، خدمات، پروژه‌ها و فعالیت‌های انجمن „AGIT – Antigewalt- und Interventionsteam“ و حساس‌سازی افکار عمومی نسبت به دور بودن از خشونت، کاهش تنش و شجاعت مدنی است." }
    ]
  }
};

export default function ImpressumPage() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang] || translations.de;
  const isRtl = lang === 'ar' || lang === 'fa';
  const [menuOpen, setMenuOpen] = useState(false);

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
          <a href="/">{lang === 'de' ? 'STARTSEITE' : lang === 'tr' ? 'ANA SAYFA' : lang === 'ar' ? 'الصفحة الرئيسية' : lang === 'ku' ? 'RÛPELA SEREKE' : lang === 'bks' ? 'POČETNA STRANICA' : 'صفحه اصلی'}</a>
          <a href="/angebote">{lang === 'de' ? 'ANGEBOTE' : lang === 'tr' ? 'TEKLİFLER' : lang === 'ar' ? 'العروض' : lang === 'ku' ? 'PÊŞNIYAR' : lang === 'bks' ? 'PONUDE' : 'خدمات'}</a>
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
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menü">
            <span className={`hamburger-line${menuOpen ? ' open' : ''}`}></span>
            <span className={`hamburger-line${menuOpen ? ' open' : ''}`}></span>
            <span className={`hamburger-line${menuOpen ? ' open' : ''}`}></span>
          </button>
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
          {t.sections.map((section, i) => (
            <div key={i} className="content-block">
              {section.title && <h2>{section.title}</h2>}
              <p dangerouslySetInnerHTML={{ __html: section.content }} />
            </div>
          ))}
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
            <p className="footer-desc">{lang === 'de' ? 'Antigewalt- und Interventionsteam' : lang === 'tr' ? 'Şiddet Karşıtı ve Müdahale Ekibi Derneği' : lang === 'ar' ? 'جمعية مكافحة العنف وفريق التدخل' : lang === 'ku' ? 'Komeleya Dijî Şîdetê û Tîma Destêwerdanê' : lang === 'bks' ? 'Udruženje protiv nasilja i interventni tim' : 'انجمن مبارزه با خشونت و تیم مداخله'}</p>
          </div>
          <div className="footer-contact">
            <h4>{lang === 'de' ? 'Kontakt' : lang === 'tr' ? 'İletişim' : lang === 'ar' ? 'اتصل' : lang === 'ku' ? 'Têkilî' : lang === 'bks' ? 'Kontakt' : 'تماس'}</h4>
            <p>Hallergasse 8/1/47, 1110 Wien, Österreich</p>
            <p>E-Mail: <a href="mailto:office@verein-agit.at">office@verein-agit.at</a></p>
            <p>Murat Percin: <a href="tel:+436****7285">+43 699 10097285</a></p>
            <p>Kübra Erik: <a href="tel:+436****1500">+43 660 6251500</a></p>
          </div>
          <div className="footer-legal">
            <h4>{lang === 'de' ? 'Impressum' : lang === 'tr' ? 'Künye' : lang === 'ar' ? 'بصمة' : lang === 'ku' ? 'Nasname' : lang === 'bks' ? 'Impresum' : 'مشخصات'}</h4>
            <p>ZVR-Zahl: 1897049103<br/>Behörde: LPD Wien</p>
            <p className="small-text"><a href="/impressum">Impressum</a> | <a href="/datenschutz">Datenschutzerklärung</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Verein AGIT. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}
