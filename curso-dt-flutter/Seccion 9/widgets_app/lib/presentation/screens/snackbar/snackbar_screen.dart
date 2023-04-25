import 'package:flutter/material.dart';

class SnackbarScreen extends StatelessWidget {

  static const name = 'snackbar-screen';
   
  const SnackbarScreen({Key? key}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
       appBar: AppBar(
           title: const Text('SnackbarTitle'),
       ),
      body: const Center(
         child: Text('SnackbarScreen'),
      ),
    );
  }
}