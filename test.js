var utilityIVA = require('./utility-iva');

it('scorporoIVA should work as expected', function (done) {
  expect(utilityIVA.scorporoIVA(1220, 22)).toBe(1000);
  utilityIVA.scorporoIVA(1220, 22, function (err, data) {
    expect(data).toEqual({ imponibile: 1000, aliquotaIVA: 22, importoIVA: 220, totale: 1220 });
  });
  done();
});

it('calcolaImportoIvato should work as expected', function (done) {
  expect(utilityIVA.calcolaImportoIvato(1000, 21)).toBe(1210);
  utilityIVA.calcolaImportoIvato(1000, 21, function (err, data) {
    expect(data).toEqual({ imponibile: 1000, aliquotaIVA: 21, importoIVA: 210, totale: 1210 });
  });
  done();
});

it('calcolaAliquotaIVA should work as expected', function (done) {
  expect(utilityIVA.calcolaAliquotaIVA(1000, 1230)).toBe(23);
  utilityIVA.calcolaAliquotaIVA(1000, 1230, function (err, data) {
    expect(data).toEqual({ aliquotaIVA: 23, imponibile: 1000, importoIVA: 230, totale: 1230 });
  });
  done();
});

it('calcolaImponibileDaIVA should work as expected', function (done) {
  expect(utilityIVA.calcolaImponibileDaIVA(200, 20)).toBe(1000);
  utilityIVA.calcolaImponibileDaIVA(200, 20, function (err, data) {
    expect(data).toEqual({ imponibile: 1000, aliquotaIVA: 20, importoIVA: 200, totale: 1200 });
  });
  done();
});

it('calcolaTotaleDaIVA should work as expected', function (done) {
  expect(utilityIVA.calcolaTotaleDaIVA(200, 20)).toBe(1200);
  utilityIVA.calcolaTotaleDaIVA(200, 20, function (err, data) {
    expect(data).toEqual({ imponibile: 1000, aliquotaIVA: 20, importoIVA: 200, totale: 1200 });
  });
  done();
});
