advice_url="http://sf-pyw.mosyag.in/m04/api/forecasts"


function  console_log() {
    $.getJSON(advice_url, function(data) {
        set_content_in_divs(data["prophecies"])
    })

}

function set_content_in_divs(msg) {
    p0= $("#p-0")
    p0.html(msg["0"])
    p1= $("#p-1")
    p1.html(msg["1"])
    p2= $("#p-2")
    p2.html(msg["2"])
    p3= $("#p-3")
    p3.html(msg["3"])
    p4= $("#p-4")
    p4.html(msg["4"])
    p5= $("#p-5")
    p5.html(msg["5"])



}