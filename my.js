/**
 * Created by Administrator on 2017/7/12.
 */
function printtime() {
    var t = new Date();
    h = t.getHours();
    m = t.getMinutes();
    s = t.getSeconds();
    if (h < 10)
        h = "0" + h;
    if (m < 10)
        m = "0" + m;
    if (s < 10)
        s = "0" + s;
    document.getElementById("t").innerHTML = h + ":" + m + ":" + s;
}
setInterval(printtime, 1000);