"use client";
import { useState } from 'react';

const translations = {
  de: {
    page_title: "Unsere Haltung",
    hero_title: "Unsere Haltung",
    hero_desc: "Gewaltprävention ist für uns mehr als ein Workshop – sie ist eine Haltung, die im Alltag verankert sein muss.",
    leitbild_title: "Unser Leitbild",
    leitbild_text: "Der Verein AGIT – Antigewalt und Gewaltprävention steht für eine Kultur der Achtsamkeit, des Respekts und der gewaltfreien Konfliktlösung. Wir sind überzeugt: Gewalt ist kein Schicksal, sondern ein erlernbares Verhalten – und kann durch gezielte Prävention und Intervention verändert werden. Unser Ansatz ist ganzheitlich, wertschätzend und partizipativ. Wir arbeiten mit Kindern, Jugendlichen, Erwachsenen, Familien und Institutionen zusammen, um nachhaltige Veränderungen zu bewirken.",
    values_title: "Unsere Werte",
    values: [
      { title: "Respekt", desc: "Jeder Mensch hat das Recht auf ein gewaltfreies Umfeld. Wir begegnen allen mit Würde und ohne Vorurteile." },
      { title: "Partizipation", desc: "Betroffene werden in den Prozess eingebunden. Veränderung gelingt nur gemeinsam." },
      { title: "Professionalität", desc: "Unsere Arbeit basiert auf fundierten Methoden, aktueller Forschung und langjähriger Erfahrung." },
      { title: "Nachhaltigkeit", desc: "Kurze Interventionen sind wertvoll – nachhaltige Veränderung braucht Begleitung und Kontinuität." },
      { title: "Kultursensibilität", desc: "Wir arbeiten mehrsprachig und kultursensibel. Gewaltprävention muss alle Menschen erreichen." }
    ],
    approach_title: "Unser Ansatz",
    approach_text: "AGIT ist ein eigenständiges Angebot des Vereins Cult – Jugendarbeit wirkt. Wir verstehen Gewaltprävention als Querschnittsaufgabe, die in pädagogischen, sozialen und institutionellen Kontexten verankert werden muss. Unsere Angebote sind niederschwellig, lebensweltorientiert und richten sich nach dem konkreten Bedarf der Zielgruppe. Wir arbeiten präventiv, intervenierend und stärkend – je nachdem, was die Situation erfordert."
  },
  tr: {
    page_title: "Tutumumuz",
    hero_title: "Tutumumuz",
    hero_desc: "Şiddet önleme bizim için bir atölyeden daha fazlasıdır – günlük hayata yerleşmesi gereken bir tutumdur.",
    leitbild_title: "İlkelerimiz",
    leitbild_text: "AGIT Derneği – Şiddet Karşıtı ve Şiddeti Önleme, dikkat, saygı ve şiddetsiz çatışma çözümü kültürünü temsil eder. Şiddetin bir kader değil, öğrenilebilir bir davranış olduğuna ve hedefli önleme ve müdahale ile değiştirilebileceğine inanıyoruz.",
    values_title: "Değerlerimiz",
    values: [
      { title: "Saygı", desc: "Her insanın şiddetsiz bir ortam hakkı vardır. Herkese saygı ve önyargısız yaklaşırız." },
      { title: "Katılım", desc: "Etkilenenler sürece dahil edilir. Değişim ancak birlikte başarılabilir." },
      { title: "Profesyonellik", desc: "Çalışmalarımız sağlam yöntemlere, güncel araştırmalara ve uzun yıllara dayanan deneyime dayanır." },
      { title: "Sürdürülebilirlik", desc: "Kısa müdahaleler değerlidir – sürdürülebilir değişim rehberlik ve süreklilik gerektirir." },
      { title: "Kültürel Duyarlılık", desc: "Çok dilli ve kültürel duyarlılıkla çalışıyoruz. Şiddet önleme herkese ulaşmalıdır." }
    ],
    approach_title: "Yaklaşımımız",
    approach_text: "AGIT, Cult – Gençlik Çalışmaları İşe Yarar derneğinin bağımsız bir hizmetidir. Şiddet önlemeyi, pedagojik, sosyal ve kurumsal bağlamlarda yerleştirilmesi gereken kesitsel bir görev olarak görüyoruz."
  },
  ar: {
    page_title: "موقفنا",
    hero_title: "موقفنا",
    hero_desc: "الوقاية من العنف هي بالنسبة لنا أكثر من مجرد ورشة عمل - إنها موقف يجب أن يكون راسخًا في الحياة اليومية.",
    leitbild_title: "مبادئنا التوجيهية",
    leitbild_text: "تمثل جمعية AGIT - مكافحة العنف والوقاية منه ثقافة اليقظة والاحترام وحل النزاعات اللاعنفية. نحن مقتنعون بأن العنف ليس قدرًا، بل سلوك مكتسب يمكن تغييره من خلال الوقاية والتدخل المستهدفين.",
    values_title: "قيمنا",
    values: [
      { title: "الاحترام", desc: "لكل إنسان الحق في بيئة خالية من العنف. نتعامل مع الجميع بكرامة وبدون تحيز." },
      { title: "المشاركة", desc: "يتم إشراك المتأثرين في العملية. التغيير لا ينجح إلا معًا." },
      { title: "الاحترافية", desc: "يعتمد عملنا على أسس متينة وأبحاث حديثة وخبرة طويلة." },
      { title: "الاستدامة", desc: "التدخلات القصيرة قيمة - التغيير المستدام يحتاج إلى مرافقة واستمرارية." },
      { title: "الحساسية الثقافية", desc: "نعمل بعدة لغات وبحساسية ثقافية. يجب أن تصل الوقاية من العنف إلى الجميع." }
    ],
    approach_title: "نهجنا",
    approach_text: "AGIT هي خدمة مستقلة لجمعية Cult - العمل الشبابي فعال. نحن نعتبر الوقاية من العنف مهمة شاملة يجب ترسيخها في السياقات التربوية والاجتماعية والمؤسسية."
  },
  ku: {
    page_title: "Helwesta Me",
    hero_title: "Helwesta Me",
    hero_desc: "Pêşîlêgirtina şîdetê ji bo me ji atolyeyekê wêdetir e – ew helwestek e ku divê di jiyana rojane de were bicîhkirin.",
    leitbild_title: "Rêbernameya Me",
    leitbild_text: "Komeleya AGIT – Dijî Şîdetê û Pêşîlêgirtinê ji bo çanda hişyarî, rêz û çareserkirina pevçûnan a bêşîdet radiweste. Em bawer dikin ku şîdet ne çarenivîs e, lê tevgerek fêrbûyî ye û bi rêya pêşîlêgirtin û destêwerdana armanckirî dikare were guhertin.",
    values_title: "Nirxên Me",
    values: [
      { title: "Rêz", desc: "Her mirovî mafê jîngeheke bêşîdet heye. Em bi her kesî re bi qedr û bêpêşbiryarî tevdigerin." },
      { title: "Beşdarî", desc: "Kesên bandordar di pêvajoyê de têne tevlîkirin. Guherîn tenê bi hev re pêk tê." },
      { title: "Pîşeyîtî", desc: "Xebata me li ser rêbazên zexm, lêkolînên nûjen û ezmûna salan e." },
      { title: "Domdarî", desc: "Destêwerdanên kurt bi qîmet in – guherîna domdar hevalbendî û berdewamiyê dixwaze." },
      { title: "Hesasiyeta Çandî", desc: "Em bi pirzimanî û hesasiyeta çandî dixebitin. Pêşîlêgirtina şîdetê divê bigihêje her kesî." }
    ],
    approach_title: "Nêzîkatiya Me",
    approach_text: "AGIT karûbareke serbixwe ya komeleya Cult – Xebatên Ciwanan Bibandor e. Em pêşîlêgirtina şîdetê wekî karekî qutkirî dibînin ku divê di çarçoveyên pedagojîk, civakî û sazî de were bicîhkirin."
  },
  bks: {
    page_title: "Naš stav",
    hero_title: "Naš stav",
    hero_desc: "Prevencija nasilja je za nas više od radionice – to je stav koji mora biti ukorijenjen u svakodnevnom životu.",
    leitbild_title: "Naše načelo",
    leitbild_text: "Udruženje AGIT – Protiv nasilja i prevencije zastupa kulturu pažnje, poštovanja i nenasilnog rješavanja sukoba. Uvjereni smo da nasilje nije sudbina, već naučeno ponašanje koje se može promijeniti ciljanom prevencijom i intervencijom.",
    values_title: "Naše vrijednosti",
    values: [
      { title: "Poštovanje", desc: "Svaka osoba ima pravo na okruženje bez nasilja. Svima pristupamo s dostojanstvom i bez predrasuda." },
      { title: "Participacija", desc: "Pogođene osobe se uključuju u proces. Promjena uspijeva samo zajedno." },
      { title: "Profesionalnost", desc: "Naš rad se temelji na provjerenim metodama, aktuelnim istraživanjima i dugogodišnjem iskustvu." },
      { title: "Održivost", desc: "Kratke intervencije su vrijedne – održiva promjena zahtijeva podršku i kontinuitet." },
      { title: "Kulturna osjetljivost", desc: "Radimo višejezično i kulturno osjetljivo. Prevencija nasilja mora doseći sve ljude." }
    ],
    approach_title: "Naš pristup",
    approach_text: "AGIT je samostalna usluga udruženja Cult – Rad sa mladima djeluje. Prevenciju nasilja vidimo kao poprečni zadatak koji mora biti ukorijenjen u pedagoškim, socijalnim i institucionalnim kontekstima."
  }
};

