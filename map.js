const Barang = [
  { nama: "Mouse", harga: 150000 },
  { nama: "Keyboard", harga: 300000 },
  { nama: "Monitor", harga: 1200000 }
];

const hargajual = Barang.map(barang=>({
  ...barang,
  hargajual1: `Rp${barang.harga.toLocaleString("id-ID")}`
}))

console.log(hargajual);