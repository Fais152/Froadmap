
import { Skill, Category, Difficulty } from './types';

export const SKILLS: Skill[] = [
  // ==========================================
  // CATEGORY: TECH & DIGITAL
  // ==========================================
  {
    id: 'frontend-development',
    title: 'Frontend Development: Jalur Developer Web Modern',
    category: Category.TECH,
    difficulty: Difficulty.ADVANCED,
    duration: '20-24 Minggu',
    purpose: 'Frontend developer adalah arsitek visual internet. Jalur ini membawa Anda dari dasar HTML hingga arsitektur aplikasi skala besar yang performan dan teruji.',
    outcome: 'Mampu membangun, mengoptimalkan, dan men-deploy aplikasi web skala enterprise dengan standar industri.',
    prerequisites: ['Logika dasar komputer', 'Akses internet'],
    steps: [
      {
        id: 'fe1',
        title: 'Internet & Web Protocols',
        description: 'Pahami bagaimana internet bekerja: DNS, HTTP/HTTPS, dan alur request-response antara browser dan server.',
        resources: [{ title: 'MDN: How the Web Works', url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works', type: 'Docs' }],
        challenge: 'Jelaskan alur yang terjadi saat Anda mengetik google.com di browser kepada teman.',
        estimatedTime: '1 Minggu'
      },
      {
        id: 'fe2',
        title: 'HTML5 Semantic & SEO Basics',
        description: 'Belajar struktur dokumen web yang benar menggunakan tag semantik (<main>, <article>, <aside>) untuk SEO dan aksesibilitas.',
        resources: [{ title: 'W3Schools HTML Tutorial', url: 'https://www.w3schools.com/html/', type: 'Article' }],
        challenge: 'Buatlah kerangka artikel berita yang rapi menggunakan minimal 10 tag HTML semantik berbeda.',
        estimatedTime: '1 Minggu'
      },
      {
        id: 'fe3',
        title: 'CSS Fundamentals',
        description: 'Kuasai Margin, Padding, Border, dan Content. Pelajari cara mengatur tipografi dan warna secara konsisten.',
        resources: [{ title: 'CSS-Tricks: Box Model', url: 'https://css-tricks.com/the-box-model/', type: 'Article' }],
        challenge: 'Buatlah kartu nama digital yang rapi dengan CSS Box Model murni.',
        estimatedTime: '1 Minggu'
      },
      {
        id: 'fe4',
        title: 'Advanced Layouts: Flexbox & Grid',
        description: 'Belajar teknik layouting modern yang membuat elemen web bisa bergeser dan menyesuaikan posisi dengan mudah.',
        resources: [{ title: 'Flexbox Froggy', url: 'https://flexboxfroggy.com/', type: 'Tool' }],
        challenge: 'Buatlah layout navbar dan dashboard sidebar yang responsif menggunakan Flexbox.',
        estimatedTime: '2 Minggu'
      },
      {
        id: 'fe5',
        title: 'Responsive Design',
        description: 'Pastikan website Anda terlihat bagus di HP, Tablet, dan Desktop dengan teknik Mobile First Design.',
        resources: [{ title: 'Web.dev: Responsive Design', url: 'https://web.dev/learn/design/', type: 'Docs' }],
        challenge: 'Ubah layout dashboard sebelumnya agar berubah menjadi baris tunggal saat dibuka di HP.',
        estimatedTime: '1 Minggu'
      },
      {
        id: 'fe6',
        title: 'JavaScript Basics',
        description: 'Mengenal variabel, tipe data, dan alur logika IF/ELSE serta perulangan (Loops).',
        resources: [{ title: 'JavaScript.info: Basics', url: 'https://javascript.info/first-steps', type: 'Docs' }],
        challenge: 'Buat program hitung diskon sederhana: Jika belanja > 100rb, diskon 10%.',
        estimatedTime: '1 Minggu'
      },
      {
        id: 'fe7',
        title: 'DOM Manipulation',
        description: 'Belajar menghubungkan JavaScript ke HTML: menangkap klik tombol dan mengubah teks secara dinamis.',
        resources: [{ title: 'MDN: Manipulating the DOM', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents', type: 'Docs' }],
        challenge: 'Buatlah aplikasi To-Do List sederhana yang bisa menambah dan menghapus tugas.',
        estimatedTime: '2 Minggu'
      },
      {
        id: 'fe8',
        title: 'ES6+ Features & Fetch API',
        description: 'Gunakan fitur JS modern (Arrow Functions, Destructuring) dan belajar mengambil data dari internet (API).',
        resources: [{ title: 'Modern JavaScript Tutorial', url: 'https://javascript.info/js-misc', type: 'Docs' }],
        challenge: 'Tampilkan daftar harga Kripto atau Cuaca hari ini di website Anda menggunakan data API publik.',
        estimatedTime: '2 Minggu'
      },
      {
        id: 'fe9',
        title: 'Version Control: Git',
        description: 'Belajar menyimpan riwayat koding Anda dan cara kolaborasi dengan developer lain.',
        resources: [{ title: 'GitHub Skills', url: 'https://skills.github.com/', type: 'Tool' }],
        challenge: 'Push proyek To-Do List Anda ke repositori GitHub publik.',
        estimatedTime: '1 Minggu'
      },
      {
        id: 'fe10',
        title: 'React & Deployment',
        description: 'Gunakan Vite dan React untuk membangun aplikasi berbasis komponen dan rilis ke Vercel/Netlify.',
        resources: [{ title: 'Official React Dev', url: 'https://react.dev/learn', type: 'Docs' }],
        challenge: 'Konversi To-Do List Anda ke React dan rilis ke publik.',
        estimatedTime: '3 Minggu'
      },
      {
        id: 'fe11',
        title: 'State Management (Redux/Zustand)',
        description: 'Kelola data global aplikasi kompleks. Pahami kapan pakai Context, kapan pakai Redux Toolkit atau Zustand.',
        resources: [{ title: 'Redux Toolkit Docs', url: 'https://redux-toolkit.js.org/', type: 'Docs' }],
        challenge: 'Implementasikan fitur keranjang belanja global yang datanya tidak hilang saat refresh (persist).',
        estimatedTime: '2 Minggu'
      },
      {
        id: 'fe12',
        title: 'Advanced React Patterns',
        description: 'Tulis komponen yang reusable dan clean menggunakan Compound Components, Custom Hooks, dan Render Props.',
        resources: [{ title: 'Advanced React Patterns', url: 'https://kentcdodds.com/blog/advanced-react-component-patterns', type: 'Article' }],
        challenge: 'Buat komponen Modal atau Accordion fleksibel menggunakan pattern Compound Component.',
        estimatedTime: '2 Minggu'
      },
      {
        id: 'fe13',
        title: 'Performance Optimization',
        description: 'Web Vitals, Code Splitting, Memoization (useMemo/useCallback), dan Lazy Loading untuk performa maksimal.',
        resources: [{ title: 'Web.dev Vitals', url: 'https://web.dev/vitals/', type: 'Docs' }],
        challenge: 'Optimasi aplikasi React hingga skor Lighthouse Performance mencapai 90+.',
        estimatedTime: '1 Minggu'
      },
      {
        id: 'fe14',
        title: 'Testing (Jest & RTL)',
        description: 'Pastikan aplikasimu bebas bug. Unit Testing dan Integration Testing menggunakan React Testing Library.',
        resources: [{ title: 'RTL Introduction', url: 'https://testing-library.com/docs/react-testing-library/intro/', type: 'Docs' }],
        challenge: 'Tulis test case untuk skenario Login Berhasil dan Login Gagal.',
        estimatedTime: '2 Minggu'
      },
      {
        id: 'fe15',
        title: 'CI/CD & DevOps Basic',
        description: 'Otomatisasi workflow. GitHub Actions untuk testing otomatis dan deployment pipeline.',
        resources: [{ title: 'GitHub Actions for JS', url: 'https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs', type: 'Guide' }],
        challenge: 'Setup pipeline GitHub Actions yang menjalankan test setiap kali push ke branch main.',
        estimatedTime: '1 Minggu'
      }
    ],
    traps: [
      'Menghafal kode tanpa paham logikanya.',
      'Melewatkan JavaScript dasar dan langsung ke React.',
      'Over-engineering: Menggunakan Redux untuk aplikasi yang sangat sederhana.',
      'Tidak menulis test karena merasa "buang waktu" (padahal menghemat waktu debugging).'
    ]
  },
  {
    id: 'backend-development',
    title: 'Backend Development: Node.js & Database',
    category: Category.TECH,
    difficulty: Difficulty.INTERMEDIATE,
    duration: '14-18 Minggu',
    purpose: 'Pelajari cara mengelola data, keamanan, dan logika server yang kokoh untuk aplikasi skala besar.',
    outcome: 'Mampu membangun sistem API, mengelola database, dan melakukan deployment server aman.',
    prerequisites: ['Dasar JS', 'Logika database'],
    steps: [
      { id: 'be1', title: 'OS Basics & Terminal', description: 'Belajar perintah dasar Linux/Unix.', resources: [{ title: 'Linux Journey', url: 'https://linuxjourney.com/', type: 'Article' }], challenge: 'Navigasi folder hanya pakai terminal.', estimatedTime: '1 Minggu' },
      { id: 'be2', title: 'Node.js Runtime', description: 'Arsitektur Event Loop dan NPM.', resources: [{ title: 'Node.js Docs', url: 'https://nodejs.org/', type: 'Docs' }], challenge: 'Buat script pembaca file.', estimatedTime: '1 Minggu' },
      { id: 'be3', title: 'Express.js Framework', description: 'Menangani Request/Response HTTP.', resources: [{ title: 'Express Docs', url: 'https://expressjs.com/', type: 'Docs' }], challenge: 'Buat server dengan 3 route.', estimatedTime: '2 Minggu' },
      { id: 'be4', title: 'PostgreSQL Database', description: 'Relational database dan SQL.', resources: [{ title: 'PostgreSQL Tutorial', url: 'https://www.postgresqltutorial.com/', type: 'Article' }], challenge: 'Desain tabel user dan produk.', estimatedTime: '2 Minggu' },
      { id: 'be5', title: 'ORM (Prisma)', description: 'Interaksi database modern.', resources: [{ title: 'Prisma Guide', url: 'https://www.prisma.io/', type: 'Docs' }], challenge: 'Koneksikan Express ke Postgres via Prisma.', estimatedTime: '1 Minggu' },
      { id: 'be6', title: 'RESTful API Design', description: 'Standar API yang baik.', resources: [{ title: 'REST API Best Practices', url: 'https://restfulapi.net/', type: 'Article' }], challenge: 'Buat CRUD API lengkap.', estimatedTime: '2 Minggu' },
      { id: 'be7', title: 'Auth & Security', description: 'JWT dan Hashing Password.', resources: [{ title: 'JWT.io', url: 'https://jwt.io/', type: 'Tool' }], challenge: 'Fitur Register & Login.', estimatedTime: '2 Minggu' },
      { id: 'be8', title: 'Validation', description: 'Validasi input user (Zod).', resources: [{ title: 'Zod Docs', url: 'https://zod.dev/', type: 'Docs' }], challenge: 'Validasi form register.', estimatedTime: '1 Minggu' },
      { id: 'be9', title: 'Testing', description: 'Unit testing dengan Jest.', resources: [{ title: 'Jest Docs', url: 'https://jestjs.io/', type: 'Docs' }], challenge: 'Test fungsi login.', estimatedTime: '2 Minggu' },
      { id: 'be10', title: 'Deployment', description: 'Docker dan Cloud Hosting.', resources: [{ title: 'Docker Basics', url: 'https://docs.docker.com/', type: 'Docs' }], challenge: 'Deploy API ke Render/Railway.', estimatedTime: '2 Minggu' }
    ],
    traps: ['Menyimpan password plain text.', 'Tidak validasi input.']
  },
  {
    id: 'python-data-science',
    title: 'Python for Data Science: Dari Nol ke Analis',
    category: Category.TECH,
    difficulty: Difficulty.BEGINNER,
    duration: '12-14 Minggu',
    purpose: 'Data adalah minyak baru. Pelajari bahasa pemrograman paling populer untuk mengolah, menganalisis, dan memvisualisasikan data.',
    outcome: 'Mampu membersihkan data mentah, membuat visualisasi informatif, dan model prediksi sederhana.',
    prerequisites: ['Logika Matematika Dasar'],
    steps: [
      { id: 'pds1', title: 'Python Setup & Syntax', description: 'Instal Anaconda/VS Code, variabel, dan tipe data.', resources: [{ title: 'Python for Beginners', url: 'https://www.python.org/about/gettingstarted/', type: 'Docs' }], challenge: 'Buat kalkulator sederhana dengan Python.', estimatedTime: '1 Minggu' },
      { id: 'pds2', title: 'Data Structures', description: 'Lists, Dictionaries, Sets, dan Tuples.', resources: [{ title: 'W3Schools Python Lists', url: 'https://www.w3schools.com/python/python_lists.asp', type: 'Article' }], challenge: 'Buat program manajemen kontak sederhana.', estimatedTime: '1 Minggu' },
      { id: 'pds3', title: 'Control Flow & Functions', description: 'Loops (For/While) dan Fungsi.', resources: [{ title: 'Real Python Functions', url: 'https://realpython.com/defining-your-own-python-function/', type: 'Article' }], challenge: 'Buat fungsi untuk menghitung rata-rata nilai.', estimatedTime: '1 Minggu' },
      { id: 'pds4', title: 'NumPy Basics', description: 'Komputasi numerik array multidimensi.', resources: [{ title: 'NumPy Quickstart', url: 'https://numpy.org/doc/stable/user/quickstart.html', type: 'Docs' }], challenge: 'Lakukan operasi matriks sederhana.', estimatedTime: '1 Minggu' },
      { id: 'pds5', title: 'Pandas: DataFrames', description: 'Manipulasi data tabel (Excel-nya Python).', resources: [{ title: 'Pandas 10 Minutes', url: 'https://pandas.pydata.org/docs/user_guide/10min.html', type: 'Docs' }], challenge: 'Load file CSV dan tampilkan 5 baris pertama.', estimatedTime: '2 Minggu' },
      { id: 'pds6', title: 'Data Cleaning', description: 'Menangani missing values dan duplikat.', resources: [{ title: 'Data Cleaning Guide', url: 'https://realpython.com/python-data-cleaning-numpy-pandas/', type: 'Article' }], challenge: 'Bersihkan dataset kotor (ada nilai kosong).', estimatedTime: '1 Minggu' },
      { id: 'pds7', title: 'Matplotlib & Seaborn', description: 'Visualisasi data: Bar, Line, Scatter plots.', resources: [{ title: 'Seaborn Tutorial', url: 'https://seaborn.pydata.org/tutorial.html', type: 'Docs' }], challenge: 'Buat grafik tren penjualan dari data dummy.', estimatedTime: '2 Minggu' },
      { id: 'pds8', title: 'Exploratory Data Analysis', description: 'Mencari pola dan insight dari data.', resources: [{ title: 'EDA Checklist', url: 'https://towardsdatascience.com/exploratory-data-analysis-8fc1cb20fd15', type: 'Article' }], challenge: 'Analisis dataset Titanic: Siapa yang selamat?', estimatedTime: '2 Minggu' },
      { id: 'pds9', title: 'Intro to Machine Learning', description: 'Scikit-learn dasar: Linear Regression.', resources: [{ title: 'Scikit-Learn Intro', url: 'https://scikit-learn.org/stable/getting_started.html', type: 'Docs' }], challenge: 'Prediksi harga rumah berdasarkan luas tanah.', estimatedTime: '2 Minggu' },
      { id: 'pds10', title: 'Final Project Report', description: 'Menggabungkan semua dalam Jupyter Notebook.', resources: [{ title: 'Kaggle Kernels', url: 'https://www.kaggle.com/code', type: 'Guide' }], challenge: 'Publikasikan analisis data lengkap di GitHub/Kaggle.', estimatedTime: '1 Minggu' }
    ],
    traps: ['Terlalu lama di teori tanpa praktek coding.', 'Tidak membersihkan data sebelum analisis.']
  },
  {
    id: 'mobile-app-dev',
    title: 'Mobile App Development (React Native)',
    category: Category.TECH,
    difficulty: Difficulty.INTERMEDIATE,
    duration: '12-16 Minggu',
    purpose: 'Buat aplikasi yang berjalan di iOS dan Android dengan satu kode base. Skill yang sangat dicari startup.',
    outcome: 'Mempublikasikan aplikasi mobile fungsional ke Google Play Store atau Apple App Store.',
    prerequisites: ['Dasar JavaScript', 'React Basics'],
    steps: [
      { id: 'md1', title: 'React Native Setup', description: 'Instalasi Expo dan Environment.', resources: [{ title: 'Expo Docs', url: 'https://docs.expo.dev/', type: 'Docs' }], challenge: 'Jalankan "Hello World" di HP fisikmu.', estimatedTime: '1 Minggu' },
      { id: 'md2', title: 'Core Components', description: 'View, Text, Image, ScrollView.', resources: [{ title: 'RN Components', url: 'https://reactnative.dev/docs/components-and-apis', type: 'Docs' }], challenge: 'Buat layout profil Instagram sederhana.', estimatedTime: '1 Minggu' },
      { id: 'md3', title: 'Styling & Layout', description: 'Flexbox di Mobile.', resources: [{ title: 'RN Styling', url: 'https://reactnative.dev/docs/style', type: 'Docs' }], challenge: 'Buat tampilan yang responsif di berbagai ukuran layar HP.', estimatedTime: '1 Minggu' },
      { id: 'md4', title: 'Navigation', description: 'Pindah antar layar (Stack/Tab).', resources: [{ title: 'React Navigation', url: 'https://reactnavigation.org/', type: 'Docs' }], challenge: 'Buat aplikasi dengan Tab Bar dan halaman detail.', estimatedTime: '2 Minggu' },
      { id: 'md5', title: 'List & Performance', description: 'FlatList dan SectionList.', resources: [{ title: 'Optimizing Lists', url: 'https://reactnative.dev/docs/optimizing-flatlist-configuration', type: 'Docs' }], challenge: 'Tampilkan 100 data kontak dengan scroll lancar.', estimatedTime: '1 Minggu' },
      { id: 'md6', title: 'Input & Forms', description: 'Handling Text Input & Keyboard.', resources: [{ title: 'Handling Touches', url: 'https://reactnative.dev/docs/handling-touches', type: 'Docs' }], challenge: 'Buat form login yang valid.', estimatedTime: '1 Minggu' },
      { id: 'md7', title: 'API Networking', description: 'Fetch data dari internet.', resources: [{ title: 'Networking', url: 'https://reactnative.dev/docs/network', type: 'Docs' }], challenge: 'Buat aplikasi berita menggunakan API publik.', estimatedTime: '2 Minggu' },
      { id: 'md8', title: 'Device Features', description: 'Kamera, Lokasi, Notifikasi.', resources: [{ title: 'Expo APIs', url: 'https://docs.expo.dev/versions/latest/', type: 'Docs' }], challenge: 'Buat fitur upload foto profil dari galeri/kamera.', estimatedTime: '2 Minggu' },
      { id: 'md9', title: 'State Management', description: 'Mengelola data global app.', resources: [{ title: 'Zustand Guide', url: 'https://github.com/pmndrs/zustand', type: 'Docs' }], challenge: 'Simpan tema (Dark/Light) user secara global.', estimatedTime: '1 Minggu' },
      { id: 'md10', title: 'Deployment', description: 'Build APK/IPA dan Publish.', resources: [{ title: 'EAS Build', url: 'https://docs.expo.dev/build/introduction/', type: 'Guide' }], challenge: 'Build file APK yang bisa diinstal teman.', estimatedTime: '2 Minggu' }
    ],
    traps: ['Mengabaikan performa render.', 'Tidak menguji di device fisik (hanya simulator).']
  },
  {
    id: 'ai-engineering',
    title: 'AI Engineering Basics: LLM & Prompting',
    category: Category.TECH,
    difficulty: Difficulty.INTERMEDIATE,
    duration: '10-12 Minggu',
    purpose: 'Jangan cuma pakai ChatGPT, belajar cara membangun aplikasi di atasnya. Masuki dunia AI Engineering.',
    outcome: 'Mampu mengintegrasikan model AI (LLM) ke dalam aplikasi software.',
    prerequisites: ['Python Dasar', 'API Basics'],
    steps: [
      { id: 'ai1', title: 'How LLMs Work', description: 'Tokenization, Embeddings, Transformer.', resources: [{ title: 'Intro to LLMs', url: 'https://karpathy.ai/zero-to-hero.html', type: 'Video' }], challenge: 'Jelaskan konsep "Next Token Prediction".', estimatedTime: '1 Minggu' },
      { id: 'ai2', title: 'Prompt Engineering', description: 'Zero-shot, Few-shot, Chain of Thought.', resources: [{ title: 'Prompting Guide', url: 'https://www.promptingguide.ai/', type: 'Guide' }], challenge: 'Optimalkan prompt untuk hasil yang konsisten.', estimatedTime: '1 Minggu' },
      { id: 'ai3', title: 'OpenAI/Gemini API', description: 'Mengakses model via kode.', resources: [{ title: 'OpenAI API Docs', url: 'https://platform.openai.com/docs/introduction', type: 'Docs' }], challenge: 'Buat script Python chatbot sederhana.', estimatedTime: '1 Minggu' },
      { id: 'ai4', title: 'Embeddings & Vector DB', description: 'Menyimpan makna teks (Semantic Search).', resources: [{ title: 'Vector DB Explained', url: 'https://www.pinecone.io/learn/vector-database/', type: 'Article' }], challenge: 'Buat sistem pencarian dokumen pintar.', estimatedTime: '2 Minggu' },
      { id: 'ai5', title: 'RAG Architecture', description: 'Retrieval Augmented Generation.', resources: [{ title: 'RAG Overview', url: 'https://www.deeplearning.ai/', type: 'Course' }], challenge: 'Buat bot yang bisa menjawab dari PDF kamu.', estimatedTime: '2 Minggu' },
      { id: 'ai6', title: 'LangChain Framework', description: 'Orkestrasi aplikasi LLM.', resources: [{ title: 'LangChain Docs', url: 'https://python.langchain.com/docs/get_started/introduction', type: 'Docs' }], challenge: 'Buat chain sederhana: Summary -> Translate.', estimatedTime: '2 Minggu' },
      { id: 'ai7', title: 'Fine-Tuning Basics', description: 'Melatih model dengan data khusus.', resources: [{ title: 'Fine-Tuning Guide', url: 'https://platform.openai.com/docs/guides/fine-tuning', type: 'Docs' }], challenge: 'Siapkan dataset JSONL untuk fine-tuning.', estimatedTime: '1 Minggu' },
      { id: 'ai8', title: 'AI Agents', description: 'AI yang bisa menggunakan tools.', resources: [{ title: 'AutoGPT Concepts', url: 'https://github.com/Significant-Gravitas/AutoGPT', type: 'Repo' }], challenge: 'Buat agen yang bisa search Google & hitung matematika.', estimatedTime: '2 Minggu' }
    ],
    traps: ['Halusinasi AI (mempercayai output 100%).', 'Biaya API yang tidak terkontrol.']
  },
  {
    id: 'devops-basics',
    title: 'DevOps Fundamentals: Docker & CI/CD',
    category: Category.TECH,
    difficulty: Difficulty.INTERMEDIATE,
    duration: '10-12 Minggu',
    purpose: 'Jembatan antara koding dan operasional. Pastikan aplikasi berjalan lancar di server.',
    outcome: 'Mampu men-containerize aplikasi dan membuat pipeline deployment otomatis.',
    prerequisites: ['Linux Basics', 'Web Dev Basics'],
    steps: [
      { id: 'do1', title: 'DevOps Culture', description: 'Apa itu DevOps? CAMS Model.', resources: [{ title: 'DevOps Roadmap', url: 'https://roadmap.sh/devops', type: 'Guide' }], challenge: 'Tulis esai singkat tentang benefit DevOps.', estimatedTime: '1 Minggu' },
      { id: 'do2', title: 'Advanced Linux', description: 'Shell scripting & permission management.', resources: [{ title: 'Bash Scripting', url: 'https://devhints.io/bash', type: 'CheatSheet' }], challenge: 'Buat script backup file otomatis.', estimatedTime: '1 Minggu' },
      { id: 'do3', title: 'Docker Basics', description: 'Containerization, Images, Containers.', resources: [{ title: 'Docker 101', url: 'https://www.docker.com/101-tutorial/', type: 'Docs' }], challenge: 'Jalankan aplikasi web di dalam container.', estimatedTime: '1 Minggu' },
      { id: 'do4', title: 'Docker Compose', description: 'Multi-container apps.', resources: [{ title: 'Docker Compose', url: 'https://docs.docker.com/compose/', type: 'Docs' }], challenge: 'Jalankan App + Database dengan satu perintah.', estimatedTime: '1 Minggu' },
      { id: 'do5', title: 'CI/CD Concepts', description: 'Continuous Integration & Deployment.', resources: [{ title: 'GitLab CI', url: 'https://docs.gitlab.com/ee/ci/', type: 'Docs' }], challenge: 'Jelaskan beda CI dan CD.', estimatedTime: '1 Minggu' },
      { id: 'do6', title: 'GitHub Actions', description: 'Automasi workflow di GitHub.', resources: [{ title: 'GH Actions', url: 'https://docs.github.com/en/actions', type: 'Docs' }], challenge: 'Buat action untuk run test otomatis.', estimatedTime: '2 Minggu' },
      { id: 'do7', title: 'Infrastructure as Code', description: 'Terraform basics (Intro).', resources: [{ title: 'Terraform Intro', url: 'https://developer.hashicorp.com/terraform/intro', type: 'Docs' }], challenge: 'Provision satu server AWS/GCP via kode.', estimatedTime: '2 Minggu' },
      { id: 'do8', title: 'Monitoring', description: 'Prometheus & Grafana intro.', resources: [{ title: 'Observability', url: 'https://grafana.com/', type: 'Article' }], challenge: 'Setup monitoring uptime sederhana.', estimatedTime: '1 Minggu' }
    ],
    traps: ['Over-complicating (pakai K8s padahal cuma butuh VM).', 'Security misconfigurations.']
  },
  {
    id: 'cloud-computing-aws',
    title: 'Cloud Computing Fundamentals (AWS)',
    category: Category.TECH,
    difficulty: Difficulty.BEGINNER,
    duration: '10-12 Minggu',
    purpose: 'Perusahaan modern tidak lagi punya server fisik. Mereka pakai Cloud. Pahami dasar infrastruktur global AWS.',
    outcome: 'Memahami core services AWS (EC2, S3, RDS) dan siap untuk sertifikasi AWS Cloud Practitioner.',
    prerequisites: ['Dasar Jaringan', 'Konsep Server'],
    steps: [
      { id: 'aws1', title: 'Cloud Concepts', description: 'Apa itu Cloud? IaaS, PaaS, SaaS.', resources: [{ title: 'AWS Cloud Concepts', url: 'https://aws.amazon.com/what-is-cloud-computing/', type: 'Article' }], challenge: 'Jelaskan beda On-premise vs Cloud.', estimatedTime: '1 Minggu' },
      { id: 'aws2', title: 'AWS Global Infrastructure', description: 'Regions, Availability Zones, Edge Locations.', resources: [{ title: 'AWS Infrastructure', url: 'https://aws.amazon.com/about-aws/global-infrastructure/', type: 'Docs' }], challenge: 'Pilih region terbaik untuk user di Indonesia.', estimatedTime: '1 Minggu' },
      { id: 'aws3', title: 'IAM (Security)', description: 'Users, Groups, Roles, Policies.', resources: [{ title: 'IAM Tutorial', url: 'https://aws.amazon.com/iam/', type: 'Docs' }], challenge: 'Buat user admin dengan MFA aktif.', estimatedTime: '1 Minggu' },
      { id: 'aws4', title: 'EC2 (Compute)', description: 'Virtual Server di Cloud.', resources: [{ title: 'EC2 Getting Started', url: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html', type: 'Guide' }], challenge: 'Launch satu instance Linux t2.micro.', estimatedTime: '2 Minggu' },
      { id: 'aws5', title: 'S3 (Storage)', description: 'Menyimpan file/objek di Cloud.', resources: [{ title: 'S3 Basics', url: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html', type: 'Docs' }], challenge: 'Upload file HTML dan jadikan website statis.', estimatedTime: '1 Minggu' },
      { id: 'aws6', title: 'VPC & Networking', description: 'Subnet, Security Groups, Internet Gateway.', resources: [{ title: 'VPC Explained', url: 'https://www.youtube.com/watch?v=jZ33lBR8dSc', type: 'Video' }], challenge: 'Buat VPC custom dengan public subnet.', estimatedTime: '2 Minggu' },
      { id: 'aws7', title: 'RDS (Database)', description: 'Managed Relational Database.', resources: [{ title: 'Amazon RDS', url: 'https://aws.amazon.com/rds/', type: 'Docs' }], challenge: 'Launch database MySQL di AWS.', estimatedTime: '1 Minggu' },
      { id: 'aws8', title: 'Lambda (Serverless)', description: 'Menjalankan kode tanpa server.', resources: [{ title: 'Lambda Tutorial', url: 'https://aws.amazon.com/lambda/', type: 'Guide' }], challenge: 'Buat fungsi "Hello World" di Lambda.', estimatedTime: '1 Minggu' },
      { id: 'aws9', title: 'Billing & Pricing', description: 'Cost Explorer dan Budgets.', resources: [{ title: 'AWS Pricing', url: 'https://aws.amazon.com/pricing/', type: 'Docs' }], challenge: 'Set alarm jika tagihan > $5.', estimatedTime: '1 Minggu' },
      { id: 'aws10', title: 'Cloud Practitioner Prep', description: 'Review materi untuk sertifikasi.', resources: [{ title: 'Exam Guide', url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/', type: 'Guide' }], challenge: 'Kerjakan satu set soal latihan ujian.', estimatedTime: '1 Minggu' }
    ],
    traps: ['Lupa mematikan instance (tagihan membengkak).', 'Mengekspos access key di GitHub.']
  },
  {
    id: 'cyber-security-basics',
    title: 'Cyber Security: Pertahanan Digital Dasar',
    category: Category.TECH,
    difficulty: Difficulty.BEGINNER,
    duration: '10-12 Minggu',
    purpose: 'Di era serangan siber, pelajari cara melindungi sistem. Fondasi untuk menjadi Security Analyst atau Ethical Hacker.',
    outcome: 'Memahami dasar keamanan jaringan, enkripsi, dan penetration testing dasar.',
    prerequisites: ['Dasar Jaringan', 'Linux Basics'],
    steps: [
      { id: 'cs1', title: 'Networking Fundamentals', description: 'TCP/IP, OSI Model, Ports.', resources: [{ title: 'Network Fundamentals', url: 'https://www.youtube.com/watch?v=QKfk7YFILws', type: 'Video' }], challenge: 'Lakukan Ping dan Traceroute.', estimatedTime: '1 Minggu' },
      { id: 'cs2', title: 'Linux Command Line', description: 'Navigasi Kali Linux.', resources: [{ title: 'Linux for Hackers', url: 'https://linuxjourney.com/', type: 'Docs' }], challenge: 'Update sistem via terminal.', estimatedTime: '1 Minggu' },
      { id: 'cs3', title: 'OSINT', description: 'Mengumpulkan info publik.', resources: [{ title: 'OSINT Framework', url: 'https://osintframework.com/', type: 'Tool' }], challenge: 'Riset info perusahaan via Google Dorking.', estimatedTime: '1 Minggu' },
      { id: 'cs4', title: 'Scanning (Nmap)', description: 'Memetakan jaringan.', resources: [{ title: 'Nmap Guide', url: 'https://nmap.org/', type: 'Docs' }], challenge: 'Scan jaringan lokal sendiri.', estimatedTime: '1 Minggu' },
      { id: 'cs5', title: 'Vulnerabilities', description: 'OWASP Top 10.', resources: [{ title: 'OWASP', url: 'https://owasp.org/', type: 'Docs' }], challenge: 'Pelajari 3 kerentanan teratas.', estimatedTime: '1 Minggu' },
      { id: 'cs6', title: 'Web Security', description: 'SQL Injection & XSS.', resources: [{ title: 'PortSwigger', url: 'https://portswigger.net/', type: 'Course' }], challenge: 'Selesaikan lab SQLi dasar.', estimatedTime: '2 Minggu' },
      { id: 'cs7', title: 'Cryptography', description: 'Enkripsi & Hashing.', resources: [{ title: 'Crypto 101', url: 'https://www.coursera.org/learn/crypto', type: 'Course' }], challenge: 'Enkripsi file teks.', estimatedTime: '1 Minggu' },
      { id: 'cs8', title: 'Metasploit', description: 'Exploitation framework.', resources: [{ title: 'Metasploit Guide', url: 'https://www.offsec.com/metasploit-unleashed/', type: 'Docs' }], challenge: 'Exploit VM lab tertutup.', estimatedTime: '2 Minggu' },
      { id: 'cs9', title: 'Privilege Escalation', description: 'Dari user biasa ke admin.', resources: [{ title: 'PrivEsc Guide', url: 'https://blog.g0tmi1k.com/', type: 'Article' }], challenge: 'Analisis permission file.', estimatedTime: '1 Minggu' },
      { id: 'cs10', title: 'Reporting', description: 'Menulis laporan audit.', resources: [{ title: 'Writing Reports', url: 'https://www.sans.org/', type: 'Docs' }], challenge: 'Tulis laporan temuan lab.', estimatedTime: '1 Minggu' }
    ],
    traps: ['Menyerang tanpa izin (Ilegal).', 'Hanya pakai tools tanpa paham konsep.']
  },

  // ==========================================
  // CATEGORY: BUSINESS & MONEY
  // ==========================================
  {
    id: 'digital-marketing',
    title: 'Digital Marketing: Strategi Pertumbuhan',
    category: Category.BUSINESS,
    difficulty: Difficulty.BEGINNER,
    duration: '10-12 Minggu',
    purpose: 'Kuasai seni menjual produk di era digital melalui SEO, Sosmed, dan Ads.',
    outcome: 'Mampu merancang kampanye pemasaran digital dan menganalisis data.',
    prerequisites: ['Sosmed Basics'],
    steps: [
      { id: 'dm1', title: 'Marketing Funnel (AIDA)', description: 'Awareness, Interest, Desire, Action.', resources: [{ title: 'Marketing Funnel', url: 'https://sproutsocial.com/glossary/marketing-funnel/', type: 'Article' }], challenge: 'Petakan strategi brand favoritmu.', estimatedTime: '1 Minggu' },
      { id: 'dm2', title: 'Copywriting', description: 'Menulis iklan yang menjual.', resources: [{ title: 'Copywriting 101', url: 'https://copyblogger.com/', type: 'Docs' }], challenge: 'Tulis ulang deskripsi produk.', estimatedTime: '1 Minggu' },
      { id: 'dm3', title: 'SEO Basics', description: 'Ranking di Google.', resources: [{ title: 'Moz SEO Guide', url: 'https://moz.com/beginners-guide-to-seo', type: 'Guide' }], challenge: 'Riset 5 keywords potensial.', estimatedTime: '2 Minggu' },
      { id: 'dm4', title: 'Social Media Strategy', description: 'Content Calendar.', resources: [{ title: 'Hootsuite Guide', url: 'https://blog.hootsuite.com/', type: 'Article' }], challenge: 'Buat jadwal konten seminggu.', estimatedTime: '1 Minggu' },
      { id: 'dm5', title: 'Paid Ads (Meta/Google)', description: 'Targeting iklan berbayar.', resources: [{ title: 'Meta Blueprint', url: 'https://www.facebook.com/business/learn', type: 'Course' }], challenge: 'Rancang simulasi iklan Rp 50rb.', estimatedTime: '2 Minggu' },
      { id: 'dm6', title: 'Email Marketing', description: 'Database & Newsletter.', resources: [{ title: 'Mailchimp 101', url: 'https://mailchimp.com/', type: 'Docs' }], challenge: 'Buat email welcome.', estimatedTime: '1 Minggu' },
      { id: 'dm7', title: 'Content Marketing', description: 'Memberi nilai gratis.', resources: [{ title: 'HubSpot Content', url: 'https://blog.hubspot.com/', type: 'Article' }], challenge: 'Tulis satu artikel blog.', estimatedTime: '1 Minggu' },
      { id: 'dm8', title: 'Google Analytics', description: 'Membaca data trafik.', resources: [{ title: 'GA Academy', url: 'https://analytics.google.com/', type: 'Course' }], challenge: 'Pasang GA di blog/link.', estimatedTime: '1 Minggu' },
      { id: 'dm9', title: 'CRO', description: 'Optimasi konversi website.', resources: [{ title: 'CRO Guide', url: 'https://moz.com/', type: 'Article' }], challenge: 'Audit satu landing page.', estimatedTime: '1 Minggu' },
      { id: 'dm10', title: 'Portfolio Building', description: 'Showcase hasil kerja.', resources: [{ title: 'Portfolio Tips', url: 'https://www.canva.com/', type: 'Article' }], challenge: 'Buat PDF strategi marketing.', estimatedTime: '1 Minggu' }
    ],
    traps: ['Fokus vanity metrics (likes) bukan sales.', 'Bakar uang iklan tanpa strategi.']
  },
  {
    id: 'freelancing-mastery',
    title: 'Freelancing Mastery: Jadi Bos Sendiri',
    category: Category.BUSINESS,
    difficulty: Difficulty.INTERMEDIATE,
    duration: '8-10 Minggu',
    purpose: 'Ubah skill menjadi uang. Cari klien, negosiasi harga, dan manajemen proyek.',
    outcome: 'Punya profil profesional, portofolio, dan klien pertama.',
    prerequisites: ['Satu Hard Skill'],
    steps: [
      { id: 'fl1', title: 'Niche Selection', description: 'Spesialisasi pasar.', resources: [{ title: 'Finding Niche', url: 'https://www.upwork.com/', type: 'Article' }], challenge: 'Tulis positioning statement.', estimatedTime: '1 Minggu' },
      { id: 'fl2', title: 'Killer Portfolio', description: 'Studi kasus (Problem-Result).', resources: [{ title: 'Case Study Club', url: 'https://www.casestudy.club/', type: 'Docs' }], challenge: 'Buat 2 studi kasus.', estimatedTime: '2 Minggu' },
      { id: 'fl3', title: 'Pricing Strategy', description: 'Hourly vs Fixed.', resources: [{ title: 'The Futur Pricing', url: 'https://www.youtube.com/watch?v=RKX_73WTC04', type: 'Video' }], challenge: 'Hitung tarif minimum.', estimatedTime: '1 Minggu' },
      { id: 'fl4', title: 'LinkedIn Branding', description: 'Optimasi profil.', resources: [{ title: 'LinkedIn Tips', url: 'https://business.linkedin.com/', type: 'Article' }], challenge: 'Update Headline & About.', estimatedTime: '1 Minggu' },
      { id: 'fl5', title: 'Outreach', description: 'Cold DM & Proposal.', resources: [{ title: 'Cold Email', url: 'https://mailshake.com/', type: 'Guide' }], challenge: 'Kirim 5 penawaran.', estimatedTime: '1 Minggu' },
      { id: 'fl6', title: 'Proposals', description: 'Struktur proposal.', resources: [{ title: 'PandaDoc Template', url: 'https://www.pandadoc.com/', type: 'Tool' }], challenge: 'Buat template proposal.', estimatedTime: '1 Minggu' },
      { id: 'fl7', title: 'Contracts', description: 'Perjanjian kerja.', resources: [{ title: 'Freelance Contract', url: 'https://www.hellobonsai.com/', type: 'Article' }], challenge: 'Siapkan draft kontrak.', estimatedTime: '1 Minggu' },
      { id: 'fl8', title: 'Client Mgmt', description: 'Komunikasi & Revisi.', resources: [{ title: 'Client Mgmt', url: 'https://hbr.org/', type: 'Article' }], challenge: 'Buat skrip batasan revisi.', estimatedTime: '1 Minggu' },
      { id: 'fl9', title: 'Time Mgmt', description: 'Kerja vs Admin.', resources: [{ title: 'Time Blocking', url: 'https://todoist.com/', type: 'Article' }], challenge: 'Buat jadwal mingguan.', estimatedTime: '1 Minggu' },
      { id: 'fl10', title: 'Finance & Tax', description: 'Pemisahan rekening.', resources: [{ title: 'Freelance Finance', url: 'https://www.investopedia.com/', type: 'Article' }], challenge: 'Buka rekening bisnis.', estimatedTime: '1 Minggu' }
    ],
    traps: ['Harga kemurahan.', 'Kerja tanpa DP/Kontrak.']
  },
  {
    id: 'personal-finance',
    title: 'Personal Finance: Kelola Keuangan Pribadi',
    category: Category.BUSINESS,
    difficulty: Difficulty.BEGINNER,
    duration: '6-8 Minggu',
    purpose: 'Amankan masa depanmu. Belajar budgeting, menabung, dan dasar investasi.',
    outcome: 'Memiliki dana darurat, budget bulanan, dan portofolio investasi awal.',
    prerequisites: ['Penghasilan (Berapapun)'],
    steps: [
      { id: 'pf1', title: 'Financial Audit', description: 'Cek kondisi saat ini.', resources: [{ title: 'Net Worth Calc', url: 'https://www.nerdwallet.com/calculator/net-worth-calculator', type: 'Tool' }], challenge: 'Hitung total aset vs utang.', estimatedTime: '1 Minggu' },
      { id: 'pf2', title: 'Budgeting Rules', description: '50/30/20 Rule.', resources: [{ title: 'Budgeting 101', url: 'https://www.investopedia.com/ask/answers/022916/what-502030-budget-rule.asp', type: 'Article' }], challenge: 'Buat pos pengeluaran bulan ini.', estimatedTime: '1 Minggu' },
      { id: 'pf3', title: 'Emergency Fund', description: 'Dana Darurat.', resources: [{ title: 'Emergency Fund', url: 'https://www.ramseysolutions.com/saving/quick-guide-to-your-emergency-fund', type: 'Guide' }], challenge: 'Targetkan nominal 3-6 bulan pengeluaran.', estimatedTime: '1 Minggu' },
      { id: 'pf4', title: 'Debt Management', description: 'Snowball vs Avalanche.', resources: [{ title: 'Paying Off Debt', url: 'https://www.ramseysolutions.com/debt/debt-snowball-vs-debt-avalanche', type: 'Article' }], challenge: 'List semua utang dan urutkan.', estimatedTime: '1 Minggu' },
      { id: 'pf5', title: 'Investing Basics', description: 'Compound Interest & Risk.', resources: [{ title: 'Investing 101', url: 'https://www.investopedia.com/investing-4427685', type: 'Article' }], challenge: 'Pahami profil risiko investasimu.', estimatedTime: '1 Minggu' },
      { id: 'pf6', title: 'Stocks & Bonds', description: 'Saham dan Obligasi.', resources: [{ title: 'Stock Market Basics', url: 'https://www.khanacademy.org/economics-finance-domain/core-finance/stock-and-bonds', type: 'Course' }], challenge: 'Analisis satu saham bluechip.', estimatedTime: '1 Minggu' },
      { id: 'pf7', title: 'Mutual Funds / ETF', description: 'Reksa Dana.', resources: [{ title: 'ETF Guide', url: 'https://www.investopedia.com/terms/e/etf.asp', type: 'Docs' }], challenge: 'Bandingkan performa 3 reksa dana.', estimatedTime: '1 Minggu' },
      { id: 'pf8', title: 'Retirement Planning', description: 'Dana Pensiun.', resources: [{ title: 'Retirement Calc', url: 'https://www.bankrate.com/retirement/retirement-plan-calculator/', type: 'Tool' }], challenge: 'Hitung kebutuhan dana pensiun.', estimatedTime: '1 Minggu' }
    ],
    traps: ['FOMO investasi kripto/saham gorengan.', 'Gaya hidup naik saat gaji naik (Lifestyle Creep).']
  },
  {
    id: 'product-management',
    title: 'Product Management Fundamentals',
    category: Category.BUSINESS,
    difficulty: Difficulty.INTERMEDIATE,
    duration: '10-12 Minggu',
    purpose: 'Jadilah "CEO" dari sebuah produk. Hubungkan bisnis, teknologi, dan user experience.',
    outcome: 'Mampu membuat Product Requirement Document (PRD) dan roadmap produk.',
    prerequisites: ['Pemahaman Tech & Bisnis'],
    steps: [
      { id: 'pmt1', title: 'Role of a PM', description: 'Apa itu Product Manager?', resources: [{ title: 'PM Guide', url: 'https://www.atlassian.com/agile/product-management', type: 'Article' }], challenge: 'Jelaskan beda PM dan Project Manager.', estimatedTime: '1 Minggu' },
      { id: 'pmt2', title: 'User Research for PM', description: 'Validasi masalah user.', resources: [{ title: 'User Interviews', url: 'https://www.userinterviews.com/ux-research-field-guide-module/user-interviews', type: 'Guide' }], challenge: 'Buat skrip wawancara user.', estimatedTime: '1 Minggu' },
      { id: 'pmt3', title: 'Competitive Analysis', description: 'Analisis kompetitor.', resources: [{ title: 'SWOT Analysis', url: 'https://www.mindtools.com/pages/article/newTMC_05.htm', type: 'Article' }], challenge: 'Bedah kelebihan/kekurangan produk pesaing.', estimatedTime: '1 Minggu' },
      { id: 'pmt4', title: 'MVP Concept', description: 'Minimum Viable Product.', resources: [{ title: 'MVP Guide', url: 'https://www.ycombinator.com/library/4Q-a-minimum-viable-product', type: 'Article' }], challenge: 'Tentukan fitur minimal untuk ide aplikasimu.', estimatedTime: '1 Minggu' },
      { id: 'pmt5', title: 'Writing PRD', description: 'Product Requirement Document.', resources: [{ title: 'PRD Template', url: 'https://www.atlassian.com/software/confluence/templates/product-requirements-document', type: 'Tool' }], challenge: 'Tulis PRD untuk fitur "Login".', estimatedTime: '2 Minggu' },
      { id: 'pmt6', title: 'Prioritization Frameworks', description: 'RICE, MoSCoW.', resources: [{ title: 'RICE Score', url: 'https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/', type: 'Article' }], challenge: 'Prioritaskan 5 ide fitur.', estimatedTime: '1 Minggu' },
      { id: 'pmt7', title: 'Metrics & KPIs', description: 'Mengukur kesuksesan.', resources: [{ title: 'Startup Metrics', url: 'https://a16z.com/2015/08/21/16-metrics/', type: 'Article' }], challenge: 'Tentukan North Star Metric produkmu.', estimatedTime: '1 Minggu' },
      { id: 'pmt8', title: 'Product Launch', description: 'Go-to-market strategy.', resources: [{ title: 'Launch Checklist', url: 'https://www.producthunt.com/launch', type: 'Guide' }], challenge: 'Rancang rencana rilis produk.', estimatedTime: '1 Minggu' }
    ],
    traps: ['Membangun fitur yang tidak dibutuhkan user.', 'Mengabaikan feedback data.']
  },
  {
    id: 'startup-founder',
    title: 'Startup Founder 101: Dari Ide ke Bisnis',
    category: Category.BUSINESS,
    difficulty: Difficulty.ADVANCED,
    duration: '12-16 Minggu',
    purpose: 'Panduan membangun startup dari nol. Validasi ide, cari co-founder, dan fundraising.',
    outcome: 'Pitch Deck siap investor dan validasi pasar.',
    prerequisites: ['Mental Baja'],
    steps: [
      { id: 'st1', title: 'Ideation & Problem', description: 'Cari masalah yang layak dipecahkan.', resources: [{ title: 'Startup Ideas', url: 'https://www.ycombinator.com/library/8g-how-to-get-startup-ideas', type: 'Article' }], challenge: 'List 10 masalah sehari-hari.', estimatedTime: '1 Minggu' },
      { id: 'st2', title: 'Market Validation', description: 'Apakah orang mau bayar?', resources: [{ title: 'Mom Test', url: 'http://momtestbook.com/', type: 'Book' }], challenge: 'Jual idemu sebelum produknya ada (Pre-sale).', estimatedTime: '2 Minggu' },
      { id: 'st3', title: 'Business Model Canvas', description: 'Peta bisnis satu halaman.', resources: [{ title: 'BMC Guide', url: 'https://www.strategyzer.com/canvas/business-model-canvas', type: 'Tool' }], challenge: 'Isi BMC untuk ide startupmu.', estimatedTime: '1 Minggu' },
      { id: 'st4', title: 'Lean Startup', description: 'Build-Measure-Learn.', resources: [{ title: 'Lean Startup', url: 'http://theleanstartup.com/', type: 'Book' }], challenge: 'Rancang eksperimen validasi termurah.', estimatedTime: '1 Minggu' },
      { id: 'st5', title: 'Co-founder Matching', description: 'Mencari partner.', resources: [{ title: 'Co-founder Guide', url: 'https://www.ycombinator.com/library/5x-how-to-find-a-cofounder', type: 'Article' }], challenge: 'Draft profil co-founder ideal.', estimatedTime: '1 Minggu' },
      { id: 'st6', title: 'Pitch Deck', description: 'Presentasi ke investor.', resources: [{ title: 'Pitch Deck Template', url: 'https://slidebean.com/blog/startups-pitch-deck-examples', type: 'Docs' }], challenge: 'Buat 10 slide presentasi bisnis.', estimatedTime: '2 Minggu' },
      { id: 'st7', title: 'Fundraising Basics', description: 'Bootstrapping vs VC.', resources: [{ title: 'Fundraising Guide', url: 'https://www.ycombinator.com/library/4A-a-guide-to-seed-fundraising', type: 'Guide' }], challenge: 'Pelajari term sheet dasar.', estimatedTime: '1 Minggu' },
      { id: 'st8', title: 'Legal Basics', description: 'Badan hukum & HAKI.', resources: [{ title: 'Startup Law', url: 'https://stripe.com/atlas/guides', type: 'Docs' }], challenge: 'Cek syarat pendirian PT/CV.', estimatedTime: '1 Minggu' }
    ],
    traps: ['Jatuh cinta pada solusi, bukan masalah.', 'Membagi saham 50/50 tanpa vesting.']
  },
  {
    id: 'project-management-agile',
    title: 'Project Management: Agile & Scrum',
    category: Category.BUSINESS,
    difficulty: Difficulty.INTERMEDIATE,
    duration: '8-10 Minggu',
    purpose: 'Belajar memimpin tim dan menyelesaikan proyek tepat waktu menggunakan metode modern yang dipakai startup teknologi.',
    outcome: 'Memahami framework Scrum, Kanban, dan tools manajemen proyek seperti Trello/Jira.',
    prerequisites: ['Pengalaman Organisasi Dasar'],
    steps: [
      { id: 'pm1', title: 'Project Lifecycle', description: 'Initiation, Planning, Execution, Closure.', resources: [{ title: 'PM Basics', url: 'https://www.pmi.org/', type: 'Docs' }], challenge: 'Petakan fase untuk proyek ulang tahun.', estimatedTime: '1 Minggu' },
      { id: 'pm2', title: 'Waterfall vs Agile', description: 'Metode tradisional vs iteratif.', resources: [{ title: 'Agile Manifesto', url: 'https://agilemanifesto.org/', type: 'Article' }], challenge: 'Jelaskan kenapa software pakai Agile.', estimatedTime: '1 Minggu' },
      { id: 'pm3', title: 'Scrum Framework', description: 'Roles, Artifacts, Events.', resources: [{ title: 'Scrum Guide', url: 'https://scrumguides.org/', type: 'Docs' }], challenge: 'Simulasikan Daily Standup.', estimatedTime: '1 Minggu' },
      { id: 'pm4', title: 'Kanban Board', description: 'Visualisasi alur kerja.', resources: [{ title: 'Kanban 101', url: 'https://www.atlassian.com/agile/kanban', type: 'Article' }], challenge: 'Buat papan Trello untuk tugas pribadi.', estimatedTime: '1 Minggu' },
      { id: 'pm5', title: 'Scope Management', description: 'Mencegah Scope Creep.', resources: [{ title: 'Scope Creep', url: 'https://www.wrike.com/', type: 'Article' }], challenge: 'Tulis dokumen batasan proyek.', estimatedTime: '1 Minggu' },
      { id: 'pm6', title: 'Risk Management', description: 'Identifikasi & Mitigasi risiko.', resources: [{ title: 'Risk Register', url: 'https://www.projectmanager.com/', type: 'Tool' }], challenge: 'List 5 risiko liburan dan solusinya.', estimatedTime: '1 Minggu' },
      { id: 'pm7', title: 'Stakeholder Comms', description: 'Mengelola ekspektasi.', resources: [{ title: 'Stakeholder Map', url: 'https://www.mindtools.com/', type: 'Article' }], challenge: 'Petakan siapa yang berpengaruh di proyekmu.', estimatedTime: '1 Minggu' },
      { id: 'pm8', title: 'Sprint Planning', description: 'Merencanakan kerja 2 minggu.', resources: [{ title: 'Sprint Planning', url: 'https://www.atlassian.com/', type: 'Guide' }], challenge: 'Pilih tugas prioritas untuk minggu ini.', estimatedTime: '1 Minggu' },
      { id: 'pm9', title: 'Retrospectives', description: 'Belajar dari kesalahan.', resources: [{ title: 'Effective Retros', url: 'https://www.funretrospectives.com/', type: 'Tool' }], challenge: 'Lakukan review mingguan: Start, Stop, Continue.', estimatedTime: '1 Minggu' },
      { id: 'pm10', title: 'PM Tools Mastery', description: 'Jira, Asana, atau Notion.', resources: [{ title: 'Notion for PM', url: 'https://www.notion.so/', type: 'Guide' }], challenge: 'Setup dashboard proyek di Notion.', estimatedTime: '1 Minggu' }
    ],
    traps: ['Micromanagement tim.', 'Rapat terlalu lama dan tidak efektif.']
  },
  {
    id: 'sales-mastery',
    title: 'Sales Mastery: Seni Persuasi & Negosiasi',
    category: Category.BUSINESS,
    difficulty: Difficulty.BEGINNER,
    duration: '8-10 Minggu',
    purpose: 'Semua orang adalah penjual. Pelajari cara menawarkan ide, produk, atau jasa dengan percaya diri dan etis.',
    outcome: 'Mampu melakukan prospecting, handling objection, dan closing penjualan.',
    prerequisites: ['Komunikasi Dasar'],
    steps: [
      { id: 'sl1', title: 'Sales Mindset', description: 'Jualan = Membantu, bukan memaksa.', resources: [{ title: 'To Sell is Human', url: 'https://www.danpink.com/', type: 'Book' }], challenge: 'Ubah cara pandangmu tentang "Salesman".', estimatedTime: '1 Minggu' },
      { id: 'sl2', title: 'Product Knowledge', description: 'Kenali apa yang kamu jual luar dalam.', resources: [{ title: 'Features vs Benefits', url: 'https://www.wordstream.com/', type: 'Article' }], challenge: 'List 5 fitur HP-mu dan ubah jadi manfaat.', estimatedTime: '1 Minggu' },
      { id: 'sl3', title: 'Prospecting', description: 'Mencari calon pembeli ideal.', resources: [{ title: 'Sales Prospecting', url: 'https://blog.hubspot.com/sales', type: 'Guide' }], challenge: 'List 10 orang yang mungkin butuh jasamu.', estimatedTime: '1 Minggu' },
      { id: 'sl4', title: 'The Pitch', description: 'Elevator pitch yang memikat.', resources: [{ title: 'Perfect Pitch', url: 'https://www.masterclass.com/', type: 'Video' }], challenge: 'Rekam pitch 60 detik.', estimatedTime: '1 Minggu' },
      { id: 'sl5', title: 'Active Listening', description: 'Jual solusi, bukan produk.', resources: [{ title: 'Spin Selling', url: 'https://www.huthwaiteinternational.com/', type: 'Article' }], challenge: 'Tanya lebih banyak daripada bicara.', estimatedTime: '1 Minggu' },
      { id: 'sl6', title: 'Handling Objections', description: 'Mengatasi "Mahal" atau "Nanti dulu".', resources: [{ title: 'Objection Handling', url: 'https://www.salesforce.com/', type: 'Guide' }], challenge: 'Siapkan jawaban untuk 3 penolakan umum.', estimatedTime: '1 Minggu' },
      { id: 'sl7', title: 'Negotiation Basics', description: 'Win-win solution.', resources: [{ title: 'Never Split the Difference', url: 'https://www.blackswanltd.com/', type: 'Article' }], challenge: 'Latihan negosiasi harga di pasar.', estimatedTime: '1 Minggu' },
      { id: 'sl8', title: 'Closing Techniques', description: 'Meminta keputusan.', resources: [{ title: 'Closing Techniques', url: 'https://www.pipedrive.com/', type: 'Article' }], challenge: 'Gunakan teknik "Option Close" hari ini.', estimatedTime: '1 Minggu' },
      { id: 'sl9', title: 'Follow Up', description: 'Uang ada di follow up.', resources: [{ title: 'Follow Up Stats', url: 'https://blog.close.com/', type: 'Data' }], challenge: 'Hubungi kembali prospek yang diam.', estimatedTime: '1 Minggu' },
      { id: 'sl10', title: 'CRM & Pipeline', description: 'Mengelola data penjualan.', resources: [{ title: 'CRM Basics', url: 'https://www.zoho.com/', type: 'Tool' }], challenge: 'Buat spreadsheet pipeline sederhana.', estimatedTime: '1 Minggu' }
    ],
    traps: ['Terlalu agresif (pushy).', 'Berhenti follow up setelah 1 kali kontak.']
  },

  // ==========================================
  // CATEGORY: CREATIVE & MEDIA
  // ==========================================
  {
    id: 'content-creation-shortform',
    title: 'Content Creation: Short-form Video',
    category: Category.CREATIVE,
    difficulty: Difficulty.INTERMEDIATE,
    duration: '8-10 Minggu',
    purpose: 'Kuasai algoritma TikTok/Reels untuk membangun audiens.',
    outcome: 'Produksi video viral dengan retensi tinggi.',
    prerequisites: ['Smartphone'],
    steps: [
      { id: 'cc1', title: 'Algoritma & Platform', description: 'TikTok vs Reels vs Shorts.', resources: [{ title: 'Algorithm 2024', url: 'https://later.com/', type: 'Article' }], challenge: 'Analisis 3 video viral.', estimatedTime: '1 Minggu' },
      { id: 'cc2', title: 'The Hook', description: '3 detik pertama penentu.', resources: [{ title: 'Viral Hooks', url: 'https://www.socialmediaexaminer.com/', type: 'Article' }], challenge: 'Tulis 10 ide hook.', estimatedTime: '1 Minggu' },
      { id: 'cc3', title: 'Scripting', description: 'Struktur video pendek.', resources: [{ title: 'Script Template', url: 'https://vidiq.com/', type: 'Article' }], challenge: 'Buat skrip 30 detik.', estimatedTime: '1 Minggu' },
      { id: 'cc4', title: 'Lighting & Audio', description: 'Kualitas produksi HP.', resources: [{ title: 'Mobile Lighting', url: 'https://www.youtube.com/', type: 'Video' }], challenge: 'Rekam dengan cahaya jendela.', estimatedTime: '1 Minggu' },
      { id: 'cc5', title: 'CapCut Basics', description: 'Editing dasar.', resources: [{ title: 'CapCut Tutorial', url: 'https://www.youtube.com/', type: 'Video' }], challenge: 'Edit video 5 cut.', estimatedTime: '1 Minggu' },
      { id: 'cc6', title: 'Text Overlay', description: 'Caption dinamis.', resources: [{ title: 'Caption Tricks', url: 'https://www.tiktok.com/', type: 'Video' }], challenge: 'Buat video dengan teks pop-up.', estimatedTime: '1 Minggu' },
      { id: 'cc7', title: 'Trending Audio', description: 'Sound strategy.', resources: [{ title: 'Trend Discovery', url: 'https://influencermarketinghub.com/', type: 'Article' }], challenge: 'Pakai sound trending.', estimatedTime: '1 Minggu' },
      { id: 'cc8', title: 'Branding', description: 'Visual identity.', resources: [{ title: 'Personal Brand', url: 'https://sproutsocial.com/', type: 'Article' }], challenge: 'Tentukan font & warna.', estimatedTime: '1 Minggu' },
      { id: 'cc9', title: 'Analytics', description: 'Retention graph.', resources: [{ title: 'Reading Data', url: 'https://buffer.com/', type: 'Article' }], challenge: 'Cek kapan orang skip videomu.', estimatedTime: '1 Minggu' },
      { id: 'cc10', title: 'Monetisasi', description: 'Cuan dari konten.', resources: [{ title: 'Creator Economy', url: 'https://www.shopify.com/', type: 'Article' }], challenge: 'Buat rate card sederhana.', estimatedTime: '1 Minggu' }
    ],
    traps: ['Audio buruk.', 'Konten copy-paste tanpa nilai tambah.']
  },
  {
    id: 'ux-design-path',
    title: 'UX Design: Riset ke Prototype',
    category: Category.CREATIVE,
    difficulty: Difficulty.BEGINNER,
    duration: '10-12 Minggu',
    purpose: 'Desain produk yang memecahkan masalah user, bukan sekadar cantik.',
    outcome: 'Portfolio studi kasus UX lengkap.',
    prerequisites: ['Empati'],
    steps: [
      { id: 'ux1', title: 'User Research', description: 'Interview user.', resources: [{ title: 'UX Research', url: 'https://www.nngroup.com/', type: 'Article' }], challenge: 'Interview 3 orang.', estimatedTime: '1 Minggu' },
      { id: 'ux2', title: 'Personas', description: 'Profil user fiktif.', resources: [{ title: 'Persona Guide', url: 'https://www.interaction-design.org/', type: 'Article' }], challenge: 'Buat 1 user persona.', estimatedTime: '1 Minggu' },
      { id: 'ux3', title: 'Information Architecture', description: 'Struktur menu.', resources: [{ title: 'IA Basics', url: 'https://uxmastery.com/', type: 'Article' }], challenge: 'Buat sitemap.', estimatedTime: '1 Minggu' },
      { id: 'ux4', title: 'User Flow', description: 'Langkah user.', resources: [{ title: 'User Flow', url: 'https://careerfoundry.com/', type: 'Article' }], challenge: 'Gambar flow login.', estimatedTime: '1 Minggu' },
      { id: 'ux5', title: 'Wireframing', description: 'Sketsa kasar.', resources: [{ title: 'Wireframing', url: 'https://balsamiq.com/', type: 'Article' }], challenge: 'Sketsa 5 layar di kertas.', estimatedTime: '1 Minggu' },
      { id: 'ux6', title: 'Figma Basics', description: 'Tools desain.', resources: [{ title: 'Figma Intro', url: 'https://www.youtube.com/', type: 'Video' }], challenge: 'Digitalkan sketsa ke Figma.', estimatedTime: '2 Minggu' },
      { id: 'ux7', title: 'UI Principles', description: 'Warna & Tipografi.', resources: [{ title: 'UI Rules', url: 'https://99designs.com/', type: 'Article' }], challenge: 'Pilih palet warna.', estimatedTime: '1 Minggu' },
      { id: 'ux8', title: 'Prototyping', description: 'Interaksi klik.', resources: [{ title: 'Figma Prototype', url: 'https://help.figma.com/', type: 'Docs' }], challenge: 'Hubungkan layar agar bisa diklik.', estimatedTime: '1 Minggu' },
      { id: 'ux9', title: 'Usability Testing', description: 'Uji coba.', resources: [{ title: 'Testing Guide', url: 'https://www.hotjar.com/', type: 'Article' }], challenge: 'Minta teman coba prototype.', estimatedTime: '1 Minggu' },
      { id: 'ux10', title: 'Case Study', description: 'Dokumentasi.', resources: [{ title: 'UX Portfolio', url: 'https://www.casestudy.club/', type: 'Article' }], challenge: 'Tulis studi kasus di Medium.', estimatedTime: '1 Minggu' }
    ],
    traps: ['Desain berdasarkan asumsi sendiri.', 'Lupa mobile responsiveness.']
  },
  {
    id: 'graphic-design-branding',
    title: 'Graphic Design: Branding & Visual Comm',
    category: Category.CREATIVE,
    difficulty: Difficulty.BEGINNER,
    duration: '8-10 Minggu',
    purpose: 'Belajar komunikasi visual. Menggabungkan tipografi, warna, dan layout untuk menyampaikan pesan brand.',
    outcome: 'Memahami prinsip desain, menguasai tools (Canva/Illustrator), dan membuat Brand Identity Kit.',
    prerequisites: ['Minat Seni'],
    steps: [
      { id: 'gd1', title: 'Design Principles', description: 'Balance, Contrast, Hierarchy.', resources: [{ title: 'Design Basics', url: 'https://gcflearnfree.org/', type: 'Course' }], challenge: 'Analisis poster film favoritmu.', estimatedTime: '1 Minggu' },
      { id: 'gd2', title: 'Color Theory', description: 'Psikologi warna & harmoni.', resources: [{ title: 'Color Guide', url: 'https://color.adobe.com/', type: 'Tool' }], challenge: 'Buat 3 palet warna berbeda mood.', estimatedTime: '1 Minggu' },
      { id: 'gd3', title: 'Typography', description: 'Serif vs Sans Serif, pairing font.', resources: [{ title: 'Typography Manual', url: 'https://fonts.google.com/knowledge', type: 'Docs' }], challenge: 'Pasangkan 2 font untuk judul & isi.', estimatedTime: '1 Minggu' },
      { id: 'gd4', title: 'Layout & Grid', description: 'Mengatur elemen agar rapi.', resources: [{ title: 'Grid Systems', url: 'https://www.canva.com/learn', type: 'Article' }], challenge: 'Desain ulang CV-mu dengan grid.', estimatedTime: '1 Minggu' },
      { id: 'gd5', title: 'Canva Mastery', description: 'Desain cepat & efisien.', resources: [{ title: 'Canva School', url: 'https://designschool.canva.com/', type: 'Course' }], challenge: 'Buat 5 template Instagram Feed.', estimatedTime: '1 Minggu' },
      { id: 'gd6', title: 'Logo Design Basics', description: 'Simbol, Wordmark, Monogram.', resources: [{ title: 'Logo Process', url: 'https://99designs.com/', type: 'Article' }], challenge: 'Sketsa 10 ide logo untuk kedai kopi.', estimatedTime: '1 Minggu' },
      { id: 'gd7', title: 'Vector Basics (Inkscape/AI)', description: 'Gambar yang tidak pecah.', resources: [{ title: 'Vector vs Raster', url: 'https://vectorizer.io/', type: 'Article' }], challenge: 'Trace ulang logo sederhana.', estimatedTime: '1 Minggu' },
      { id: 'gd8', title: 'Brand Identity', description: 'Konsistensi visual brand.', resources: [{ title: 'Brand Guidelines', url: 'https://brandingstyleguides.com/', type: 'Docs' }], challenge: 'Buat moodboard brand.', estimatedTime: '1 Minggu' },
      { id: 'gd9', title: 'Visual Hierarchy', description: 'Mengarahkan mata audiens.', resources: [{ title: 'Hierarchy Tips', url: 'https://visme.co/', type: 'Article' }], challenge: 'Desain poster event info padat.', estimatedTime: '1 Minggu' },
      { id: 'gd10', title: 'Print vs Digital', description: 'CMYK vs RGB, Bleed, DPI.', resources: [{ title: 'Print Prep', url: 'https://www.printful.com/', type: 'Guide' }], challenge: 'Siapkan file kartu nama siap cetak.', estimatedTime: '1 Minggu' }
    ],
    traps: ['Menggunakan terlalu banyak font.', 'Kontras warna rendah (sulit dibaca).']
  },
  {
    id: 'video-editing-pro',
    title: 'Video Editing Pro (Premiere/DaVinci)',
    category: Category.CREATIVE,
    difficulty: Difficulty.INTERMEDIATE,
    duration: '10-12 Minggu',
    purpose: 'Lebih dari sekadar potong-sambung. Pelajari storytelling visual, color grading, dan sound design untuk produksi profesional.',
    outcome: 'Mampu mengedit video dokumenter atau iklan dengan standar broadcast.',
    prerequisites: ['PC/Laptop Spek Menengah'],
    steps: [
      { id: 've1', title: 'Workflow & Organization', description: 'Manajemen file dan folder.', resources: [{ title: 'Post-Production Workflow', url: 'https://www.adobe.com/creativecloud/video/discover/video-editing-workflow.html', type: 'Guide' }], challenge: 'Organisir footage liburanmu dengan rapi.', estimatedTime: '1 Minggu' },
      { id: 've2', title: 'The Cut', description: 'J-Cut, L-Cut, Match Cut.', resources: [{ title: 'Editing Techniques', url: 'https://www.studiobinder.com/blog/video-editing-cuts-techniques/', type: 'Article' }], challenge: 'Buat sequence 1 menit dengan 3 teknik cut.', estimatedTime: '1 Minggu' },
      { id: 've3', title: 'Pacing & Rhythm', description: 'Mengatur emosi penonton.', resources: [{ title: 'In the Blink of an Eye', url: 'https://www.goodreads.com/book/show/10606.In_the_Blink_of_an_Eye', type: 'Book' }], challenge: 'Edit ulang video yang sama dengan tempo cepat & lambat.', estimatedTime: '1 Minggu' },
      { id: 've4', title: 'Color Correction', description: 'Memperbaiki warna dasar (WB/Exposure).', resources: [{ title: 'Color Correction Basics', url: 'https://www.blackmagicdesign.com/products/davinciresolve/training', type: 'Video' }], challenge: 'Samakan warna 2 klip yang beda pencahayaan.', estimatedTime: '2 Minggu' },
      { id: 've5', title: 'Color Grading', description: 'Menciptakan mood/look.', resources: [{ title: 'Color Grading Guide', url: 'https://nofilmschool.com/color-grading-guide', type: 'Article' }], challenge: 'Buat look "Cinematic Teal & Orange".', estimatedTime: '1 Minggu' },
      { id: 've6', title: 'Sound Design (SFX)', description: 'Lapisan suara ambient & foley.', resources: [{ title: 'Sound Design Basics', url: 'https://www.epidemicsound.com/blog/sound-design-video-editing/', type: 'Article' }], challenge: 'Tambahkan SFX langkah kaki & angin pada video bisu.', estimatedTime: '1 Minggu' },
      { id: 've7', title: 'Audio Mixing', description: 'Balancing dialog & musik.', resources: [{ title: 'Audio Mixing for Video', url: 'https://helpx.adobe.com/premiere-pro/how-to/mix-audio.html', type: 'Guide' }], challenge: 'Pastikan suara vokal jelas di atas musik latar.', estimatedTime: '1 Minggu' },
      { id: 've8', title: 'Transitions & Effects', description: 'Gunakan secukupnya.', resources: [{ title: 'Transitions Guide', url: 'https://motionarray.com/learn/premiere-pro/premiere-pro-transitions/', type: 'Article' }], challenge: 'Buat transisi seamless tanpa plugin.', estimatedTime: '1 Minggu' },
      { id: 've9', title: 'Titles & Graphics', description: 'Lower thirds & typography.', resources: [{ title: 'Motion Graphics Basics', url: 'https://www.schoolofmotion.com/', type: 'Course' }], challenge: 'Buat intro nama yang animasi.', estimatedTime: '1 Minggu' },
      { id: 've10', title: 'Export Settings', description: 'Codecs, Bitrate, Format.', resources: [{ title: 'Export Settings', url: 'https://blog.frame.io/2017/02/15/choose-the-right-codec/', type: 'Article' }], challenge: 'Export video untuk YouTube (4K) dan Instagram (1080p).', estimatedTime: '1 Minggu' }
    ],
    traps: ['Over-editing (kebanyakan efek).', 'Audio leveling yang buruk (musik terlalu keras).']
  },
  {
    id: '3d-modeling-blender',
    title: '3D Modeling: Blender for Beginners',
    category: Category.CREATIVE,
    difficulty: Difficulty.INTERMEDIATE,
    duration: '12-14 Minggu',
    purpose: 'Masuki dunia 3D. Buat aset game, animasi, atau desain produk menggunakan software gratis terbaik dunia.',
    outcome: 'Mampu memodelkan objek 3D, memberi tekstur, lighting, dan render image fotorealistik.',
    prerequisites: ['Mouse 3 Tombol', 'Numpad (Disarankan)'],
    steps: [
      { id: 'bl1', title: 'Interface & Navigation', description: 'Orbit, Pan, Zoom, Shortcuts.', resources: [{ title: 'Blender Donut Tutorial Part 1', url: 'https://www.youtube.com/watch?v=nIoZHCdtk88', type: 'Video' }], challenge: 'Hafalkan shortcut G, R, S.', estimatedTime: '1 Minggu' },
      { id: 'bl2', title: 'Mesh Modeling', description: 'Extrude, Loop Cut, Bevel.', resources: [{ title: 'Modeling Basics', url: 'https://docs.blender.org/manual/en/latest/modeling/index.html', type: 'Docs' }], challenge: 'Buat model kursi sederhana.', estimatedTime: '2 Minggu' },
      { id: 'bl3', title: 'Modifiers', description: 'Subdivision Surface, Array, Mirror.', resources: [{ title: 'Modifiers Explained', url: 'https://artisticrender.com/blender-modifiers-explained/', type: 'Article' }], challenge: 'Buat model gelas halus dengan Subdiv.', estimatedTime: '1 Minggu' },
      { id: 'bl4', title: 'Shading & Materials', description: 'Principled BSDF.', resources: [{ title: 'Blender Materials', url: 'https://cgcookie.com/articles/blender-materials-shader-nodes', type: 'Guide' }], challenge: 'Buat material plastik, logam, dan kaca.', estimatedTime: '1 Minggu' },
      { id: 'bl5', title: 'Lighting', description: 'Point, Sun, Area, HDRI.', resources: [{ title: 'Lighting Mastery', url: 'https://www.blenderguru.com/tutorials/lighting-mastery', type: 'Video' }], challenge: 'Lighting studio 3 titik (Three-point lighting).', estimatedTime: '1 Minggu' },
      { id: 'bl6', title: 'Camera & Rendering', description: 'Cycles vs Eevee.', resources: [{ title: 'Render Settings', url: 'https://conceptartempire.com/blender-render-settings/', type: 'Article' }], challenge: 'Render gambar resolusi tinggi.', estimatedTime: '1 Minggu' },
      { id: 'bl7', title: 'UV Unwrapping', description: 'Membuka kulit objek 3D.', resources: [{ title: 'UV Mapping', url: 'https://www.youtube.com/watch?v=qa7227rQ_80', type: 'Video' }], challenge: 'Unwrap kotak kardus agar tekstur pas.', estimatedTime: '2 Minggu' },
      { id: 'bl8', title: 'Texturing', description: 'Menambahkan detail permukaan.', resources: [{ title: 'Texture Haven', url: 'https://polyhaven.com/textures', type: 'Tool' }], challenge: 'Beri tekstur kayu realistik pada meja.', estimatedTime: '1 Minggu' },
      { id: 'bl9', title: 'Simple Animation', description: 'Keyframes.', resources: [{ title: 'Animation Basics', url: 'https://www.youtube.com/watch?v=jBqYWnn57mk', type: 'Video' }], challenge: 'Animasi bola memantul.', estimatedTime: '1 Minggu' },
      { id: 'bl10', title: 'Final Scene', description: 'Komposisi lengkap.', resources: [{ title: 'Blender Nation', url: 'https://www.blendernation.com/', type: 'Collection' }], challenge: 'Render scene kamar isometrik.', estimatedTime: '2 Minggu' }
    ],
    traps: ['Topology berantakan (N-gons).', 'Langsung ingin buat karakter manusia (terlalu sulit).']
  },
  {
    id: 'music-production',
    title: 'Music Production: Bedroom Producer',
    category: Category.CREATIVE,
    difficulty: Difficulty.INTERMEDIATE,
    duration: '12-16 Minggu',
    purpose: 'Buat lagu sendiri dari kamar tidur. Pelajari DAW, Music Theory dasar, dan Mixing.',
    outcome: 'Produksi 1 track lagu instrumental original.',
    prerequisites: ['Laptop', 'Headphone'],
    steps: [
      { id: 'mp1', title: 'DAW Selection', description: 'Ableton, FL Studio, Logic.', resources: [{ title: 'Best DAWs', url: 'https://www.musicradar.com/news/best-daw', type: 'Article' }], challenge: 'Instal trial DAW pilihanmu.', estimatedTime: '1 Minggu' },
      { id: 'mp2', title: 'Basic Beat Making', description: 'Kick, Snare, Hi-hat pattern.', resources: [{ title: 'Drum Programming', url: 'https://www.attackmagazine.com/technique/beat-dissected/', type: 'Guide' }], challenge: 'Buat beat drum 4 bar.', estimatedTime: '1 Minggu' },
      { id: 'mp3', title: 'Music Theory 101', description: 'Scales & Chords.', resources: [{ title: 'Music Theory for Producers', url: 'https://www.musictheory.net/', type: 'Course' }], challenge: 'Buat progresi chord C Major.', estimatedTime: '2 Minggu' },
      { id: 'mp4', title: 'Melody Writing', description: 'Membuat hook yang catchy.', resources: [{ title: 'Melody Tips', url: 'https://www.landr.com/blog/how-to-write-a-melody/', type: 'Article' }], challenge: 'Tulis melodi di atas chord sebelumnya.', estimatedTime: '1 Minggu' },
      { id: 'mp5', title: 'Basslines', description: 'Fondasi harmoni.', resources: [{ title: 'Writing Basslines', url: 'https://www.youtube.com/watch?v=I6XN8_6Jt7E', type: 'Video' }], challenge: 'Tambahkan bass yang groove.', estimatedTime: '1 Minggu' },
      { id: 'mp6', title: 'Arrangement', description: 'Struktur lagu (Verse-Chorus).', resources: [{ title: 'Song Structure', url: 'https://blog.reverbnation.com/', type: 'Article' }], challenge: 'Susun loop 4 bar menjadi lagu 3 menit.', estimatedTime: '2 Minggu' },
      { id: 'mp7', title: 'Sound Selection', description: 'Memilih sampel yang tepat.', resources: [{ title: 'Splice', url: 'https://splice.com/', type: 'Tool' }], challenge: 'Ganti suara instrumen agar lebih kohesif.', estimatedTime: '1 Minggu' },
      { id: 'mp8', title: 'Basic Mixing (EQ)', description: 'Membersihkan frekuensi.', resources: [{ title: 'EQ Cheat Sheet', url: 'https://www.audio-issues.com/music-mixing/eq-chart/', type: 'Guide' }], challenge: 'Cut frekuensi rendah pada instrumen non-bass.', estimatedTime: '1 Minggu' },
      { id: 'mp9', title: 'Compression & Reverb', description: 'Dinamika & Ruang.', resources: [{ title: 'Compression Guide', url: 'https://www.izotope.com/en/learn/compression.html', type: 'Article' }], challenge: 'Berikan ruang pada drum dan vokal.', estimatedTime: '1 Minggu' },
      { id: 'mp10', title: 'Finalizing', description: 'Export & Share.', resources: [{ title: 'SoundCloud Upload', url: 'https://help.soundcloud.com/', type: 'Docs' }], challenge: 'Upload karyamu ke SoundCloud.', estimatedTime: '1 Minggu' }
    ],
    traps: ['Terlalu banyak plugin (Gear Acquisition Syndrome).', 'Loopitis (terjebak di 8 bar loop).']
  },
  {
    id: 'podcasting-audio',
    title: 'Podcasting 101: Dari Ide ke Spotify',
    category: Category.CREATIVE,
    difficulty: Difficulty.BEGINNER,
    duration: '6-8 Minggu',
    purpose: 'Suara adalah media intim. Bangun audiens melalui cerita audio dan wawancara.',
    outcome: 'Memiliki podcast yang live di Spotify/Apple dengan kualitas audio standar broadcast.',
    prerequisites: ['Mic (HP/USB)'],
    steps: [
      { id: 'pod1', title: 'Concept & Format', description: 'Solo, Interview, atau Storytelling?', resources: [{ title: 'Podcast Formats', url: 'https://www.thepodcasthost.com/', type: 'Article' }], challenge: 'Tentukan nama & topik podcast.', estimatedTime: '1 Minggu' },
      { id: 'pod2', title: 'Audience Persona', description: 'Siapa pendengarmu?', resources: [{ title: 'Avatar Pendengar', url: 'https://improvepodcast.com/', type: 'Guide' }], challenge: 'Tulis profil pendengar ideal.', estimatedTime: '1 Minggu' },
      { id: 'pod3', title: 'Equipment Setup', description: 'Mic, Pop filter, Ruangan.', resources: [{ title: 'Gear Guide', url: 'https://kit.co/', type: 'Tool' }], challenge: 'Siapkan "studio" lemari baju (peredam).', estimatedTime: '1 Minggu' },
      { id: 'pod4', title: 'Recording Techniques', description: 'Mic technique, gain staging.', resources: [{ title: 'Mic Technique', url: 'https://training.npr.org/', type: 'Guide' }], challenge: 'Rekam tes suara 5 menit.', estimatedTime: '1 Minggu' },
      { id: 'pod5', title: 'Interview Skills', description: 'Pertanyaan yang menggali.', resources: [{ title: 'Interviewing Tips', url: 'https://transom.org/', type: 'Article' }], challenge: 'Latihan wawancara teman.', estimatedTime: '1 Minggu' },
      { id: 'pod6', title: 'Audio Editing (Audacity)', description: 'Cut, noise reduction, music.', resources: [{ title: 'Audacity Tutorial', url: 'https://manual.audacityteam.org/', type: 'Docs' }], challenge: 'Edit rekaman tes, hapus "umm/ahh".', estimatedTime: '1 Minggu' },
      { id: 'pod7', title: 'Intro & Outro', description: 'Sonic branding.', resources: [{ title: 'Royalty Free Music', url: 'https://freemusicarchive.org/', type: 'Tool' }], challenge: 'Produksi intro musik 15 detik.', estimatedTime: '1 Minggu' },
      { id: 'pod8', title: 'Cover Art Design', description: 'Visual di app podcast.', resources: [{ title: 'Cover Art Specs', url: 'https://help.spotify.com/', type: 'Docs' }], challenge: 'Desain cover 3000x3000px.', estimatedTime: '1 Minggu' },
      { id: 'pod9', title: 'Hosting & RSS', description: 'Anchor/Spotify for Podcasters.', resources: [{ title: 'Podcast Hosting', url: 'https://podcasters.spotify.com/', type: 'Tool' }], challenge: 'Upload episode trailer.', estimatedTime: '1 Minggu' },
      { id: 'pod10', title: 'Launch Strategy', description: 'Promosi rilis.', resources: [{ title: 'Launch Plan', url: 'https://buffer.com/', type: 'Article' }], challenge: 'Share link Spotify ke sosmed.', estimatedTime: '1 Minggu' }
    ],
    traps: ['Suara bergema (echo).', 'Tidak konsisten upload.']
  },
  {
    id: 'photography-basics',
    title: 'Photography: Seni Menangkap Cahaya',
    category: Category.CREATIVE,
    difficulty: Difficulty.BEGINNER,
    duration: '6-8 Minggu',
    purpose: 'Fotografi bukan tentang kamera mahal, tapi mata yang terlatih.',
    outcome: 'Menguasai mode manual dan komposisi.',
    prerequisites: ['Kamera/HP'],
    steps: [
      { id: 'ph1', title: 'Exposure Triangle', description: 'ISO, Aperture, Shutter.', resources: [{ title: 'Exposure Guide', url: 'https://expertphotography.com/', type: 'Article' }], challenge: 'Foto dengan brightness beda via Shutter.', estimatedTime: '1 Minggu' },
      { id: 'ph2', title: 'Aperture (Bokeh)', description: 'Depth of field.', resources: [{ title: 'Aperture', url: 'https://www.adobe.com/', type: 'Article' }], challenge: 'Foto background blur.', estimatedTime: '1 Minggu' },
      { id: 'ph3', title: 'Shutter Speed', description: 'Freeze vs Motion.', resources: [{ title: 'Shutter Speed', url: 'https://photographylife.com/', type: 'Article' }], challenge: 'Foto panning kendaraan.', estimatedTime: '1 Minggu' },
      { id: 'ph4', title: 'ISO & Noise', description: 'Low light photography.', resources: [{ title: 'ISO Explained', url: 'https://www.nikonusa.com/', type: 'Article' }], challenge: 'Bandingkan noise ISO tinggi vs rendah.', estimatedTime: '1 Minggu' },
      { id: 'ph5', title: 'Composition', description: 'Rule of Thirds.', resources: [{ title: 'Composition Rules', url: 'https://petapixel.com/', type: 'Article' }], challenge: '5 foto dengan komposisi beda.', estimatedTime: '1 Minggu' },
      { id: 'ph6', title: 'Lighting', description: 'Golden Hour.', resources: [{ title: 'Natural Light', url: 'https://www.masterclass.com/', type: 'Article' }], challenge: 'Foto jam 12 vs jam 5 sore.', estimatedTime: '1 Minggu' },
      { id: 'ph7', title: 'Focus', description: 'Manual vs Auto.', resources: [{ title: 'Focus Modes', url: 'https://photographylife.com/', type: 'Article' }], challenge: 'Foto makro tajam.', estimatedTime: '1 Minggu' },
      { id: 'ph8', title: 'White Balance', description: 'Suhu warna.', resources: [{ title: 'WB Guide', url: 'https://www.exposureguide.com/', type: 'Article' }], challenge: 'Ubah WB jadi biru/kuning.', estimatedTime: '1 Minggu' },
      { id: 'ph9', title: 'Editing (Lightroom)', description: 'Color grading.', resources: [{ title: 'Lightroom Basics', url: 'https://www.adobe.com/', type: 'Video' }], challenge: 'Edit foto RAW.', estimatedTime: '1 Minggu' },
      { id: 'ph10', title: 'Your Style', description: 'Menemukan karakter.', resources: [{ title: 'Photo Style', url: 'https://expertphotography.com/', type: 'Article' }], challenge: 'Buat mini portfolio.', estimatedTime: '1 Minggu' }
    ],
    traps: ['Terobsesi gear baru.', 'Edit berlebihan (oversaturated).']
  },

  // ==========================================
  // CATEGORY: PRACTICAL LIFE SKILLS
  // ==========================================
  {
    id: 'effective-communication',
    title: 'Communication: Bicara & Mendengar',
    category: Category.LIFE,
    difficulty: Difficulty.BEGINNER,
    duration: '6-8 Minggu',
    purpose: 'Skill #1 untuk karir dan hubungan. Menjadi pendengar aktif dan pembicara asertif.',
    outcome: 'Percaya diri presentasi dan menyelesaikan konflik.',
    prerequisites: ['Niat'],
    steps: [
      { id: 'ec1', title: 'Active Listening', description: 'Mendengar untuk paham.', resources: [{ title: 'Listening Skills', url: 'https://www.mindtools.com/', type: 'Article' }], challenge: 'Ulangi poin lawan bicara.', estimatedTime: '1 Minggu' },
      { id: 'ec2', title: 'Body Language', description: 'Non-verbal cues.', resources: [{ title: 'Body Language', url: 'https://www.scienceofpeople.com/', type: 'Article' }], challenge: 'Rekam postur bicaramu.', estimatedTime: '1 Minggu' },
      { id: 'ec3', title: 'Small Talk', description: 'Memulai percakapan.', resources: [{ title: 'Small Talk Guide', url: 'https://www.nytimes.com/', type: 'Article' }], challenge: 'Sapa 1 orang asing.', estimatedTime: '1 Minggu' },
      { id: 'ec4', title: 'Clarity', description: 'Bicara padat jelas.', resources: [{ title: 'Concise Speaking', url: 'https://hbr.org/', type: 'Article' }], challenge: 'Jelaskan kerjaanmu dalam 3 kalimat.', estimatedTime: '1 Minggu' },
      { id: 'ec5', title: 'Public Speaking', description: 'Mengatasi grogi.', resources: [{ title: 'TED Talks Secrets', url: 'https://www.ted.com/', type: 'Video' }], challenge: 'Presentasi 3 menit di cermin.', estimatedTime: '1 Minggu' },
      { id: 'ec6', title: 'Storytelling', description: 'Hero Journey.', resources: [{ title: 'Pixar Rules', url: 'https://medium.com/', type: 'Article' }], challenge: 'Ceritakan satu kegagalanmu.', estimatedTime: '1 Minggu' },
      { id: 'ec7', title: 'Assertiveness', description: 'Berkata "Tidak".', resources: [{ title: 'Assertiveness', url: 'https://www.mayoclinic.org/', type: 'Article' }], challenge: 'Tolak satu permintaan sopan.', estimatedTime: '1 Minggu' },
      { id: 'ec8', title: 'Feedback', description: 'Memberi kritik.', resources: [{ title: 'Sandwich Method', url: 'https://www.verywellmind.com/', type: 'Article' }], challenge: 'Minta feedback jujur.', estimatedTime: '1 Minggu' },
      { id: 'ec9', title: 'Conflict', description: 'Resolusi masalah.', resources: [{ title: 'Conflict Resolution', url: 'https://www.helpguide.org/', type: 'Guide' }], challenge: 'Analisis konflik masa lalu.', estimatedTime: '1 Minggu' },
      { id: 'ec10', title: 'Negotiation', description: 'Win-win solution.', resources: [{ title: 'Negotiation', url: 'https://www.pon.harvard.edu/', type: 'Article' }], challenge: 'Negosiasi tugas rumah/kerja.', estimatedTime: '1 Minggu' }
    ],
    traps: ['Menyiapkan jawaban saat orang lain bicara.', 'Defensif saat dikritik.']
  },
  {
    id: 'time-focus-management',
    title: 'Time Management: Produktivitas Radikal',
    category: Category.LIFE,
    difficulty: Difficulty.BEGINNER,
    duration: '4-6 Minggu',
    purpose: 'Fokus adalah mata uang baru. Selesaikan lebih banyak dalam waktu singkat.',
    outcome: 'Sistem produktivitas pribadi anti-burnout.',
    prerequisites: ['Kalender'],
    steps: [
      { id: 'tf1', title: 'Time Audit', description: 'Lacak waktumu.', resources: [{ title: 'Toggl Track', url: 'https://toggl.com/', type: 'Tool' }], challenge: 'Log aktivitas 3 hari.', estimatedTime: '1 Minggu' },
      { id: 'tf2', title: 'Pomodoro', description: 'Fokus 25 menit.', resources: [{ title: 'Pomofocus', url: 'https://pomofocus.io/', type: 'Tool' }], challenge: '4 sesi pomodoro.', estimatedTime: '1 Minggu' },
      { id: 'tf3', title: 'Eisenhower Matrix', description: 'Penting vs Mendesak.', resources: [{ title: 'Prioritization', url: 'https://todoist.com/', type: 'Article' }], challenge: 'Hapus tugas kuadran 4.', estimatedTime: '1 Minggu' },
      { id: 'tf4', title: 'Deep Work', description: 'Kerja tanpa distraksi.', resources: [{ title: 'Deep Work', url: 'https://calnewport.com/', type: 'Book' }], challenge: '90 menit mode pesawat.', estimatedTime: '1 Minggu' },
      { id: 'tf5', title: 'Time Blocking', description: 'Jadwal di kalender.', resources: [{ title: 'Calendar Blocking', url: 'https://google.com/calendar', type: 'Tool' }], challenge: 'Blok semua jam besok.', estimatedTime: '1 Minggu' },
      { id: 'tf6', title: 'Energy Mgmt', description: 'Chronotype.', resources: [{ title: 'Sleep Doctor', url: 'https://thesleepdoctor.com/', type: 'Quiz' }], challenge: 'Kerja berat saat energi puncak.', estimatedTime: '1 Minggu' },
      { id: 'tf7', title: 'Digital Detox', description: 'Kurangi screentime.', resources: [{ title: 'Digital Minimalism', url: 'https://humanetech.com/', type: 'Guide' }], challenge: 'Hapus 1 sosmed 24 jam.', estimatedTime: '1 Hari' },
      { id: 'tf8', title: '2-Minute Rule', description: 'Anti nunda.', resources: [{ title: 'GTD Basics', url: 'https://gettingthingsdone.com/', type: 'Article' }], challenge: 'Selesaikan tugas kecil sekarang.', estimatedTime: '1 Minggu' },
      { id: 'tf9', title: 'Batching', description: 'Kelompokkan tugas.', resources: [{ title: 'Task Batching', url: 'https://asana.com/', type: 'Article' }], challenge: 'Cek email cuma 2x sehari.', estimatedTime: '1 Minggu' },
      { id: 'tf10', title: 'Weekly Review', description: 'Evaluasi mingguan.', resources: [{ title: 'Weekly Review', url: 'https://fortelabs.com/', type: 'Guide' }], challenge: 'Review Minggu sore.', estimatedTime: '1 Minggu' }
    ],
    traps: ['Multitasking (mitos).', 'Sibuk tapi tidak produktif.']
  },
  {
    id: 'emotional-intelligence',
    title: 'Emotional Intelligence (EQ): Mengelola Emosi',
    category: Category.LIFE,
    difficulty: Difficulty.INTERMEDIATE,
    duration: '8-10 Minggu',
    purpose: 'EQ menyumbang 58% kinerja profesional. Pelajari cara mengenali dan mengelola emosi diri dan orang lain.',
    outcome: 'Hubungan interpersonal yang lebih baik, stres berkurang, dan kepemimpinan yang empatik.',
    prerequisites: ['Self-reflection'],
    steps: [
      { id: 'eq1', title: 'Self-Awareness', description: 'Menamai emosi.', resources: [{ title: 'Emotion Wheel', url: 'https://humansystems.co/emotionwheels/', type: 'Tool' }], challenge: 'Jurnal emosi 3x sehari selama seminggu.', estimatedTime: '1 Minggu' },
      { id: 'eq2', title: 'Identifying Triggers', description: 'Apa yang memancing amarahmu?', resources: [{ title: 'Emotional Triggers', url: 'https://www.psychologytoday.com/', type: 'Article' }], challenge: 'Catat momen kamu "meledak" minggu ini.', estimatedTime: '1 Minggu' },
      { id: 'eq3', title: 'Self-Regulation', description: 'Jeda sebelum respon.', resources: [{ title: 'Box Breathing', url: 'https://health.clevelandclinic.org/', type: 'Guide' }], challenge: 'Tarik napas 4 detik saat kesal.', estimatedTime: '1 Minggu' },
      { id: 'eq4', title: 'Intrinsic Motivation', description: 'Dorongan dari dalam.', resources: [{ title: 'Drive by Daniel Pink', url: 'https://www.danpink.com/', type: 'Book' }], challenge: 'Tulis "Why" terbesar hidupmu.', estimatedTime: '1 Minggu' },
      { id: 'eq5', title: 'Cognitive Empathy', description: 'Memahami perspektif orang.', resources: [{ title: 'Empathy Map', url: 'https://gamestorming.com/', type: 'Tool' }], challenge: 'Tebak perasaan teman dari ekspresinya.', estimatedTime: '1 Minggu' },
      { id: 'eq6', title: 'Emotional Empathy', description: 'Merasakan apa yang orang rasa.', resources: [{ title: 'Building Empathy', url: 'https://greatergood.berkeley.edu/', type: 'Article' }], challenge: 'Dengarkan curhat tanpa menghakimi.', estimatedTime: '1 Minggu' },
      { id: 'eq7', title: 'Social Skills', description: 'Membangun rapport.', resources: [{ title: 'Social Intelligence', url: 'https://socialintelligence.lab.uconn.edu/', type: 'Docs' }], challenge: 'Beri pujian tulus pada 3 orang.', estimatedTime: '1 Minggu' },
      { id: 'eq8', title: 'Active Listening (EQ)', description: 'Mendengar yang tak terucap.', resources: [{ title: 'Nonverbal Comm', url: 'https://www.helpguide.org/', type: 'Article' }], challenge: 'Perhatikan nada suara lawan bicara.', estimatedTime: '1 Minggu' },
      { id: 'eq9', title: 'Conflict Mgmt', description: 'Resolusi tenang.', resources: [{ title: 'Crucial Conversations', url: 'https://cruciallearning.com/', type: 'Book' }], challenge: 'Gunakan kata "Saya merasa" bukan "Kamu".', estimatedTime: '1 Minggu' },
      { id: 'eq10', title: 'Relationship Building', description: 'Networking otentik.', resources: [{ title: 'How to Win Friends', url: 'https://fs.blog/', type: 'Summary' }], challenge: 'Hubungi teman lama hanya untuk menyapa.', estimatedTime: '1 Minggu' }
    ],
    traps: ['Menekan emosi (bukan mengelola).', 'Menggunakan empati untuk manipulasi.']
  },
  {
    id: 'home-maintenance',
    title: 'Home Maintenance & DIY',
    category: Category.LIFE,
    difficulty: Difficulty.BEGINNER,
    duration: '8-10 Minggu',
    purpose: 'Berhenti bergantung pada tukang untuk hal kecil. Perbaiki keran bocor, cat dinding, dan rakit furnitur sendiri.',
    outcome: 'Mampu menangani perbaikan rumah dasar dan menggunakan power tools dengan aman.',
    prerequisites: ['Toolbox Dasar'],
    steps: [
      { id: 'hm1', title: 'Toolbox Essentials', description: 'Palu, Obeng, Tang, Kunci Inggris.', resources: [{ title: 'Basic Toolkit', url: 'https://www.familyhandyman.com/list/basic-tools-every-homeowner-should-own/', type: 'List' }], challenge: 'Lengkapi kotak perkakas dasar.', estimatedTime: '1 Minggu' },
      { id: 'hm2', title: 'Power Drill Basics', description: 'Bor dinding & pasang fischer.', resources: [{ title: 'How to Use a Drill', url: 'https://www.youtube.com/watch?v=yYw7Q0j7h0Y', type: 'Video' }], challenge: 'Pasang rak dinding lurus (waterpass).', estimatedTime: '1 Minggu' },
      { id: 'hm3', title: 'Plumbing Basics', description: 'Mengganti seal keran bocor.', resources: [{ title: 'Fix Leaky Faucet', url: 'https://www.thisoldhouse.com/plumbing/21016335/how-to-fix-a-dripping-faucet', type: 'Guide' }], challenge: 'Bongkar pasang keran air.', estimatedTime: '1 Minggu' },
      { id: 'hm4', title: 'Unclogging Drains', description: 'Membersihkan saluran mampet.', resources: [{ title: 'Unclog Drain', url: 'https://www.youtube.com/watch?v=uVCe6McAEHQ', type: 'Video' }], challenge: 'Bersihkan leher angsa wastafel.', estimatedTime: '1 Minggu' },
      { id: 'hm5', title: 'Painting Walls', description: 'Persiapan & Teknik Roll.', resources: [{ title: 'Paint Like a Pro', url: 'https://www.benjaminmoore.com/en-us/interior-exterior-paints-stains/how-to-advice/painting-101/how-to-paint-a-wall', type: 'Guide' }], challenge: 'Cat ulang satu sisi tembok kamar.', estimatedTime: '1 Minggu' },
      { id: 'hm6', title: 'Electrical Safety', description: 'Ganti stop kontak & saklar.', resources: [{ title: 'Wiring Outlet', url: 'https://www.artofmanliness.com/skills/how-to/how-to-replace-a-light-switch/', type: 'Article' }], challenge: 'Ganti saklar lampu (Matikan MCB!).', estimatedTime: '1 Minggu' },
      { id: 'hm7', title: 'Drywall Repair', description: 'Tambal lubang paku.', resources: [{ title: 'Patch Drywall', url: 'https://www.lowes.com/n/how-to/patch-and-repair-drywall', type: 'Guide' }], challenge: 'Tambal lubang bekas paku di tembok.', estimatedTime: '1 Minggu' },
      { id: 'hm8', title: 'Furniture Assembly', description: 'Membaca manual IKEA.', resources: [{ title: 'Assembly Tips', url: 'https://www.ikea.com/', type: 'Docs' }], challenge: 'Rakit/bongkar satu furnitur.', estimatedTime: '1 Minggu' },
      { id: 'hm9', title: 'Caulking & Sealing', description: 'Lem silikon kaca/kamar mandi.', resources: [{ title: 'How to Caulk', url: 'https://www.youtube.com/watch?v=FjSq09J2JmM', type: 'Video' }], challenge: 'Re-seal pinggiran wastafel.', estimatedTime: '1 Minggu' },
      { id: 'hm10', title: 'Emergency Shutoffs', description: 'Tahu lokasi keran utama air/listrik.', resources: [{ title: 'Home Emergency', url: 'https://www.statefarm.com/simple-insights/residence/how-to-shut-off-utilities', type: 'Guide' }], challenge: 'Labeli panel listrik dan keran utama.', estimatedTime: '1 Minggu' }
    ],
    traps: ['Tidak mematikan listrik saat kerja.', 'Menggunakan alat yang salah (merusak baut).']
  },
  {
    id: 'first-aid-basics',
    title: 'First Aid & Emergency Preparedness',
    category: Category.LIFE,
    difficulty: Difficulty.BEGINNER,
    duration: '6-8 Minggu',
    purpose: 'Jadilah pahlawan di situasi kritis. Pengetahuan ini menyelamatkan nyawa.',
    outcome: 'Sertifikasi CPR dasar (simulasi) dan tas siaga bencana.',
    prerequisites: ['Ketenangan'],
    steps: [
      { id: 'fa1', title: 'Emergency Numbers', description: 'Siapa yang ditelepon?', resources: [{ title: 'Emergency Contacts', url: 'https://www.redcross.org/', type: 'List' }], challenge: 'Simpan nomor RS/Polisi terdekat di speed dial.', estimatedTime: '1 Minggu' },
      { id: 'fa2', title: 'CPR Basics', description: 'Resusitasi Jantung Paru.', resources: [{ title: 'Hands-only CPR', url: 'https://www.youtube.com/watch?v=-YqemWO6p_U', type: 'Video' }], challenge: 'Latihan kompresi dada di bantal.', estimatedTime: '1 Minggu' },
      { id: 'fa3', title: 'Wound Care', description: 'Pendarahan & Perban.', resources: [{ title: 'Stop Bleeding', url: 'https://www.mayoclinic.org/first-aid/first-aid-severe-bleeding/basics/art-20056661', type: 'Guide' }], challenge: 'Praktek membalut luka tekan.', estimatedTime: '1 Minggu' },
      { id: 'fa4', title: 'Burns Treatment', description: 'Luka bakar derajat 1 & 2.', resources: [{ title: 'Burns First Aid', url: 'https://www.nhs.uk/conditions/burns-and-scalds/treatment/', type: 'Article' }], challenge: 'Hafalkan: Dinginkan air mengalir 20 menit.', estimatedTime: '1 Minggu' },
      { id: 'fa5', title: 'Choking (Heimlich)', description: 'Tersedak.', resources: [{ title: 'Heimlich Maneuver', url: 'https://medlineplus.gov/ency/article/000047.htm', type: 'Guide' }], challenge: 'Simulasi posisi Heimlich pada kursi.', estimatedTime: '1 Minggu' },
      { id: 'fa6', title: 'Shock & Faint', description: 'Penanganan pingsan.', resources: [{ title: 'Shock First Aid', url: 'https://www.sja.org.uk/get-advice/first-aid-advice/shock/', type: 'Article' }], challenge: 'Posisi kaki lebih tinggi (Trendelenburg).', estimatedTime: '1 Minggu' },
      { id: 'fa7', title: 'Fractures & Sprains', description: 'Patah tulang & Keseleo (RICE).', resources: [{ title: 'RICE Method', url: 'https://www.webmd.com/first-aid/rice-method-injuries', type: 'Article' }], challenge: 'Lakukan bebat (splint) sederhana.', estimatedTime: '1 Minggu' },
      { id: 'fa8', title: 'Disaster Kit (Go-Bag)', description: 'Tas siaga bencana.', resources: [{ title: 'Build A Kit', url: 'https://www.ready.gov/kit', type: 'Checklist' }], challenge: 'Siapkan tas berisi dokumen & logistik 3 hari.', estimatedTime: '1 Minggu' },
      { id: 'fa9', title: 'Fire Safety', description: 'APAR & Jalur Evakuasi.', resources: [{ title: 'Fire Extinguisher PASS', url: 'https://www.osha.gov/SLTC/etools/evacuation/portable_use.html', type: 'Guide' }], challenge: 'Cek tanggal kadaluarsa APAR rumah/kantor.', estimatedTime: '1 Minggu' },
      { id: 'fa10', title: 'Mental Health First Aid', description: 'Serangan panik.', resources: [{ title: 'Panic Attack Help', url: 'https://www.mind.org.uk/', type: 'Article' }], challenge: 'Teknik grounding untuk teman panik.', estimatedTime: '1 Minggu' }
    ],
    traps: ['Panik saat kejadian.', 'Memberi mentega pada luka bakar (Mitos).']
  },
  {
    id: 'personal-branding',
    title: 'Personal Branding for Career',
    category: Category.LIFE,
    difficulty: Difficulty.INTERMEDIATE,
    duration: '8-10 Minggu',
    purpose: 'Karir bukan cuma soal kerja keras, tapi siapa yang tahu kerjamu. Bangun reputasi profesional online.',
    outcome: 'Profil LinkedIn All-Star dan website portofolio pribadi.',
    prerequisites: ['LinkedIn Account'],
    steps: [
      { id: 'pb1', title: 'Brand Audit', description: 'Apa kata Google tentangmu?', resources: [{ title: 'Online Presence Audit', url: 'https://buffer.com/library/social-media-audit/', type: 'Guide' }], challenge: 'Googling namamu sendiri & bersihkan jejak buruk.', estimatedTime: '1 Minggu' },
      { id: 'pb2', title: 'Value Proposition', description: 'Apa keunikanmu?', resources: [{ title: 'Personal UVP', url: 'https://www.forbes.com/', type: 'Article' }], challenge: 'Tulis kalimat: "Saya membantu X mencapai Y dengan Z".', estimatedTime: '1 Minggu' },
      { id: 'pb3', title: 'LinkedIn Optimization', description: 'Banner, Headline, About.', resources: [{ title: 'LinkedIn Profile Tips', url: 'https://business.linkedin.com/talent-solutions/blog/linkedin-best-practices/2016/7-linkedin-profile-tips-to-help-you-stand-out', type: 'Guide' }], challenge: 'Update headline agar benefit-oriented.', estimatedTime: '1 Minggu' },
      { id: 'pb4', title: 'Content Strategy', description: 'Sharing knowledge.', resources: [{ title: 'Content Pillars', url: 'https://www.garyvaynerchuk.com/', type: 'Article' }], challenge: 'Posting 1 insight industri di LinkedIn.', estimatedTime: '1 Minggu' },
      { id: 'pb5', title: 'Networking', description: 'Koneksi bermakna.', resources: [{ title: 'Networking Templates', url: 'https://hbr.org/2018/05/how-to-network-when-you-hate-networking', type: 'Article' }], challenge: 'Kirim pesan koneksi personal ke 5 orang.', estimatedTime: '1 Minggu' },
      { id: 'pb6', title: 'Public Speaking (Online)', description: 'Webinar/Live.', resources: [{ title: 'Virtual Speaking', url: 'https://www.toastmasters.org/', type: 'Guide' }], challenge: 'Buat video perkenalan diri 1 menit.', estimatedTime: '1 Minggu' },
      { id: 'pb7', title: 'Portfolio Website', description: 'Rumah digitalmu.', resources: [{ title: 'Carrd / Linktree', url: 'https://carrd.co/', type: 'Tool' }], challenge: 'Buat landing page sederhana link biografi.', estimatedTime: '1 Minggu' },
      { id: 'pb8', title: 'Social Proof', description: 'Testimoni & Endorsement.', resources: [{ title: 'Asking for Recommendations', url: 'https://www.themuse.com/', type: 'Article' }], challenge: 'Minta 2 rekomendasi LinkedIn dari rekan kerja.', estimatedTime: '1 Minggu' },
      { id: 'pb9', title: 'Writing Articles', description: 'Thought Leadership.', resources: [{ title: 'Medium Writing', url: 'https://medium.com/creators', type: 'Guide' }], challenge: 'Tulis 1 artikel opini tentang industrimu.', estimatedTime: '1 Minggu' },
      { id: 'pb10', title: 'Consistency System', description: 'Jadwal posting.', resources: [{ title: 'Content Calendar', url: 'https://trello.com/', type: 'Tool' }], challenge: 'Jadwalkan konten untuk bulan depan.', estimatedTime: '1 Minggu' }
    ],
    traps: ['Humblebragging (Pamer terselubung).', 'Inkonsisten (Posting sekali lalu hilang setahun).']
  },

  // ==========================================
  // CATEGORY: HOBBY & LIFESTYLE
  // ==========================================
  {
    id: 'learning-meta-learning',
    title: 'Learning How to Learn: Belajar Efektif',
    category: Category.LIFE,
    difficulty: Difficulty.BEGINNER,
    duration: '4-6 Minggu',
    purpose: 'Abad 21 butuh pembelajar cepat. Jangan belajar keras, belajarlah cerdas dengan neuroscience.',
    outcome: 'Mampu mempelajari skill baru 2x lebih cepat dan mengingat informasi lebih lama.',
    prerequisites: ['Otak'],
    steps: [
      { id: 'll1', title: 'Focused vs Diffuse Mode', description: 'Dua mode otak.', resources: [{ title: 'Barbara Oakley Course', url: 'https://www.coursera.org/learn/learning-how-to-learn', type: 'Course' }], challenge: 'Jalan kaki setelah sesi belajar berat.', estimatedTime: '1 Minggu' },
      { id: 'll2', title: 'Active Recall', description: 'Menguji diri sendiri.', resources: [{ title: 'Active Recall Guide', url: 'https://aliabdaal.com/', type: 'Article' }], challenge: 'Tutup buku dan tulis apa yang diingat.', estimatedTime: '1 Minggu' },
      { id: 'll3', title: 'Spaced Repetition', description: 'Melawan lupa.', resources: [{ title: 'Anki App', url: 'https://apps.ankiweb.net/', type: 'Tool' }], challenge: 'Buat flashcard materi baru.', estimatedTime: '1 Minggu' },
      { id: 'll4', title: 'Feynman Technique', description: 'Belajar dengan mengajar.', resources: [{ title: 'Feynman Method', url: 'https://fs.blog/feynman-technique/', type: 'Article' }], challenge: 'Jelaskan konsep sulit ke anak 5 tahun.', estimatedTime: '1 Minggu' },
      { id: 'll5', title: 'Interleaving', description: 'Campur materi.', resources: [{ title: 'Interleaving Study', url: 'https://www.scientificamerican.com/', type: 'Article' }], challenge: 'Pelajari 2 topik berbeda bergantian.', estimatedTime: '1 Minggu' },
      { id: 'll6', title: 'Pomodoro for Study', description: 'Manajemen stamina otak.', resources: [{ title: 'Study Timer', url: 'https://pomofocus.io/', type: 'Tool' }], challenge: '4 sesi belajar intens.', estimatedTime: '1 Minggu' },
      { id: 'll7', title: 'Mnemonic Devices', description: 'Jembatan keledai.', resources: [{ title: 'Memory Palace', url: 'https://artofmemory.com/', type: 'Guide' }], challenge: 'Hafalkan daftar belanja dengan cerita.', estimatedTime: '1 Minggu' },
      { id: 'll8', title: 'Sleep & Learning', description: 'Konsolidasi memori.', resources: [{ title: 'Why We Sleep', url: 'https://www.sleepfoundation.org/', type: 'Article' }], challenge: 'Tidur 8 jam setelah belajar hal baru.', estimatedTime: '1 Minggu' },
      { id: 'll9', title: 'Procrastination', description: 'Menangani rasa sakit belajar.', resources: [{ title: 'Eat That Frog', url: 'https://briantracy.com/', type: 'Book' }], challenge: 'Mulai tugas tersulit pagi hari.', estimatedTime: '1 Minggu' },
      { id: 'll10', title: 'Deliberate Practice', description: 'Latihan di batas kemampuan.', resources: [{ title: 'Peak by Ericsson', url: 'https://jamesclear.com/', type: 'Summary' }], challenge: 'Fokus perbaiki 1 kelemahan spesifik.', estimatedTime: '1 Minggu' }
    ],
    traps: ['Rereading (baca ulang) dianggap belajar.', 'Highlighting berlebihan.']
  },
  {
    id: 'culinary-fundamentals',
    title: 'Culinary Arts: Masak Rumahan Pro',
    category: Category.HOBBY,
    difficulty: Difficulty.BEGINNER,
    duration: '8-10 Minggu',
    purpose: 'Hemat uang dan makan sehat. Kuasai teknik, bukan resep.',
    outcome: 'Bisa masak tanpa resep kaku.',
    prerequisites: ['Dapur standar'],
    steps: [
      { id: 'cf1', title: 'Mise en Place', description: 'Persiapan bahan.', resources: [{ title: 'Kitchen Safety', url: 'https://www.youtube.com/', type: 'Video' }], challenge: 'Siapkan semua bahan sebelum nyalakan api.', estimatedTime: '1 Minggu' },
      { id: 'cf2', title: 'Knife Skills', description: 'Potong aman & cepat.', resources: [{ title: 'Gordon Ramsay Knife', url: 'https://www.youtube.com/', type: 'Video' }], challenge: 'Potong dadu bawang bombay.', estimatedTime: '1 Minggu' },
      { id: 'cf3', title: 'Flavor Balance', description: 'Salt, Fat, Acid, Heat.', resources: [{ title: 'SFAH Book', url: 'https://www.saltfatacidheat.com/', type: 'Docs' }], challenge: 'Koreksi rasa sup tawar.', estimatedTime: '1 Minggu' },
      { id: 'cf4', title: 'Pan Searing', description: 'Maillard reaction.', resources: [{ title: 'Perfect Steak', url: 'https://seriouseats.com/', type: 'Article' }], challenge: 'Masak ayam kecokelatan.', estimatedTime: '1 Minggu' },
      { id: 'cf5', title: 'Braising', description: 'Masak lambat.', resources: [{ title: 'Braising Guide', url: 'https://bonappetit.com/', type: 'Article' }], challenge: 'Masak semur daging empuk.', estimatedTime: '1 Minggu' },
      { id: 'cf6', title: 'Sauces', description: 'Béchamel, Tomato.', resources: [{ title: 'Mother Sauces', url: 'https://foodandwine.com/', type: 'Article' }], challenge: 'Buat saus pasta sendiri.', estimatedTime: '1 Minggu' },
      { id: 'cf7', title: 'Rice & Pasta', description: 'Tekstur sempurna.', resources: [{ title: 'How to Cook Rice', url: 'https://justonecookbook.com/', type: 'Guide' }], challenge: 'Masak nasi pulen & pasta al dente.', estimatedTime: '1 Minggu' },
      { id: 'cf8', title: 'Vegetables', description: 'Tetap hijau & renyah.', resources: [{ title: 'Blanching', url: 'https://thespruceeats.com/', type: 'Article' }], challenge: 'Tumis sayur warna cerah.', estimatedTime: '1 Minggu' },
      { id: 'cf9', title: 'Plating', description: 'Makan dengan mata.', resources: [{ title: 'Plating Tips', url: 'https://michelin.com/', type: 'Article' }], challenge: 'Tata makanan ala resto.', estimatedTime: '1 Minggu' },
      { id: 'cf10', title: 'Improv Cooking', description: 'Masak sisa kulkas.', resources: [{ title: 'No Recipe', url: 'https://nytimes.com/', type: 'Guide' }], challenge: 'Masak dari bahan sisa.', estimatedTime: '1 Minggu' }
    ],
    traps: ['Pisau tumpul.', 'Wajan belum panas.']
  },
  {
    id: 'drawing-sketching',
    title: 'Sketching: Belajar Menggambar',
    category: Category.HOBBY,
    difficulty: Difficulty.BEGINNER,
    duration: '8-10 Minggu',
    purpose: 'Semua orang bisa menggambar. Ini bukan bakat, tapi keterampilan observasi.',
    outcome: 'Mampu menggambar objek nyata dengan proporsi dan shading yang benar.',
    prerequisites: ['Kertas & Pensil'],
    steps: [
      { id: 'dr1', title: 'Lines & Control', description: 'Melatih motorik tangan.', resources: [{ title: 'Drawabox Lesson 1', url: 'https://drawabox.com/', type: 'Course' }], challenge: 'Penuhi 1 kertas dengan garis lurus.', estimatedTime: '1 Minggu' },
      { id: 'dr2', title: 'Basic Shapes', description: 'Dunia terbuat dari bentuk dasar.', resources: [{ title: 'Constructive Drawing', url: 'https://proko.com/', type: 'Video' }], challenge: 'Gambar benda sekitar dari kotak/bola.', estimatedTime: '1 Minggu' },
      { id: 'dr3', title: 'Perspective 1-Point', description: 'Kedalaman ruang.', resources: [{ title: 'Perspective Basics', url: 'https://mymodernmet.com/', type: 'Article' }], challenge: 'Gambar ruangan kamarmu.', estimatedTime: '1 Minggu' },
      { id: 'dr4', title: 'Perspective 2-Point', description: 'Sudut pandang objek.', resources: [{ title: '2 Point Perspective', url: 'https://youtube.com/', type: 'Video' }], challenge: 'Gambar gedung dari sudut jalan.', estimatedTime: '1 Minggu' },
      { id: 'dr5', title: 'Lighting & Shading', description: 'Volume via cahaya.', resources: [{ title: 'Shading Guide', url: 'https://rapidfireart.com/', type: 'Article' }], challenge: 'Arsir bola agar terlihat 3D.', estimatedTime: '1 Minggu' },
      { id: 'dr6', title: 'Proportions', description: 'Mengukur dengan pensil.', resources: [{ title: 'Sighting Method', url: 'https://artistsnetwork.com/', type: 'Article' }], challenge: 'Gambar botol dengan proporsi tepat.', estimatedTime: '1 Minggu' },
      { id: 'dr7', title: 'Composition', description: 'Rule of Thirds di kertas.', resources: [{ title: 'Composition', url: 'https://conceptartempire.com/', type: 'Article' }], challenge: 'Buat sketsa pemandangan.', estimatedTime: '1 Minggu' },
      { id: 'dr8', title: 'Texture', description: 'Kayu, logam, kain.', resources: [{ title: 'Drawing Textures', url: 'https://thevirtualinstructor.com/', type: 'Guide' }], challenge: 'Gambar tekstur kain kusut.', estimatedTime: '1 Minggu' },
      { id: 'dr9', title: 'Human Face Basics', description: 'Proporsi wajah Loomis.', resources: [{ title: 'Loomis Head', url: 'https://gvaat.com/', type: 'Article' }], challenge: 'Gambar wajah generik.', estimatedTime: '1 Minggu' },
      { id: 'dr10', title: 'Still Life', description: 'Menggabungkan semua.', resources: [{ title: 'Still Life Setup', url: 'https://tate.org.uk/', type: 'Guide' }], challenge: 'Gambar susunan buah di meja.', estimatedTime: '1 Minggu' }
    ],
    traps: ['Menggambar simbol (mata = oval) bukan observasi.', 'Menekan pensil terlalu keras.']
  },
  {
    id: 'meditation-mindfulness',
    title: 'Meditation: Ketenangan Batin',
    category: Category.HOBBY,
    difficulty: Difficulty.BEGINNER,
    duration: '4-6 Minggu',
    purpose: 'Latih otak untuk hadir di masa kini. Kurangi kecemasan dan tingkatkan fokus.',
    outcome: 'Kebiasaan meditasi harian dan kemampuan manajemen stres instan.',
    prerequisites: ['Tempat tenang'],
    steps: [
      { id: 'med1', title: 'Breath Awareness', description: 'Fokus pada napas.', resources: [{ title: 'Headspace Basics', url: 'https://www.headspace.com/', type: 'Guide' }], challenge: 'Meditasi 3 menit fokus napas.', estimatedTime: '1 Minggu' },
      { id: 'med2', title: 'Body Scan', description: 'Relaksasi otot.', resources: [{ title: 'Body Scan Audio', url: 'https://ggia.berkeley.edu/', type: 'Audio' }], challenge: 'Scan tubuh dari kaki ke kepala.', estimatedTime: '1 Minggu' },
      { id: 'med3', title: 'Noteing Technique', description: 'Melabeli pikiran.', resources: [{ title: 'Noteing Practice', url: 'https://www.calm.com/', type: 'Article' }], challenge: 'Labeli gangguan: "Berpikir", "Perasaan".', estimatedTime: '1 Minggu' },
      { id: 'med4', title: 'Walking Meditation', description: 'Mindfulness saat gerak.', resources: [{ title: 'Walking Med', url: 'https://mindful.org/', type: 'Guide' }], challenge: 'Jalan kaki sadar penuh 10 menit.', estimatedTime: '1 Minggu' },
      { id: 'med5', title: 'Loving Kindness', description: 'Metta meditation.', resources: [{ title: 'Metta Guide', url: 'https://greatergood.berkeley.edu/', type: 'Guide' }], challenge: 'Kirim doa baik ke orang yang dibenci.', estimatedTime: '1 Minggu' },
      { id: 'med6', title: 'Mindful Eating', description: 'Makan dengan sadar.', resources: [{ title: 'Mindful Eating', url: 'https://www.healthline.com/', type: 'Article' }], challenge: 'Makan 1x tanpa HP/TV.', estimatedTime: '1 Minggu' },
      { id: 'med7', title: 'Five Senses', description: 'Grounding technique.', resources: [{ title: '5-4-3-2-1 Technique', url: 'https://mayoclinic.org/', type: 'Article' }], challenge: 'Lakukan saat merasa cemas.', estimatedTime: '1 Minggu' },
      { id: 'med8', title: 'Visualization', description: 'Mental imagery.', resources: [{ title: 'Visualization', url: 'https://verywellmind.com/', type: 'Article' }], challenge: 'Visualisasi tempat aman.', estimatedTime: '1 Minggu' },
      { id: 'med9', title: 'Daily Integration', description: 'Mindful saat cuci piring.', resources: [{ title: 'Everyday Mindfulness', url: 'https://psychologytoday.com/', type: 'Article' }], challenge: 'Pilih 1 aktivitas rutin untuk mindful.', estimatedTime: '1 Minggu' },
      { id: 'med10', title: 'Silent Retreat (Mini)', description: 'Diam total.', resources: [{ title: 'Silence Benefits', url: 'https://hbr.org/', type: 'Article' }], challenge: '1 jam tanpa bicara/gadget.', estimatedTime: '1 Minggu' }
    ],
    traps: ['Berusaha "kosongkan pikiran" (mustahil).', 'Marah saat terdistraksi.']
  },
  {
    id: 'gardening-basics',
    title: 'Urban Gardening: Kebun Lahan Sempit',
    category: Category.HOBBY,
    difficulty: Difficulty.BEGINNER,
    duration: '10-12 Minggu',
    purpose: 'Mandiri pangan dan kesehatan mental dari balkon rumah.',
    outcome: 'Panen sayuran sendiri.',
    prerequisites: ['Pot & Matahari'],
    steps: [
      { id: 'gr1', title: 'Sun Mapping', description: 'Cek arah matahari.', resources: [{ title: 'Sun Map', url: 'https://thespruce.com/', type: 'Article' }], challenge: 'Catat jam sinar matahari.', estimatedTime: '1 Minggu' },
      { id: 'gr2', title: 'Soil Mix', description: 'Tanah, Kompos, Sekam.', resources: [{ title: 'Potting Mix', url: 'https://youtube.com/', type: 'Video' }], challenge: 'Buat media tanam poros.', estimatedTime: '1 Minggu' },
      { id: 'gr3', title: 'Seeds', description: 'Semai biji.', resources: [{ title: 'Seed Starting', url: 'https://burpee.com/', type: 'Guide' }], challenge: 'Semai kangkung/bayam.', estimatedTime: '2 Minggu' },
      { id: 'gr4', title: 'Watering', description: 'Jangan overwater.', resources: [{ title: 'Watering Tips', url: 'https://gardeners.com/', type: 'Article' }], challenge: 'Cek tanah pakai jari.', estimatedTime: '1 Minggu' },
      { id: 'gr5', title: 'Containers', description: 'Pot barang bekas.', resources: [{ title: 'Container Ideas', url: 'https://almanac.com/', type: 'Article' }], challenge: 'Buat pot dari botol.', estimatedTime: '1 Minggu' },
      { id: 'gr6', title: 'Fertilizer', description: 'Pupuk organik.', resources: [{ title: 'Organic Fertilizer', url: 'https://www.gardeners.com/how-to/fertilizer-ratios/5161', type: 'Article' }], challenge: 'Buat pupuk cair dari kulit buah.', estimatedTime: '1 Minggu' },
      { id: 'gr7', title: 'Pest Control', description: 'Hama & Penyakit.', resources: [{ title: 'Common Pests', url: 'https://www.almanac.com/pest-and-disease-control', type: 'Guide' }], challenge: 'Identifikasi hama di tanaman sekitar.', estimatedTime: '1 Minggu' },
      { id: 'gr8', title: 'Pruning', description: 'Pemangkasan agar rimbun.', resources: [{ title: 'Pruning Basics', url: 'https://www.provenwinners.com/learn/care/pruning/pruning-basics', type: 'Article' }], challenge: 'Pangkas pucuk tanaman herbal.', estimatedTime: '1 Minggu' },
      { id: 'gr9', title: 'Kitchen Herbs', description: 'Tanam sisa dapur (Regrow).', resources: [{ title: 'Regrow Veggies', url: 'https://www.buzzfeed.com/jesseszewczyk/16-food-scraps-that-you-can-regrow', type: 'Article' }], challenge: 'Tumbuhkan daun bawang dari sisa akar.', estimatedTime: '1 Minggu' },
      { id: 'gr10', title: 'Harvesting', description: 'Panen & Rotasi.', resources: [{ title: 'Harvesting Guide', url: 'https://www.burpee.com/gardenadvicecenter/standard-articles/harvesting/harvesting-vegetables/article10268.html', type: 'Guide' }], challenge: 'Panen hasil tanam (atau microgreens).', estimatedTime: '1 Minggu' }
    ],
    traps: ['Overwatering (menyiram terlalu sering).', 'Pot tanpa lubang drainase.', 'Kurang sinar matahari.']
  },
  {
    id: 'yoga-flexibility',
    title: 'Yoga & Mobility: Tubuh Bebas Nyeri',
    category: Category.HOBBY,
    difficulty: Difficulty.BEGINNER,
    duration: '8-10 Minggu',
    purpose: 'Perbaiki postur dan hilangkan sakit punggung akibat duduk seharian. Yoga untuk pemula (bukan akrobat).',
    outcome: 'Fleksibilitas meningkat (bisa sentuh jari kaki) dan tubuh rileks.',
    prerequisites: ['Matras Yoga'],
    steps: [
      { id: 'yg1', title: 'Breath (Pranayama)', description: 'Napas perut.', resources: [{ title: 'Yoga Breathing', url: 'https://www.yogajournal.com/', type: 'Article' }], challenge: 'Latihan napas perut 5 menit.', estimatedTime: '1 Minggu' },
      { id: 'yg2', title: 'Sun Salutation A', description: 'Pemanasan seluruh tubuh.', resources: [{ title: 'Surya Namaskar', url: 'https://www.youtube.com/watch?v=779fLyWj8bs', type: 'Video' }], challenge: 'Lakukan 5 putaran Sun Salutation.', estimatedTime: '1 Minggu' },
      { id: 'yg3', title: 'Warrior Poses', description: 'Kekuatan kaki.', resources: [{ title: 'Warrior 1, 2, 3', url: 'https://www.doyou.com/', type: 'Guide' }], challenge: 'Tahan Warrior II selama 1 menit.', estimatedTime: '1 Minggu' },
      { id: 'yg4', title: 'Balance', description: 'Tree Pose.', resources: [{ title: 'Balance Tips', url: 'https://www.yogabasics.com/', type: 'Article' }], challenge: 'Berdiri satu kaki (Tree Pose) 30 detik.', estimatedTime: '1 Minggu' },
      { id: 'yg5', title: 'Forward Folds', description: 'Hamstring stretch.', resources: [{ title: 'Uttanasana', url: 'https://www.verywellfit.com/', type: 'Guide' }], challenge: 'Sentuh jari kaki (tekuk lutut jika perlu).', estimatedTime: '1 Minggu' },
      { id: 'yg6', title: 'Backbends', description: 'Cobra & Bridge.', resources: [{ title: 'Safe Backbends', url: 'https://www.yogainternational.com/', type: 'Article' }], challenge: 'Lakukan Cobra Pose untuk postur bungkuk.', estimatedTime: '1 Minggu' },
      { id: 'yg7', title: 'Twists', description: 'Detoks tulang belakang.', resources: [{ title: 'Spinal Twists', url: 'https://www.yogaoutlet.com/', type: 'Guide' }], challenge: 'Lakukan twist duduk ke kanan & kiri.', estimatedTime: '1 Minggu' },
      { id: 'yg8', title: 'Hip Openers', description: 'Pigeon Pose.', resources: [{ title: 'Tight Hips', url: 'https://www.youtube.com/watch?v=WvnN-1i9V70', type: 'Video' }], challenge: 'Tahan Pigeon Pose 2 menit per sisi.', estimatedTime: '1 Minggu' },
      { id: 'yg9', title: 'Inversions', description: 'Downward Dog.', resources: [{ title: 'Down Dog Tips', url: 'https://www.yogajournal.com/', type: 'Article' }], challenge: 'Tahan Downward Dog 1 menit.', estimatedTime: '1 Minggu' },
      { id: 'yg10', title: 'Restorative (Savasana)', description: 'Relaksasi total.', resources: [{ title: 'Art of Savasana', url: 'https://chopra.com/', type: 'Article' }], challenge: 'Diam total di Savasana 10 menit.', estimatedTime: '1 Minggu' }
    ],
    traps: ['Memaksakan pose sampai sakit.', 'Menahan napas saat pose sulit.']
  },
  {
    id: 'interior-design',
    title: 'Interior Design Basics',
    category: Category.HOBBY,
    difficulty: Difficulty.BEGINNER,
    duration: '8-10 Minggu',
    purpose: 'Ubah ruangan sempit jadi nyaman dan estetik. Belajar menata layout, warna, dan pencahayaan.',
    outcome: 'Desain ulang satu ruangan di rumahmu (Makeover).',
    prerequisites: ['Ruangan'],
    steps: [
      { id: 'id1', title: 'Function First', description: 'Analisis kebutuhan ruang.', resources: [{ title: 'Space Planning', url: 'https://www.architecturaldigest.com/', type: 'Article' }], challenge: 'Gambar denah lantai kamarmu saat ini.', estimatedTime: '1 Minggu' },
      { id: 'id2', title: 'Design Styles', description: 'Minimalis, Industrial, Scandi.', resources: [{ title: 'Interior Styles', url: 'https://www.thespruce.com/', type: 'Guide' }], challenge: 'Tentukan gaya yang cocok untukmu.', estimatedTime: '1 Minggu' },
      { id: 'id3', title: 'Color Palette', description: '60-30-10 Rule.', resources: [{ title: 'Color Scheme', url: 'https://www.hgtv.com/', type: 'Article' }], challenge: 'Pilih 3 warna utama ruangan.', estimatedTime: '1 Minggu' },
      { id: 'id4', title: 'Lighting Layers', description: 'Ambient, Task, Accent.', resources: [{ title: 'Lighting Guide', url: 'https://www.lumens.com/', type: 'Article' }], challenge: 'Tambahkan satu lampu meja/lantai (Task light).', estimatedTime: '1 Minggu' },
      { id: 'id5', title: 'Layout & Flow', description: 'Sirkulasi gerak.', resources: [{ title: 'Layout Mistakes', url: 'https://www.apartmenttherapy.com/', type: 'Article' }], challenge: 'Geser furnitur agar jalan lebih lega.', estimatedTime: '1 Minggu' },
      { id: 'id6', title: 'Decluttering', description: 'Marie Kondo method.', resources: [{ title: 'KonMari Basics', url: 'https://konmari.com/', type: 'Guide' }], challenge: 'Buang/donasikan barang tak terpakai.', estimatedTime: '1 Minggu' },
      { id: 'id7', title: 'Textures & Textiles', description: 'Karpet, Bantal, Gorden.', resources: [{ title: 'Mixing Textures', url: 'https://stylebyemilyhenderson.com/', type: 'Article' }], challenge: 'Tambahkan elemen tekstil (selimut/bantal).', estimatedTime: '1 Minggu' },
      { id: 'id8', title: 'Wall Decor', description: 'Galeri dinding & Cermin.', resources: [{ title: 'Hanging Art', url: 'https://www.frameiteasy.com/', type: 'Guide' }], challenge: 'Gantung satu hiasan dinding setinggi mata.', estimatedTime: '1 Minggu' },
      { id: 'id9', title: 'Plants', description: 'Membawa alam ke dalam.', resources: [{ title: 'Best Indoor Plants', url: 'https://www.thesill.com/', type: 'List' }], challenge: 'Taruh satu tanaman asli di ruangan.', estimatedTime: '1 Minggu' },
      { id: 'id10', title: 'Moodboard', description: 'Visualisasi hasil akhir.', resources: [{ title: 'Pinterest Moodboard', url: 'https://www.pinterest.com/', type: 'Tool' }], challenge: 'Buat moodboard digital "Dream Room".', estimatedTime: '1 Minggu' }
    ],
    traps: ['Membeli furnitur tanpa mengukur.', 'Semua perabot nempel tembok.']
  },
  {
    id: 'barista-skills',
    title: 'Home Barista: Brewing Coffee',
    category: Category.HOBBY,
    difficulty: Difficulty.BEGINNER,
    duration: '6-8 Minggu',
    purpose: 'Berhenti beli kopi mahal. Buat kopi enak di rumah dengan alat manual (V60/French Press).',
    outcome: 'Mampu menyeduh kopi manual brew yang seimbang (tidak asam/pahit).',
    prerequisites: ['Alat Seduh Manual', 'Biji Kopi'],
    steps: [
      { id: 'bs1', title: 'Coffee Beans 101', description: 'Arabica vs Robusta, Roast Level.', resources: [{ title: 'Bean Guide', url: 'https://www.seattlecoffeegear.com/', type: 'Article' }], challenge: 'Beli biji kopi fresh roast lokal.', estimatedTime: '1 Minggu' },
      { id: 'bs2', title: 'Grind Size', description: 'Kunci ekstraksi.', resources: [{ title: 'Grind Chart', url: 'https://honestcoffeeguide.com/', type: 'Guide' }], challenge: 'Bandingkan hasil gilingan kasar vs halus.', estimatedTime: '1 Minggu' },
      { id: 'bs3', title: 'Water Chemistry', description: 'Suhu dan kualitas air.', resources: [{ title: 'Water for Coffee', url: 'https://baristahustle.com/', type: 'Article' }], challenge: 'Seduh dengan air mineral vs air keran (rasakan bedanya).', estimatedTime: '1 Minggu' },
      { id: 'bs4', title: 'French Press', description: 'Metode immersi.', resources: [{ title: 'French Press Guide', url: 'https://jameshoffmann.co.uk/', type: 'Video' }], challenge: 'Seduh French Press tanpa ampas.', estimatedTime: '1 Minggu' },
      { id: 'bs5', title: 'Pour Over (V60)', description: 'Teknik tuang & blooming.', resources: [{ title: 'V60 Technique', url: 'https://en.hario.com/', type: 'Guide' }], challenge: 'Lakukan blooming 30 detik.', estimatedTime: '1 Minggu' },
      { id: 'bs6', title: 'Extraction Theory', description: 'Under vs Over extraction.', resources: [{ title: 'Coffee Compass', url: 'https://www.baristahustle.com/blog/the-coffee-compass/', type: 'Tool' }], challenge: 'Diagnosa rasa kopimu (asam/pahit?).', estimatedTime: '1 Minggu' },
      { id: 'bs7', title: 'Cupping', description: 'Mencicipi rasa (tasting notes).', resources: [{ title: 'Cupping at Home', url: 'https://sca.coffee/', type: 'Guide' }], challenge: 'Identifikasi satu rasa (buah/coklat/kacang).', estimatedTime: '1 Minggu' },
      { id: 'bs8', title: 'Cold Brew', description: 'Seduh dingin.', resources: [{ title: 'Cold Brew Recipe', url: 'https://cooking.nytimes.com/', type: 'Recipe' }], challenge: 'Buat konsentrat Cold Brew di kulkas.', estimatedTime: '1 Minggu' },
      { id: 'bs9', title: 'Maintenance', description: 'Membersihkan alat.', resources: [{ title: 'Cleaning Grinder', url: 'https://clivecoffee.com/', type: 'Guide' }], challenge: 'Deep clean grinder kopimu.', estimatedTime: '1 Minggu' },
      { id: 'bs10', title: 'Recipe Adjustment', description: 'Ratio kopi:air.', resources: [{ title: 'Brew Ratio', url: 'https://www.perfectdailygrind.com/', type: 'Article' }], challenge: 'Ciptakan resep rasio favoritmu (misal 1:15).', estimatedTime: '1 Minggu' }
    ],
    traps: ['Pakai air mendidih (gosong).', 'Biji kopi sudah kadaluarsa (apek).']
  },
  {
    id: 'critical-thinking',
    title: 'Critical Thinking: Berpikir Kritis & Logis',
    category: Category.UNIVERSAL,
    difficulty: Difficulty.INTERMEDIATE,
    duration: '8-10 Minggu',
    purpose: 'Di era informasi, kemampuan membedakan kebenaran dan kebohongan adalah superpower.',
    outcome: 'Mampu menganalisis argumen, menghindari bias, dan mengambil keputusan objektif.',
    prerequisites: ['Rasa Ingin Tahu'],
    steps: [
      { id: 'ct1', title: 'Fact vs Opinion', description: 'Membedakan data objektif dan pandangan subjektif.', resources: [{ title: 'Fact Checking', url: 'https://fullfact.org/toolkit/', type: 'Tool' }], challenge: 'Analisis satu artikel berita: mana fakta, mana opini?', estimatedTime: '1 Minggu' },
      { id: 'ct2', title: 'Cognitive Biases', description: 'Mengenali cacat pikir otak kita.', resources: [{ title: 'Bias Cheat Sheet', url: 'https://yourbias.is/', type: 'Tool' }], challenge: 'Identifikasi satu bias dalam keputusanmu hari ini.', estimatedTime: '1 Minggu' },
      { id: 'ct3', title: 'Logical Fallacies', description: 'Kesesatan logika dalam argumen.', resources: [{ title: 'Logical Fallacies', url: 'https://yourlogicalfallacyis.com/', type: 'Tool' }], challenge: 'Temukan fallacy dalam komentar sosmed.', estimatedTime: '1 Minggu' },
      { id: 'ct4', title: 'Socratic Questioning', description: 'Bertanya untuk menggali kebenaran.', resources: [{ title: 'Socratic Method', url: 'https://www.intel.com/content/www/us/en/education/k12/project-design/strategies/socratic-questioning.html', type: 'Article' }], challenge: 'Lakukan debat sehat dengan teman menggunakan teknik tanya.', estimatedTime: '1 Minggu' },
      { id: 'ct5', title: 'First Principles', description: 'Berpikir dari dasar fundamental.', resources: [{ title: 'First Principles', url: 'https://fs.blog/first-principles/', type: 'Article' }], challenge: 'Bedah satu masalah kompleks menjadi komponen dasar.', estimatedTime: '1 Minggu' },
      { id: 'ct6', title: 'Data Literacy', description: 'Membaca data dan statistik.', resources: [{ title: 'How to Lie with Statistics', url: 'https://www.amazon.com/How-Lie-Statistics-Darrell-Huff/dp/0393310728', type: 'Book' }], challenge: 'Cari grafik yang menyesatkan di berita.', estimatedTime: '1 Minggu' },
      { id: 'ct7', title: 'Steelmanning', description: 'Memperkuat argumen lawan sebelum membantah.', resources: [{ title: 'Steel Man', url: 'https://effectiviology.com/steelman/', type: 'Article' }], challenge: 'Tulis argumen terkuat dari pandangan politik lawanmu.', estimatedTime: '1 Minggu' },
      { id: 'ct8', title: 'Occams Razor', description: 'Solusi sederhana biasanya benar.', resources: [{ title: 'Mental Models', url: 'https://fs.blog/mental-models/', type: 'Article' }], challenge: 'Gunakan Occam Razor pada satu teori konspirasi.', estimatedTime: '1 Minggu' },
      { id: 'ct9', title: 'Root Cause Analysis', description: 'Mencari akar masalah (Fishbone).', resources: [{ title: 'RCA Guide', url: 'https://www.mindtools.com/pages/article/newTMC_80.htm', type: 'Article' }], challenge: 'Analisis kenapa kamu telat hari ini sampai ke akar.', estimatedTime: '1 Minggu' },
      { id: 'ct10', title: 'Decision Matrix', description: 'Mengambil keputusan objektif.', resources: [{ title: 'Decision Matrix', url: 'https://asana.com/resources/decision-matrix-analysis', type: 'Article' }], challenge: 'Buat matriks untuk keputusan beli barang.', estimatedTime: '1 Minggu' }
    ],
    traps: ['Merasa paling benar (Dunning-Kruger).', 'Hanya membaca judul berita.']
  },
  {
    id: 'problem-solving',
    title: 'Complex Problem Solving',
    category: Category.UNIVERSAL,
    difficulty: Difficulty.ADVANCED,
    duration: '8-10 Minggu',
    purpose: 'Skill #1 yang dicari World Economic Forum. Selesaikan masalah rumit dengan sistematis.',
    outcome: 'Kerangka kerja (framework) untuk memecahkan masalah apapun.',
    prerequisites: ['Critical Thinking'],
    steps: [
      { id: 'ps1', title: 'Define Problem', description: 'Mendefinisikan masalah dengan tepat.', resources: [{ title: 'Problem Definition', url: 'https://hbr.org/2012/09/are-you-solving-the-right-problem', type: 'Article' }], challenge: 'Tulis pernyataan masalah untuk isu di tempat kerja/sekolah.', estimatedTime: '1 Minggu' },
      { id: 'ps2', title: '5 Whys', description: 'Menggali akar masalah bertingkat.', resources: [{ title: '5 Whys', url: 'https://www.mindtools.com/pages/article/newTMC_5W.htm', type: 'Tool' }], challenge: 'Lakukan 5 Whys pada masalah "Saya tidak punya uang".', estimatedTime: '1 Minggu' },
      { id: 'ps3', title: 'First Principles', description: 'Dekonstruksi masalah.', resources: [{ title: 'Elon Musk Method', url: 'https://jamesclear.com/first-principles', type: 'Article' }], challenge: 'Bongkar masalah "Macet" ke elemen dasarnya.', estimatedTime: '1 Minggu' },
      { id: 'ps4', title: 'Brainstorming', description: 'Divergent thinking (Ide sebanyak mungkin).', resources: [{ title: 'Brainstorming Rules', url: 'https://www.ideo.com/post/brainstorming-rules', type: 'Article' }], challenge: 'List 20 solusi gila untuk masalah sampah.', estimatedTime: '1 Minggu' },
      { id: 'ps5', title: 'Pareto Principle', description: '80/20 Rule.', resources: [{ title: 'Pareto Analysis', url: 'https://www.investopedia.com/terms/p/paretoprinciple.asp', type: 'Article' }], challenge: 'Identifikasi 20% aktivitas yang hasilkan 80% kebahagiaanmu.', estimatedTime: '1 Minggu' },
      { id: 'ps6', title: 'Decision Matrix', description: 'Convergent thinking (Memilih solusi).', resources: [{ title: 'Weighted Decision Matrix', url: 'https://www.projectmanager.com/blog/decision-matrix', type: 'Tool' }], challenge: 'Pilih solusi terbaik dari brainstorming tadi.', estimatedTime: '1 Minggu' },
      { id: 'ps7', title: 'Risk Assessment', description: 'Pre-mortem analysis.', resources: [{ title: 'Risk Analysis', url: 'https://www.mindtools.com/pages/article/newTMC_07.htm', type: 'Article' }], challenge: 'Apa yang bisa salah dari rencanamu?', estimatedTime: '1 Minggu' },
      { id: 'ps8', title: 'Feedback Loop', description: 'OODA Loop (Observe-Orient-Decide-Act).', resources: [{ title: 'OODA Loop', url: 'https://fs.blog/ooda-loop/', type: 'Article' }], challenge: 'Terapkan solusi kecil, evaluasi hasilnya.', estimatedTime: '1 Minggu' },
      { id: 'ps9', title: 'Design Thinking', description: 'Solusi berpusat pada manusia.', resources: [{ title: 'Design Thinking 101', url: 'https://www.nngroup.com/articles/design-thinking/', type: 'Article' }], challenge: 'Wawancara orang yang punya masalah tersebut.', estimatedTime: '1 Minggu' },
      { id: 'ps10', title: 'Mental Models', description: 'Alat berpikir multidisiplin.', resources: [{ title: 'Super Thinking', url: 'https://medium.com/@yegg/mental-models-i-find-repeatedly-useful-936f1cc405d', type: 'Article' }], challenge: 'Gunakan model "Inversion" pada masalahmu.', estimatedTime: '1 Minggu' }
    ],
    traps: ['Analysis Paralysis (Terlalu banyak mikir).', 'Menyelesaikan gejala, bukan akar masalah.']
  },
  {
    id: 'language-learning',
    title: 'Language Learning: Become a Polyglot',
    category: Category.UNIVERSAL,
    difficulty: Difficulty.INTERMEDIATE,
    duration: '12+ Minggu',
    purpose: 'Bisa bahasa asing membuka pintu karir dan budaya baru. Belajar CARA belajar bahasa, bukan sekadar menghafal.',
    outcome: 'Mampu percakapan dasar (A2/B1) dalam bahasa baru pilihanmu.',
    prerequisites: ['Konsistensi'],
    steps: [
      { id: 'llg1', title: 'Immersion', description: 'Kelilingi diri dengan bahasa.', resources: [{ title: 'Immersion Method', url: 'https://refold.la/', type: 'Guide' }], challenge: 'Ubah bahasa HP ke bahasa target.', estimatedTime: '1 Minggu' },
      { id: 'llg2', title: 'Common Words', description: 'Hukum Pareto (1000 kata).', resources: [{ title: 'Frequency Lists', url: 'https://en.wiktionary.org/wiki/Wiktionary:Frequency_lists', type: 'List' }], challenge: 'Hafal 50 kata paling umum.', estimatedTime: '2 Minggu' },
      { id: 'llg3', title: 'Pronunciation', description: 'IPA & Shadowing.', resources: [{ title: 'Forvo', url: 'https://forvo.com/', type: 'Tool' }], challenge: 'Rekam diri meniru native speaker.', estimatedTime: '1 Minggu' },
      { id: 'llg4', title: 'Sentence Mining', description: 'Belajar kalimat, bukan kata.', resources: [{ title: 'Sentence Mining', url: 'https://fluent-forever.com/', type: 'Article' }], challenge: 'Buat 10 flashcard kalimat.', estimatedTime: '1 Minggu' },
      { id: 'llg5', title: 'Basic Grammar', description: 'Struktur kalimat (SPO).', resources: [{ title: 'Grammar Guide', url: 'https://duolingo.com/', type: 'App' }], challenge: 'Tulis 5 kalimat sederhana.', estimatedTime: '1 Minggu' },
      { id: 'llg6', title: 'Input Hypothesis', description: 'Mendengar & Membaca (Comprehensible).', resources: [{ title: 'Input Hypothesis', url: 'https://www.sk.com.br/sk-krash.html', type: 'Article' }], challenge: 'Tonton kartun anak dalam bahasa target.', estimatedTime: '2 Minggu' },
      { id: 'llg7', title: 'Language Exchange', description: 'Ngobrol dengan native.', resources: [{ title: 'HelloTalk', url: 'https://www.hellotalk.com/', type: 'App' }], challenge: 'Chatting dengan 1 native speaker.', estimatedTime: '1 Minggu' },
      { id: 'llg8', title: 'Thinking in Language', description: 'Monolog internal.', resources: [{ title: 'Stop Translating', url: 'https://www.fluentin3months.com/', type: 'Article' }], challenge: 'Narasi kegiatanmu dalam hati.', estimatedTime: '1 Minggu' },
      { id: 'llg9', title: 'Flashcards (SRS)', description: 'Review harian.', resources: [{ title: 'Anki Decks', url: 'https://ankiweb.net/shared/decks/', type: 'Tool' }], challenge: 'Review deck Anki 15 menit.', estimatedTime: '1 Minggu' },
      { id: 'llg10', title: 'Full Conversation', description: 'Ujian nyata.', resources: [{ title: 'iTalki', url: 'https://www.italki.com/', type: 'App' }], challenge: 'Lakukan panggilan video 5 menit full bahasa target.', estimatedTime: '1 Minggu' }
    ],
    traps: ['Takut salah grammar.', 'Hanya pakai Duolingo tanpa praktek bicara.']
  },
  {
    id: 'research-skills',
    title: 'Research Skills: Menemukan Kebenaran',
    category: Category.UNIVERSAL,
    difficulty: Difficulty.INTERMEDIATE,
    duration: '6-8 Minggu',
    purpose: 'Skill vital untuk mahasiswa dan profesional. Cari informasi akurat dengan cepat dan sintesis menjadi pengetahuan.',
    outcome: 'Mampu membuat makalah riset mini dengan sumber kredibel.',
    prerequisites: ['Akses Jurnal/Google'],
    steps: [
      { id: 'rs1', title: 'Keyword Mastery', description: 'Google Search Operators.', resources: [{ title: 'Google Search Tricks', url: 'https://ahrefs.com/blog/google-search-operators/', type: 'CheatSheet' }], challenge: 'Gunakan "site:", "filetype:", dan "-keyword".', estimatedTime: '1 Minggu' },
      { id: 'rs2', title: 'Source Credibility', description: 'Evaluasi sumber (CRAAP Test).', resources: [{ title: 'CRAAP Test', url: 'https://library.csuchico.edu/help/source-or-information-good', type: 'Guide' }], challenge: 'Cek validitas satu artikel viral.', estimatedTime: '1 Minggu' },
      { id: 'rs3', title: 'Academic Databases', description: 'Google Scholar & DOAJ.', resources: [{ title: 'Google Scholar', url: 'https://scholar.google.com/', type: 'Tool' }], challenge: 'Temukan 3 jurnal ilmiah tentang topikmu.', estimatedTime: '1 Minggu' },
      { id: 'rs4', title: 'Reading Papers', description: 'Cara baca jurnal cepat.', resources: [{ title: 'How to Read Paper', url: 'https://web.stanford.edu/class/cs244/papers/000-HowtoReadPaper.pdf', type: 'PDF' }], challenge: 'Baca abstrak & kesimpulan satu paper.', estimatedTime: '1 Minggu' },
      { id: 'rs5', title: 'Note Taking', description: 'Zettelkasten / Second Brain.', resources: [{ title: 'Obsidian', url: 'https://obsidian.md/', type: 'Tool' }], challenge: 'Buat ringkasan paper dengan bahasamu.', estimatedTime: '1 Minggu' },
      { id: 'rs6', title: 'Synthesizing', description: 'Menghubungkan ide.', resources: [{ title: 'Synthesis Matrix', url: 'https://writingcenter.ncsu.edu/tips-and-tools/synthesis-matrix/', type: 'Tool' }], challenge: 'Gabungkan info dari 3 sumber berbeda.', estimatedTime: '1 Minggu' },
      { id: 'rs7', title: 'Citations', description: 'Menghindari plagiarisme.', resources: [{ title: 'Citation Guide', url: 'https://owl.purdue.edu/owl/research_and_citation/resources.html', type: 'Guide' }], challenge: 'Buat daftar pustaka format APA.', estimatedTime: '1 Minggu' },
      { id: 'rs8', title: 'Primary Research', description: 'Survei & Wawancara.', resources: [{ title: 'Google Forms', url: 'https://www.google.com/forms/about/', type: 'Tool' }], challenge: 'Buat survei kecil (10 responden).', estimatedTime: '1 Minggu' }
    ],
    traps: ['Hanya baca Wikipedia.', 'Cherry-picking (hanya ambil data yang dukung opini).']
  },
  {
    id: 'stoicism-mindset',
    title: 'Stoicism: Filosofi Ketahanan Mental',
    category: Category.UNIVERSAL,
    difficulty: Difficulty.BEGINNER,
    duration: '6-8 Minggu',
    purpose: 'Filosofi kuno untuk hidup modern. Tetap tenang di tengah kekacauan dan fokus pada apa yang bisa dikontrol.',
    outcome: 'Mindset anti-rapuh (antifragile) dan jurnal stoik.',
    prerequisites: ['Pikiran Terbuka'],
    steps: [
      { id: 'sto1', title: 'Dichotomy of Control', description: 'Kendali vs Tidak Terkendali.', resources: [{ title: 'Epictetus Enchiridion', url: 'http://classics.mit.edu/Epictetus/epicench.html', type: 'Book' }], challenge: 'List 3 masalahmu, pisahkan mana yang bisa dikontrol.', estimatedTime: '1 Minggu' },
      { id: 'sto2', title: 'Negative Visualization', description: 'Premeditatio Malorum.', resources: [{ title: 'Seneca Letters', url: 'https://en.wikisource.org/wiki/Moral_letters_to_Lucilius', type: 'Book' }], challenge: 'Bayangkan skenario terburuk hari ini agar bersyukur.', estimatedTime: '1 Minggu' },
      { id: 'sto3', title: 'Journaling', description: 'Refleksi diri harian.', resources: [{ title: 'Marcus Aurelius Meditations', url: 'http://classics.mit.edu/Antoninus/meditations.html', type: 'Book' }], challenge: 'Tulis jurnal pagi dan malam selama seminggu.', estimatedTime: '1 Minggu' },
      { id: 'sto4', title: 'Voluntary Discomfort', description: 'Melatih ketahanan.', resources: [{ title: 'Practicing Poverty', url: 'https://dailystoic.com/practicing-poverty/', type: 'Article' }], challenge: 'Mandi air dingin atau puasa gadget sehari.', estimatedTime: '1 Minggu' },
      { id: 'sto5', title: 'Memento Mori', description: 'Ingat kematian.', resources: [{ title: 'Memento Mori', url: 'https://dailystoic.com/memento-mori/', type: 'Article' }], challenge: 'Refleksi: Jika ini hari terakhirku, apa yang aku lakukan?', estimatedTime: '1 Minggu' },
      { id: 'sto6', title: 'Amor Fati', description: 'Mencintai takdir.', resources: [{ title: 'Nietzsche & Stoics', url: 'https://dailystoic.com/amor-fati/', type: 'Article' }], challenge: 'Ubah satu keluhan menjadi rasa syukur.', estimatedTime: '1 Minggu' },
      { id: 'sto7', title: 'The View from Above', description: 'Perspektif luas.', resources: [{ title: 'View from Above', url: 'https://donaldrobertson.name/2013/02/03/the-view-from-above-stoic-meditation-script/', type: 'Guide' }], challenge: 'Meditasi membayangkan bumi dari angkasa.', estimatedTime: '1 Minggu' },
      { id: 'sto8', title: 'Sympatheia', description: 'Koneksi mutual.', resources: [{ title: 'Cosmopolitanism', url: 'https://modernstoicism.com/', type: 'Article' }], challenge: 'Lakukan satu kebaikan tanpa diketahui orang.', estimatedTime: '1 Minggu' }
    ],
    traps: ['Menjadi pasif (pasrah).', 'Menjadi robot tanpa emosi (bukan itu Stoic!).']
  },
  {
    id: 'bodyweight-fitness',
    title: 'Calisthenics: Fitness Tanpa Alat',
    category: Category.HOBBY,
    difficulty: Difficulty.BEGINNER,
    duration: '12-16 Minggu',
    purpose: 'Bangun kekuatan dan estetika tubuh hanya dengan berat badan sendiri.',
    outcome: 'Mampu melakukan Pull-up, Dips, dan Push-up dengan form sempurna.',
    prerequisites: ['Lantai', 'Tiang/Pintu'],
    steps: [
      { id: 'bwf1', title: 'Joint Mobility', description: 'Kesehatan sendi pergelangan & bahu.', resources: [{ title: 'Mobility Routine', url: 'https://gmb.io/wrists/', type: 'Video' }], challenge: 'Lakukan rutin mobilitas setiap pagi.', estimatedTime: '1 Minggu' },
      { id: 'bwf2', title: 'Perfect Push-up', description: 'Form > Repetisi.', resources: [{ title: 'Push Up Form', url: 'https://www.youtube.com/watch?v=IODxDxX7oi4', type: 'Video' }], challenge: '5 Push-up dada sentuh lantai.', estimatedTime: '2 Minggu' },
      { id: 'bwf3', title: 'Hollow Body Hold', description: 'Core strength foundation.', resources: [{ title: 'Hollow Body', url: 'https://www.gymnasticbodies.com/', type: 'Article' }], challenge: 'Tahan posisi hollow 30 detik.', estimatedTime: '1 Minggu' },
      { id: 'bwf4', title: 'Bodyweight Rows', description: 'Melatih punggung (Pull).', resources: [{ title: 'Australian Pull Up', url: 'https://barbend.com/bodyweight-row/', type: 'Article' }], challenge: '3 set x 8 reps rows.', estimatedTime: '2 Minggu' },
      { id: 'bwf5', title: 'Dips', description: 'Melatih dada & tricep.', resources: [{ title: 'Dips Technique', url: 'https://stronglifts.com/dips/', type: 'Guide' }], challenge: '3 set x 5 reps dips.', estimatedTime: '2 Minggu' },
      { id: 'bwf6', title: 'Negative Pull-up', description: 'Melatih eksentrik.', resources: [{ title: 'Negative Pull Up', url: 'https://www.50pullups.com/', type: 'Article' }], challenge: '5 reps negative (turun 5 detik).', estimatedTime: '2 Minggu' },
      { id: 'bwf7', title: 'The Pull-up', description: 'Raja latihan bodyweight.', resources: [{ title: 'Pull Up Guide', url: 'https://www.nerdfitness.com/blog/do-a-pull-up/', type: 'Guide' }], challenge: '1 Pull-up bersih (dagu lewat bar).', estimatedTime: '2 Minggu' },
      { id: 'bwf8', title: 'Squats', description: 'Melatih kaki (Leg Day).', resources: [{ title: 'Squat Form', url: 'https://squatuniversity.com/', type: 'Article' }], challenge: '50 Squats tanpa henti.', estimatedTime: '1 Minggu' },
      { id: 'bwf9', title: 'AMRAP', description: 'Kardio & Stamina.', resources: [{ title: 'HIIT Workouts', url: 'https://darebee.com/', type: 'Tool' }], challenge: '15 menit workout tanpa istirahat.', estimatedTime: '1 Minggu' },
      { id: 'bwf10', title: 'L-Sit', description: 'Core statis tingkat lanjut.', resources: [{ title: 'L-Sit Progression', url: 'https://antranik.org/l-sit-tutorial/', type: 'Article' }], challenge: 'Tuck L-Sit selama 10 detik.', estimatedTime: '2 Minggu' }
    ],
    traps: ['Ego lifting (form jelek demi rep banyak).', 'Skip leg day.']
  }
];
