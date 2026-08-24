"use client";
import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';

const translations = {
  de: {
    page_title: "Unser Team",
    hero_title: "Über uns",
    hero_desc: "Hinter AGIT steht ein engagiertes Team mit langjähriger Erfahrung in der Gewaltprävention und sozialen Arbeit.",
    team_intro: "Hinter AGIT steht ein multidisziplinäres Team, das Idealismus mit wissenschaftlicher und praktischer Präzision vereint.<br/><br/>Wir sind nicht nur Fachkräfte, wir sind Wegbegleiter, Krisenmanager und Brückenbauer. Der Verein AGIT – Antigewalt- und Interventionsteam ist aus der Synergie jahrzehntelanger Erfahrung in der Jugendarbeit und hochspezialisierter Expertise im Antigewalt- sowie konfrontativen Ressourcentraining (AGT/KRT) entstanden.<br/><br/>In einer kosmopolitischen Stadt wie Wien ist der Schutz von Jugendlichen und das proaktive Entgegenwirken von Gewalt eine existentielle Notwendigkeit. Nach jahrelanger, erfolgreicher Arbeit im Bereich der Gewaltprävention im Wiener Raum haben wir uns strukturell neu aufgestellt, um unsere bewährten Methoden noch gezielter und weitreichender einsetzen zu können. Unser Handeln wird von dem unerschütterlichen Grundsatz geleitet: Das Wohl und die positive Entwicklung junger Menschen stehen an oberster Stelle.",
    team_subtitle: "Unser Team",
    person1_name: "Kübra Erik, BA",
    person1_role: "",
    person1_bio: "Bildungswissenschaftlerin, Sozialpädagogin sowie Anti-Gewalt- und Ressourcentrainerin. Sie verfügt über langjährige Erfahrung in der Arbeit mit Kindern und Jugendlichen in Einzel- und Gruppensettings, Schulklassen und Workshops. Darüber hinaus begleitete sie junge Frauen in belastenden Lebenssituationen und bringt Erfahrung in der Fallarbeit sowie in der Arbeit mit Fachkräften mit.",
    person1_email: "k.erik@verein-agit.at",
    person1_phone: "+43 660 6251500",
    person2_name: "Murat Percin, BA",
    person2_role: "",
    person2_bio: "Sozialarbeiter sowie Anti-Gewalt- und Ressourcentrainer. Seine langjährige Erfahrung umfasst Einzel- und Gruppentrainings sowie die außerschulische Kinder- und Jugendarbeit. Darüber hinaus arbeitete er in der Türkei mit Jugendlichen, die mit delinquentem Verhalten und Kriminalität in Berührung gekommen sind.",
    person2_email: "m.percin@verein-agit.at",
    person2_phone: "+43 699 10097285"
  },
  tr: {
    page_title: "Ekibimiz",
    hero_title: "Hakkımızda",
    hero_desc: "AGIT'in arkasında, şiddet önleme ve sosyal hizmet alanında uzun yıllara dayanan deneyime sahip kararlı bir ekip var.",
    team_intro: "AGIT'in arkasında, idealizmi bilimsel ve pratik hassasiyetle birleştiren multidisipliner bir ekip durmaktadır.<br/><br/>Biz sadece uzmanlar değiliz; biz yol arkadaşları, kriz yöneticileri ve köprü kurucularıyız. AGIT – Antigewalt- und Interventionsteam (Şiddet Karşıtı ve Müdahale Ekibi) derneği, onlarca yıllık gençlik çalışması deneyimi ile şiddet karşıtı ve yüzleştirici kaynak eğitimi (AGT/KRT) alanındaki yüksek düzeyde uzmanlaşmış bilgi birikiminin sinerjisinden doğmuştur.<br/><br/>Viyana gibi kozmopolit bir şehirde gençlerin korunması ve şiddete karşı proaktif mücadele varoluşsal bir zorunluluktur. Viyana bölgesinde şiddet önleme alanındaki yıllar süren başarılı çalışmaların ardından, kanıtlanmış yöntemlerimizi daha hedefli ve daha geniş kapsamlı kullanabilmek için kendimizi yapısal olarak yeniden konumlandırdık. Eylemlerimiz sarsılmaz bir ilke tarafından yönlendirilmektedir: Gençlerin refahı ve olumlu gelişimi her şeyin önünde gelir.",
    team_subtitle: "Ekibimiz",
    person1_name: "Kübra Erik, BA",
    person1_role: "",
    person1_bio: "Eğitim bilimci, sosyal pedagog ve şiddet karşıtı ve kaynak eğitmeni. Bireysel ve grup ortamlarında, sınıflarda ve atölye çalışmalarında çocuklar ve gençlerle çalışma konusunda uzun yıllara dayanan deneyime sahiptir. Ayrıca zorlu yaşam koşullarındaki genç kadınlara eşlik etmiş olup vaka çalışması ve uzmanlarla çalışma alanında deneyim sahibidir.",
    person1_email: "k.erik@verein-agit.at",
    person1_phone: "+43 660 6251500",
    person2_name: "Murat Percin, BA",
    person2_role: "",
    person2_bio: "Sosyal hizmet uzmanı ve şiddet karşıtı ve kaynak eğitmeni. Uzun yıllara dayanan deneyimi bireysel ve grup eğitimlerinin yanı sıra okul dışı çocuk ve gençlik çalışmalarını kapsamaktadır. Ayrıca Türkiye'de suç işlemiş ve suçla temas etmiş gençlerle çalışmıştır.",
    person1_email: "k.erik@verein-agit.at",
    person1_phone: "+43 660 6251500",
    person2_email: "m.percin@verein-agit.at",
    person2_phone: "+43 699 10097285"
  },
  ar: {
    page_title: "فريقنا",
    hero_title: "من نحن",
    hero_desc: "وراء AGIT فريق ملتزم يتمتع بخبرة طويلة في مجال الوقاية من العنف والعمل الاجتماعي.",
    team_intro: "وراء AGIT يقف فريق متعدد التخصصات يجمع بين المثالية والدقة العلمية والعملية.<br/><br/>نحن لسنا مجرد اختصاصيين، بل نحن رفقاء درب ومديرو أزمات وبَنّاؤو جسور. نشأت جمعية AGIT – Antigewalt- und Interventionsteam (فريق مكافحة العنف والتدخل) من التآزر بين عقود من الخبرة في العمل مع الشباب والخبرة العالية التخصص في التدريب المضاد للعنف والتدريب المواجِه على الموارد (AGT/KRT).<br/><br/>في مدينة عالمية مثل فيينا، تُعد حماية الشباب والمواجهة الاستباقية للعنف ضرورة وجودية. بعد سنوات من العمل الناجح في مجال الوقاية من العنف في منطقة فيينا، أعدنا تنظيم أنفسنا هيكليًا لنتمكن من استخدام أساليبنا المجربة بشكل أكثر استهدافًا واتساعًا. يقود عملنا مبدأ راسخ لا يتزعزع: رفاهية الشباب وتطورهم الإيجابي يأتيان في المقام الأول.",
    team_subtitle: "فريقنا",
    person1_name: "Kübra Erik, BA",
    person1_role: "",
    person1_bio: "عالمة تربية وأخصائية اجتماعية-تربوية ومدربة مكافحة العنف والموارد. تتمتع بخبرة طويلة في العمل مع الأطفال والشباب في إطارات فردية وجماعية وفصول دراسية وورش عمل. كما رافقت شابات في مواقف حياتية صعبة ولديها خبرة في إدارة الحالات الفردية والعمل مع الاختصاصيين.",
    person1_email: "k.erik@verein-agit.at",
    person1_phone: "+43 660 6251500",
    person2_name: "Murat Percin, BA",
    person2_role: "",
    person2_bio: "أخصائي اجتماعي ومدرب مكافحة العنف والموارد. تشمل خبرته الطويلة التدريبات الفردية والجماعية والعمل مع الأطفال والشباب خارج المدرسة. كما عمل في تركيا مع شباب خالطهم السلوك الإجرامي والجنوح.",
    person2_email: "m.percin@verein-agit.at",
    person2_phone: "+43 699 10097285"
  },
  ku: {
    page_title: "Tîma Me",
    hero_title: "Dema em",
    hero_desc: "Li pişt AGIT-ê tîmek dilsoz a bi ezmûna salan di pêşîlêgirtina şîdetê û xebata civakî de heye.",
    team_intro: "Li pişt AGIT-ê tîmek multidîsîplîner heye ku îdeyalîzmê bi rastnivîsîna zanistî û pratîkî re yek dike.<br/><br/>Em tenê pispor nînin, em hevalbendên rê, rêveberan krizê û xebatkarên pirdirêj in. Komeleya AGIT – Antigewalt- und Interventionsteam ji sînerjiya ezmûna salhanek di xebata ciwanan û jêhatîbûna taybet di perwerdeya dijî-şîdet û çavkaniya konfrontatîf (AGT/KRT) de derketiye holê.<br/><br/>Di bajarekî kozmopolît wek Viyana de, parastina ciwanan û pêşîlêgirtina çalak a şîdetê hewceyiya hebûnê ye. Piştî salên serkeftî di warê pêşîlêgirtina şîdetê li herêma Viyana, me xwe ji nû ve saz kir da ku awayên xwe yên hewce bikar bînin û berferehtir bikar bînin. Xebata me ji aliyek prensîbekî saxlem ve tête birêvebirin: Refah û pêşkeftina erênî ya ciwanan di serî de her pêşîn e.",
    team_subtitle: "Tîma Me",
    person1_name: "Kübra Erik, BA",
    person1_role: "",
    person1_bio: "Zaniste pedagojîk, sosyalpedagog û perwerdekare dijî-şîdet û çavkanî. Ezmûna wê ya salan a di xebata bi zarok û ciwanan re di çarçoveyên kesane û komî, dibistan û atolyeyan de heye. Her wiha ew bi jinên ciwan ên di rewşên jiyanê dijwar de hevalbendiyê kiriye û di xebata dozê û xebata bi pisporan re ezmûna heye.",
    person1_email: "k.erik@verein-agit.at",
    person1_phone: "+43 660 6251500",
    person2_name: "Murat Percin, BA",
    person2_role: "",
    person2_bio: "Xebatkare sosyal û perwerdekare dijî-şîdet û çavkanî. Ezmûna wî ya salan perwerdeyên kesane û komî û xebata zarok û ciwanan a derveyî dibistanê digire. Her wiha ew li Tirkiyeyê bi ciwanan ku bi tewan û krimînalîteyê re hatine têkiliyê xebitiye.",
    person2_email: "m.percin@verein-agit.at",
    person2_phone: "+43 699 10097285"
  },
  bks: {
    page_title: "Naš tim",
    hero_title: "O nama",
    hero_desc: "Iza AGIT-a stoji predan tim sa dugogodišnjim iskustvom u prevenciji nasilja i socijalnom radu.",
    team_intro: "Iza AGIT-a stoji multidisciplinarni tim koji spaja idealizam sa naučnom i praktičnom preciznošću.<br/><br/>Mi nismo samo stručnjaci, mi smo pratioci na putu, menadžeri kriza i graditelji mostova. Udruženje AGIT – Antigewalt- und Interventionsteam (Antinasilni i interventni tim) nastalo je iz sinergije višedecenijskog iskustva u radu s mladima i visoko specijaliziranog znanja u oblasti antinasilnog i konfrontativnog resursnom treninga (AGT/KRT).<br/><br/>U kosmopolitskom gradu kao što je Beč, zaštita mladih i proaktivno suprotstavljanje nasilju su egzistencijalna nužnost. Nakon godina uspješnog rada u oblasti prevencije nasilja u bečkom prostoru, strukturno smo se reorganizovali kako bismo svoje provjerene metode mogli primijeniti još ciljanije i dalje dosežno. Naš rad vodi nepokolebljivi princip: Dobrobit i pozitivan razvoj mladih ljudi su na prvom mjestu.",
    team_subtitle: "Naš tim",
    person1_name: "Kübra Erik, BA",
    person1_role: "",
    person1_bio: "Obrazovna naučnica, socijalna pedagoginja i trenerica za antinasilje i resurse. Ima dugogodišnje iskustvo u radu s djecom i mladima u individualnim i grupnim postavkama, školskim razredima i radionicama. Pored toga pratila je mlade žene u teškim životnim situacijama i ima iskustvo u radu na slučajevima i u radu sa stručnjacima.",
    person1_email: "k.erik@verein-agit.at",
    person1_phone: "+43 660 6251500",
    person2_name: "Murat Percin, BA",
    person2_role: "",
    person2_bio: "Socijalni radnik i trener za antinasilje i resurse. Njegovo dugogodišnje iskustvo uključuje individualne i grupne treninge te izvanškolski rad s djecom i mladima. Osim toga radio je u Turskoj s mladima koji su došli u dodir s delinkventnim ponašanjem i kriminalom.",
    person2_email: "m.percin@verein-agit.at",
    person2_phone: "+43 699 10097285"
  },
  fa: {
    page_title: "تیم ما",
    hero_title: "درباره ما",
    hero_desc: "پشت AGIT تیمی متعهد با سال‌ها تجربه در زمینه پیشگیری از خشونت و کار اجتماعی قرار دارد.",
    team_intro: "پشت AGIT تیمی چندرشت‌ای قرار دارد که ایده‌آلیسم را با دقت علمی و عملی تلفیق می‌کند.<br/><br/>ما فقط متخصص نیستیم، ما همراهان راه، مدیران بحران و پل‌سازان هستیم. انجمن AGIT – Antigewalt- und Interventionsteam (تیم مبارزه با خشونت و مداخله) از هم‌افزایی دهه‌ها تجربه در کار با جوانان و تخصص بسیار بالا در آموزش ضدخشونت و آموزش منابع روبروشونده (AGT/KRT) به وجود آمده است.<br/><br/>در شهری جهانی مانند وین، حمایت از جوانان و مقابله فعال با خشونت یک ضرورت وجودی است. پس از سال‌ها کار موفقیت‌آمیز در زمینه پیشگیری از خشونت در منطقه وین، ساختار خود را به‌صورت بنیادی بازسازی کردیم تا بتوانیم روش‌های اثبات‌شده خود را هدفمندتر و گسترده‌تر به کار ببریم. عمل ما به اصولی تزلزل‌ناپذیر هدایت می‌شود: رفاه و توسعه مثبت جوانان در درجه اول است.",
    team_subtitle: "تیم ما",
    person1_name: "Kübra Erik, BA",
    person1_role: "",
    person1_bio: "دانشمند علوم تربیتی، مشاور اجتماعی-تربیتی و مربی ضدخشونت و منابع. او تجربه طولانی در کار با کودکان و نوجوانان در چارچوب‌های فردی و گروهی، کلاس‌های درس و کارگاه‌ها دارد. او همچنین زنان جوان در موقعیت‌های سخت زندگی را همراهی کرده و در زمینه مدیریت پرونده و کار با متخصصان تجربه دارد.",
    person1_email: "k.erik@verein-agit.at",
    person1_phone: "+43 660 6251500",
    person2_name: "Murat Percin, BA",
    person2_role: "",
    person2_bio: "مددکار اجتماعی و مربی ضدخشونت و منابع. تجربه طولانی او شامل آموزش‌های فردی و گروهی و کار با کودکان و نوجوانان خارج از مدرسه است. او همچنین در ترکیه با نوجوانانی که با رفتار جنون‌آمیز و جرم در تماس بوده‌اند کار کرده است.",
    person2_email: "m.percin@verein-agit.at",
    person2_phone: "+43 699 10097285"
  }
};

