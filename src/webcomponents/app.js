import './image-figures';
import './kucingjs-figure';
import './dicoding-figure';

let imageFigureElement = document.querySelector('#kucing-figure');

// Jika tidak tersedia pada DOM maka dibuat secara sintaksis.
if (!imageFigureElement) {
    const divGambarKucing = document.querySelector('#gambarkucing');
    imageFigureElement = document.createElement('kucing-figure');
    divGambarKucing.appendChild(imageFigureElement);
}

// mengubah/manambahkan nilai attribute caption.
setTimeout(() => {
    imageFigureElement.setAttribute('caption', 'Gambar 1');
}, 2000);

// menghapus imageFigureElement dari DOM
setTimeout(() => {
    // imageFigureElement.remove();
}, 5000);
