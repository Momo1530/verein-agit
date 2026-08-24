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
    leitbild_text: "AGIT'in çalışmaları bütünsel, sistemik bir yaklaşıma dayanır. Şiddeti izole olarak ele almıyor, tüm sosyal çevreyi işe dahil ediyoruz. Hedef gruplarımız bu nedenle üç temel alana ayrılır:<br/><br/><strong>Yakın sosyal çevre (Aile & Velayet sahipleri):</strong> Ebeveynler ve bakım veren kişiler, gerilimi azaltma sürecinde önemli dayanaklardır. Hedefli ebeveyn çalışmasıyla ebeveynlik becerilerini güçlendirir ve aile içi günlük yaşamda şiddetsiz bir iklimi destekleriz.<br/><br/><strong>Çocuklar, gençler ve genç yetişkinler:</strong> Çalışmamızın merkezinde şiddetten etkilenen, şiddete yatkın olan veya zor yaşam koşulları nedeniyle risk altında bulunan genç insanlar yer alır. Onları bulundukları yerden alır, öğrenilmiş davranış kalıplarını kırmaları ve kendi kaynaklarını harekete geçirmeleri konusunda destekleriz.<br/><br/><strong>Uzmanlar, kurumlar ve çoğaltıcılar:</strong> Okullar, çocuk ve gençlik yardım kurumları (Viyana'daki MA 11 gibi), gençlik çalışma kurumları, resmî kurumlar ve adalet için güçlü bir ortağız. Ayrıca eğitim ve ileri eğitimlerimiz, şiddet önleme ve kriz yönetimi alanlarında profesyonelleşmek isteyen öğretmenlere, sosyal hizmet uzmanlarına ve uzmanlara yöneliktir.",
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
    leitbild_text: "يعتمد عمل AGIT على نهج شامل ونظامي. نحن لا ننظر إلى العنف بمعزل عن غيره، بل نشرك البيئة الاجتماعية بأكملها. ولذلك تنقسم فئاتنا المستهدفة إلى ثلاثة مجالات أساسية:<br/><br/><strong>البيئة الاجتماعية القريبة (الأسرة وأصحاب حضانة الأطفال):</strong> يُعدّ الوالدان والأشخاص المرجعيون ركائز مهمة في عملية خفض التصعيد. من خلال العمل المستهدف مع الوالدين، نعزز الكفاءة التربوية ونعزز مناخًا خاليًا من العنف في الحياة الأسرية اليومية.<br/><br/><strong>الأطفال والشباب وصغار البالغين:</strong> في صميم عملنا يقف الشباب المتأثرون بالعنف، أو المستعدون له، أو المعرضون للخطر بسبب ظروف حياتية صعبة. نلتقي بهم حيث هم، وندعمهم في كسر أنماط السلوك المكتسبة وتفعيل مواردهم الخاصة.<br/><br/><strong>المهنيون والمؤسسات والمُضاعِفون:</strong> نحن شريك قوي للمدارس، وخدمات رعاية الأطفال والشباب (مثل MA 11 في فيينا)، ومؤسسات العمل مع الشباب، والسلطات، والقضاء. كما تتوجه دوراتنا التدريبية أيضًا إلى المعلمين والأخصائيين الاجتماعيين والمهنيين الراغبين في التخصص في مجال الوقاية من العنف وإدارة الأزمات.",
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
    leitbild_text: "Xebata AGIT li ser nêzîkatiyeke berfireh û sîstemîk dimîne. Em şîdetê bi tenê nabînin, lê tevahiya jîngeha civakî jî tê de dibînin. Ji ber vê yekê komên me yên armancê li sê warên sereke têne dabeşkirin:<br/><br/><strong>Dora civakî ya nêzîk (Malbat & xwediyên parastinê):</strong> Dayik-bav û kesên girêdayî stûnên girîng in di pêvajoya kêmkirina tansiyonê de. Bi rêya xebata armancî ya bi dayik-bavan re, em jêhatîbûna perwerdehiyê xurt dikin û di jiyana malbatî ya rojane de hewayeke bêşîdet pêş dixin.<br/><br/><strong>Zarok, ciwan û mezinên ciwan:</strong> Di navenda xebata me de ciwan in ku ji şîdetê bandordar in, amade ye şîdetê bikin an jî ji ber rewşên jiyanê yên dijwar di bin xeterê de ne. Em wan li cihê ku lê ne digirin û piştgirî dikin ku wan şabûnên tevgere yên fêrbûyî bişkînin û çavkaniyên xwe bikar bînin.<br/><br/><strong>Pispor, sazî û belavkar:</strong> Em ji bo dibistanan, alîkariya zarok û ciwanan (mîna MA 11 li Viyanayê), saziyên xebata ciwanan, hikumet û dadweriyê hevalbendeke xurt in. Her wiha perwerdehî û perwerdehiya me ya berdewam jî ji bo mamoste, karkerên civakî û pisporan e ku dixwazin di warê pêşîlêgirtina şîdetê û rêvebirina krîzê de xwe pîşeyî bikin.",
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
    leitbild_text: "Rad organizacije AGIT temelji se na holističkom, sistemskom pristupu. Nasilje ne posmatramo izolovano, već uključujemo cijelo društveno okruženje. Naše ciljne grupe se stoga dijele u tri osnovna područja:<br/><br/><strong>Blisko društveno okruženje (porodica i staratelji):</strong> Roditelji i osobe od kojih osoba ovisi važni su stupovi u procesu deeskalacije. Ciljanim radom s roditeljima jačamo roditeljske kompetencije i promičemo nenasilnu atmosferu u svakodnevnom porodičnom životu.<br/><br/><strong>Deca, mladi i mladi odrasli:</strong> U centru našeg rada su mladi ljudi koji su pogođeni nasiljem, spremni na nasilje ili ugroženi teškim životnim okolnostima. Dolazimo im tamo gdje jesu i podržavamo ih u prekidanju naučenih obrazaca ponašanja i aktiviranju vlastitih resursa.<br/><br/><strong>Stručnjaci, institucije i multiplikatori:</strong> Snažan smo partner školama, ustanovama za djecu i mlade (poput MA 11 u Beču), ustanovama za rad s mladima, vlastima i pravosuđu. Osim toga, naše obuke i usavršavanja namijenjene su i učiteljima, socijalnim radnicima i stručnjacima koji se žele profesionalizirati u području prevencije nasilja i kriznog menadžmenta.",
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
    leitbild_text: "کار AGIT بر پایه یک رویکرد جامع و نظام‌مند استوار است. ما خشونت را به‌صورت مجزا بررسی نمی‌کنیم، بلکه کل محیط اجتماعی را در نظر می‌گیریم. بنابراین گروه‌های هدف ما به سه حوزه اصلی تقسیم می‌شوند:<br/><br/><strong>محیط اجتماعی نزدیک (خانواده و سرپرستان):</strong> والدین و افراد مرجع ستون‌های مهمی در فرآیند کاهش تنش هستند. از طریق کار هدفمند با والدین، ما توانمندی تربیتی را تقویت و فضایی عاری از خشونت را در زندگی روزمره خانوادگی ترویج می‌کنیم.<br/><br/><strong>کودکان، نوجوانان و جوانان بزرگسال:</strong> در مرکز کار ما جوانانی قرار دارند که تحت تأثیر خشونت قرار گرفته‌اند، مستعد خشونت هستند یا به دلیل شرایط دشوار زندگی در معرض خطرند. ما آن‌ها را در جایی که هستند ملاقات می‌کنیم و در شکستن الگوهای رفتاری آموخته‌شده و فعال‌سازی منابع شخصی به آن‌ها کمک می‌کنیم.<br/><br/><strong>متخصصان، مؤسسات و ضریب‌دهندگان:</strong> ما شریکی قدرتمند برای مدارس، خدمات رفاه کودکان و نوجوانان (مانند MA 11 در وین)، مؤسسات کار با جوانان، مقامات و قوه قضائیه هستیم. علاوه بر این، دوره‌های آموزشی و تخصصی ما برای معلمان، مددکاران اجتماعی و متخصصانی است که می‌خواهند در زمینه پیشگیری از خشونت و مدیریت بحران حرفه‌ای شوند.",
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
            <p>Hallergasse 8/1/47, 1110 Wien, Österreich</p>
            <p>E-Mail: <a href="mailto:office@verein-agit.at">office@verein-agit.at</a></p>
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
