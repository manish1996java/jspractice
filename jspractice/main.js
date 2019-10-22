window.addEventListener('load',init);

    var input1;
    var input2;
    var btn;
    var ans;

function init(){
    input1 = document.querySelector('.myinput1');
    input2 = document.querySelector('.myinput2');
    btn = document.querySelector('#btn');
    ans = document.querySelector('#ans');
    
    btn.addEventListener('click',add);

    console.log(input1);
    console.log(input2);
    console.log(btn);
}

function add(){
    var inp1 = parseInt(input1.value);
    var inp2 = parseInt(input1.value);
    var sum = inp1+inp2;
    ans.innerText= sum;
    
}
function sub(){
    var inp1 = parseInt(input1.value);
    var inp2 = parseInt(input1.value);
    var sub = inp1-inp2;
    ans.innerText= sub;
}
function mul(){
    var inp1 = parseInt(input1.value);
    var inp2 = parseInt(input1.value);
    var mul = inp1*inp2;
    ans.innerText= mul;
}
function div(){
    var inp1 = parseInt(input1.value);
    var inp2 = parseInt(input1.value);
    var div = inp1/inp2;
    ans.innerText= div;

}





















// window.addEventListener('load',init);

// var input1;
// var input2; 
// var h2;

// function init(){
// input1 = document.querySelector('.myinput1');
// input2 = document.querySelector('.myinput2'); 
// h2 = document.querySelector('#ans');

// var btn = document.querySelector('#btn');
// btn.addEventListener('click',add);
// // btn.addEventListener("",printing);
// // console.log(input1);
// // console.log(input2);
// // console.log(btn);
// }

// function add(){
//     var inp1 = parseInt(input1.value);
//     var inp2 = parseInt(input2.value);
//     var sum = inp1+inp2;
//     console.log(sum);
//     console.log(h2);
//     h2.innerText = sum;
// }