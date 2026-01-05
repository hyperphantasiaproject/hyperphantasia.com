// -----------------------------
// Background music (play on first click)
// -----------------------------

// document.addEventListener("click", function () {
//    document.getElementById("bgm").play();
//    const audio = document.getElementById("bgm");
//  audio.volume = 0.05; // 5% volume
// }, { once: true });

// -----------------------------
// Clock (HH:MM with blink + fade)
// -----------------------------

function updateClock() {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();

  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;

  document.getElementById("clock").textContent =
    h + ":" + m;
}

setInterval(updateClock, 1000);
updateClock();

// ----------------------------
// Image Pop-up (when image is clicked)
// ----------------------------

  const images = document.querySelectorAll("img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  images.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });


  /// --------------------
  /// Website Visits
  /// --------------------

  if (!localStorage.getItem("visited")) {
  fetch('https://api.countapi.xyz/hit/hyperphantasia-project');
  localStorage.setItem("visited", "true");
}

fetch('https://api.countapi.xyz/get/hyperphantasia-project')
  .then(response => response.json())
  .then(data => {
    document.getElementById('visitor-count').textContent = data.value;
  });