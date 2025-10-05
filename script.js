const characters = [
  { name: "Jonathan Joestar", stand: "Yok (Hamon Kullanıcısı)", power: 70, speed: 65, endurance: 80, img: "jonathan.jpeg" },
  { name: "Joseph Joestar", stand: "Hermit Purple", power: 78, speed: 82, endurance: 85, img: "joseph.jpeg" },
  { name: "Jotaro Kujo", stand: "Star Platinum", power: 95, speed: 90, endurance: 90, img: "jotaro.jpeg" },
  { name: "Josuke Higashikata", stand: "Crazy Diamond", power: 88, speed: 84, endurance: 88, img: "josuke.jpeg" },
  { name: "Giorno Giovanna", stand: "Gold Experience Requiem", power: 93, speed: 95, endurance: 100, img: "giorno.jpeg" },
  { name: "Jolyne Cujoh", stand: "Stone Free", power: 84, speed: 83, endurance: 75, img: "jolyne.jpeg" },
  { name: "Johnny Joestar", stand: "Tusk Act 4", power: 94, speed: 95, endurance: 98, img: "johnny.jpeg" },
  { name: "Dio Brando", stand: "The World", power: 95, speed: 88, endurance: 95, img: "dio.jpeg" },
  { name: "Josuke(Gappy)", stand: "Soft & Wet", power: 93, speed: 85, endurance: 90, img: "josuke8.jpeg" },
  { name: "Tooru", stand: "Wonder Of U", power: 95, speed: 90, endurance: 100, img: "tooru.jpeg" },
];

const container = document.getElementById("character-container");
const search = document.getElementById("search");
const themeBtn = document.getElementById("theme-toggle");
const musicBtn = document.getElementById("music-toggle");
const music = document.getElementById("bg-music");

function renderCharacters(list) {
  container.innerHTML = "";
  list.forEach(ch => {
    const card = document.createElement("section");
    card.classList.add("character-card");
    card.innerHTML = `
      <img src="images/${ch.img}" alt="${ch.name}" class="character-img">
      <h2>${ch.name}</h2>
      <p><strong>Stand:</strong> ${ch.stand}</p>
      <div class="stats">
        <div class="stat"><span>Güç</span><div class="bar"><div class="fill" style="width:${ch.power}%"></div></div></div>
        <div class="stat"><span>Hız</span><div class="bar"><div class="fill" style="width:${ch.speed}%"></div></div></div>
        <div class="stat"><span>Dayanıklılık</span><div class="bar"><div class="fill" style="width:${ch.endurance}%"></div></div></div>
      </div>
    `;
    container.appendChild(card);
  });
}

// İlk render
renderCharacters(characters);

// 🔍 Arama
search.addEventListener("input", e => {
  const term = e.target.value.toLowerCase();
  const filtered = characters.filter(ch => ch.name.toLowerCase().includes(term) || ch.stand.toLowerCase().includes(term));
  renderCharacters(filtered);
});

// 🌗 Tema Değiştir
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeBtn.textContent = document.body.classList.contains("light") ? "☀️ Karanlık Tema" : "🌙 Aydınlık Tema";
});

// 🎵 Müzik kontrolü
music.volume = 0.1;
music.play();

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = "🎵 Müzik: Açık";
  } else {
    music.pause();
    musicBtn.textContent = "🔇 Müzik: Kapalı";
  }
});

