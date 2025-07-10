let buah =["apel","jeruk","mangga"];
buah.push("kelengkeng");
// console.log(buah);
buah.map((b, i) => console.log(i + 1 + ". " + b));
let user = {
    nama:"gusma",
    umur: 25,
    alamat:{
        kota:"jakarta",
        kodepos:12345
    }
}

console.log(user.nama);
console.log(user.alamat);

//convert array to json

hasilconvert = JSON.stringify(buah);
console.log(buah);
console.log(hasilconvert);
console.log(typeof(buah));
console.log(typeof(hasilconvert));