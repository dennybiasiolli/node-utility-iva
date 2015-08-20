utility-iva - Utility per calcoli IVA, scorporo, imponibile, ecc..

## Installation

    npm install utility-iva

## Usage

    var utilityIVA = require('utility-iva')

## Callback output

Quando viene utilizzata una funzione di callback(err, data), la variabile data viene restituita con la seguente struttura:
<pre>
{
    "imponibile": "",
    "aliquotaIVA": "",
    "importoIVA": "",
    "totale": ""
}
</pre>

### utilityIVA.scorporoIVA(totale, aliquotaIVA, [callback]) and utilityIVA.calcolaImponibile(totale, aliquotaIVA, [callback])

Calcola l'imponibile da un'importo totale e un'aliquota IVA indicata.
* Imponibile = Totale / ((100 + AliquotaIVA) / 100)

Esempio:
<pre>
    var utilityIVA = require('utility-iva')
    console.log(utilityIVA.scorporoIVA(1220, 22)); //output: 1000

    utilityIVA.scorporoIVA(1220, 22, function(err, data){
        console.log(data); //output: object
    });
</pre>

### utilityIVA.calcolaImportoIvato(imponibile, aliquotaIVA, [callback])

Calcola l'importo totale partendo dall'imponibile e un'IVA indicata.
* Totale = Imponibile + (Imponibile * AliquotaIVA / 100)

Esempio:
<pre>
    var utilityIVA = require('utility-iva')
    console.log(utilityIVA.calcolaImportoIvato(1000, 21)); //output: 1210

    utilityIVA.calcolaImportoIvato(1000, 21, function(err, data){
        console.log(data); //output: object
    });
</pre>

### utilityIVA.calcolaAliquotaIVA(imponibile, totale, [callback])

Calcola l'aliquota IVA applicata partendo dall'imponibile e dal totale.
* AliquotaIVA = (100 / (Imponibile / (Totale - Imponibile)))

Esempio:
<pre>
    var utilityIVA = require('utility-iva')
    console.log(utilityIVA.calcolaAliquotaIVA(1000, 1230)); //output: 23

    utilityIVA.calcolaAliquotaIVA(1000, 1230, function(err, data){
        console.log(data); //output: object
    });
</pre>

### utilityIVA.calcolaImponibileDaIVA(importoIVA, aliquotaIVA, [callback])

Calcola l'imponibile da un'aliquota IVA indicata e dal relativo importo.
* Imponibile = ImportoIVA / AliquotaIVA * 100

Esempio:
<pre>
    var utilityIVA = require('utility-iva')
    console.log(utilityIVA.calcolaImponibileDaIVA(200, 20)); //output: 1000

    utilityIVA.calcolaImponibileDaIVA(200, 20, function(err, data){
        console.log(data); //output: object
    });
</pre>

### utilityIVA.calcolaTotaleDaIVA(importoIVA, aliquotaIVA, [callback])

Calcola il totale da un'aliquota IVA indicata e dal relativo importo.
* Totale = (ImportoIVA / AliquotaIVA * 100) + ImportoIVA

Esempio:
<pre>
    var utilityIVA = require('utility-iva')
    console.log(utilityIVA.calcolaTotaleDaIVA(200, 20)); //output: 1200

    utilityIVA.calcolaTotaleDaIVA(200, 20, function(err, data){
        console.log(data); //output: object
    });
</pre>

