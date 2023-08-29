// About Button
var link01 = document.getElementById("link01");
var div2 = document.getElementById("div2");
link01.onclick = link01_function;
function link01_function() {
    if (div2.style.display === "block") {
        div2.style.display = "none";
        dropdown.style.display = "none";
        div3.style.display = "none";
        div4.style.display = "none";
        div5.style.display = "none";
    } else {
        div2.style.display = "block";
        dropdown.style.display = "none";
        div3.style.display = "none";
        div4.style.display = "none";
        div5.style.display = "none";
    }
}
// Gallary Button
var link02 = document.getElementById("link02");
var div3 = document.getElementById("div3");
var div3_center = document.getElementById("div3-center-img");
var div3_right = document.getElementById("div3-right-img");
var div3_left = document.getElementById("div3-left-img");
div3_right.onclick = div3_right_function;
div3_left.onclick = div3_left_function;
link02.onclick = link02_function;
function link02_function() {
    if (div3.style.display === "block") {
        div3.style.display = "none";
        dropdown.style.display = "none";
        div2.style.display = "none";
        div4.style.display = "none";
        div5.style.display = "none";
    } else {
        div3.style.display = "block";
        dropdown.style.display = "none";
        div2.style.display = "none";
        div4.style.display = "none";
        div5.style.display = "none";
    }
}
// Image Slider Loop
var numImage = 8;
var currentInedx = 1;
function div3_right_function(){
    currentInedx = (currentInedx + 1)
    currentInedx %= numImage;    
    if (currentInedx === 0) {
        currentInedx = numImage;
    }
    div3_center.src = currentInedx + ".jpg";
}
function div3_left_function(){
    currentInedx = (currentInedx - 1) % numImage;
    if (currentInedx === 0) {
        currentInedx = numImage;
    }
    div3_center.src = currentInedx + ".jpg";
}
// Services Button
var link03 = document.getElementById("link03");
var dropdown = document.getElementById("dropdown-menu");
link03.onclick = dropdown_function;
function dropdown_function() {
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
        div2.style.display = "none";
        div3.style.display = "none";
        div4.style.display = "none";
        div5.style.display = "none";
    } else {
        dropdown.style.display = "block";
        div2.style.display = "none";
        div3.style.display = "none";
        div4.style.display = "none";
        div5.style.display = "none";
    }
}
// Complain Button
var link04 = document.getElementById("link04");
var div4 = document.getElementById("div4");
var div5 = document.getElementById("div5");
link04.onclick = div4_function;
function div4_function() {
    if (div4.style.display === "block" || div5.style.display === "block") {
        div4.style.display = "none";
        dropdown.style.display = "none";
        div2.style.display = "none";
        div3.style.display = "none";
        div5.style.display = "none";
    } else {
        div4.style.display = "block";
        dropdown.style.display = "none";
        div2.style.display = "none";
        div3.style.display = "none";
        div5.style.display = "none";
    }
}
var div4_name = document.getElementById("div4-name");
var div4_email = document.getElementById("div4-email");
var div4_phone = document.getElementById("div4-phone");
var div4_complain = document.getElementById("div4-complain");
var div4_send = document.getElementById("div4-send");
var div5_name = document.getElementById("div5-name");
var div5_email = document.getElementById("div5-email");
var div5_phone = document.getElementById("div5-phone");
var div5_complain = document.getElementById("div5-complain");
var div5_back = document.getElementById("div5-back");
div4_send.onclick = div4_send_function;
div5_back.onclick = div5_back_function;
function div4_send_function(){
    div5_name.innerHTML = "Your Name is" + " " + div4_name.value;
    div5_email.innerHTML =  "Your Email is" + " " + div4_email.value;
    div5_phone.innerHTML = "Your Phone is" + " " + div4_phone.value;
    div5_complain.innerHTML = "Your Complain is" + " " + div4_complain.value;
    div4.style.display = "none";
    div5.style.display = "block";
}
function div5_back_function(){
    div5.style.display = "none";
    div4.style.display = "block";
}