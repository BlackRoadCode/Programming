
void main(){
  
  final spiderman = Heroe( nombre:'Logan', poder:'Regeneración' );
  
//   spiderman.nombre = 'Peter';
//   spiderman.poder = 'Trepar';
  
  print(spiderman);
  
}


class Heroe{
  
  String nombre;
  String poder;
  
  Heroe( { required this.nombre, required this.poder } );
  
  @override
  String toString(){
    return 'nombre: ${this.nombre} y poder: ${this.poder}';
  }
  
}