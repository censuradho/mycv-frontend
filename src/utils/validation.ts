/**
* const telefone1 = '(11) 5555-5555'

* const telefone2 = '11 55555-5555'

* const telefone3 = '119999-9999'

* const telefone4 = '11111-11111'
* 
* console.log(validarTelefone(telefone1)); // true
* console.log(validarTelefone(telefone2)); // true
* console.log(validarTelefone(telefone3)); // true
* console.log(validarTelefone(telefone4)); // false
*/
export function phoneValidate (phone: string) {
  var regex = /^\(?\d{2}\)?[-.\s]?\d{4,5}[-.\s]?\d{4}$/;
  return regex.test(phone);
}