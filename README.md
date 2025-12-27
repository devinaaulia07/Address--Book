# 📇 Address Book
Aplikasi sederhana untuk menampilkan dan menambah kontak.

# 🚀 Link
- URL Deployment:https://address-book-eebi.vercel.app/
- Repository :https://github.com/devinaaulia07/Address--Book.git
  
# ✨ Fitur
- Tampilkan daftar kontak.
- Tambah kontak baru (disimpan di browser).

## 🛠️ Teknologi yang Digunakan
- **HTML5 & CSS:** 
- **JavaScript:** 

## 📊 Diagram Alur: Tambah Kontak
```mermaid
flowchart TD
    A[Buka Aplikasi] --> B{Klik Tombol Add}
    B --> C[Isi Form Nama & Telepon]
    C --> D[Klik Submit]
    D --> E[Validasi Input]
    E --> F[Simpan ke LocalStorage]
    F --> G[Update Tampilan Daftar]