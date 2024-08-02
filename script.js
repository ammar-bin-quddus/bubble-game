function showBubbles() {
    let clutter = "";

    for (i = 0; i <= 224; i++) {
        let randomNum = Math.floor(Math.random() * 10);

        clutter += `<div id="bubble">${randomNum}</div>`

        document.querySelector("#bubble-bottom").innerHTML = clutter
    }
}

showBubbles();