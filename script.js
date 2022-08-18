const mainBox = document.querySelector(".main__box")
let item = 0;
let truePoint = 0;
let falsePoint = 0;

function createQuestion(){
    item++
    const newDiv = document.createElement('div')
    newDiv.classList.add("question__box", "d-none")
    // newDiv.classList.add("d-none")
    setTimeout(() => {
        newDiv.classList.remove("d-none")
        newDiv.classList.add("box__scale")
    }, 700);
    let num = -175

    const interval = setInterval(() => {
        num+=5
        scroll(mainBox.scrollHeight-400,mainBox.scrollHeight-400)
        if (num > 0) {
            clearInterval(interval)
        }
    }, 20);

    const positive = Math.round(Math.random())
    const num1 = Math.round(Math.random()*10) + Math.round(Math.random()*10)*10
    const num2 = Math.round(Math.random()*10) + Math.round(Math.random()*10)*10
    const correctNum = positive ? num1+num2 : num1-num2
    let incorrectNum = correctNum >= 0 ? Math.round(Math.random()*10) + Math.round(Math.random()*10)*10 : (Math.round(Math.random()*10) + Math.round(Math.random()*10)*10) * -1
    const buttonsTF = Math.round(Math.random())
    newDiv.innerHTML = `
    <h1 class="question">${num1} ${positive ? "+" : "-"} ${num2}</h1>
    <div class="btns">
        <button class="answer1 ans${item}">10</button>
        <button class="answer2 ans${item}">20</button>
    </div>
    <div class="icon__true${item} icon__true d-none"></div>
    <div class="icon__false${item} icon__false d-none">X</div>
    `
    let buttons = document.querySelectorAll(`.ans${item}`)
    setTimeout(() => {
        buttons = document.querySelectorAll(`.ans${item}`)
        if(incorrectNum === correctNum){
            incorrectNum++
        }
        if(buttonsTF){
            buttons[0].textContent = correctNum;
            buttons[1].textContent = incorrectNum
        } else {
            buttons[1].textContent = correctNum;
            buttons[0].textContent = incorrectNum
        }
        
        buttons.forEach(e=>{
            e.addEventListener('click', ()=>{
                buttons.forEach(event=>event.disabled = true)
                lineFunk()
                createQuestion()
                if(+e.textContent === correctNum){
                    document.querySelector(".icon__true"+(item-1)).classList.remove("d-none")
                    truePoint++
                    document.querySelector('#correct').textContent = truePoint;
                } else {
                    document.querySelector(".icon__false"+(item-1)).classList.remove("d-none")
                    falsePoint++   
                    document.querySelector('#incorrect').textContent = falsePoint                
                }
            })
        })
    }, 1);
    mainBox.appendChild(newDiv)
}

function lineFunk(){
    // <div class="line"></div>
    const line = document.createElement('div')
    mainBox.appendChild(line)
    line.innerHTML = `<div class="line"></div>`
}

createQuestion()
// lineFunk()
// createQuestion()
// lineFunk()
// createQuestion()
// lineFunk()
// createQuestion()
