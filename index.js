let headerText = "se pa... que n sei oq... sei la...";
typewrite(document.getElementById("foo-text"), headerText);

function typewrite(element, str, spd = 50) {
    let i = 0; 
    const interval = setInterval(() => {
        element.innerHTML += str[i];
        i++;
        if(i == str.length) clearInterval(interval);
    }, spd);
}
