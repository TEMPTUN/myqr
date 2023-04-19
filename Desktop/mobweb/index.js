const wrapper = document.querySelector('.wrapper');
let qrInput = document.getElementById('inp');
let generateBtn = document.getElementById('button');
qrimg = wrapper.querySelector(".qrcode img");

let prevalue;

function show(elementId) { 
    document.getElementById("id1").style.display="none";
    document.getElementById(elementId).style.display="block";
}

generateBtn.addEventListener("click", () => {
    console.log("hello");
    let currentValue = qrInput.value.trim();
    if(currentValue == prevalue || !currentValue){
        return;
    }else{
        prevalue = currentValue;
        generateBtn.innerText = "Generating...";
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${currentValue}`;
        console.log(qrimg.src);
        qrimg.addEventListener("load", () => {
            wrapper.classList.add("active");
            generateBtn.innerText = "Generate";
        });
    }
});


qrInput.addEventListener("keyup", (e) => {
    if(!qrInput.value.trim()){
        wrapper.classList.remove("active");
        prevalue = "";
    }
});
