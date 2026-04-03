function switchLang(lang) {
    // 1. Sauvegarde le choix de l'utilisateur
    localStorage.setItem('lang', lang);
    // 2. Traduit tous les éléments avec data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const cle = element.getAttribute('data-i18n');
        if (translations[lang][cle]) {
            element.textContent = translations[lang][cle];
        }
    });
    // Attributs cachés : alt, aria-label, title...
    document.querySelectorAll('[data-i18n-attr]').forEach(element => {
        const config = element.getAttribute('data-i18n-attr');
        const [attribut, cle] = config.split(':');
        if (translations[lang][cle]) {
            element.setAttribute(attribut, translations[lang][cle]);
        }
    });
    // 3. Met à jour les boutons actifs
    document.getElementById('boutonfr').classList.toggle('active', lang === 'fr');
    document.getElementById('boutonen').classList.toggle('active', lang === 'en');
}
// Au chargement de la page : applique la langue sauvegardée (ou français par défaut)
const savedLang = localStorage.getItem('lang') || 'fr';
switchLang(savedLang);