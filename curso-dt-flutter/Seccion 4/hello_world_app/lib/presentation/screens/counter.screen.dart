import 'package:flutter/material.dart';

class CounterScreen extends StatefulWidget {
  const CounterScreen({super.key});

  @override
  State<CounterScreen> createState() => _CounterScreenState();
}

class _CounterScreenState extends State<CounterScreen> {

  int clickCounter = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        actions: [
          IconButton(
            onPressed: () {
              clickCounter = 0;
              setState(() {});
            }, 
            icon: const Icon( Icons.refresh_sharp, size: 25, )
          ),
        ],
        title: const Text('Counter'),
        centerTitle: true,
      ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(clickCounter.toString(), style: const TextStyle( fontSize: 160, fontWeight: FontWeight.w100 ) ),
              Text('Click${ (clickCounter == 1) ? '' : 's' }', style: const TextStyle( fontSize: 25 ) )
            ],
          ),
        ),
        floatingActionButton: Column(
          mainAxisAlignment: MainAxisAlignment.end,
          children: [
            CustomFloatingActionButton(
              iconButton: Icons.exposure_plus_1_sharp, 
              onPressFn: (){ 
                setState(() {
                  clickCounter++; 
                });
              }),
            
            const SizedBox(height: 15,),
            
            CustomFloatingActionButton(
              iconButton: Icons.exposure_zero_sharp, 
              onPressFn:(){ 
                clickCounter = 0; 
                setState(() {});
              }),
            
            const SizedBox(height: 15,),

            CustomFloatingActionButton(
              iconButton: Icons.exposure_minus_1_sharp, 
              onPressFn: (){ 
                if( clickCounter == 0 ) return;
                clickCounter--; 
                setState(() {});
              }),
          ],
        )
      );
  }
}

class CustomFloatingActionButton extends StatelessWidget {

  final IconData iconButton;
  final VoidCallback? onPressFn;

  const CustomFloatingActionButton({
    super.key, 
    required this.iconButton, 
    this.onPressFn
  });

  @override
  Widget build(BuildContext context) {
    return FloatingActionButton(
      onPressed: onPressFn,
      child: Icon( iconButton ),
    );
  }
}