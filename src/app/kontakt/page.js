"use client";
import { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';

const translations = {
  de: {
    page_title: "Kontakt",
    hero_title: "Kontaktieren Sie uns",
    hero_desc: "Sie haben Fragen, ein konkretes Anliegen oder möchten ein unverbindliches Vorgespräch vereinbaren? Wir freuen uns auf Ihre Nachricht.",
    form_title: "Schreiben Sie uns",
    form_subtitle: "Wir melden uns verlässlich innerhalb von 2–3 Werktagen zurück.",
    form_name: "Name",
    form_email: "E-Mail",
    form_phone: "Telefonnummer (optional)",
    form_subject: "Betreff",
    form_message: "Nachricht",
    form_submit: "Nachricht senden",
    form_success: "Ihre Nachricht wurde erfolgreich gesendet! Wir melden uns in Kürze bei Ihnen.",
    form_error: "Fehler beim Senden. Bitte versuchen Sie es später erneut.",
    contact_direct: "Direkter Kontakt",
    contact_name: "Verein AGIT – Antigewalt und Interventionsteam",
    contact_address: "Hallergasse 8/1/47, 1110 Wien",
    contact_email: "office@verein-agit.at"
  },
  tr: {
    page_title: "İletişim",
    hero_title: "Bize Ulaşın",
    hero_desc: "Sorularınız mı var, somut bir talebiniz mi var veya bağlayıcı olmayan bir ön görüşme mi ayarlamak istiyorsunuz? Mesajınızı bekliyoruz.",
    form_title: "Bize Yazın",
    form_subtitle: "2-3 iş günü içinde size güvenilir bir şekilde geri dönüş yapacağız.",
    form_name: "İsim",
    form_email: "E-Posta",
    form_phone: "Telefon Numarası (isteğe bağlı)",
    form_subject: "Konu",
    form_message: "Mesaj",
    form_submit: "Mesajı Gönder",
    form_success: "Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.",
    form_error: "Gönderilirken hata oluştu. Lütfen daha sonra tekrar deneyin.",
    contact_direct: "Doğrudan İletişim",
    contact_name: "AGIT Derneği – Şiddet Karşıtı ve Müdahale Ekibi",
    contact_address: "Hallergasse 8/1/47, 1110 Viyana, Avusturya",
    contact_phone: "+43/1/111111111",
    contact_email: "office@verein-agit.at",
    contact_person1: "Kübra Erik",
    contact_person1_role: "Bölüm Başkanı MA 13 – okul dışı çocuk ve gençlik çalışmaları",
    contact_person1_phone: "+43/676/3668820",
    contact_person1_email: "k.erik@verein-agit.at",
    contact_person2: "Murat Percin, BA",
    contact_person2_role: "Bölüm Başkanı MA 11 – bireysel/grup eğitimleri",
    contact_person2_phone: "+43/676/3668823",
    contact_person2_email: "m.percin@verein-agit.at"
  },
  ar: {
    page_title: "اتصل بنا",
    hero_title: "اتصل بنا",
    hero_desc: "هل لديك أسئلة أو طلب محدد أو ترغب في تحديد موعد لاستشارة أولية غير ملزمة؟ نحن نتطلع إلى رسالتك.",
    form_title: "اكتب لنا",
    form_subtitle: "سنرد عليك بشكل موثوق في غضون 2-3 أيام عمل.",
    form_name: "الاسم",
    form_email: "البريد الإلكتروني",
    form_phone: "رقم الهاتف (اختياري)",
    form_subject: "الموضوع",
    form_message: "الرسالة",
    form_submit: "إرسال الرسالة",
    form_success: "تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.",
    form_error: "خطأ في الإرسال. يرجى المحاولة مرة أخرى لاحقًا.",
    contact_direct: "اتصال مباشر",
    contact_name: "جمعية AGIT – مكافحة العنف وفريق التدخل",
    contact_address: "Hallergasse 8/1/47, 1110 فيينا, النمسا",
    contact_phone: "+43/1/111111111",
    contact_email: "office@verein-agit.at",
    contact_person1: "كوبرا إريك",
    contact_person1_role: "مديرة القسم MA 13 – العمل مع الأطفال والشباب خارج المدرسة",
    contact_person1_phone: "+43/676/3668820",
    contact_person1_email: "k.erik@verein-agit.at",
    contact_person2: "مورات برتشين، بكالوريوس",
    contact_person2_role: "مدير القسم MA 11 – التدريبات الفردية والجماعية",
    contact_person2_phone: "+43/676/3668823",
    contact_person2_email: "m.percin@verein-agit.at"
  },
  ku: {
    page_title: "Têkilî",
    hero_title: "Bi me re têkiliyê daynin",
    hero_desc: "Pirsên we hene, xwestekeke we ya somut heye an jî dixwazin hevdîtineke pêşîn a bêpêbend saz bikin? Em li benda peyama we ne.",
    form_title: "Ji me re binivîsin",
    form_subtitle: "Di nav 2-3 rojên kar de em ê bi pêbawerî bersiva we bidin.",
    form_name: "Nav",
    form_email: "E-Mail",
    form_phone: "Hejmara Telefonê (vebijarkî)",
    form_subject: "Mijar",
    form_message: "Peyam",
    form_submit: "Peyamê Bişîne",
    form_success: "Peyama we bi serkeftî hate şandin! Em ê di demek nêzîk de bi we re têkiliyê daynin.",
    form_error: "Di şandinê de çewtî. Ji kerema xwe paşê dîsa biceribînin.",
    contact_direct: "Têkiliya Rasterast",
    contact_name: "Komeleya AGIT – Dijî Şîdetê û Tîma Destêwerdanê",
    contact_address: "Hallergasse 8/1/47, 1110 Viyana, Awistirya",
    contact_phone: "+43/1/111111111",
    contact_email: "office@verein-agit.at",
    contact_person1: "Kübra Erik",
    contact_person1_role: "Rêvebera Beşê MA 13 – xebata zarok û ciwanan a derveyî dibistanê",
    contact_person1_phone: "+43/676/3668820",
    contact_person1_email: "k.erik@verein-agit.at",
    contact_person2: "Murat Percin, BA",
    contact_person2_role: "Rêveberê Beşê MA 11 – perwerdeyên kesane/komî",
    contact_person2_phone: "+43/676/3668823",
    contact_person2_email: "m.percin@verein-agit.at"
  },
  bks: {
    page_title: "Kontakt",
    hero_title: "Kontaktirajte nas",
    hero_desc: "Imate pitanja, konkretan zahtjev ili želite dogovoriti neobavezujući preliminarni razgovor? Veselimo se vašoj poruci.",
    form_title: "Pišite nam",
    form_subtitle: "Pouzdano ćemo vam odgovoriti u roku od 2-3 radna dana.",
    form_name: "Ime",
    form_email: "E-Mail",
    form_phone: "Broj telefona (opcionalno)",
    form_subject: "Predmet",
    form_message: "Poruka",
    form_submit: "Pošalji poruku",
    form_success: "Vaša poruka je uspješno poslana! Javit ćemo vam se uskoro.",
    form_error: "Greška pri slanju. Molimo pokušajte ponovo kasnije.",
    contact_direct: "Direktan kontakt",
    contact_name: "Udruženje AGIT – Protiv nasilja i interventni tim",
    contact_address: "Hallergasse 8/1/47, 1110 Beč, Austrija",
    contact_phone: "+43/1/111111111",
    contact_email: "office@verein-agit.at",
    contact_person1: "Kübra Erik",
    contact_person1_role: "Rukovoditeljica odjela MA 13 – izvanškolski rad s djecom i mladima",
    contact_person1_phone: "+43/676/3668820",
    contact_person1_email: "k.erik@verein-agit.at",
    contact_person2: "Murat Percin, BA",
    contact_person2_role: "Rukovoditelj odjela MA 11 – individualne/grupne obuke",
    contact_person2_phone: "+43/676/3668823",
    contact_person2_email: "m.percin@verein-agit.at"
  },
  fa: {
    page_title: "تماس با ما",
    hero_title: "با ما تماس بگیرید",
    hero_desc: "آیا سؤال، درخواست مشخصی دارید یا می‌خواهید یک جلسه مقدماتی بدون تعهد هماهنگ کنید؟ ما مشتاق دریافت پیام شما هستیم.",
    form_title: "برای ما بنویسید",
    form_subtitle: "ما ظرف ۲ تا ۳ روز کاری به طور مطمئن پاسخ خواهیم داد.",
    form_name: "نام",
    form_email: "ایمیل",
    form_phone: "شماره تلفن (اختیاری)",
    form_subject: "موضوع",
    form_message: "پیام",
    form_submit: "ارسال پیام",
    form_success: "پیام شما با موفقیت ارسال شد! به زودی با شما تماس خواهیم گرفت.",
    form_error: "خطا در ارسال. لطفاً بعداً دوباره تلاش کنید.",
    contact_direct: "تماس مستقیم",
    contact_name: "انجمن AGIT – مبارزه با خشونت و تیم مداخله",
    contact_address: "Hallergasse 8/1/47، 1110 وین، اتریش",
    contact_phone: "+43/1/111111111",
    contact_email: "office@verein-agit.at",
    contact_person1: "کوبرا اریک",
    contact_person1_role: "مدیر بخش MA 13 – کار با کودکان و نوجوانان خارج از مدرسه",
    contact_person1_phone: "+43/676/3668820",
    contact_person1_email: "k.erik@verein-agit.at",
    contact_person2: "مورات پرچین، BA",
    contact_person2_role: "مدیر بخش MA 11 – آموزش‌های فردی/گروهی",
    contact_person2_phone: "+43/676/3668823",
    contact_person2_email: "m.percin@verein-agit.at"
  }
};

export default function KontaktPage() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang] || translations.de;
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
