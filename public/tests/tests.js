var assert = chai.assert;
 
 suite('Pruebas: ', function() {
    test('Prueba 1', function() {
         original.value = "a = 2.";
         main();
 			assert.equal(OUTPUT.innerHTML, '[\n  {\n    "type": "=",\n    "left": {\n      "type": "ID",\n      "value": "a"\n    },\n    "right": {\n      "type": "NUM",\n      "value": 2\n    }\n  }\n]');
     });

    test('Prueba 2 - operacion', function() {
         original.value = "a = 2+3-4*5/7.";
         main();
 			assert.equal(OUTPUT.innerHTML, '[\n  {\n    "type": "=",\n    "left": {\n      "type": "ID",\n      "value": "a"\n    },\n    "right": {\n      "type": "-",\n      "left": {\n        "type": "+",\n        "left": {\n          "type": "NUM",\n          "value": 2\n        },\n        "right": {\n          "type": "NUM",\n          "value": 3\n        }\n      },\n      "right": {\n        "type": "/",\n        "left": {\n          "type": "*",\n          "left": {\n            "type": "NUM",\n            "value": 4\n          },\n          "right": {\n            "type": "NUM",\n            "value": 5\n          }\n        },\n        "right": {\n          "type": "NUM",\n          "value": 7\n        }\n      }\n    }\n  }\n]');
     });

    test('Prueba 3 - if', function() {
         original.value = "if a > 2 then b = 3.";
         main();
 			assert.equal(OUTPUT.innerHTML, '[\n  {\n    "type": "IF",\n    "left": {\n      "type": "&gt;",\n      "left": {\n        "type": "ID",\n        "value": "a"\n      },\n      "right": {\n        "type": "NUM",\n        "value": 2\n      }\n    },\n    "right": {\n      "type": "=",\n      "left": {\n        "type": "ID",\n        "value": "b"\n      },\n      "right": {\n        "type": "NUM",\n        "value": 3\n      }\n    }\n  }\n]');
     });

    test('Prueba 4 - while', function() {
         original.value = "while a < 3 do b = b + 1.";
         main();
 			assert.equal(OUTPUT.innerHTML, '[\n  {\n    "type": "WHILE",\n    "left": {\n      "type": "&lt;",\n      "left": {\n        "type": "ID",\n        "value": "a"\n      },\n      "right": {\n        "type": "NUM",\n        "value": 3\n      }\n    },\n    "right": {\n      "type": "=",\n      "left": {\n        "type": "ID",\n        "value": "b"\n      },\n      "right": {\n        "type": "+",\n        "left": {\n          "type": "ID",\n          "value": "b"\n        },\n        "right": {\n          "type": "NUM",\n          "value": 1\n        }\n      }\n    }\n  }\n]');
     });

 });