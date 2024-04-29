function SeleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
  if (nilaiAwal >= nilaiAkhir) {
    return "Nilai akhir harus lebih besar dari nilai awal";
  }

  if (dataArray.length <= 5) {
    return "Jumlah angka dalam dataArray harus lebih dari 5";
  }

  const hasilSeleksi = dataArray.filter((nilai) => nilai > nilaiAwal && nilai < nilaiAkhir);
  if (hasilSeleksi.length === 0) {
    return "Nilai tidak ditemukan";
  }

  return hasilSeleksi.sort((a, b) => a - b);
}

console.log(SeleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]));
console.log(SeleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]));
console.log(SeleksiNilai(4, 17, [2, 25, 4]));
console.log(SeleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]));
