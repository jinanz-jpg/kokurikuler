/**
 * Fungsi untuk menampilkan/menyembunyikan fakta menarik
 * @param {string} idElement - ID dari elemen div yang berisi fakta
 */
function tampilkanFakta(idElement) {
    const faktaDiv = document.getElementById(idElement);
    const tombol = faktaDiv.previousElementSibling; // Tombol sebelum div fakta

    if (faktaDiv.style.display === "block") {
        // Jika sedang tampil, sembunyikan
        faktaDiv.style.display = "none";
        tombol.textContent = "Lihat Fakta Menarik";
    } else {
        // Jika sedang tersembunyi, tampilkan
        faktaDiv.style.display = "block";
        tombol.textContent = "Sembunyikan Fakta";
    }
}

// Menambahkan efek gulir halus (smooth scrolling) untuk navigasi
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});