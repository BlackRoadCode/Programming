import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class SnackbarScreen extends StatelessWidget {

  static const name = 'snackbar-screen';
   
  const SnackbarScreen({Key? key}) : super(key: key);

  void showCustomSnackbar( BuildContext context ){

    ScaffoldMessenger.of(context).clearSnackBars();

    ScaffoldMessenger.of(context).showSnackBar( 
      SnackBar(
        content: const Text( 'Hi snackbar' ),
        action: SnackBarAction(
          label: 'Ok', 
          onPressed: (){ }),
          duration: const Duration( seconds: 2 ),
        ),
      );
  }
  
  void openDialog( BuildContext context ){
    showDialog(
      barrierDismissible: false,
      context: context, 
      builder: (context) => AlertDialog(
        title: const Text('¿Estás seguro?'),
        content: const Text('Dolore fugiat exercitation ea ipsum sit nostrud adipisicing elit. Dolore fugiat exercitation ea ipsum sit nostrud adipisicing elit.'),
        actions: [
          TextButton(
            onPressed: () => context.pop(), 
            child: const Text('Cancelar')
          ),
          FilledButton(
            onPressed: (){}, 
            child: const Text('Aceptar')
          )
        ],
      ),
    );
  }
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
       appBar: AppBar(
           title: const Text('Snackbar y Diálogos'),
       ),
       floatingActionButton: FloatingActionButton.extended(
        label: const Text('Mostrar snackbar'),
        icon: const Icon( Icons.remove_red_eye_sharp ),
        onPressed: () => showCustomSnackbar( context ), 
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            FilledButton.tonal(
              onPressed: (){
                showAboutDialog(
                  context: context,
                  children: [
                    const Text('Commodo exercitation est consequat nulla dolor laborum ex ad eu eiusmod occaecat do.')
                  ]
                );
              },
              child: const Text('Licencias usadas')
            ),
            
            FilledButton.tonal(
              onPressed: () => openDialog(context), 
              child: const Text('Mostrar diálogo')
            ),
          ],
        ),
      )
    );
  }
}