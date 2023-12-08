var overlay1=document.querySelector(".overlay1");
var modal_1=document.querySelector(".modal-1");
var openButton=document.querySelector(".btn_phone");
var closeButton=document.querySelector(".btn_x_1");

function openmodal1 () {
modal_1.classList.remove("hidden1");
overlay1.classList.remove("hideen1");
}

function closemodal1 () {
modal_1.classList.add("hidden1");
overlay1.classList.add("hidden1");
closeOrder()
}

openButton.addEventListener("click",openmodal1);
closeButton.addEventListener("click",closemodal1);
overlay1.addEventListener("click",closemodal1)

// ---------------------------------------------------

var modal_2=document.querySelector(".modal-2");
var overlay2=document.querySelector(".overlay2");
var order=document.querySelector(".order");
var btn_call=document.querySelector(".btn-call");
var btn_x_2=document.querySelector(".btn_x_2");

function openOrder () {
    modal_1.classList.add("hidden1");
    modal_2.classList.remove(".hidden2");
    overlay1.classList.add("hidden1");
    overlay2.classList.remove("hidden2");
}

function closeOrder () {
    modal_2.classList.add("hidden2");
    overlay2.classList.add("hidden2");
}

overlay2.addEventListener("click",closeOrder);
btn_call.addEventListener("click",openOrder);
