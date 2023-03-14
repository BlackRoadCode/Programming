import 'package:flutter/material.dart';

class Listview1Screen extends StatelessWidget {

  final options = const['Fortnite', 'Resident Evil', 'Inside', 'Limbo', 'Fifa 2023'];
   
  const Listview1Screen({Key? key}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Listview 1'),
      ),
      body: ListView(
        children: [
          ...options.map( 
            (e) => ListTile(
              title: Text(e),
              trailing: const Icon(Icons.arrow_forward_ios_outlined),
              ), 
          ).toList(),
        ],
      )
    );
  }
}