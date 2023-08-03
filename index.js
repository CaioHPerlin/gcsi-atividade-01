let text = "se pa... que n sei oq... sei la...";
let index = 0;
typewrite();

function typewrite() {
    let str = "";
    if(index < text.length){
        document.getElementById("foo-text").innerHTML += text[index];
        index++;
        setTimeout(typewrite, 50);
    }
}