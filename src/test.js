import emStyle from "./style.js";

let style = document.querySelector('.style')
let codeContainer = document.querySelector('.code-Container')
let box2 = document.querySelector('.box2')
let hello = document.querySelector('#hello')

let btnPause = document.querySelector('.btnPause')
let btnPlay = document.querySelector('.btnPlay')
let btnSlow = document.querySelector('.btnSlow')
let btnNormal = document.querySelector('.btnNormal')
let btnFast = document.querySelector('.btnFast')
let btnAgain = document.querySelector('.btnAgain')

// 事件委托点击box里面的div元素会触发声音
let vocality = () => {
    box2.addEventListener('click', (e) => {
        const t = e.target
        if (t.tagName.toLowerCase() === 'div') {
            hello.play()
        }
    })
}

// 记录到第几个字符串结束
let i = 0
let run = () => {
    style.innerHTML = emStyle.substr(0, i)
    codeContainer.innerText = emStyle.substr(0, i)
    codeContainer.scrollTop = codeContainer.scrollHeight
    i += 1
    if (i > emStyle.length) {
        vocality();
        window.clearInterval(id)
    }
}

let time = 100
let id
function implement() {
    id = setInterval(()=>{
            run()
        }
        ,time
    )
}
implement()

btnPause.onclick = ()=>{
    window.clearInterval(id)
    console.log(id)
}
btnPlay.onclick = ()=>{
    window.clearInterval(id)
    implement()
}
btnSlow.onclick = ()=>{
    window.clearInterval(id)
    time = 100
    implement()
}
btnNormal.onclick = ()=>{
    window.clearInterval(id)
    time = 50
    implement()
}
btnFast.onclick = ()=>{
    window.clearInterval(id)
    time = 10
    implement()
}
btnAgain.onclick = ()=>{
    window.clearInterval(id)
    i = 0
    time = 100
    implement()
}