const nilaiKelulusan = new Promise((resolve, reject)=>{
    const BatasNilai = 60;
    if(BatasNilai >60 ){
        resolve("lulus");
    }else{
        reject("tidak lulus");
    }
});
nilaiKelulusan
.then(res=>{ console.log("lanjut sekolah smp")})
.catch(err=>{console.log("masih sekolah SD")});