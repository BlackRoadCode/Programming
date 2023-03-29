import 'package:flutter/material.dart';

import 'package:movies/widgets/widgets.dart' show CardSwiper;

class HomeScreen extends StatelessWidget {
   
  const HomeScreen({Key? key}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Películas en Cines'),        
        centerTitle: true,
        actions: [
          IconButton(
            onPressed: () {}, 
            icon: const Icon(Icons.search)
          )          
        ],
      ),
      body: Column(
        children: const [
          CardSwiper()
        ],
      )
    );
  }
}