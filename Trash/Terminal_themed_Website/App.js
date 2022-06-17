const fullbody = document.querySelectorAll(".fullbody")[0];
  var rgbcolor = [
    "rgba(30,32,45,0.5)","rgba(80,192,211,0.5)",
    "rgba(82,148,245,0.5)","rgba(206,21,149,0.5)",
    "rgba(00,00,00,0.5)","rgba(91,194,229,0.5)",
    "rgba(243,00,108,0.5)","rgba(104,00,15,0.5)",
    "rgba(253,225,2,0.5)","rgba(247,12,78,0.5)",
    "rgba(24,60,72,0.5)","rgba(229,223,232,0.5)",
    "rgba(8,8,63,0.5)","rgba(232,16,231,0.5)",
    "rgba(55,55,67,0.5)","rgba(34,34,42,0.5)"
    ]
var n = Math.floor(Math.random()*rgbcolor.length);
var color = rgbcolor[`${n}`];
fullbody.style.backgroundColor = `${color}`;