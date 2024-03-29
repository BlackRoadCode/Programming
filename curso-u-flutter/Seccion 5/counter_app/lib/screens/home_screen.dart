import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {

    const fontSize30 = TextStyle( fontSize:30 );
    int counter = 38;
    
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        backgroundColor: Colors.blueGrey,
        title: const Text('HomeScreen'),
        elevation: 2,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget> [
            const Text("Click's Counter 2", style: fontSize30 ),
            Text('$counter', style: fontSize30)
            ],
        ),
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
      floatingActionButton: FloatingActionButton(
        backgroundColor: Colors.blueGrey,
        onPressed: (){ 
          counter++;
          print('Hola Mundo $counter'); 
          },
        child: const Icon(Icons.add, size: 30,),
        )
    );
  }
}


// Text('Click`s Counter 2')