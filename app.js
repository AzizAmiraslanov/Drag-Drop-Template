// // Drag and Drop 1 template

// // let empties = document.querySelectorAll(".empty");
// // let fill = document.querySelector(".fill");

// // fill.addEventListener("dragstart", dragStart);
// // fill.addEventListener("dragend", dragEnd);

// // for (let empty of empties) {
// //     empty.addEventListener("dragover", dragOver);
// //     empty.addEventListener("dragenter", dragEnter);
// //     empty.addEventListener("dragleave", dragLeave);
// //     empty.addEventListener("drop", dragDrop);
// // }

// // function dragStart() {
// //     this.className += " solid";
// //     setTimeout(() => (this.className = "none"), 0);
// // }

// // function dragEnd() {
// //     this.className = "fill";
// // }


// // function dragOver(e) {
// //     e.preventDefault();
// // }

// // function dragEnter(e) {
// //     e.preventDefault();
// //     this.className += ' dashed';
// // }

// // function dragLeave() {
// //     this.className = 'empty';
// // }

// // function dragDrop() {
// //     this.className = 'empty';
// //     this.append(fill);
// // }



// // Drag and Drop 2 template

// // let itemImages = document.querySelectorAll(".itemImage");
// // let box = document.querySelectorAll(".box");

// // for (let i = 0; i < itemImages.length; i++) {
// //     itemImages[i].addEventListener("dragstart", dragStart);
// //     itemImages[i].addEventListener("dragend", dragEnd);
// // }

// // function dragStart() {
// //     setTimeout(() => (this.className = "none"), 0);
// // }

// // function dragEnd() {
// //     setTimeout(() => (this.className = "none"), 0);
// // }

// // for (let j = 0; j < box.length; j++) {
// //     box[j].addEventListener("dragover", dragOver);
// //     box[j].addEventListener("dragenter", dragEnter);
// //     box[j].addEventListener("dragleave", dragLeave);
// //     box[j].addEventListener("drop", dragDrop);
// // }

// // function dragOver(e) {
// //     e.preventDefault();
// //     this.className += ' solid'
// // }

// // function dragEnter(e) {
// //     e.preventDefault();
// //     this.className += ' solid'
// // }

// // function dragLeave() {
// //     this.className = 'box';
// // }

// // function dragDrop() {
// //     //    let a = document.querySelector("body > div.selectImage > div.none > img");
// //     let a = document.querySelector("div.selectImage > div.none > img");
// //     this.className = 'itemImage';
// //     this.append(a);
// //     console.log(a);

// // }






let itemImages = document.querySelectorAll(".itemImage");
let box = document.querySelectorAll(".box");

for (let i = 0; i < itemImages.length; i++) {
    itemImages[i].addEventListener("dragstart", dragStart);
    itemImages[i].addEventListener("dragend", dragEnd);
}

function dragStart() {
    setTimeout(() => (this.className = "none"), 0);
}

function dragEnd() {
    // if (dragDrop.className == 'box') {
    //     setTimeout(() => (this.className.remove('none')), 0);  
    //     console.log("olmadi");
    // } 
    // else {
    //     alert("Secdiyiniz resmi bos qutuya yerlesdirmediniz. Tekrar edin");
    //     setTimeout(() => (this.className = 'itemImage'), 0);
    // };
    //  if (dragDrop.className != 'box') {
    alert("Secdiyiniz resmi bos qutuya yerlesdirmediniz. Tekrar edin");
    setTimeout(() => (this.className = 'itemImage'), 0);

    // };
}

for (let j = 0; j < box.length; j++) {
    box[j].addEventListener("dragover", dragOver);
    box[j].addEventListener("dragenter", dragEnter);
    box[j].addEventListener("dragleave", dragLeave);
    box[j].addEventListener("drop", dragDrop);
    
    box[j].addEventListener("dragstart", dragStartBox);
    function dragStartBox(e) {
        this.removeAttribute('draggable');
        alert("Yerlesdirilen Sekili bir daha Drag Ede bilmezsiniz");
        e.preventDefault();
    }
}

function dragOver(e) {
    e.preventDefault();
    this.className += ' solid';
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {
    this.classList.remove("solid");
}

function dragDrop() {
    let img = document.querySelector("div.selectImage > div.none > img");
    this.className = 'itemImage';
    this.append(img);

};


// Daxil edilen reqemin Fatorialinin alma kodu 
// const number = parseInt(prompt('Faktorial tapilmasini istediyiniz reqem daxil edin: '));

// if (number < 0) {
//     console.log('Faktorail ucun Menfi reqem yaza bilmmezsiz. Yeniden musbest reqem daxil edin');
// }

// else if (number === 0) {
//     console.log(`Yazdiqiniz ededin faktoriali: ${number} 1 -dir.`);
// }

// else {
//     let fact = 1;
//     for (i = 1; i <= number; i++) {
//         fact *= i;
//     }
//     console.log(`Daxil etdiyiniz eded: ${number}, Faktoriali ise ${fact}.`);
// }