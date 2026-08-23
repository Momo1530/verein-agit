"use client";
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
        title: "Vereinszweck & Tätigkeitsbereich",
        content: "Der Verein AGIT – Antigewalt- und Interventionsteam ist ein gemeinnütziger, nicht auf Gewinn ausgerichteter Verein. Zweck des Vereins ist die Förderung der Gewaltprävention, Krisenintervention und Deeskalationsarbeit sowie die Unterstützung junger Menschen, die von Gewalt betroffen oder gefährdet sind, im Raum Wien und ganz Österreich."
      },
      {
        title: "Vertretungsbefugte Organe",
        content: "Der Verein wird durch den Vorstand vertreten. Kontaktaufnahme über die oben genannten Kontaktdaten."
      },
      {
        title: "Urheberrecht & Inhalte",
        content: "Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Alle Texte, Bilder und sonstigen Inhalte dieser Website unterliegen dem Urheberrecht des Vereins AGIT, sofern nicht anders angegeben."
      },
      {
        title: "Haftung für Links",
        content: "Diese Website enthält keine externen Links zu Inhalten Dritter, für die wir keine Gewähr übernehmen können. Sollten wir auf Inhalte Dritter verweisen, liegt die Verantwortung beim jeweiligen Anbieter."
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
      { title: "Derneğin Amacı", content: "AGIT – Antigewalt- und Interventionsteam, kar amacı gütmeyen bir dernektir. Amacı; şiddet önleme, kriz müdahalesi ve gerilim azaltma çalışmalarını teşvik etmek ve şiddetten etkilenen veya risk altındaki gençleri desteklemektir." },
      { title: "Telif Hakkı", content: "Bu web sitesinin tüm içerikleri özenle hazırlanmıştır. İçeriklerin doğruluğu, eksiksizliği ve güncelliği konusunda garanti veremeyiz." }
    ]
  },
  ar: {
    page_title: "بصمة",
    hero_title: "بصمة",
    hero_desc: "الإفصاح وفقًا للمادة 25 من قانون الإعلام والمادة 5 من قانون التجارة الإلكترونية",
    sections: [
      { title: "مالك الوسيلة الإعلامية", content: "<strong>اسم الجمعية:</strong> AGIT – Antigewalt- und Interventionsteam<br/><strong>مقر الجمعية:</strong> فيينا، النمسا<br/><strong>العنوان البريدي:</strong> Hallergasse 8/1/47، 1110 فيينا، النمسا<br/><strong>البريد الإلكتروني:</strong> <a href=\"mailto:office@verein-agit.at\">office@verein-agit.at</a>" },
      { title: "سجل الجمعيات والسلطة المختصة", content: "<strong>رقم ZVR:</strong> 1897049103<br/><strong>السلطة المختصة بالجمعيات:</strong> Landespolizeidirektion Wien" },
      { title: "غرض الجمعية", content: "جمعية AGIT جمعية غير ربحية. هدفها تعزيز الوقاية من العنف والتدخل في الأزمات والعمل على الحد من التصعيد ودعم الشباب المتأثرين بالعنف." },
      { title: "حقوق الطبع والنشر", content: "تم إنشاء محتويات هذا الموقع بعناية فائقة. ومع ذلك، لا يمكننا تحمل أي مسؤولية عن دقة المحتوى واكتماله وحداثته." }
    ]
  },
  ku: {
    page_title: "Nasname",
    hero_title: "Nasname",
    hero_desc: "Li gorî § 25 Qanûna Medyayê û § 5 Qanûna E-Bazirganiyê (ECG) vekirina agahiyan",
    sections: [
      { title: "Xwediyê Medyayê & Weşander", content: "<strong>Navê Komeleyê:</strong> AGIT – Antigewalt- und Interventionsteam<br/><strong>Cihê Komeleyê:</strong> Viyana, Awistirya<br/><strong>Navnîşana Postê:</strong> Hallergasse 8/1/47, 1110 Viyana, Awistirya<br/><strong>E-Mail:</strong> <a href=\"mailto:office@verein-agit.at\">office@verein-agit.at</a>" },
      { title: "Tomara Komeleyan & Saziyê Berpirsiyar", content: "<strong>Hejmara ZVR:</strong> 1897049103<br/><strong>Saziyê Berpirsiyar:</strong> Landespolizeidirektion Wien" },
      { title: "Armanca Komeleyê", content: "Komeleya AGIT komeleyeke ne-bi-mena e. Armanca wê pêşîlêgirtina şîdetê, destêwerdana krîzê û xebata de-eskalasyonê pêşxistin e." },
      { title: "Mafê Nivîsandinê", content: "Naveroka vê malperê bi baldarî hatiye çêkirin. Lebê em nikarin ji bo rastî, temamî û nûjeniya naverokê garantiyê bidin." }
    ]
  },
  bks: {
    page_title: "Impresum",
    hero_title: "Impresum",
    hero_desc: "Raskrinkavanje prema § 25 Medijskog zakona i podacima prema § 5 Zakona o elektroničkoj trgovini",
    sections: [
      { title: "Vlasnik medija & Izdavač", content: "<strong>Naziv udruženja:</strong> AGIT – Antigewalt- und Interventionsteam<br/><strong>Sjedište udruženja:</strong> Beč, Austrija<br/><strong>Poštanska adresa:</strong> Hallergasse 8/1/47, 1110 Beč, Austrija<br/><strong>E-Mail:</strong> <a href=\"mailto:office@verein-agit.at\">office@verein-agit.at</a>" },
      { title: "Registar udruženja & Nadležno tijelo", content: "<strong>ZVR broj:</strong> 1897049103<br/><strong>Nadležno tijelo za udruženja:</strong> Landespolizeidirektion Wien" },
      { title: "Svrha udruženja", content: "Udruženje AGIT je neprofitno udruženje. Svrha je promicanje prevencije nasilja, intervencije u kriznim situacijama i rada na deeskalaciji." },
      { title: "Autorska prava", content: "Sadržaji ove web stranice kreirani su s najvećom pažnjom. Međutim, ne možemo preuzeti garanciju za točnost, cjelovitost i aktualnost sadržaja." }
    ]
  },
  fa: {
    page_title: "مشخصات",
    hero_title: "مشخصات نشر",
    hero_desc: "افشا بر اساس ماده ۲۵ قانون رسانه و اطلاعات بر اساس ماده ۵ قانون تجارت الکترونیک",
    sections: [
      { title: "مالک رسانه و ناشر", content: "<strong>نام انجمن:</strong> AGIT – Antigewalt- und Interventionsteam<br/><strong>محل انجمن:</strong> وین، اتریش<br/><strong>آدرس پستی:</strong> Hallergasse 8/1/47، 1110 وین، اتریش<br/><strong>ایمیل:</strong> <a href=\"mailto:office@verein-agit.at\">office@verein-agit.at</a>" },
      { title: "ثبت انجمن & مرجع صالح", content: "<strong>شماره ZVR:</strong> 1897049103<br/><strong>مرجع صالح برای انجمن‌ها:</strong> Landespolizeidirektion Wien" },
      { title: "هدف انجمن", content: "انجمن AGIT یک انجمن غیرانتفاعی است. هدف آن ارتقاء پیشگیری از خشونت، مداخله در بحران و کار در زمینه کاهش تنش است." },
      { title: "حق نشر", content: "محتوای این وب‌سایت با دقت بالا تهیه شده است. با این حال، نمی‌توانیم تضمینی برای صحت، کامل بودن و به‌روز بودن محتوا ارائه دهیم." }
    ]
  }
};

