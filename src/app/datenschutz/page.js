"use client";
import { useState } from 'react';

const translations = {
  de: {
    page_title: "Datenschutzerklärung",
    hero_title: "Datenschutzerklärung",
    hero_desc: "Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nachfolgend informieren wir Sie über die Verarbeitung Ihrer Daten auf unserer Website.",
    last_updated: "Stand: Juli 2025",
    sections: [
      {
        title: "1. Verantwortlicher",
        content: "Verein AGIT – Antigewalt und Gewaltprävention<br/>Gerichtsgasse 1, 1230 Wien, Österreich<br/>E-Mail: office@verein-agit.at<br/>Telefon: +43/1/524 88 73<br/>ZVR-Zahl: (bitte einfügen)"
      },
      {
        title: "2. Allgemeines zur Datenverarbeitung",
        content: "Wir erheben und verarbeiten personenbezogene Daten nur, soweit dies für die Bereitstellung unserer Website und unserer Angebote erforderlich ist. Die Verarbeitung erfolgt auf Grundlage der DSGVO (Datenschutz-Grundverordnung) sowie des österreichischen Datenschutzgesetzes (DSG)."
      },
      {
        title: "3. Kontaktformular",
        content: "Wenn Sie uns über unser Kontaktformular eine Nachricht senden, werden die von Ihnen angegebenen Daten (Name, E-Mail-Adresse, Telefonnummer, Betreff, Nachricht) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse). Die Daten werden per E-Mail an office@verein-agit.at übermittelt und nach Erledigung der Anfrage gelöscht, sofern keine gesetzlichen Aufbewahrungsfristen entgegenstehen."
      },
      {
        title: "4. E-Mail-Kommunikation",
        content: "Wenn Sie uns per E-Mail kontaktieren, werden Ihre angegebenen Daten (E-Mail-Adresse, Name, ggf. weitere Angaben) zwecks Bearbeitung der Anfrage gespeichert. Eine Weitergabe an Dritte erfolgt nicht."
      },
      {
        title: "5. Server-Logfiles",
        content: "Bei jedem Zugriff auf unsere Website werden automatisch Informationen erfasst, die Ihr Browser an unseren Server übermittelt. Dies sind: IP-Adresse, Datum und Uhrzeit des Zugriffs, Name und URL der abgerufenen Datei, Website, von der aus der Zugriff erfolgt (Referrer-URL), verwendeter Browser und ggf. das Betriebssystem. Diese Daten werden für maximal 7 Tage gespeichert und anschließend gelöscht. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technischen Sicherstellung des Betriebs)."
      },
      {
        title: "6. Cookies",
        content: "Unsere Website verwendet keine Tracking-Cookies oder Analyse-Tools. Es werden ausschließlich technisch notwendige Session-Cookies gesetzt, die für den Betrieb der Website erforderlich sind. Diese Cookies werden nach Ende Ihrer Browsersitzung automatisch gelöscht."
      },
      {
        title: "7. Ihre Rechte",
        content: "Sie haben jederzeit das Recht auf Auskunft über die bei uns gespeicherten personenbezogenen Daten sowie auf Berichtigung, Löschung oder Einschränkung der Verarbeitung. Zudem steht Ihnen ein Recht auf Datenübertragbarkeit und Beschwerde bei der Aufsichtsbehörde zu. Die zuständige Aufsichtsbehörde in Österreich ist die Datenschutzbehörde (Barichgasse 40-42, 1030 Wien, dsb@dsb.gv.at)."
      },
      {
        title: "8. Datensicherheit",
        content: "Wir treffen technische und organisatorische Sicherheitsmaßnahmen, um Ihre Daten gegen Manipulation, Verlust, Zerstörung oder unbefugten Zugriff zu schützen. Die Website wird über eine verschlüsselte HTTPS-Verbindung (SSL/TLS) bereitgestellt."
      },
      {
        title: "9. Änderungen",
        content: "Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie an geänderte rechtliche Rahmenbedingungen oder Änderungen unserer Leistungen anzupassen."
      }
    ]
  },
  tr: {
    page_title: "Veri Koruma Beyanı",
    hero_title: "Veri Koruma Beyanı",
    hero_desc: "Kişisel verilerinizin korunması bizim için önemlidir. Aşağıda, web sitemizde verilerinizin işlenmesi hakkında sizi bilgilendiriyoruz.",
    last_updated: "Son güncelleme: Temmuz 2025",
    sections: [
      { title: "1. Sorumlu", content: "AGIT Derneği – Şiddet Karşıtı ve Şiddeti Önleme<br/>Gerichtsgasse 1, 1230 Viyana, Avusturya<br/>E-Posta: office@verein-agit.at<br/>Telefon: +43/1/524 88 73" },
      { title: "2. Veri İşleme Hakkında Genel Bilgiler", content: "Kişisel verileri yalnızca web sitemizin ve hizmetlerimizin sağlanması için gerekli olduğu ölçüde toplar ve işleriz. İşleme, GDPR ve Avusturya Veri Koruma Yasası'na (DSG) dayanarak gerçekleştirilir." },
      { title: "3. İletişim Formu", content: "İletişim formumuz aracılığıyla bize mesaj gönderdiğinizde, sağladığınız veriler (isim, e-posta adresi, telefon numarası, konu, mesaj) talebinizi işleme koymak ve olası takip soruları için saklanır. Yasal dayanak GDPR Madde 6(1)(b) ve (f)'dir. Veriler e-posta ile office@verein-agit.at adresine iletilir ve talep tamamlandıktan sonra silinir." },
      { title: "4. E-Posta İletişimi", content: "Bize e-posta yoluyla ulaştığınızda, verileriniz (e-posta adresi, isim, gerekirse diğer bilgiler) talebinizi işleme koymak için saklanır. Veriler üçüncü taraflarla paylaşılmaz." },
      { title: "5. Sunucu Günlük Dosyaları", content: "Web sitemize her erişimde, tarayıcınızın sunucumuza ilettiği bilgiler otomatik olarak kaydedilir. Bunlar: IP adresi, erişim tarihi ve saati, dosya adı ve URL'si, referrer URL'si, kullanılan tarayıcı ve işletim sistemidir. Bu veriler en fazla 7 gün saklanır ve ardından silinir." },
      { title: "6. Çerezler", content: "Web sitemiz izleme çerezleri veya analiz araçları kullanmaz. Yalnızca web sitesinin çalışması için gerekli olan teknik oturum çerezleri kullanılır. Bu çerezler tarayıcı oturumunuzun sonunda otomatik olarak silinir." },
      { title: "7. Haklarınız", content: "Saklanan kişisel verileriniz hakkında bilgi alma, düzeltme, silme veya işlemeyi kısıtlama hakkınız vardır. Ayrıca veri taşınabilirliği ve denetim makamına şikayette bulunma hakkınız bulunmaktadır." },
      { title: "8. Veri Güvenliği", content: "Verilerinizi manipülasyona, kayba, imhaya veya yetkisiz erişime karşı korumak için teknik ve organizasyonel güvenlik önlemleri alıyoruz. Web sitesi şifreli bir HTTPS bağlantısı (SSL/TLS) üzerinden sağlanmaktadır." },
      { title: "9. Değişiklikler", content: "Bu veri koruma beyanını, değişen yasal koşullara veya hizmetlerimizdeki değişikliklere uyarlamak için gerektiğinde güncelleme hakkını saklı tutarız." }
    ]
  },
  ar: {
    page_title: "سياسة الخصوصية",
    hero_title: "سياسة الخصوصية",
    hero_desc: "حماية بياناتك الشخصية مهمة بالنسبة لنا. فيما يلي نبلغك بمعالجة بياناتك على موقعنا الإلكتروني.",
    last_updated: "آخر تحديث: يوليو 2025",
    sections: [
      { title: "1. المسؤول", content: "جمعية AGIT – مكافحة العنف والوقاية منه<br/>Gerichtsgasse 1, 1230 فيينا, النمسا<br/>البريد الإلكتروني: office@verein-agit.at<br/>الهاتف: +43/1/524 88 73" },
      { title: "2. معلومات عامة عن معالجة البيانات", content: "نقوم بجمع ومعالجة البيانات الشخصية فقط بالقدر اللازم لتوفير موقعنا الإلكتروني وخدماتنا. تتم المعالجة على أساس اللائحة العامة لحماية البيانات (GDPR) وقانون حماية البيانات النمساوي (DSG)." },
      { title: "3. نموذج الاتصال", content: "عند إرسال رسالة لنا عبر نموذج الاتصال، يتم تخزين البيانات التي تقدمها (الاسم، البريد الإلكتروني، رقم الهاتف، الموضوع، الرسالة) لغرض معالجة الطلب وللاستفسارات المتابعة. الأساس القانوني هو المادة 6(1)(ب) و(و) من GDPR. يتم إرسال البيانات عبر البريد الإلكتروني إلى office@verein-agit.at وحذفها بعد معالجة الطلب." },
      { title: "4. التواصل عبر البريد الإلكتروني", content: "عند الاتصال بنا عبر البريد الإلكتروني، يتم تخزين بياناتك (البريد الإلكتروني، الاسم، وربما معلومات أخرى) لمعالجة طلبك. لا يتم مشاركة البيانات مع أطراف ثالثة." },
      { title: "5. سجلات الخادم", content: "مع كل زيارة لموقعنا، يتم تسجيل المعلومات التي يرسلها متصفحك إلى خادمنا تلقائيًا. تشمل: عنوان IP، التاريخ والوقت، اسم الملف وعنوان URL، عنوان URL المحيل، المتصفح ونظام التشغيل. يتم تخزين هذه البيانات لمدة أقصاها 7 أيام ثم حذفها." },
      { title: "6. ملفات تعريف الارتباط", content: "موقعنا لا يستخدم ملفات تعريف ارتباط للتتبع أو أدوات تحليل. يتم فقط استخدام ملفات تعريف ارتباط الجلسة الفنية الضرورية لتشغيل الموقع. يتم حذفها تلقائيًا بعد انتهاء جلسة التصفح." },
      { title: "7. حقوقك", content: "لديك الحق في الحصول على معلومات عن بياناتك الشخصية المخزنة، وكذلك الحق في التصحيح أو الحذف أو تقييد المعالجة. لديك أيضًا الحق في نقل البيانات وتقديم شكوى إلى سلطة الإشراف." },
      { title: "8. أمن البيانات", content: "نتخذ تدابير أمنية تقنية وتنظيمية لحماية بياناتك من التلاعب أو الفقدان أو التدمير أو الوصول غير المصرح به. يتم توفير الموقع عبر اتصال HTTPS مشفر (SSL/TLS)." },
      { title: "9. التغييرات", content: "نحتفظ بالحق في تحديث سياسة الخصوصية هذه عند الحاجة لتكييفها مع الظروف القانونية المتغيرة أو التغييرات في خدماتنا." }
    ]
  },
  ku: {
    page_title: "Parastina Daneyan",
    hero_title: "Parastina Daneyan",
    hero_desc: "Parastina daneyên we yên kesane ji bo me girîng e. Li jêr em we li ser pêvajokirina daneyên we li ser malpera xwe agahdar dikin.",
    last_updated: "Rewşa dawî: Tîrmeh 2025",
    sections: [
      { title: "1. Berpirsiyar", content: "Komeleya AGIT – Dijî Şîdetê û Pêşîlêgirtinê<br/>Gerichtsgasse 1, 1230 Viyana, Awistirya<br/>E-Mail: office@verein-agit.at<br/>Telefon: +43/1/524 88 73" },
      { title: "2. Agahiyên Giştî yên Pêvajokirina Daneyan", content: "Em daneyên kesane tenê heya ku ji bo peydakirina malpera xwe û karûbarên xwe hewce be berhev û pêvajoyê dikin. Pêvajokirin li ser bingeha GDPR û Qanûna Parastina Daneyan a Awistiryayê (DSG) pêk tê." },
      { title: "3. Forma Têkiliyê", content: "Dema ku hûn bi forma têkiliyê peyamekê ji me re dişînin, daneyên ku we peyda kirine (nav, e-name, hejmara telefonê, mijar, peyam) ji bo pêvajokirina daxwazê û pirsên paşerojê têne hilanîn. Bingehê qanûnî Madde 6(1)(b) û (f) ya GDPR e. Dane bi e-nameyê ji office@verein-agit.at re têne şandin û piştî qedandina daxwazê têne jêbirin." },
      { title: "4. Têkiliya E-nameyê", content: "Dema ku hûn bi e-nameyê bi me re têkilî dikin, daneyên we (e-name, nav, heke hewce be agahiyên din) ji bo pêvajokirina daxwazê têne hilanîn. Dane bi kesên sêyemîn re nayê parvekirin." },
      { title: "5. Pelên Têketina Serverê", content: "Bi her gihîştina malpera me re, agahiyên ku geroka we dişîne servera me bixweber têne tomar kirin. Ev: IP-address, dîrok û dem, nav û URL-ya pelê, URL-ya referrer, gerok û pergala xebitandinê. Ev dane herî zêde 7 rojan têne hilanîn û paşê têne jêbirin." },
      { title: "6. Çerez", content: "Malpera me çerezên şopandinê an amûrên analîzê bikar nayne. Tenê çerezên rûniştinê yên teknîkî yên ji bo xebata malperê hewce ne têne bikar anîn. Ev çerez piştî dawiya rûniştina geroka we bixweber têne jêbirin." },
      { title: "7. Mafên We", content: "Mafê we yê agahdariyê li ser daneyên kesane yên hilanîn, û her weha mafê rastkirin, jêbirin an sînordarkirina pêvajokirinê heye. Her weha mafê veguheztina dane û gilî li rayedarê çavdêriyê heye." },
      { title: "8. Ewlehiya Daneyan", content: "Em tedbîrên ewlehiyê yên teknîkî û rêxistinî digirin da ku daneyên we ji manîpulasyon, windabûn, hilweşandin an gihîştina bêdestûr biparêzin. Malper bi girêdanek HTTPS-ya şîfrekirî (SSL/TLS) tê peyda kirin." },
      { title: "9. Guhertin", content: "Em mafê xwe diparêzin ku vê daxuyaniya parastina daneyan biguherînin da ku wê li gorî şert û mercên qanûnî yên guherî an guhertinên di karûbarên me de biguncînin." }
    ]
  },
  bks: {
    page_title: "Izjava o privatnosti",
    hero_title: "Izjava o privatnosti",
    hero_desc: "Zaštita vaših ličnih podataka nam je važna. U nastavku vas informišemo o obradi vaših podataka na našoj web stranici.",
    last_updated: "Stanje: Juli 2025",
    sections: [
      { title: "1. Odgovorno lice", content: "Udruženje AGIT – Protiv nasilja i prevencije<br/>Gerichtsgasse 1, 1230 Beč, Austrija<br/>E-Mail: office@verein-agit.at<br/>Telefon: +43/1/524 88 73" },
      { title: "2. Općenito o obradi podataka", content: "Prikupljamo i obrađujemo lične podatke samo u mjeri potrebnoj za pružanje naše web stranice i naših usluga. Obrada se vrši na osnovu GDPR-a i austrijskog Zakona o zaštiti podataka (DSG)." },
      { title: "3. Kontakt obrazac", content: "Kada nam pošaljete poruku putem kontakt obrasca, podaci koje navedete (ime, e-mail adresa, broj telefona, predmet, poruka) pohranjuju se radi obrade upita i mogućih dodatnih pitanja. Pravni osnov je čl. 6 st. 1 lit. b i f GDPR-a. Podaci se šalju e-mailom na office@verein-agit.at i brišu se nakon obrade upita." },
      { title: "4. E-mail komunikacija", content: "Kada nas kontaktirate putem e-maila, vaši podaci (e-mail adresa, ime, eventualno druge informacije) pohranjuju se radi obrade vašeg upita. Podaci se ne dijele s trećim stranama." },
      { title: "5. Server log datoteke", content: "Prilikom svakog pristupa našoj web stranici automatski se bilježe informacije koje vaš preglednik šalje našem serveru. To uključuje: IP adresu, datum i vrijeme pristupa, naziv i URL datoteke, referrer URL, korišteni preglednik i operativni sistem. Ovi podaci se čuvaju najviše 7 dana, a zatim brišu." },
      { title: "6. Kolačići", content: "Naša web stranica ne koristi kolačiće za praćenje niti alate za analizu. Koriste se isključivo tehnički neophodni session kolačići koji su potrebni za rad web stranice. Ovi kolačići se automatski brišu nakon završetka sesije preglednika." },
      { title: "7. Vaša prava", content: "Imate pravo na informaciju o pohranjenim ličnim podacima, kao i pravo na ispravku, brisanje ili ograničenje obrade. Također imate pravo na prenosivost podataka i pritužbu nadzornom tijelu." },
      { title: "8. Sigurnost podataka", content: "Preduzimamo tehničke i organizacijske sigurnosne mjere kako bismo zaštitili vaše podatke od manipulacije, gubitka, uništenja ili neovlaštenog pristupa. Web stranica se pruža putem šifrirane HTTPS veze (SSL/TLS)." },
      { title: "9. Izmjene", content: "Zadržavamo pravo da ovu izjavu o privatnosti po potrebi prilagodimo promijenjenim pravnim okvirima ili promjenama u našim uslugama." }
    ]
  }
};

export default function DatenschutzPage() {
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
            <p className="subpage-hero-date">{t.last_updated}</p>
          </div>
        </section>

        <section className="subpage-content datenschutz-content">
          {t.sections.map((s, i) => (
            <div key={i} className="content-block">
              <h2>{s.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: s.content }}></p>
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
            <p className="small-text"><a href="/datenschutz">{lang === 'de' ? 'Datenschutzerklärung' : lang === 'tr' ? 'Veri Koruma' : lang === 'ar' ? 'سياسة الخصوصية' : lang === 'ku' ? 'Parastina Daneyan' : 'Privatnost'}</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Verein AGIT. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}
