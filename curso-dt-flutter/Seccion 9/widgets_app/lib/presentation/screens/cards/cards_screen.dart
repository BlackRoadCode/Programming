import 'package:flutter/material.dart';

class CardsScreen extends StatelessWidget {
   
  const CardsScreen({Key? key}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
    appBar: AppBar(
      title: const Text('CardsTitle'),
    ),
      body: const Center(
         child: Text('CardsScreen'),
      ),
    );
  }
}