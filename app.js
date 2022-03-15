setInterval(function(){
    let date = new Date();
    let hours = date.getHours() % 12; //0 -23
    let minutes = date.getMinutes();
    let seconds = date.getSeconds(); 
   
    let h = (hours * 30) + (minutes / 2)+(-90);
    let m = (minutes * 6) +(-90)
    let s = (seconds * 6)+(-90);
    

    sec.style.transform =`rotate(${s}deg)`
    mint.style.transform =`rotate(${m}deg)` 
    hr.style.transform =`rotate(${h}deg)` 

}, 1000);

