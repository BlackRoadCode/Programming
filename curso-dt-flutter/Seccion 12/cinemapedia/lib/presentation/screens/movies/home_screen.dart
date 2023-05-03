import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {

  static const name = 'home_screen'; 
   
  const HomeScreen({Key? key}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
       appBar: AppBar(
           title: const Text('HomeTitle'),
       ),
      body: const Center(
         child: Text( 'ashdgajhsd' ),
      ),
    );
  }
}