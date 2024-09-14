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



const student1 = {
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily: true
};

const student2 = {
    name: "Rahim",
    testScore: 40,
    schoolGrade: 20,
    isFFamily: false
};

console.log(calculateFinalScore(student1));
console.log(calculateFinalScore(student2));
console.log(calculateFinalScore("Invalid Input Test"));