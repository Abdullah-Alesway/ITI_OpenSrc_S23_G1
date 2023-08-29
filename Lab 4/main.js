var h1 = prompt("Enter what you want to write");
for(var h = 1; h <= 6; h++) {
    document.write("<h"+h+">" + h1 + " " + h + "</h"+h+">");
}

var img = prompt("Enter the image name your range from image01 to image08 without extensions");
var color = prompt("Enter your favorite color");
if (img >= "image01" && img <= "image08") {
    document.write("<p style='color:" +color+ "; font-size: 32px;'>This is ur image</p>");
    document.write("<img src=" +img+ ".jpg style='border: 8px solid " + color + "';>");
} else {
    alert("Out of range")
}

var log = prompt("Enter your name");
while (!isNaN (log)) {
    log = prompt("Enter your name");
}

var numb = prompt("Enter your number");
while (isNaN (numb)) {
    numb = prompt("Enter your number");
}
