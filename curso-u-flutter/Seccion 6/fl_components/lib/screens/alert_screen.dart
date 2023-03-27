import 'dart:io';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class AlertScreen extends StatelessWidget {
   
  const AlertScreen({Key? key}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: const Text('Alert Screen'),
      ),
        body: Center(
          child: ElevatedButton(
            onPressed: () => Platform.isAndroid 
                ? displayDialogAndroid(context)
                : displayDialogIos(context),
            child: const Padding(
              padding: EdgeInsets.symmetric(horizontal: 20, vertical: 13),
              child: Text('Mostrar Alerta', style: TextStyle(fontSize: 17)),
            ),
          )
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: (){
            Navigator.pop(context);
          },
          child: const Icon(Icons.close)
        ),
    );
  }

  displayDialogAndroid( BuildContext context ){

    showDialog(
      barrierDismissible: false,
      context: context, 
      builder: ( context ){
        return AlertDialog(
          elevation: 5,
          shape: RoundedRectangleBorder( borderRadius: BorderRadius.circular(10) ),
          semanticLabel: 'Este es semantical label',
          title: const Text('Título del alert'),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: const [
              Text('Este es el contenido de la alerta'),
              SizedBox( height: 10, ),
              FlutterLogo(size: 50,)
            ],
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.pop(context), 
              child: const Text('Cancelar')
            ),
            TextButton(
              onPressed: () => Navigator.pop(context), 
              child: const Text('Ok')
            )
          ],
        );
      }
    );
    
  }

  displayDialogIos( BuildContext context ){

    showCupertinoDialog(
      barrierDismissible: true,
      context: context, 
      builder: ( context ){
        return CupertinoAlertDialog(
          title: const Text('Título del cupertino alert'),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: const [
              Text('Este es el contenido de la alerta cupertino'),
              SizedBox( height: 10, ),
              FlutterLogo(size: 50,)
            ],
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.pop(context), 
              child: const Text('Cancelar')
            ),
            TextButton(
              onPressed: () => Navigator.pop(context), 
              child: const Text('Ok')
            )
          ],
        );
      }
    );

  }

}