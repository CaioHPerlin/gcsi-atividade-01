const jsConfetti = new JSConfetti();

const onReady = () => {
    let clickable = document.getElementsByClassName("clickable")[0];
    clickable.addEventListener("click", () => {
        jsConfetti.addConfetti();
        const main = document.getElementsByTagName("main")[0];
        typewrite(document.getElementsByTagName("main")[0], "VALEU! meu mano tmj agradeço por ter clicado tlgd");
    });
}

const typewrite = (element, str=element.textContent, spd = 50) => {
    if(!element.className.includes("done")){
        const backup =  element.innerHTML;
        element.textContent = "";
        element.innerHTML = "";

        let i = 0; 
        const interval = setInterval(() => {
            element.textContent += str[i];
            i++;

            if(i == str.length){ 
                if(backup != "") { element.innerHTML = backup }
                clearInterval(interval);
                element.className += " done";
                console.log(element.className)
                onReady();
            }
        }, spd);
    }
}

const typeQueue = document.getElementsByClassName("typewrite");

for(let i = 0; i < typeQueue.length; i++){
    typewrite(typeQueue[i]);
}