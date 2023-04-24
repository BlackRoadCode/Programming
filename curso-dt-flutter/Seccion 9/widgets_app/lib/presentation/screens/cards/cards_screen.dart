import 'package:flutter/material.dart';

class CardsScreen extends StatelessWidget {

  static const String name = 'cards_screen';
   
  const CardsScreen({Key? key}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
    appBar: AppBar(
      title: const Text('CardsTitle'),
    ),
      body: const _CardsView(),
    );
  }
}

class _CardsView extends StatelessWidget {
  const _CardsView();

  @override
  Widget build(BuildContext context) {
    return const Center(
       child: Text('CardsScreen view'),
    );
  }
}