import 'package:flutter/material.dart';
import 'package:qr_app/widgets/widgets.dart';

class HomeScreen extends StatelessWidget {
   
  const HomeScreen({Key? key}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        elevation: 0,
        title: const Text('Historial'),
        centerTitle: true,
        actions: [
          IconButton(
            onPressed: () {},
            icon: const Icon( Icons.delete )
          )
        ],
      ),
      
      body: const Center(
         child: Text('HomeScreen'),
      ),

      bottomNavigationBar: const CustomNavigationBar(),
    );
  }
}