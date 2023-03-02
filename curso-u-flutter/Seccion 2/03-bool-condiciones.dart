
void main(){
  
  // Booleanos
  bool isTrue = true;
  bool isFalse = false;

  // El signo ? indica que esta variable podría ser o no null
  bool? isActive = null;
  
  // esta condición solo si nuestra variable pudiera o no ser null
  if( isActive == null ){
    print('Esto está activo');
  } else {
    print('Esto está inactivo');
  }

}
