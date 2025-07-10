// const janji = new Promise((resolve, reject) => {
//   // proses async
//   if (berhasil) {
//     resolve(data);   // janji ditepati
//   } else {
//     reject(error);   // janji gagal
//   }
// });
const janjiMakan = new Promise((resolve, reject) => {
  const makananTersedia = false;

  if (makananTersedia) {
    resolve("Makanannya datang!");
  } else {
    reject("Lapar tapi tidak ada makanan.");
  }
});

janjiMakan
  .then(res => console.log(res))        // jika resolve
  .catch(err => console.log(err));      // jika reject
