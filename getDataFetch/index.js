import fetch from "node-fetch";
//ambil data
const getData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
        const data = await response.json();
        console.log("data dari Api ambil 3 :", data.slice(0,3));

    } catch (error) {
        console.error("gagal ambil data code:", error);
    }
}

const postData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'Belajar Node.js',
        body: 'Ini data dari POST',
        userId: 1,
      }),
    });

    const data = await response.json();
    console.log("Data berhasil dikirim:", data);
  } catch (error) {
    console.error("Gagal kirim data:", error);
  }
};

getData();
postData();
