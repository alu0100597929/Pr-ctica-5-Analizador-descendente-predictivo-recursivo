var assert = chai.assert;
 
 suite('Pruebas: ', function() {
    test('Prueba 1', function() {
         var original = "a = 2.";
 		assert.equal("[\n{\n"type": "=",\n"left": {\n"type": "ID",\n"value": "a"\n},\n"right": {\n"type": "NUM",\n"value": 2\n}\n}\n]", JSON.stringify(parse(original)));
     
    
		
    });

    test('Prueba 2 - operacion', function() {
         var original = "a = 2+3-4*5/7.";
         window.main();
 			assert.equal(OUTPUT.innerHTML, '[\n  {\n    "type": "=",\n    "left": {\n      "type": "ID",\n      "value": "a"\n    },\n    "right": {\n      "type": "-",\n      "left": {\n        "type": "+",\n        "left": {\n          "type": "NUM",\n          "value": 2\n        },\n        "right": {\n          "type": "NUM",\n          "value": 3\n        }\n      },\n      "right": {\n        "type": "/",\n        "left": {\n          "type": "*",\n          "left": {\n            "type": "NUM",\n            "value": 4\n          },\n          "right": {\n            "type": "NUM",\n            "value": 5\n          }\n        },\n        "right": {\n          "type": "NUM",\n          "value": 7\n        }\n      }\n    }\n  }\n]');
     });

    test('Prueba 3 - if', function() {
         var original = "if a > 2 then b = 3.";
         window.main();
 			assert.equal(OUTPUT.innerHTML, '[\n  {\n    "type": "IF",\n    "left": {\n      "type": "&gt;",\n      "left": {\n        "type": "ID",\n        "value": "a"\n      },\n      "right": {\n        "type": "NUM",\n        "value": 2\n      }\n    },\n    "right": {\n      "type": "=",\n      "left": {\n        "type": "ID",\n        "value": "b"\n      },\n      "right": {\n        "type": "NUM",\n        "value": 3\n      }\n    }\n  }\n]');
     });

    test('Prueba 4 - while', function() {
         var original = "while a < 3 do b = b + 1.";
         window.main();
 			assert.equal(OUTPUT.innerHTML, '[\n  {\n    "type": "WHILE",\n    "left": {\n      "type": "&lt;",\n      "left": {\n        "type": "ID",\n        "value": "a"\n      },\n      "right": {\n        "type": "NUM",\n        "value": 3\n      }\n    },\n    "right": {\n      "type": "=",\n      "left": {\n        "type": "ID",\n        "value": "b"\n      },\n      "right": {\n        "type": "+",\n        "left": {\n          "type": "ID",\n          "value": "b"\n        },\n        "right": {\n          "type": "NUM",\n          "value": 1\n        }\n      }\n    }\n  }\n]');
     });

 });