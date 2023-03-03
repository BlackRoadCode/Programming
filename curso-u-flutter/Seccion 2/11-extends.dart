void main(){
  final superman = new Heroe('clark kent');
  final doomsday = new Villano('Doomsday');
  
  print( superman );
  print( doomsday ); 
}

abstract class Personaje{
  String nombre;
  String? poder;
  
  Personaje(this.nombre);
  
  @override
  String toString(){
    return 'nombre: $nombre - poder: $poder';
  }
}

class Heroe extends Personaje{
  int valentia = 100;
  Heroe( String nombre ): super( nombre );
}

class Villano extends Personaje{
  int maldad = 50;
  Villano( String nombre ): super( nombre );
}