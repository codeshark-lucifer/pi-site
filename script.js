/* script.js
   - Provides Khmer <-> English toggle (simple client-side)
   - Small UI helpers
*/

const i18n = {
  // minimal English translations for core keys used in pages
  en: {
    "nav.home":"Home","nav.dest":"Destination","nav.trans":"Transport","nav.book":"Booking","nav.part":"Partners","nav.contact":"Contact",
    "home.title":"Welcome to Battambang","home.subtitle":"Culture, history and fresh nature","home.explore":"Explore Destinations",
    "card.banan":"Phnom Banan (Wat Banan)","card.banan_text":"Ancient hill-top temple with views.","card.bamboo":"Bamboo Train","card.bamboo_text":"Unique local rail experience.","card.sampov":"Phnom Sampov","card.sampov_text":"Historic hill with temples.","card.more":"More",

    "dest.title":"Destinations in Battambang","dest.banan":"Phnom Banan","dest.banan_text":"A historic hill-top temple — great for sunset views.",
    "dest.sampov":"Phnom Sampov","dest.sampov_text":"A cultural hill with temples and viewpoints.",
    "dest.bamboo":"Bamboo Train","dest.bamboo_text":"Local makeshift rail ride for tourists.",

    "trans.title":"Getting to Battambang","trans.bybus":"By bus","trans.bybus_text":"Buses run Phnom Penh ⇄ Battambang (about 4–6 hours).",
    "trans.bytrain":"By train / Bamboo Train","trans.bytrain_text":"Scheduled rail and tourist bamboo train nearby.",
    "trans.tips":"Important tips","trans.tip1":"Book ahead during high season.","trans.tip2":"Night travel can be slow — be careful.",

    "book.title":"Booking services","book.lead":"Fill the form below to request a booking (demo).",
    "book.name":"Name","book.email":"Email","book.service":"Service","book.opt1":"Hotel","book.opt2":"Tour / Guide","book.opt3":"Transport","book.msg":"Additional info","book.submit":"Request booking",

    "part.title":"Partners & Collaborators","part.lead":"We work with hotels, transport and local guides.",

    "contact.title":"Contact us","contact.name":"Name","contact.email":"Email","contact.msg":"Message","contact.send":"Send message",
    "contact.info":"Basic info","contact.addr":"Address: Battambang City, Battambang Province, Cambodia","contact.phone":"Phone: +855 12 345 678","contact.map":"Approx. location",

    "footer.title":"Quick links","footer.book":"Booking","footer.contact":"Contact"
  }
};

// set year
document.addEventListener("DOMContentLoaded", ()=>{
  const yearEl = document.getElementById("year");
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // language toggle button(s)
  const toggles = document.querySelectorAll("#langToggle, #langToggle2, #langToggle3, #langToggle4, #langToggle5, #langToggle6");
  toggles.forEach(btn=>{
    if(!btn) return;
    btn.addEventListener("click", toggleLang);
  });

  // fill translations default = Khmer (no-op). But we support en via i18n object.
});

let currentLang = "km"; // default Khmer

function toggleLang(){
  currentLang = (currentLang === "km") ? "en" : "km";
  applyTranslations();
}

function applyTranslations(){
  if(currentLang === "km") {
    // just set innerText back to Khmer text already in HTML (we don't have a store),
    // so reload page to reset to original Khmer. Simpler and safe.
    window.location.reload();
    return;
  }
  // set English text from i18n.en
  const en = i18n.en;
  for(const key in en){
    const els = document.querySelectorAll("[data-i18n-key='"+key+"']");
    els.forEach(el=>{
      el.textContent = en[key];
    });
  }
}

/* contact/booking forms — demo only: show alert */
document.addEventListener("submit", (e)=>{
  if(e.target && (e.target.id === "bookingForm" || e.target.id === "contactForm")){
    e.preventDefault();
    alert("Thanks! (Demo form) — We would send your details to our booking/contact team.");
    e.target.reset();
  }
});
