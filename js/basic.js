setInterval(() => {
    const a = new Date();
    document.getElementById("time-date").innerHTML = a.toDateString() + " , " + a.getHours()+" : "+ a.getMinutes()+" : "+ a.getSeconds();
}, 1000);