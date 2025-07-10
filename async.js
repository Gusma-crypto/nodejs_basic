function fetchData(){
    const hasil = new Promise((resolve)=>{
        setTimeout(()=>resolve("Waktu pengambilan Data"), 1000);
    });

    return hasil;
}

fetchData().then(console.log);


const getData = async()=>{
    let Data = await fetchData();
    console.log(Data);
}

getData();