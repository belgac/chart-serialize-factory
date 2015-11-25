angular.module('chartSerialize.factory', [])
  .factory('chartSerializeFactory', chartSerializeFactory);
  
  function chartSerializeFactory(){
    var factory = {};
    
    factory.serialize = serialize;
    
    return factory;
    
    function serialize(data,xfield,yfields){
      var serializedFields = [];
      for (var i in yfields){
        var serializeField = {key:yfields[i].label,values:[]}
        for (var dataI in data) {
          var x = data[dataI][xfield.key];
          var y =  data[dataI][yfields[i].key]
          var point = {x:x,y:y};
          serializeField.values.push(point);
        }
        serializedFields.push(serializeField);
      }
      return serializedFields
    }
  }