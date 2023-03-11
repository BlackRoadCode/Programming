import 'package:flutter/material.dart';

class CounterScreen extends StatefulWidget {
  const CounterScreen({super.key});

  @override
  State<CounterScreen> createState() => _CounterScreenState();
}

class _CounterScreenState extends State<CounterScreen> {

  int counter = 0;

  void increase(){
    counter++;
    setState(() { });
  }
  
  void decrease(){
    counter--;
    setState(() { });
  }
  
  void restart(){
    counter = 0;
    setState(() { });
  }

  @override
  Widget build(BuildContext context) {

    const fontSize30 = TextStyle( fontSize:30 );
    
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        backgroundColor: Colors.blueGrey,
        title: const Text('CounterScreen'),
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
      floatingActionButton: CustomFloatingActions(
        increaseFn: increase,
        decreaseFn: decrease,
        restartFn: restart,
      ),
    );
  }
}

class CustomFloatingActions extends StatelessWidget {

  final Function increaseFn;
  final Function decreaseFn;
  final Function restartFn;

  const CustomFloatingActions({
    super.key, 
    required this.increaseFn, 
    required this.decreaseFn, 
    required this.restartFn,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: [
        FloatingActionButton(
          backgroundColor: Colors.blueGrey,
          // onPressed: () => setState( () => counter++ ),
          onPressed: () => increaseFn(),
          child: const Icon(Icons.add, size: 30,),
        ),

        FloatingActionButton(
          backgroundColor: Colors.blueGrey,
          onPressed: () => restartFn(),
          child: const Icon(Icons.all_inclusive, size: 30,),
        ),

        FloatingActionButton(
          backgroundColor: Colors.blueGrey,
          onPressed: () => decreaseFn(),
          child: const Icon(Icons.remove, size: 30,),
        ),
      ],
    );
  }
}
