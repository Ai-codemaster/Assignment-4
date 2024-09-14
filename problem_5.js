function waitingTime(waitingTimes, serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return 'Invalid Input';
    }
    let sumOfTime = 0;
    for(let i = 0; i < waitingTimes.length; i++) {
        sumOfTime += waitingTimes[i];
    }
    const averageTime = Math.round(sumOfTime / waitingTimes.length);
    const numOfCandidate = serialNumber - waitingTimes.length - 1;
    const waitTime = averageTime * numOfCandidate;
    if(waitTime < 0) {
        return 'Invalid Input';
    }
    return waitTime;
}




const x = [13, 2];
const y = 6;
console.log(waitingTime(x, y));