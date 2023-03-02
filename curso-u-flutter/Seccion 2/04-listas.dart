void main(){
  
  List<int> numeros = [ 1,2,3,4,5,6 ];
  final masNumeros = List.generate( 5, (int index) => index );
  final cuadrados = List.generate( 5, (int index) => index * index );
  
  numeros.add( 7 );

  print(numeros);
  print(masNumeros);
  print(cuadrados);
  
}