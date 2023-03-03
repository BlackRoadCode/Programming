
abstract class Animal{ }

abstract class Mamifero extends Animal{ }
abstract class Ave extends Animal{ }
abstract class Pez extends Animal{ }

abstract class Volador{
  void volar() => print('Puedo volar');
}

abstract class Caminante{
  void caminar() => print('Puedo caminar');
}

abstract class Nadador{
  void nadar() => print('Puedo nadar');
}

class Delfin extends Mamifero with Nadador{}
class Murcielago extends Mamifero with Volador, Caminante{}
class Gato extends Mamifero with Caminante{}

class Paloma extends Ave with Volador, Caminante{}
class Pato extends Ave with Volador, Caminante, Nadador{}

class Tiburon extends Pez with Nadador{}
class PezVolador extends Pez with Nadador, Caminante{}

void main(){
  
  final dracula = new Murcielago();
  
  dracula.volar();
  dracula.caminar();
  
}