import 'package:flutter/material.dart';

import '../models/models.dart';

class ActorScreen extends StatelessWidget {
   
  const ActorScreen({
    Key? key, 
  }) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
  
  final Cast actor = ModalRoute.of(context)!.settings.arguments as Cast;

    return Scaffold(
      appBar: AppBar(
        title: Text( actor.name ),
        centerTitle: true,
      ),
      body: Column(
        children: [
          Center(
            child: Padding(
              padding: const EdgeInsets.only( top: 25),
              child: Hero(
                tag: actor.id,
                child: CircleAvatar(
                  backgroundImage: NetworkImage(actor.fullProfilePath),
                  radius: 150,
                ),
              ),
            ),
          ),
          const SizedBox( height: 25, ),
          Text( 
            actor.name, 
            style: const TextStyle( fontSize: 45 ),
          ),
          Text(
            'En el papel de: ${ actor.character }',
             style: TextStyle( fontSize: 20, color: Theme.of(context).primaryColor ),
          )
        ],
      ),
    );
  }
}