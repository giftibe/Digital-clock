const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")
const ampmEl = document.getElementById("ampm")
const textEl = document.getElementById("texts")
const mintextEl = document.getElementById("mintext")


function updateClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"
    let texts ="hour"
    let mintext = "minutes"

if (h > 12 ){
    h = (`${h}`- 12)
    ampm = "PM"
}else (h)

if (h === 0){
    h = (12 - `${h}`)
    ampm = "AM"
}


if (h >= 2){
    texts = "hours"
}
else(texts = "hour")

if (m >= 2){
    mintext = "minutes"
}
else(mintext = "minute")

if (h<10){
    h = 0 + `${h}`
}
else h
//h = h < 10 ? "0" + h :h
m = m < 10 ? "0" + m :m
s = s < 10 ? "0" + s :s


hourEl.innerText = h;
minuteEl.innerText = m
secondsEl.innerText = s
ampmEl.innerText = ampm
textEl.innerText = texts
mintextEl.innerText = mintext
setTimeout(()=>{
updateClock()
},1000)

}

updateClock()