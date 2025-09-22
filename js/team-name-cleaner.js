// Takım İsmi Temizleme Konfigürasyonu
// API'den gelen tüm takım isimleri (her iki tarafta aynı isim - sen editleyeceksin)

const TEAM_NAME_MAPPINGS = {
    // Süper Lig Takımları
    "KOCAELİSPOR": "KOCAELİSPOR",
    "GALATASARAY": "GALATASARAY", 
    "FENERBAHÇE": "FENERBAHÇE",
    "BEŞİKTAŞ": "BEŞİKTAŞ",
    "TRABZONSPOR": "TRABZONSPOR",
    "BAŞAKŞEHİR": "BAŞAKŞEHİR",
    "ALANYASPOR": "ALANYASPOR",
    "KAYSERİSPOR": "KAYSERİSPOR",
    "SİVASSPOR": "SİVASSPOR",
    "ANTALYASPOR": "ANTALYASPOR",
    "KONYASPOR": "KONYASPOR",
    "KASIMPAŞA": "KASIMPAŞA",
    "GAZİANTEPSPOR": "GAZİANTEPSPOR",
    "FATİH KARAGÜMRÜK": "FATİH KARAGÜMRÜK",
    "RİZESPOR": "RİZESPOR",
    "GÖZTEPE": "GÖZTEPE",
    "SAMSUNSPOR": "SAMSUNSPOR",
    "HATAYSPOR": "HATAYSPOR",
    "ANKARAGÜCÜ": "ANKARAGÜCÜ",
    "İSTANBULSPOR": "İSTANBULSPOR",
    "GİRESUNSPOR": "GİRESUNSPOR",
    "ADANA DEMİRSPOR": "ADANA DEMİRSPOR",
    "PENDİKSPOR": "PENDİKSPOR",
    "GENÇLERBIRLIĞI": "GENÇLERBIRLIĞI",
    
    // TFF 1. Lig
    "EYÜPSPOR": "EYÜPSPOR",
    "ERZURUMSPOR": "ERZURUMSPOR",
    "BANDıRMASPOR": "BANDıRMASPOR",
    "SAKARYASPOR": "SAKARYASPOR",
    "BOLUSPOR": "BOLUSPOR",
    "KEÇIÖRENGÜCÜ": "KEÇIÖRENGÜCÜ",
    "ADANASPOR": "ADANASPOR",
    "ALTINORDU": "ALTINORDU",
    "ÇORUM FK": "ÇORUM FK",
    "İSTANBULSPOR A.Ş.": "İSTANBULSPOR",
    "MANİSA FK": "MANİSA FK",
    
    // TFF 2. Lig
    "68 AKSARAY BELEDİYESPOR": "68 AKSARAY BELEDİYESPOR",
    "24 ERZİNCAN SPK": "24 ERZİNCAN SPK",
    "KARACABEY BELEDİYESPOR": "KARACABEY BELEDİYESPOR",
    "MENEMEN FK": "MENEMEN FK",
    "SERIK BELEDİYESPOR": "SERIK BELEDİYESPOR",
    "DİYARBEKİRSPOR": "DİYARBEKİRSPOR",
    "KARAGÜMRÜK": "KARAGÜMRÜK"
};

// Özel durumlar için regex temizleme kuralları
const TEAM_NAME_REGEX_RULES = [
    // Sponsor isimlerini kaldır (büyük harf + takım adı)
    {
        pattern: /^[A-Z]+\s+([A-ZİÜÇĞŞÖ]+(?:\s+[A-ZİÜÇĞŞÖ]+)*)$/,
        replacement: '$1'
    },
    // A.Ş., FK, SK gibi ekler
    {
        pattern: /\s+(A\.Ş\.|FK|SK|SPOR\s+KULÜBÜ)$/,
        replacement: ''
    },
    // Yıl ile başlayan takım isimleri (1922 KONYA SPOR gibi)
    {
        pattern: /^\d{4}\s+(.+)$/,
        replacement: '$1'
    }
];

// Takım ismini temizle
function cleanTeamName(teamName) {
    if (!teamName) return teamName;
    
    let cleanName = teamName.toUpperCase().trim();
    
    // Önce direkt mapping'leri kontrol et
    if (TEAM_NAME_MAPPINGS[cleanName]) {
        return TEAM_NAME_MAPPINGS[cleanName];
    }
    
    // Regex kurallarını uygula
    for (const rule of TEAM_NAME_REGEX_RULES) {
        if (rule.pattern.test(cleanName)) {
            cleanName = cleanName.replace(rule.pattern, rule.replacement);
            break;
        }
    }
    
    // Son temizlik
    cleanName = cleanName.trim();
    
    return cleanName || teamName;
}

// Toplu takım ismi temizleme
function cleanTeamNames(teams) {
    if (Array.isArray(teams)) {
        return teams.map(team => {
            if (typeof team === 'object' && team.team_name) {
                return {
                    ...team,
                    team_name: cleanTeamName(team.team_name),
                    original_name: team.team_name
                };
            } else if (typeof team === 'string') {
                return cleanTeamName(team);
            }
            return team;
        });
    }
    return teams;
}

// Test fonksiyonu
function testTeamNameCleaning() {
    const testNames = [
        "TÜMOSSAN KOCAELİSPOR",
        "RAMS BAŞAKŞEHİR", 
        "1922 KONYA SPOR",
        "YUKATEL KAYSERİSPOR",
        "İSTANBULSPOR A.Ş."
    ];
    
    console.log('Team Name Cleaning Tests:');
    testNames.forEach(name => {
        console.log(`${name} -> ${cleanTeamName(name)}`);
    });
}