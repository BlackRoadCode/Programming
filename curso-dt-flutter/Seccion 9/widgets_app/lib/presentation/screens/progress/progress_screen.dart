import 'package:flutter/material.dart';

class ProgressScreen extends StatelessWidget {

  static const name = 'progress_screen';
   
  const ProgressScreen({Key? key}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
       appBar: AppBar(
           title: const Text('Progress Indicators'),
       ),
      body: const _ProgressView(),
    );
  }
}

class _ProgressView extends StatelessWidget {
  const _ProgressView();

  @override
  Widget build(BuildContext context) {
    return Center(
       child: Column(
        children: const [
          SizedBox( height: 30 ),

          Text('Circular Progress Indicator'),
          SizedBox( height: 15 ),
          CircularProgressIndicator( strokeWidth: 2, backgroundColor: Colors.black45 ),

          SizedBox( height: 20 ),

          Text('Progress Indicator controlado'),
          SizedBox( height: 15 ),
          _ControllerProgressIndicator(),

        ],
       ),
    );
  }
}

class _ControllerProgressIndicator extends StatelessWidget {
  const _ControllerProgressIndicator();

  @override
  Widget build(BuildContext context) {
    return const Placeholder();
  }
}