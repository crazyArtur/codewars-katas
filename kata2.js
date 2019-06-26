// 6 kyu
// "Bouncing balls"

function bouncingBall(h,  bounce,  window) {
    if(h < 0 ||
       bounce < 0 ||
       bounce > 1 ||
       window > h)
        return -1;

    let rebounce = h * bounce;
    let timesBallWasSeen = 1;

    while(rebounce >= window){
        if(rebounce == window)
            timesBallWasSeen++;
        else
            timesBallWasSeen += 2;
        
        rebounce *= bounce;
    }
    return timesBallWasSeen;
}


console.log(bouncingBall(10, 0.5, 1));