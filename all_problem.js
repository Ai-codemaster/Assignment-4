function  calculateTax(income, expense) {
    if(income >= expense) {
        let profit = income - expense;
        profit = profit * 20 / 100;
        return profit;
    }
    else if(income < expense) {
        return 'Invalid Input';
    }
}

function sendNotification(email) {
    const mail = email.split('@');
    const userName = mail[0];
    const domainName = mail[1];
    if (email.includes('@')) {
        return `${userName} sent you an email from ${domainName}`;
    }else{
        return 'Invalid Email'
    }
}

function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input";
    }else if(name.includes(0) || name.includes(1) || name.includes(2) || name.includes(3) || name.includes(4) || name.includes(5) || name.includes(6) || name.includes(7) || name.includes(8) || name.includes(9)) {
        return true;
    }else{
        return false;
    }
}

function calculateFinalScore(input) {
    const {name, testScore, schoolGrade, isFFamily} = input;
    if(typeof input !== 'object' || typeof name !== 'string' || typeof testScore !== 'number' || typeof schoolGrade !== 'number' || typeof isFFamily !== 'boolean' || testScore > 50 || schoolGrade > 30) {
        return 'Invalid Input';
    }
    
    let score = testScore + schoolGrade;

    if(isFFamily === true) {
        score += 20;
    }
    
    if(score < 80) {
        return false;
    }else{
        return true;
    }
}

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