function Person(attr) {
    this.weight = attr.weight;
    this.height = attr.height;
    this.calculate_bmi = function() {
        calculator = new BMICalculator();
        calculator.metric_bmi(this)
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Person;
}




// Review and reflect

// 1. 'this' refers to the Person object

// 2. If the page is refreshed the code is gone.
// the console doesn't remember the person object for example.

