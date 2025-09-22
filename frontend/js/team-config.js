// Takım Resimleri Konfigürasyonu (img klasöründeki dosyalar)
const TEAM_IMAGES = {
    // Süper Lig Takımları
    "KOCAELİSPOR": "img/kocaelispor.png",
    "GALATASARAY": "img/galatasaray.png",
    "FENERBAHÇE": "img/fenerbahce.png",
    "BEŞİKTAŞ": "img/besiktas.png",
    "TRABZONSPOR": "img/trabzonspor.png",
    "BAŞAKŞEHİR": "img/basaksehir.png",
    "KONYASPOR": "img/konyaspor.png",
    "ALANYASPOR": "img/alanyaspor.png",
    "KASIMPAŞA": "img/kasimpasa.png",
    "GAZİANTEPSPOR": "img/gaziantepspor.png",
    "ANTALYASPOR": "img/antalyaspor.png",
    "KAYSERİSPOR": "img/kayserispor.png",
    "FATİH KARAGÜMRÜK": "img/karagumruk.png",
    "RİZESPOR": "img/rizespor.png",
    "GÖZTEPE": "img/goztepe.png",
    "SAMSUNSPOR": "img/samsunspor.png",
    "GENÇLERBIRLIĞI": "img/genclerbirligi.png",
    
    // TFF 1. Lig
    "EYÜPSPOR": "img/eyupspor.png",
    
    // Varsayılan rakip takım resmi
    "default_rival": "img/rivals.png",
    
    // Varsayılan takım resmi
    "default_team": "img/rivals.png"
};

// Lig logoları (şimdilik hepsi aynı)
const LEAGUE_LOGOS = {
    "TRENDYOL SÜPER LİG": "img/superlig-logo.png",
    "TFF 1. LİG": "img/superlig-logo.png",
    "TFF 2. LİG KIRMIZI GRUP": "img/superlig-logo.png",
    "TFF 2. LİG BEYAZ GRUP": "img/superlig-logo.png",
    "TFF 3. LİG 1. GRUP": "img/superlig-logo.png",
    "TFF 3. LİG 2. GRUP": "img/superlig-logo.png",
    "TFF 3. LİG 3. GRUP": "img/superlig-logo.png",
    "TFF 3. LİG 4. GRUP": "img/superlig-logo.png",
    "AMATÖR LİG 1. GRUP": "img/superlig-logo.png",
    "AMATÖR LİG 2. GRUP": "img/superlig-logo.png",
    "AMATÖR LİG 3. GRUP": "img/superlig-logo.png",
    "AMATÖR LİG 4. GRUP": "img/superlig-logo.png",
    "AMATÖR LİG 5. GRUP": "img/superlig-logo.png",
    "AMATÖR LİG 6. GRUP": "img/superlig-logo.png",
    "AMATÖR LİG 7. GRUP": "img/superlig-logo.png",
    "AMATÖR LİG 8. GRUP": "img/superlig-logo.png",
    "AMATÖR LİG 9. GRUP": "img/superlig-logo.png",
    "AMATÖR LİG 10. GRUP": "img/superlig-logo.png",
    
    "default": "img/superlig-logo.png"
};

// Takım resmini getir
function getTeamImage(teamName) {
    if (!teamName) return TEAM_IMAGES["default_team"];
    
    const normalizedName = teamName.toUpperCase().trim();
    
    // Kocaelispor kontrolü
    if (normalizedName.includes("KOCAELİ")) {
        return TEAM_IMAGES["KOCAELİSPOR"];
    }
    
    return TEAM_IMAGES[normalizedName] || TEAM_IMAGES["default_rival"];
}

// Lig logosunu getir
function getLeagueLogo(leagueName) {
    if (!leagueName) return LEAGUE_LOGOS["default"];
    
    const normalizedName = leagueName.toUpperCase().trim();
    return LEAGUE_LOGOS[normalizedName] || LEAGUE_LOGOS["default"];
}

// Kocaeli mi kontrolü
function isKocaeli(teamName) {
    if (!teamName) return false;
    return teamName.toUpperCase().includes("KOCAELİ");
}