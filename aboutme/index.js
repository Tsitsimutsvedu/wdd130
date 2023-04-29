const weekday=["Sunday", "Monday", "Tuesaday", "Wednesday", "Thursday", "Friday", "Saturday"]
const d = new Date()
let day =weekday[d.getDay()]
document.getElementById("day").innerHTML = day