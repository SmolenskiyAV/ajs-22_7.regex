// TODO: write your code here
import sum, {Validator, phoneNumbersTransformer} from './basic';

console.log('worked');
console.log(sum([1, 2]));

//================================================================

const m = new Validator();

const validatingName1 = 'jj345jj';
const validatingName2 = '6jdj345jj';
const validatingName3 = 'jj345jj-';
const validatingName4 = 'jj3458jj';

console.log("************* NameValidator **********")
console.log()

console.log(`User name is ${validatingName1} :` + 'check result = ' + m.validateUsername(validatingName1));
console.log()

console.log(`User name is ${validatingName2} :` + 'check result = ' + m.validateUsername(validatingName2));
console.log()

console.log(`User name is ${validatingName3} :` + 'check result = ' + m.validateUsername(validatingName3));
console.log()

console.log(`User name is ${validatingName4} :` + 'check result = ' + m.validateUsername(validatingName4));
console.log()

console.log("============== END of VALIDATION ==============")
console.log()
//=================================================================

const phone_number1 = '8 (927) 000-00-00'; // ожидаемый результат преобразования: +79270000000  
const phone_number2 = '+7 960 000 00 00'; // ожидаемый результат преобразования:  +79600000000
const phone_number3 = '+86 000 000 0000'; // ожидаемый результат преобразования:  +860000000000 

console.log("************* PhoneTransormer **********")
console.log()

console.log(`Input = ${phone_number1} ; ` + 'Result = ' + phoneNumbersTransformer(phone_number1));
console.log()

console.log(`Input = ${phone_number2} ; ` + 'Result = ' + phoneNumbersTransformer(phone_number2));
console.log()

console.log(`Input = ${phone_number3} ; ` + 'Result = ' + phoneNumbersTransformer(phone_number3));
console.log()

console.log("============== END of TRANSFORMATION ==============")
console.log()
//=================================================================


console.log();
console.log('end of execution!');