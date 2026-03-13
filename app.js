// Deklarasi DOM element HTML
const Lampu_merah = document.getElementById("red");
const Lampu_kuning = document.getElementById("yellow");
const Lampu_hijau = document.getElementById("green");
const Tombol_on = document.getElementById("switchBtn");
const Tombol_auto = document.getElementById("autoBtn");
const Tombol_reset = document.getElementById("resetBtn");

// Deklarasi Variabel
let i = 0;
let autoInterval;

// Fungsi lampu default (Reset)
function Default_Lampu() {
    clearInterval(autoInterval);
    Lampu_merah.style.background = "#444";
    Lampu_kuning.style.background = "#444";
    Lampu_hijau.style.background = "#444";
    i = 0;
}

// Fungsi mengganti lampu manual
function Manual_Lampu() {
    clearInterval(autoInterval);
    if (i === 0) {
        Lampu_merah.style.background = "red";
        Lampu_kuning.style.background = "#444";
        Lampu_hijau.style.background = "#444";
        i++;
    } else if (i === 1) {
        Lampu_merah.style.background = "#444";
        Lampu_kuning.style.background = "yellow";
        Lampu_hijau.style.background = "#444";
        i++;
    } else if (i === 2) {
        Lampu_merah.style.background = "#444";
        Lampu_kuning.style.background = "#444";
        Lampu_hijau.style.background = "green";
        i = 0;
    }
}

// Fungsi mengganti lampu otomatis
function Otomatis_Lampu() {
    clearInterval(autoInterval);
    autoInterval = setInterval(() => {
        if (i === 0) {
            Lampu_merah.style.background = "red";
            Lampu_kuning.style.background = "#444";
            Lampu_hijau.style.background = "#444";
            i++;
        } else if (i === 1) {
            Lampu_merah.style.background = "#444";
            Lampu_kuning.style.background = "yellow";
            Lampu_hijau.style.background = "#444";
            i++;
        } else if (i === 2) {
            Lampu_merah.style.background = "#444";
            Lampu_kuning.style.background = "#444";
            Lampu_hijau.style.background = "green";
            i = 0;
        }
    }, 1000); 
}

// event listener tombol
Tombol_on.addEventListener("click", Manual_Lampu);
Tombol_auto.addEventListener("click", Otomatis_Lampu);
Tombol_reset.addEventListener("click", Default_Lampu);