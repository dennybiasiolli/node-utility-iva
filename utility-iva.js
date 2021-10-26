var utilityIVA = {};

var formatReturn = function (imponibile, aliquotaIVA, importoIVA, totale, retValNoCallback, callback) {
  var retObj = {
    imponibile: imponibile,
    aliquotaIVA: aliquotaIVA,
    importoIVA: importoIVA,
    totale: totale
  };
  if (callback) {
    callback(null, retObj); //callback in format 'callback(err, data)'
  } else {
    return retValNoCallback;
  }
};

utilityIVA.scorporoIVA = function (totale, aliquotaIVA, callback) {
  return this.calcolaImponibile(totale, aliquotaIVA, callback);
};
utilityIVA.calcolaImponibile = function (totale, aliquotaIVA, callback) {
  if (aliquotaIVA == -100) {
    if (callback) {
      return callback(true, 'Error: division by zero');
    } else {
      return 'Error: division by zero';
    }
  }
  var imponibile = totale / ((100 + aliquotaIVA) / 100);
  var importoIVA = totale - imponibile;
  return formatReturn(imponibile, aliquotaIVA, importoIVA, totale, imponibile, callback);
};

utilityIVA.calcolaImportoIvato = function (imponibile, aliquotaIVA, callback) {
  var importoIVA = (imponibile * aliquotaIVA) / 100;
  var totale = imponibile + importoIVA;
  return formatReturn(imponibile, aliquotaIVA, importoIVA, totale, totale, callback);
};

utilityIVA.calcolaAliquotaIVA = function (imponibile, totale, callback) {
  var importoIVA = totale - imponibile;
  if (imponibile == 0 || importoIVA == 0) {
    return formatReturn(imponibile, 0, importoIVA, totale, 0, callback);
  }
  var aliquotaIVA = /* Math.round( */ 100 / (imponibile / importoIVA) /* ) */;
  return formatReturn(imponibile, aliquotaIVA, importoIVA, totale, aliquotaIVA, callback);
};

utilityIVA.calcolaImponibileDaIVA = function (importoIVA, aliquotaIVA, callback) {
  if (aliquotaIVA == 0) {
    return formatReturn(0, aliquotaIVA, importoIVA, 0, 0, callback);
  }
  var imponibile = (importoIVA / aliquotaIVA) * 100;
  var totale = imponibile + importoIVA;
  return formatReturn(imponibile, aliquotaIVA, importoIVA, totale, imponibile, callback);
};

utilityIVA.calcolaTotaleDaIVA = function (importoIVA, aliquotaIVA, callback) {
  if (aliquotaIVA == 0) {
    return formatReturn(0, aliquotaIVA, importoIVA, 0, 0, callback);
  }
  var imponibile = (importoIVA / aliquotaIVA) * 100;
  var totale = imponibile + importoIVA;
  return formatReturn(imponibile, aliquotaIVA, importoIVA, totale, totale, callback);
};

module.exports = utilityIVA;