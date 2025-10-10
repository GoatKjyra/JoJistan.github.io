const characters = [
 {
    name: "Hermit Purple",
    part: "Stardust Crusaders:",
    img: "images/hermit_purple.jpeg",
    desc: "Hermit Purple, Joseph Joestar’ın Stand gücüdür ve mor, dikenli asma benzeri enerjiden oluşur. Bu Stand, doğrudan saldırıdan çok keşif ve bilgi toplama amaçlı kullanılır. Hermit Purple, fotoğraf makineleri veya televizyonlar aracılığıyla uzaktaki görüntüleri yansıtarak ruhsal bağlantı kurabilir ve ayrıca nesnelere sarılarak tırmanma veya kırma gücü gösterebilir. Joseph, zekâsı ve deneyimiyle bu Stand’i savaşta yaratıcı biçimde kullanmış, özellikle Stardust Crusaders döneminde ekibin stratejik beyni olmuştur.",
  },
  {
    name: "Star Platinum",
    part: "Stardust Crusaders:",
    img: "images/star_platinum.jpeg",
    desc: "Star Platinum, Jotaro Kujo’nun Stand gücüdür ve inanılmaz fiziksel güç, hız ve hassasiyetle tanınır. Yakın menzilli bir Stand olan Star Platinum, yumruk hızında saldırılar yapabilir ve düşmanlarını saniyeler içinde etkisiz hale getirebilir. “ORA ORA ORA!” savaş çığlığıyla bilinen bu Stand, zamanla Star Platinum: The World formuna evrilmiş ve zamanı kısa süre durdurma yeteneği kazanmıştır. Jotaro, bu gücüyle Stardust Crusaders döneminde Dio’ya karşı savaşmış, Joestar soyunun en ikonik kahramanlarından biri haline gelmiştir.",
  },
  {
    name: "Crazy Diamond",
    part: "Diamond is Unbreakable:",
    img: "images/crazy_diamond.jpeg",
    desc: "Crazy Diamond, Josuke Higashikata’nın Stand gücüdür ve olağanüstü hız, güç ve hassasiyete sahiptir. Yakın menzilli bir Stand olan Crazy Diamond, “iyileştirme” yeteneğiyle hasar görmüş nesne veya canlıları eski hâline getirebilir, ancak ölüleri diriltemez. Bu gücüyle Josuke hem saldırı hem savunma alanında yaratıcı stratejiler kullanır. “DORARARA!” savaş çığlığıyla tanınan Crazy Diamond, Diamond is Unbreakable döneminde dostlarını korumak ve Morioh’u savunmak için Joestar mirasını gururla taşımıştır.",
  },
  {
    name: "Gold Experience",
    part: "Golden Wind:",
    img: "images/gold_experience.jpeg",
    desc: "Gold Experience, Giorno Giovanna’nın Stand gücüdür ve yaşam enerjisini kontrol etme yeteneğiyle tanınır. Bu Stand, cansız nesnelere hayat vererek onları canlılara dönüştürebilir, böylece saldırı, savunma ve iyileştirmede yaratıcı biçimde kullanılabilir. Gold Experience, daha sonra Gold Experience Requiem formuna evrilmiş ve “sonsuz sıfır” gücüyle düşmanlarını eylem öncesine döndürerek yenilmez hale gelmiştir. Giorno, bu güçle Golden Wind döneminde adalet ve düzen için mücadele etmiş, mafya dünyasında Joestar iradesini sürdürmüştür.",
  },
  {
    name: "Stone Free",
    part: "Stone Ocean:",
    img: "images/stone_free.jpeg",
    desc: "Stone Free, Jolyne Cujoh’un Stand gücüdür ve ip benzeri yapısıyla saldırı, savunma ve hareket kabiliyetini birleştirir. Bu Stand, Jolyne’in vücudunu ip haline getirerek dar alanlarda hareket etmesini, tuzaklar kurmasını ve düşman saldırılarını savuşturmasını sağlar. Yakın menzilde güçlü fiziksel darbeler indirebilen Stone Free, aynı zamanda zekice stratejilerle uzaktan da etkili olabilir. Jolyne, bu gücüyle Stone Ocean döneminde özgürlük ve adalet için savaşmış, Joestar mirasını cesaretle sürdürmüştür.",
  },
  {
    name: "Tusk ACT4",
    part: "Steel Ball Run:",
    img: "images/tusk.jpeg",
    desc: "Tusk Act 4, Johnny Joestar’ın en gelişmiş Stand formudur ve dönen enerji gücünü maksimum seviyede kullanır. Altın dönüş prensibine dayanan bu form, sınırsız dönme enerjisiyle uzay-zaman sınırlarını aşabilir ve hedefi sonsuz döngüde hapsedebilir. Tusk Act 4, at üzerinde kullanıldığında en güçlü hâline ulaşır ve Johnny’nin azmiyle birleştiğinde neredeyse durdurulamaz bir güç olur. Bu Stand, Steel Ball Run döneminde Johnny’nin inancı, kararlılığı ve Joestar iradesinin zirvesini temsil etmiştir.",
  },
  {
    name: "Soft & Wet",
    part: "JoJolion:",
    img: "images/soft_wet.jpeg",
    desc: "Soft & Wet, Josuke Higashikata’nın (Part 8) Stand gücüdür ve balon benzeri kabarcıklarla çeşitli özellikleri “çalma” yeteneğine sahiptir. Bu kabarcıklar ses, sürtünme veya hatıra gibi kavramları bile emip etkisiz hale getirebilir. Soft & Wet, hem saldırı hem savunma alanında yaratıcı biçimde kullanılabilir ve hassas gücüyle düşmanları şaşırtır. Josuke, bu Stand’i Jojolion döneminde kimliğini keşfetmek, gizemleri çözmek ve sevdiklerini korumak için kullanmış, Joestar iradesini sakin ama kararlı biçimde sürdürmüştür.",
  },
  {
    name: "The World",
    part: "Stardust Crusaders:",
    img: "images/the_world.jpeg",
    desc: "The World, DIO’nun efsanevi Stand gücüdür ve hem gücü hem de zamanı durdurma yeteneğiyle tanınır. Yakın menzilli bir Stand olan The World, olağanüstü hız ve dayanıklılığa sahiptir; tek bir hamlede düşmanlarını yok edebilir. En ikonik gücü olan “Time Stop”, zamanı birkaç saniyeliğine dondurarak DIO’ya mutlak üstünlük sağlar. Bu Stand, Stardust Crusaders döneminde Star Platinum’un en büyük rakibi olmuş ve DIO’nun tanrısal hırsını simgelemiştir."
  },
  {
    name: "Wonder Of U",
    part: "JoJolion:",
    img: "images/wou.jpeg",
    desc: "Wonder of U (WOU), Toru’nun son derece tehlikeli Stand gücüdür ve “felaket yasası” prensibiyle çalışır. Bu Stand, kendisine zarar vermeye niyetlenen herkesi peş peşe gelen kazalarla cezalandırır, böylece saldırı imkânsız hale gelir. WOU aynı zamanda insan formunda görünebilir, bu da onun tespit edilmesini zorlaştırır. Uzak menzilli ve savunma ağırlıklı bir Stand olan Wonder of U, Jojolion döneminde kaderin değiştirilemezliğini temsil eder ve Joestar soyuna karşı en ölümcül tehditlerden biri olmuştur.",
  },
  {
    name: "Heavens Door",
    part: "Diamond is Unbreakable:",
    img: "images/heavens_door.jpeg",
    desc: "Heaven’s Door, Rohan Kishibe’nin Stand gücüdür ve insanları kitap gibi açarak anılarını okuma ve değiştirme yeteneğine sahiptir. Bu Stand, hem bilgi toplamak hem de stratejik üstünlük sağlamak için kullanılır; düşmanlarının geçmişini ve planlarını açığa çıkarabilir veya onları manipüle edebilir. Yakın menzilli ve zekâ odaklı bir Stand olan Heaven’s Door, Rohan’ın sanatçı kişiliğiyle birleşerek hem savunma hem saldırı alanında yaratıcı biçimde kullanılmasını sağlar ve Diamond is Unbreakable döneminde Morioh’un en sıra dışı Stand güçlerinden biri olarak öne çıkar.",
  },
  {
    name: "King Crimson",
    part: "Golden Wind:",
    img: "images/king_crimson.jpeg",
    desc: "King Crimson, Diavolo’nun Stand gücüdür ve zamanı kısa süreliğine atlama yeteneğine sahiptir. Bu Stand, düşmanların hareketlerini öngörüp onları etkisiz hâle getirme konusunda son derece etkilidir ve yakın menzilde büyük fiziksel güç sunar. King Crimson, hem saldırı hem savunma alanında stratejik üstünlük sağlar ve Diavolo’nun acımasız ve zekice taktiklerini destekler. Golden Wind döneminde Joestar nesline karşı en ölümcül tehditlerden biri olmuş ve mafya dünyasında rakipsiz bir güç olarak öne çıkmıştır.",
  },
  {
    name: "Made In Heaven",
    part: "Stone Ocean:",
    img: "images/made_in_heaven.jpeg",
    desc: "Made in Heaven, Enrico Pucci’nin Stand’ının nihai formudur ve zamanı aşırı hızlandırma yeteneğine sahiptir. Bu Stand, evrendeki zamanı hızla ilerleterek olayların akışını değiştirebilir ve düşmanlarını neredeyse hiçbir şekilde etkisiz hale getiremez hâle getirir. Yakın ve uzun menzilde güçlü olan Made in Heaven, stratejik ve taktiksel üstünlüğü maksimuma çıkarır. Pucci, bu güçle Stone Ocean döneminde evrenin kaderini kontrol etmeyi amaçlamış ve Joestar soyuna karşı mutlak bir tehdit oluşturmuştur.",
  },
  {
    name: "Ball Breaker",
    part: "Steel Ball Run:",
    img: "images/ball_breaker.jpeg",
    desc: "Ball Breaker, Gyro Zeppeli’nin Stand gücüdür ve Spin enerjisini maksimum seviyede kullanarak devasa güç ve hız elde eder. Bu Stand, düşmanlarına karşı yıkıcı dönen saldırılar yapabilir ve Spin’in doğal enerji akışını manipüle ederek üstünlük sağlar. Yakın ve orta menzilde etkili olan Ball Breaker, Gyro’nun strateji ve zekâsıyla birleştiğinde neredeyse durdurulamaz hâle gelir. Steel Ball Run döneminde bu Stand, Gyro’nun mirasını ve Spin tekniğinin gücünü temsil etmiştir.",
  },
  {
    name: "Silver Chariot",
    part: "Stardust Crusaders:",
    img: "images/silver_chariot.jpeg",
    desc: "Silver Chariot, Jean Pierre Polnareff’in Stand gücüdür ve olağanüstü hız, çeviklik ve kılıç ustalığıyla tanınır. Zırhlı bir şövalye formuna sahip olan bu Stand, inanılmaz reflekslerle düşman saldırılarını savuşturabilir ve milisaniyelik isabetlerle karşı saldırıya geçebilir. Zırhını çıkardığında hızı daha da artar ancak savunması zayıflar. Stardust Crusaders döneminde Polnareff, Silver Chariot’u ustalıkla kullanarak dostlarını korumuş ve Joestar ekibinin en güvenilir savaşçılarından biri olmuştur.",
  },
  {
    name: "Killer Queen",
    part: "Diamond is Unbreakable:",
    img: "images/killer_queen.jpeg",
    desc: "Killer Queen, Yoshikage Kira’nın Stand gücüdür ve dokunduğu her şeyi patlayıcıya dönüştürme yeteneğine sahiptir. Zarif ama ölümcül bir görünüme sahip olan bu Stand, hem yakın dövüşte hem de uzaktan taktiksel saldırılarda etkilidir. Killer Queen’in ayrıca Sheer Heart Attack ve Bites the Dust adında iki alt yeteneği bulunur; biri ısıya duyarlı otomatik bomba, diğeri ise zamanı geri sararak Kira’yı koruyan bir güçtür. Diamond is Unbreakable döneminde Killer Queen, Morioh’un en tehlikeli tehdidi olmuştur.",
  },
  {
    name: "Sticky Fingers",
    part: "Golden Wind:",
    img: "images/sticky_fingers.jpeg",
    desc: "Sticky Fingers, Bruno Bucciarati’nin Stand gücüdür ve fermuar temelli yetenekleriyle tanınır. Bu Stand, yüzeylerde fermuarlar açarak nesneleri veya insanları parçalara ayırabilir, onları saklayabilir ya da birleştirebilir. Yakın menzilli dövüşte hızlı ve güçlüdür, hem saldırı hem savunmada esnek stratejiler sunar. Bucciarati, Sticky Fingers’ı zekice kullanarak düşmanlarını şaşırtmış ve Golden Wind döneminde takımının en güvenilir savaşçısı olmuştur.",
  },
  {
    name: "Weather Report",
    part: "Stone Ocean:",
    img: "images/weather.jpeg",
    desc: "Weather Report, Weather Report’un Stand’ıdır ve atmosferi kontrol etme gücüne sahiptir. Hava basıncını, nemi ve rüzgar akımlarını manipüle ederek yağmur, sis, hortum hatta oksijen yoğunluğunu bile değiştirebilir. Bu Stand, hem savunma hem saldırı yönünden son derece tehlikelidir; kullanıcı isterse düşmanını havasız bırakarak öldürebilir. Weather Report’un bastırılmış anıları geri döndüğünde, Stand’ının en ölümcül formu olan Heavy Weather ortaya çıkar ve gökkuşağı yoluyla insanları salyangozlara dönüştürür.",
  },
  {
    name: "D4C (Dirty Deeds Done Dirt Cheap)",
    part: "Steel Ball Run:",
    img: "images/d4c.jpeg",
    desc: "D4C (Dirty Deeds Done Dirt Cheap), Funny Valentine’ın Stand gücüdür ve paralel evrenler arasında geçiş yapma yeteneğine sahiptir. Bu Stand, farklı evrenlerdeki versiyonlarını çağırabilir ve onları kontrol ederek düşmanlarını şaşırtabilir veya yok edebilir. Yakın ve uzun menzilde stratejik üstünlük sağlayan D4C, neredeyse yenilmez bir avantaj sunar. Valentine, bu Stand’i zekice kullanarak Steel Ball Run döneminde Joestar soyuna ve rakiplerine karşı mutlak üstünlük sağlamış ve yarışın kaderini kendi lehine çevirmiştir.",
  },
  {
    name: "Paisley Park",
    part: "JoJolion:",
    img: "images/paisley_park.jpeg",
    desc: "Paisley Park, Yasuho Hirose’nin Stand gücüdür ve navigasyon ve yön bulma yeteneğiyle öne çıkar. Bu Stand, elektronik cihazlarla etkileşime girerek bilgi toplama, yol bulma ve tehlikeleri önceden tespit etme becerisi sağlar. Ayrıca Yasuho’nun çevresindeki olayları kontrol etmesine ve stratejik avantaj elde etmesine yardımcı olur. Yakın ve orta menzilde kullanışlı olan Paisley Park, Jojolion döneminde Yasuho’nun zekâsını ve yaratıcılığını güçlendirmiş, onu Joestar soyunun güvenilir müttefiklerinden biri hâline getirmiştir.",
  },
];

