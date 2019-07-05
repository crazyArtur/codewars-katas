// 6 kyu
// "Bouncing balls"

function bouncingBall(h,  bounce,  window) {
    if(h < 0 ||
       bounce <= 0 ||
       bounce >= 1 ||
       window >= h)
        return -1;

    let rebounce = h * bounce;
    let timesBallWasSeen = 1;

    while(rebounce > window){
// removed "=" from the condition
        // if(rebounce == window)
        //     timesBallWasSeen++;
        // else
            timesBallWasSeen += 2;
        
        rebounce *= bounce;
    }
    return timesBallWasSeen;
}

console.time("qwert");
console.log(bouncingBall(200, 0.99, 1));
console.timeEnd("qwert");

function bouncingBallX(h,  bounce,  window) {
    if(h < 0 ||
       bounce <= 0 ||
       bounce >= 1 ||
       window >= h)
        return -1;

    let timesBallWasSeen = 2;

    if(h > window)
        return timesBallWasSeen += bouncingBallX(h * bounce, bounce, window);
    else
        return 1;
}

console.time("zxcv");
console.log(bouncingBallX(200, 0.99, 1));
console.timeEnd("zxcv");

// Above examples don't work. 
// The loop solution is said to execute too long.
// The recursion solution exceeds stack.
// I implemented solution based on mathematical model below.

function bouncingBallY(h,  bounce,  window) {
    if(h < 0 ||
        bounce <= 0 ||
        bounce >= 1 ||
        window >= h)
         return -1;
 
     if(window >= h*bounce)
        return 1;
     else
        return 1 + 2*Math.floor((Math.log(window/h)/Math.log(bounce)));
 }

console.time("abcd");
console.log(bouncingBallY(200, 0.99, 1));
console.timeEnd("abcd");