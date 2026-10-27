import { useEffect, useState, useRef } from 'react';
import type { ReactNode } from 'react';
import './FendyCoRelumeSemuaHalaman.css';
const images = [import.meta.env.BASE_URL + "img/4e83d6c4f1267ed32374adff103bc9513c87df7885b631ce9d55bb03067f6cba.jpg", import.meta.env.BASE_URL + "img/2d805f0a01aff3506f48bc52aadb98d8728cb1e6272343193085eb7b1b5d345c.jpg", import.meta.env.BASE_URL + "img/bce2c7a94fa0b3cf48e9a9519e782bd4b08211d2a06e4443f1a5385885179884.jpg", import.meta.env.BASE_URL + "img/de6a6c9fac4f7b9f70eaefac29ee4c60a104a08f9e885b47b3e4a24ec5d73d9b.jpg", import.meta.env.BASE_URL + "img/b27d2f03bddff4f17453091e1632da2a584a1a2f581fc8d4963abe491fe0d2a0.jpg", import.meta.env.BASE_URL + "img/05d4b8e88ad42da437e6e349b9fb752c73cf3ae9b25a282342fe5f3681da0618.jpg", import.meta.env.BASE_URL + "img/f80833990ee8d1a1139e298ffd4e85febbe35c09ba0f2736758a40d2baa7b60a.jpg", import.meta.env.BASE_URL + "img/05e5a5824f914ad833c07a2b1b699c8da8702bcff8bc4b455530a87dc331472b.jpg", import.meta.env.BASE_URL + "img/1ffd97ebde4e396864baf033c54e185239edd1a683eaac8a32f83021b737dd44.jpg", import.meta.env.BASE_URL + "img/8c172381c0f575c14b93f471d1988ed3d3d3d295922bd00efb7474a3f15afd3f.jpg", import.meta.env.BASE_URL + "img/f4a51404f5e014c3091d20af385a6272cdeb29bc2bfc79555962731c61ea248a.jpg", import.meta.env.BASE_URL + "img/8c52166e98f7068be81d7c1871c8cf4dd5d5c282abd0cf3eb751a25e7a8c0958.jpg", import.meta.env.BASE_URL + "img/4a4f76754fdc05a6b9b2cd09648c967d6671e29631ab0873d36e981a340a70c9.jpg", import.meta.env.BASE_URL + "img/32a4df1d307c7f1c0d3ccb5fb46043c5823c96e3f1445cf106ff2c7e05a9bccc.jpg", import.meta.env.BASE_URL + "img/7f83846b8cbeb3dab899f01e8d742404197bc28acf0ab4ba5fe30293916038fb.jpg", import.meta.env.BASE_URL + "img/2e10df32e881c044be1a38b0c48d6f7a27f2f22be4cd8a94111b1ceb01eed5cb.jpg"];
const image = (i: number) => images[i];
const services = [{
  slug: 'hair',
  name: 'Hair',
  label: 'POTONG · WARNA · PERAWATAN',
  title: 'Gaya baru.\nTetap kamu.',
  intro: 'Potongan presisi, warna yang personal, dan perawatan yang mengikuti kebutuhan rambutmu.',
  img: 7,
  place: 'Semua cabang',
  items: [['Cut & blow', 'Bentuk yang nyaman ditata, dari bob tegas sampai layer ringan.', 'Rp 60–280 rb'], ['Hair color', 'Warna menyeluruh, highlight, atau balayage. Mulai dengan konsultasi warna.', 'Rp 650 rb–2,85 jt'], ['Hair & scalp ritual', 'Perawatan kulit kepala dan batang rambut, termasuk Milbon Premium Ritual.', 'Rp 250 rb–1,4 jt']],
  note: 'Creative atau Master stylist — pilih saat konsultasi. Bleaching tambahan dibahas sebelum pengerjaan.'
}, {
  slug: 'silky-keratin',
  name: 'Silky Keratin',
  label: 'SIGNATURE TREATMENT',
  title: 'Lebih halus.\nLebih leluasa.',
  intro: 'Kenali kebutuhan rambutmu, pahami prosesnya, lalu tentukan perawatan bersama stylist.',
  img: 1,
  place: 'Semua cabang',
  items: [['Konsultasi kondisi rambut', 'Ceritakan riwayat coloring, bleaching, dan perawatan sebelumnya.', '01'], ['Ukuran & kebutuhan produk', 'Ukuran S–XL dan kebutuhan gram menjadi dasar estimasi.', '02'], ['Treatment & aftercare', 'Bahas proses dan cara merawat rambut sesudah kunjungan.', '03']],
  note: 'Rentang keratin Rp 900 rb–4 jt. Tambahan produk Rp 22 rb per gram; jumlahnya dikonfirmasi sebelum mulai.'
}, {
  slug: 'beauty-bar',
  name: 'Beauty Bar',
  label: 'NAIL · LASH · WAX',
  title: 'Detail kecil.\nRasa percaya diri.',
  intro: 'Dari warna kuku favorit sampai tampilan lash yang ringan. Sisihkan waktu untuk detail yang kamu suka.',
  img: 8,
  place: 'Semua cabang',
  items: [['Manicure', 'Perawatan dan pembentukan kuku tangan, per sesi.', 'Rp 100 rb'], ['Pedicure', 'Perawatan kuku kaki, per sesi.', 'Rp 150 rb'], ['Nail art sederhana', 'Tambahan desain sederhana, per kuku.', 'Rp 4 rb'], ['Nail art set', 'Sepuluh kuku; desain disepakati saat konsultasi.', 'Rp 500 rb'], ['Eyelash', 'Konsultasikan tampilan dan perawatan lash sesuai kebutuhanmu.', 'Rp 125–500 rb'], ['Waxing', 'Pilih area perawatan. Brazilian waxing tersedia di Tebet.', 'Rp 40–300 rb']],
  note: 'Harga nail art dapat dihitung per kuku atau per desain. Jelaskan pilihanmu saat meminta estimasi.'
}, {
  slug: 'wellness-spa',
  name: 'Wellness & Spa',
  label: 'KHUSUS TEBET',
  title: 'Pelan sebentar.\nKembali segar.',
  intro: 'Facial, body treatment, dan waktu tenang untuk diri sendiri, di cabang Tebet.',
  img: 9,
  place: 'Tebet',
  items: [['Facial & body treatment', 'Diskusikan kondisi kulit dan pilihan perawatan sebelum sesi.', 'Rp 50 rb–1,5 jt'], ['Spa & massage', 'Pilih durasi 60, 90, atau 120 menit sesuai waktu yang kamu punya.', 'Konsultasi durasi'], ['Slimming & sculpt', 'Pilihan paket sesi dengan konsultasi kebutuhan terlebih dahulu.', 'Rp 150 rb–6 jt']],
  note: 'Sampaikan kondisi kesehatan atau sensitivitas kepada tim sebelum memilih perawatan. Tidak semua treatment cocok untuk setiap orang.'
}, {
  slug: 'wedding',
  name: 'Wedding',
  label: 'PERAWATAN MENJELANG HARI ISTIMEWA',
  title: 'Hari besarmu.\nSetiap detailnya.',
  intro: 'Rencanakan nail dan perawatan pre-wedding bersama tim Tebet, dengan ruang untuk konsultasi lebih dulu.',
  img: 10,
  place: 'Tebet',
  items: [['Wedding nail', 'Bawa referensi warna, gaun, dan detail yang ingin kamu padukan.', 'Mulai Rp 1,5 jt'], ['Pre-wedding care', 'Susun rangkaian perawatan sesuai kebutuhan dan tanggal acara.', 'Mulai Rp 1,25 jt'], ['Konsultasi jadwal', 'Bicarakan rangkaian layanan, waktu pengerjaan, dan ketentuan DP.', 'Sesuai kebutuhan']],
  note: 'Tanggal dan paket dikonfirmasi tim sebelum pembayaran. Pilihan paket pada katalog berada di rentang Rp 1,25–4,2 jt.'
}];
const branches = [{
  slug: 'gandaria',
  name: 'Gandaria',
  address: 'Jl. Gandaria Tengah III No. 3',
  img: 12,
  desc: 'Ruang untuk gaya sehari-hari yang terasa personal.',
  text: 'Potong, warna, keratin, dan Beauty Bar dalam satu kunjungan.'
}, {
  slug: 'kemang',
  name: 'Kemang',
  address: 'Jl. Kemang Utara No. 16',
  img: 13,
  desc: 'Gaya yang mengikuti ritme harimu.',
  text: 'Temukan pilihan hair dan Beauty Bar untuk rutinitas maupun perubahan baru.'
}, {
  slug: 'tebet',
  name: 'Tebet',
  address: 'Jl. Tebet Utara Dalam No. 30',
  img: 14,
  desc: 'Lebih banyak waktu untuk merawat diri.',
  text: 'Hair, Beauty Bar, wellness, spa, slimming, Brazilian waxing, dan wedding.'
}];
const faqs = [['Kenapa harga keratin berupa rentang?', 'Ukuran rambut, kebutuhan gram keratin, dan tier stylist menentukan biaya. Tim menjelaskan estimasi sebelum treatment dimulai.'], ['Layanan apa yang hanya tersedia di Tebet?', 'Wellness, spa, slimming, Brazilian waxing, serta paket wedding dan pre-wedding. Hair dan Beauty Bar tersedia di ketiga cabang.'], ['Apakah perlu DP?', 'Admin menjelaskan ketentuan konfirmasi dan DP yang berlaku saat pengajuan. Jangan melakukan pembayaran sebelum menerima rincian dari cabang.'], ['Bisa hair dan nail di hari yang sama?', 'Sebutkan kedua layanan saat mengajukan jadwal agar tim dapat mengatur urutan dan waktunya.'], ['Bagaimana jika rambut sudah di-bleach?', 'Ceritakan riwayat rambut saat konsultasi. Stylist akan menilai kondisi dan menyarankan langkah yang sesuai sebelum perawatan.'], ['Bagaimana mengubah jadwal?', 'Hubungi cabang tempat kamu mengajukan reservasi secepatnya. Ketersediaan waktu pengganti perlu dikonfirmasi kembali.']];
const prices = [['Haircut & blow', 'Rp 60–280 rb', 'Tier stylist dan panjang rambut.', 'Hair'], ['Silky Keratin, smoothing & perm', 'Rp 900 rb–4 jt', 'Ukuran S–XL; keratin tambahan Rp 22 rb/gram.', 'Hair'], ['Hair color', 'Rp 650 rb–2,85 jt', 'Bleach tambahan Rp 350–650 rb.', 'Hair'], ['Hair & scalp treatment', 'Rp 250 rb–1,4 jt', 'Sesuai pilihan perawatan.', 'Hair'], ['Manicure', 'Rp 100 rb', 'Per sesi.', 'Beauty Bar'], ['Pedicure', 'Rp 150 rb', 'Per sesi.', 'Beauty Bar'], ['Nail art sederhana', 'Rp 4 rb', 'Tambahan per kuku.', 'Beauty Bar'], ['Nail art set', 'Rp 500 rb', 'Sepuluh kuku, sesuai desain.', 'Beauty Bar'], ['Eyelash', 'Rp 125–500 rb', 'Sesuai pilihan layanan.', 'Beauty Bar'], ['Waxing', 'Rp 40–300 rb', 'Per area; Brazilian hanya Tebet.', 'Beauty Bar'], ['Facial, body, spa & massage', 'Rp 50 rb–1,5 jt', 'Jenis dan durasi; khusus Tebet.', 'Wellness & Wedding'], ['Slimming & sculpt', 'Rp 150 rb–6 jt', 'Paket sesi; khusus Tebet.', 'Wellness & Wedding'], ['Wedding & pre-wedding', 'Rp 1,25–4,2 jt', 'Paket dan DP dikonfirmasi tim Tebet.', 'Wellness & Wedding']];
const bookingURL = (service = '', branch = '') => '/reservasi?' + new URLSearchParams({
  service,
  branch
}).toString();
const serviceFAQs: Record<string, string[][]> = {
  'beauty-bar': [['Bisa membawa referensi nail art?', 'Bisa. Bawa warna dan motif yang disukai; tim membahas detail desain, waktu, dan biaya per kuku atau per set.'], ['Perlu melepas gel atau lash lama?', 'Sampaikan kondisi kuku dan lash saat konsultasi agar tim menyiapkan waktu pelepasan bila diperlukan.'], ['Waxing tersedia di cabang mana?', 'Pilihan waxing mengikuti cabang dan area perawatan. Brazilian waxing hanya tersedia di Tebet.']],
  'wellness-spa': [['Berapa lama waktu yang perlu disiapkan?', 'Pilihan sesi massage 60, 90, atau 120 menit dibahas dengan tim Tebet. Sisihkan waktu tambahan untuk konsultasi.'], ['Apa yang perlu disampaikan sebelum sesi?', 'Ceritakan sensitivitas kulit dan kondisi yang relevan secara langsung kepada tim agar kesesuaian treatment dapat dinilai.'], ['Bisa memilih facial sekaligus massage?', 'Sampaikan kedua pilihan saat menghubungi Tebet. Tim mengonfirmasi urutan, durasi, dan ketersediaan sesi.']],
  wedding: [['Kapan sebaiknya mulai konsultasi?', 'Hubungi tim Tebet dengan tanggal acara dan rangkaian perawatan yang diinginkan agar jadwal bisa dibahas sejak awal.'], ['Apa yang dibawa untuk konsultasi wedding nail?', 'Siapkan referensi gaun, palet warna, aksesori, dan desain kuku yang kamu suka.'], ['Apakah paket sudah termasuk seluruh perawatan?', 'Isi paket, jumlah sesi, harga, dan ketentuan DP dikonfirmasi tertulis bersama tim sebelum pembayaran.']]
};
const preparations: Record<string, string[][]> = {
  'beauty-bar': [['Pilih detailnya', 'Nail, lash, atau area waxing.'], ['Bawa referensi', 'Warna dan bentuk yang kamu suka.'], ['Ceritakan perawatan lama', 'Gel, lash, atau sensitivitas kulit.'], ['Sepakati hasil', 'Desain, durasi, dan biaya sebelum mulai.']],
  'wellness-spa': [['Pilih waktu tenang', 'Rencanakan sesi di Tebet.'], ['Kenali kebutuhanmu', 'Facial, body, atau massage.'], ['Konsultasikan kondisi', 'Sampaikan sensitivitas kepada tim.'], ['Sisihkan jeda', 'Beri ruang untuk sesi dan aftercare.']],
  wedding: [['Catat hari istimewa', 'Mulai dari tanggal acara.'], ['Bawa moodboard', 'Gaun, warna, dan detail pilihanmu.'], ['Susun rangkaian', 'Sepakati sesi bersama tim Tebet.'], ['Konfirmasi jadwal', 'Paket dan DP dibahas sebelum membayar.']]
};
const branchWhatsApp: Record<string, {
  label: string;
  href: string;
}> = {
  Gandaria: {
    label: '+62 812-0000-0001',
    href: 'https://wa.me/6281200000001'
  },
  Kemang: {
    label: '+62 812-0000-0002',
    href: 'https://wa.me/6281200000002'
  },
  Tebet: {
    label: '+62 812-0000-0003',
    href: 'https://wa.me/6281200000003'
  }
};
function BranchContact({
  branch
}: {
  branch: typeof branches[number];
}) {
  const [expanded, setExpanded] = useState(false);
  const contact = branchWhatsApp[branch.name];
  return <article className="fc-contact-card"><p className="fc-kicker">KONTAK {branch.name}</p><h3>{branch.name}</h3><p>{branch.address}</p><p className="fc-contact-number">{contact.label}</p><p className="fc-help">Nomor demo untuk pratinjau. Ganti dengan kontak resmi sebelum rilis.</p><a className="fc-button" href={contact.href} target="_blank" rel="noreferrer">WhatsApp {branch.name}</a><button className="fc-text-link" type="button" aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>Lihat contoh pesan</button>{expanded && <div className="fc-contact-preview" role="status"><h4>Percakapan dengan {branch.name}</h4><p>Halo Fendy & Co {branch.name}, saya ingin menanyakan layanan dan jadwal kunjungan.</p><p>Tombol WhatsApp membuka wa.me dengan nomor demo.</p><Link to={bookingURL('', branch.name)} className="fc-text-link">Siapkan rincian untuk {branch.name}</Link></div>}<Link to={'/cabang/' + branch.slug} className="fc-text-link">Lihat cabang {branch.name}</Link></article>;
}
const Link = ({
  to,
  children,
  className = ''
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) => <a className={className} href={'#' + to}>{children}</a>;
function Photo({
  i,
  alt,
  className = ''
}: {
  i: number;
  alt: string;
  className?: string;
}) {
  return <img className={className} src={image(i)} alt={alt} loading="lazy" />;
}
function FAQ({
  compact = false,
  items = faqs
}: {
  compact?: boolean;
  items?: string[][];
}) {
  return <div className="fc-faq">{items.slice(0, compact ? 3 : items.length).map(([q, a]) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div>;
}
function CTA({
  to = "/reservasi"
}: {
  to?: string;
}) {
  return <section className="fc-cta"><p className="fc-kicker">UNTUK KUNJUNGAN BERIKUTNYA</p><h2>Ruang untuk <em>dirimu.</em></h2><Link to={to} className="fc-button light">Rencanakan kunjungan </Link></section>;
}
function BranchList() {
  return <div className="fc-branches">{branches.map((b, i) => <Link key={b.slug} to={'/cabang/' + b.slug} className="fc-branch-row"><span className="fc-kicker">0{i + 1}</span><h3>{b.name}</h3><span>{b.address}<small>{i === 2 ? 'Hair · Beauty · Wellness' : 'Hair · Beauty Bar'}</small></span></Link>)}</div>;
}
function PriceList({
  filter = 'Semua'
}: {
  filter?: string;
}) {
  const rows = prices.filter(p => filter === 'Semua' || p[3] === filter);
  return <div className="fc-price-list"><p className="fc-data-note">Harga contoh — perlu konfirmasi pemilik sebelum rilis.</p>{rows.map(([name, price, note]) => <div className="fc-price-row" key={name}><div><h3>{name}</h3><p>{note}</p></div><strong>{price}</strong></div>)}</div>;
}
function Steps({
  items
}: {
  items?: string[][];
}) {
  return <ol className="fc-steps">{(items || [['Pilih yang kamu butuhkan', 'Layanan, cabang, dan waktu pilihanmu.'], ['Siapkan detail kunjungan', 'Bawa referensi dan riwayat perawatanmu.'], ['Konfirmasi dengan cabang', 'Admin memeriksa slot, stylist, dan biaya.'], ['Konsultasi sebelum mulai', 'Sepakati treatment dan estimasi akhir.']]).map(([h, p], i) => <li key={h}><span>0{i + 1}</span><h3>{h}</h3><p>{p}</p></li>)}</ol>;
}
function Booking({
  query
}: {
  query: string;
}) {
  const params = new URLSearchParams(query);
  const requestedService = params.get('service') || '';
  const initialService = services.some(s => s.name === requestedService) ? requestedService : 'Hair';
  const requestedBranch = params.get('branch') || '';
  const initialBranch = ['Wedding', 'Wellness & Spa'].includes(initialService) ? 'Tebet' : branches.some(b => b.name === requestedBranch) ? requestedBranch : 'Gandaria';
  const [service, setService] = useState(initialService);
  const [branch, setBranch] = useState(initialBranch);
  const [review, setReview] = useState(false);
  const [copy, setCopy] = useState('');
  const [data, setData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '10:00',
    note: ''
  });
  const tebet = ['Wellness & Spa', 'Wedding'].includes(service);
  const update = (key: string, value: string) => {
    setData(d => ({
      ...d,
      [key]: value
    }));
    setReview(false);
  };
  const summary = `Rencana kunjungan Fendy & Co\n${data.name}\n${service} — ${branch}\n${data.date}, ${data.time}\n${data.phone}\n${data.note}`;
  return <div className="fc-book-grid"><form onSubmit={e => {
      e.preventDefault();
      setReview(true);
      setCopy('');
    }}><p className="fc-kicker">01 / PILIH KUNJUNGAN</p><div className="fc-fields"><label>Layanan<div className="fc-select"><select value={service} onChange={e => {
              setService(e.target.value);
              setReview(false);
              if (['Wellness & Spa', 'Wedding'].includes(e.target.value)) setBranch('Tebet');
            }}>{services.map(s => <option key={s.name}>{s.name}</option>)}<option>Konsultasi dulu</option></select><span>⌄</span></div></label><label>Cabang<div className="fc-select"><select value={branch} onChange={e => {
              setBranch(e.target.value);
              setReview(false);
            }}>{branches.filter(b => !tebet || b.name === 'Tebet').map(b => <option key={b.name}>{b.name}</option>)}</select><span>⌄</span></div></label><label>Tanggal pilihan<input type="date" required min={new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10)} value={data.date} onChange={e => update('date', e.target.value)} /></label><label>Jam pilihan<input type="time" required value={data.time} onChange={e => update('time', e.target.value)} /></label></div><p className="fc-help">Waktu pilihan belum menunjukkan ketersediaan slot. {tebet && 'Layanan ini hanya tersedia di Tebet.'}</p><p className="fc-kicker spaced">02 / DETAIL KAMU</p><div className="fc-fields"><label>Nama<input required autoComplete="name" value={data.name} onChange={e => update('name', e.target.value)} /></label><label>Nomor WhatsApp<input required type="tel" pattern="[+0-9 \(\)\-]{8,20}" autoComplete="tel" value={data.phone} onChange={e => update('phone', e.target.value)} /></label></div><label>Catatan untuk konsultasi<textarea rows={3} value={data.note} onChange={e => update('note', e.target.value)} /></label><button className="fc-button" type="submit">Periksa rencana </button></form><aside className="fc-book-summary"><p className="fc-kicker">KUNJUNGANMU</p><h2>{service}</h2><p>Fendy & Co {branch}</p><div className="fc-summary-line"><span>Tanggal & jam</span><strong>{data.date || 'Belum dipilih'} · {data.time}</strong></div><p>Biaya akhir, stylist, dan slot dikonfirmasi bersama admin cabang.</p><div aria-live="polite">{review ? <><h3>Rencana siap disalin</h3><p>Belum terkirim ke salon dan belum menjadi reservasi. Salin rincian untuk percakapanmu dengan cabang.</p><button type="button" className="fc-button" onClick={async () => {
            try {
              await navigator.clipboard.writeText(summary);
              setCopy('Rincian disalin.');
            } catch {
              setCopy('Salin rincian secara manual dari kotak di bawah.');
            }
          }}>Salin rincian</button><textarea aria-label="Rincian kunjungan" readOnly value={summary} /><p>{copy}</p></> : <p className="fc-help">Isi detail lalu periksa rencana sebelum menghubungi tim.</p>}</div><BranchContact branch={branches.find(b => b.name === branch)!} /></aside></div>;
}
export const FendyCoRelumeSemuaHalaman = () => {
  const getRoute = () => window.location.hash.replace(/^#/, '') || '/';
  const [location, setRoute] = useState(getRoute);
  const [route, query = ""] = location.split("?");
  const [menu, setMenu] = useState(false);
  const [priceFilter, setPriceFilter] = useState('Semua');
  const [lightbox, setLightbox] = useState<number | null>(null);
  const galleryTrigger = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (lightbox === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
      galleryTrigger.current?.focus();
    };
  }, [lightbox]);
  useEffect(() => {
    const change = () => {
      setRoute(getRoute());
      setMenu(false);
      setLightbox(null);
      document.querySelectorAll<HTMLDetailsElement>('.fc-header details[open]').forEach(d => d.open = false);
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', change);
    return () => window.removeEventListener('hashchange', change);
  }, []);
  useEffect(() => {
    document.title = 'Fendy & Co';
  }, [route]);
  const service = services.find(s => route === '/layanan/' + s.slug);
  const branch = branches.find(b => route === '/cabang/' + b.slug);
  const known = route === '/' || !!service || !!branch || ['/layanan', '/harga', '/tentang', '/kontak', '/reservasi', '/faq', '/kebijakan-privasi', '/syarat-ketentuan'].includes(route);
  return <div className="fc-site"><a className="fc-skip" href="#fc-main" onClick={e => {
      e.preventDefault();
      document.getElementById('fc-main')?.focus();
    }}>Lewati navigasi</a><header className="fc-header" onKeyDown={e => {
      if (e.key === 'Escape') {
        const opened = e.currentTarget.querySelector<HTMLDetailsElement>('details[open]');
        if (opened) {
          opened.open = false;
          opened.querySelector<HTMLElement>('summary')?.focus();
        } else {
          setMenu(false);
          e.currentTarget.querySelector<HTMLButtonElement>('.fc-menu-toggle')?.focus();
        }
      }
    }}><Link to="/" className="fc-brand">FENDY <i>&</i> CO<span>HAIRDESIGN & BEAUTY</span></Link><button className="fc-menu-toggle" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-controls="fc-nav">{menu ? 'Tutup' : 'Menu'}</button><nav id="fc-nav" className={menu ? 'open' : ''} aria-label="Navigasi utama"><details className="fc-services-menu"><summary>Layanan <span>⌄</span></summary><div className="fc-mega"><div className="fc-mega-groups">{[['Hair', 'Potong, warna & ritual', 'hair'], ['Silky Keratin', 'Konsultasi & aftercare', 'silky-keratin'], ['Beauty', 'Nail, lash & waxing', 'beauty-bar']].map(([title, desc, slug]) => <div key={slug}><p className="fc-kicker">{title}</p><Link to={'/layanan/' + slug}>{desc}</Link><Link to={bookingURL(services.find(s => s.slug === slug)!.name)} className="fc-text-link">Rencanakan {title}</Link></div>)}<div><p className="fc-kicker">KHUSUS TEBET</p><Link to="/layanan/wellness-spa">Wellness & Spa</Link><Link to="/layanan/wedding">Wedding</Link><Link to={bookingURL('', 'Tebet')} className="fc-text-link">Kunjungi Tebet</Link></div></div><div className="fc-mega-preview"><Photo i={2} alt="Tekstur rambut bergelombang dan balayage" /><p>Temukan gaya yang terasa kamu.</p><Link to="/layanan" className="fc-button">Jelajahi semua layanan</Link></div></div></details><Link to="/harga">Harga</Link><details><summary>Cabang <span>⌄</span></summary><div className="fc-dropdown">{branches.map(b => <Link to={'/cabang/' + b.slug} key={b.slug}>{b.name}</Link>)}</div></details><Link to="/tentang">Tentang</Link><Link to="/kontak">Kontak</Link><Link to="/reservasi" className="fc-nav-book">Reservasi</Link></nav></header><main id="fc-main" tabIndex={-1} key={location} className={service ? "fc-theme-" + service.slug : ""}>
{route === '/' && <><section className="fc-hero"><Photo i={2} alt="Tekstur rambut balayage bergelombang" /><div className="fc-hero-shade" /><div className="fc-hero-copy"><p className="fc-kicker">HAIR · BEAUTY · WELLNESS / JAKARTA SELATAN</p><h1>Rambutmu.<br />Pilihan <em>gayamu.</em></h1><p>Keratin, potongan, warna. Mulai dari yang membuatmu merasa jadi diri sendiri.</p><Link to="/reservasi" className="fc-button light">Rencanakan kunjungan </Link><Link to="/harga" className="fc-hero-link">Lihat harga</Link></div><span className="fc-hero-bottom">GANDARIA — KEMANG — TEBET</span></section><section className="fc-stats"><div><strong>03</strong><span>Cabang di Jakarta Selatan</span></div><div><strong>100+</strong><span>Pilihan layanan dalam katalog</span></div><a href="https://www.instagram.com/fendynco/" target="_blank" rel="noreferrer"><strong>@fendynco</strong><span>Kenali hasil kerja kami di Instagram</span></a></section><section className="fc-section"><div className="fc-section-head"><p className="fc-kicker">01 / INSPIRASI GAYA</p><h2>Jatuh hati pada<br /><em>detailnya.</em></h2><p>Temukan potongan, warna, dan tekstur untuk percakapan dengan stylist.</p></div><div className="fc-gallery">{[1, 3, 4, 5, 6, 7].map((i, n) => <button key={i} onClick={e => {
              galleryTrigger.current = e.currentTarget;
              setLightbox(i);
            }} aria-label={'Perbesar inspirasi ' + ['keratin', 'bob', 'blow dry', 'curl', 'coloring', 'hair colour'][n]}><Photo i={i} alt={['Rambut lurus panjang', 'Potongan bob', 'Blow dry', 'Rambut bergelombang', 'Proses pewarnaan', 'Inspirasi layanan hair'][n]} /><span>{['SILKY & SMOOTH', 'THE BOB', 'EVERYDAY MOVEMENT', 'SOFT CURLS', 'COLOUR IN PROCESS', 'HAIR STUDIO'][n]}</span></button>)}</div></section><section className="fc-section fc-service-index"><div className="fc-section-head"><p className="fc-kicker">02 / LAYANAN</p><h2>Untuk setiap<br /><em>sisi dirimu.</em></h2><Link to="/layanan" className="fc-text-link">Jelajahi semua layanan</Link></div>{services.filter(s => s.slug !== 'silky-keratin').map((s, i) => <Link to={'/layanan/' + s.slug} className="fc-service-row" key={s.slug}><span className="fc-kicker">0{i + 1}</span><h3>{s.name}</h3><Photo i={s.img} alt={s.name} /><p>{s.place}<span>{s.label}</span></p></Link>)}</section><section className="fc-feature"><Photo i={11} alt="Konsultasi perawatan rambut" /><div><p className="fc-kicker">03 / SILKY KERATIN</p><h2>Kenali rambutmu.<br /><em>Pahami pilihannya.</em></h2><p>Ukuran rambut, kebutuhan produk, dan pilihan stylist menentukan estimasi. Bahas semuanya sebelum treatment dimulai.</p><Link to="/layanan/silky-keratin" className="fc-button light">Kenali Silky Keratin </Link></div></section><section className="fc-section"><p className="fc-kicker">04 / STANDAR PERAWATAN</p><div className="fc-values">{[['Konsultasi lebih dulu.', 'Mulai dengan kondisi rambut dan kebutuhanmu.'], ['Harga dibahas di awal.', 'Pahami biaya serta tambahan sebelum mulai.'], ['Perawatan yang personal.', 'Pilih layanan dan cabang yang tepat untukmu.']].map(([h, p], i) => <article key={h}><span>0{i + 1}</span><h3>{h}</h3><p>{p}</p></article>)}</div></section><section className="fc-section fc-tinted"><div className="fc-section-head"><p className="fc-kicker">05 / HARGA</p><h2>Jelas dari <em>awal.</em></h2><Link to="/harga" className="fc-text-link">Seluruh daftar harga</Link></div><PriceList filter="Hair" /></section><section className="fc-section"><div className="fc-section-head"><p className="fc-kicker">06 / CABANG</p><h2>Dekat dengan<br /><em>harimu.</em></h2><p>Tiga alamat. Pilihan perawatan yang berbeda.</p></div><BranchList /></section><section className="fc-section fc-tinted"><p className="fc-kicker">07 / RENCANA KUNJUNGAN</p><h2>Dari rencana ke <em>kursi salon.</em></h2><Steps /></section><section className="fc-section fc-faq-section"><div><p className="fc-kicker">08 / SEBELUM BERKUNJUNG</p><h2>Ada yang ingin<br /><em>ditanyakan?</em></h2><Link to="/faq" className="fc-text-link">Semua pertanyaan</Link></div><FAQ compact /></section><CTA /></>}
{route === '/layanan' && <><section className="fc-page-intro"><p className="fc-kicker">LAYANAN FENDY & CO</p><h1>Perawatan.<br /><em>Dengan caramu.</em></h1><p>Hair, beauty, wellness, hingga persiapan hari istimewa. Temukan pintu yang tepat.</p></section><section className="fc-section fc-service-cards">{services.map(s => <Link to={'/layanan/' + s.slug} key={s.slug}><Photo i={s.img} alt={s.name} /><p className="fc-kicker">{s.place}</p><h2>{s.name} </h2><p>{s.intro}</p></Link>)}</section><CTA /></>}
{service && <><section className="fc-service-hero"><div><p className="fc-kicker">{service.label} / {service.place}</p><h1>{service.title.split('\n')[0]}<br /><em>{service.title.split('\n')[1]}</em></h1><p>{service.intro}</p><Link to={bookingURL(service.name, service.place === "Tebet" ? "Tebet" : "")} className="fc-button">Rencanakan {service.name} </Link></div><Photo i={service.img} alt={'Inspirasi ' + service.name} /></section><section className="fc-section"><div className="fc-section-head"><p className="fc-kicker">PILIHAN {service.name.toUpperCase()}</p><h2>Mulai dari<br /><em>kebutuhanmu.</em></h2><p>{service.note}</p></div><p className="fc-data-note">Harga dan isi layanan contoh — konfirmasi pemilik sebelum rilis.</p><div className="fc-treatment-list">{service.items.map(([h, p, price], i) => <article key={h}><span className="fc-kicker">0{i + 1}</span><h3>{h}</h3><p>{p}</p><strong>{price}</strong></article>)}</div></section><section className="fc-section fc-tinted"><p className="fc-kicker">SEBELUM KUNJUNGAN</p><h2>Sedikit persiapan.<br /><em>Lebih nyaman.</em></h2><Steps items={preparations[service.slug]} /></section><section className="fc-section fc-faq-section"><div><p className="fc-kicker">YANG PERLU DIKETAHUI</p><h2>Konsultasi<br /><em>lebih dulu.</em></h2><p>Siapkan referensi dan ceritakan riwayat perawatanmu. Tim akan membantu menyesuaikan pilihan.</p><Link to="/harga" className="fc-text-link">Cek rentang harga</Link></div><FAQ compact items={serviceFAQs[service.slug] || faqs} /></section><CTA to={bookingURL(service.name, service.place === "Tebet" ? "Tebet" : "")} /></>}
{route === '/harga' && <><section className="fc-page-intro"><p className="fc-kicker">DAFTAR HARGA</p><h1>Rencanakan.<br /><em>Dengan jelas.</em></h1><p>Rentang biaya untuk memulai percakapan. Harga akhir dibahas bersama tim sebelum perawatan.</p></section><section className="fc-section"><div className="fc-filters" aria-label="Kategori harga">{['Semua', 'Hair', 'Beauty Bar', 'Wellness & Wedding'].map(f => <button key={f} aria-pressed={priceFilter === f} onClick={() => setPriceFilter(f)}>{f}</button>)}</div><PriceList filter={priceFilter} /><p className="fc-help">Ukuran rambut, tier stylist, jumlah produk, dan jenis layanan dapat memengaruhi biaya.</p></section><section className="fc-section fc-tinted"><p className="fc-kicker">KENALI ESTIMASINYA</p><div className="fc-values">{[['Ukuran rambut', 'S, M, L, atau XL menjadi dasar beberapa layanan rambut.'], ['Tier stylist', 'Creative atau Master disesuaikan dengan pilihanmu.'], ['Tambahan produk', 'Gram keratin dan proses bleach dibahas sebelum pengerjaan.']].map(([h, p]) => <article key={h}><h3>{h}</h3><p>{p}</p></article>)}</div></section><CTA /></>}
{branch && <><section className="fc-service-hero"><div><p className="fc-kicker">FENDY & CO / JAKARTA SELATAN</p><h1><em>{branch.name}.</em></h1><h2>{branch.desc}</h2><p>{branch.address}<br />Jakarta Selatan</p><Link to={bookingURL("", branch.name)} className="fc-button">Rencanakan kunjungan </Link></div><Photo i={branch.img} alt={'Suasana salon untuk halaman ' + branch.name} /></section><section className="fc-section fc-faq-section"><div><p className="fc-kicker">DI CABANG INI</p><h2>Datang untuk<br /><em>dirimu.</em></h2><p>{branch.text}</p></div><div className="fc-local-services">{services.filter(s => branch.slug === 'tebet' || s.place === 'Semua cabang').map(s => <Link to={'/layanan/' + s.slug} key={s.slug}>{s.name}</Link>)}</div></section><section className="fc-section fc-tinted fc-faq-section"><div><p className="fc-kicker">TEMUKAN KAMI</p><h2>{branch.name}</h2><p>{branch.address}, Jakarta Selatan.</p><a className="fc-text-link" href={'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Fendy & Co ' + branch.address + ' Jakarta Selatan')} target="_blank" rel="noreferrer">Cari alamat di Maps</a></div><div><h3>Sebelum berangkat</h3><p>Konfirmasikan waktu kunjungan dan layanan dengan cabang terlebih dahulu. Untuk beberapa layanan, konsultasi dan persiapan tambahan diperlukan.</p><BranchContact branch={branch} /></div></section><CTA to={bookingURL("", branch.name)} /></>}
{route === '/tentang' && <><section className="fc-page-intro"><p className="fc-kicker">TENTANG FENDY & CO</p><h1>Lebih dari<br /><em>gaya rambut.</em></h1><p>Ruang untuk mengenali yang kamu suka, merawat diri, dan pulang dengan rasa nyaman.</p></section><div className="fc-wide-photo"><Photo i={0} alt="Suasana ruang salon" /></div><section className="fc-section fc-faq-section"><div><p className="fc-kicker">CARA KAMI MERAWAT</p><h2>Personal.<br /><em>Sejak percakapan pertama.</em></h2></div><div><p>Gaya yang baik dimulai dari mendengarkan. Tentang rutinitasmu, kondisi rambutmu, dan perubahan yang kamu bayangkan.</p><p>Di Gandaria, Kemang, dan Tebet, pilihan hair dan beauty bertemu dengan konsultasi yang membantu kamu mengambil keputusan. Untuk waktu perawatan lebih lengkap, kenali layanan wellness di Tebet.</p><Link to="/layanan" className="fc-text-link">Kenali layanan kami</Link></div></section><section className="fc-section fc-tinted"><p className="fc-kicker">TIGA ALAMAT UNTUKMU</p><BranchList /></section><CTA /></>}
{route === '/kontak' && <><section className="fc-page-intro"><p className="fc-kicker">KONTAK</p><h1>Mulai dengan<br /><em>percakapan.</em></h1><p>Pilih cabang yang ingin kamu kunjungi, atau kenali kami lebih dekat lewat Instagram.</p></section><section className="fc-section"><div className="fc-contact-grid">{branches.map(b => <BranchContact key={b.slug} branch={b} />)}</div><div className="fc-contact-band"><div><h2>Halo, <em>@fendynco.</em></h2><p>Referensi gaya dan informasi terbaru dari Fendy & Co.</p></div><a href="https://www.instagram.com/fendynco/" className="fc-button" target="_blank" rel="noreferrer">Buka Instagram </a></div></section><section className="fc-section fc-tinted fc-faq-section"><h2>Sudah punya<br /><em>rencana?</em></h2><div><p>Susun layanan, cabang, tanggal, dan catatan dalam satu rincian. Bawa saat menghubungi tim untuk konfirmasi.</p><Link to="/reservasi" className="fc-button">Siapkan rencana kunjungan </Link></div></section></>}
{route === '/reservasi' && <><section className="fc-page-intro"><p className="fc-kicker">RENCANA RESERVASI</p><h1>Waktu untuk<br /><em>dirimu.</em></h1><p>Pilih layanan dan waktu yang kamu inginkan. Slot baru pasti setelah konfirmasi dari cabang.</p></section><section className="fc-section"><Booking query={query} /></section></>}
{route === '/faq' && <><section className="fc-page-intro"><p className="fc-kicker">PERTANYAAN UMUM</p><h1>Sebelum<br /><em>duduk di kursi.</em></h1><p>Tentang layanan, biaya, dan rencana kunjunganmu.</p></section><section className="fc-section fc-faq-full"><FAQ /></section><section className="fc-section fc-tinted fc-contact-band"><h2>Masih ingin<br /><em>bertanya?</em></h2><Link to="/kontak" className="fc-button">Hubungi tim </Link></section></>}
{['/kebijakan-privasi', '/syarat-ketentuan'].includes(route) && <><section className="fc-page-intro"><p className="fc-kicker">INFORMASI KUNJUNGAN</p><h1>{route === '/kebijakan-privasi' ? 'Kebijakan' : 'Syarat &'}<br /><em>{route === '/kebijakan-privasi' ? 'privasi.' : 'ketentuan.'}</em></h1><p>Informasi untuk memahami penggunaan halaman dan persiapan kunjungan.</p></section><section className="fc-section fc-legal">{(route === '/kebijakan-privasi' ? [['Rincian yang kamu isi', 'Form rencana kunjungan menampilkan nama, nomor kontak, pilihan layanan, dan catatan di halaman ini. Tombol periksa tidak mengirim rincian ke salon.'], ['Saat menyalin rincian', 'Rincian disalin hanya ketika kamu memilih tombol Salin. Kamu menentukan sendiri kepada siapa rincian tersebut dibagikan.'], ['Tautan ke layanan lain', 'Instagram dan Google Maps memiliki pengaturan serta kebijakan privasi masing-masing. Periksa tujuan tautan sebelum membagikan informasi.'], ['Informasi pribadi', 'Hindari menuliskan data sensitif yang tidak diperlukan untuk konsultasi. Untuk pertanyaan mengenai data yang sudah dibagikan ke cabang, hubungi tim melalui saluran resminya.']] : [['Rencana dan konfirmasi', 'Pilihan tanggal dan jam di halaman ini adalah permintaan yang perlu dibicarakan dengan cabang. Rincian yang tampil belum berarti slot tersedia atau reservasi diterima.'], ['Biaya perawatan', 'Rentang harga membantu perencanaan. Pilihan layanan, kondisi rambut, tambahan produk, dan tier stylist dapat memengaruhi biaya akhir.'], ['Pembayaran dan DP', 'Ketentuan pembayaran serta DP dijelaskan oleh cabang saat konfirmasi. Halaman ini tidak menerima pembayaran atau menjamin slot.'], ['Perubahan dan kesesuaian layanan', 'Konfirmasikan perubahan jadwal kepada cabang secepatnya. Ceritakan kondisi rambut, kulit, atau sensitivitas yang relevan agar tim dapat menilai kesesuaian perawatan.']]).map(([h, p], i) => <article key={h}><span className="fc-kicker">0{i + 1}</span><h2>{h}</h2><p>{p}</p></article>)}<Link to="/kontak" className="fc-text-link">Hubungi tim untuk pertanyaan</Link></section></>}
{!known && <section className="fc-page-intro"><p className="fc-kicker">HALAMAN TIDAK DITEMUKAN</p><h1>Kembali ke<br /><em>pilihanmu.</em></h1><Link to="/" className="fc-button">Buka beranda</Link></section>}
</main><footer className="fc-footer"><div className="fc-footer-top"><div><p className="fc-kicker">FENDY & CO</p><h2>Gaya yang<br /><em>terasa kamu.</em></h2><a href="https://www.instagram.com/fendynco/" target="_blank" rel="noreferrer">Instagram</a></div><div><h3>Layanan</h3>{services.map(s => <Link key={s.slug} to={'/layanan/' + s.slug}>{s.name}</Link>)}</div><div><h3>Informasi</h3>{[['Harga', '/harga'], ['Tentang', '/tentang'], ['Reservasi', '/reservasi'], ['FAQ', '/faq'], ['Kontak', '/kontak']].map(([n, p]) => <Link key={p} to={p}>{n}</Link>)}</div><div><h3>Cabang</h3>{branches.map(b => <Link key={b.slug} to={'/cabang/' + b.slug}>{b.name}</Link>)}</div></div><div className="fc-footer-word">FENDY <em>&</em> CO</div><div className="fc-footer-bottom"><span>© Fendy & Co Hairdesign & Beauty</span><div><Link to="/kebijakan-privasi">Kebijakan Privasi</Link><Link to="/syarat-ketentuan">Syarat & Ketentuan</Link></div></div></footer>{lightbox !== null && <div className="fc-lightbox" role="dialog" aria-modal="true" aria-label="Inspirasi gaya" onKeyDown={e => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'Tab') e.preventDefault();
    }} onClick={() => setLightbox(null)}><button autoFocus aria-label="Tutup foto" onClick={() => setLightbox(null)}>Tutup ×</button><Photo i={lightbox} alt="Inspirasi gaya rambut diperbesar" /></div>}</div>;
};