export default function TeamPage() {
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
          <a href="/">{lang === 'de' ? 'STARTSEITE' : lang === 'tr' ? 'ANA SAYFA' : lang === 'ar' ? 'الصفحة الرئيسية' : lang === 'ku' ? 'RÛPELA SEREKE' : lang === 'fa' ? 'صفحه اصلی' : 'POČETNA STRANICA'}</a>
          <a href="/angebote">{lang === 'de' ? 'ANGEBOTE' : lang === 'tr' ? 'TEKLİFLER' : lang === 'ar' ? 'العروض' : lang === 'ku' ? 'PÊŞNIYAR' : lang === 'fa' ? 'خدمات' : 'PONUDE'}</a>
          <a href="/haltung">{lang === 'de' ? 'HALTUNG' : lang === 'tr' ? 'TUTUM' : lang === 'ar' ? 'الموقف' : lang === 'ku' ? 'HELWEST' : lang === 'fa' ? 'موضع‌گیری' : 'STAV'}</a>
          <a href="/kontakt">{lang === 'de' ? 'KONTAKT' : lang === 'tr' ? 'İLETİŞİM' : lang === 'ar' ? 'اتصل بنا' : lang === 'ku' ? 'TÊKILÎ' : lang === 'fa' ? 'تماس' : 'KONTAKT'}</a>
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
          <a href="/kontakt" className="btn btn-primary">{lang === 'de' ? 'PROJEKT ANFRAGEN' : lang === 'tr' ? 'PROJE TALEP ET' : lang === 'ar' ? 'طلب مشروع' : lang === 'ku' ? 'PROJE BIXWAZE' : lang === 'fa' ? 'درخواست پروژه' : 'ZATRAŽI PROJEKAT'}</a>
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
          <p className="team-intro" dangerouslySetInnerHTML={{ __html: t.team_intro }} />

          <h2>{t.team_subtitle}</h2>

          <div className="team-grid">
            <div className="team-card">
              <div className="team-card-image">
                <img src="/kuebra.png" alt={t.person1_name} />
              </div>
              <div className="team-card-info">
                <h3>{t.person1_name}</h3>
                <p className="team-bio">{t.person1_bio}</p>
                <div className="team-contact">
                  <p><strong>E-Mail:</strong> <a href={`mailto:${t.person1_email}`}>{t.person1_email}</a></p>
                  <p><strong>Telefon:</strong> {t.person1_phone}</p>
                </div>
              </div>
            </div>

            <div className="team-card">
              <div className="team-card-image">
                <img src="/murat.png" alt={t.person2_name} />
              </div>
              <div className="team-card-info">
                <h3>{t.person2_name}</h3>
                <p className="team-bio">{t.person2_bio}</p>
                <div className="team-contact">
                  <p><strong>E-Mail:</strong> <a href={`mailto:${t.person2_email}`}>{t.person2_email}</a></p>
                  <p><strong>Mobil:</strong> {t.person2_phone}</p>
                </div>
              </div>
            </div>
          </div>
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
            <p className="footer-desc">{lang === 'de' ? 'Verein Antigewalt und Gewaltprävention' : lang === 'tr' ? 'Şiddet Karşıtı ve Şiddeti Önleme Derneği' : lang === 'ar' ? 'جمعية مكافحة العنف والوقاية منه' : lang === 'ku' ? 'Komeleya Dijî Şîdetê û Pêşîlêgirtinê' : lang === 'fa' ? 'انجمن مبارزه با خشونت و پیشگیری از خشونت' : 'Udruženje protiv nasilja i prevencije'}</p>
          </div>
          <div className="footer-contact">
            <h4>{lang === 'de' ? 'Kontakt' : lang === 'tr' ? 'İletişim' : lang === 'ar' ? 'اتصل' : lang === 'ku' ? 'Têkilî' : lang === 'fa' ? 'تماس' : 'Kontakt'}</h4>
            <p>Hallergasse 8/1/47, 1110 Wien, Österreich</p>
            <p>E-Mail: <a href="mailto:office@verein-agit.at">office@verein-agit.at</a></p>
          </div>
          <div className="footer-legal">
            <h4>{lang === 'de' ? 'Impressum' : lang === 'tr' ? 'Künye' : lang === 'ar' ? 'بصمة' : lang === 'ku' ? 'Nasname' : lang === 'fa' ? 'مشخصات نشر' : 'Impresum'}</h4>
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
