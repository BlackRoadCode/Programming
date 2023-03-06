void main() async {

  print('Antes de la petición');
  
  final data = await httpGet('https://rickymortiapp.com');
  print( data );
  
//   final nombre = await getNombre('38');
//   print( nombre );
  
//   getNombre('38').then( print );
  
  print('Fin del programa');
  
}

Future<String> getNombre( String id ) async {
  return '$id - Pepe';
}

Future<String> httpGet( String url ){
  
  return Future.delayed( Duration(seconds: 3), (){
    return 'Hola Mundo 3 segundos';
  });
  
}