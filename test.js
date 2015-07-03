var utilityIVA = require('./utility-iva');

console.log('scorporoIVA(1220, 22) = ' + utilityIVA.scorporoIVA(1220, 22));
utilityIVA.scorporoIVA(1220, 22, function(err, data){
    console.log(data);
});
console.log('\n');

console.log('calcolaImportoIvato(1000, 21) = ' + utilityIVA.calcolaImportoIvato(1000, 21));
utilityIVA.calcolaImportoIvato(1000, 21, function(err, data){
    console.log(data);
});
console.log('\n');

console.log('calcolaAliquotaIVA(1000, 1230) = ' + utilityIVA.calcolaAliquotaIVA(1000, 1230));
utilityIVA.calcolaAliquotaIVA(1000, 1230, function(err, data){
    console.log(data);
});
console.log('\n');

console.log('calcolaImponibileDaIVA(200, 20) = ' + utilityIVA.calcolaImponibileDaIVA(200, 20));
utilityIVA.calcolaImponibileDaIVA(200, 20, function(err, data){
    console.log(data);
});
console.log('\n');

console.log('calcolaTotaleDaIVA(200, 20) = ' + utilityIVA.calcolaTotaleDaIVA(200, 20));
utilityIVA.calcolaTotaleDaIVA(200, 20, function(err, data){
    console.log(data);
});
console.log('\n');
