
void main(){
  
  // Map común
  Map personaGen = {
    'nombre':'Pepe',
    'apellido':'Sosa',
    'edad':40,
  };
  
  // con llaves de un tipo diferente
  Map personaRar = {
    'nombre':'Pepe',
    'apellido':'Sosa',
    'edad':40,
		1:2,
		true:false
  };
  
  // con llaver únicamente de strings
  Map<String,dynamic> keyDeStrings = {
    'solo':123,
    'permite':false,
    'string':'como key'
  };
  
  // con llaves y valores únicamente de tipo string 
  Map<String,String> keyValueStrings = {
    'solo':'123',
    'permite':'string',
    'en':'hey y value'
  };

  // añadiendo un par a un map ya creado  
  personaGen.addAll({ 'otraKey':'y su valor' });
  
  print( personaGen );
  print( personaRar );
  
  // accediendo a los valores del map vía sus keys (literales)
  print( personaRar['nombre'] );
  print( personaRar[1] );
  print( personaRar[ true ] );
  
  print(keyDeStrings);
  
}
