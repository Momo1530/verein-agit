"use client";
import { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import pageData from '../../../content/pages/kontakt.json';


export default function KontaktPage() {
  const { lang, setLang } = useLanguage();
  const t = pageData[lang] || pageData.de;
  const isRtl = lang === 'ar' || lang === 'fa';
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // idle | sending | success | error
  const [charCount, setCharCount] = useState({ name: 0, email: 0, phone: 0, subject: 0, message: 0 });
  const [focusedField, setFocusedField] = useState(null); // 'name' | 'email' | 'phone' | 'subject' | 'message' | null
  const [invalidChar, setInvalidChar] = useState(false); // unerlaubtes Zeichen bei Telefon

  useEffect(() => {
    if (typeof window === 'undefined' || window.turnstileLoaded) return;
    window.turnstileLoaded = true;
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    const form = e.target;

    const submitForm = async () => {
      const formData = new FormData(form);
      formData.append('lang', lang);

      try {
        const res = await fetch('/mail.php', {
          method: 'POST',
          body: formData
        });
        const data = await res.json();
        if (data.success) {
          setFormStatus('success');
          form.reset();
            setCharCount({ name: 0, email: 0, phone: 0, subject: 0, message: 0 });
          setFocusedField(null);
          setInvalidChar(false);
          setTimeout(() => setFormStatus('idle'), 6000);
        } else {
          setFormStatus('error');
        }
      } catch {
        setFormStatus('error');
      }
    };

    if (!window.turnstile) {
      await submitForm();
      return;
    }

    try {
      const token = await new Promise((resolve, reject) => {
        window.turnstile.render('#cf-turnstile-container', {
          sitekey: '0x4AAAAAAECHdB2byZJ3ZQG5',
          callback: resolve,
          'error-callback': reject
        });
      });

      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = 'cf-turnstile-response';
      input.value = token;
      form.appendChild(input);

      await submitForm();
      input.remove();
      window.turnstile.remove('#cf-turnstile-container');
    } catch {
      setFormStatus('error');
    }
  };

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
          <a href="/haltung">{lang === 'de' ? 'HALTUNG' : lang === 'tr' ? 'TUTUM' : lang === 'ar' ? 'الموقف' : lang === 'ku' ? 'HELWEST' : lang === 'fa' ? 'موضع' : 'STAV'}</a>
          <a href="/team">{lang === 'de' ? 'TEAM' : lang === 'tr' ? 'EKİP' : lang === 'ar' ? 'الفريق' : lang === 'ku' ? 'TÎM' : lang === 'fa' ? 'تیم' : 'TIM'}</a>
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
          <a href="#kontakt-formular" className="btn btn-primary">{lang === 'de' ? 'PROJEKT ANFRAGEN' : lang === 'tr' ? 'PROJE TALEP ET' : lang === 'ar' ? 'طلب مشروع' : lang === 'ku' ? 'PROJE BIXWAZE' : lang === 'fa' ? 'درخواست پروژه' : 'ZATRAŽI PROJEKAT'}</a>
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

        <section className="contact-form-section" id="kontakt-formular">
          <div className="contact-form-container">
            <h2 className="form-title">{t.form_title}</h2>
            <p className="form-subtitle">{t.form_subtitle}</p>

            <form className="glass-form" onSubmit={handleFormSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">{t.form_name}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    maxLength="50"
                    onChange={(e) => setCharCount((c) => ({ ...c, name: e.target.value.length }))}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                  />
                  {focusedField === 'name' && (
                    <span className={`char-counter ${charCount.name >= 50 ? 'limit-reached' : ''}`}>
                      {charCount.name} / 50
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="email">{t.form_email}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    maxLength="50"
                    onChange={(e) => setCharCount((c) => ({ ...c, email: e.target.value.length }))}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                  />
                  {focusedField === 'email' && (
                    <span className={`char-counter ${charCount.email >= 50 ? 'limit-reached' : ''}`}>
                      {charCount.email} / 50
                    </span>
                  )}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">{t.form_phone}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    maxLength="20"
                    onChange={(e) => {
                      const v = e.target.value;
                      const cleaned = v.replace(/[^0-9+]/g, '');
                      if (v !== cleaned) setInvalidChar(true);
                      else setInvalidChar(false);
                      e.target.value = cleaned;
                      setCharCount((c) => ({ ...c, phone: cleaned.length }));
                    }}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                  />
                  {focusedField === 'phone' && (
                    <span className={`char-counter ${invalidChar ? 'limit-reached' : ''}`}>
                      {charCount.phone} / 20
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="subject">{t.form_subject}</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    maxLength="50"
                    onChange={(e) => setCharCount((c) => ({ ...c, subject: e.target.value.length }))}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                  />
                  {focusedField === 'subject' && (
                    <span className={`char-counter ${charCount.subject >= 50 ? 'limit-reached' : ''}`}>
                      {charCount.subject} / 50
                    </span>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">{t.form_message}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  maxLength="2500"
                  onChange={(e) => setCharCount((c) => ({ ...c, message: e.target.value.length }))}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                ></textarea>
                {focusedField === 'message' && (
                  <span className={`char-counter ${charCount.message >= 2500 ? 'limit-reached' : ''}`}>
                    {charCount.message} / 2500
                  </span>
                )}
              </div>
              <div className="form-group hp-field" aria-hidden="true" style={{ position: 'absolute', left: '-9999px', opacity: 0 }}>
                <label htmlFor="website">Website</label>
                <input type="text" id="website" name="website" tabIndex="-1" autoComplete="off" />
              </div>
              <button type="submit" className="btn btn-primary form-submit-btn" disabled={formStatus === 'sending'}>
                {formStatus === 'sending' ? '...' : t.form_submit}
              </button>
              <div id="cf-turnstile-container" style={{ marginTop: '12px' }}></div>
              {formStatus === 'success' && (
                <div className="form-success">{t.form_success}</div>
              )}
              {formStatus === 'error' && (
                <div className="form-error">{t.form_error}</div>
              )}
            </form>
          </div>
        </section>

        <section className="contact-direct-section">
          <div className="contact-direct-container">
            <h2>{t.contact_direct}</h2>
            <div className="contact-direct-grid">
              <div className="contact-direct-card">
                <h3>{t.contact_name}</h3>
                <p><strong>Postanschrift:</strong><br/>{t.contact_address}</p>
                <p><strong>E-Mail-Adresse:</strong><br/><a href={`mailto:${t.contact_email}`}>{t.contact_email}</a></p>
                <p><strong>Kübra Erik:</strong><br/><a href="tel:+436606251500">+43 660 6251500</a></p>
                <p><strong>Murat Percin, BA:</strong><br/><a href="tel:+4369910097285">+43 699 10097285</a></p>
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
            <p className="footer-desc">{lang === 'de' ? 'Antigewalt- und Interventionsteam' : lang === 'tr' ? 'Şiddet Karşıtı ve Şiddeti Önleme Derneği' : lang === 'ar' ? 'جمعية مكافحة العنف والوقاية منه' : lang === 'ku' ? 'Komeleya Dijî Şîdetê û Pêşîlêgirtinê' : lang === 'fa' ? 'انجمن مبارزه با خشونت و پیشگیری از آن' : 'Udruženje protiv nasilja i prevencije'}</p>
          </div>
          <div className="footer-contact">
            <h4>{lang === 'de' ? 'Kontakt' : lang === 'tr' ? 'İletişim' : lang === 'ar' ? 'اتصل' : lang === 'ku' ? 'Têkilî' : lang === 'fa' ? 'تماس' : 'Kontakt'}</h4>
            <p>Hallergasse 8/1/47, 1110 Wien, Österreich</p>
            <p>E-Mail: <a href="mailto:office@verein-agit.at">office@verein-agit.at</a></p>
            <p>Murat Percin: <a href="tel:+436****7285">+43 699 10097285</a></p>
            <p>Kübra Erik: <a href="tel:+436****1500">+43 660 6251500</a></p>
          </div>
          <div className="footer-legal">
            <h4>{lang === 'de' ? 'Impressum' : lang === 'tr' ? 'Künye' : lang === 'ar' ? 'بصمة' : lang === 'ku' ? 'Nasname' : lang === 'fa' ? 'مشخصات' : 'Impresum'}</h4>
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