const container = document.querySelector(".character-container");
const searchInput = document.getElementById("searchInput");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const popupName = document.getElementById("popup-name");
const popupDesc = document.getElementById("popup-desc");
const closeBtn = document.querySelector(".close-btn");
const music = document.getElementById("bg-music");
const themeBtn = document.getElementById("theme-toggle");
const musicBtn = document.getElementById("music-toggle");

function displayCharacters(list) {
  container.innerHTML = "";

  // Part'lara göre gruplandır
  const parts = {};
  list.forEach((char) => {
    if (!parts[char.part]) parts[char.part] = [];
    parts[char.part].push(char);
  });

  // Her part için başlık ve kartlar
  for (const [partName, chars] of Object.entries(parts)) {
    const partSection = document.createElement("div");
    partSection.classList.add("part-section");

    const title = document.createElement("h2");
    title.textContent = partName;
    partSection.appendChild(title);

    const grid = document.createElement("div");
    grid.classList.add("character-grid");

    chars.forEach((char) => {
      const card = document.createElement("div");
      card.classList.add("character-card");
      card.innerHTML = `
        <img src="${char.img}" alt="${char.name}">
        <h3>${char.name}</h3>
      `;
      card.addEventListener("click", () => openPopup(char));
      grid.appendChild(card);
    });

    partSection.appendChild(grid);
    container.appendChild(partSection);
  }
}

function openPopup(char) {
  popup.classList.remove("hidden");
  popupImg.src = char.img;
  popupName.textContent = char.name;
  popupDesc.textContent = char.desc;
}

closeBtn.addEventListener("click", () => popup.classList.add("hidden"));

searchInput.addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase();
  const filtered = characters.filter(c =>
    c.name.toLowerCase().includes(term) ||
    c.part.toLowerCase().includes(term)
  );
  displayCharacters(filtered);
});

document.addEventListener("DOMContentLoaded", () => {
  displayCharacters(characters);
  music.volume = 0.1;
});

let isMusicPlaying = false;
musicBtn.addEventListener("click", () => {
  if (isMusicPlaying) {
    music.pause();
    musicBtn.textContent = "🎵 Müzik: Kapalı";
  } else {
    music.play().catch(() => console.log("Müzik başlatılamadı."));
    musicBtn.textContent = "🎵 Müzik: Açık";
  }
  isMusicPlaying = !isMusicPlaying;
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("day");
  if (document.body.classList.contains("day")) {
    themeBtn.textContent = "🌙 Tema: Gündüz";
  } else {
    themeBtn.textContent = "🌞 Tema: Ay";
  }
});