export default function HaltungPage() {
  const [lang, setLang] = useState('de');
  const t = translations[lang] || translations.de;
  const isRtl = lang === 'ar';

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
          <a href="/angebote">{lang === 'de' ? 'ANGEBOTE' : lang === 'tr' ? 'TEKLİFLER' : lang === 'ar' ? 'العروض' : lang === 'ku' ? 'PÊŞNIYAR' : 'PONUDE'}</a>
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
          <div className="content-block">
            <h2>{t.leitbild_title}</h2>
            <p>{t.leitbild_text}</p>
          </div>

          <div className="content-block">
            <h2>{t.values_title}</h2>
            <div className="values-grid">
              {t.values.map((v, i) => (
                <div key={i} className="value-card">
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="content-block">
            <h2>{t.approach_title}</h2>
            <p>{t.approach_text}</p>
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
            <p className="footer-desc">{lang === 'de' ? 'Verein Antigewalt und Gewaltprävention' : lang === 'tr' ? 'Şiddet Karşıtı ve Şiddeti Önleme Derneği' : lang === 'ar' ? 'جمعية مكافحة العنف والوقاية منه' : lang === 'ku' ? 'Komeleya Dijî Şîdetê û Pêşîlêgirtinê' : 'Udruženje protiv nasilja i prevencije'}</p>
          </div>
          <div className="footer-contact">
            <h4>{lang === 'de' ? 'Kontakt' : lang === 'tr' ? 'İletişim' : lang === 'ar' ? 'اتصل' : lang === 'ku' ? 'Têkilî' : 'Kontakt'}</h4>
            <p>Gerichtsgasse 1<br/>1230 Wien<br/>Österreich</p>
            <p>Telefon: +43/1/524 88 73<br/>E-Mail: <a href="mailto:office@verein-agit.at">office@verein-agit.at</a></p>
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
