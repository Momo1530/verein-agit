"use client";
import { useState } from 'react';

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
    contact_name: "Verein AGIT – Antigewalt und Gewaltprävention",
    contact_address: "Gerichtsgasse 1, 1230 Wien, Österreich",
    contact_phone: "+43/1/524 88 73",
    contact_email: "office@verein-agit.at",
    contact_person1: "Kübra Erik",
    contact_person1_role: "Bereichsleitung MA 13 – außerschulische Kinder- und Jugendarbeit",
    contact_person1_phone: "+43/676/3668820",
    contact_person1_email: "k.erik@verein-agit.at",
    contact_person2: "Murat Percin, BA",
    contact_person2_role: "Bereichsleitung MA 11 – Einzel/Gruppentrainings",
    contact_person2_phone: "+43/676/3668823",
    contact_person2_email: "m.percin@verein-agit.at"
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
    contact_name: "AGIT Derneği – Şiddet Karşıtı ve Şiddeti Önleme",
    contact_address: "Gerichtsgasse 1, 1230 Viyana, Avusturya",
    contact_phone: "+43/1/524 88 73",
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
    contact_name: "جمعية AGIT – مكافحة العنف والوقاية منه",
    contact_address: "Gerichtsgasse 1, 1230 فيينا, النمسا",
    contact_phone: "+43/1/524 88 73",
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
    contact_name: "Komeleya AGIT – Dijî Şîdetê û Pêşîlêgirtinê",
    contact_address: "Gerichtsgasse 1, 1230 Viyana, Awistirya",
    contact_phone: "+43/1/524 88 73",
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
    contact_name: "Udruženje AGIT – Protiv nasilja i prevencije",
    contact_address: "Gerichtsgasse 1, 1230 Beč, Austrija",
    contact_phone: "+43/1/524 88 73",
    contact_email: "office@verein-agit.at",
    contact_person1: "Kübra Erik",
    contact_person1_role: "Rukovoditeljica odjela MA 13 – izvanškolski rad s djecom i mladima",
    contact_person1_phone: "+43/676/3668820",
    contact_person1_email: "k.erik@verein-agit.at",
    contact_person2: "Murat Percin, BA",
    contact_person2_role: "Rukovoditelj odjela MA 11 – individualne/grupne obuke",
    contact_person2_phone: "+43/676/3668823",
    contact_person2_email: "m.percin@verein-agit.at"
  }
};

export default function KontaktPage() {
  const [lang, setLang] = useState('de');
  const t = translations[lang] || translations.de;
  const isRtl = lang === 'ar';
  const [formStatus, setFormStatus] = useState('idle'); // idle | sending | success | error

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    const formData = new FormData(e.target);
    formData.append('lang', lang);

    try {
      const res = await fetch('/mail.php', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (data.success) {
        setFormStatus('success');
        e.target.reset();
        setTimeout(() => setFormStatus('idle'), 6000);
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

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
          <a href="#kontakt-formular" className="btn btn-primary">{lang === 'de' ? 'PROJEKT ANFRAGEN' : lang === 'tr' ? 'PROJE TALEP ET' : lang === 'ar' ? 'طلب مشروع' : lang === 'ku' ? 'PROJE BIXWAZE' : 'ZATRAŽI PROJEKAT'}</a>
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
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{t.form_email}</label>
                  <input type="email" id="email" name="email" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">{t.form_phone}</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">{t.form_subject}</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">{t.form_message}</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary form-submit-btn" disabled={formStatus === 'sending'}>
                {formStatus === 'sending' ? '...' : t.form_submit}
              </button>
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
                <p>{t.contact_address}</p>
                <p>Telefon: <a href={`tel:${t.contact_phone.replace(/[^0-9+]/g, '')}`}>{t.contact_phone}</a></p>
                <p>E-Mail: <a href={`mailto:${t.contact_email}`}>{t.contact_email}</a></p>
              </div>
              <div className="contact-direct-card">
                <h3>{t.contact_person1}</h3>
                <p className="contact-role">{t.contact_person1_role}</p>
                <p>Mobil: <a href={`tel:${t.contact_person1_phone.replace(/[^0-9+]/g, '')}`}>{t.contact_person1_phone}</a></p>
                <p>E-Mail: <a href={`mailto:${t.contact_person1_email}`}>{t.contact_person1_email}</a></p>
              </div>
              <div className="contact-direct-card">
                <h3>{t.contact_person2}</h3>
                <p className="contact-role">{t.contact_person2_role}</p>
                <p>Mobil: <a href={`tel:${t.contact_person2_phone.replace(/[^0-9+]/g, '')}`}>{t.contact_person2_phone}</a></p>
                <p>E-Mail: <a href={`mailto:${t.contact_person2_email}`}>{t.contact_person2_email}</a></p>
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
            <p>Telefon: +43/1/524 88 73<br/>E-Mail: <a href="mailto:office@verein-agit.at">office@verein-agit.at</a></p>
          </div>
          <div className="footer-legal">
            <h4>{lang === 'de' ? 'Impressum' : lang === 'tr' ? 'Künye' : lang === 'ar' ? 'بصمة' : lang === 'ku' ? 'Nasname' : 'Impresum'}</h4>
            <p>ZVR-Zahl: (bitte einfügen)<br/>Behörde: LPD Wien</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Verein AGIT. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}
