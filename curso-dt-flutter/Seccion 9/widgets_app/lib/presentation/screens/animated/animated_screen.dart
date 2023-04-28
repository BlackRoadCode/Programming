import 'package:flutter/material.dart';
import 'dart:math' show Random;

class AnimatedScreen extends StatefulWidget {

  static const name = 'animated_screen';
   
  const AnimatedScreen({Key? key}) : super(key: key);

  @override
  State<AnimatedScreen> createState() => _AnimatedScreenState();
}

class _AnimatedScreenState extends State<AnimatedScreen> {

  double borderRadius = 10.0;
  double height = 50;
  double width = 50;
  Color color = Colors.indigo;

  void changeShape(){

    final random = Random();

    borderRadius = random.nextInt( 100 ) + 20;
    height = random.nextInt( 300 ) + 50;
    width = random.nextInt( 300 ) + 50;
    color = Color.fromRGBO( random.nextInt(255), random.nextInt(255), random.nextInt(255), 1 );

    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
       appBar: AppBar(
           title: const Text('Animated Container'),
       ),
       floatingActionButton: FloatingActionButton(
          onPressed: changeShape,
          child: const Icon( Icons.play_arrow_sharp ),
        ),

      body: Center(
         child: AnimatedContainer(
          duration: const Duration( milliseconds: 500 ),
          curve: Curves.easeOutCubic,
          width: width < 0 ? 0 : width,
          height: height < 0 ? 0 : height,
          decoration: BoxDecoration(
            color: color,
            borderRadius: BorderRadius.circular( borderRadius <= 0 ? 0 : borderRadius )
          ),
         ),
      ),
    );
  }
}