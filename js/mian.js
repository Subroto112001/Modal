// queryslection here :-
const ModalParentbtn = document.querySelector('.ModalParentbtn');


const ModalOverlay = document.querySelector(".ModalOverlay");


const ModalOverlayBtn = document.querySelector(".ModalOverlayBtn");


//  modal open button js code :-
ModalParentbtn.addEventListener('click', () => {
  ModalOverlay.style.zIndex = '10';  
})


// modal close buton js code :-
ModalOverlayBtn.addEventListener('click', ()=> {
    ModalOverlay.style.zIndex = '-10';
});
