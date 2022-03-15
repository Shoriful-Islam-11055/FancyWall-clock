setInterval(function(){
    let date = new Date();
    let hours = date.getHours() % 12; //0 -23
    let minutes = date.getMinutes();
    let seconds = date.getSeconds(); 

    let h = (hours * 30) + (minutes / 2);
    let m = (minutes * 6) + (0.1 * seconds);
    let s = (seconds * 6);

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

