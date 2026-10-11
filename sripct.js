const form = document.getElementById("formKontak");
const hasilPesan = document.getElementById("hasilPesan");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("input-nama").value.trim();
    const email = document.getElementById("input-email").value.trim();
    const pesan = document.getElementById("input-pesan").value.trim();

    if (nama === "" || email === "" || pesan === "") {
        hasilPesan.textContent = "Semua kolom harus diisi!";
        hasilPesan.className = "alert alert-warning mt-3";
        return;
    }

    hasilPesan.textContent =
        "Terima kasih, " + nama + "! Pesan kamu berhasil diproses.";

    hasilPesan.className = "alert alert-success mt-3";

    form.reset();
});
