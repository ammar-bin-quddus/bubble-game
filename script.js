let timer = 60;
let hitNum = 0;
let score = 0;

function showBubbles() {
    let clutter = "";

    for (i = 0; i <= 224; i++) {
        let randomNum = Math.floor(Math.random() * 10);

        clutter += `<div id="bubble">${randomNum}</div>`

        document.querySelector("#bubble-bottom").innerHTML = clutter
    }
}

function runTimer() {
    let setTime = setInterval(function() {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").textContent = timer
        } else {
            clearInterval(setTime);
            document.querySelector("#bubble-bottom").innerHTML = `<div id="re-div">
                                                                    <h1>Time Over</h1>
                                                                    <h2>Your Total Score: ${score}
                                                                    <a href= "index.html"><p id="rematch">Rematch</p></a>
                                                                  </div>`;
            document.querySelector("#hit").innerHTML = "";
            document.querySelector("#score").innerHTML = "";
        }
    }, 1000)
}


function randomHit() {
    hitNum = Math.floor(Math.random() * 10);
    document.querySelector("#hit").innerHTML = hitNum;
}

function addScore() {
    score += 10;
    document.querySelector("#score").textContent = score;
}

document.querySelector("#bubble-bottom").addEventListener("click", function(det) {
    let targetBubble = Number(det.target.textContent);
    if (targetBubble === hitNum) {
        addScore();
        showBubbles();
        randomHit();
    }
})

document.querySelector("#btn").addEventListener("click", function() {
    document.querySelector("#start-div").style.display = "none";
    showBubbles();
    randomHit();
    runTimer();
})