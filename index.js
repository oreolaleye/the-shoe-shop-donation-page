 "use strict";

const alertDiv = document.getElementById("alert-div");
const closeAlert = document.getElementById("close-alert");
function successDonation(){
    alertDiv.classList.remove("hide");
}

function clearForm(){
    document.querySelector("form").reset();
    nameSpan.style.display = "block";
    emailSpan.style.display = "block";
    amountSpan.style.display = "block";
}

function closeAlertDiv(){
    alertDiv.classList.add("hide");
    clearForm();
}

const nameSpan = document.getElementById("nameSpan");
const emailSpan = document.getElementById("emailSpan");
const amountSpan = document.getElementById("amountSpan");



//  Paystack function
 function payWithPaystack(){
    
    const nameValue = document.getElementById("name").value;
    const emailValue = document.getElementById("email").value;
    const amountValue = document.getElementById("amount").value;


    if (nameValue === "" || nameValue === null && emailValue === "" 
    || emailValue === null && amountValue === "" || amountValue === null){
        nameSpan.style.display = "block";
        emailSpan.style.display = "block";
        amountSpan.style.display = "block";
    }else {
        var handler = PaystackPop.setup({
        key: 'pk_test_fe47aba6d899383b7806e6c78772290937232986',
        firstName: nameValue,
        email: emailValue,
        amount: amountValue*100,
        currency: "NGN",
       
        callback: function(response){
            successDonation();
        },
        onClose: function(){}
        });
        handler.openIframe();
    }

    

}
    function hideNameSpan(){
        nameSpan.style.display = "none";
    }
    document.getElementById("name").addEventListener("input", hideNameSpan);

    function hideEmailSpan(){
        emailSpan.style.display = "none";
    }
    document.getElementById("email").addEventListener("input", hideEmailSpan);

    function hideAmountSpan(){
        amountSpan.style.display = "none";
    }
    document.getElementById("amount").addEventListener("input", hideAmountSpan);


const h3Beginning = document.getElementById("beginning-heading");
const h3Faith = document.getElementById("faith-heading");
const h3Support = document.getElementById("support-heading");

const beginning = document.getElementById("beginning");
const faith = document.getElementById("faith");
const support = document.getElementById("support");

h3Beginning.onclick = function(){
    beginning.classList.remove("hide");
    h3Beginning.classList.add("clicked");
    faith.classList.add("hide");
    h3Faith.classList.remove("clicked");
    support.classList.add("hide");
    h3Support.classList.remove("clicked");
}

h3Faith.onclick = function(){
    faith.classList.remove("hide");
    h3Faith.classList.add("clicked");
    beginning.classList.add("hide");
    h3Beginning.classList.remove("clicked");
    support.classList.add("hide");
    h3Support.classList.remove("clicked");
}


h3Support.onclick = function(){
    support.classList.remove("hide");
    h3Support.classList.add("clicked");
    beginning.classList.add("hide");
    h3Beginning.classList.remove("clicked");
    faith.classList.add("hide");
    h3Faith.classList.remove("clicked");

}


const faq1 = document.getElementById("faq1");
const faq2 = document.getElementById("faq2");
const faq3 = document.getElementById("faq3");
const faq4 = document.getElementById("faq4");

const faqImg1 = document.getElementById("faqImg1");
const faqImg2 = document.getElementById("faqImg2");
const faqImg3 = document.getElementById("faqImg3");
const faqImg4 = document.getElementById("faqImg4");

const faqOne = document.getElementById("faqOne");
const faqTwo = document.getElementById("faqTwo");
const faqThree = document.getElementById("faqThree");
const faqFour = document.getElementById("faqFour");

let numClicks = 0;
faq1.onclick = function(){
    numClicks++;

    if (numClicks % 2 === 0){
        faqOne.classList.add("hide");
        faqImg1.style.transform = "rotate(0)";
        faq1.style.color = "gray";
    }else{
        faqOne.classList.remove("hide");
        faqImg1.style.transform = "rotate(180deg)";
        faq1.style.color = "black";
    }
}

faq2.onclick = function(){
    numClicks++;

    if (numClicks % 2 === 0){
        faqTwo.classList.add("hide");
        faqImg2.style.transform = "rotate(0)";
        faq2.style.color = "gray";
    }else{
        faqTwo.classList.remove("hide");
        faqImg2.style.transform = "rotate(180deg)";
        faq2.style.color = "black";
    }
}

faq3.onclick = function(){
    numClicks++;

    if (numClicks % 2 === 0){
        faqThree.classList.add("hide");
        faqImg3.style.transform = "rotate(0)";
        faq3.style.color = "gray";
    }else{
        faqThree.classList.remove("hide");
        faqImg3.style.transform = "rotate(180deg)";
        faq3.style.color = "black";
    }
}

faq4.onclick = function(){
    numClicks++;

    if (numClicks % 2 === 0){
        faqFour.classList.add("hide");
        faqImg4.style.transform = "rotate(0)";
        faq4.style.color = "gray";
    }else{
        faqFour.classList.remove("hide");
        faqImg4.style.transform = "rotate(180deg)";
        faq4.style.color = "black";
    }
}


const menu = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menu.onclick = function(){
    numClicks++;
    if (numClicks % 2 === 0){
        menuList.classList.add("hide")
    }else{
        menuList.classList.remove("hide")
    }
}