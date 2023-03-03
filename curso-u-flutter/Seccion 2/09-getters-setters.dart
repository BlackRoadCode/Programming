import 'dart:math' as math;

void main(){
  
  final cuadrado = new Cuadrado(0);
  
  // usando el setter
  cuadrado.area = 25;
  
  // usando el getter
  print('El área es: ${ cuadrado.area }');
  print( 'El lado es igual a: ${ cuadrado.lado }' );
}

class Cuadrado{
  double lado = 0;
  
//   Constructor normal
  Cuadrado( this.lado );
  
  // La siguiente forma de constructor es un equivalente a la de arriba.
//   Cuadrado( double lado ):
//     this.lado = lado;
  
  // Getter
  double get area{
    return lado * lado;
  }
  
  // Setter
  set area( double valor ){
    lado = math.sqrt( valor );
  }
  
}