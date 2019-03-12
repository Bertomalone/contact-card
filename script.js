// const btnClose = document.querySelector(".contact-cards__btn-close");
// const contactCard = document.querySelector(".contact-cards__card-item");

// btnClose.addEventListener("click", function() {
//     contactCard.style.display = "none";
// });

// with DOM Traversal
// const btnClose = document.querySelectorAll('.contact-cards__btn-close');
// const card = document.querySelectorAll('.contact-cards__card-item');

// console.log(btnClose);

// for(let i = 0;  i < btnClose.length; i++) {
//     // btnClose[i].addEventListener("click", function(){
//     //     // alert("ok ini card ke - " + i);
//     //     console.log(card[i]);
//     //     card[i].style.display = "none"; 
//     // });

//     btnClose[i].addEventListener("click", function(e) {
//         // console.log(e);
//         // e.target.parentElement.style.display = "none";
//         e.target.parentElement.parentElement.style.display = "none";
//     });
// }

// btnClose.forEach(function(el) {
//     el.addEventListener('click', function(e) {
//         console.log(e.target.parentElement.parentElement);
//         console.log(el);
//         el.parentElement.style.display = "none";
//         e.preventDefault();
//     })
// });

const container = document.querySelector('.container');

container.addEventListener('click', function(e) {
    
    if(e.target.className.toString().split(/\s+/)[2] == 'contact-cards__btn-close') {  
        e.target.parentElement.style.display = "none";
    }
});

