"use client";
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from './hooks/useLanguage';
import homeData from '../../content/pages/home.json';


export default function Home() {
  const { lang, setLang } = useLanguage();
  const t = homeData[lang] || homeData.de;
  const isRtl = lang === 'ar';
  
  const [menuOpen, setMenuOpen] = useState(false);

  const [formSuccess, setFormSuccess] = useState(false);
  const [charCount, setCharCount] = useState({ name: 0, email: 0, phone: 0, subject: 0, message: 0 });
  const [focusedField, setFocusedField] = useState(null);
  const [invalidChar, setInvalidChar] = useState(false);
  const ansprechpartnerSectionRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || window.turnstileLoaded) return;
    window.turnstileLoaded = true;
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const section = ansprechpartnerSectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('is-visible');
            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormSuccess(false);

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
          setFormSuccess(true);
          form.reset();
          setTimeout(() => setFormSuccess(false), 6000);
        }
      } catch {
        // silent fail
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
      // silent fail
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
          <a href="/angebote" onClick={() => setMenuOpen(false)}>{t.nav_angebote}</a>
          <a href="/haltung" onClick={() => setMenuOpen(false)}>{t.nav_haltung}</a>
          <a href="/team" onClick={() => setMenuOpen(false)}>{t.nav_team}</a>
          <a href="/kontakt" onClick={() => setMenuOpen(false)}>{t.nav_kontakt}</a>
        </nav>
        <div className="nav-actions">
          <div className="lang-selector">
            <select id="langSwitch" value={lang} onChange={(e) => setLang(e.target.value)}>
              <option value="de">DE</option>
              <option value="tr">TR</option>
              <option value="ar">AR</option>
              <option value="ku">KU</option>
              <option value="bks">BKS</option>
              <option value="fa">FA</option>
            </select>
          </div>
          <a href="/kontakt" className="btn btn-primary">{t.nav_anfragen}</a>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menü">
            <span className={`hamburger-line${menuOpen ? ' open' : ''}`}></span>
            <span className={`hamburger-line${menuOpen ? ' open' : ''}`}></span>
            <span className={`hamburger-line${menuOpen ? ' open' : ''}`}></span>
          </button>
        </div>
      </header>

      <main>
        <section className="hero" style={{ flexDirection: isRtl ? 'row-reverse' : 'row' }}>
          <div className="hero-content">
            <p className="subtitle">{t.hero_subtitle}</p>
            <h1 className="headline" dangerouslySetInnerHTML={{ __html: t.hero_headline }}></h1>
            <p className="description">{t.hero_desc}</p>
          </div>
          <div className="hero-image">
            <img src="/hero_gruppenarbeit.jpg" alt="Group discussion on violence prevention" />
          </div>
        </section>

        <section className="action-steps">
          <div className="steps-grid">
            <a href="/angebote#vorbeugen" className="step">
              <h3>{t.step_1}</h3>
              <p className="step-desc">{t.step_1_desc}</p>
              <span className="arrow">&rarr;</span>
            </a>
            <a href="/angebote#handeln" className="step">
              <h3>{t.step_2}</h3>
              <p className="step-desc">{t.step_2_desc}</p>
              <span className="arrow">&rarr;</span>
            </a>
            <a href="/angebote#staerken" className="step">
              <h3>{t.step_3}</h3>
              <p className="step-desc">{t.step_3_desc}</p>
              <span className="arrow">&rarr;</span>
            </a>
          </div>
        </section>

        <section className="hintergrund-section" id="hintergrund-section">
          <div className="hintergrund-container">
            <div className="hintergrund-content">
              <h2 className="hintergrund-title">{t.hintergrund_title}</h2>
              <div className="hintergrund-text" dangerouslySetInnerHTML={{ __html: t.hintergrund_text }} />
            </div>
          </div>
        </section>

        <section className="contact-form-section" id="kontakt-formular">
          <div className="contact-form-container">
            <h2 className="form-title">{t.form_title}</h2>
            <p className="form-subtitle">{t.form_subtitle}</p>
            
            <form id="main-contact-form" className="glass-form" onSubmit={handleFormSubmit}>
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
              <button type="submit" className="btn btn-primary form-submit-btn">{t.form_submit}</button>
              <div id="cf-turnstile-container" style={{ marginTop: '12px' }}></div>
              {formSuccess && (
                <div id="form-success-msg" className="form-success">{t.form_success}</div>
              )}
            </form>
          </div>
        </section>

        <section className="ansprechpartner-section" id="ansprechpartner-section" ref={ansprechpartnerSectionRef}>
          <div className="ansprechpartner-row">
            <a href="/team" className="ansprechperson-image-col fly-from-left delay-1" aria-label="Zum Team">
              <img src="/murat.png" alt="Murat Percin" onError={(e) => { e.target.onerror = null; e.target.src='/mann.svg'; }} />
            </a>
            <a href="/team" className="ansprechperson-text-col fly-from-right delay-2" aria-label="Zum Team">
              <h3>Murat Percin, BA</h3>
              <p className="ansprechperson-role">Sozialarbeiter, Antigewalt- und konfrontativer Ressourcentrainer</p>
            </a>

            <a href="/team" className="ansprechperson-image-col fly-from-left delay-3" aria-label="Zum Team">
              <img src="/kuebra.png" alt="Kübra Erik" onError={(e) => { e.target.onerror = null; e.target.src='/mann.svg'; }} />
            </a>
            <a href="/team" className="ansprechperson-text-col fly-from-right delay-4" aria-label="Zum Team">
              <h3>Kübra Erik, BA</h3>
              <p className="ansprechperson-role">Bildungswissenschaftlerin, Antigewalt- und konfrontative Ressourcentrainerin</p>
            </a>
          </div>
        </section>
        
        <footer id="impressum" className="site-footer">
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
              <p className="footer-desc">{t.footer_desc}</p>
            </div>
            
            <div className="footer-contact">
              <h4>{t.kontakt_title}</h4>
              <p>Hallergasse 8/1/47, 1110 Wien, Österreich</p>
              <p>E-Mail: <a href="mailto:office@verein-agit.at">office@verein-agit.at</a></p>
              <p>Murat Percin: <a href="tel:+4369910097285">+43 699 10097285</a></p>
              <p>Kübra Erik: <a href="tel:+436606251500">+43 660 6251500</a></p>
            </div>

            <div className="footer-legal">
              <h4>{t.impressum_title}</h4>
              <p>ZVR-Zahl: 1897049103<br/>Behörde: LPD Wien</p>
              <p className="small-text"><a href="/impressum">Impressum</a> | <a href="/datenschutz">Datenschutzerklärung</a></p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Verein AGIT. Alle Rechte vorbehalten.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
