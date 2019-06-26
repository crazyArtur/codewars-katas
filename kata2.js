// 6 kyu
// "Bouncing balls"

function bouncingBall(h,  bounce,  window) {
    if (h < 0 ||
        bounce < 0 ||
        bounce > 1 ||
        window > h)
        return -1;

    let rebounce = h * bounce;
    let timesBallWasSeen = 1;

    while(rebounce > window){

    }
    return timesBallWasSeen;
}


console.log(bouncingBall(0, 0.5, 1));