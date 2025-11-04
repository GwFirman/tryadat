export interface Attire {
  id: string;
  name:string;
  description: string;
  prompt: string;
}

export const attireOptions: Attire[] = [
  {
    id: 'kebaya_beskap',
    name: 'Kebaya & Beskap',
    description: 'Pakaian adat formal dari Jawa.',
    prompt: 'Ganti pakaian subjek pada foto menjadi busana adat formal Jawa, sesuaikan dengan jenis kelamin subjek. Terapkan Kebaya untuk wanita atau Beskap untuk pria. Gunakan kain batik tulis motif parang berwarna dominan cokelat soga sebagai bawahan. Untuk atasan, gunakan bahan beludru hitam dengan aksesoris lengkap seperti sanggul dan konde untuk wanita, atau blangkon dan keris untuk pria. Pertahankan wajah dan pose asli subjek.'
  },
  {
    id: 'payas_agung',
    name: 'Payas Agung',
    description: 'Busana upacara mewah dari Bali.',
    prompt: 'Ganti pakaian subjek pada foto menjadi busana Payas Agung Bali, sesuaikan dengan jenis kelamin subjek. Busana harus sangat mewah, didominasi warna emas dan merah marun menggunakan kain prada yang kaya detail. Terapkan mahkota emas tinggi untuk wanita atau udeng prada keemasan untuk pria. Pastikan aksesoris lengkap seperti kalung, gelang, dan sabuk emas yang rumit. Pertahankan wajah dan pose asli subjek.'
  },
  {
    id: 'ulos',
    name: 'Ulos',
    description: 'Kain tenun khas Batak, Sumatera Utara.',
    prompt: 'Ganti pakaian subjek pada foto menjadi busana adat Batak, sesuaikan dengan jenis kelamin subjek. Elemen utama adalah kain Ulos motif ragi hotang dengan warna dominan merah, hitam, putih dan aksen benang emas. Terapkan Ulos sebagai lilitan/bawahan untuk wanita, atau disampirkan di bahu dan pinggang untuk pria. Lengkapi dengan ikat kepala khas Batak Sortali. Pertahankan wajah dan pose asli subjek.'
  },
  {
    id: 'baju_bodo',
    name: 'Baju Bodo',
    description: 'Busana adat Bugis, Sulawesi Selatan.',
    prompt: "Ganti pakaian subjek pada foto menjadi busana adat Bugis-Makassar, sesuaikan dengan jenis kelamin subjek. Terapkan Baju Bodo, atasan segi empat longgar dari kain tipis, berwarna hijau muda untuk wanita, atau Jas Tutup hitam untuk pria. Keduanya dipadukan dengan sarung sutra (Lipa' Sabbe) motif kotak-kotak berwarna cerah. Lengkapi dengan aksesoris emas untuk wanita atau Songkok Recca untuk pria. Pertahankan wajah dan pose asli subjek."
  },
  {
    id: 'aesan_gede',
    name: 'Aesan Gede',
    description: 'Pakaian kebesaran dari Palembang.',
    prompt: 'Ganti pakaian subjek pada foto menjadi busana Aesan Gede Palembang, sesuaikan dengan jenis kelamin subjek. Busana harus sangat mewah, didominasi kain songket Palembang berwarna merah dan emas. Terapkan mahkota emas yang tinggi dan kompleks, Aesan Gede untuk wanita atau Paksangko untuk pria. Pastikan subjek mengenakan perhiasan emas yang melimpah seperti kalung bersusun, gelang, dan sabuk. Pertahankan wajah dan pose asli subjek.'
  },
  {
    id: 'ulee_balang',
    name: 'Ulee Balang',
    description: 'Busana adat para bangsawan Aceh.',
    prompt: 'Ganti pakaian subjek pada foto menjadi busana Ulee Balang Aceh, sesuaikan dengan jenis kelamin subjek. Terapkan busana Daro Baro untuk wanita atau Linto Baro untuk pria. Pakaian berupa atasan lengan panjang berwarna hitam dengan sulaman benang emas yang rumit di kerah dan dada. Padukan dengan celana panjang dan kain songket Aceh di pinggang. Lengkapi dengan hiasan kepala khas: mahkota Patam Dhoe untuk wanita, atau Kupiah Meukeutop untuk pria. Pertahankan wajah dan pose asli subjek.'
  }
];
