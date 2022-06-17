import './index.css';
import imgJS from './assets/img.png';


console.log('hello world');

const img = document.createElement('img');
img.className = 'js-image';
img.src = imgJS;

document.body.append(img);