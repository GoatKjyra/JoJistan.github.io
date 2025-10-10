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
  {
    name: "Rohan Kishibe",
    part: "Diamond is Unbreakable:",
    img: "images/rohan.jpeg",
    desc: "Rohan Kishibe, 1980’lerde Japonya’da doğmuş, Diamond is Unbreakable’ın önemli karakterlerinden biridir ve manga sanatçısıdır. Meraklı, zeki ve biraz kibirli bir karakter olan Rohan, Stand gücü Heaven’s Door’u kazanmış ve bu Stand ile insanları kitap gibi açıp anılarını okuyabilir, değiştirebilir veya yazabilir. Bu gücü hem bilgi toplamak hem de stratejik avantaj sağlamak için kullanır. Rohan, Morioh’u ve çevresindekileri korumak için gerektiğinde düşmanlarına karşı mücadele etmiş, zekâsı ve Stand yeteneğiyle JoJo evreninde eşsiz bir konuma sahip olmuştur.",
    stand: "images/heavens_door.jpeg",
    standName: "Heavens Door"
  },
  {
  name: "Robert Speedwagon",
    part: "Phantom Blood:",
    img: "images/speed_wagon.jpeg",
    desc: "Robert E. O. Speedwagon, 19. yüzyıl İngiltere’sinde doğmuş, Phantom Blood ve Battle Tendency dönemlerinde Jonathan ve Joseph Joestar’ın yakın dostu ve sadık müttefikidir. Cesur, fedakâr ve güçlü bir adalet duygusuna sahip olan Speedwagon, başlangıçta sokak çetesi lideriyken Joestar ailesiyle tanıştıktan sonra düşmanlara karşı savaşta stratejik destek ve lojistik yardım sağlamıştır. Daha sonra kendi şirketi Speedwagon Vakfı’nı kurarak, Joestar soyunun antik düşmanları ve doğaüstü tehditlerle mücadelede maddi ve bilimsel destek sunmuş, JoJo evreninde güvenilir bir müttefik olarak öne çıkmıştır.",
    stand: "images/hamon.jpeg",
    standName: "Yok (Hamon Kullanıcısı)"
  },
  {
  name: "Caesar Zeppeli",
    part: "Battle Tendency:",
    img: "images/ceaser.jpeg",
    desc: "Caesar Zeppeli, 1920’lerde İtalya’da doğmuş, Battle Tendency döneminin önemli karakterlerinden ve Joseph Joestar’ın yakın arkadaşıdır. Cesur, gururlu ve fedakâr bir karakter olan Caesar, Hamon (Ripple) enerjisi kullanıcısıdır ve halka şeklinde Hamon saldırıları ile düşmanlarını alt edebilir. Joseph ile birlikte Pillar Men’e karşı savaşmış, strateji ve cesaretiyle önemli katkılar sağlamıştır. Ailesinin Hamon geleneğini sürdüren Caesar, genç yaşta büyük fedakârlıklar yapmış ve Joestar ekibinin vazgeçilmez müttefiklerinden biri olmuştur.",
    stand: "images/hamon.jpeg",
    standName: "Yok (Hamon Kullanıcısı)"
  },
  {
  name: "Diavolo",
    part: "Golden Wind:",
    img: "images/diavolo.jpeg",
    desc: "Diavolo, 1980’lerde İtalya’da doğmuş, Golden Wind’in başantagonisti ve Passione mafyasının gizemli lideridir. Gizemli, acımasız ve stratejik bir karakter olan Diavolo, Stand gücü King Crimson’ı kazanmış ve bu Stand ile zamanı belli bir süre atlayarak düşmanlarının hareketlerini önceden tahmin edebilir ve onları etkisiz hale getirebilir. Mafya dünyasında düzeni kendi çıkarları doğrultusunda şekillendirmek için mücadele etmiş, rakiplerini hem güç hem zeka kullanarak alt etmiş ve Joestar soyunun yeni nesliyle çatışarak hikâyenin ana tehdidini oluşturmuştur.",
    stand: "images/king_crimson.jpeg",
    standName: "King Crimson"
  },
  {
    name: "Enrico Pucci",
    part: "Stone Ocean:",
    img: "images/pucci.jpeg",
    desc: "Enrico Pucci, 1970’lerde İtalya’da doğmuş, Stone Ocean’un başantagonisti ve DIO’nun yakın müritlerinden biridir. Kararlı, fanatik ve amansız bir karakter olan Pucci, Stand gücü Whitesnake’i kazanmış ve bu Stand ile insanlardan hafıza ve Stand yeteneklerini çalabilmiştir. Daha sonra Stand’ı C-Moon ve nihai formu Made in Heaven’a evrilmiş, zamanı hızlandırma gücüyle evrenin kaderini değiştirebilecek seviyeye ulaşmıştır. Pucci, hedefleri uğruna büyük fedakârlıklar yapmış, Joestar ailesine karşı strateji ve güç kullanarak Stone Ocean’un ana tehdidi haline gelmiştir.",
    stand: "images/made_in_heaven.jpeg",
    standName: "Made In Heaven"
  },
  {
    name: "Gyro Zeppeli",
    part: "Steel Ball Run:",
    img: "images/gyro.jpeg",
    desc: "Gyro Zeppeli, 1890’larda İtalya’da doğmuş, Steel Ball Run’ın başkahramanlarından biridir ve Spin tekniğinin ustasıdır. Kararlı, cesur ve stratejik bir karakter olan Gyro, dönen çelik toplar (Steel Balls) kullanarak hem saldırı hem savunma yapabilir ve Spin enerjisiyle çeşitli fiziksel ve mucizevi etkiler yaratabilir. Yarışta ve düşmanlarına karşı strateji ve zekâsını ustalıkla kullanmış, Johnny Joestar’a rehberlik etmiş ve Joestar soyunun mirasını Spin tekniğiyle kendi yolunda sürdürmüştür.",
    stand: "images/ball_breaker.jpeg",
    standName: "Ball Breaker"
  },
  {
  name: "Will A. Zeppeli",
    part: "Phantom Blood:",
    img: "images/zeppeli.jpeg",
    desc: "Will A. Zeppeli, 1800’lerin sonlarında İtalya’da doğmuş, Phantom Blood’un önemli karakterlerinden biridir ve Hamon sanatının ustalarındandır. Bilge, cesur ve fedakâr bir karakter olan Zeppeli, Jonathan Joestar’a Hamon’u öğretmiş ve vampir tehdidine karşı savaşta ona rehberlik etmiştir. Hamon’un yaşam enerjisini ustalıkla kullanarak hem saldırı hem savunmada üstünlük sağlamış, insanlığın iyiliği için kendini feda etmiştir. Zeppeli, Joestar soyunun ilk büyük müttefiklerinden biri olarak cesaret ve iradenin sembolü hâline gelmiştir.",
    stand: "images/hamon.jpeg",
    standName: "Yok (Hamon Kullanıcısı)"
  },
  {
  name: "Kars",
    part: "Battle Tendency:",
    img: "images/kars.jpeg",
    desc: "Kars, 10.000 yıldan daha eski bir zamanda doğmuş, Battle Tendency’nin başantagonisti ve Pillar Men lideridir. Zeki, acımasız ve kusursuzluğu arayan bir karakter olan Kars, Stone Mask’i yaratarak vampirliğin temelini oluşturmuştur. Nihai hedefi, mükemmel bir varlık olmaktı; bu amaçla Red Stone of Aja’yı kullanarak Ultimate Life Form hâline geldi. Tüm canlıların DNA’sını kontrol edebilme gücüne ulaşan Kars, sonunda uzaya savrularak ölümsüz bir yalnızlığa mahkûm olmuştur.",
    stand: "images/kars_ulf.jpeg",
    standName: "Yok (Ultimate Life Form)"
  },
  {
    name: "Jean Pierre Polnareff",
    part: "Stardust Crusaders:",
    img: "images/pollnaref.jpeg",
    desc: "Jean Pierre Polnareff, 1960’larda Fransa’da doğmuş, Stardust Crusaders’ın önemli kahramanlarından biridir. Cesur, gururlu ve bazen aceleci bir karakter olan Polnareff, kız kardeşinin intikamını almak için DIO’ya karşı Joestar ekibine katılmıştır. Stand gücü Silver Chariot, olağanüstü hız ve kılıç ustalığıyla hem saldırı hem savunmada etkileyici performans sergiler. Polnareff, dostluğa verdiği değer, inancı ve kararlılığıyla Joestar ailesinin en sadık müttefiklerinden biri hâline gelmiştir.",
    stand: "images/silver_chariot.jpeg",
    standName: "Silver Chariot"
  },
  {
    name: "Yoshikage Kira",
    part: "Diamond is Unbreakable:",
    img: "images/kira.jpeg",
    desc: "Yoshikage Kira, 1966’da Japonya’nın Morioh kasabasında doğmuş, Diamond is Unbreakable’ın başantagonistidir. Dışarıdan sakin ve sıradan görünen Kira, aslında saplantılı bir seri katildir ve tek arzusu huzurlu ama gizli bir hayat sürmektir. Stand gücü Killer Queen ile dokunduğu her şeyi patlayıcıya dönüştürür, bu da onu ölümcül ve iz bırakmayan bir tehdit haline getirir. Soğukkanlılığı, zekâsı ve takıntılı doğasıyla Kira, Joestar mirasının karşısındaki en zeki ve tehlikeli düşmanlardan biri olmuştur.",
    stand: "images/killer_queen.jpeg",
    standName: "Killer Queen"
  },
  {
    name: "Bruno Bucciarati",
    part: "Golden Wind:",
    img: "images/bucciarati.jpeg",
    desc: "Bruno Bucciarati, 1980’lerde İtalya’da doğmuş, Golden Wind’in ana karakterlerinden ve Giorno Giovanna’nın en yakın müttefiklerinden biridir. Cesur, adaletli ve lider ruhlu bir karakter olan Bucciarati, Stand gücü Sticky Fingers’ı kullanarak yüzeylerde fermuarlar açabilir, nesneleri veya insanları bu yolla bölüp birleştirebilir. Takım arkadaşlarını korumak ve yozlaşmış mafya düzenine karşı savaşmak için her şeyini ortaya koymuştur. Kararlılığı ve fedakârlığıyla Joestar mirasının en asil temsilcilerinden biri olmuştur.",
    stand: "images/sticky_fingers.jpeg",
    standName: "Sticky Fingers"
  },
  {
    name: "Weather Report",
    part: "Stone Ocean:",
    img: "images/weather_report.jpeg",
    desc: "Weather Report, 1980’lerde doğmuş, Stone Ocean döneminin önemli karakterlerinden biridir ve amnezik bir geçmişe sahiptir. Sessiz, sakin ve gizemli bir kişilik sergileyen Weather Report, hem zekâsı hem de Stand gücü Weather Report ile büyük stratejik avantaj sağlar. Amacı, geçmişini ve kimliğini keşfetmek, sevdiklerini korumak ve çevresindeki tehlikeleri önlemektir. Zamanla kendi iç dünyasıyla yüzleşmiş, Joestar soyunun müttefiklerinden biri olarak hikâyede kritik rol oynamıştır.",
    stand: "images/weather.jpeg",
    standName: "Weather Report"
  },
  {
    name: "Funny Valentine",
    part: "Steel Ball Run:",
    img: "images/valentine.jpeg",
    desc: "Funny Valentine, 1890’larda Amerika’da doğmuş, Steel Ball Run’ın başantagonistidir ve Amerika’nın başkanıdır. Hırslı, stratejik ve vatanına son derece bağlı bir karakter olan Valentine, Stand gücü D4C (Dirty Deeds Done Dirt Cheap) ile paralel evrenler arasında geçiş yapabilir ve farklı versiyonlarını kontrol edebilir. Bu yetenek, onu neredeyse yenilmez hâle getirir ve hedefleri uğruna büyük riskler almasını sağlar. Valentine, yarış ve Joestar soyuna karşı zekâsı ve güçleriyle büyük bir tehdit oluşturmuş ve Steel Ball Run’ın ana antagonistlerinden biri olmuştur.",
    stand: "images/d4c.jpeg",
    standName: "D4C (Dirty Deeds Done Dirt Cheap)"
  },
  {
    name: "Yasuho Hirose",
    part: "JoJolion:",
    img: "images/hirose.jpeg",
    desc: "Yasuho Hirose, 2010’larda Japonya’da doğmuş, JoJolion döneminin önemli karakterlerinden biridir ve Josuke Higashikata’ya yardımcı olur. Neşeli, meraklı ve kararlı bir kişilik sergileyen Yasuho, Stand gücü Paisley Park ile yön bulma, bilgi toplama ve teknolojiyi manipüle etme yeteneklerini kullanır. Amacı, Josuke ve sevdiklerini korumak, gizemleri çözmek ve kasabadaki tehlikeleri önlemektir. Zamanla kendi cesareti ve zekâsıyla hikâyede kritik bir rol oynamış, Joestar soyunun müttefiklerinden biri hâline gelmiştir.",
    stand: "images/paisley_park.jpeg",
    standName: "Paisley Park"
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

