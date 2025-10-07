const characters = [
  {
    name: "Jonathan Joestar",
    part: "Phantom Blood:",
    img: "images/jonathan.jpeg",
    desc: "Jonathan Joestar, 19. yüzyıl İngiltere’sinde doğmuş, Phantom Blood’un başkahramanı ve Joestar ailesinin onurlu varisidir. Asil, nazik ve cesur bir karakter olan Jonathan, üvey kardeşi Dio Brando’nun kötülükleriyle mücadele etmiş ve ailesini korumak için ölümcül savaşlara girmiştir. Hamon (Ripple) enerjisini kullanarak vampirler ve doğaüstü yaratıklarla savaşmış, fiziksel gücünü ve stratejisini ustaca birleştirmiştir. Sonunda Dio’ya karşı verdiği son mücadelede hayatını kaybetmiş olsa da mirası, sonraki Joestar nesilleri için ilham kaynağı olmuştur.",
    stand: "images/hamon.jpeg",
    standName: "Yok (Hamon Kullanıcısı)"
  },
  {
    name: "Joseph Joestar",
    part: "Battle Tendency:",
    img: "images/joseph.jpeg",
    desc: "Joseph Joestar, 1920’lerde İngiltere’de doğmuş, Battle Tendency’nin başkahramanı ve Jonathan Joestar’ın torunudur. Zeki, kurnaz ve esprili bir karakter olan Joseph, gençliğinde Hamon (Ripple) enerjisiyle Pillar Men gibi antik düşmanlarla savaşmış ve stratejik dövüşlerde zekasını kullanmıştır. İlerleyen yıllarda Stand gücü Hermit Purple’ı kazanmış, fotoğraf çekmek, telekineziyle bilgi almak ve nesneleri sararak düşmanlarını kısıtlamak gibi yetenekler göstermiştir. Torunları ve diğer JoJo nesillerini desteklemiş, mizahı ve zekasıyla düşmanlarını şaşırtmayı sürdürmüş ve Hamon ile Stand kullanımını birleştiren nadir JoJo’lardandır.",
    stand: "images/hermit_purple.jpeg",
    standName: "Hermit Purple"
  },
  {
    name: "Jotaro Kujo",
    part: "Stardust Crusaders:",
    img: "images/jotaro.jpeg",
    desc: "Jotaro Kujo, 1960’larda Japonya’da doğmuş, Stardust Crusaders’ın başkahramanı ve Joseph Joestar’ın torunudur. Sert, soğukkanlı ve kararlı bir karakter olan Jotaro, Stand gücü Star Platinum’ı kazanmış ve üstün fiziksel güç, hız ve hassasiyetle düşmanlarını alt etmiştir. Stand’ıyla uzak mesafedeki nesneleri etkileyebilir, hızlı saldırılar yapabilir ve düşmanların hareketlerini durdurabilir. Ailesi ve sevdiklerini korumak için mücadele etmiş, yolculuk boyunca deneyimli ve stratejik bir lider olarak öne çıkmıştır. Kararlılığı ve gücü sayesinde Joestar neslinin efsanevi kahramanlarından biridir.",
    stand: "images/star_platinum.jpeg",
    standName: "Star Platinum"
  },
  {
    name: "Josuke Higashikata",
    part: "Diamond is Unbreakable:",
    img: "images/josuke.jpeg",
    desc: "Josuke Higashikata, 1980’lerde Japonya’da doğmuş, Diamond is Unbreakable’ın başkahramanı ve Joseph Joestar’ın gayri meşru oğlunun torunudur. Nazik, cesur ve sevdiklerine bağlı bir karakter olan Josuke, Stand gücü Crazy Diamond’ı kazanmış ve bu Stand ile nesneleri onarma, iyileştirme ve dövüşte rakiplerine karşı üstünlük sağlama yeteneklerini kullanmıştır. Sevdiklerini ve kasabasını korumak için mücadele etmiş, düşmanlarına karşı stratejik ve yaratıcı taktikler geliştirmiştir. Mizahı, cesareti ve Stand gücü sayesinde Joestar neslinin önemli kahramanlarından biri olmuştur.",
    stand: "images/crazy_diamond.jpeg",
    standName: "Crazy Diamond"
  },
  {
    name: "Giorno Giovanna",
    part: "Golden Wind:",
    img: "images/giorno.jpeg",
    desc: "Giorno Giovanna, 1985’lerde İtalya’da doğmuş, Golden Wind’in başkahramanı ve Dio Brando’nun Jonathan Joestar’ın vücudunu kullanarak doğan oğlu torunudur. Cesur, kararlı ve adaletli bir karakter olan Giorno, Stand gücü Gold Experience’ı kazanmış ve bu Stand ile nesneleri canlı varlıklara dönüştürme, saldırı ve iyileştirme yeteneklerini kullanmıştır. Mafya dünyasında düzeni sağlamak ve masumları korumak için mücadele etmiş, strateji ve zekâsıyla düşmanlarını alt etmiş ve Joestar ile Dio soyunun mirasını kendi yolunda birleştirmiştir.",
    stand: "images/gold_experience.jpeg",
    standName: "Gold Experience"
  },
  {
    name: "Jolyne Cujoh",
    part: "Stone Ocean:",
    img: "images/jolyne.jpeg",
    desc: "Jolyne Cujoh, 2010’larda Japonya’da doğmuş, Stone Ocean’un başkahramanı ve Jotaro Kujo’nun kızıdır. Cesur, inatçı ve adaletli bir karakter olan Jolyne, Stand gücü Stone Free’yi kazanmış ve bu Stand ile kendi vücudunu ip gibi açıp hareket ettirme, saldırı ve savunma yeteneklerini kullanmıştır. Hapishane ortamında sevdiklerini ve masumları korumak için mücadele etmiş, strateji ve zekâsıyla düşmanlarını alt etmiş ve Joestar neslinin mirasını sürdürmüştür.",
    stand: "images/stone_free.jpeg",
    standName: "Stone Free"
  },
  {
    name: "Johnny Joestar",
    part: "Steel Ball Run:",
    img: "images/johnny.jpeg",
    desc: "Johnny Joestar, 1890’larda Amerika’da doğmuş, Steel Ball Run’ın başkahramanı ve Joestar ailesinin uzak bir soyudur. Hırslı, kararlı ve azimli bir karakter olan Johnny, Stand gücü Tusk’u kazanmış ve bu Stand ile mermi ve dönen enerji tekniklerini kullanarak hem saldırı hem savunma yapabilmiştir. Yaralanması ve engelliliğine rağmen yarışta ve düşmanlarına karşı strateji ve zekâsını kullanmış, hedeflerine ulaşmak için büyük fedakârlıklar göstermiş ve Joestar soyunun mirasını kendi yolunda sürdürmüştür.",
    stand: "images/tusk.jpeg",
    standName: "Tusk ACT4"
  },
  {
    name: "Josuke (Gappy)",
    part: "JoJolion:",
    img: "images/josuke8.jpeg",
    desc: "Josuke Higashikata, 2010’larda Japonya’da doğmuş, Jojolion’un başkahramanı ve Higashikata ailesinin bir üyesidir. Nazik, meraklı ve kararlı bir karakter olan Josuke, Stand gücü Soft & Wet’i kazanmış ve bu Stand ile nesnelerden çeşitli yetenekler çalma, saldırı ve savunma yapma becerilerini kullanmıştır. Ailesini ve çevresindekileri korumak için mücadele etmiş, gizemleri çözmek ve düşmanlarını alt etmek için strateji ve zekâsını kullanmış ve Joestar soyunun mirasını kendi yolunda sürdürmüştür.",
    stand: "images/soft_wet.jpeg",
    standName: "Soft & Wet"
  },
  {
    name: "DIO",
    part: "Stardust Crusaders:",
    img: "images/dio.jpeg",
    desc: "Dio Brando, 19. yüzyıl İngiltere’sinde doğmuş, Phantom Blood’un başantagonisti ve Jonathan Joestar’ın üvey kardeşidir. Hırslı, acımasız ve manipülatif bir karakter olan Dio, gençliğinde vampir güçleri kazanmış, olağanüstü hız, güç ve iyileşme yetenekleri elde etmiştir. Daha sonra Part 3’te, Stardust Crusaders’da Stand gücü The World’ü kazanmış ve zamanı durdurma yeteneği ile düşmanlarına karşı büyük bir üstünlük sağlamıştır. Jonathan ve sonraki Joestar nesilleriyle sürekli çatışmış, strateji ve acımasız taktikler kullanarak onları alt etmeye çalışmış ve zekâsı ile güçleri sayesinde Joestar ailesinin efsanevi düşmanı olarak tarihe geçmiştir.",
    stand: "images/the_world.jpeg",
    standName: "The World"
  },
  {
    name: "Toru",
    part: "JoJolion:",
    img: "images/tooru.jpeg",
    desc: "Toru, 2010’larda Japonya’da doğmuş, Jojolion’un önemli karakterlerinden biridir ve Josuke Higashikata’nın karşısındaki düşmanlardan biridir. Soğukkanlı, acımasız ve stratejik bir karakter olan Toru, Stand gücü Wonder of U’yu kazanmış ve bu Stand ile felaket ve kader temelli saldırılar yaparak düşmanlarını çaresiz bırakma yeteneğini kullanmıştır. Amacı ve motivasyonları doğrultusunda Josuke ve çevresindekilere karşı mücadele etmiş, zekâsı ve Stand gücü sayesinde büyük tehdit oluşturmuş ve hikâyenin gidişatını etkilemiştir.",
    stand: "images/wou.jpeg",
    standName: "Wonder of U"
  },
];

const container = document.querySelector(".character-container");
const searchInput = document.getElementById("searchInput");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const popupName = document.getElementById("popup-name");
const popupDesc = document.getElementById("popup-desc");
const popupStand = document.getElementById("popup-stand");
const popupStandName = document.getElementById("popup-stand-name");
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

  // Her part için başlık ve kartları oluştur
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
  popupStand.src = char.stand;
  popupStandName.textContent = `Stand: ${char.standName}`;
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

