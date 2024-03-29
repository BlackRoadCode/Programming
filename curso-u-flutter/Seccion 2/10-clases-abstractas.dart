void main(){
  
  final perro = new Perro();
  final gato = new Gato();
  
  perro.emitirSonido();
  
  sonidoAnimal(gato);
  
}

void sonidoAnimal( Animal animal ){
  animal.emitirSonido();
}

abstract class Animal{
  int? patas;
  void emitirSonido();
}

class Perro implements Animal{
  int? patas;
  
  void emitirSonido(){
    print('woof woof!');
  }
  
}

class Gato implements Animal{
  int? patas;
  int? cola;
  
  // Función de flecha se puede implementar para funciones de una instrucción.
  // Método corto, aplica en funciónes también
  void emitirSonido() => print('miau miau!');
}