'use strict';
module.exports = function() {
  
  var vault = {};

  var setValue = function(key, value) {
    vault.key = value;
   };

  var getValue = function(key){
    if (vault.hasOwnProperty(key))
        for (var e in vault){
          var n = vault[e];
          if (e === key){
            return n;
          }
        } else{
          return null;
        }
      };
      getValue();
}; 