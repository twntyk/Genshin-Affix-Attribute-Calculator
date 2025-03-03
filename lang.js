document.addEventListener("DOMContentLoaded", function () {
    const languageSelector = document.getElementById("language-selector");

    if (!languageSelector) {
        console.error("❌ Елемент #language-selector не знайдено!");
        return;
    }

    // Отримуємо мову з URL, localStorage або браузера
    const urlParams = new URLSearchParams(window.location.search);
    let lang = urlParams.get("lang") || localStorage.getItem("lang") || navigator.language.substring(0, 2);
 console.log("🌍 Вибрана мова:", lang);
    // Обробляємо можливі значення мови
    if (!["en", "ru", "uk"].includes(lang)) {
        lang = "en"; // Мова за замовчуванням
    }

   

    // Встановлюємо мову в селекторі
    languageSelector.value = lang;
	document.documentElement.lang = lang;
    // Додаємо обробник зміни мови
    languageSelector.addEventListener("change", function () {
        const newLang = languageSelector.value;
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.set("lang", newLang);
        localStorage.setItem("lang", newLang); // Зберігаємо вибір мови
        window.location.href = newUrl.toString();
    });

    // Застосовуємо переклад
    applyTranslation(lang);
});

function applyTranslation(lang) {
    const translations = {
        "en": {
            "description": "This tool helps you calculate artifact affix/attribute chances in Genshin Impact. Get precise probabilities for different stats and optimize your artifacts!",
            "download-setup": "Download Setup.exe ZIP",
            "download-portable": "Download (Portable) ZIP",
            "main-affix-title": "Main Affix",
            "main-affix-description": "The main affix is always HP for the Flower of Life and always ATK for the Plume of Death.",
            "sands-title": "Sands of Eon",
            "goblet-title": "Goblet of Eonothem",
            "circlet-title": "Circlet of Logos",
            "minor-affix-title": "Minor Affix Attribute",
            "minor-affix-description": "When rolling the initial minor affixes or adding a minor affix upon a new tier, the probability for each minor affix is dependent on the available pool and calculated based on fixed weight.",
            "formula-title": "Formula for Minor Affix Probability",
            "formula-description": "The probability for a specific minor affix is calculated as:",
            "example-title": "Example Calculation",
            "example-description": "For example, if a 5-Star Plume of Death already has ATK%, Energy Recharge%, and CRIT Rate% minor affixes when it reaches level 4, the probability of obtaining CRIT DMG% as a 4th minor affix is:",
            "upgrade-times-title": "Minor Affix Slot Upgrade Times",
            "attribute": "Attribute",
			"chance": "Chance",
			"weight": "Weight"
        },
        "ru": {
            "description": "Этот инструмент поможет вам рассчитать шансы выпадения аффиксов/доп-стат на артефакте в Genshin Impact. Получите точные вероятности для различных характеристик и оптимизируйте свои артефакты.!",
			"download-setup": "Скачать Setup.exe ZIP",
			"download-portable": "Скачать (Портативная версия) ZIP",
			"main-affix-title": "Основной аффикс/стат",
			"main-affix-description": "Основным аффиксом/статом всегда является HP для Цветка Жизни и всегда ATK для Пера Смерти.",
			"sands-title": "Пески времени",
			"goblet-title": "Кубок пространства",
			"circlet-title": "Корона разума",
			"minor-affix-title": "Второстепенный аффикс/стат",
			"minor-affix-description": "При броске начальных второстепенных аффиксов или добавлении второстепенного аффикса на новый уровень вероятность для каждого второстепенного аффикса зависит от доступного пула и рассчитывается на основе фиксированного веса.",
			"formula-title": "Формула для вычисления вероятности выпадения второстепенного аффикса/стата",
			"formula-description": "Вероятность определенного второстепенного аффикса/стата рассчитывается следующим образом:",
			"example-title": "Пример расчета",
			"example-description": "Например, если 5-звездочное Перо Смерти уже имеет второстепенные аффиксы/статы ATK%, восстановление энергии% и Шанс крита% при достижении 4-го уровня, вероятность получения Крит урона% в качестве 4-го второстепенного аффикса/стата составляет:",
			"upgrade-times-title": "Шанс улучшения второстепенного аффикса/стата n раз",
			"attribute": "Аффикс/стат",
			"chance": "Шанс",
			"weight": "Вес"
        },
        "uk": {
            "description": "Цей інструмент допоможе вам розрахувати шанси випадання афіксів/доп-стат на артефакті Genshin Impact. Отримайте точні ймовірності для різних характеристик та оптимізуйте свої артефакти!",
			"download-setup": "Завантажити Setup.exe ZIP",
			"download-portable": "Завантажити (Портативна версія) ZIP",
			"main-affix-title": "Головний афікс/стат",
			"main-affix-description": "Головним афіксом/статом завжди є HP для Квітки Життя та завжди ATK для Пера Смерті.",
			"sands-title": "Піски часу",
			"goblet-title": "Кубок простору",
			"circlet-title": "Корона розуму",
			"minor-affix-title": "Другий афікс/стат",
			"minor-affix-description": "При кидку початкових другорядних афіксів або додаванні другорядного афікса на новий рівень ймовірність для кожного другорядного афіксу залежить від доступного пулу і розраховується на основі фіксованої ваги.",
			"formula-title": "Формула для обчислення ймовірності випадання другорядного афіксу/стату",
			"formula-description": "Імовірність певного другорядного афікса/стату розраховується так:",
			"example-title": "Приклад розрахунку",
			"example-description": "Наприклад, якщо 5-зіркове Перо Смерті вже має другорядні афікси/стати ATK%, відновлення енергії% і Шанс крита% при досягненні 4-го рівня, ймовірність отримання Криту шкоди% як 4-го другорядного афіксу/стату становить:",
			"upgrade-times-title": "Шанс покращення другорядного афіксу/стату n разів",
			"attribute": "Афікс/стат",
			"chance": "Шанс",
			"weight": "Вага"
        }
    };

    Object.keys(translations[lang]).forEach(id => {
        const element = document.getElementById(id);
        if (element) element.textContent = translations[lang][id];
    });
	document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
        el.textContent = translations[lang][key];
    }
	
});

}
