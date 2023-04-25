import 'package:flutter/material.dart';

class UiControlsScreen extends StatelessWidget {

  static const name = 'ui_controls-screen';
   
  const UiControlsScreen({Key? key}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
       appBar: AppBar(
           title: const Text('UiControlsTitle'),
       ),
      body: const Center(
         child: Text('UiControlsScreen'),
      ),
    );
  }
}