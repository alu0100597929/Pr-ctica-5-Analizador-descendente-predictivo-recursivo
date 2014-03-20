
var assert = chai.assert;
 
 suite('Pruebas: ', function() {
    test('Prueba 1', function() {
         var original.value = "a = 2.";
         main();
 		assert.equal(OUTPUT.innerHTML, '  {\n    "type": "=",\n    "left": {\n      "type": "ID",\n      "value": "a"\n    },\n    "right": {\n      "type": "NUM",\n      "value": 2\n    }\n  }');
     });


 });