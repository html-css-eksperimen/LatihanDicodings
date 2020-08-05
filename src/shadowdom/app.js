import './dicoding-figure-shadow';
import './dicoding-figure';

const divElement = document.querySelector('#shadombasic');

// Buat element yang ada di dalam shadow DOM
const headEl = document.createElement('h1');
headEl.innerText = 'Heading Element Shadow DOM';

// Melampirkan shadow root pada shadow host
// Mengatur mode shadow dengan nilai open
const shadowRoot = divElement.attachShadow({ mode: 'open' });
shadowRoot.appendChild(headEl);

// Contoh lain dari shadow dom
const divShadom = document.createElement('div');
const pShadomEl = document.createElement('p');
const imgElement = document.createElement('img');
const headCloseEl = document.createElement('h1');
headCloseEl.innerText = 'Hading Element Closed Shadow DOM';

pShadomEl.innerText = 'Paragraf yang ada di dalam shadow DOM bayangan';
imgElement.setAttribute(
    'src',
    'https://picsum.photos/id/204/536/354?grayscale',
);
imgElement.setAttribute('loading', 'lazy');

// Membuat shadow DOM yang tersimpan ke dalam div
const shadowRootDomDiv = divShadom.attachShadow({ mode: 'closed' });
shadowRootDomDiv.append(pShadomEl);
shadowRootDomDiv.append(imgElement);

// Styling shadow DOM element, karena style dari luar tidak akan bisa ke shadow DOM
shadowRootDomDiv.innerHTML += /* html */ `
        <style>
        p {
            color: green;
        }
        </style>
    `;

// Tambahkan div shadow element ke dalam body
document.body.appendChild(divShadom);

console.log(divElement.shadowRoot);
console.log(divElement.shadowRootDomDiv);

// Buat element lagi
const dicofigElement = document.createElement('figure-shadow');
dicofigElement.setAttribute('src', 'https://picsum.photos/200/300');
dicofigElement.setAttribute('alt', 'Gambar shadow ipsum');
dicofigElement.setAttribute('caption', 'caption shadow dom');
dicofigElement.setAttribute('kata-tambah', 'Tes element shadow dom');

const shadowconfEl = document.querySelector('#shadowconfig');
shadowconfEl.appendChild(dicofigElement);
