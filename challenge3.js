function getIncome(grossIncome, benefits){
    let totalPay = grossIncome + benefits

    if(typeof grossIncome !== 'number' || typeof benefits !== 'number'){
        console.log('invalid input')
    }else {
        var kra =
        totalPay <= 24000 ? totalPay *0.1:
        totalPay <= 32333 ? totalPay * 0.25:
        totalPay<= 500000? totalPay * 0.30:
        totalPay <= 800000? totalPay * 0.325:
        totalPay *0.35;

        var nhif =
            totalPay<= 5999 ? 150 :
            totalPay <= 7999 ? 300 :
            totalPay <= 11999 ? 400 :
            totalPay <= 14999 ? 500 :
            totalPay<= 19999 ? 600 :
            totalPay <= 24999 ? 750 :
            totalPay <= 29999 ? 850 :
             totalPay<= 34999 ? 900 :
            totalPay <= 39999 ? 950 :
            totalPay <= 44999 ? 1000 :
            totalPay <= 49999 ? 1100 :
            totalPay <= 59999 ? 1200 :
            totalPay <= 69999 ? 1300 :
            totalPay <= 79999 ? 1400 :
            totalPay <= 89999 ? 1500 :
            totalPay <= 99999 ? 1600 :
            1700;

            var nssf = 
            grossIncome <= 7000 ? 0.06 * 7000: 0.06 * 36000;

            let paye = nssf + nhif +kra;
            let netIncome = grossIncome - paye;

            
            return netIncome
    }

}
let value = 65000;
console.log(getIncome(value, 10000))