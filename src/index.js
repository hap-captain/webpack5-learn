import helloWorld from './hello-world'
import imgSrc from '../assets/img1.png'
import logoSvg from '../assets/img2.svg'
import text from '../assets/text1.txt'
import jpgImg from '../assets/img3.jpg'
import '../assets/css/style.css'
import '../assets/css/style.less'

helloWorld()

const img = document.createElement('img');
img.src = imgSrc
document.body.appendChild(img);

const img2 = document.createElement('img');
img2.src = logoSvg;
img2.style.cssText = 'width: 100px; height: 100px;';
document.body.appendChild(img2)

const block = document.createElement('div');
block.style.cssText = 'width: 200px;height: 50px;background-color: lightpink;'
block.textContent  = text;
document.body.appendChild(block);

const newImg = document.createElement('img');
newImg.src = jpgImg;
newImg.style.cssText = "width: 100px; height: 100px;";
document.body.appendChild(newImg);

document.body.classList.add('hello')