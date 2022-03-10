export default function sum(items) {
  let result = 0;
  for (const item of items) {
    result += item;
  }
  return result;
}

// ---------------------------------------------------------------------------------------------------------------------

export class Validator { // класс проверки имени пользователя с помощью регулярных выражений

  
  static validateUsername(user_name) {
  /*
    1. Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9); (дополнительно: не более 10 символов всё имя)
    2. Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.
  */
    //this.username = user_name;

   this.username = user_name;

    if (/^([^\d\_\-]{1})([a-zA-Z0-9_-]){0,8}([^\d\_\-]{1})$/gm.test(this.username) && // проверка выражения по всем условиям, кроме "Имя не должно содержать подряд более трёх цифр"
        !(/(\d{4})\d*/gm.test(this.username))    // проверка выражения по одному условию "Имя не должно содержать подряд более трёх цифр"
      ) {
        return true
      }else 
        return false; 
  };
  
}

//-----------------------------------------------------------------------------------------------------------

export function phoneNumbersTransformer(phone_number) {   // ФУНКЦИЯ ФОРМАТИРОВАНИЯ ТЕЛЕФОННЫХ НОМЕРОВ
/* 
  Преобразование вводимых телефонных номеров к общему стандарту
    8 (927) 000-00-00 -> +79270000000
    +7 960 000 00 00 -> +79600000000
    +86 000 000 0000 -> +860000000000
*/
  
  let result = phone_number.replace(/[-|\s|\(|\)]/g, '');   // вырезаем из исходной строки дефисы, пробелы, скобки
 
  return result;
}