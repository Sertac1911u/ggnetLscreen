// Oyuncu Resimleri Konfigürasyonu
const PLAYER_IMAGES = {
    // Mevcut oyuncu resimleri (img klasöründeki gerçek dosyalar)
    "SELÇUK İNAN": "img/selcukinan.png", // Teknik Direktör
    "ALEKSANDAR JOVANOVIC": "img/aleksandar.png", 
    "ANFERNEE JAMAL DIJKSTEEL": "img/dijksteel.png",
    "CAN KELEŞ": "img/cankeles.png",
    "KAROL LINETTY": "img/linetty.png",
    "OĞULCAN ÇAĞLAYAN": "img/ogulcan.png",
    "RYAN ISAAC MENDES": "img/ryan.png",
    "BRUNO PETKOVIC": "img/bruno.png",
    "GÖKHAN DEĞİRMENCİ": "img/gokhan.png",    
    "MUHARREM CİNAN": "img/muharrem.png",
    "AARON CHRISTOPHER BILLY ONDELE APPINDANGOYE": "img/appindangoye.png",
    "MANUEL LUIS DA SILVA CAFUMANA": "img/cafumana.png",
    "OLEKSANDR SYROTA": "img/syrota.png",
    "TAYFUR BİNGÖL": "img/tayfur.png",
    "JOSEPH NONGE BOENDE": "img/boende.png",
    
    // Teknik Direktör
    "teknik_director": "img/selcukinan.png",
    
    // Varsayılan oyuncu resmi
    "default_player": "img/player.png"
};

// Oyuncu resmini getir
function getPlayerImage(playerName) {
    if (!playerName) return PLAYER_IMAGES["default_player"];
    
    const normalizedName = playerName.toUpperCase().trim();
    return PLAYER_IMAGES[normalizedName] || PLAYER_IMAGES["default_player"];
}

// Teknik direktör resmini getir
function getCoachImage(coachName) {
    if (!coachName) return PLAYER_IMAGES["teknik_director"];
    
    const normalizedName = coachName.toUpperCase().trim();
    return PLAYER_IMAGES[normalizedName] || PLAYER_IMAGES["teknik_director"];
}