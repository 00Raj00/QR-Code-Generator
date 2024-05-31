let imgBox = document.querySelector('#img-box');
let QrImg = document.querySelector('#qrImg');
let input = document.querySelector('#qrText');


function generateQR() {
    if(input.value.length > 0) {
        QrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
        imgBox.classList.add('show-img');
    }
    else {
        alert("Please enter some Value");
    }

}