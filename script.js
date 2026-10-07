// ===============================
// DAFTAR GOMBALAN
// ===============================

const compliments = [
    "Aku nggak tahu sejak kapan kamu jadi spesial, yang jelas setiap ada kabar dari kamu, mood-ku ikut membaik.",

    "Aku biasanya nggak gampang tertarik sama seseorang. Tapi entah kenapa, kamu jadi pengecualian.",

    "Katanya rumah adalah tempat untuk pulang. Tapi akhir-akhir ini, ngobrol sama kamu juga terasa seperti pulang.",

    "Aku nggak butuh alasan untuk senyum hari ini. Kayaknya cukup lihat nama kamu muncul di layar.",

    "Ada banyak hal yang aku suka. Tapi anehnya, dari semuanya, kamu selalu berhasil masuk ke urutan pertama.",

    "Kalau nyaman punya bentuk, mungkin bentuknya adalah ngobrol sama kamu tanpa sadar waktu sudah berjalan lama.",

    "Aku nggak tahu kamu sadar atau nggak, tapi kehadiranmu punya cara sendiri buat bikin hari yang biasa jadi sedikit lebih baik."
];


// ===============================
// BUKA PESAN
// ===============================

function openMessage() {

    // Mulai musik
    const music = document.getElementById("backgroundMusic");

    music.volume = 0.35;

    music.play().catch(error => {
        console.log("Musik belum bisa diputar:", error);
    });


    // Pindah ke halaman gombalan
    document.getElementById("opening").classList.remove("active");

    setTimeout(() => {
        document.getElementById("message").classList.add("active");
    }, 300);
}


// ===============================
// GOMBALAN BERIKUTNYA
// ===============================

let currentIndex = 0;

function nextCompliment() {

    currentIndex++;

    if (currentIndex >= compliments.length) {
        currentIndex = 0;
    }

    const text = document.getElementById("compliment");

    text.style.opacity = "0";
    text.style.transform = "translateY(10px)";

    setTimeout(() => {

        text.textContent = compliments[currentIndex];

        text.style.opacity = "1";
        text.style.transform = "translateY(0)";

    }, 300);
}


// ===============================
// TOMBOL "ADA SATU LAGI"
// ===============================

function showFinal() {

    document.getElementById("message").classList.remove("active");

    setTimeout(() => {
        document.getElementById("final").classList.add("active");
    }, 300);
}


// ===============================
// TOMBOL ULANGI
// ===============================

function restart() {

    document.getElementById("final").classList.remove("active");

    setTimeout(() => {

        document.getElementById("opening").classList.add("active");

        currentIndex = 0;

    }, 300);
}


// ===============================
// ANIMASI HATI
// ===============================

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "♥";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (Math.random() * 12 + 8) + "px";

    heart.style.animationDuration =
        (Math.random() * 5 + 6) + "s";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);
}


// Membuat hati setiap 900ms
setInterval(createHeart, 900);