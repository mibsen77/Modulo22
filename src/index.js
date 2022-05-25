import './styles.scss'
import img from './matrix.png'
import img_2 from './matrix_3.jpg'

function rootStyle(){
    const elemRoot = document.getElementById('root')
    elemRoot.classList.add('container')
}

function titleComponent(){
    const elemH1 = document.createElement('h1')
    elemH1.innerHTML = 'Hello world 7'
    elemH1.classList.add('title')
    return elemH1
}

function imageComponent(imagem){
    const elemImg = new Image(40,40)
   
    elemImg.src =imagem
   
    return elemImg
}

rootStyle()
document.getElementById('root').appendChild(titleComponent())
document.getElementById('root').appendChild(imageComponent(img))
document.getElementById('root').appendChild(imageComponent(img_2))