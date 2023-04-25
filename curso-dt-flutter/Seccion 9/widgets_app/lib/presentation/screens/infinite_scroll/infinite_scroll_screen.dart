import 'package:flutter/material.dart';

class InfiniteScrollScreen extends StatelessWidget {

  static const name = 'infinite_screen';
   
  const InfiniteScrollScreen({Key? key}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
       appBar: AppBar(
           title: const Text('InfiniteScrollTitle'),
       ),
      body: const Center(
         child: Text('InfiniteScrollScreen'),
      ),
    );
  }
}