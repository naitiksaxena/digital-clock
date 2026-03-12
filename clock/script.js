function digitalclock() {

    let timedate = new Date();

    let hour = timedate.getHours();
    let min = timedate.getMinutes();
    let sec = timedate.getSeconds();


    let h = document.getElementById("hour");
    let m = document.getElementById("min");
    let s = document.getElementById("sec");
    let d = document.getElementById("date");



    h.innerHTML = hour;
    m.innerHTML = min;
    s.innerHTML = sec;
    d.innerHTML = `Date:- ${timedate.toLocaleDateString()}`;


    setTimeout(digitalclock, 1000);
}
digitalclock()


