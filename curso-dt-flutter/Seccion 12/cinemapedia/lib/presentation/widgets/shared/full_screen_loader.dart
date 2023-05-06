import 'package:flutter/material.dart';

class FullScreenLoader extends StatelessWidget {
  const FullScreenLoader({super.key});

  Stream<String> getLoadingMessagess(){
    final messages = <String>[
      'Conectando a satélite de la NASA',
      'Recibiendo datos encriptados',
      'Desencriptando datos, algoritmo secreto de la NSA',
      'Estableciendo enlace mundial',
      'Ya me parezco al cine con sus trailers infinitos :`( ...',
      'Casi... caaaaaasi llegan',
      'Qué internet tan lento ¡ahhh pero para cobrar son buenos!',
    ];

    return Stream.periodic( const Duration( milliseconds: 1200 ), (step){
      return messages[step];
    }).take(messages.length);
  }
  
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const Text('Espere por favor'),
          const SizedBox( height: 10 ),

          const CircularProgressIndicator( strokeWidth: 2 ),
          const SizedBox( height: 10 ),

          StreamBuilder(
            stream: getLoadingMessagess(),
            builder: (context, snapshot) {
              if( !snapshot.hasData ) return const Text('Cargando mensajes');

              return Text(snapshot.data!);
            },
          )
        ],
      ),
    );
  }
}