import 'package:flutter/material.dart';

class HerMessageBubble extends StatelessWidget {
  const HerMessageBubble({super.key});

  @override
  Widget build(BuildContext context) {

    final colors = Theme.of(context).colorScheme;

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Container(
          decoration: BoxDecoration(
            color: colors.inversePrimary,
            borderRadius: BorderRadius.circular(20)
          ),
          child: Padding(
            padding: const EdgeInsets.symmetric( horizontal: 20, vertical: 10 ),
            child: Text('her message', style: TextStyle( color: colors.inverseSurface ),),
          ),
        ),

        const SizedBox( height: 5, ),

        _ImageBubble(),

        const SizedBox( height: 10 ),
      ],
    );
  }
}

class _ImageBubble extends StatelessWidget {


  @override
  Widget build(BuildContext context) {

  final size = MediaQuery.of(context).size;

    return ClipRRect(
      borderRadius: BorderRadius.circular(20),
      child: Image.network(
        'https://yesno.wtf/assets/no/11-e6b930256265890554c1464973ebba55.gif',
        width: size.width * 0.7,
        height: 150,
        fit: BoxFit.contain,
        loadingBuilder: (context, child, loadingProgress) {
          if (loadingProgress == null) return child;

          return Container(
            width: size.width * 0.7,
            height: 150,
            padding: const EdgeInsets.symmetric( horizontal: 10, vertical: 5 ),
            child: const Text('Loading image...', style: TextStyle( color: Colors.black ),)
          );
          
        },
      )
    );
  }
}
