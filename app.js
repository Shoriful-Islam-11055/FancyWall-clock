setInterval(function(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds(); 

    let secondHand = document.getElementById("sec");
    secondHand.style.transform ="rotate("+second*6+"deg)";

    let minuteHand = document.getElementById("mint");
    minuteHand.style.transform ="rotate("+minute*6+"deg)";

    let hourHand = document.getElementById("hr");
    hourHand.style.transform ="rotate("+hour*30+"deg)";
}, 1000);

