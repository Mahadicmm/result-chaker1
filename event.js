let h1 = document.getElementById('h1');
let input = document.getElementById('input')
let show_result = document.getElementById('show-result');
h1.style.color = 'red';
show_result.style.color ='white';
show_result.style.fontSize ='35px';

let btn = document.getElementById('btn').addEventListener('click', function(){
    show_result.innerText = input.value;
    let GPA = input.value;
    if(GPA >= 80 && GPA <= 100){
        show_result.innerText = 'A+';
        document.body.style.backgroundColor = 'green';
    } else if(GPA >= 70 && GPA <= 79){
        show_result.innerText = 'A';
        document.body.style.backgroundColor = 'green';
    } else if(GPA >= 60 && GPA <= 69){
        show_result.innerText = 'A-';
        document.body.style.backgroundColor = 'green';
    } else if(GPA >= 50 && GPA <= 59){
        show_result.innerText = 'B';
        document.body.style.backgroundColor = 'green';
    } else if(GPA >= 33 && GPA <= 49){
        show_result.innerText = 'C';
        document.body.style.backgroundColor = 'green';
    } else if(GPA >= 0 && GPA <= 32){
        show_result.innerText =' sorry you are fail😢';
        document.body.style.backgroundColor = 'green';
        show_result.style.color ='#fff';
    } else if(GPA >100){
        show_result.innerText = 'This Result is not a valid';
        document.body.style.backgroundColor = 'green';
    }
    else{
        show_result.innerText = 'please type a valid number';
        document.body.style.backgroundColor = 'green';
        show_result.style.color ='#fff';
    }
    
})