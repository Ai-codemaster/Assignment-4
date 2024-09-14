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

const money = calculateTax(10000, 30000);
console.log(money);