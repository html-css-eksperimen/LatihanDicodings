// import './article-item-component';
// import article from './artikel-item';
import './article-itemlist-component';
import { articles as artikelList } from './artikel-itemlist';

const containerEl = document.querySelector('.container');
// const articleElement = document.createElement('article-item');
const artikelListElement = document.createElement('artikel-list');
artikelListElement.articles = artikelList;

containerEl.append(artikelListElement);
