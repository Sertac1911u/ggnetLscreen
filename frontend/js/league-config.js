// Lig Tabloları Konfigürasyonu
const LEAGUE_CONFIG = [
    {
        name: "TRENDYOL SÜPER LİG",
        endpoint: "/live",
        displayName: "SÜPER LİG",
        priority: 1
    },
    {
        name: "TFF 1. LİG", 
        endpoint: "/live/league/tff-1",
        displayName: "TFF 1. LİG",
        priority: 2
    },
    {
        name: "TFF 2. LİG KIRMIZI GRUP",
        endpoint: "/live/league/tff-2/group/1", 
        displayName: "TFF 2. LİG KIRMIZI",
        priority: 3
    },
    {
        name: "TFF 2. LİG BEYAZ GRUP",
        endpoint: "/live/league/tff-2/group/2",
        displayName: "TFF 2. LİG BEYAZ", 
        priority: 4
    },
    {
        name: "TFF 3. LİG 1. GRUP",
        endpoint: "/live/league/tff-3/group/1",
        displayName: "TFF 3. LİG 1. GRUP",
        priority: 5
    },
    {
        name: "TFF 3. LİG 2. GRUP", 
        endpoint: "/live/league/tff-3/group/2",
        displayName: "TFF 3. LİG 2. GRUP",
        priority: 6
    },
    {
        name: "TFF 3. LİG 3. GRUP",
        endpoint: "/live/league/tff-3/group/3", 
        displayName: "TFF 3. LİG 3. GRUP",
        priority: 7
    },
    {
        name: "TFF 3. LİG 4. GRUP",
        endpoint: "/live/league/tff-3/group/4",
        displayName: "TFF 3. LİG 4. GRUP", 
        priority: 8
    },
    {
        name: "AMATÖR LİG 1. GRUP",
        endpoint: "/live/league/amateur/group/1",
        displayName: "AMATÖR 1. GRUP",
        priority: 9
    },
    {
        name: "AMATÖR LİG 2. GRUP", 
        endpoint: "/live/league/amateur/group/2",
        displayName: "AMATÖR 2. GRUP",
        priority: 10
    },
    {
        name: "AMATÖR LİG 3. GRUP",
        endpoint: "/live/league/amateur/group/3",
        displayName: "AMATÖR 3. GRUP",
        priority: 11
    },
    {
        name: "AMATÖR LİG 4. GRUP",
        endpoint: "/live/league/amateur/group/4", 
        displayName: "AMATÖR 4. GRUP",
        priority: 12
    },
    {
        name: "AMATÖR LİG 5. GRUP",
        endpoint: "/live/league/amateur/group/5",
        displayName: "AMATÖR 5. GRUP",
        priority: 13
    },
    {
        name: "AMATÖR LİG 6. GRUP",
        endpoint: "/live/league/amateur/group/6", 
        displayName: "AMATÖR 6. GRUP",
        priority: 14
    },
    {
        name: "AMATÖR LİG 7. GRUP", 
        endpoint: "/live/league/amateur/group/7",
        displayName: "AMATÖR 7. GRUP",
        priority: 15
    },
    {
        name: "AMATÖR LİG 8. GRUP",
        endpoint: "/live/league/amateur/group/8",
        displayName: "AMATÖR 8. GRUP", 
        priority: 16
    },
    {
        name: "AMATÖR LİG 9. GRUP",
        endpoint: "/live/league/amateur/group/9",
        displayName: "AMATÖR 9. GRUP",
        priority: 17
    },
    {
        name: "AMATÖR LİG 10. GRUP",
        endpoint: "/live/league/amateur/group/10",
        displayName: "AMATÖR 10. GRUP", 
        priority: 18
    }
];

// Lig rotasyon ayarları
const LEAGUE_ROTATION_CONFIG = {
    interval: 5000, // 5 saniye
    animationDuration: 800, // 0.8 saniye
    pauseOnHover: true
};

// Mevcut lig indeksi
let currentLeagueIndex = 0;

// Lig verilerini önbellek
const leagueDataCache = {};

// Lig verisi getir
async function fetchLeagueData(endpoint) {
    try {
        if (leagueDataCache[endpoint]) {
            return leagueDataCache[endpoint];
        }
        
        const response = await fetch(`${API_BASE_URL}${endpoint}`);
        const data = await response.json();
        
        // Önbelleğe al (5 dakika)
        leagueDataCache[endpoint] = data;
        setTimeout(() => {
            delete leagueDataCache[endpoint];
        }, 5 * 60 * 1000);
        
        return data;
    } catch (error) {
        console.error('Lig verisi yüklenemedi:', endpoint, error);
        return null;
    }
}