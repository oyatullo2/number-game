document.addEventListener('keydown',function(event){
    if(event.key==='Enter'){
        this.documentElement.querySelector("#check").click();
    }
})
let random=parseInt(Math.random(document.querySelector("#box"))*11);
let score=10;
let result_div_p2=document.querySelector("#score")
let again=document.querySelector("#again")
again.disabled=true;
console.log(random)
document.querySelector("#check").addEventListener('click',function(){
    score--;
    result_div_p2.innerHTML=`💯 Score : ${score}`
    let UserNum=document.querySelector("#number").value;
    let num=Number(UserNum);
    let body=document.querySelector('body')
    let hr=document.querySelector('hr');
    let button=document.querySelector('button')
    let input=document.querySelector('input')
    let box=document.querySelector("#box");
    let h1=document.querySelector('h1');
    let p=document.querySelector('p');
    let result_div_p1=document.querySelector("#result-top-bottom")
    let result_div_p3=document.querySelector("#highscore")
    let check=document.querySelector("#check")
    let again=document.querySelector("#again")
    if(score===0){
        check.disabled=true;
        result_div_p1.innerHTML='Game Over !';
        body.style.backgroundColor='red'
        h1.style.color='white'
        p.style.color='white'
        result_div_p1.style.color='white'
        result_div_p2.style.color='white'
        result_div_p3.style.color='white';
        again.disabled=false;
    }
    if(num===random){
        box.innerHTML=`${random}`
        body.style.backgroundColor=' rgb(54, 237, 61)'
        hr.style.backgroundColor='black'
        button.style.color='white'
        button.style.backgroundColor='black'
        input.style.borderColor='black'
        input.style.color='black'
        input.style.backgroundColor='transparent'
        box.style.backgroundColor='black'
        box.style.color='white'
        h1.style.color='black'
        p.style.color='black'
        result_div_p1.style.color='white'
        result_div_p2.style.color='black'
        result_div_p3.style.color='black'
        check.style.backgroundColor='black'
        check.style.color='white'
        result_div_p1.innerHTML='Correct ✅'
        result_div_p3.innerHTML=`🥇 Highscore : ${score}`
        check.disabled=true
        again.disabled=false;
    }
    else if(score!=0 && num<random){
        result_div_p1.innerHTML='Low number !'
    }
    else if(score!=0 && num>random){
        result_div_p1.innerHTML='High number !'
    }
})
document.querySelector("#again").addEventListener('click',function(a){
    let again=a.target; 
    let check=document.querySelector("#check")
    let input=document.querySelector('input')
    let UserNum=document.querySelector("#number").value;
    let num=Number(UserNum);
    let body=document.querySelector('body')
    let hr=document.querySelector('hr');
    let button=document.querySelector('button')
    let box=document.querySelector("#box");
    let h1=document.querySelector('h1');
    let p=document.querySelector('p');
    let result_div_p1=document.querySelector("#result-top-bottom")
    let result_div_p3=document.querySelector("#highscore")
    input.value=''
    random = parseInt(Math.random() * 10) + 1;
    result_div_p1.innerHTML = 'Start guessing...';
    result_div_p2.innerHTML = `💯 Score : ${score}`;
    box.innerHTML = '?';
    body.style.backgroundColor = '';
    h1.style.color = '';
    p.style.color = '';
    score=10;
    result_div_p1.style.color = '';
    result_div_p2.style.color = '';
    result_div_p3.style.color = '';
    check.disabled = false;
    input.style.borderColor='white'
    check.style.backgroundColor='white'
    check.style.color='black'
    input.style.color='white'
    again.style.color='black'
    again.style.backgroundColor='white'
    hr.style.backgroundColor='white'
    box.style.backgroundColor='white'
    box.style.color='black'
    if(score>result_div_p3){
        result_div_p3.innerHTML=`🥇 Highscore : ${score}`
    }
    console.log(random)
})