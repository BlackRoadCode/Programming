import 'package:flutter/material.dart';

class Listview2Screen extends StatelessWidget {

  final options = const['Fortnite', 'Resident Evil  ', 'Inside', 'Limbo'];
   
  const Listview2Screen({Key? key}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Center(
          child: Text('Listview 2')
          ),
        elevation: 2,
        backgroundColor: Colors.orange,
      ),
      body: ListView.separated(
        itemCount: options.length,
        itemBuilder:  (context, index) => ListTile(
          title: Text(options[index]),
          trailing: const Icon(Icons.arrow_forward_ios_outlined, color: Colors.orange,),
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