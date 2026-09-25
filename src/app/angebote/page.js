"use client";
import { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import pageData from '../../../content/pages/angebote.json';


export default function AngebotePage() {
  const { lang, setLang } = useLanguage();
  const t = pageData[lang] || pageData.de;
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
