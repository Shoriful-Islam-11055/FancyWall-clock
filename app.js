setInterval(function(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds(); 

    let h = (56*hours) + (minutes/2);
    let m = 4.5*minutes;
    let s = 6*seconds;

    hr.style.transform =`rotate(${h}deg)`
    mint.style.transform =`rotate(${m}deg)`
    sec.style.transform =`rotate(${s}deg)`

    // let secondHand = document.getElementById("sec");
    // secondHand.style.transform ="rotate("+seconds*6+"deg)";

    // let minuteHand = document.getElementById("mint");
    // minuteHand.style.transform ="rotate("+minutes*6+"deg)";

    // let hourHand = document.getElementById("hr");
    // hourHand.style.transform ="rotate("+hours*30+"deg)";

}, 1000);

