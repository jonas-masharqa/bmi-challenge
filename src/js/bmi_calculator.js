function BMICalculator(){
    BMICalculator.prototype.metric_bmi = function(obj) {
        let weight = obj.weight;
        let height = obj.height;
        if (weight > 0 && height > 0) {
            var finalBmi = weight / (height / 100 * height / 100);
            obj.bmiValue = parseFloat(finalBmi.toFixed(2));
        }
    };
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = BMICalculator;
}