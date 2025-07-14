const readline = require('readline');

rl =readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const tanya = (pertanyaan)=>{
    return new Promise((resolve, reject)=>{
        rl.question(pertanyaan, (jawaban)=>{
            resolve(jawaban);
        });
    });
}


const main = async()=>{
    const nama = await tanya("siapa namamu ? :");
    const hoby = await tanya("apa hobi mu? :");
    console.log('halo perkenalkan nama saya: '+nama+'✅ dan hobi saya adalah: '+hoby+'❤️');
    rl.close();
}

main()