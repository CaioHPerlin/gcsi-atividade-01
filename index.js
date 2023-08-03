let text = "Welcome."
let index = 0;
typewrite()

function typewrite() {
    if(index < text.length){
        document.getElementById("foo-text").innerHTML += text[index];
        index++;
        setTimeout(typewrite, 50)
    }
}