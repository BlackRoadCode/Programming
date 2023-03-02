
void main(){
  String? name = null;
  
  saludo();
  saludoConArgumentoPosibleNulo( name );
  saludoConArgumentoObligatorio('Pepe');
  saludoConArgumentoOpcional();
  argumentosMixtos('REQUERIDO');
  argumentosEnDesorden(mensaje: 'visto en desorden', nombre: 'Pepe');
  argumentosObligatorios(mensaje: 'mensaje obligatorio', nombre: 'Pepe Sosa');
  print(suma(70));
}

void saludo(){
  print('Saludando y nada más');
}

void saludoConArgumentoPosibleNulo( String? nombre ){
  print('Hola $nombre o null, lo que sea');
}

void saludoConArgumentoObligatorio(String nombre){
  print('Hola $nombre desde la función saludar');
}

void saludoConArgumentoOpcional([String nombre = 'noname']){
  print('Hola $nombre desde el argumento es opcional');
}

void argumentosMixtos( String requerido, [bool opcional = true] ){
  print('Este argumento es $requerido y este es $opcional');
}

void argumentosEnDesorden( { String nombre = 'noname', String? mensaje } ){
  print('Hola $nombre $mensaje');
}

void argumentosObligatorios({ required String nombre, required String mensaje }){
  print('Hola $nombre $mensaje');
}

int suma( [int a = 1, int b = 2] ){
  return a+b;
}