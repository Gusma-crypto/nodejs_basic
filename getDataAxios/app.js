import { getData, getPostById } from './apiModule.js';

const output = document.getElementById('output');
const allBtn = document.getElementById('btn-all');
const byIdBtn = document.getElementById('btn-id');
const inputId = document.getElementById('input-id');

// Menampilkan semua data
allBtn.addEventListener('click', async () => {
  output.innerHTML = 'Loading semua data...';
  try {
    const data = await getData();
    output.innerHTML = data
      .slice(0, 5) // tampilkan 5 data saja
      .map(post => `<div><h3>${post.title}</h3><p>${post.body}</p></div>`)
      .join('');
  } catch (err) {
    output.innerHTML = `❌ Error: ${err.message}`;
  }
});

// Menampilkan data berdasarkan ID
byIdBtn.addEventListener('click', async () => {
  const id = inputId.value;
  output.innerHTML = `Mencari post ID ${id}...`;
  try {
    const post = await getPostById(id);
    output.innerHTML = `<div><h3>${post.title}</h3><p>${post.body}</p></div>`;
  } catch (err) {
    output.innerHTML = `❌ Error: ${err.message}`;
  }
});
