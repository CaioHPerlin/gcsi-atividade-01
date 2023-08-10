let headerText = "se pa... que n sei oq... sei la...";
typewrite(document.getElementById("foo-text"), headerText);

function typewrite(element, str) {
    let index = 0;
    addChar();

    function addChar() {
        element.innerHTML += str[index];
        index++;
        const timeout = setTimeout(addChar, 50);

        if(index >= str.length){
            clearTimeout(timeout);
        }
    }
}
