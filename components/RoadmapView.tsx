
import React from 'react';
import { Skill, UserProgress, Category } from '../types';
import { SkillLogo } from './SkillLogo';

// Kamus deskripsi detail untuk memperkaya konten edukasi
const DETAILED_DESCRIPTIONS: Record<string, string> = {
  // --- Frontend Development Steps ---
  'fe1': `Internet adalah jaringan global raksasa yang memungkinkan komputer di seluruh dunia saling berkomunikasi. Langkah pertama menjadi developer adalah memahami apa yang terjadi di balik layar saat Anda membuka website. Pelajari konsep Client-Server: Browser Anda (Client) meminta data, dan komputer lain (Server) mengirimkannya.
  
  Pahami peran DNS (Domain Name System) yang bekerja seperti buku telepon internet, menerjemahkan nama domain (google.com) menjadi alamat IP mesin. Dalami siklus HTTP Request dan Response. Ketahui metode-metode HTTP dasar seperti GET, POST, PUT, dan DELETE yang menjadi tulang punggung komunikasi web. Pelajari perbedaan HTTP dan HTTPS, serta bagaimana sertifikat SSL/TLS mengenkripsi data untuk keamanan pengguna.`,

  'fe2': `HTML (HyperText Markup Language) adalah kerangka tulang dari setiap halaman web. Di tahap ini, fokuslah pada HTML5 Semantic, yaitu penggunaan tag yang memiliki arti logis, bukan sekadar visual. Hindari penggunaan 'div' untuk segala hal ('div soup'). Gunakan tag spesifik seperti <header>, <nav>, <main>, <article>, <section>, dan <footer>.
  
  Struktur semantik ini sangat krusial untuk SEO (Search Engine Optimization), memudahkan mesin pencari seperti Google memahami hierarki konten Anda. Lebih penting lagi, HTML semantik adalah kunci aksesibilitas (Accessibility/a11y). Ini membantu pengguna tunanetra yang menggunakan screen reader untuk menavigasi website Anda dengan mudah.`,

  'fe3': `CSS (Cascading Style Sheets) adalah seni menghias kerangka HTML agar terlihat indah dan menarik. Mulailah dengan memahami Box Model secara mendalam: Content, Padding, Border, dan Margin. Ini adalah konsep paling fundamental yang sering membingungkan pemula.
  
  Pelajari cara kerja Selector, Specificity, dan Inheritance agar Anda tidak frustrasi saat style Anda "tertimpa" oleh aturan lain. Kuasai satuan ukuran relatif seperti rem, em, %, vh, dan vw untuk membuat desain yang fleksibel, alih-alih hanya menggunakan pixel (px). Pahami penempatan elemen (Positioning): static, relative, absolute, fixed, dan sticky.`,

  'fe4': `Layouting modern telah berevolusi jauh dari masa lalu yang menggunakan 'float'. Sekarang kita memiliki dua senjata utama: Flexbox dan CSS Grid. Flexbox (Flexible Box) dirancang untuk tata letak satu dimensi (baris ATAU kolom). Ini sangat sempurna untuk menyusun elemen dalam navbar, menengahkan konten (centering), atau mengatur jarak antar tombol.
  
  CSS Grid adalah sistem layout dua dimensi (baris DAN kolom) yang sangat powerful untuk kerangka utama halaman web. Anda bisa membuat layout majalah yang kompleks dengan kode yang sangat ringkas. Pahami konsep grid-template-columns, grid-gap, dan grid-areas. Kombinasikan keduanya: Gunakan Grid untuk struktur halaman global, dan Flexbox untuk detail komponen di dalamnya.`,

  'fe5': `Di era ini, pengunjung website lebih banyak datang dari HP daripada Desktop. Responsive Web Design memastikan website Anda terlihat bagus di semua ukuran layar, dari jam tangan pintar hingga monitor ultrawide. Pahami konsep Mobile-First Design: mendesain untuk layar kecil terlebih dahulu, lalu menambahkan kompleksitas untuk layar besar.
  
  Kuasai Media Queries (@media) untuk mengubah layout berdasarkan breakpoint tertentu. Pelajari teknik Fluid Layouts menggunakan persentase agar elemen melebar dan menyusut secara halus. Pahami responsivitas gambar: penggunaan 'srcset' dan tag <picture> untuk menyajikan gambar kecil ke HP dan gambar besar ke Desktop (art direction).`,

  'fe6': `JavaScript adalah otak dari website yang memberikan interaktivitas dan logika. Mulailah dengan dasar yang kuat sebelum melompat ke framework. Pahami tipe data primitif (string, number, boolean) dan tipe data objek. Pelajari variabel (let, const) dan hindari 'var' untuk mencegah bug scoping.
  
  Kuasai logika kontrol alur: If/Else, Switch, dan Operator Ternary. Pelajari berbagai jenis Loop (For, While, For..of, For..in) untuk memproses data berulang. Dalami Function: Function Declaration vs Function Expression vs Arrow Function. Pahami konsep parameter, return value, dan scope (global vs local). Pelajari Array methods yang sangat powerful: .map(), .filter(), .reduce().`,

  'fe7': `DOM (Document Object Model) adalah antarmuka yang memungkinkan JavaScript "berbicara" dengan HTML dan CSS. Saat halaman dimuat, browser membuat pohon objek DOM yang bisa Anda manipulasi. Pelajari cara menyeleksi elemen HTML menggunakan querySelector, getElementById, dll.
  
  Kuasai Event Handling: cara mendengarkan klik tombol, input keyboard, submit form, atau scroll halaman menggunakan addEventListener. Pahami konsep Event Bubbling dan Event Delegation untuk performa yang lebih baik pada list yang panjang. Pelajari cara membuat elemen baru (createElement) dan menyisipkannya ke halaman (appendChild/prepend) secara dinamis.`,

  'fe8': `JavaScript modern (ES6+) membawa fitur-fitur revolusioner yang membuat koding lebih bersih dan efisien. Kuasai Destructuring Assignment untuk membongkar Array dan Object dengan mudah. Gunakan Spread/Rest Operator (...) untuk menggabungkan atau menyalin data. Pahami Template Literals untuk string yang lebih dinamis.
  
  Dalami konsep Asynchronous Programming. Pahami masalah "Callback Hell" dan bagaimana Promise menyelesaikannya. Kemudian, kuasai sintaks modern async/await yang membuat kode asinkron terlihat seperti kode sinkron yang mudah dibaca. Pelajari Fetch API untuk mengambil data dari server luar (API).`,

  'fe9': `Git adalah sistem kontrol versi standar industri yang wajib dikuasai. Bayangkan ini sebagai tombol "Save" super canggih yang bisa membatalkan perubahan, melihat riwayat, dan menggabungkan kerja tim. Pelajari konsep dasar: Repository, Commit, Staging Area, dan Branch.
  
  Kuasai Branching Strategy: cara membuat fitur baru di cabang terpisah agar tidak merusak kode utama. Pelajari cara menggabungkan kode (Merge) dan menangani konflik (Merge Conflict). GitHub adalah tempat hosting kode Anda. Pelajari cara membuat Pull Request (PR) untuk mereview kode sebelum digabungkan.`,

  'fe10': `React adalah library UI paling populer saat ini. Ia mengubah cara kita berpikir dari "halaman" menjadi "komponen". Pelajari konsep JSX: menulis HTML di dalam JavaScript. Pahami cara membuat Functional Components yang reusable. Kuasai konsep Props untuk mengirim data dari orang tua ke anak.
  
  Pahami State (useState) untuk menyimpan data lokal komponen yang bisa berubah. Pahami Lifecycle komponen dengan useEffect: cara menjalankan kode saat komponen lahir, berubah, atau mati. Pelajari cara menangani list dengan .map() dan pentingnya 'key' prop.`,

  'fe11': `Saat aplikasi berkembang, mengelola state (data) yang tersebar di banyak komponen menjadi sulit. Inilah peran Global State Management. Redux adalah standar industri yang menggunakan konsep 'Store' tunggal, 'Actions', dan 'Reducers' untuk memprediksi perubahan data.
  
  Zustand adalah alternatif modern yang lebih ringan dan sederhana menggunakan hooks. Pahami kapan harus menggunakan Context API bawaan React untuk data sederhana (seperti tema atau user login) dan kapan butuh state manager eksternal untuk data kompleks yang sering berubah. Konsep immutability sangat penting di sini.`,

  'fe12': `Tingkatkan level koding React Anda dengan Design Patterns lanjutan. Pelajari Compound Components untuk membuat komponen yang fleksibel seperti <Select> dan <Option> yang bekerja bersama. Gunakan Custom Hooks untuk memisahkan logika bisnis dari tampilan (UI), membuat kode lebih bersih dan bisa dipakai ulang.
  
  Pahami pola Render Props untuk berbagi kode antar komponen. Pelajari Higher-Order Components (HOC) meski sekarang jarang dipakai, tapi penting untuk memahami kode legacy. Fokus pada prinsip "Composition over Inheritance".`,

  'fe13': `Website lambat membunuh konversi. Pelajari Web Vitals: LCP (Loading), FID (Interactivity), dan CLS (Visual Stability). Gunakan teknik Code Splitting dengan React.lazy dan Suspense untuk memecah bundle JS agar browser tidak perlu download kode yang belum dibutuhkan.
  
  Pahami Memoization menggunakan useMemo dan useCallback untuk mencegah render ulang yang tidak perlu pada komponen berat. Pelajari cara optimasi gambar (format WebP, lazy loading) dan strategi caching browser. Gunakan Chrome DevTools Performance tab untuk audit bottleneck aplikasi Anda.`,

  'fe14': `Tidur nyenyak dengan kode yang teruji. Unit Testing memastikan fungsi kecil bekerja benar (misal: fungsi hitung diskon). Integration Testing memastikan beberapa komponen bekerja harmonis (misal: form login terhubung ke API).
  
  Jest adalah test runner paling populer. React Testing Library (RTL) mengajarkan cara mengetes komponen dari sudut pandang user (misal: "Cari tombol dengan teks 'Login' lalu klik"), bukan dari detail implementasi kode. Biasakan mindset TDD (Test Driven Development) di mana Anda menulis test dulu sebelum menulis kode fitur.`,

  'fe15': `DevOps bukan hanya untuk SysAdmin. Sebagai Frontend Developer, Anda harus paham CI/CD (Continuous Integration/Continuous Deployment). GitHub Actions memungkinkan Anda membuat robot yang otomatis menjalankan test, build, dan deploy setiap kali Anda push kode.
  
  Pelajari cara setup pipeline otomatis yang mencegah kode error masuk ke produksi. Pahami konsep Environment Variables untuk memisahkan rahasia (API Key) antara development dan production. Pelajari hosting modern seperti Vercel atau AWS Amplify yang memudahkan proses ini.`,

  // --- Backend Development ---
  'be1': `Graphical User Interface (GUI) adalah kemewahan yang tidak selalu ada di server. Menguasai Terminal (Command Line Interface) adalah langkah pertama seorang Backend Engineer. Anda harus nyaman menavigasi file system, mengubah permission, dan mengelola proses hanya dengan teks.
  
  Linux adalah sistem operasi yang menjalankan sebagian besar internet. Memahami struktur file Linux, manajemen user, dan perintah dasar seperti grep, curl, ssh, dan chmod akan memberikan Anda kendali penuh atas lingkungan server Anda. Jangan takut layar hitam, itu adalah kokpit Anda.`,

  'be2': `Node.js mengubah JavaScript dari bahasa browser menjadi bahasa server yang powerful. Pahami bahwa Node.js adalah 'runtime environment', bukan bahasa baru. Kekuatan utamanya ada pada arsitektur 'Event-Driven' dan 'Non-Blocking I/O', membuatnya sangat efisien menangani ribuan koneksi bersamaan.
  
  Pelajari cara kerja Event Loop yang menjadi jantung Node.js. Pahami sistem modul (CommonJS vs ES Modules) dan cara menggunakan NPM (Node Package Manager) untuk mengelola dependensi. Buat script sederhana seperti pembaca file atau web scraper untuk memahami kemampuan Node di luar browser.`,

  'be3': `Express.js adalah framework minimalis yang menjadi standar industri untuk membuat web server di Node.js. Ia menyederhanakan proses penanganan HTTP Request dan Response. Pelajari konsep Routing: bagaimana memetakan URL (/home, /api/users) ke fungsi logika tertentu.
  
  Pahami konsep Middleware: fungsi yang berjalan di tengah-tengah request, sangat berguna untuk logging, autentikasi, atau parsing data. Pelajari cara menangani Query Params, URL Params, dan Body Parser untuk membaca data yang dikirim client.`,

  'be4': `Data adalah aset paling berharga. PostgreSQL adalah database relasional (SQL) open-source tercanggih saat ini. Pahami konsep Tabel, Kolom, dan Baris. Pelajari cara mendesain skema database yang efisien menggunakan Entity Relationship Diagram (ERD).
  
  Kuasai bahasa SQL (Structured Query Language). Pelajari perintah dasar CRUD: INSERT (tambah), SELECT (baca), UPDATE (ubah), DELETE (hapus). Pahami konsep Primary Key, Foreign Key, dan Relasi antar tabel (One-to-One, One-to-Many, Many-to-Many).`,

  'be5': `Menulis raw SQL kadang membosankan dan rawan error. ORM (Object-Relational Mapping) seperti Prisma memungkinkan Anda berinteraksi dengan database menggunakan kode JavaScript/TypeScript biasa. Ini mempercepat pengembangan dan membuat kode lebih aman.
  
  Pelajari cara mendefinisikan model data di schema.prisma. Pahami fitur migrasi database untuk melacak perubahan struktur tabel. Pelajari cara melakukan query kompleks (filtering, sorting, pagination) menggunakan API Prisma yang intuitif.`,

  'be6': `API (Application Programming Interface) adalah jembatan komunikasi antar aplikasi. REST (Representational State Transfer) adalah arsitektur standar untuk desain API. Pahami penggunaan HTTP Verbs yang benar (GET untuk baca, POST untuk buat, dsb) dan Status Codes (200 OK, 404 Not Found, 500 Server Error).
  
  Pelajari cara merancang endpoint yang bersih dan konsisten. Pahami konsep Statelessness di mana server tidak menyimpan status client antar request. Implementasikan fitur CRUD lengkap yang terhubung ke database Anda.`,

  'be7': `Keamanan adalah prioritas nomor satu. Jangan pernah menyimpan password user dalam bentuk teks asli (plain text). Pelajari teknik Hashing dan Salting menggunakan library seperti bcrypt. Ini memastikan jika database bocor, password user tetap aman.
  
  Pahami mekanisme Autentikasi modern menggunakan JWT (JSON Web Token). Berbeda dengan session tradisional, JWT memungkinkan autentikasi yang stateless dan scalable. Pelajari cara membuat token, memverifikasinya, dan mengamankan endpoint privat (Middleware Auth).`,

  'be8': `Jangan pernah percaya input dari user. Validasi data adalah garis pertahanan pertama server Anda. Zod adalah library validasi schema yang modern dan type-safe. Gunakan Zod untuk memastikan data yang dikirim ke API sesuai format yang diharapkan (misal: email harus valid, password minimal 8 karakter).
  
  Pelajari cara menangani error validasi dan memberikan pesan error yang informatif ke client. Validasi yang baik mencegah data sampah masuk ke database dan melindungi aplikasi dari bug yang tidak terduga.`,

  'be9': `Backend yang tidak dites adalah bom waktu. Unit Testing di backend berfokus pada logika bisnis dan API endpoint. Menggunakan Jest dan Supertest, Anda bisa mensimulasikan request ke server dan memastikan responsnya benar tanpa membuka browser.
  
  Pelajari cara melakukan Mocking database agar test berjalan cepat dan tidak mengotori data asli. Tulis test untuk skenario positif (berhasil) dan skenario negatif (gagal/error). Coverage test yang tinggi memberi kepercayaan diri saat melakukan refactoring kode.`,

  'be10': `Aplikasi Anda tidak berguna jika hanya jalan di laptop sendiri. Docker memungkinkan Anda membungkus aplikasi beserta semua dependensinya ke dalam 'Container' yang bisa berjalan di mana saja. Ini memecahkan masalah klasik "It works on my machine".
  
  Pelajari cara menulis Dockerfile dan docker-compose. Kemudian, pelajari cara men-deploy container tersebut ke layanan cloud modern seperti Render, Railway, atau AWS. Pahami konsep Environment Variables di production untuk keamanan.`,

  // --- Python Data Science ---
  'pds1': `Python adalah bahasa pemrograman paling populer di dunia data karena sintaksnya yang mudah dibaca dan ekosistem library yang raksasa. Mulailah dengan instalasi Anaconda atau VS Code. Pahami filosofi Python yang mengutamakan keterbacaan kode ("Readability counts").
  
  Pelajari dasar variabel, tipe data (integer, float, string), dan operasi matematika dasar. Python sangat "strict" soal indentasi, jadi biasakan menulis kode yang rapi. Cobalah membuat program kalkulator sederhana untuk membiasakan diri dengan sintaksnya.`,

  'pds2': `Struktur data adalah cara kita menyimpan dan mengatur data. Di Python, List adalah urutan data yang bisa diubah, Tuple adalah urutan permanen, Set adalah kumpulan data unik, dan Dictionary adalah pasangan kunci-nilai (key-value) yang sangat powerful.
  
  Pahami kapan harus menggunakan masing-masing tipe ini. Dictionary khususnya sangat penting karena mirip dengan format JSON dan cara database menyimpan data. Latih kemampuan manipulasi data Anda dengan membuat program manajemen kontak sederhana.`,

  'pds3': `Logika pemrograman terletak pada Control Flow. If/Else memungkinkan program mengambil keputusan. Loops (For dan While) memungkinkan program melakukan tugas berulang ribuan kali dalam sekejap.
  
  Fungsi (Functions) adalah cara membungkus logika agar bisa dipakai ulang. Pahami konsep parameter dan return value. Menulis fungsi yang bersih dan modular adalah ciri programmer yang baik. Jangan menulis kode yang sama berulang-ulang, bungkuslah dalam fungsi (DRY Principle - Don't Repeat Yourself).`,

  'pds4': `NumPy (Numerical Python) adalah fondasi dari semua komputasi ilmiah di Python. Berbeda dengan List biasa yang lambat, NumPy Array sangat cepat dan efisien memori. Ini adalah standar untuk bekerja dengan data numerik, vektor, dan matriks.
  
  Pelajari cara membuat array, melakukan operasi matematika pada seluruh array sekaligus (broadcasting), dan fungsi statistik dasar. Hampir semua library data science lain (Pandas, Scikit-learn) dibangun di atas NumPy.`,

  'pds5': `Jika Excel memiliki kekuatan super, namanya adalah Pandas. DataFrame adalah struktur data utama Pandas yang berbentuk tabel (baris dan kolom). Pandas memungkinkan Anda memuat, memanipulasi, dan menganalisis jutaan baris data hanya dengan beberapa baris kode.
  
  Pelajari cara membaca file CSV atau Excel. Pahami cara melakukan filtering (memilih data tertentu), sorting (mengurutkan), dan grouping (mengelompokkan data untuk statistik). Ini adalah skill yang akan Anda gunakan 80% dari waktu Anda sebagai Data Analyst.`,

  'pds6': `Data di dunia nyata itu kotor. Ada data kosong (missing values), data duplikat, format tanggal yang salah, atau typo. Data Cleaning adalah proses membersihkan kekacauan ini agar siap dianalisis. "Garbage In, Garbage Out" - analisis sebagus apapun akan salah jika datanya kotor.
  
  Pelajari teknik menangani missing values: apakah harus dihapus (drop) atau diisi dengan rata-rata (imputation)? Pahami cara mendeteksi outlier (data pencilan) yang bisa merusak statistik Anda.`,

  'pds7': `Otak manusia memproses visual jauh lebih cepat daripada angka. Visualisasi data adalah seni bercerita dengan grafik. Matplotlib adalah library dasar yang powerful, sedangkan Seaborn memberikan tampilan yang lebih cantik dan statistik tingkat tinggi dengan kode lebih sedikit.
  
  Pelajari kapan menggunakan Bar Chart (perbandingan), Line Chart (tren waktu), Scatter Plot (korelasi), atau Histogram (distribusi). Visualisasi yang baik bisa mengungkap pola tersembunyi yang tidak terlihat di tabel angka.`,

  'pds8': `Exploratory Data Analysis (EDA) adalah fase detektif. Sebelum membuat model prediksi, Anda harus "berkenalan" dengan data Anda. Gunakan statistik deskriptif dan visualisasi untuk mencari pola, anomali, atau hubungan antar variabel.
  
  Ajukan pertanyaan pada data: "Apakah umur mempengaruhi gaji?", "Produk apa yang paling laku di hari Minggu?". EDA membantu Anda merumuskan hipotesis yang tepat sebelum melangkah ke tahap machine learning yang lebih kompleks.`,

  'pds9': `Machine Learning bukan sihir, itu matematika. Scikit-learn adalah library ML terpopuler di Python. Mulailah dengan Supervised Learning paling sederhana: Linear Regression untuk memprediksi angka (misal: harga rumah) dan Logistic Regression untuk klasifikasi (misal: spam atau bukan).
  
  Pahami konsep membagi data menjadi Training Set (untuk belajar) dan Test Set (untuk ujian). Pelajari metrik evaluasi model seperti Akurasi atau Mean Squared Error. Jangan terjebak kompleksitas algoritma dulu, fokus pada alur kerjanya.`,

  'pds10': `Proyek akhir adalah pembuktian skill Anda. Gunakan Jupyter Notebook untuk menggabungkan kode, visualisasi, dan narasi penjelasan dalam satu dokumen. Pilih dataset publik yang menarik minat Anda (misal dari Kaggle).
  
  Lakukan proses end-to-end: Load data, Cleaning, EDA, Visualisasi, dan Kesimpulan. Publikasikan notebook Anda di GitHub atau Kaggle sebagai portofolio. Kemampuan mengkomunikasikan hasil analisis kepada orang awam sama pentingnya dengan kemampuan teknis koding.`,

  // --- Cloud Computing (AWS) ---
  'aws1': `Cloud Computing adalah pergeseran paradigma dari "membeli server" menjadi "menyewa server". Pahami model layanan utama: IaaS (Infrastructure as a Service), PaaS (Platform as a Service), dan SaaS (Software as a Service). Ini adalah fondasi ekonomi digital modern.
  
  Ketahui keuntungan Cloud dibanding On-Premise: Skalabilitas (mudah diperbesar), Elastisitas (bayar sesuai pakai), dan Kecepatan Inovasi. Pahami konsep CapEx (belanja modal di awal) vs OpEx (biaya operasional bulanan) yang membuat Cloud menarik bagi bisnis.`,

  'aws2': `AWS memiliki infrastruktur fisik terbesar di dunia. Region adalah lokasi fisik geografis (seperti Singapura atau Jakarta), yang terdiri dari beberapa Availability Zones (AZ). AZ adalah data center terpisah yang memiliki power dan cooling independen.
  
  Edge Locations adalah titik distribusi konten (CDN) yang lebih dekat ke pengguna akhir. Memahami ini penting untuk merancang aplikasi yang tahan bencana (High Availability) dan memiliki latensi rendah bagi pengguna global.`,

  'aws3': `IAM (Identity and Access Management) adalah satpam AWS Anda. Jangan pernah menggunakan akun 'root' untuk operasi sehari-hari. Pahami prinsip "Least Privilege": hanya berikan akses yang benar-benar dibutuhkan user atau layanan.
  
  Pelajari perbedaan Users (orang), Groups (kumpulan orang), dan Roles (izin sementara untuk layanan/mesin). Aktifkan MFA (Multi-Factor Authentication) untuk keamanan ekstra. IAM adalah lapisan pertahanan pertama di Cloud.`,

  'aws4': `EC2 (Elastic Compute Cloud) adalah komputer virtual di awan. Anda bisa memilih spesifikasi CPU dan RAM sesuai kebutuhan, dari server mikro hingga superkomputer. Pahami siklus hidup Instance: Start, Stop, Terminate.
  
  Pelajari tipe-tipe Instance: General Purpose (seimbang), Compute Optimized (untuk proses berat), atau Memory Optimized. Pelajari cara login ke server Linux menggunakan SSH Key Pair. Ini adalah "blok bangunan" paling dasar di AWS.`,

  'aws5': `S3 (Simple Storage Service) adalah tempat penyimpanan objek (file) yang skalabilitasnya hampir tak terbatas. Berbeda dengan hard drive biasa (Block Storage), S3 didesain untuk menyimpan gambar, video, backup, atau hosting website statis.
  
  Pahami konsep Buckets dan Objects. Pelajari fitur Storage Classes (Standard, Infrequent Access, Glacier) untuk menghemat biaya penyimpanan data yang jarang diakses. S3 adalah layanan tertua dan paling populer di AWS.`,

  'aws6': `VPC (Virtual Private Cloud) adalah jaringan pribadi virtual Anda di AWS. Ini memungkinkan Anda mengisolasi resource Anda dari internet publik. Pahami komponen subnet: Public Subnet (bisa akses internet) vs Private Subnet (terisolasi).
  
  Pelajari Security Groups (firewall tingkat instance) dan NACL (firewall tingkat subnet). Konfigurasi jaringan yang benar adalah kunci keamanan aplikasi Anda agar tidak mudah diserang hacker dari luar.`,

  'aws7': `Mengelola database sendiri itu sulit (backup, patch, scaling). RDS (Relational Database Service) menangani kerumitan itu untuk Anda. Anda bisa menjalankan engine populer seperti MySQL, PostgreSQL, atau SQL Server tanpa pusing mengurus OS.
  
  Pahami fitur Multi-AZ Deployment untuk failover otomatis jika database utama mati. Pelajari Read Replicas untuk meningkatkan performa pembacaan data pada aplikasi yang trafiknya tinggi.`,

  'aws8': `Serverless adalah masa depan. AWS Lambda memungkinkan Anda menjalankan kode (fungsi) tanpa perlu menyewa atau mengelola server sama sekali. Anda hanya bayar per milidetik saat kode berjalan.
  
  Ini sangat cocok untuk tugas-tugas event-driven, seperti memproses gambar saat diupload ke S3 atau merespons request API. Pahami batasan Lambda (waktu eksekusi, memori) dan cara menghubungkannya dengan layanan AWS lain melalui Triggers.`,

  'aws9': `Cloud bisa jadi mahal jika tidak diawasi. AWS Billing Dashboard adalah teman terbaik Anda. Gunakan Cost Explorer untuk melihat tren pengeluaran harian atau bulanan.
  
  Pasang AWS Budgets untuk memberi peringatan (alarm) via email jika tagihan Anda melebihi batas tertentu. Pahami model harga AWS: Pay-as-you-go, Reserved Instances (diskon komitmen), dan Spot Instances (diskon lelang).`,

  'aws10': `Sertifikasi AWS Cloud Practitioner memvalidasi pemahaman dasar Anda tentang Cloud. Ujian ini mencakup konsep cloud, keamanan, teknologi, dan penagihan.
  
  Review whitepapers resmi AWS. Latih kemampuan mengerjakan soal skenario. Sertifikasi ini adalah pintu masuk yang sangat baik untuk karir di bidang Cloud Computing dan DevOps, diakui secara global oleh industri.`,

  // --- Cyber Security ---
  'cs1': `Jaringan adalah medan perang Cyber Security. Anda tidak bisa mengamankan apa yang tidak Anda pahami. Pahami TCP/IP Stack, bagaimana paket data berjalan dari A ke B. Pelajari OSI Model 7 Layer untuk troubleshooting.
  
  Ketahui port-port umum (80 HTTP, 443 HTTPS, 22 SSH) dan fungsinya. Pahami konsep IP Address (v4 dan v6) serta Subnetting. Gunakan tools seperti Ping dan Traceroute untuk diagnosa koneksi dasar.`,

  'cs2': `Kali Linux adalah "pisau lipat Swiss Army" bagi hacker dan profesional keamanan. Menguasai command line (CLI) Linux adalah wajib. Anda harus bisa menavigasi file system, mengelola permission (chmod/chown), dan menginstal tools tanpa antarmuka grafis.
  
  Pelajari scripting dasar (Bash/Python) untuk otomatisasi tugas. Linux memberi Anda kontrol level rendah terhadap sistem operasi yang tidak bisa dilakukan di Windows biasa.`,

  'cs3': `OSINT (Open Source Intelligence) adalah seni mengumpulkan informasi dari sumber publik. Sebelum menyerang, hacker melakukan pengintaian (Reconnaissance). Pelajari cara menggunakan Google Dorking untuk mencari file rahasia yang terindeks tidak sengaja.
  
  Gunakan tools seperti theHarvester atau Shodan untuk mencari email karyawan, subdomain, atau perangkat IoT yang terhubung ke internet. Informasi adalah senjata; semakin banyak info target yang Anda punya, semakin mudah menemukan celah.`,

  'cs4': `Nmap adalah standar industri untuk network scanning. Ini digunakan untuk menemukan host yang hidup di jaringan dan port apa yang terbuka. Port terbuka ibarat pintu rumah yang tidak terkunci.
  
  Pelajari teknik scanning: TCP Connect, SYN Scan (stealth), dan Version Detection. Pahami cara membaca output Nmap untuk mengidentifikasi sistem operasi target dan layanan yang berjalan di atasnya.`,

  'cs5': `OWASP Top 10 adalah daftar 10 risiko keamanan aplikasi web paling kritis. Memahami daftar ini wajib bagi defender maupun attacker. Pahami konsep seperti Broken Access Control, Cryptographic Failures, dan Injection.
  
  Pelajari cara kerja setiap kerentanan dan cara memitigasinya. Fokus bukan hanya pada "cara hack", tapi "mengapa kode ini rentan". Ini adalah fondasi keamanan aplikasi modern.`,

  'cs6': `SQL Injection (SQLi) terjadi ketika input user yang jahat mengubah query database. Cross-Site Scripting (XSS) terjadi ketika script jahat disisipkan ke halaman web yang dilihat user lain. Keduanya sangat berbahaya.
  
  Gunakan Burp Suite untuk mencegat dan memodifikasi request HTTP. Latih kemampuan Anda di lingkungan aman seperti DVWA (Damn Vulnerable Web App) atau PortSwigger Web Security Academy. Jangan pernah lakukan ini di website asli tanpa izin!`,

  'cs7': `Kriptografi menjaga kerahasiaan dan integritas data. Pahami perbedaan Enkripsi Simetris (satu kunci) dan Asimetris (public/private key). Pelajari fungsi Hashing (satu arah) yang digunakan untuk menyimpan password.
  
  Ketahui algoritma mana yang aman (AES, RSA, SHA-256) dan mana yang sudah usang (DES, MD5). Pahami konsep Digital Signature untuk memverifikasi pengirim pesan. Kriptografi adalah tulang punggung keamanan internet (HTTPS).`,

  'cs8': `Metasploit adalah framework eksploitasi yang sangat powerful. Ia menyediakan database ribuan exploit siap pakai untuk berbagai kerentanan. Pelajari cara memilih modul exploit, mengatur payload (misal: reverse shell), dan meluncurkan serangan.
  
  Pahami konsep Reverse Shell vs Bind Shell. Metasploit mempercepat proses penetrasi, tapi Anda harus paham apa yang terjadi di balik layar agar tidak sekadar menjadi "Script Kiddie".`,

  'cs9': `Mendapatkan akses awal (foothold) hanyalah permulaan. Privilege Escalation adalah teknik menaikkan hak akses dari user biasa menjadi Admin atau Root. Di Linux, ini bisa melalui kernel exploit, miskonfigurasi sudo, atau file permission yang lemah.
  
  Pelajari cara enumerasi sistem target setelah masuk (post-exploitation). Cari file password, histori bash, atau service yang berjalan dengan root. Tujuan akhirnya adalah penguasaan penuh atas sistem.`,

  'cs10': `Pekerjaan Ethical Hacker berakhir pada laporan, bukan pada root shell. Laporan yang baik menjelaskan TEMUAN (apa celahnya), DAMPAK (seberapa bahaya bisnisnya), dan REMEDIASI (cara memperbaikinya).
  
  Gunakan bahasa yang bisa dimengerti manajemen (non-teknis) untuk ringkasan eksekutif, dan detail teknis lengkap untuk tim developer. Kemampuan menulis laporan adalah pembeda antara hacker hobi dan profesional berbayar.`,

  // --- Digital Marketing ---
  'dm1': `Marketing Funnel adalah peta perjalanan pelanggan dari tidak tahu menjadi pembeli setia. AIDA (Awareness, Interest, Desire, Action) adalah model klasik yang wajib dipahami. Awareness: Bagaimana orang tahu brand Anda? Interest: Apa yang membuat mereka penasaran?
  
  Desire: Bagaimana mengubah rasa penasaran menjadi keinginan membeli (emosi)? Action: Langkah nyata pembelian. Pahami bahwa setiap tahap butuh strategi konten dan pendekatan yang berbeda. Jangan jualan "hard selling" kepada orang yang baru di tahap Awareness.`,

  'dm2': `Copywriting adalah seni menjual dengan tulisan. Ini bukan tentang menulis indah, tapi menulis persuasif. Pelajari formula PAS (Problem-Agitate-Solution): Tunjukkan masalah audiens, buat mereka resah dengan dampaknya, lalu tawarkan produk Anda sebagai solusi.
  
  Pahami perbedaan Fitur vs Manfaat. Orang tidak membeli "kasur empuk" (fitur), mereka membeli "tidur nyenyak tanpa sakit punggung" (manfaat). Judul (Headline) adalah bagian terpenting, karena jika judul tidak menarik, isi tulisan tidak akan dibaca.`,

  'dm3': `SEO (Search Engine Optimization) adalah seni agar website Anda ditemukan di Google tanpa membayar iklan. Ini investasi jangka panjang. Riset Keyword adalah fondasinya: apa kata kunci yang diketik target audiens Anda di Google?
  
  Pahami On-Page SEO: optimasi judul, meta description, dan struktur konten agar mudah dibaca Google. Pahami Off-Page SEO: membangun reputasi website melalui backlink berkualitas. SEO bukan cara cepat kaya, tapi cara membangun aset trafik berkelanjutan.`,

  'dm4': `Media sosial bukan tempat membuang konten acak. Anda butuh strategi. Content Pillar adalah topik utama yang akan Anda bahas secara konsisten (misal: Edukasi, Hiburan, Promosi). Content Calendar membantu Anda konsisten posting tanpa pusing "besok posting apa".
  
  Pahami karakteristik tiap platform. Instagram itu visual, Twitter itu percakapan, TikTok itu hiburan cepat, LinkedIn itu profesional. Sesuaikan gaya bahasa dan format konten dengan "bahasa lokal" masing-masing platform tersebut.`,

  'dm5': `Iklan berbayar (Paid Ads) adalah cara mempercepat jangkauan. Kelebihan utama Meta Ads (FB/IG) dan Google Ads adalah Targeting yang sangat spesifik. Anda bisa menargetkan "Pria, umur 25-35, suka kopi, tinggal di Jakarta Selatan".
  
  Pelajari struktur kampanye iklan: Campaign (Tujuan), Ad Set (Targeting), dan Ad Creative (Visual/Teks). Jangan habiskan budget besar di awal. Lakukan A/B Testing: tes 2 gambar atau judul berbeda, lihat mana yang performanya lebih baik, lalu alihkan budget ke sana.`,

  'dm6': `Email Marketing memiliki ROI (Return on Investment) tertinggi dibanding channel lain. Kenapa? Karena Anda memiliki databasenya. Algoritma sosmed bisa berubah, tapi list email adalah milik Anda. Fokuslah membangun List Building: kumpulkan email prospek dengan memberikan Lead Magnet (ebook/webinar gratis).
  
  Jangan spam. Kirimkan newsletter yang bermanfaat dan personal. Gunakan segmentasi: kirim penawaran berbeda untuk pelanggan baru dan pelanggan lama. Email adalah channel terbaik untuk menjaga hubungan jangka panjang dan melakukan penjualan berulang.`,

  'dm7': `Content Marketing adalah strategi "Memberi dulu, menerima kemudian". Alih-alih beriklan "Beli Produk Saya!", Anda membuat artikel, video, atau infografis yang menjawab masalah audiens. Ini membangun Otoritas dan Kepercayaan.
  
  Ketika audiens percaya bahwa Anda ahli di bidang tersebut, mereka akan memilih produk Anda saat butuh. Kuncinya adalah konsistensi dan kualitas nilai (value) yang diberikan. Konten yang bagus adalah konten yang membuat audiens merasa lebih pintar atau terhibur setelah mengonsumsinya.`,

  'dm8': `Data adalah kompas marketing. Google Analytics (GA4) memberitahu Anda siapa pengunjung website Anda, dari mana mereka datang, dan apa yang mereka lakukan. Jangan hanya melihat "Pageviews". Lihatlah "Bounce Rate" (berapa yang langsung pergi) dan "Conversion Rate" (berapa yang beli).
  
  Pelajari cara memasang tracking code. Pahami konsep UTM Parameters untuk melacak efektivitas link yang Anda sebar di sosmed atau email. Data membantu Anda membuat keputusan berdasarkan fakta, bukan asumsi atau perasaan semata.`,

  'dm9': `Mendatangkan trafik itu mahal, jadi pastikan trafik itu menjadi pembeli. CRO (Conversion Rate Optimization) adalah proses mengutak-atik website agar lebih banyak pengunjung melakukan aksi (beli/daftar).
  
  Elemen kecil bisa berdampak besar: Warna tombol "Beli", posisi formulir, kecepatan loading website, atau kejelasan judul landing page. Lakukan audit halaman penjualan Anda. Hapus friksi atau hambatan yang menyulitkan user untuk membeli. Buat proses checkout semudah mungkin.`,

  'dm10': `Di dunia profesional, bukti lebih kuat dari janji. Bangunlah portofolio yang menampilkan hasil kerja nyata, bukan sekadar sertifikat. Gunakan format Studi Kasus: Jelaskan Masalah Klien -> Strategi Anda -> Hasil (Angka).
  
  Contoh: "Meningkatkan penjualan toko baju X sebesar 30% dalam 3 bulan menggunakan strategi Instagram Ads." Kumpulkan hasil latihan Anda, screenshot analitik (sensor data sensitif), dan kemas dalam PDF atau website portofolio yang rapi. Ini senjata utama melamar kerja atau cari klien.`,

  // --- Freelancing Mastery ---
  'fl1': `Niche adalah spesialisasi. Jangan menjadi "Generalis Palugada" (apa lu mau gua ada). Klien membayar lebih mahal untuk spesialis. Alih-alih "Penulis", jadilah "Penulis Copywriting untuk Industri Kesehatan".
  
  Semakin spesifik niche Anda, semakin sedikit kompetisi dan semakin mudah menargetkan klien ideal. Riset pasar untuk memastikan niche tersebut memiliki permintaan (demand) dan kemampuan bayar (budget).`,

  'fl2': `Portofolio adalah "etalase" toko Anda. Jangan hanya menampilkan hasil akhir yang cantik. Tampilkan proses berpikir (Case Study). Klien ingin tahu bagaimana Anda memecahkan masalah.
  
  Struktur portofolio yang baik: Masalah Klien -> Tantangan -> Solusi Anda -> Hasil Akhir. Jika belum punya klien, buatlah proyek fiktif (mockup) untuk brand terkenal sebagai demonstrasi kemampuan Anda.`,

  'fl3': `Menentukan harga adalah seni. Jangan terjebak perang harga murah. Ada 3 model: Hourly (per jam), Fixed (per proyek), dan Value-Based (berdasarkan nilai bisnis). Pemula biasanya mulai dari Hourly atau Fixed.
  
  Hitung kebutuhan hidup bulanan Anda untuk menentukan tarif dasar (Minimum Viable Rate). Jangan takut menaikkan harga seiring bertambahnya pengalaman dan portofolio. Harga murah seringkali justru mendatangkan klien yang rewel.`,

  'fl4': `LinkedIn adalah kolam ikan klien premium. Optimalkan profil Anda bukan sebagai CV pencari kerja, tapi sebagai Landing Page penawaran jasa. Headline harus jelas: "Saya membantu [Siapa] mencapai [Apa] dengan [Skill]."
  
  Gunakan foto profil profesional. Isi bagian 'About' dengan cerita yang menjual dan Call to Action yang jelas. Mintalah rekomendasi dari rekan atau klien terdahulu untuk membangun kredibilitas (Social Proof).`,

  'fl5': `Jangan menunggu bola. Jemput bola. Cold Outreach adalah menghubungi klien potensial yang belum kenal Anda. Kuncinya adalah personalisasi. Jangan copy-paste pesan massal.
  
  Riset masalah bisnis mereka, lalu tawarkan solusi singkat. Fokus pada "Apa untungnya buat mereka", bukan "Siapa saya". Gunakan Email atau DM LinkedIn. Penolakan adalah hal biasa, teruslah mencoba sampai mendapatkan "Ya" pertama.`,

  'fl6': `Proposal adalah dokumen penjualan. Struktur proposal yang memenangkan proyek: Ringkasan Masalah (tunjukkan Anda paham), Solusi yang Ditawarkan, Rencana Kerja (Timeline), Harga (Investment), dan Bukti Kredibilitas (Testimoni).
  
  Buatlah proposal yang mudah dibaca, visual yang rapi, dan fokus pada manfaat bisnis. Hindari bahasa teknis yang membingungkan klien. Proposal yang baik membuat klien merasa aman untuk membayar Anda.`,

  'fl7': `Jangan pernah kerja tanpa kontrak. Kontrak melindungi hak Anda (pembayaran) dan membatasi kewajiban Anda (lingkup kerja). Kontrak harus mencakup: Detail pekerjaan, Total biaya, Jadwal pembayaran (Termin), Batas revisi, dan Kepemilikan hak cipta.
  
  Gunakan template kontrak freelance standar. Kontrak tertulis mencegah "Scope Creep" (permintaan tambahan gratis) dan sengketa pembayaran di kemudian hari. Ini tanda bahwa Anda profesional.`,

  'fl8': `Manajemen klien sama pentingnya dengan skill teknis. Komunikasi yang proaktif mencegah kesalahpahaman. Berikan update berkala (misal: mingguan) sebelum ditanya. Atur ekspektasi sejak awal mengenai jam kerja dan cara komunikasi.
  
  Pelajari cara menerima feedback dan melakukan revisi tanpa baper. Jika klien meminta revisi di luar kontrak, berani bilang bahwa itu dikenakan biaya tambahan. Klien yang puas akan menjadi sumber referral terbaik.`,

  'fl9': `Sebagai freelancer, waktu adalah uang. Tanpa bos yang mengawasi, disiplin diri adalah kunci. Gunakan teknik Time Blocking: blok jadwal khusus untuk Deep Work (kerja inti), Admin (email/invoice), dan Marketing (cari klien).
  
  Pisahkan waktu kerja dan waktu istirahat agar tidak burnout. Ingat, jam kerja freelancer mencakup kegiatan non-billable seperti belajar dan mencari klien, jadi pastikan tarif Anda menutup waktu-waktu tersebut.`,

  'fl10': `Jangan campur uang bisnis dan pribadi. Buka rekening terpisah untuk freelance. Sisihkan pajak dan dana darurat dari setiap pembayaran yang masuk. Anda adalah CEO, CFO, dan karyawan sekaligus.
  
  Pelajari dasar akuntansi sederhana: Pemasukan vs Pengeluaran. Ketahui kewajiban pajak freelancer di negara Anda (PPh 21 dsb). Keuangan yang rapi membuat bisnis Anda sustainable jangka panjang.`,

  // --- Project Management ---
  'pm1': `Setiap proyek memiliki siklus hidup. Initiation: Mendefinisikan "Apa" dan "Kenapa" proyek dibuat (Project Charter). Planning: Menentukan "Bagaimana", "Siapa", dan "Kapan" (Rencana Kerja).
  
  Execution: Tim mengerjakan tugas sesuai rencana. Monitoring: Memastikan proyek tetap on-track (budget & waktu). Closure: Menutup proyek, serah terima, dan evaluasi. Memahami siklus ini mencegah proyek berjalan tanpa arah.`,

  'pm2': `Waterfall adalah metode tradisional yang linear (seperti air terjun): Analisis -> Desain -> Kode -> Test. Cocok untuk proyek konstruksi yang perubahannya mahal. Agile adalah pendekatan iteratif dan fleksibel.
  
  Agile memecah proyek menjadi potongan kecil yang bisa dirilis cepat untuk mendapat feedback user. Di dunia software yang cepat berubah, Agile lebih disukai karena adaptif terhadap perubahan kebutuhan di tengah jalan.`,

  'pm3': `Scrum adalah framework Agile paling populer. Ada 3 peran: Product Owner (suara user), Scrum Master (pelatih tim), dan Dev Team. Ada 3 artefak: Backlog (daftar tugas), Sprint Backlog, dan Increment (hasil kerja).
  
  Ada 5 event ritual: Sprint (siklus kerja 2-4 minggu), Sprint Planning, Daily Standup (rapat 15 menit), Sprint Review (demo hasil), dan Retrospective (evaluasi proses). Scrum membuat tim fokus dan transparan.`,

  'pm4': `Kanban adalah metode visual untuk mengelola alur kerja (workflow). Intinya adalah papan dengan kolom: To Do, In Progress, Done. Prinsip utamanya adalah membatasi "Work In Progress" (WIP) agar tim tidak multitasking berlebihan.
  
  Kanban sangat fleksibel dan fokus pada penyelesaian tugas satu per satu (flow). Tools seperti Trello atau Jira Board adalah implementasi digital dari konsep pabrik Toyota ini.`,

  'pm5': `Scope Creep adalah musuh utama proyek: penambahan fitur-fitur kecil yang tidak direncanakan tapi lama-lama membuat proyek molor dan budget bengkak. Manajemen lingkup (Scope Management) menjaga agar tim mengerjakan apa yang disepakati saja.
  
  Dokumentasikan kebutuhan di awal secara jelas. Jika ada permintaan baru, lakukan proses Change Request: evaluasi dampaknya terhadap biaya dan waktu, lalu minta persetujuan stakeholder sebelum dikerjakan.`,

  'pm6': `Risiko adalah kejadian masa depan yang bisa merusak proyek. Manajemen risiko bukan pesimisme, tapi persiapan. Identifikasi risiko (misal: developer sakit, server down), lalu nilai dampaknya (High/Medium/Low).
  
  Siapkan rencana mitigasi: Bagaimana cara mencegahnya? Atau rencana kontingensi: Apa yang dilakukan jika itu terjadi (Plan B)? Proyek yang sukses bukan yang tanpa masalah, tapi yang siap menghadapi masalah.`,

  'pm7': `Stakeholder adalah siapa saja yang terpengaruh oleh proyek (Klien, Bos, User, Tim). Kegagalan mengelola ekspektasi mereka adalah resep bencana. Buatlah Stakeholder Map: Siapa yang punya power tinggi? Siapa yang punya minat tinggi?
  
  Sesuaikan cara komunikasi. Bos butuh update ringkas hasil akhir, tim butuh detail teknis. Komunikasi yang rutin dan jujur (termasuk kabar buruk) membangun kepercayaan.`,

  'pm8': `Sprint Planning adalah ritual memulai siklus kerja. Tim mengambil item dari Product Backlog (daftar keinginan) dan memindahkannya ke Sprint Backlog (rencana kerja 2 minggu ke depan).
  
  Kuncinya adalah estimasi realistis. Jangan berjanji berlebihan (overpromise). Tim harus sepakat tentang "Definition of Done": kapan sebuah tugas dianggap selesai 100% (sudah dites, sudah didokumentasikan, dll).`,

  'pm9': `Retrospective adalah jantung perbaikan berkelanjutan (Kaizen) di Agile. Di akhir setiap Sprint, tim berkumpul bukan untuk membahas teknis pekerjaan, tapi membahas *cara kerja* tim.
  
  Tanyakan 3 hal: Apa yang berjalan baik (Start)? Apa yang kurang baik (Stop)? Apa yang bisa dicoba di sprint berikutnya (Continue)? Ini menciptakan budaya tim yang jujur, terbuka, dan terus bertumbuh.`,

  'pm10': `Tools manajemen proyek seperti Jira, Asana, atau Notion adalah alat bantu, bukan tujuan. Mereka membantu visualisasi tugas, pelacakan deadline, dan kolaborasi dokumen.
  
  Kuasai satu tool dengan mendalam. Pelajari cara membuat tiket, mengatur status workflow, dan membuat dashboard report otomatis. Namun ingat: "Individuals and interactions over processes and tools". Komunikasi manusia tetap yang utama.`,

  // --- Sales Mastery ---
  'sl1': `Sales Mindset yang benar: Menjual adalah membantu. Jika produk Anda bagus dan memecahkan masalah orang, Anda *berkewajiban* menawarkannya. Hilangkan stigma "Sales itu mengganggu".
  
  Fokus pada memberi nilai (value), bukan mengambil uang. Penolakan (rejection) bukan personal, itu hanya data bahwa penawaran belum cocok. Sales adalah permainan angka dan ketahanan mental.`,

  'sl2': `Anda tidak bisa menjual apa yang tidak Anda mengerti. Product Knowledge mutlak diperlukan. Tapi jangan berhenti di fitur teknis. Terjemahkan fitur menjadi Manfaat (Benefit).
  
  Fitur: "Laptop ini punya RAM 16GB". Manfaat: "Anda bisa buka 50 tab chrome dan edit video tanpa lemot sedikitpun". Pelanggan membeli solusi atas masalah mereka, bukan spesifikasi teknis.`,

  'sl3': `Prospecting adalah aktivitas mencari calon pembeli (Leads). Jangan menembak sembarangan. Buat profil Ideal Customer Profile (ICP). Di mana mereka berkumpul? Apa masalah mereka?
  
  Gunakan LinkedIn, database industri, atau referral. Kualitas prospek lebih penting dari kuantitas. 10 prospek tertarget lebih baik dari 100 prospek acak yang tidak butuh produk Anda.`,

  'sl4': `Elevator Pitch adalah penjelasan singkat (30-60 detik) tentang siapa Anda dan apa yang Anda tawarkan. Strukturnya: Siapa Anda, Masalah apa yang Anda selesaikan, Bagaimana caranya, dan Bukti keberhasilan.
  
  Tujuannya bukan langsung closing, tapi membuat orang penasaran dan berkata "Ceritakan lebih lanjut". Latih pitch ini sampai terdengar natural, tidak seperti robot menghafal naskah.`,

  'sl5': `Sales yang hebat mendengarkan 80%, bicara 20%. Active Listening adalah kunci menggali kebutuhan tersembunyi (Latent Pain). Gunakan pertanyaan terbuka (5W+1H) untuk membiarkan prospek bercerita.
  
  Teknik SPIN Selling: Situation (Kondisi sekarang), Problem (Masalah), Implication (Dampak negatif jika masalah didiamkan), Need-Payoff (Nilai solusi Anda). Buat prospek menyadari sendiri bahwa mereka butuh solusi Anda.`,

  'sl6': `Keberatan (Objection) seperti "Mahal", "Nanti dulu", "Tanya istri" adalah tanda ketertarikan, bukan penolakan mutlak. Jangan defensif. Gunakan teknik Empathy -> Clarify -> Isolate -> Respond.
  
  Contoh: "Saya paham budget adalah concern (Empathy). Selain harga, apakah ada hal lain yang menahan Bapak? (Isolate). Jika harga cocok, apakah kita bisa deal hari ini? (Clarify)". Seringkali masalahnya bukan harga, tapi nilai (value) yang belum tersampaikan.`,

  'sl7': `Negosiasi bukan berarti mengalah dan diskon harga. Tujuannya adalah Win-Win Solution. Jangan hanya fokus pada harga, mainkan variabel lain: Termin pembayaran, Bonus fitur, Garansi, atau Durasi kontrak.
  
  Pahami BATNA (Best Alternative to a Negotiated Agreement) - opsi terbaik Anda jika gagal deal. Siaplah untuk "Walk Away" jika kesepakatan merugikan. Negosiasi yang baik memperkuat hubungan jangka panjang.`,

  'sl8': `Closing adalah meminta keputusan. Banyak sales gagal karena takut bertanya "Jadi beli?". Gunakan teknik closing yang sesuai situasi.
  
  Assumptive Close: "Mau dikirim ke alamat kantor atau rumah?" (Asumsi mereka sudah setuju). Option Close: "Lebih cocok paket A atau paket B?". Urgency Close: "Promo ini berakhir besok". Kuncinya adalah percaya diri saat meminta order.`,

  'sl9': `Statistik menunjukkan 80% penjualan terjadi setelah 5-12 kali follow up. Tapi 44% sales berhenti setelah 1 kali kontak. Uang ada di follow up.
  
  Jangan hanya bertanya "Jadi beli?". Berikan value tambahan di setiap kontak: kirim artikel relevan, info industri, atau studi kasus baru. Jadilah konsultan yang membantu, bukan pengganggu yang menagih.`,

  'sl10': `Otak manusia pelupa. CRM (Customer Relationship Management) adalah sistem untuk mencatat setiap interaksi dengan prospek. Kapan terakhir kontak? Apa keluhannya? Kapan janji telepon lagi?
  
  Pipeline Management memvisualisasikan prospek di setiap tahap (New -> Contacted -> Proposal -> Negotiation -> Won). Ini membantu Anda memprediksi omzet bulan depan dan tahu siapa yang harus diprioritaskan hari ini.`,

  // --- Content Creation ---
  'cc1': `Setiap platform punya aturan main (algoritma) berbeda. TikTok/Reels/Shorts memprioritaskan "Watch Time" dan "Retention". Jika orang menonton video Anda sampai habis, algoritma akan menyebarkannya ke lebih banyak orang.
  
  Fokus pada konten Vertikal (9:16). Pahami bahwa Anda tidak butuh followers awal untuk viral (Interest Graph), konten yang bagus akan menemukan penontonnya sendiri. Pelajari tren audio dan format yang sedang naik daun, tapi adaptasi dengan niche Anda.`,

  'cc2': `Hook adalah 3 detik pertama yang menentukan hidup mati konten Anda. Di era scroll cepat, Anda harus menghentikan jempol penonton seketika. Jangan mulai dengan "Halo guys, nama saya...".
  
  Mulai dengan Visual yang mengejutkan, Pertanyaan provokatif ("Tahukah kamu?"), atau Statement kontroversial. Hook harus menjanjikan nilai yang akan didapat jika menonton sampai akhir. Tanpa hook yang kuat, isi video sebagus apapun tidak akan ditonton.`,

  'cc3': `Scripting mencegah Anda berbicara berbelit-belit. Struktur video pendek yang efektif: Hook (3 detik) -> Re-hook/Introduction (Jelaskan konteks cepat) -> Value/Isi (Poin utama padat) -> CTA (Call to Action).
  
  Gunakan bahasa yang conversational dan to-the-point. Buang kata-kata filler (umm, ahh). Ingat, durasi ideal video pendek edukasi adalah 30-60 detik. Setiap detik harus memberikan nilai atau hiburan.`,

  'cc4': `Audio buruk lebih tidak termaafkan daripada visual buram. Penonton akan skip jika suara Anda bergema atau kecil. Gunakan mic eksternal murah atau earphone bawaan HP. Rekam di tempat sunyi atau lemari baju (banyak kain meredam gema).
  
  Pencahayaan terbaik adalah gratis: Cahaya Matahari. Berdirilah menghadap jendela (jangan membelakangi). Jika malam, gunakan ring light atau lampu meja yang dipantulkan ke tembok agar cahaya lembut di wajah.`,

  'cc5': `CapCut adalah standar industri editing video di HP. Pelajari fitur dasar: Split (potong bagian salah), Speed (percepat momen lambat), dan Volume. Teknik "Jump Cut" (memotong jeda diam antar kalimat) membuat video terasa dinamis dan cepat.
  
  Gunakan B-Roll (video pelapis) untuk memvisualisasikan apa yang Anda bicarakan agar penonton tidak bosan melihat wajah Anda terus. Editing yang baik itu tidak terlihat, ia hanya menjaga aliran cerita.`,

  'cc6': `Banyak orang menonton video tanpa suara (di kantor/umum). Text Overlay (tulisan di layar) dan Caption otomatis sangat wajib. Gunakan font yang tebal dan mudah dibaca di tengah layar.
  
  Highlight kata kunci dengan warna berbeda untuk penekanan. Pastikan teks tidak tertutup ikon like/comment di pinggir layar (Safe Zone). Teks yang dinamis membantu menjaga perhatian visual penonton.`,

  'cc7': `Trending Audio adalah jalan pintas eksposur di TikTok/Reels. Menggunakan lagu yang sedang viral memberi sinyal relevansi ke algoritma. Simpan audio yang sering muncul di FYP Anda.
  
  Namun, jangan asal pakai. Sesuaikan beat lagu dengan transisi video Anda. Volume lagu latar jangan sampai menutupi suara bicara Anda (Voiceover). Kecilkan musik ke 10-20% saat Anda berbicara.`,

  'cc8': `Branding membuat konten Anda dikenali sekilas. Tentukan Identitas Visual: Palet warna tetap, Font konsisten, dan Gaya bicara/baju khas. Konsistensi ini membangun memori di benak audiens.
  
  Branding juga tentang "Niche Authority". Audiens harus tahu: akun ini tentang apa? Jangan gado-gado. Jika niche Anda edukasi keuangan, konsistenlah di sana agar algoritma tahu kepada siapa video Anda harus disodorkan.`,

  'cc9': `Analytics adalah rapor kinerja Anda. Jangan hanya lihat Views atau Likes. Lihat "Average Watch Time" dan "Retention Rate". Di detik ke berapa orang drop/skip? Itu tanda bagian itu membosankan.
  
  Perbaiki hook jika retensi awal rendah. Perbaiki isi jika drop di tengah. Perbaiki CTA jika engagement (share/save) rendah. Data tidak pernah bohong, gunakan untuk iterasi konten berikutnya.`,

  'cc10': `Monetisasi adalah tujuan akhir kreator. Jangan hanya mengandalkan Adsense/Creator Fund. Bangun kolam sendiri. Brand Deals (Endorsement) adalah sumber umum, tapi Affiliate Marketing dan Produk Digital (Ebook/Course) lebih scalable.
  
  Siapkan Rate Card (daftar harga jasa). Bangun kepercayaan dulu, baru jualan. Audiens yang loyal akan membeli apapun yang Anda rekomendasikan karena mereka percaya kurasi Anda.`,

  // --- UX Design ---
  'ux1': `User Research adalah fondasi UX. Jangan mendesain berdasarkan asumsi atau "insting". Anda bukan pengguna Anda. Lakukan wawancara mendalam untuk memahami masalah, kebutuhan, dan motivasi pengguna.
  
  Pahami perbedaan riset Kualitatif (Wawancara - mencari "Mengapa") dan Kuantitatif (Survei - mencari "Berapa"). Dengarkan cerita mereka, amati kesulitan mereka saat menggunakan produk sejenis. Insight dari riset inilah yang akan menjadi bahan bakar solusi desain Anda nanti.`,

  'ux2': `Persona adalah karakter fiktif yang mewakili tipe pengguna ideal Anda. Ini membantu tim desain memiliki empati yang sama. Alih-alih berkata "User ingin fitur X", kita berkata "Budi (Persona Ayah sibuk) butuh fitur X karena dia tidak punya waktu".
  
  Persona yang baik berisi: Nama, Foto, Demografi, Tujuan (Goals), Frustrasi (Pain Points), dan Skenario penggunaan. Persona menjaga desain tetap fokus pada manusia, bukan fitur teknis semata.`,

  'ux3': `Information Architecture (IA) adalah tentang mengorganisir konten agar mudah ditemukan. Bayangkan IA sebagai denah lantai sebuah perpustakaan. Jika buku ditumpuk sembarangan, perpustakaan itu tidak berguna.
  
  Gunakan teknik "Card Sorting" untuk memahami bagaimana pengguna mengelompokkan informasi secara mental. Buat Sitemap yang menggambarkan hierarki halaman aplikasi Anda. Navigasi yang baik harus intuitif, pengguna tidak boleh berpikir keras hanya untuk menemukan tombol "Setting".`,

  'ux4': `User Flow adalah peta langkah demi langkah yang diambil pengguna untuk mencapai tujuan tertentu (misal: Membeli Tiket). Flowchart ini menggambarkan logika percabangan: "Jika login sukses, ke Home. Jika gagal, tampilkan pesan error".
  
  User Flow membantu mendeteksi "jalan buntu" atau langkah yang terlalu rumit sebelum Anda mulai menggambar desain visual. Tujuannya adalah membuat perjalanan pengguna sehalus dan sesingkat mungkin (frictionless).`,

  'ux5': `Wireframing adalah sketsa kasar struktur halaman. Jangan pikirkan warna, font, atau gambar dulu (Low Fidelity). Fokus pada tata letak (layout) dan fungsi. Di mana tombol diletakkan? Seberapa besar porsi konten utama?
  
  Gunakan kertas dan pensil atau tools digital sederhana. Wireframe memungkinkan Anda bereksperimen dan merevisi ide dengan sangat cepat dan murah. Lebih baik membuang sketsa kertas daripada membuang desain yang sudah diwarnai rapi berjam-jam.`,

  'ux6': `Figma adalah standar industri saat ini untuk desain UI/UX. Kelebihannya adalah berbasis web (bisa diakses di mana saja) dan kolaborasi real-time (bisa desain bareng tim seperti Google Docs). Pelajari tools dasar: Frame, Shape, Pen tool, dan Auto Layout.
  
  Auto Layout adalah fitur killer Figma yang memungkinkan desain Anda responsif secara otomatis saat isi konten berubah (misal: tombol memanjang saat teks diganti). Kuasai fitur Components dan Styles untuk membuat sistem desain yang konsisten dan efisien.`,

  'ux7': `UI (User Interface) Principles adalah aturan agar desain terlihat estetik dan mudah digunakan. Pelajari teori Warna (psikologi warna, kontras aksesibilitas), Tipografi (hierarki judul vs isi, keterbacaan), dan Spacing (whitespace).
  
  Ruang kosong (whitespace) bukanlah ruang yang terbuang, melainkan elemen desain aktif untuk memberi napas dan memisahkan kelompok informasi. Desain yang baik memiliki hierarki visual yang jelas: mata pengguna harus otomatis tertuju ke elemen paling penting (misal: tombol "Beli Sekarang") pertama kali.`,

  'ux8': `Prototyping mengubah gambar mati menjadi simulasi interaktif. Di Figma, Anda bisa menghubungkan antar layar sehingga tombol bisa diklik dan berpindah halaman. Tambahkan animasi transisi sederhana untuk memberikan feedback visual.
  
  Prototype sangat penting untuk menguji alur aplikasi kepada pengguna atau stakeholder tanpa harus menulis satu baris kode pun. Ini menjembatani imajinasi desainer dengan realitas teknis developer. Buatlah prototype yang cukup nyata untuk "menipu" pengguna saat testing.`,

  'ux9': `Usability Testing adalah momen kebenaran. Minta 5 orang yang sesuai persona Anda untuk mencoba prototype. Berikan tugas spesifik (misal: "Coba pesan ojek ke Monas"), lalu AMATI. Jangan ajari mereka.
  
  Lihat di mana mereka bingung, ragu, atau salah klik. Minta mereka menyuarakan pikiran (Think Aloud). Feedback ini seringkali mengejutkan dan meruntuhkan ego desainer. Revisi desain Anda berdasarkan temuan ini. Desain UX adalah proses iteratif yang tidak pernah berhenti.`,

  'ux10': `Studi Kasus (Case Study) adalah mata uang desainer UX. Kumpulkan semua proses dari awal (riset, sketsa, wireframe, testing, revisi) menjadi sebuah cerita dokumentasi yang menarik. HRD tidak hanya ingin melihat hasil akhir yang cantik, mereka ingin melihat POLA PIKIR Anda memecahkan masalah.
  
  Struktur studi kasus yang baik: Latar Belakang Masalah, Peran Anda, Proses Desain, Tantangan yang dihadapi, Solusi Akhir, dan Pelajaran yang dipetik. Publikasikan di Medium, Behance, atau website pribadi.`,

  // --- Graphic Design ---
  'gd1': `Prinsip Desain adalah tata bahasa visual. Balance (Keseimbangan) memastikan desain tidak berat sebelah. Contrast (Kontras) membedakan elemen penting dari latar belakang. Hierarchy (Hierarki) memandu mata penonton dari judul ke isi.
  
  Pelajari Repetition (Pengulangan) untuk konsistensi, dan Alignment (Perataan) agar desain terlihat rapi dan profesional. Tanpa prinsip ini, desain akan terlihat berantakan dan membingungkan, sebagus apapun gambar yang dipakai.`,

  'gd2': `Teori Warna membangkitkan emosi. Merah itu urgensi/nafsu, Biru itu kepercayaan/profesional, Kuning itu ceria. Pelajari Roda Warna: Warna Komplementer (berseberangan) untuk kontras tinggi, Analogous (bersebelahan) untuk harmoni.
  
  Pahami Saturasi (kecerahan) dan Value (gelap-terang). Aturan 60-30-10 sangat membantu: 60% warna dominan, 30% warna sekunder, 10% warna aksen. Warna yang tepat bisa meningkatkan keterbacaan dan konversi penjualan.`,

  'gd3': `Tipografi adalah suara dari teks Anda. Serif (berkaki) memberi kesan klasik dan formal (seperti Times New Roman). Sans Serif (tanpa kaki) memberi kesan modern dan bersih (seperti Arial/Inter).
  
  Pelajari "Font Pairing": menggabungkan 1 font judul yang berkarakter dengan 1 font isi yang mudah dibaca. Perhatikan Kerning (jarak antar huruf), Leading (jarak antar baris), dan Tracking. Tipografi yang buruk bisa membuat pesan tidak terbaca.`,

  'gd4': `Grid dan Layout adalah kerangka tak terlihat yang menjaga kerapian desain. Grid membantu Anda menempatkan elemen (gambar, teks) secara presisi dan konsisten. Rule of Thirds adalah panduan komposisi klasik untuk titik fokus yang menarik.
  
  Pelajari penggunaan White Space (ruang kosong). Jangan takut dengan ruang kosong, itu memberi mata audiens istirahat dan membuat desain terlihat elegan. Desain yang terlalu penuh (cluttered) membuat orang malas melihat.`,

  'gd5': `Canva mendemokratisasi desain. Anda tidak perlu Photoshop untuk membuat desain bagus. Kuasai fitur-fitur efisiensi Canva: Brand Kit (simpan logo/font/warna), Magic Resize (ubah ukuran otomatis untuk berbagai sosmed), dan penggunaan Templates cerdas.
  
  Pahami layer dan grouping di Canva. Meski tool-nya mudah, prinsip desain tetap berlaku. Jangan gunakan terlalu banyak elemen dekoratif yang tidak perlu. Desain Canva yang baik terlihat seperti dibuat di software profesional.`,

  'gd6': `Logo bukan sekadar gambar, itu wajah brand. Pelajari tipe logo: Wordmark (teks saja seperti Google), Pictorial (ikon seperti Apple), Abstract (seperti Nike), dan Monogram (inisial seperti IBM).
  
  Logo yang baik harus: Sederhana (mudah diingat), Skalabel (jelas dilihat di kartu nama maupun billboard), dan Relevan dengan industri. Mulailah dengan sketsa hitam putih untuk memastikan bentuknya kuat sebelum menambahkan warna.`,

  'gd7': `Vector vs Raster adalah pengetahuan teknis wajib. Raster (JPG/PNG) terbuat dari piksel, akan pecah jika diperbesar. Vector (SVG/EPS/AI) terbuat dari rumus matematika, bisa diperbesar tanpa batas tanpa pecah.
  
  Gunakan Adobe Illustrator atau Inkscape (gratis) untuk membuat logo dan ilustrasi. Gunakan Photoshop/Canva untuk edit foto. Jangan pernah membuat logo menggunakan software berbasis raster (Photoshop) untuk hasil profesional.`,

  'gd8': `Brand Identity lebih dari sekadar logo. Ini adalah sistem visual yang mencakup: Logo, Palet Warna, Tipografi, Elemen Grafis (pola/ikon), dan Gaya Fotografi. Brand Guidelines (Buku Panduan Brand) memastikan konsistensi.
  
  Konsistensi membangun kepercayaan. Jika warna brand di Instagram beda dengan di Website, audiens akan bingung. Belajarlah membuat Moodboard untuk menentukan arah visual sebelum mulai mendesain aset satu per satu.`,

  'gd9': `Visual Hierarchy memandu mata audiens: "Lihat ini dulu, lalu ini, terakhir ini". Anda bisa menciptakan hierarki melalui: Ukuran (besar=penting), Warna (cerah=penting), Posisi (atas=penting), dan Ketebalan Font.
  
  Contoh poster event: Nama Artis (Terbesar) -> Tanggal (Menengah) -> Info Tiket (Kecil). Jika semua teks ukurannya sama, audiens tidak tahu mana info yang paling penting dan akan mengabaikan desain Anda.`,

  'gd10': `Desain untuk Cetak dan Digital itu beda dunia. Digital menggunakan mode warna RGB (cahaya) dan resolusi 72 PPI. Cetak menggunakan CMYK (tinta) dan resolusi minimal 300 DPI (Dots Per Inch).
  
  Pahami konsep Bleed (area aman potong) dan Margin saat mendesain kartu nama atau brosur. Kesalahan mode warna bisa membuat hasil cetak terlihat kusam dan tidak sesuai layar. Selalu cek spesifikasi percetakan sebelum finalisasi file.`,

  // --- Podcasting ---
  'pod1': `Konsep adalah raja. Sebelum merekam, tentukan "Why". Mengapa orang harus mendengarkan podcast ini? Apakah untuk belajar (Edukasi), tertawa (Komedi), atau terinspirasi (Storytelling)?
  
  Tentukan Format: Monolog (Solo) membangun otoritas pribadi, Interview membangun jaringan dan variasi perspektif, Multi-host (Chat) membangun dinamika seru. Pilih nama yang catchy tapi deskriptif (mengandung kata kunci topik) agar mudah ditemukan di pencarian.`,

  'pod2': `Jangan bikin podcast untuk "semua orang". Itu resep gagal. Buat Avatar Pendengar Ideal: Umur berapa? Apa hobinya? Kapan dia mendengarkan podcast (saat lari pagi/macet)? Apa masalah hidupnya?
  
  Konten Anda harus menjadi solusi atau teman bagi Avatar ini. Semakin spesifik target audiens (Niche), semakin loyal pendengar Anda. Contoh: "Podcast Finansial untuk Ibu Rumah Tangga" lebih kuat daripada "Podcast Uang".`,

  'pod3': `Audio adalah media yang tidak memaafkan kualitas buruk. Tapi Anda tidak butuh studio mahal. Ruangan adalah faktor #1. Rekam di ruangan kecil penuh barang (lemari baju, kamar tidur) untuk meredam gema (echo). Hindari kamar mandi atau ruangan kosong.
  
  Mic USB dinamis (seperti Samson Q2U atau ATR2100x) adalah investasi terbaik pemula karena menangkap suara fokus di depan mulut dan menolak kebisingan ruangan. Gunakan Pop Filter untuk mencegah suara ledakan angin "P" dan "B".`,

  'pod4': `Teknik mikrofon yang benar: Jaga jarak sekepalan tangan dari mulut. Jangan terlalu dekat (distorsi/basah), jangan terlalu jauh (gema/kecil). Bicara sedikit menyamping dari mic (off-axis) untuk mengurangi plosive.
  
  Gain Staging: Atur level input volume agar rata-rata di -12dB sampai -6dB. Jangan sampai menyentuh 0dB (clipping/pecah). Minum air putih sebelum merekam untuk menghindari suara mulut lengket (mouth clicks).`,

  'pod5': `Wawancara yang bagus bukan interogasi tanya-jawab. Itu adalah percakapan yang terarah. Riset tamu Anda sedalam mungkin. Jangan tanyakan hal dasar yang ada di Wikipedia. Cari angle unik.
  
  Jadilah pendengar aktif. Jawaban terbaik seringkali muncul dari pertanyaan lanjutan (Follow-up question) seperti "Bisa ceritakan lebih detail momen itu?" atau "Kenapa Anda merasa begitu?". Biarkan tamu bersinar, tugas Anda memandu cerita.`,

  'pod6': `Editing membedakan amatir dan pro. Gunakan Audacity (gratis) atau Reaper. Langkah dasar: Noise Reduction (hapus desis latar), Equalization (EQ) untuk menjernihkan suara, dan Compression untuk meratakan volume suara keras dan pelan.
  
  Potong bagian yang membosankan, jeda diam yang terlalu lama, dan kata-kata filler (umm, ahh) yang mengganggu. Tapi jangan over-edit sampai terdengar tidak natural. Tujuannya adalah pengalaman dengar yang mulus (smooth listening experience).`,

  'pod7': `Intro dan Outro adalah kemasan podcast. Intro harus singkat (maks 30 detik): Nama Podcast, Nama Host, dan "Janji" episode ini (apa yang akan didapat pendengar). Gunakan musik latar yang sesuai mood.
  
  Outro berisi Call to Action (CTA): "Jangan lupa follow di Spotify" atau "Share ke teman". Konsistensi musik dan struktur ini membangun Sonic Branding, membuat pendengar langsung mengenali podcast Anda dalam detik pertama.`,

  'pod8': `Cover Art adalah satu-satunya hal yang dilihat orang sebelum klik play. Desain harus terlihat jelas bahkan dalam ukuran kecil (thumbnail di HP). Ukuran standar 3000x3000px.
  
  Gunakan warna kontras yang mencolok. Wajah host (mata menatap kamera) biasanya menarik perhatian. Teks judul harus besar dan terbaca. Jangan masukkan terlalu banyak detail kecil. Lihat cover podcast top chart sebagai referensi.`,

  'pod9': `Hosting adalah rumah file audio Anda (MP3). Anda tidak upload langsung ke Spotify. Anda upload ke Host (seperti Anchor/Spotify for Podcasters, Buzzsprout), lalu Host membuat RSS Feed. RSS inilah yang didaftarkan ke Spotify, Apple, Google.
  
  Sekali setup, setiap kali Anda upload episode baru ke Host, otomatis akan muncul di semua platform. Anchor adalah pilihan gratis terbaik untuk pemula dengan fitur distribusi otomatis.`,

  'pod10': `Rilis tanpa promosi adalah kesia-siaan. Strategi Launching: Rilis 3 episode sekaligus di hari pertama agar pendengar bisa binge-listening (maraton), yang mendongkrak statistik download.
  
  Promosikan di sosmed dengan Audiogram (potongan audio visual). Minta pendengar memberi Rating bintang 5 dan Review di Apple Podcasts karena itu membantu ranking chart. Konsistensi (misal: tiap Selasa) adalah kunci pertumbuhan jangka panjang.`,

  // --- Photography ---
  'ph1': `Segitiga Eksposur (Exposure Triangle) adalah fisika dasar fotografi. ISO (sensitivitas sensor), Aperture (bukaan lensa), dan Shutter Speed (kecepatan rana) bekerja sama mengatur cahaya yang masuk.
  
  Jika satu elemen berubah, yang lain harus menyesuaikan untuk menjaga kecerahan foto. Mode Manual memberi Anda kontrol kreatif penuh: apakah ingin foto terang/gelap, background blur/tajam, atau gerakan beku/blur. Jangan terjebak di mode Auto selamanya.`,

  'ph2': `Aperture (f-stop) mengontrol seberapa banyak cahaya masuk lewat lensa dan Depth of Field (ruang tajam). Angka kecil (f/1.8) berarti bukaan besar = cahaya banyak + background blur (Bokeh). Cocok untuk potrait.
  
  Angka besar (f/16) berarti bukaan kecil = cahaya sedikit + semua tajam dari depan sampai belakang. Cocok untuk landscape pemandangan. Aperture adalah alat artistik utama untuk mengisolasi subjek.`,

  'ph3': `Shutter Speed mengontrol durasi sensor terekspos cahaya. Speed cepat (1/1000s) membekukan gerakan (Freeze), cocok untuk olahraga atau anak kecil lari. Speed lambat (1/15s atau bulb) merekam jejak gerakan (Motion Blur).
  
  Teknik Long Exposure (speed lambat) digunakan untuk memotret air terjun selembut kapas atau jejak lampu mobil (light trails) di malam hari. Hati-hati, speed lambat butuh tripod agar foto tidak goyang (shake).`,

  'ph4': `ISO adalah kepekaan sensor terhadap cahaya. ISO rendah (100) menghasilkan kualitas gambar terbaik, bersih tanpa bintik (noise), tapi butuh banyak cahaya. Gunakan saat siang terik.
  
  ISO tinggi (3200+) memungkinkan memotret di tempat gelap, tapi konsekuensinya muncul bintik-bintik kasar (Grain/Noise) dan detail berkurang. Prinsipnya: Gunakan ISO serendah mungkin yang kondisi cahaya izinkan.`,

  'ph5': `Komposisi adalah cara menata elemen dalam bingkai agar enak dilihat. Rule of Thirds adalah panduan paling dasar: bagi layar jadi 9 kotak (garis #). Taruh subjek di titik pertemuan garis, bukan di tengah mati.
  
  Ini membuat foto lebih dinamis dan seimbang. Pelajari juga Leading Lines (garis yang menuntun mata ke subjek), Framing (bingkai alami seperti jendela/dahan pohon), dan Negative Space. Komposisi yang baik bisa membuat subjek membosankan jadi menarik.`,

  'ph6': `Fotografi adalah melukis dengan cahaya. Golden Hour (1 jam setelah sunrise dan 1 jam sebelum sunset) adalah waktu keramat fotografer. Cahayanya lembut, hangat, dan bayangannya panjang dramatis.
  
  Hindari memotret di tengah hari bolong (jam 12) karena cahaya keras (harsh light) menciptakan bayangan mata panda yang jelek di wajah. Jika terpaksa, cari tempat teduh (open shade). Arah cahaya juga penting: Front light (rata), Side light (bertekstur), Back light (siluet/rim light).`,

  'ph7': `Fokus menentukan ke mana mata penonton harus melihat. Di HP/Kamera, pelajari cara mengunci fokus (AF Lock). Jangan sampai background tajam tapi wajah subjek buram (kecuali disengaja).
  
  Pelajari jarak fokus minimum lensa Anda. Untuk foto makro (bunga/serangga), Anda harus sangat dekat tapi jangan melebihi batas kemampuan lensa fokus. Fokus yang tajam pada mata subjek adalah aturan utama portrait photography.`,

  'ph8': `White Balance (WB) memastikan warna putih terlihat putih, tidak kekuningan atau kebiruan. Setiap sumber cahaya punya suhu warna (Kelvin) berbeda. Lampu pijar itu oranye (warm), mendung itu biru (cool).
  
  Mata manusia beradaptasi otomatis, tapi kamera butuh bantuan. Setting WB yang salah bisa merusak mood foto. Gunakan preset (Daylight, Cloudy, Tungsten) atau set Kelvin manual untuk hasil warna yang akurat atau artistik.`,

  'ph9': `Editing adalah kamar gelap digital. Ini bukan curang, tapi proses mematangkan foto mentah (RAW). Lightroom (atau Snapseed di HP) adalah standar industri. Pelajari slider dasar: Exposure, Contrast, Highlights (terang), Shadows (gelap).
  
  Color Grading memberi mood pada foto. Teal & Orange populer untuk kesan sinematik. Jangan over-edit (terlalu tajam/terlalu jenuh warnanya) sampai terlihat palsu. Editing terbaik adalah yang memperkuat cerita foto, bukan mengubah realitas berlebihan.`,

  'ph10': `Setelah menguasai teknis, carilah suara visual Anda sendiri (Style). Apakah Anda suka foto hitam putih yang moody? Atau warna pastel yang ceria? Street photography yang candid atau Studio yang tertata?
  
  Konsistensi style membuat portofolio Anda kuat dan dikenali. Kurasi karya terbaik Anda (maksimal 10-20 foto) untuk dipamerkan di Instagram atau website. Kualitas > Kuantitas. Teruslah memotret, mata fotografer dilatih dengan pengalaman, bukan dengan membeli kamera mahal.`,

  // --- Effective Communication ---
  'ec1': `Mendengar adalah setengah dari komunikasi, tapi sering diabaikan. Active Listening bukan sekadar diam menunggu giliran bicara. Itu adalah fokus penuh untuk memahami pesan, emosi, dan niat lawan bicara.
  
  Tunjukkan Anda menyimak dengan kontak mata, anggukan, dan verbal kecil ("Oh gitu", "Lalu?"). Lakukan Paraphrasing: ulangi apa yang mereka katakan dengan bahasa Anda sendiri ("Jadi maksudmu X ya?") untuk memastikan pemahaman. Orang merasa dihargai saat benar-benar didengarkan.`,

  'ec2': `Penelitian Albert Mehrabian menunjukkan 55% komunikasi adalah bahasa tubuh (visual), 38% nada suara (vokal), dan hanya 7% kata-kata (verbal). Postur terbuka (tidak menyilang tangan) menandakan keramahan.
  
  Pertahankan kontak mata (tapi jangan melotot terus, 70/30 aturan aman). Senyum tulus melibatkan mata (Duchenne smile). Perhatikan bahasa tubuh lawan bicara: jika mereka mundur atau melihat jam, itu sinyal bosan atau tidak nyaman. Sesuaikan diri.`,

  'ec3': `Small Talk adalah pelumas sosial. Jangan meremehkannya. Itu jembatan menuju pembicaraan dalam (Big Talk). Rumus FORD: Family (Keluarga), Occupation (Kerjaan), Recreation (Hobi), Dreams (Cita-cita).
  
  Hindari topik sensitif (SARA, Politik) di awal. Gunakan pertanyaan terbuka ("Bagaimana ceritanya bisa kerja di sana?") daripada tertutup ("Kerja di mana?"). Jadilah orang yang tertarik (interested), bukan orang yang berusaha menarik (interesting).`,

  'ec4': `Kejelasan (Clarity) adalah raja. Hindari jargon rumit jika lawan bicara bukan ahli. Gunakan struktur "PREP": Point (Inti), Reason (Alasan), Example (Contoh), Point (Kesimpulan).
  
  Bicara padat dan ringkas. Berbelit-belit membunuh perhatian. Sebelum bicara, tanya diri sendiri: "Apa satu hal utama yang ingin saya sampaikan?". Hapus detail yang tidak relevan. Komunikasi efektif adalah tentang transfer ide dengan distorsi minimal.`,

  'ec5': `Public Speaking adalah ketakutan #1 banyak orang. Obatnya adalah persiapan, bukan bakat. Pahami audiens Anda: Siapa mereka? Apa yang mereka butuhkan? Struktur presentasi: Hook (Pembuka kuat) -> Body (3 poin utama) -> Conclusion (Penutup berkesan).
  
  Grogi itu energi. Ubah "Saya takut" jadi "Saya bersemangat". Latihan di depan cermin atau rekam video. Jangan membaca slide! Slide untuk audiens, bukan contekan pembicara. Kontak mata dengan audiens, bukan layar.`,

  'ec6': `Manusia diprogram untuk menyukai cerita. Fakta memberi informasi, cerita menggerakkan hati. Gunakan struktur "Hero's Journey" sederhana: Tokoh -> Menghadapi Masalah -> Menemukan Solusi -> Transformasi.
  
  Sisipkan anekdot pribadi dalam presentasi atau obrolan. Cerita membuat pesan Anda lengket di memori (memorable). Daripada bilang "Produk ini efisien", ceritakan "Klien kami Pak Budi dulu lembur tiap hari, sejak pakai ini dia bisa pulang jam 5 sore".`,

  'ec7': `Asertif bukan agresif (galak) dan bukan pasif (nurut). Asertif adalah berani menyampaikan kebutuhan/pendapat sendiri dengan tetap menghargai orang lain. Rumus "I Statement": "Saya merasa [perasaan] ketika [situasi], saya harap [kebutuhan]."
  
  Berani berkata "Tidak" pada hal yang merugikan Anda adalah skill vital. "Maaf saya tidak bisa bantu sekarang karena sedang deadline". Menetapkan batasan (boundaries) membuat Anda lebih dihargai daripada menjadi "Yes Man".`,

  'ec8': `Memberi kritik itu seni. Tujuannya memperbaiki, bukan menyakiti. Gunakan metode Sandwich: Pujian (Roti) -> Kritik Konstruktif (Daging) -> Pujian/Dorongan (Roti). Fokus pada perilaku, bukan karakter orangnya.
  
  Salah: "Kamu malas". Benar: "Laporan ini telat 2 hari (Fakta), ini menghambat tim (Dampak). Mohon ke depan lebih tepat waktu ya, saya tahu kamu bisa (Harapan)". Saat menerima kritik, ucapkan "Terima kasih infonya", jangan defensif/alasan dulu.`,

  'ec9': `Konflik tidak terhindarkan, tapi bisa dikelola. Jangan lari (Stonewalling) atau menyerang (Attack). Cari "Common Ground" (kepentingan bersama). Pisahkan orang dari masalahnya.
  
  Gunakan teknik "Reflective Listening": validasi perasaan mereka dulu. "Saya dengar kamu kecewa karena proyek ini molor". Saat emosi didengar, logika baru bisa masuk. Fokus cari solusi (Win-Win), bukan cari siapa yang salah atau menang.`,

  'ec10': `Hidup adalah negosiasi. Entah gaji, harga pasar, atau mau makan di mana. Prinsip utama: Persiapan. Tahu apa yang Anda mau (Target) dan apa alternatif Anda (BATNA).
  
  Jangan langsung terima tawaran pertama. Tawar-menawar adalah tarian. Berikan konsesi (mengalah) hanya jika mendapat imbalan ("Saya bisa turunkan harga, TAPI termin pembayaran dipercepat ya"). Tujuannya adalah kesepakatan yang adil di mana kedua pihak merasa puas.`,

  // --- Time Management ---
  'tf1': `Time Audit adalah langkah diagnosa. Kita sering merasa "sibuk" tapi tidak produktif. Selama 3 hari, catat apa yang Anda lakukan setiap 30 menit. Jujurlah. Berapa jam scrolling sosmed? Berapa jam rapat tidak penting?
  
  Data ini akan membuka mata. Anda akan menemukan "Waktu Sampah" yang bisa dieliminasi atau didelegasikan. Anda tidak bisa memanajemen waktu yang Anda tidak tahu ke mana perginya.`,

  'tf2': `Pomodoro Technique melatih fokus seperti otot. Kerja 25 menit fokus total, istirahat 5 menit. Ulangi 4 siklus, lalu istirahat panjang. Timer menciptakan urgensi buatan yang mencegah melamun.
  
  Istirahat 5 menit harus benar-benar istirahat (jalan, minum, regangkan badan), bukan cek sosmed. Teknik ini mencegah burnout dan menjaga kesegaran otak sepanjang hari. Cocok untuk tugas membosankan atau sulit dimulai.`,

  'tf3': `Eisenhower Matrix membedakan "Mendesak" (Urgent) dan "Penting" (Important).
  1. Penting & Mendesak (Krisis): Kerjakan Sekarang.
  2. Penting & Tidak Mendesak (Perencanaan/Belajar): Jadwalkan. Ini kuadran sukses.
  3. Tidak Penting & Mendesak (Email/Telpon gangguan): Delegasikan.
  4. Tidak Penting & Tidak Mendesak (Sosmed/TV): Eliminasi.
  Banyak orang terjebak di kuadran 3, merasa produktif padahal hanya sibuk.`,

  'tf4': `Deep Work (Kerja Dalam) adalah kemampuan fokus tanpa distraksi pada tugas kognitif sulit. Ini skill langka bernilai tinggi. Matikan notifikasi HP, tutup tab email. Siapkan blok waktu 90-120 menit.
  
  Di mode ini, Anda menghasilkan kualitas kerja terbaik dalam waktu terpendek. Lawannya adalah Shallow Work (kerja dangkal) seperti membalas email sambil meeting. Shallow work menjaga karir tidak tenggelam, Deep work membuat karir melesat.`,

  'tf5': `Time Blocking memindahkan To-Do List ke Kalender. Tugas tanpa jadwal hanyalah angan-angan. Beri "rumah" untuk setiap tugas. Blok jam 9-11 untuk Laporan, 11-12 untuk Email.
  
  Hukum Parkinson: "Pekerjaan akan melar mengikuti waktu yang tersedia". Dengan membatasi waktu di kalender, Anda memaksa diri bekerja lebih efisien. Jadwalkan juga waktu istirahat dan hiburan agar realistis.`,

  'tf6': `Manajemen Energi lebih penting dari manajemen waktu. Kenali Chronotype Anda: Apakah Anda "Lark" (Burung Pagi) yang tajam di pagi hari, atau "Owl" (Burung Malam)?
  
  Kerjakan tugas terberat (Deep Work) saat energi puncak Anda. Gunakan waktu energi rendah (siang setelah makan) untuk tugas admin ringan. Jangan melawan ritme biologis tubuh Anda. Istirahat yang cukup adalah bagian dari produktivitas.`,

  'tf7': `Digital Detox mengembalikan dopamin otak ke level normal. Notifikasi HP memecah fokus setiap beberapa menit. Cobalah puasa gadget, misal: 1 jam sebelum tidur dan 1 jam setelah bangun.
  
  Hapus aplikasi yang membuang waktu. Matikan semua notifikasi non-kritis (kecuali telpon/chat penting). Otak yang tenang dan tidak terstimulasi berlebihan adalah otak yang kreatif dan tajam.`,

  'tf8': `2-Minute Rule (dari GTD): Jika tugas bisa selesai di bawah 2 menit (balas chat singkat, taruh baju kotor, kirim file), kerjakan SEKARANG juga. Jangan ditunda.
  
  Menunda tugas kecil memakan energi mental (open loops) lebih besar daripada mengerjakannya. Untuk tugas besar, gunakan aturan ini untuk memulai: "Saya akan kerjakan 2 menit saja". Seringkali, hambatannya hanya di memulai.`,

  'tf9': `Task Batching adalah mengelompokkan tugas sejenis. Otak butuh waktu untuk berganti konteks (Switching Cost). Jangan cek email setiap ada notifikasi masuk (reaktif).
  
  Cek email/chat di jam tertentu saja (misal: jam 10 pagi dan 4 sore). Masak untuk 3 hari sekaligus (Meal Prep). Lakukan semua telpon di satu blok waktu. Ini mengurangi kelelahan mental akibat bolak-balik ganti fokus.`,

  'tf10': `Weekly Review adalah ritual sakral produktivitas. Luangkan waktu (Minggu sore/Senin pagi) untuk melihat ke belakang: Apa yang selesai? Apa yang tertunda? Apa hambatan minggu lalu?
  
  Lalu lihat ke depan: Apa 3 prioritas utama minggu ini? Bersihkan inbox, rapikan file. Review membuat Anda bekerja dengan intensi (sengaja), bukan hanya bereaksi terhadap kejadian sehari-hari.`,

  // --- Emotional Intelligence ---
  'eq1': `Self-Awareness (Kesadaran Diri) adalah pondasi EQ. Anda tidak bisa mengelola emosi yang tidak Anda sadari. Latihlah "Emotional Granularity": kemampuan membedakan emosi spesifik.
  
  Jangan cuma bilang "Saya bad mood". Gali lebih dalam: apakah saya marah, kecewa, lelah, atau cemas? Semakin spesifik Anda menamai emosi, semakin mudah otak Anda memproses dan menanganinya ("Name it to tame it").`,

  'eq2': `Triggers adalah tombol panas emosi Anda. Apa yang membuat Anda otomatis marah/takut? Kritik? Diabaikan? Ketidakadilan? Triggers biasanya berakar dari pengalaman masa lalu atau nilai yang dilanggar.
  
  Kenali tanda fisik saat ter-trigger: jantung berdebar, tangan berkeringat, rahang mengeras. Kesadaran ini memberi Anda detik berharga untuk memilih respon, alih-alih meledak secara autopilot.`,

  'eq3': `Self-Regulation bukan menekan emosi, tapi mengelolanya. Antara Pemicu (Stimulus) dan Respon ada Ruang. Di ruang itulah letak kebebasan kita. Jangan langsung bereaksi saat marah.
  
  Gunakan teknik "Jeda": Tarik napas dalam 4 detik, tahan 4 detik, buang 4 detik (Box Breathing). Atau hitung mundur dari 10. Jeda ini mengaktifkan otak rasional (Prefrontal Cortex) dan menenangkan otak emosi (Amygdala) yang sedang membajak sistem.`,

  'eq4': `Motivasi Intrinsik adalah bahan bakar abadi. Motivasi ekstrinsik (uang, pujian) cepat habis. Orang dengan EQ tinggi digerakkan oleh tujuan internal (Passion, Meaning, Growth).
  
  Temukan "Why" Anda. Mengapa Anda melakukan pekerjaan ini? Untuk membantu orang? Untuk belajar? Menghubungkan tugas membosankan dengan tujuan besar hidup Anda akan memberi ketahanan (Resilience) saat menghadapi kesulitan.`,

  'eq5': `Cognitive Empathy adalah kemampuan memahami perspektif orang lain secara intelektual ("Saya mengerti kenapa dia berpikir begitu"). Ini skill negosiasi dan persuasi.
  
  Latih dengan "Perspective Taking": Bayangkan Anda di posisi dia, dengan latar belakang dan tekanannya. Apa yang dia takutkan? Apa yang dia inginkan? Ini mencegah kita menghakimi orang terlalu cepat.`,

  'eq6': `Emotional Empathy adalah ikut merasakan apa yang orang lain rasakan ("Saya ikut sedih mendengarnya"). Ini membangun koneksi manusiawi yang dalam. Tunjukkan dengan bahasa tubuh dan validasi emosi.
  
  Hati-hati dengan "Empathy Distress": ikut tenggelam dalam emosi negatif orang lain sampai Anda sendiri burnout. Tujuannya adalah peduli (compassion), bukan ikut menderita. Jaga batasan emosi yang sehat.`,

  'eq7': `Social Skills adalah puncak penerapan EQ. Ini tentang membangun hubungan, memimpin, dan bekerjasama. Orang dengan social skills tinggi bukan sekadar ramah, tapi "Socially Astute" (cerdas membaca situasi).
  
  Mereka tahu kapan harus bicara, kapan diam, kapan bercanda, kapan serius. Mereka adalah "Mood Manager" dalam tim, bisa mencairkan suasana tegang dan memotivasi orang lain.`,

  'eq8': `Active Listening dalam konteks EQ adalah mendengar apa yang *tidak* diucapkan. Perhatikan nada suara (Tone), ekspresi wajah (Micro-expressions), dan bahasa tubuh.
  
  Seringkali mulut bilang "Saya setuju", tapi nada suara ragu dan tangan bersedekap (defensif). Tanggapi sinyal non-verbal itu: "Sepertinya kamu masih ragu, ada yang ingin dibahas lagi?". Ini level komunikasi tingkat tinggi.`,

  'eq9': `Konflik Manajemen dengan EQ: Fokus pada solusi, bukan ego. Hindari "You-Statement" yang menuduh ("Kamu selalu telat!"). Gunakan "I-Statement" ("Saya cemas kalau laporan telat").
  
  Validasi perasaan lawan dulu sebelum membantah argumennya. "Saya paham kamu kecewa...". Saat orang merasa dimengerti, senjata mereka turun. Cari jalan tengah di mana kedua pihak merasa didengar (walau tidak selalu setuju).`,

  'eq10': `Relationship Building adalah investasi jangka panjang. Networking bukan tentang membagikan kartu nama ke sebanyak mungkin orang, tapi membangun koneksi otentik.
  
  Jadilah orang yang memberi (Giver) sebelum meminta. Bantu orang lain tanpa pamrih. Ingat nama mereka, ingat detail kecil tentang mereka. Kualitas hubungan menentukan kualitas hidup dan karir Anda.`,

  // --- Meta Learning ---
  'll1': `Otak punya dua mode: Focused (Konsentrasi tinggi) dan Diffuse (Rileks/Melamun). Belajar butuh keduanya. Focused mode untuk memasukkan informasi (loading). Diffuse mode untuk menghubungkan informasi (konsolidasi).
  
  Momen "Aha!" sering muncul saat mandi atau jalan santai (Diffuse) setelah sesi belajar keras. Jangan paksa otak fokus terus menerus. Beri jeda istirahat agar otak bawah sadar bekerja merangkai puzzle pemahaman.`,

  'll2': `Active Recall adalah teknik belajar paling efektif menurut sains. Jangan cuma baca ulang (Passive Review). Tutup buku, lalu paksa otak mengingat: "Apa yang baru saya baca?".
  
  Proses "bersusah payah" mengingat inilah yang memperkuat jalur saraf memori. Buat pertanyaan untuk diri sendiri. Jika Anda bisa menjawab tanpa melihat catatan, berarti Anda benar-benar paham, bukan sekadar kenal (illusion of competence).`,

  'll3': `Otak diprogram untuk melupakan. Kurva Lupa (Forgetting Curve) Ebbinghaus menunjukkan kita lupa 50% info dalam 1 jam. Spaced Repetition (Pengulangan Berjarak) adalah antidote-nya.
  
  Review materi di interval tertentu: Hari ke-1, Hari ke-3, Hari ke-7, Hari ke-21. Aplikasi seperti Anki mengatur ini otomatis. Ini menanam informasi dari memori jangka pendek ke jangka panjang (Long Term Memory) dengan efisien.`,

  'll4': `Feynman Technique: "Jika Anda tidak bisa menjelaskannya dengan sederhana, Anda belum memahaminya." Coba jelaskan konsep rumit seolah Anda mengajari anak 5 tahun. Gunakan analogi sederhana.
  
  Saat Anda macet atau bingung menjelaskan, di situlah letak lubang pemahaman Anda. Buka buku lagi, pelajari bagian itu, lalu coba jelaskan lagi. Ini cara terbaik mendeteksi pemahaman palsu.`,

  'll5': `Interleaving adalah mencampur variasi soal atau topik saat latihan. Jangan latihan soal tipe AAA, lalu BBB. Campur: ABC, BCA. Ini lebih sulit dan frustrasi di awal, tapi hasil belajarnya jauh lebih kuat.
  
  Otak dipaksa belajar *membedakan* pola dan memilih strategi penyelesaian yang tepat, bukan sekadar menghafal prosedur secara robotik. Ini mensimulasikan ujian atau dunia nyata yang acak.`,

  'll6': `Pomodoro untuk belajar bukan cuma soal waktu, tapi manajemen atensi. 25 menit adalah durasi optimal untuk mempertahankan fokus intens sebelum neurotransmitter otak lelah.
  
  Lindungi sesi Pomodoro dari gangguan. Jika ada ide lain muncul, catat cepat di kertas ("Distraction List"), lalu kembali fokus. Disiplin interval kerja-istirahat menjaga stamina mental untuk sesi belajar panjang (maraton).`,

  'll7': `Mnemonic (Jembatan Keledai) meng-hack cara otak menyimpan memori visual dan spasial. Otak lebih mudah ingat gambar aneh daripada teks abstrak. Contoh: "MeJikuHibiniu" untuk warna pelangi.
  
  Teknik "Memory Palace" (Loci): bayangkan menaruh item hafalan di lokasi-lokasi familiar di rumah Anda. Semakin absurd imajinasinya, semakin lengket memorinya. Gunakan ini untuk menghafal urutan, daftar, atau pidato.`,

  'll8': `Tidur adalah saat otak "menekan tombol Save". Selama tidur (fase REM), otak membersihkan racun (beta-amyloid) dan memindahkan memori dari hippocampus ke korteks. Begadang untuk belajar (SKS) adalah strategi bodoh.
  
  Kurang tidur menghapus apa yang Anda pelajari hari itu. Tidur 7-8 jam adalah bagian dari jadwal belajar, bukan penghalang. Nap (tidur siang) 20 menit juga bisa me-reset energi otak.`,

  'll9': `Prokrastinasi (menunda) bukan masalah kemalasan, tapi masalah manajemen emosi. Kita menghindari tugas karena itu memicu rasa sakit (takut gagal, bosan, sulit). Otak mencari dopamine cepat (sosmed).
  
  "Eat That Frog": Kerjakan tugas paling sulit/tidak enak di pagi hari saat Willpower masih penuh. Gunakan teknik "Hanya 5 menit": Berjanjilah untuk mengerjakan cuma 5 menit. Seringkali setelah mulai, rasa sakitnya hilang dan momentum mengambil alih.`,

  'll10': `Deliberate Practice (Latihan Sengaja) berbeda dengan latihan biasa. Ini latihan yang tidak nyaman, fokus pada kelemahan spesifik, dan butuh feedback segera. Bukan sekadar mengulang apa yang sudah bisa.
  
  Jika Anda jago main lagu A, jangan main lagu A terus. Mainkan lagu B yang Anda gagal terus. Latihan di tepi batas kemampuan (zona tidak nyaman) adalah tempat pertumbuhan skill terjadi (Neuroplasticity).`,

  // --- Culinary Fundamentals ---
  'cf1': `Mise en Place (Everything in its place) adalah mantra koki profesional. Baca resep sampai habis, cuci, kupas, potong, dan takar semua bahan dalam mangkuk kecil SEBELUM menyalakan kompor.
  
  Ini mencegah panik ("Aduh bawangnya gosong tapi sausnya belum siap!"). Masak jadi tarian yang tenang dan terorganisir, bukan kekacauan. Kebersihan dan keteraturan adalah tanda koki yang baik.`,

  'cf2': `Pisau adalah perpanjangan tangan koki. Pisau tumpul lebih berbahaya dari pisau tajam karena butuh tenaga ekstra dan bisa meleset. Pelajari "Claw Grip": jari tangan kiri mencengkeram bahan seperti cakar kucing, buku jari menjadi panduan pisau.
  
  Ini melindungi ujung jari terpotong. Latih gerakan memotong memutar (rocking motion) atau mencacah. Potongan yang seragam (uniform) membuat masakan matang merata.`,

  'cf3': `Kuasai 4 elemen rasa: Salt (mengangkat rasa), Fat (membawa rasa), Acid (penyeimbang/segar), Heat (matang/tekstur). Jika masakan terasa "kurang", jangan cuma tambah garam.
  
  Mungkin butuh asam (jeruk nipis/cuka) untuk memotong lemak? Atau butuh tekstur (kacang/bawang goreng)? Cicipi terus menerus (Taste as you go). Lidah adalah alat ukur terbaik, resep hanyalah panduan.`,

  'cf4': `Pan Searing memanfaatkan Maillard Reaction: reaksi kimia antara asam amino dan gula saat kena panas tinggi (150°C+), menciptakan kerak kecokelatan yang gurih (browning) pada daging.
  
  Keringkan daging dengan tisu sebelum masuk wajan (air adalah musuh browning). Panaskan wajan sampai berasap sedikit. Jangan terlalu sering membolak-balik daging. Biarkan kerak terbentuk. Itu sumber rasa umami.`,

  'cf5': `Braising (Ungkep) adalah teknik memasak lambat dengan sedikit cairan untuk potongan daging murah yang keras (banyak otot). Waktu dan api kecil memecah kolagen keras menjadi gelatin yang lembut dan gurih.
  
  Tumis daging dulu (Searing), tumis bumbu (Mirepoix), masukkan cairan (kaldu/santan), tutup rapat, masak api kecil berjam-jam. Hasilnya: daging yang lepas dari tulang dan kuah yang kental kaya rasa.`,

  'cf6': `Saus adalah jiwa masakan Prancis. Pelajari "Mother Sauces": Béchamel (susu + roux), Velouté (kaldu + roux), Tomato, Hollandaise, dan Espagnole. Roux adalah pengental dari tepung dan lemak (mentega) yang dimasak.
  
  Menguasai Béchamel membuka pintu ke Mac & Cheese, Lasagna, dan Cream Soup. Saus mengubah bahan sederhana menjadi hidangan mewah. Perhatikan konsistensi (Nappe): saus harus bisa melapisi punggung sendok.`,

  'cf7': `Nasi dan Pasta adalah kanvas karbohidrat. Masak pasta di air yang *sangat* asin ("seperti air laut") agar ada rasa. Tiriskan saat "Al Dente" (masih ada gigitan sedikit), jangan lembek.
  
  Simpan air rebusan pasta (Pasta Water) yang bertepung untuk mengentalkan saus. Untuk nasi, pelajari rasio air yang tepat untuk jenis beras berbeda. Cuci beras sampai air bening untuk nasi pulen terurai, atau jangan cuci bersih untuk nasi lengket (sushi/risotto).`,

  'cf8': `Jangan bunuh sayuran dengan merebusnya sampai layu dan abu-abu. Blanching (rebus cepat lalu rendam air es) menjaga warna hijau cerah dan tekstur renyah (Crisp-tender).
  
  Roasting (panggang) sayuran di oven membuat karamelisasi alami, mengubah wortel/brokoli tawar menjadi manis dan gurih. Bumbui sayuran dengan hormat seperti membumbui daging.`,

  'cf9': `Kita makan dengan mata dulu. Plating (tata hidang) tidak harus rumit. Prinsip dasar: Bersihkan pinggiran piring. Beri ketinggian (tumpuk elemen). Gunakan kontras warna (taburan daun hijau di atas kari merah).
  
  Gunakan piring putih polos agar warna makanan menonjol. Ganjil lebih menarik dari genap (3 udang lebih estetik dari 4). Plating yang rapi menunjukkan penghargaan pada makanan dan orang yang memakannya.`,

  'cf10': `Tingkatan tertinggi adalah memasak tanpa resep (Improv). Pahami pola/formula: Tumis = Lemak + Aromatik + Sayur/Protein + Bumbu. Sup = Kaldu + Isi. Salad = Hijauan + Dressing (Minyak:Asam 3:1).
  
  Lihat isi kulkas, kenali bahan, bayangkan rasa, lalu eksekusi. Jangan takut gagal. Kegagalan di dapur (asal bukan gosong total) biasanya masih bisa dimakan atau diperbaiki. Inilah kemerdekaan kuliner sejati.`,

  // --- Drawing ---
  'dr1': `Menggambar adalah keterampilan fisik sekaligus mental. Latihan garis (Drawabox) melatih "Muscle Memory" agar tangan patuh pada otak. Tarik garis dari bahu, bukan pergelangan tangan, untuk garis yang lurus dan tegas.
  
  Jangan membuat garis "berbulu" (goresan pendek-pendek ragu). Buat satu garis tegas (Ghosting method: ayunkan tangan dulu sebelum pensil menyentuh kertas). Kontrol garis adalah fondasi semua gambar bagus.`,

  'dr2': `Dunia visual yang kompleks tersusun dari bentuk dasar: Kotak, Bola, Silinder, dan Kerucut. Jangan melihat "Pohon", lihatlah "Silinder batang + Bola daun". Jangan lihat "Lengan", lihatlah "Silinder".
  
  Kemampuan mendekonstruksi objek nyata menjadi bentuk primitif 3D adalah "Mata Seniman". Latihlah menggambar bentuk-bentuk ini dalam berbagai sudut putar di ruang 3D (bukan gepeng 2D).`,

  'dr3': `Perspektif 1 Titik Hilang adalah cara kita meniru kedalaman dunia 3D ke kertas 2D. Semua garis yang menjauh dari mata akan bertemu di satu titik di cakrawala (Horizon Line).
  
  Gunakan ini untuk menggambar rel kereta, jalan raya, atau interior ruangan. Memahami garis horizon (tinggi mata) sangat penting: apakah kita melihat objek dari atas (Bird eye) atau dari bawah (Worm eye)?`,

  'dr4': `Perspektif 2 Titik Hilang digunakan saat kita melihat sudut objek (misal: pojok gedung). Garis-garis horizontal akan lari ke titik hilang kiri dan titik hilang kanan. Garis vertikal tetap tegak lurus.
  
  Ini membuat gambar arsitektur atau objek kotak terlihat solid dan realistis. Kesalahan perspektif akan membuat gambar terasa "aneh" atau miring meski shading-nya bagus.`,

  'dr5': `Shading (Arsir) memberi ilusi volume. Cahaya mengungkapkan bentuk. Tentukan arah datang cahaya (Light Source). Bagian yang kena cahaya = Highlight. Bagian membelakangi cahaya = Shadow.
  
  Jangan lupa Cast Shadow (bayangan benda di lantai) dan Reflected Light (cahaya pantul di sisi gelap). Gunakan rentang nilai (Value) lengkap: dari putih kertas, abu-abu, sampai hitam pekat. Kontras value membuat gambar "nimbul" (pop).`,

  'dr6': `Proporsi adalah hubungan ukuran antar bagian. Kesalahan pemula: menggambar kepala terlalu besar atau kaki terlalu pendek. Gunakan teknik "Sighting" (mengukur dengan pensil yang direntangkan) untuk membandingkan rasio.
  
  "Lebar bahu = 3x lebar kepala". "Sikut sejajar pusar". Jangan percaya otak Anda ("Saya tahu bentuk mata"), percayalah pada pengukuran mata ("Mata ini ada di tengah wajah, bukan di dahi"). Gambar apa yang Anda LIHAT, bukan apa yang Anda PIKIRKAN.`,

  'dr7': `Komposisi mengatur elemen dalam kertas. Jangan selalu taruh objek di tengah mati (membosankan). Gunakan Rule of Thirds. Perhatikan Negative Space (ruang kosong di sekitar objek).
  
  Bentuk ruang kosong sama pentingnya dengan bentuk objek itu sendiri. Jika menggambar kursi, perhatikan bentuk lubang di antara kaki kursi. Melihat negative space membantu akurasi proporsi secara drastis (Right Brain Drawing).`,

  'dr8': `Tekstur adalah detail permukaan. Bagaimana membedakan bola besi, bola kayu, dan bola bulu? Besi punya highlight tajam dan kontras tinggi. Kayu punya serat matte. Bulu punya tepian kasar dan lembut.
  
  Anda tidak perlu menggambar setiap helai rambut. Gambar "kesan" teksturnya melalui pola goresan dan kualitas tepi (Edge Quality: Hard edge vs Soft edge).`,

  'dr9': `Wajah manusia punya aturan proporsi universal (Loomis Method). Mata ada di garis tengah kepala (atas-bawah). Jarak antar mata = satu lebar mata. Telinga sejajar dengan alis dan hidung.
  
  Pelajari struktur tengkorak di baliknya. Jangan menggambar fitur wajah (mata, bibir) sebagai stiker yang ditempel di wajah gepeng. Gambar mereka sebagai bentuk 3D yang menempel pada struktur melengkung wajah.`,

  'dr10': `Still Life (Alam Benda) adalah laboratorium menggambar. Susun buah, botol, dan kain di meja dengan lampu belajar. Gambar langsung dari aslinya (bukan dari foto).
  
  Ini melatih semua skill sekaligus: Komposisi, Proporsi, Perspektif, dan Shading. Objek diam tidak bergerak, memberi Anda waktu untuk mengamati dan mengoreksi kesalahan. Ini adalah latihan klasik para master seni rupa.`,

  // --- Meditation ---
  'med1': `Meditasi bukan mengosongkan pikiran (itu mustahil), tapi melatih fokus. Objek fokus termudah adalah Napas. Rasakan sensasi udara masuk di hidung atau perut yang naik turun.
  
  Saat pikiran melayang (dan pasti akan melayang), itu BUKAN kegagalan. Momen Anda *sadar* bahwa pikiran melayang, itulah kesuksesan meditasi (Mindfulness). Lembut kembalikan fokus ke napas. Ulangi. Ini adalah "bicep curl" untuk otak.`,

  'med2': `Body Scan menghubungkan pikiran dan tubuh. Kita sering hidup di kepala dan mengabaikan sinyal tubuh (tegang, pegal). Pindai tubuh dari ujung kaki ke kepala secara perlahan.
  
  Rasakan sensasinya: hangat, dingin, geli, berat? Jangan diubah, cukup disadari (Notice). Ini melatih Interoception (kesadaran internal) dan sangat efektif untuk relaksasi fisik sebelum tidur.`,

  'med3': `Teknik Noteing (Mencatat) membantu kita tidak hanyut dalam pikiran. Saat gangguan datang, beri label mental: "Berpikir", "Mengingat", "Merencanakan", atau "Khawatir".
  
  Dengan melabeli, kita menciptakan jarak (Detachment). Kita menjadi Pengamat pikiran, bukan Pemikir. "Oh, ada perasaan cemas lewat", bukan "Saya cemas". Ini mengurangi dampak emosional dari pikiran negatif.`,

  'med4': `Meditasi tidak harus duduk diam. Walking Meditation (Meditasi Jalan) membawa kesadaran ke gerakan. Fokus pada sensasi telapak kaki menyentuh tanah, perpindahan berat badan, dan angin di kulit.
  
  Jangan jalan autopilot sambil melamun. Hadir penuh di setiap langkah. Ini jembatan bagus untuk membawa mindfulness ke aktivitas sehari-hari yang sibuk.`,

  'med5': `Loving Kindness (Metta) adalah latihan hati. Kita mengirim harapan baik secara mental: "Semoga saya bahagia, semoga saya sehat". Lalu perluas ke orang tersayang, orang netral, bahkan orang yang sulit/kita benci.
  
  Ini bukan tentang agama, tapi neurosains. Metta terbukti meningkatkan emosi positif dan mengurangi kritik diri (self-criticism). Ini obat penawar rasa benci dan dendam.`,

  'med6': `Mindful Eating mengubah hubungan dengan makanan. Matikan TV/HP. Lihat warna makanan, cium aromanya. Kunyah perlahan dan rasakan tekstur serta ledakan rasanya.
  
  Kita sering makan autopilot sampai piring kosong tanpa sadar rasanya. Makan sadar membuat kita lebih cepat kenyang (sadar sinyal perut) dan lebih menikmati makanan, sangat baik untuk diet dan pencernaan.`,

  'med7': `Teknik Grounding 5-4-3-2-1 adalah P3K saat serangan panik atau cemas berlebih. Cari 5 benda yang bisa DILIHAT, 4 yang bisa DISENTUH, 3 yang bisa DIDENGAR, 2 yang bisa DICIUM, 1 yang bisa DIRASA (lidah).
  
  Ini memaksa otak keluar dari spiral pikiran masa depan ("Gimana kalau...") dan kembali ke realitas fisik masa kini ("Sekarang saya aman duduk di kursi").`,

  'med8': `Visualisasi memanfaatkan kekuatan imajinasi otak. Otak tidak bisa membedakan imajinasi vivid dan realitas (itu sebabnya mimpi buruk bikin jantung berdebar). Bayangkan "Tempat Aman" yang detail: suara ombak, pasir hangat.
  
  Atau visualisasikan diri Anda berhasil melakukan presentasi dengan tenang. Ini membangun jalur saraf kepercayaan diri sebelum kejadian nyata terjadi (Mental Rehearsal).`,

  'med9': `Meditasi di bantal hanyalah latihan; pertandingan sesungguhnya adalah hidup sehari-hari. Integrasikan mindfulness ke rutinitas: "Mencuci piring sadar penuh" (rasakan air, sabun, licin piring).
  
  Jadikan aktivitas rutin (sikat gigi, mandi, nyetir) sebagai "Bell of Mindfulness" untuk kembali hadir ke masa kini. Ubah rutinitas membosankan menjadi momen istirahat mental.`,

  'med10': `Silent Retreat (Mini) adalah detoks dopamin pamungkas. Otak kita selalu dibombardir input. Diam total (tanpa bicara, tanpa gadget, tanpa baca) selama 1 jam - 1 hari memberi otak kesempatan istirahat dalam (Deep Rest).
  
  Awalnya akan gelisah dan bosan, tapi setelah itu muncul ketenangan dan kreativitas. Ide-ide terbaik sering muncul di keheningan. Belajarlah nyaman sendirian dengan pikiran Anda sendiri.`,

  // --- Gardening ---
  'gr1': `Berkebun dimulai bukan dari biji, tapi dari Matahari. Tanaman makan cahaya. Sayuran buah (tomat, cabai) butuh 6-8 jam matahari langsung (Full Sun). Sayuran daun (sawi, selada) bisa 3-4 jam (Partial Shade).
  
  Amati balkon/halaman Anda: jam berapa kena sinar? Jangan paksa tanam tomat di tempat teduh, pasti gagal. Pilih tanaman yang sesuai dengan kondisi cahaya rumah Anda ("Right plant, right place").`,

  'gr2': `Tanah di pot beda dengan tanah di kebun. Pot butuh media tanam yang Poros (gembur/air cepat turun) agar akar tidak busuk. Rumus klasik: 1 Tanah : 1 Kompos : 1 Sekam Bakar/Cocopeat.
  
  Tanah memberi pondasi, Kompos memberi nutrisi, Sekam memberi rongga udara (aerasi) untuk akar bernapas. Jangan pakai tanah liat padat murni di pot, akar akan tercekik dan mati.`,

  'gr3': `Menyemai biji butuh kelembutan. Biji kecil (selada) cukup ditabur di atas, biji besar (kangkung) ditanam sedalam 2x ukuran biji. Jaga kelembaban konstan (spray halus), jangan becek, jangan kering.
  
  Gunakan tempat gelap dulu (peram) sampai pecah benih (sprout), lalu LANGSUNG kenalkan matahari pagi agar batang tidak kutilang (kurus tinggi langsing) karena mencari cahaya. Kutilang adalah penyebab utama kegagalan bibit pemula.`,

  'gr4': `Menyiram adalah penyebab kematian #1: Overwatering (kebanyakan air). Akar butuh air DAN udara. Jika tanah becek terus, akar busuk. Cek dulu: tusuk jari 2cm ke tanah. Kalau masih lembab, JANGAN siram.
  
  Siram sampai air keluar dari lubang bawah pot (jenuh). Siram di pagi hari agar daun kering saat malam (mencegah jamur). Layu di siang hari itu wajar (penguapan), cek lagi sorenya sebelum siram.`,

  'gr5': `Container Gardening bisa pakai apa saja: ember bekas, botol, kaleng. Syarat mutlak: LUBANG DRAINASE di bawah. Tanpa lubang, jadi kolam, tanaman mati.
  
  Sesuaikan ukuran pot dengan tanaman. Sayur daun (bayam) bisa di pot dangkal (15cm). Sayur buah (tomat/terong) butuh pot dalam (30cm+) untuk akar yang luas. Pot hitam menyerap panas, pot tanah liat (terakota) adem dan berpori tapi cepat kering.`,

  'gr6': `Tanaman di pot terbatas makanannya, jadi wajib dipupuk. Pupuk Organik Cair (POC) dari air cucian beras atau kulit buah adalah emas cair. Kompos padat memberi nutrisi lambat (Slow Release).
  
  Unsur N (Nitrogen) untuk Daun (fase awal). P (Fosfor) dan K (Kalium) untuk Bunga/Buah. Berikan sedikit tapi sering (misal seminggu sekali) lebih baik daripada banyak tapi jarang (bisa overdosis/bakar akar).`,

  'gr7': `Hama adalah bagian dari alam. Jangan panik. Kutu putih (mealybug), kutu daun (aphid), dan ulat adalah musuh umum. Cek balik daun setiap pagi. Penanganan awal: pencet manual atau semprot air kencang.
  
  Pestisida Nabati: Campuran air + sabun cuci piring sedikit + minyak goreng (untuk kutu) atau rendaman bawang putih/cabai (untuk ulat). Semprot sore hari. Jaga kebersihan kebun (sanitasi) untuk mencegah hama bersarang.`,

  'gr8': `Pruning (pemangkasan) menyakitkan tapi perlu. Potong daun tua/kuning di bawah agar nutrisi fokus ke pucuk baru. Untuk tanaman buah, pangkas tunas air (tunas yang tumbuh di ketiak daun) agar energi fokus ke pembuahan.
  
  Untuk herbal (kemangi/mint), pangkas pucuk (Topping) agar tanaman bercabang banyak dan rimbun, tidak tinggi kurus. Jangan biarkan herbal berbunga jika ingin panen daunnya, karena rasa akan jadi pahit.`,

  'gr9': `Kitchen Herbs adalah pintu gerbang termudah. Daun bawang, Seledri, Mint, Kemangi. Beli di pasar, pakai daunnya, tancapkan batangnya ke tanah (Regrow).
  
  Mereka tahan banting, panen cepat, dan langsung berguna di dapur. Sukses menumbuhkan daun bawang sisa dapur memberi dorongan kepercayaan diri besar untuk mencoba sayuran yang lebih sulit.`,

  'gr10': `Panen adalah momen terbaik. Panen sayur daun (selada/sawi) pagi-pagi sekali saat masih segar dan renyah (turgor tinggi). Bisa panen "Cut and Come Again": potong daun luarnya saja, biarkan pusatnya tumbuh lagi.
  
  Jangan tunggu terlalu tua. Terong/timun tua rasanya pahit dan bijinya keras. Panen saat muda justru memacu tanaman berbunga lagi. Nikmati hasil keringat sendiri, rasanya pasti lebih manis dari beli di pasar.`,

  // --- Critical Thinking ---
  'ct1': `Fakta adalah realitas objektif yang bisa diverifikasi (Bumi bulat). Opini adalah interpretasi atau perasaan subjektif (Bumi itu indah). Masalah timbul saat opini disamarkan jadi fakta.
  
  Selalu tanya "Sumbernya mana?" dan "Apakah ini data atau asumsi?". Cek kredibilitas sumber. Cross-check dengan sumber lain. Di era post-truth, kemampuan membedakan ini adalah pertahanan diri mental.`,

  'ct2': `Bias Kognitif adalah "bug" dalam software otak kita. Confirmation Bias: kita hanya mencari info yang mendukung keyakinan kita dan menolak yang beda. Sunk Cost Fallacy: meneruskan hal merugikan karena "sudah terlanjur basah".
  
  Kita tidak bisa menghilangkan bias 100%, tapi kita bisa menyadarinya. Saat Anda merasa sangat yakin atau emosional tentang suatu info, berhenti sejenak. Tanyakan: "Apakah saya bias? Apa argumen sisi seberang?".`,

  'ct3': `Logical Fallacies adalah kesesatan berpikir dalam argumen. Ad Hominem: menyerang orangnya, bukan argumennya ("Ah kamu kan anak kecil tahu apa"). Strawman: memelintir argumen lawan jadi konyol lalu menyerangnya.
  
  Appeal to Authority: "Kata pakar X benar, jadi pasti benar" (tanpa bukti). Mengenali fallacy membuat Anda kebal terhadap manipulasi politisi, iklan, dan debat kusir di internet.`,

  'ct4': `Socratic Questioning adalah metode Socrates mencari kebenaran dengan bertanya terus menerus. Jangan terima pernyataan mentah-mentah.
  
  Tanya klarifikasi: "Apa maksudmu dengan X?". Tanya asumsi: "Apa yang kamu anggap benar di sini?". Tanya bukti: "Apa datanya?". Tanya implikasi: "Kalau itu benar, apa dampaknya?". Ini memaksa orang berpikir dalam dan membuka kecacatan logika.`,

  'ct5': `First Principles Thinking (berpikir dari dasar) dipopulerkan Elon Musk. Jangan berpikir dengan analogi ("Kita buat begini karena orang lain begitu"). Bongkar masalah sampai ke kebenaran fundamentalnya.
  
  Contoh: "Baterai mahal". Analogi: "Ya memang dari dulu mahal". First Principles: "Baterai terbuat dari nikel, kobalt, litium. Harga material ini di pasar komoditas murah. Jadi kita bisa buat baterai murah kalau cara rakitnya pintar". Ini sumber inovasi radikal.`,

  'ct6': `Data Literacy: Jangan mudah tertipu grafik. Grafik bisa dimanipulasi dengan memotong sumbu Y (agar kenaikan terlihat drastis) atau Cherry Picking (memilih data tahun tertentu saja yang bagus).
  
  Korelasi bukan Kausalitas. "Penjualan es krim naik saat serangan hiu naik". Bukan berarti es krim menyebabkan serangan hiu, tapi karena keduanya terjadi di musim panas. Selalu kritis melihat angka statistik.`,

  'ct7': `Steelmanning adalah lawan dari Strawman. Alih-alih menyerang versi lemah argumen lawan, cobalah perbaiki dan perkuat argumen lawan sampai versi terbaiknya, BARU kemudian Anda bantah.
  
  "Jika saya paham maksudmu dengan benar, argumen terkuatmu adalah X, Y, Z. Benar? Oke, sekarang saya akan bantah X." Ini menunjukkan integritas intelektual tinggi dan membuat debat jadi produktif, bukan ajang menang-menangan.`,

  'ct8': `Occam's Razor: "Jika ada dua penjelasan, yang lebih sederhana biasanya yang benar". Jangan mencari konspirasi rumit jika penjelasan sederhana (kebodohan, kebetulan, kesalahan) sudah cukup menjelaskan.
  
  Pisau Occam memangkas asumsi yang tidak perlu. Ini alat bantu mental untuk tidak terjebak dalam teori konspirasi yang over-thinking dan tidak berdasar.`,

  'ct9': `Root Cause Analysis (RCA) mencari akar masalah, bukan menambal gejala. Metode "Fishbone Diagram" (Tulang Ikan) memetakan faktor Manusia, Metode, Mesin, Material, Lingkungan.
  
  Masalah: "Mobil mogok". Gejala: "Mesin mati". Akar: "Tidak diservis". Akar lebih dalam: "Tidak punya uang". Akar terdalam: "Manajemen keuangan buruk". Solusi gejala: Dorong mobil. Solusi akar: Belajar budgeting.`,

  'ct10': `Decision Matrix membantu mengambil keputusan objektif saat bingung. List opsinya (HP A vs HP B). Tentukan kriteria (Harga, Kamera, Baterai). Beri bobot tiap kriteria (Harga x5, Kamera x3).
  
  Beri skor tiap opsi. Kalikan dengan bobot. Jumlahkan totalnya. Angka matematika akan membantu Anda melihat pilihan terbaik secara rasional, mengurangi bias emosional dan penyesalan di kemudian hari.`,

  // --- Problem Solving ---
  'ps1': `Definisikan masalah dengan tepat. Albert Einstein berkata: "Jika saya punya 1 jam untuk menyelamatkan dunia, 55 menit saya gunakan untuk mendefinisikan masalah, 5 menit untuk mencari solusi."
  
  Masalah yang didefinisikan dengan baik sudah setengah terpecahkan. Jangan bilang "Penjualan turun". Bilang "Penjualan produk A turun 20% di wilayah B pada kuartal 3 karena kompetitor C menurunkan harga". Spesifik.`,

  'ps2': `5 Whys (Lima Mengapa) adalah teknik Toyota untuk menggali akar masalah. Masalah: "Lantai pabrik licin".
  1. Kenapa? "Ada oli bocor".
  2. Kenapa? "Mesin bocor".
  3. Kenapa? "Gasket rusak".
  4. Kenapa? "Gasket murah".
  5. Kenapa? "Kebijakan pengadaan cari termurah".
  Solusi: Ubah kebijakan pengadaan (bukan sekadar pel lantai).`,

  'ps3': `Sama dengan Critical Thinking, First Principles di sini digunakan untuk memecahkan masalah tanpa terikat "cara lama". Jangan terima "tidak bisa" atau "memang begitu caranya".
  
  Urai masalah menjadi komponen dasar fisika/ekonomi. Bangun solusi baru dari komponen tersebut. Ini cara memecahkan masalah yang dianggap "buntu" oleh orang lain yang berpikir konvensional.`,

  'ps4': `Brainstorming punya aturan: Kuantitas > Kualitas. Tunda penghakiman. Ide gila diterima. Jika Anda mengkritik ide di awal, kreativitas akan macet.
  
  Tujuannya adalah mengumpulkan opsi sebanyak-banyaknya (Divergent Thinking). Nanti baru dipilih dan dipertajam (Convergent Thinking). Ajak orang dengan latar belakang berbeda untuk perspektif segar.`,

  'ps5': `Prinsip Pareto (80/20): 80% masalah disebabkan oleh 20% penyebab utama. Jangan mencoba memperbaiki semuanya sekaligus. Identifikasi "Vital Few" (sedikit tapi vital).
  
  Jika Anda punya 10 keluhan pelanggan, mungkin 8 di antaranya soal "Pengiriman Lambat". Fokus perbaiki pengiriman, Anda menyelesaikan 80% masalah kepuasan pelanggan dengan satu tindakan. Efisiensi maksimal.`,

  'ps6': `Decision Matrix (Matrix Keputusan) adalah alat untuk memilih solusi terbaik dari hasil brainstorming. Buat tabel. Baris = Opsi Solusi. Kolom = Kriteria (Biaya, Dampak, Kemudahan).
  
  Beri skor 1-5. Solusi dengan skor tertinggi secara objektif adalah pemenangnya. Ini menghindari debat kusir berdasarkan perasaan atau siapa yang suaranya paling keras di rapat.`,

  'ps7': `Risk Assessment (Manajemen Risiko) bertanya: "Apa yang mungkin salah dengan solusi ini?". Identifikasi potensi kegagalan SEBELUM dijalankan (Pre-mortem).
  
  Siapkan rencana mitigasi (Plan B). Jika solusi A gagal, kita lakukan B. Orang yang problem solving-nya matang selalu punya backup plan dan tidak kaget saat rencana tidak berjalan mulus.`,

  'ps8': `Feedback Loop: Solusi bukanlah titik akhir, tapi eksperimen. Jalankan solusi -> Ukur hasilnya -> Pelajari datanya -> Iterasi (Perbaiki).
  
  Jangan egois mempertahankan solusi yang terbukti gagal. Cepat gagal (Fail Fast), cepat belajar. Siklus OODA Loop (Observe, Orient, Decide, Act) membuat Anda adaptif terhadap situasi yang berubah saat memecahkan masalah.`,

  'ps9': `Design Thinking menaruh Manusia (User) di pusat solusi. Tahap 1: Empathize (Pahami user). Tahap 2: Define. Tahap 3: Ideate. Tahap 4: Prototype. Tahap 5: Test.
  
  Jangan jatuh cinta pada solusi Anda, jatuh cintalah pada masalah user. Solusi tercanggih tidak berguna jika tidak memecahkan masalah user atau user tidak bisa memakainya.`,

  'ps10': `Mental Models adalah kotak peralatan berpikir. Inversion: "Bagaimana cara membuat proyek ini PASTI gagal?" (hindari hal itu). Second Order Thinking: "Apa dampak dari dampak keputusan ini?" (jangka panjang).
  
  Map is not Territory: Model hanyalah penyederhanaan, realitas lebih kompleks. Memiliki banyak mental model membuat Anda punya banyak sudut pandang (lensa) untuk melihat satu masalah, menghasilkan solusi yang lebih bijak.`,

  // --- Bodyweight Fitness ---
  'bwf1': `Mobility (Mobilitas) bukan sekadar stretching. Ini kemampuan sendi bergerak aktif dalam jangkauan gerak penuh (Range of Motion). Pemanasan dinamis (putar lengan, leg swings) wajib untuk melumasi sendi dengan cairan sinovial.
  
  Mobilitas pergelangan tangan dan bahu sangat krusial di calisthenics karena mereka menumpu berat badan. Jangan skip ini jika ingin olahraga jangka panjang tanpa cedera. Sendi sehat = Kekuatan maksimal.`,

  'bwf2': `Push-up yang benar bukan soal jumlah, tapi bentuk (Form). Tubuh harus lurus seperti papan (Plank), bokong jangan naik/turun. Siku masuk 45 derajat (jangan lebar 90 derajat ke samping, bahaya bahu).
  
  Turun sampai dada hampir sentuh lantai, dorong sampai tangan lurus (protraction). Kualitas > Kuantitas. 5 pushup sempurna lebih membangun otot daripada 20 pushup setengah-setengah.`,

  'bwf3': `Hollow Body Hold adalah posisi dasar senam (gymnastics). Berbaring telentang, tekan punggung bawah ke lantai (jangan ada celah!), angkat kaki dan bahu sedikit. Tubuh membentuk "pisang".
  
  Ini mengunci Core (inti tubuh) menjadi satu unit solid. Tanpa Hollow Body yang kuat, tenaga akan bocor saat melakukan gerakan lanjut seperti Pull-up, Planche, atau Front Lever. Ini fondasi kekuatan statis.`,

  'bwf4': `Bodyweight Rows (Australian Pull-up) melatih punggung dan bisep, penyeimbang gerakan push-up. Cari bar rendah (setinggi pinggang). Gantung di bawahnya, badan lurus, tarik dada ke bar.
  
  Fokus menarik dengan sikut, jepit belikat di puncak gerakan (retraction). Semakin horizontal tubuh Anda, semakin berat bebannya. Ini langkah wajib sebelum bisa melakukan Pull-up gantung.`,

  'bwf5': `Dips adalah raja latihan dorong tubuh bagian atas (Dada & Tricep). Gunakan dua kursi kokoh atau parallel bar. Turun sampai bahu di bawah sikut (90 derajat), dorong sampai lurus dan kunci.
  
  Jaga bahu tetap ditekan ke bawah (depress), jangan naik ke telinga. Dips membangun kekuatan pressing yang masif yang dibutuhkan untuk skill tingkat lanjut seperti Muscle-up.`,

  'bwf6': `Negative Pull-up adalah cara tercepat meraih Pull-up pertama. Lompat ke posisi atas pull-up (dagu di atas bar), lalu tahan dan turun se-lam-bat mungkin (3-5 detik) sampai tangan lurus.
  
  Ini melatih otot di fase eksentrik (memanjang) yang lebih kuat daripada fase konsentrik. Lakukan ini rutin, dan sistem saraf Anda akan belajar pola gerakan pull-up dengan cepat.`,

  'bwf7': `The First Pull-up! Momen sakral. Mulai dari posisi gantung mati (Dead hang). Tarik bahu ke bawah dulu (Scapular Pull), lalu tarik dengan sikut sampai dagu lewat bar. Jangan mengayun kaki (Kipping).
  
  Pull-up melatih Latissimus Dorsi (sayap) untuk bentuk tubuh V-shape. Ini adalah tes kekuatan relatif tubuh bagian atas terbaik. Satu repetisi bersih lebih berharga dari 10 repetisi ayun.`,

  'bwf8': `Squats: Jangan lupakan kaki ("Chicken legs"). Bodyweight squat melatih paha dan bokong. Kaki selebar bahu, turun seperti mau duduk, lutut dorong keluar (searah jari kaki), punggung tegak.
  
  Turun sampai paha paralel lantai atau lebih (Ass to Grass). Jika terlalu mudah, progres ke Lunges, Bulgarian Split Squat, dan akhirnya Pistol Squat (satu kaki). Kaki adalah fondasi tubuh.`,

  'bwf9': `AMRAP (As Many Reps/Rounds As Possible) dalam waktu tertentu (misal 15 menit) melatih kapasitas kerja dan stamina kardio. Gabungkan gerakan: 5 Pullup + 10 Pushup + 15 Squat. Ulangi terus tanpa henti.
  
  Ini meningkatkan detak jantung, membakar lemak, dan melatih ketahanan otot (Muscular Endurance). Mental Anda diuji saat lelah. Tetap jaga form walau capek.`,

  'bwf10': `L-Sit adalah latihan isometrik (tahan diam) yang brutal untuk Core dan Hip Flexors. Tumpu tangan di lantai/bar, angkat badan, luruskan kaki ke depan membentuk huruf "L".
  
  Jika sulit, mulai dengan Tuck L-Sit (lutut ditekuk ke dada). L-Sit membangun perut baja dan bahu yang stabil. Ini gerbang menuju skill calisthenics tingkat dewa lainnya.`,
};

