/**
 * 1. filter
 * filter merupakan salah satu dari array method dan pada umumnya tidak memutasi(mengubah) struktur data aslinya dan hanya menyeleksi hasil dari parameter yang diinginkan.
 */
// Contoh penggunaan filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers);

/**
 * 2. toLowerCase
 * toLowerCase merupakan salah satu dari string method dan pada umumnya tidak memutasi (mengubah) string asli. Sebagai gantinya, metode ini mengembalikan string baru yang berisi salinan string asli dengan semua huruf diubah menjadi huruf kecil. Sehingga, string asli tetap tidak berubah setelah toLowerCase() dipanggil.
 */
// Contoh penggunaan toLowerCase
let kata = "HELLO WORLD";
let kataKecil = kata.toLowerCase();

console.log(kataKecil);

/**
 * 3. includes
 * includes merupakan salah satu dari array method dan pada umumnya tidak memutasi (mengubah) array atau string asli, hanya mengembalikan nilai true atau false berdasarkan apakah nilai yang dicari ditemukan dalam array atau string.
 */
// Contoh penggunaan includes
let buah = ["apel", "pisang", "mangga", "jeruk"];
let hasil = buah.includes("mangga");

console.log(hasil); // Output: true

/**
 * 4. slice
 * slice merupakan salah satu dari array method dan tidak memutasi (mengubah) array atau string asli, hanya mengembalikan array atau string baru yang berisi salinan dari bagian yang dipilih.
 */
// Contoh penggunaan slice
let bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni"];
let slice1 = bulan.slice(2, 5);

console.log(slice1); // Output: ['Maret', 'April', 'Mei']

/**
 * 5. unshift
 * unshift merupakan salah satu dari array method dan memutasi (mengubah) array asli. unshift menambahkan satu atau lebih elemen ke awal array dan menggeser elemen-elemen lainnya ke indeks yang lebih tinggi.
 */
// Contoh penggunaan unshift
let array = [2, 3];
array.unshift(0, 1);
console.log(array);

/**
 * 6. indexOf
 * indexOf merupakan salah satu dari string method dan tidak memutasi (mengubah) string atau array asli, hanya mengembalikan nilai indeks dari nilai yang dicari. Sehingga, array atau string asli tetap tidak berubah setelah indexOf() dipanggil.
 */
// Contoh penggunaan indexOf
let buahan = ["apel", "pisang", "mangga", "jeruk"];
let indeksBuah = buahan.indexOf("mangga");

console.log(indeksBuah);

/**
 * 7. splice
 * splice merupakan salah satu dari array method dan memutasi (mengubah) array asli. splice Mengubah konten array dengan menghapus atau mengganti elemen yang ada dan/atau menambahkan elemen baru.
 */
// Contoh penggunaan splice
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1, "a", "b");
console.log(arr);

/**
 * 8. Math.max
 * Math.max merupakan salah satu dari math method dan tidak memutasi (mengubah) nilai asli, hanya mengembalikan nilai terbesar dari sejumlah argumen numerik yang diberikan atau dari array numerik yang diberikan.
 */
// Contoh penggunaan Math.max
let nilaiTerbesar = Math.max(10, 20, 5, 30, 15);

console.log(nilaiTerbesar);

/**
 * 9. Math.min
 * Math.min merupakan salah satu dari math method dan tidak memutasi (mengubah) nilai asli, hanya mengembalikan nilai terkecil dari sejumlah argumen numerik yang diberikan atau dari array numerik yang diberikan.
 */
// Contoh penggunaan Math.min
let nilaiTerkecil = Math.min(10, 20, 5, 30, 15);

console.log(nilaiTerkecil);

/**
 * 10. Math.round
 * Math.round merupakan salah satu dari math method dan tidak memutasi (mengubah) nilai asli, hanya mengembalikan nilai yang sudah dibulatkan ke bilangan bulat terdekat.
 */
// Contoh penggunaan Math.round
let bilanganDesimal = 7.6;
let round = Math.round(bilanganDesimal);

console.log(round);
