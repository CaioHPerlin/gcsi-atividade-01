const jsConfetti = new JSConfetti();

const onReady = () => {
    let clickable = document.getElementsByClassName("clickable")[0];
    clickable.addEventListener("click", () => {
        console.log("click");
        jsConfetti.addConfetti();
    });
}

const typewrite = (element, str=element.textContent, spd = 50) => {
    const backup = element.innerHTML;
    element.innerHTML = "";

    let i = 0; 
    const interval = setInterval(() => {
        element.innerHTML += str[i];
        i++;

        if(i == str.length){ 
            element.innerHTML = backup;
            clearInterval(interval);
            onReady();
        }
    }, spd);
}

const typeQueue = document.getElementsByClassName("typewrite");

for(let i = 0; i < typeQueue.length; i++){
    typewrite(typeQueue[i]);
}