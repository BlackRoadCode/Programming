
void main(){

  // Determinando de inicio el tipo de dato
  String nombre = 'Tony';
  String apellido = 'Stark';
  
  // Constante, su valor no cambiará durante la compilación ni ejecución
  const edad = 37;
  
  // Final, su valor puede cambiar durante la ejecución
  final empleo = 'constructor';
  
  // Final, especificando el tipo de dato desde el inicio (no implícito)
  final String hobbie = 'numismático';
  
  print('$nombre $apellido');
  
  // Números
  
  int edad = 50;
  int otroEntero = 90;
  
  double salario = 128.39;
  
  print( edad + otroEntero );
  print( edad + salario );

}
