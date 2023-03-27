import 'package:flutter/material.dart';

class Listview2Screen extends StatelessWidget {

  final options = const['Fortnite', 'Resident Evil  ', 'Inside', 'Limbo'];
   
  const Listview2Screen({Key? key}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: const Text('Other List View Screen'),
      ),
      body: ListView.separated(
        itemCount: options.length,
        itemBuilder:  (context, index) => ListTile(
          title: Text(options[index]),
          trailing: const Icon( Icons.arrow_forward_ios_outlined ),
          onTap: (){
            final game = options[index];
            print(game);
          },
        ),
        separatorBuilder: ( _ , __ ) => const Divider(), 
      )
    );
  }
}