const p1=document.querySelector('#result')
const p2=document.querySelector('#category')
const kgVal=document.querySelector('#weight-val')
const cmVal=document.querySelector('#height-val')
let vaznnum=20
let ghadnum=100
function vaznfu(e){
    vaznnum=e.target.value
    kgVal.innerHTML=vaznnum+'kg'
    calculate()
}
function ghadfu(e){
    ghadnum=e.target.value
    cmVal.innerHTML=ghadnum+'cm'
    calculate()
}
function calculate(){
    let bmi=(vaznnum/((ghadnum/100)**2)).toFixed(1)
    p1.innerHTML=bmi
    if(bmi>30&& bmi<50){
        p2.innerHTML='normal'
    }
    if(bmi<30){
        p2.innerHTML='paiin'
    }
    if(bmi>50){
        p2.innerHTML='bala'
    }
}