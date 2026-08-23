"use client";
import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';

const translations = {
  de: {
    page_title: "Unsere Haltung",
    hero_title: "Unsere Haltung",
    hero_desc: "Gewaltprävention ist für uns mehr als ein Workshop – sie ist eine Haltung, die im Alltag verankert sein muss.",
    leitbild_title: "Unser Leitbild",
    leitbild_text: "Die Arbeit von AGIT basiert auf einem ganzheitlichen, systemischen Ansatz. Wir betrachten Gewalt nicht isoliert, sondern beziehen das gesamte soziale Umfeld mit ein. Unsere Zielgruppen gliedern sich daher in drei wesentliche Bereiche:<br/><br/><strong>Der soziale Nahraum (Familie & Erziehungsberechtigte):</strong> Eltern und Bezugspersonen sind wichtige Säulen im Deeskalationsprozess. Durch gezielte Elternarbeit stärken wir die Erziehungskompetenz und fördern ein gewaltfreies Klima im familiären Alltag.<br/><br/><strong>Kinder, Jugendliche und junge Erwachsene:</strong> Im Zentrum unserer Arbeit stehen junge Menschen, die von Gewalt betroffen, gewaltbereit oder durch schwierige Lebensumstände gefährdet sind. Wir holen sie dort ab, wo sie stehen, und unterstützen sie dabei, erlernte Verhaltensmuster zu durchbrechen und eigene Ressourcen zu aktivieren.<br/><br/><strong>Fachkräfte, Institutionen und Multiplikator:innen:</strong> Wir sind starker Partner für Schulen, die Kinder- und Jugendhilfe (wie die MA 11 in Wien), Jugendarbeitseinrichtungen, Behörden und die Justiz. Zudem richten sich unsere Aus- und Weiterbildungen an Lehrer:innen, Sozialarbeiter:innen und Fachkräfte, die sich im Bereich der Gewaltprävention und des Krisenmanagements professionalisieren möchten.",
    values_title: "Unsere Werte",
    values: [
      { title: "Respekt", desc: "Jeder Mensch hat das Recht auf ein gewaltfreies Umfeld. Wir begegnen allen mit Würde und ohne Vorurteile." },
      { title: "Partizipation", desc: "Betroffene werden in den Prozess eingebunden. Veränderung gelingt nur gemeinsam." },
      { title: "Professionalität", desc: "Unsere Arbeit basiert auf fundierten Methoden, aktueller Forschung und langjähriger Erfahrung." },
      { title: "Nachhaltigkeit", desc: "Kurze Interventionen sind wertvoll – nachhaltige Veränderung braucht Begleitung und Kontinuität." },
      { title: "Kultursensibilität", desc: "Wir arbeiten mehrsprachig und kultursensibel. Gewaltprävention muss alle Menschen erreichen." },
      { title: "Individualität", desc: "Jeder Mensch und jede Situation ist anders. Wir richten unsere Begleitung an individuellen Bedürfnissen, Ressourcen und Lebensrealitäten aus." }
    ],
    approach_title: "Unser Ansatz",
    approach_text: "AGIT versteht Gewaltprävention als Querschnittsaufgabe, die in pädagogischen, sozialen und institutionellen Kontexten verankert werden muss. Wir verstehen Gewaltprävention als Querschnittsaufgabe, die in pädagogischen, sozialen und institutionellen Kontexten verankert werden muss. Unsere Angebote sind niederschwellig, lebensweltorientiert und richten sich nach dem konkreten Bedarf der Zielgruppe. Wir arbeiten präventiv, intervenierend und stärkend – je nachdem, was die Situation erfordert."
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
      { title: "Kültürel Duyarlılık", desc: "Çok dilli ve kültürel duyarlılıkla çalışıyoruz. Şiddet önleme herkese ulaşmalıdır." },
      { title: "Bireysellik", desc: "Her insan ve her durum farklıdır. Rehberliğimizi bireysel ihtiyaçlara, kaynaklara ve yaşam gerçeklerine göre düzenleriz." }
    ],
    approach_title: "Yaklaşımımız",
    approach_text: "AGIT, şiddet önlemeyi, pedagojik, sosyal ve kurumsal bağlamlarda yerleştirilmesi gereken kesitsel bir görev olarak görüyoruz. Şiddet önlemeyi, pedagojik, sosyal ve kurumsal bağlamlarda yerleştirilmesi gereken kesitsel bir görev olarak görüyoruz."
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
      { title: "الحساسية الثقافية", desc: "نعمل بعدة لغات وبحساسية ثقافية. يجب أن تصل الوقاية من العنف إلى الجميع." },
      { title: "الفردية", desc: "كل إنسان وكل موقف مختلف. نخصص مرافقتنا وفقًا للاحتياجات والموارد والواقع المعيشي الفردي." }
    ],
    approach_title: "نهجنا",
    approach_text: "AGIT تعتبر الوقاية من العنف مهمة شاملة يجب ترسيخها في السياقات التربوية والاجتماعية والمؤسسية. نحن نعتبر الوقاية من العنف مهمة شاملة يجب ترسيخها في السياقات التربوية والاجتماعية والمؤسسية."
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
      { title: "Hesasiyeta Çandî", desc: "Em bi pirzimanî û hesasiyeta çandî dixebitin. Pêşîlêgirtina şîdetê divê bigihêje her kesî." },
      { title: "Takîtî", desc: "Her mirov û her rewş cudatir e. Em rêberiya xwe li gorî hewce, çavkanî û rastiyên jiyanê yên kesane birêxistin dikin." }
    ],
    approach_title: "Nêzîkatiya Me",
    approach_text: "AGIT pêşîlêgirtina şîdetê wekî karekî qutkirî dibîne ku divê di çarçoveyên pedagojîk, civakî û sazî de were bicîhkirin. Em pêşîlêgirtina şîdetê wekî karekî qutkirî dibînin ku divê di çarçoveyên pedagojîk, civakî û sazî de were bicîhkirin."
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
      { title: "Kulturna osjetljivost", desc: "Radimo višejezično i kulturno osjetljivo. Prevencija nasilja mora doseći sve ljude." },
      { title: "Individualnost", desc: "Svaka osoba i svaka situacija je drugačija. Našu podršku prilagođavamo individualnim potrebama, resursima i životnim okolnostima." }
    ],
    approach_title: "Naš pristup",
    approach_text: "AGIT prevenciju nasilja vidi kao poprečni zadatak koji mora biti ukorijenjen u pedagoškim, socijalnim i institucionalnim kontekstima. Prevenciju nasilja vidimo kao poprečni zadatak koji mora biti ukorijenjen u pedagoškim, socijalnim i institucionalnim kontekstima."
  },
  fa: {
    page_title: "موضع ما",
    hero_title: "موضع ما",
    hero_desc: "پیشگیری از خشونت برای ما فراتر از یک کارگاه است – این یک موضع است که باید در زندگی روزمره ریشه‌دار باشد.",
    leitbild_title: "اصول راهنمای ما",
    leitbild_text: "انجمن AGIT – مبارزه با خشونت و پیشگیری از آن، نماینده فرهنگ هوشیاری، احترام و حل مسالمت‌آمیز تعارضات است. ما متقاعد شده‌ایم که خشونت یک سرنوشت نیست، بلکه رفتاری اکتسابی است که می‌توان از طریق پیشگیری و مداخله هدفمند آن را تغییر داد.",
    values_title: "ارزش‌های ما",
    values: [
      { title: "احترام", desc: "هر انسانی حق دارد در محیطی عاری از خشونت زندگی کند. ما با همه با کرامت و بدون پیش‌داوری رفتار می‌کنیم." },
      { title: "مشارکت", desc: "افراد متأثر در فرآیند مشارکت داده می‌شوند. تغییر تنها با همکاری موفق می‌شود." },
      { title: "حرفه‌ای‌گری", desc: "کار ما بر پایه روش‌های مستحکم، تحقیقات به‌روز و تجربه چندین ساله استوار است." },
      { title: "پایداری", desc: "مداخلات کوتاه ارزشمند هستند – تغییر پایدار نیاز به همراهی و تداوم دارد." },
      { title: "حساسیت فرهنگی", desc: "ما به چندین زبان و با حساسیت فرهنگی کار می‌کنیم. پیشگیری از خشونت باید به همه مردم برسد." },
      { title: "فردیت", desc: "هر انسان و هر موقعیتی متفاوت است. ما همراهی خود را بر اساس نیازها، منابع و واقعیت‌های زندگی فردی تنظیم می‌کنیم." }
    ],
    approach_title: "رویکرد ما",
    approach_text: "AGIT پیشگیری از خشونت را یک وظیفه میان‌بخشی می‌داند که باید در زمینه‌های آموزشی، اجتماعی و نهادی ریشه‌دار شود. ما پیشگیری از خشونت را یک وظیفه میان‌بخشی می‌دانیم که باید در زمینه‌های آموزشی، اجتماعی و نهادی ریشه‌دار شود."
  }
};

export default function HaltungPage() {
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
          <div className="content-block">
            <h2>{t.leitbild_title}</h2>
            <p dangerouslySetInnerHTML={{ __html: t.leitbild_text }} />
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
            <p className="footer-desc">{lang === 'de' ? 'Verein Antigewalt und Gewaltprävention' : lang === 'tr' ? 'Şiddet Karşıtı ve Şiddeti Önleme Derneği' : lang === 'ar' ? 'جمعية مكافحة العنف والوقاية منه' : lang === 'ku' ? 'Komeleya Dijî Şîdetê û Pêşîlêgirtinê' : lang === 'bks' ? 'Udruženje protiv nasilja i prevencije' : 'انجمن مبارزه با خشونت و پیشگیری'}</p>
          </div>
          <div className="footer-contact">
            <h4>{lang === 'de' ? 'Kontakt' : lang === 'tr' ? 'İletişim' : lang === 'ar' ? 'اتصل' : lang === 'ku' ? 'Têkilî' : lang === 'bks' ? 'Kontakt' : 'تماس'}</h4>
            <p>Gerichtsgasse 1<br/>1230 Wien<br/>Österreich</p>
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
