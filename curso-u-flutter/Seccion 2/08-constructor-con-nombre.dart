
void main(){
  
  final rawJson = {
    'nombre':'Bruce Wayne',
    'poder':'Maldad'
  };

  final ironman = Heroe.fromJson( rawJson );
  print(ironman);
  
}

class Heroe{
  
  String nombre;
  String poder;
  
  Heroe( { required this.nombre, required this.poder } );
  
  Heroe.fromJson( Map<String, String> json ):
    nombre = json['nombre'] ?? 'generico',
    poder = json['poder'] ?? 'sin poder';  
  
  String toString(){
    return 'nombre: $nombre y poder: $poder';
  }

}