"use client";
import { useState } from 'react';

const translations = {
  de: {
    page_title: "Unser Team",
    hero_title: "Lernen Sie uns kennen",
    hero_desc: "Hinter AGIT steht ein engagiertes Team mit langjähriger Erfahrung in der Gewaltprävention und sozialen Arbeit.",
    team_intro: "Unser Team vereint pädagogische, psychosoziale und interkulturelle Kompetenz. Wir arbeiten mehrsprachig und kultursensibel – damit unsere Angebote alle Menschen erreichen.",
    person1_name: "Kübra Erik",
    person1_role: "Ansprechpartnerin/Bereichsleitung:<br/>MA 13 außerschulische Kinder- und Jugendarbeit",
    person1_bio: "Kübra Erik bringt langjährige Erfahrung in der außerschulischen Kinder- und Jugendarbeit mit. Ihr Schwerpunkt liegt auf präventiven Workshops und der Sensibilisierung von Gruppen. Sie ist erste Ansprechpartnerin für Einrichtungen, die präventive Angebote suchen.",
    person1_email: "k.erik@verein-agit.at",
    person1_phone: "+43/676/3668820",
    person2_name: "Murat Percin, BA",
    person2_role: "Ansprechpartner/Bereichsleitung:<br/>MA 11 Einzel/Gruppentrainings",
    person2_bio: "Murat Percin ist spezialisiert auf Einzel- und Gruppentrainings im Bereich Gewaltprävention. Mit seiner akademischen Ausbildung und praktischen Erfahrung begleitet er Kinder, Jugendliche und Erwachsene nach konkreten Vorfällen und auf dem Weg zu nachhaltiger Veränderung.",
    person2_email: "m.percin@verein-agit.at",
    person2_phone: "+43/676/3668823"
  },
  tr: {
    page_title: "Ekibimiz",
    hero_title: "Bizi tanıyın",
    hero_desc: "AGIT'in arkasında, şiddet önleme ve sosyal hizmet alanında uzun yıllara dayanan deneyime sahip kararlı bir ekip var.",
    team_intro: "Ekibimiz pedagojik, psikososyal ve kültürlerarası yeterliliği birleştiriyor. Çok dilli ve kültürel duyarlılıkla çalışıyoruz.",
    person1_name: "Kübra Erik",
    person1_role: "İletişim Kişisi/Bölüm Başkanı:<br/>MA 13 okul dışı çocuk ve gençlik çalışmaları",
    person1_bio: "Kübra Erik, okul dışı çocuk ve gençlik çalışmalarında uzun yıllara dayanan deneyime sahiptir. Önleyici atölyeler ve grupların bilinçlendirilmesi konusunda uzmanlaşmıştır.",
    person1_email: "k.erik@verein-agit.at",
    person1_phone: "+43/676/3668820",
    person2_name: "Murat Percin, BA",
    person2_role: "İletişim Kişisi/Bölüm Başkanı:<br/>MA 11 bireysel/grup eğitimleri",
    person2_bio: "Murat Percin, şiddet önleme alanında bireysel ve grup eğitimleri konusunda uzmanlaşmıştır. Akademik eğitimi ve pratik deneyimi ile çocuklara, gençlere ve yetişkinlere eşlik etmektedir.",
    person1_email: "k.erik@verein-agit.at",
    person1_phone: "+43/676/3668820",
    person2_email: "m.percin@verein-agit.at",
    person2_phone: "+43/676/3668823"
  },
  ar: {
    page_title: "فريقنا",
    hero_title: "تعرف علينا",
    hero_desc: "وراء AGIT فريق ملتزم يتمتع بخبرة طويلة في مجال الوقاية من العنف والعمل الاجتماعي.",
    team_intro: "يجمع فريقنا بين الكفاءة التربوية والنفسية الاجتماعية والثقافية. نعمل بعدة لغات وبحساسية ثقافية.",
    person1_name: "كوبرا إريك",
    person1_role: "جهة الاتصال/مديرة القسم:<br/>MA 13 العمل مع الأطفال والشباب خارج المدرسة",
    person1_bio: "تمتلك كوبرا إريك خبرة طويلة في العمل مع الأطفال والشباب خارج المدرسة. تركز على ورش العمل الوقائية وتوعية المجموعات.",
    person1_email: "k.erik@verein-agit.at",
    person1_phone: "+43/676/3668820",
    person2_name: "مورات برتشين، بكالوريوس",
    person2_role: "جهة الاتصال/مدير القسم:<br/>MA 11 التدريبات الفردية والجماعية",
    person2_bio: "مورات برتشين متخصص في التدريبات الفردية والجماعية في مجال الوقاية من العنف. بفضل تكوينه الأكاديمي وخبرته العملية، يرافق الأطفال والشباب والبالغين.",
    person1_email: "k.erik@verein-agit.at",
    person1_phone: "+43/676/3668820",
    person2_email: "m.percin@verein-agit.at",
    person2_phone: "+43/676/3668823"
  },
  ku: {
    page_title: "Tîma Me",
    hero_title: "Me nas bikin",
    hero_desc: "Li pişt AGIT-ê tîmek dilsoz a bi ezmûna salan di pêşîlêgirtina şîdetê û xebata civakî de heye.",
    team_intro: "Tîma me jêhatîbûna pedagojîk, psîkososyal û navçandî yek dike. Em bi pirzimanî û hesasiyeta çandî dixebitin.",
    person1_name: "Kübra Erik",
    person1_role: "Kesê Têkilî/Rêvebera Beşê:<br/>MA 13 xebata zarok û ciwanan a derveyî dibistanê",
    person1_bio: "Kübra Erik di xebata zarok û ciwanan a derveyî dibistanê de xwedî ezmûna salan e. Balansa wê li ser atolyeyên pêşîlêgirtinê û hişyarkirina koman e.",
    person1_email: "k.erik@verein-agit.at",
    person1_phone: "+43/676/3668820",
    person2_name: "Murat Percin, BA",
    person2_role: "Kesê Têkilî/Rêveberê Beşê:<br/>MA 11 perwerdeyên kesane/komî",
    person2_bio: "Murat Percin di warê pêşîlêgirtina şîdetê de di perwerdeyên kesane û komî de pispor e. Bi perwerdeya xwe ya akademîk û ezmûna pratîkî re bi zarok, ciwan û mezinan re hevalbendiyê dike.",
    person1_email: "k.erik@verein-agit.at",
    person1_phone: "+43/676/3668820",
    person2_email: "m.percin@verein-agit.at",
    person2_phone: "+43/676/3668823"
  },
  bks: {
    page_title: "Naš tim",
    hero_title: "Upoznajte nas",
    hero_desc: "Iza AGIT-a stoji predan tim sa dugogodišnjim iskustvom u prevenciji nasilja i socijalnom radu.",
    team_intro: "Naš tim objedinjuje pedagoške, psihosocijalne i interkulturalne kompetencije. Radimo višejezično i kulturno osjetljivo.",
    person1_name: "Kübra Erik",
    person1_role: "Kontakt osoba/rukovoditeljica odjela:<br/>MA 13 izvanškolska djeca i rad s mladima",
    person1_bio: "Kübra Erik ima dugogodišnje iskustvo u izvanškolskom radu s djecom i mladima. Njen fokus je na preventivnim radionicama i senzibilizaciji grupa.",
    person1_email: "k.erik@verein-agit.at",
    person1_phone: "+43/676/3668820",
    person2_name: "Murat Percin, BA",
    person2_role: "Kontakt osoba/rukovoditelj odjela:<br/>MA 11 individualne/grupne obuke",
    person2_bio: "Murat Percin je specijaliziran za individualne i grupne obuke u oblasti prevencije nasilja. Sa svojim akademskim obrazovanjem i praktičnim iskustvom prati djecu, mlade i odrasle.",
    person1_email: "k.erik@verein-agit.at",
    person1_phone: "+43/676/3668820",
    person2_email: "m.percin@verein-agit.at",
    person2_phone: "+43/676/3668823"
  }
};

export default function TeamPage() {
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
          <p className="team-intro">{t.team_intro}</p>

          <div className="team-grid">
            <div className="team-card">
              <div className="team-card-image">
                <img src="/kuebra.png" alt={t.person1_name} />
              </div>
              <div className="team-card-info">
                <h3>{t.person1_name}</h3>
                <p className="team-role" dangerouslySetInnerHTML={{ __html: t.person1_role }}></p>
                <p className="team-bio">{t.person1_bio}</p>
                <div className="team-contact">
                  <p><strong>E-Mail:</strong> <a href={`mailto:${t.person1_email}`}>{t.person1_email}</a></p>
                  <p><strong>Mobil:</strong> {t.person1_phone}</p>
                </div>
              </div>
            </div>

            <div className="team-card">
              <div className="team-card-image">
                <img src="/murat.png" alt={t.person2_name} />
              </div>
              <div className="team-card-info">
                <h3>{t.person2_name}</h3>
                <p className="team-role" dangerouslySetInnerHTML={{ __html: t.person2_role }}></p>
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
