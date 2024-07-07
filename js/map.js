/*Use your country to make your own SVG animation map!*/
var path = [];
var pathleng = [];
var allpathsid = document.querySelectorAll("path");

/* start animating with stroke once loading*/
function animate() {
  for (var i = 0; i < allpathsid.length; i++) {
    path[i] = document.getElementById(allpathsid[i].id);
    if (path[i] !== null) {
      pathleng[i] = path[i].getTotalLength();
      // Clear any previous transition
      path[i].style.transition = path[i].style.WebkitTransition = "none";
      path[i].style.strokeDasharray = pathleng[i] + " " + pathleng[i];
      path[i].style.strokeDashoffset = pathleng[i];
      path[i].getBoundingClientRect();
      path[i].style.transition = path[i].style.WebkitTransition =
        "stroke-dashoffset 2s ease-in-out";
      path[i].style.strokeDashoffset = "0";
    }
  }
}

animate();
var idclick = document.getElementById("click");
idclick.addEventListener("click", function() {
  animate();
});

var svg = document.querySelectorAll("svg")[0];
//console.log(svg);
var topsvg = svg.getBoundingClientRect().y;
//console.log(topsvg);
var leftsvg = svg.getBoundingClientRect().x;
var heightsvg = svg.getBoundingClientRect().height;
var widthsvg = svg.getBoundingClientRect().width;
//console.log(svg.getBoundingClientRect());
var hkpos = document.getElementById("CN-91");
var toppos = hkpos.getBoundingClientRect().y - topsvg;
toppos = toppos / heightsvg * 100;
var leftpos = hkpos.getBoundingClientRect().x - leftsvg;
leftpos = leftpos / widthsvg * 100;
var pin = document.querySelector(".pin");
var pulse = document.querySelector(".pulse");
var hkbox = document.querySelector("#hkName");
/* use % for repsonsive */
pin.style.top = toppos + "%";
pin.style.left = leftpos + "%";
pulse.style.top = toppos + "%";
pulse.style.left = leftpos + "%";
hkbox.style.top = toppos + 1 + "%";
hkbox.style.left = leftpos - 2 + "%";

var svgStates = document.querySelectorAll("#province > *");
/*show province only when mouseover*/
function removeAllOn() {
  svgStates.forEach(function(el) {
    el.classList.remove("on");
  });
}
/* to get the province list of China*/
function addOnFromList(el) {
  var provinceCode = el.getAttribute("id");
  var svgState = document.querySelector("#" + provinceCode);
  el.classList.add("on");
  svgState.classList.add("on");
}
/*global name*/
var name1 = document.querySelectorAll(".provinceName")[0];
//console.log(name1.getBoundingClientRect());
var hide = true;
function addOnFromState(el) {
  var title = el.getAttribute("title");

  hide = title == "Hong Kong" ? false : true;
  name1.innerHTML = title;
  el.classList.add("on");
  /*showing province name on mouseover*/
  var eltop = el.getBoundingClientRect().y;
  eltop = eltop / heightsvg * 100;
  //console.log(eltop + " " + heightsvg);
  var elleft = el.getBoundingClientRect().x - leftsvg;
  elleft = elleft / widthsvg * 100;
  name1.style.top = eltop + "%";
  name1.style.left = elleft + "%";
}
/*mouseover effect for different provinces*/
svgStates.forEach(function(el) {
  el.addEventListener("mouseenter", function() {
    addOnFromState(el);
    if (hide) {
      name1.style.display = "block";
      name1.style.position = "absolute";
    }
  });
  el.addEventListener("mouseleave", function() {
    removeAllOn();
    name1.style.display = "none";
  });

  el.addEventListener("touchstart", function() {
    removeAllOn();
    addOnFromState(el);
  });
});

/* click to animate again*/
var click = document.getElementById("click");
// console.log(click);
click.addEventListener(
  "mouseover",
  function(event) {
    this.classList.add("click-hightlight");
    setTimeout(function() {
      event.target.classList.remove("click-hightlight");
    }, 500);
  },
  false
);
