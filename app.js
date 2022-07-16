function updateClock() {
    var date = new Date();
    var time = date.getHours() + ":" + date.getMinutes();
    const days = ["Sunady", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = days[date.getDay()];
    document.getElementById("row1").innerHTML = time;
    document.getElementById("row2").innerHTML = time;
    document.getElementById("row3").innerHTML = day;
    setTimeout(updateClock, 1000);
}

updateClock();