// Gradient Helper
const getCategoryGradient = (category: Category) => {
  switch (category) {
    case Category.TECH: return 'from-blue-600 via-indigo-600 to-violet-600';
    case Category.BUSINESS: return 'from-emerald-600 via-teal-600 to-cyan-600';
    case Category.CREATIVE: return 'from-fuchsia-600 via-pink-600 to-rose-600';
    case Category.LIFE: return 'from-amber-500 via-orange-500 to-red-500';
    case Category.HOBBY: return 'from-lime-500 via-green-600 to-emerald-600';
    case Category.UNIVERSAL: return 'from-sky-600 via-blue-600 to-indigo-600';
    default: return 'from-slate-500 to-gray-600';
  }
};

interface RoadmapViewProps {
  skill: Skill;
  progress: UserProgress;
  onToggleStep: (skillId: string, stepId: string) => void;
  onBack: () => void;
}

export const RoadmapView: React.FC<RoadmapViewProps> = ({ skill, progress, onToggleStep, onBack }) => {
  const completedSteps = progress[skill.id] || [];
  const totalSteps = skill.steps.length;
  const percentComplete = totalSteps > 0 ? Math.min(100, Math.round((completedSteps.length / totalSteps) * 100)) : 0;
  const isFullyComplete = percentComplete === 100;

  // Constants for Radial Progress
  const RADIUS = 50;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
  const OFFSET = CIRCUMFERENCE * (1 - percentComplete / 100);
  const gradientClass = getCategoryGradient(skill.category);

  return (
    <div className="pb-20">
      {/* Header Navigation */}
      <button 
        onClick={onBack}
        className="group mb-8 flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-emerald-400 transition-colors px-1 py-2"
      >
        <div className="p-1 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/50 transition-colors">
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
        </div>
        Kembali
      </button>

      {/* Hero Section with Logo */}
      <div className={`relative rounded-3xl overflow-hidden mb-12 border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0f172a] animate-fade-up shadow-2xl shadow-emerald-900/5 group`}>
        {/* Background Overlay with Gradient Border Effect */}
        <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${gradientClass}`}></div>
        
        <div className="relative z-10 p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center gap-8">
           {/* Logo Section */}
           <div className="shrink-0">
              <div className={`w-24 h-24 sm:w-32 sm:h-32 rounded-2xl flex items-center justify-center bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 shadow-sm`}>
                 <SkillLogo id={skill.id} className="w-16 h-16 sm:w-20 sm:h-20" colorClass="text-slate-900 dark:text-white" />
              </div>
           </div>

           <div className="flex-1 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 uppercase tracking-widest shadow-sm">{skill.category}</span>
                <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 uppercase tracking-widest">{skill.difficulty}</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white leading-tight tracking-tight drop-shadow-sm">{skill.title}</h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl font-medium">
                {skill.purpose}
              </p>
              
              <div className="flex gap-8 pt-2">
                 <div>
                    <span className="block text-[10px] font-bold uppercase text-slate-400 dark:text-slate-500 mb-1 tracking-wider">Durasi</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200 text-sm flex items-center gap-2">
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        {skill.duration}
                    </span>
                 </div>
                 <div>
                    <span className="block text-[10px] font-bold uppercase text-slate-400 dark:text-slate-500 mb-1 tracking-wider">Output</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200 text-sm max-w-xs block truncate flex items-center gap-2">
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        {skill.outcome}
                    </span>
                 </div>
              </div>
           </div>

           {/* Progress Circle */}
           <div className="hidden md:flex flex-col items-center justify-center shrink-0 pr-6">
              <div className="w-36 h-36 flex items-center justify-center relative hover:scale-105 transition-transform duration-500">
                  {/* Glowing background behind circle */}
                  <div className={`absolute inset-0 bg-emerald-500/10 blur-2xl rounded-full transition-all duration-1000 ${isFullyComplete ? 'scale-125 bg-emerald-500/20' : ''}`}></div>
                  
                  <svg className="w-full h-full absolute -rotate-90 drop-shadow-lg" viewBox="0 0 128 128">
                    <circle cx="64" cy="64" r={RADIUS} fill="transparent" stroke="currentColor" strokeWidth="8" className="text-slate-100 dark:text-slate-800" />
                    <circle cx="64" cy="64" r={RADIUS} fill="transparent" stroke="currentColor" strokeWidth="8" strokeDasharray={CIRCUMFERENCE} strokeDashoffset={OFFSET} strokeLinecap="round" className="text-emerald-500 transition-all duration-1000 ease-out drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                  </svg>
                  <div className="flex flex-col items-center justify-center relative z-10">
                    <span className="text-3xl font-black text-slate-900 dark:text-white">{percentComplete}%</span>
                    <span className="text-[10px] font-bold uppercase text-slate-400 dark:text-slate-500 mt-1 tracking-widest">Selesai</span>
                  </div>
              </div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Path */}
        <div className="lg:col-span-2">
            {/* Completion Celebration Banner */}
            {isFullyComplete && (
                <div className={`bg-gradient-to-r ${gradientClass} text-white p-6 sm:p-8 rounded-2xl mb-8 animate-fade-up shadow-xl flex items-center gap-6 relative overflow-hidden ring-1 ring-white/20`}>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                    <div className="text-5xl animate-bounce drop-shadow-md">🏆</div>
                    <div className="relative z-10">
                        <h3 className="font-bold text-2xl mb-1 drop-shadow-sm">Luar Biasa!</h3>
                        <p className="text-white/90 text-sm sm:text-base font-medium opacity-90 leading-relaxed">
                            Kamu telah menyelesaikan semua langkah di roadmap ini. <br/>
                            Jangan berhenti di sini, praktikan skill barumu!
                        </p>
                    </div>
                </div>
            )}

            <h3 className="text-xl font-bold text-slate-900 dark:text-emerald-50 mb-8 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
              </span>
              Checklist Kurikulum
            </h3>

            <div className="space-y-6">
                {skill.steps.map((step, idx) => {
                const isCompleted = completedSteps.includes(step.id);
                // Stagger step animations
                const delay = `${(idx + 1) * 100}ms`;
                // Use detailed description if available, otherwise fallback to short description
                const descriptionText = DETAILED_DESCRIPTIONS[step.id] || step.description;
                
                return (
                    <div 
                        key={step.id} 
                        className={`group relative flex gap-4 animate-fade-up`}
                        style={{ animationDelay: delay }}
                    >
                        {/* Connecting Line */}
                        {idx !== skill.steps.length - 1 && (
                            <div className={`absolute left-[19px] top-10 bottom-[-24px] w-0.5 -z-10 transition-colors duration-500 ${isCompleted ? 'bg-emerald-300 dark:bg-emerald-800' : 'bg-slate-200 dark:bg-slate-800 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900'}`}></div>
                        )}

                        {/* Checkbox Marker Button */}
                        <button 
                            onClick={() => onToggleStep(skill.id, step.id)}
                            className={`w-10 h-10 shrink-0 rounded-xl border-2 flex items-center justify-center transition-all duration-300 btn-press z-10 shadow-sm outline-none focus:ring-4 focus:ring-emerald-500/20 relative overflow-visible mt-1
                            ${isCompleted 
                                ? 'bg-emerald-500 border-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] animate-success-pop' 
                                : 'bg-white dark:bg-[#0b1120] border-slate-300 dark:border-slate-700 text-slate-400 hover:border-emerald-500 dark:hover:border-emerald-500 hover:text-emerald-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]'}`}
                            aria-label={isCompleted ? "Mark as incomplete" : "Mark as complete"}
                            title={isCompleted ? "Mark as incomplete" : "Mark as complete"}
                        >
                            {isCompleted ? (
                                <>
                                    {/* Particle Burst / Ripple Effect */}
                                    <span className="absolute inset-0 rounded-xl bg-emerald-400 opacity-75 animate-ping-once pointer-events-none"></span>
                                    {/* Icon */}
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                </>
                            ) : (
                                <span className="font-bold text-sm">{idx + 1}</span>
                            )}
                        </button>

                        {/* Content Card */}
                        <div className={`flex-1 bg-white dark:bg-[#0b1120] p-6 sm:p-7 rounded-2xl border transition-all duration-300 hover-lift relative overflow-hidden flex flex-col
                            ${isCompleted 
                            ? 'border-emerald-500/30 dark:border-emerald-500/30 shadow-[0_0_30px_-10px_rgba(16,185,129,0.15)] opacity-100' 
                            : 'border-slate-200 dark:border-slate-800'}`}>
                            
                            {/* Glow Effect for Completed Card */}
                            {isCompleted && (
                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[40px] -mr-16 -mt-16 pointer-events-none"></div>
                            )}

                            <div className="flex flex-col sm:flex-row justify-between mb-4 gap-2 relative z-10">
                                <h4 className={`text-xl font-bold transition-colors ${isCompleted ? 'text-emerald-700 dark:text-emerald-400 decoration-emerald-500/30' : 'text-slate-900 dark:text-slate-100'}`}>
                                    {step.title}
                                </h4>
                                <span className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-lg self-start border tracking-wide ${isCompleted ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-800' : 'text-slate-500 dark:text-slate-500 bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-slate-800'}`}>
                                    {step.estimatedTime}
                                </span>
                            </div>

                            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-7 whitespace-pre-line relative z-10 tracking-wide font-normal opacity-90">
                                {descriptionText}
                            </p>

                            <div className="space-y-4 relative z-10 flex-1">
                                <div className="flex flex-wrap gap-2">
                                    {step.resources.map((res, rIdx) => (
                                    <a 
                                        key={rIdx} 
                                        href={res.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-white dark:bg-[#0f172a] text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-all btn-press border border-slate-200 dark:border-slate-700 hover:border-emerald-200 dark:hover:border-emerald-800 shadow-sm"
                                    >
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                                        {res.type}
                                    </a>
                                    ))}
                                </div>
                                
                                <div className={`p-4 rounded-xl border flex gap-4 items-start transition-colors ${isCompleted ? 'bg-emerald-50/30 dark:bg-emerald-900/10 border-emerald-100 dark:border-emerald-900/20' : 'bg-slate-50 dark:bg-[#0f172a] border-slate-100 dark:border-slate-800'}`}>
                                    <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm shrink-0 text-lg border border-slate-100 dark:border-slate-700">
                                        🎯
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold uppercase text-slate-400 dark:text-slate-500 block mb-1 tracking-wider">Tantangan Praktik</span>
                                        <p className="text-sm text-slate-700 dark:text-slate-300 font-medium leading-snug">{step.challenge}</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Explicit Mark as Complete Button */}
                            <button
                                onClick={() => onToggleStep(skill.id, step.id)}
                                className={`w-full mt-6 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 btn-press border-2 relative z-10 overflow-hidden
                                ${isCompleted 
                                    ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 shadow-[0_0_15px_rgba(16,185,129,0.1)]' 
                                    : 'bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-emerald-500 hover:text-emerald-500 dark:hover:border-emerald-500 dark:hover:text-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.1)]'}`}
                            >
                                {isCompleted ? (
                                    <div className="flex items-center gap-2 animate-success-pop">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        Selesai Dipelajari
                                    </div>
                                ) : (
                                    <>
                                        <span className="w-5 h-5 rounded-md border-2 border-current opacity-60"></span>
                                        Tandai Selesai
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                );
                })}
            </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6 animate-fade-up delay-300">
          <div className="bg-white dark:bg-[#0b1120] border border-slate-200 dark:border-slate-800 p-6 rounded-2xl sticky top-24 shadow-xl shadow-slate-200/50 dark:shadow-none">
             <div className="flex items-center gap-2 mb-4">
                <span className="text-amber-500 text-xl">⚠️</span>
                <h4 className="text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-widest">Jebakan Umum</h4>
             </div>
             <ul className="space-y-4">
                {skill.traps.map((trap, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400 leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0 shadow-[0_0_6px_rgba(251,191,36,0.5)]"></span>
                    {trap}
                  </li>
                ))}
             </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
