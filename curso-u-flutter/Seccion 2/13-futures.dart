void main(){
  print('Antes de la petición');
  
  httpGet('https://rickymortiapp.com')
    .then( (data){
      print( data.toUpperCase() );
    });
  
  print('Fin del programa');
}

Future<String> httpGet( String url ){
  return Future.delayed( Duration(seconds: 3), (){
    return 'Hola Mundo 3 segundos';
  });
}

// Forma abreviada del future (usar una o la otra)
Future<String> httpGet( String url ){
  return Future.delayed( Duration(seconds: 3), () => 'Hola Mundo 3 segundos' );
}