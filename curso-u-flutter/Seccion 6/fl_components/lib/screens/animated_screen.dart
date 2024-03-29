import 'dart:math' show Random;

import 'package:flutter/material.dart';

class AnimatedScreen extends StatefulWidget {
   
  const AnimatedScreen({Key? key}) : super(key: key);

  @override
  State<AnimatedScreen> createState() => _AnimatedScreenState();
}

class _AnimatedScreenState extends State<AnimatedScreen> {

  double _width = 50;
  double _height = 50;
  Color _color = Colors.lightBlue;
  BorderRadiusGeometry _borderRadius = BorderRadius.circular(1);

   void changeShape(){
    final rnd = Random();
    _width = rnd.nextInt(100).toDouble() + 70;
    _height = rnd.nextInt(100).toDouble() + 70;
    _color = Color.fromRGBO(
      rnd.nextInt(255), 
      rnd.nextInt(255), 
      rnd.nextInt(255), 
      1);
    _borderRadius = BorderRadius.circular(rnd.nextInt(255).toDouble() + 10);
    setState(() { });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: const Text('Animations'),
      ),
      body: Center(
         child: AnimatedContainer(
          duration: const Duration(milliseconds: 500),
          curve: Curves.easeOutCubic,
          width: _width,
          height: _height,
          decoration: BoxDecoration(
            color: _color,
            borderRadius: _borderRadius
          ),
         ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: (){
          changeShape();
        },
        child: const Icon( Icons.play_arrow ),
        ),
    );
  }
}