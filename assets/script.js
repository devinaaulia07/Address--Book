// Menunggu form disubmit
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah halaman refresh
    
    // Ambil data dari input (ID harus sesuai dengan HTML)
    const nama = document.getElementById('nama').value;
    const telepon = document.getElementById('telepon').value;
    const email = document.getElementById('email').value;
    const lokasi = document.getElementById('lokasi').value;
    
    // Jalankan fungsi tambah kontak jika semua data terisi
    if (nama && telepon && email && lokasi) {
        addContact(nama, telepon, email, lokasi);
        document.getElementById('contactForm').reset(); // Reset form setelah tambah
    }
});

function addContact(nama, telepon, email, lokasi) {
    // Ambil bagian badan tabel (tbody)
    const tableBody = document.querySelector('#contactTable tbody');
    
    // Buat baris baru (tr)
    const row = document.createElement('tr');
    
    // Isi baris dengan kolom (td)
    row.innerHTML = `
        <td>${nama}</td>
        <td>${telepon}</td>
        <td>${email}</td>
        <td>${lokasi}</td>
        <td>
            <button onclick="deleteContact(this)">Hapus</button>
        </td>
    `;
    
    // Masukkan baris ke dalam tabel
    tableBody.appendChild(row);
}

function deleteContact(button) {
    // Menghapus baris (tr) tempat tombol tersebut berada
    const row = button.parentElement.parentElement;
    row.remove();
}