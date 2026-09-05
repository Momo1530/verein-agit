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
    section3_text: "<strong>Netzwerk- und Kooperationsarbeit:</strong> Aktiver Austausch und enge Zusammenarbeit mit Systempartnern.<br/><strong>Öffentlichkeitsarbeit & Konzeptentwicklung:</strong> Sensibilisierung der breiten Öffentlichkeit für Gewaltfreiheit und Zivilcourage sowie die wissenschaftlich begleitete Weiterentwicklung innovativer Interventionsmethoden.",
    cta_title: "Sie haben ein konkretes Anliegen?",
    cta_text: "Vereinbaren Sie ein unverbindliches Vorgespräch mit uns.",
    cta_btn: "Jetzt anfragen →",
    back_btn: "← Zurück zur Startseite"
  },
  tr: {
    page_title: "Teklifler",
    hero_title: "Tekliflerimiz",
    hero_desc: "Şiddetin karmaşık olgusuyla, kalıcı bir değişim sağlamak için birbiriyle iç içe geçmiş üç düzeyde mücadele ediyoruz:",
    section1_title: "Mikro Düzey: Bireyle Doğrudan Çalışma",
    section1_text: "<strong>Şiddet Karşıtı Bireysel Eğitim (AGIT):</strong> Saldırganlıkların bireysel olarak işlenmesi, davranış değişikliği ve kişisel kaynakların harekete geçirilmesi için yoğun odaklı bireysel çalışma.<br/><strong>Grup Eğitimleri & Atölyeler:</strong> Gruplarda veya okul sınıflarında doğrudan kolektif sosyal öğrenme, gerilimi azaltma stratejilerinin öğrenilmesi ve sosyal becerilerin güçlendirilmesi.<br/><strong>Danışmanlık, Rehberlik & Bakım:</strong> Gençlere akut kriz durumlarında ve kritik yaşam aşamalarında sürekli, güvene dayalı destek.",
    section2_title: "Mezzo Düzey: Yakın Sosyal Çevrenin Güçlendirilmesi",
    section2_text: "<strong>Ebeveyn Çalışması:</strong> Ebeveynlik becerilerini güçlendirmek ve aile içinde gerilimi azaltmak için ebeveynlere yönelik eğitimler ve yoğun rehberlik.<br/><strong>Yardımcı Konferansları:</strong> Gencin en iyi şekilde desteklenmesi için profesyonel ağlarda vakaya özgü, disiplinlerarası koordinasyon.<br/><strong>İleri Eğitimler & Seminerler:</strong> Şiddet ve krizlerle başa çıkmada profesyonelleşme için öğretmenlere, sosyal hizmet uzmanlarına ve çoğaltıcılara yönelik alana özgü atölyeler.",
    section3_title: "Makro Düzey: Toplum ve Yapı Geliştirme",
    section3_text: "<strong>Ağ ve İşbirliği Çalışması:</strong> Sistem ortaklarıyla aktif alışveriş ve yakın işbirliği.<br/><strong>Halkla İlişkiler & Konsept Geliştirme:</strong> Geniş kamuoyunun şiddetsizlik ve sivil cesaret konusunda duyarlılaştırılması ile yenilikçi müdahale yöntemlerinin bilimsel eşlikte geliştirilmesi.",
    cta_title: "Somut bir talebiniz mi var?",
    cta_text: "Bizimle bağlayıcı olmayan bir ön görüşme ayarlayın.",
    cta_btn: "Şimdi talep et →",
    back_btn: "← Ana sayfaya dön"
  },
  ar: {
    page_title: "العروض",
    hero_title: "عروضنا",
    hero_desc: "نواجه ظاهرة العنف المعقدة على ثلاثة مستويات متشابكة، لإحداث تغيير مستدام:",
    section1_title: "المستوى الجزئي: العمل المباشر مع الفرد",
    section1_text: "<strong>التدريب الفردي لمكافحة العنف (AGIT):</strong> عمل فردي عالي التركيز للمعالجة الفردية للعدوانية، وتغيير السلوك، وتفعيل الموارد الشخصية.<br/><strong>تدريبات جماعية وورش عمل:</strong> تعلم اجتماعي جماعي، وتعلم استراتيجيات خفض التصعيد، وتعزيز المهارات الاجتماعية مباشرة في المجموعات أو الصفوف الدراسية.<br/><strong>الاستشارة والمرافقة والرعاية:</strong> دعم مستمر وموثوق للشباب في حالات الأزمات الحادة ومراحل الحياة الحرجة.",
    section2_title: "المستوى المتوسط: تعزيز البيئة الاجتماعية القريبة",
    section2_text: "<strong>العمل مع الوالدين:</strong> دورات تدريبية ومرافقة مكثفة للوالدين لتعزيز الكفاءة التربوية وخفض التصعيد داخل الأسرة.<br/><strong>مؤتمرات المساعدين:</strong> تنسيق متعدد التخصصات ومرتبط بالحالة في الشبكات المهنية لدعم الشاب على النحو الأمثل.<br/><strong>دورات التدريب والتأهيل:</strong> ورش عمل متخصصة للمعلمين والأخصائيين الاجتماعيين والمُضاعِفين للتخصص في التعامل مع العنف والأزمات.",
    section3_title: "المستوى الكلي: المجتمع وتطوير الهياكل",
    section3_text: "<strong>العمل الشبكي والتعاوني:</strong> تبادل نشط وتعاون وثيق مع الشركاء في النظام.<br/><strong>العلاقات العامة وتطوير المفاهيم:</strong> توعية الجمهور العام باللاعنف والشجاعة المدنية، فضلاً عن التطوير المستمر لأساليب التدخل المبتكرة بمرافقة علمية.",
    cta_title: "هل لديك طلب محدد؟",
    cta_text: "حدد موعدًا لاستشارة أولية غير ملزمة معنا.",
    cta_btn: "اطلب الآن ←",
    back_btn: "← العودة إلى الصفحة الرئيسية"
  },
  ku: {
    page_title: "Pêşniyar",
    hero_title: "Pêşniyarên Me",
    hero_desc: "Em li dijî fenomêna tevlihev a şîdetê li ser sê astên bi hev re girêdayî tevdigerin, da ku guherîneke domdar pêk bîne:",
    section1_title: "Asta Mîkro: Xebata Rasterast Bi Kesî Re",
    section1_text: "<strong>Perwerdeya Kesane ya Dijî Şîdetê (AGIT):</strong> Xebata kesane a pir-fokus ji bo pêvajokirina kesane ya êrîşkariyan, guherîna tevgerê û aktîvkirina çavkaniyên kesane.<br/><strong>Perwerdeyên Komî & Atolye:</strong> Fêrbûna civakî ya kolektîf, fêrbûna stratejiyên kêmkirina tansiyonê û xurtkirina jêhatîbûnên civakî rasterast di koman an polên dibistanê de.<br/><strong>Şêwirmendî, Rêberî & Lênihêrîn:</strong> Piştevaniya berdewam û bi bawerî ji bo ciwanan di rewşên krîzê yên akût û qonaxên jiyanê yên krîtîk de.",
    section2_title: "Asta Mezzo: Xurtkirina Dora Civakî ya Nêzîk",
    section2_text: "<strong>Xebata Bi Dayik-Bavan Re:</strong> Perwerdehî û rêberiya berfireh a dayik-bavan ji bo xurtkirina jêhatîbûna perwerdehiyê û kêmkirina tansiyonê di nav malbatê de.<br/><strong>Konferansên Alîkaran:</strong> Hevrêzkirina doz-girêdayî û disîplîn-navborî di torên pîşeyî de ji bo piştevaniya baştirîn a ciwan.<br/><strong>Perwerdehiyên Pêşketî & Semîner:</strong> Atolyeyên taybetî-warîn ji bo mamoste, karkerên civakî û belavkaran ji bo pîşeyîbûnê di rûbirûbûna şîdet û krîzan de.",
    section3_title: "Asta Makro: Civak û Pêşxistina Struktûran",
    section3_text: "<strong>Xebata Torê û Hevkariyê:</strong> Dîlberdana çalak û hevkariya nêzîk bi hevparên sîstemê re.<br/><strong>Xebata Giştî & Pêşxistina Konseptan:</strong> Hişyarkirina giştiya berfireh ji bo bêşîdetî û cesareta sivîl, herwiha pêşxistina berdewam a rêbazên destêwerdanê yên nûjen bi hevkarîya zanistî.",
    cta_title: "Xwestekeke we ya somut heye?",
    cta_text: "Bi me re hevdîtineke pêşîn a bêpêbend saz bikin.",
    cta_btn: "Niha bixwaze →",
    back_btn: "← Vegere rûpela sereke"
  },
  bks: {
    page_title: "Ponude",
    hero_title: "Naše ponude",
    hero_desc: "Kompleksnom fenomenu nasilja prilazimo na tri međusobno isprepletane razine kako bismo postigli održivu promjenu:",
    section1_title: "Mikro-razina: Izravni rad s pojedincem",
    section1_text: "<strong>Antinasični individualni trening (AGIT):</strong> Visoko fokusirani individualni rad za individualnu obradu agresija, promjenu ponašanja i aktiviranje osobnih resursa.<br/><strong>Grupni treninzi i radionice:</strong> Kolektivno socijalno učenje, učenje strategija deeskalacije i jačanje socijalnih kompetencija izravno u grupama ili školskim razredima.<br/><strong>Savjetovanje, pratnja i skrb:</strong> Kontinuirana, pouzdana podrška mladima u akutnim kriznim situacijama i kritičnim životnim fazama.",
    section2_title: "Mezzo-razina: Jačanje bliskog društvenog okruženja",
    section2_text: "<strong>Rad s roditeljima:</strong> Obuke i intenzivna pratnja roditelja za jačanje roditeljskih kompetencija i deeskalaciju u porodičnom okruženju.<br/><strong>Konferencije pomagača:</strong> Slučajno orijentirana, interdisciplinarna koordinacija u profesionalnim mrežama za optimalnu podršku mladima.<br/><strong>Obuke i seminari:</strong> Stručne radionice za učitelje, socijalne radnike i multiplikatore za profesionalizaciju u suočavanju s nasiljem i krizama.",
    section3_title: "Makro-razina: Društvo i razvoj struktura",
    section3_text: "<strong>Rad u mreži i suradnji:</strong> Aktivna razmjena i uska suradnja sa sistemskim partnerima.<br/><strong>Rad s javnošću i razvoj koncepata:</strong> Senzibilizacija šire javnosti za nenasilje i građansku hrabrost te znanstveno praćen daljnji razvoj inovativnih metoda intervencije.",
    cta_title: "Imate konkretan zahtjev?",
    cta_text: "Dogovorite neobavezujući preliminarni razgovor s nama.",
    cta_btn: "Zatražite sada →",
    back_btn: "← Nazad na početnu stranicu"
  },
  fa: {
    page_title: "پیشنهادات",
    hero_title: "پیشنهادات ما",
    hero_desc: "ما پدیده پیچیده خشونت را در سه سطح درهم‌تنیده مواجه می‌کنیم تا تغییری پایدار ایجاد کنیم:",
    section1_title: "سطح خرد: کار مستقیم با فرد",
    section1_text: "<strong>آموزش فردی مبارزه با خشونت (AGIT):</strong> کار فردی با تمرکز بالا برای پردازش فردی پرخاشگری، تغییر رفتار و فعال‌سازی منابع شخصی.<br/><strong>آموزش‌های گروهی و کارگاه‌ها:</strong> یادگیری اجتماعی جمعی، آموختن استراتژی‌های کاهش تنش و تقویت مهارت‌های اجتماعی به‌طور مستقیم در گروه‌ها یا کلاس‌های درس.<br/><strong>مشاوره، همراهی و مراقبت:</strong> حمایت مستمر و مبتنی بر اعتماد از نوجوانان در شرایط بحرانی حاد و مراحل حساس زندگی.",
    section2_title: "سطح میانی: تقویت محیط اجتماعی نزدیک",
    section2_text: "<strong>کار با والدین:</strong> دوره‌های آموزشی و همراهی فشرده والدین برای تقویت توانمندی تربیتی و کاهش تنش در خانواده.<br/><strong>کنفرانس‌های کمک‌رسان:</strong> هماهنگی موردمحور و میان‌رشته‌ای در شبکه‌های حرفه‌ای برای حمایت بهینه از نوجوان.<br/><strong>دوره‌های آموزشی و تخصصی:</strong> کارگاه‌های تخصصی برای معلمان، مددکاران اجتماعی و ضریب‌دهندگان برای حرفه‌ای‌شدن در مواجهه با خشونت و بحران‌ها.",
    section3_title: "سطح کلان: جامعه و توسعه ساختاری",
    section3_text: "<strong>کار شبکه‌ای و همکاری:</strong> تبادل فعال و همکاری نزدیک با شرکای سیستمی.<br/><strong>روابط عمومی و توسعه مفاهیم:</strong> حساس‌سازی افکار عمومی نسبت به عدم خشونت و شجاعت مدنی و همچنین توسعه مستمر روش‌های مداخله نوآورانه با همراهی علمی.",
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
  const [menuOpen, setMenuOpen] = useState(false);

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
        <nav className={`nav-links${menuOpen ? ' open' : ''}`}>
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
            <p className="footer-desc">{lang === 'de' ? 'Antigewalt- und Interventionsteam' : lang === 'tr' ? 'Şiddet Karşıtı ve Şiddeti Önleme Derneği' : lang === 'ar' ? 'جمعية مكافحة العنف والوقاية منه' : lang === 'ku' ? 'Komeleya Dijî Şîdetê û Pêşîlêgirtinê' : lang === 'bks' ? 'Udruženje protiv nasilja i prevencije' : 'انجمن مبارزه با خشونت و پیشگیری از خشونت'}</p>
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
