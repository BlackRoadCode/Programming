import 'package:flutter/material.dart';

import 'package:fl_components/screens/listview1_screen.dart';

class HomeScreen extends StatelessWidget {
   
  const HomeScreen({Key? key}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Center( child: Text('Componentes en Flutter') ),
        elevation: 2,
      ),
      body: ListView.separated(
        itemCount: 10,
        itemBuilder: (context, index) => ListTile(
          leading: const Icon( Icons.arrow_forward_ios_outlined ),
          title: const Text('nombre de la ruta'),
          onTap: (){

            // final route = MaterialPageRoute(builder: (context) => const Listview1Screen());
            // Navigator.push(context, route);

            Navigator.pushNamed(context, 'card');

          },
        ), 
        separatorBuilder: ( _ , __ ) => const Divider(), 
      )
    );
  }
}