export default function ImpressumPage() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang] || translations.de;
  const isRtl = lang === 'ar' || lang === 'fa';

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
              <h2>{section.title}</h2>
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
            <p className="footer-desc">{lang === 'de' ? 'Verein AGIT – Antigewalt- und Interventionsteam' : lang === 'tr' ? 'Şiddet Karşıtı ve Müdahale Ekibi Derneği' : lang === 'ar' ? 'جمعية مكافحة العنف وفريق التدخل' : lang === 'ku' ? 'Komeleya Dijî Şîdetê û Tîma Destêwerdanê' : lang === 'bks' ? 'Udruženje protiv nasilja i interventni tim' : 'انجمن مبارزه با خشونت و تیم مداخله'}</p>
          </div>
          <div className="footer-contact">
            <h4>{lang === 'de' ? 'Kontakt' : lang === 'tr' ? 'İletişim' : lang === 'ar' ? 'اتصل' : lang === 'ku' ? 'Têkilî' : lang === 'bks' ? 'Kontakt' : 'تماس'}</h4>
            <p>Hallergasse 8/1/47, 1110 Wien, Österreich</p>
            <p>E-Mail: <a href="mailto:office@verein-agit.at">office@verein-agit.at</a></p>
          </div>
          <div className="footer-legal">
            <h4>{lang === 'de' ? 'Rechtliches' : lang === 'tr' ? 'Yasal' : lang === 'ar' ? 'قانوني' : lang === 'ku' ? 'Qanûnî' : lang === 'bks' ? 'Pravno' : 'قانونی'}</h4>
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
