import { BilingualText } from "@/content/types";

export interface BlogPost {
  slug: string;
  title: BilingualText;
  excerpt: BilingualText;
  content: BilingualText;
  category: { id: string; en: string };
  image: string;
  date: string;
  author: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "misteri-pelabuhan-lama-banjarmasin",
    title: { 
      id: "Misteri & Sejarah Pelabuhan Lama Banjarmasin", 
      en: "Mystery & History of Old Banjarmasin Harbor" 
    },
    excerpt: { 
      id: "Menelusuri jejak Emmahaven, pintu gerbang ekonomi Kalimantan di masa kolonial yang kini menjadi saksi bisu sejarah.", 
      en: "Tracing the footsteps of Emmahaven, the economic gateway of Kalimantan in the colonial era that now stands as a silent witness to history." 
    },
    content: {
      id: "Dahulu dikenal sebagai Emmahaven, Pelabuhan Lama Banjarmasin adalah pusat denyut nadi ekonomi Hindia Belanda di Kalimantan Selatan. Dibangun pada akhir abad ke-19, pelabuhan ini menjadi saksi bisu bongkar muat lada, karet, dan batu bara yang dibawa menyusuri sungai Martapura. Hingga hari ini, sisa-sisa bangunan kolonial di sekitarnya masih membisikkan cerita tentang masa kejayaan maritim kota Seribu Sungai.",
      en: "Formerly known as Emmahaven, the Old Banjarmasin Harbor was the heartbeat of the Dutch East Indies' economy in South Kalimantan. Built in the late 19th century, this port witnessed the loading and unloading of pepper, rubber, and coal brought down the Martapura river. To this day, the remaining colonial buildings around it still whisper stories of the maritime glory of the City of a Thousand Rivers."
    },
    category: { id: "Sejarah", en: "History" },
    image: "/images/sejarah/Emmahaven_-_Page_73_-_Boekoe_Peringatan_dari_Staatsspoor-en_Tramwegen_di_Hindia-Belanda_1875-1925.jpg",
    date: "2024-04-20",
    author: "Tim Archive Banjarmasin",
    readTime: "5 min"
  },
  {
    slug: "filosofi-motif-kain-sasirangan",
    title: { 
      id: "Filosofi di Balik Setiap Pola Kain Sasirangan", 
      en: "Philosophy Behind Every Sasirangan Motif" 
    },
    excerpt: { 
      id: "Lebih dari sekadar kain, Sasirangan adalah manifestasi doa dan harapan masyarakat Banjar yang terlukis dalam warna.", 
      en: "More than just cloth, Sasirangan is a manifestation of prayers and hopes of the Banjar people painted in colors." 
    },
    content: {
      id: "Sasirangan berasal dari kata 'sirang' yang berarti diikat atau dijahit dengan tangan. Dahulu, kain ini digunakan sebagai media penyembuhan (batatamba). Setiap motif, mulai dari Iris Pudak hingga Kulat Karikit, memiliki makna mendalam tentang hubungan manusia dengan Tuhan, alam, dan sesama. Menggunakan Sasirangan bukan sekadar bergaya, tapi merawat filosofi luhur yang telah diturunkan lintas generasi.",
      en: "Sasirangan comes from the word 'sirang' which means tied or hand-stitched. In the past, this cloth was used as a healing medium (batatamba). Every motif, from Iris Pudak to Kulat Karikit, holds deep meaning about the relationship between humans and God, nature, and fellow humans. Wearing Sasirangan is not just about style, but about nurturing noble philosophies passed down across generations."
    },
    category: { id: "Budaya", en: "Culture" },
    image: "/images/budaya/Kain_Sasirangan_di_Kampung_Sasirangan_Banjarmasin.jpg",
    date: "2024-04-18",
    author: "Ahmad Riduan",
    readTime: "4 min"
  },
  {
    slug: "spot-sunrise-terbaik-martapura",
    title: { 
      id: "5 Spot Sunrise Terbaik di Tepian Sungai Martapura", 
      en: "5 Best Sunrise Spots on the Banks of Martapura River" 
    },
    excerpt: { 
      id: "Saksikan magisnya fajar saat cahaya emas pertama menyentuh permukaan sungai dan aktivitas klotok dimulai.", 
      en: "Witness the magic of dawn as the first golden light touches the river surface and klotok activities begin." 
    },
    content: {
      id: "Tidak ada yang mengalahkan suasana subuh di Banjarmasin. Mulai dari dermaga Menara Pandang hingga kejauhan Lok Baintan, setiap titik menawarkan perspektif unik. Udara dingin yang bercampur aroma sungai, suara mesin klotok yang perlahan menderu, dan refleksi langit jingga di air tenang Martapura adalah meditasi visual yang wajib Anda rasakan setidaknya sekali seumur hidup.",
      en: "Nothing beats the dawn atmosphere in Banjarmasin. From the Menara Pandang pier to the distance of Lok Baintan, every point offers a unique perspective. The cool air mixed with the scent of the river, the sound of klotok engines slowly roaring, and the reflection of the orange sky on the calm waters of Martapura are visual meditations you must experience at least once in a lifetime."
    },
    category: { id: "Wisata", en: "Tourism" },
    image: "/images/profilkota/Sunrise_on_the_Martapura_river.jpg",
    date: "2024-04-15",
    author: "Siska Amelia",
    readTime: "3 min"
  },
  {
    slug: "evolusi-rasa-soto-banjar",
    title: { 
      id: "Soto Banjar: Evolusi Rasa dari Zaman Kesultanan", 
      en: "Soto Banjar: Evolution of Flavor since the Sultanate Era" 
    },
    excerpt: { 
      id: "Bagaimana perpaduan rempah timur tengah dan tradisi lokal menciptakan sup paling ikonik di Kalimantan.", 
      en: "How the blend of Middle Eastern spices and local traditions created the most iconic soup in Kalimantan." 
    },
    content: {
      id: "Kuah yang kaya rempah, aroma susu dan kayu manis yang khas, serta suwiran ayam kampung—Soto Banjar adalah mahakarya kuliner. Sejarahnya merentang jauh ke masa ketika pedagang asing membawa pengaruh rempah ke pelabuhan Banjar. Seiring waktu, resep ini beradaptasi dengan lidah lokal, menciptakan varian bening maupun keruh yang kini menjadi identitas kuliner yang tak tergantikan bagi setiap orang Banjar.",
      en: "A broth rich in spices, with a distinctive aroma of milk and cinnamon, and shredded free-range chicken—Soto Banjar is a culinary masterpiece. Its history stretches back to the time when foreign traders brought spice influences to the Banjar port. Over time, this recipe adapted to local palates, creating clear and cloudy variants that have now become an irreplaceable culinary identity for every Banjar person."
    },
    category: { id: "Kuliner", en: "Culinary" },
    image: "/images/kuliner/Soto_banjar,_Pak_Ahmat,_Martapura,_South_Kalimantan,_2018-07-28_02.jpg",
    date: "2024-04-12",
    author: "Chef Haris",
    readTime: "6 min"
  },
  {
    slug: "banjarmasin-digital-metropolis",
    title: { 
      id: "Metropolis Digital: Masa Depan Kota Sungai", 
      en: "Digital Metropolis: The Future of the River City" 
    },
    excerpt: { 
      id: "Menilik bagaimana integrasi teknologi mewujudkan efisiensi layanan tanpa meninggalkan kearifan lokal sungai.", 
      en: "Looking at how technology integration creates service efficiency without leaving behind river local wisdom." 
    },
    content: {
      id: "Transformasi Banjarmasin menuju Smart City v3.0 bukan sekadar tentang aplikasi, melainkan tentang konektivitas jiwa kota. Dari sistem monitoring banjir yang cerdas hingga layanan publik terpadu 'Banjarmasin Pintar', teknologi kini menjadi jembatan yang menghubungkan tradisi sungai dengan efisiensi modern. Inilah visi masa depan: sebuah metropolis yang canggih secara digital, namun tetap memiliki detak jantung yang sama dengan alir sungai Martapura.",
      en: "Banjarmasin's transformation towards Smart City v3.0 is not just about apps, but about the connectivity of the city's soul. From smart flood monitoring systems to integrated public services 'Banjarmasin Pintar', technology is now the bridge connecting river traditions with modern efficiency. This is the future vision: a digitally sophisticated metropolis, yet still having the same heartbeat as the flow of the Martapura river."
    },
    category: { id: "Visi Digital", en: "Digital Vision" },
    image: "/images/wisata/Jembatan_Sei_Alalak,_Banjarmasin.jpg",
    date: "2024-04-10",
    author: "Indra Wijaya",
    readTime: "7 min"
  }
];
