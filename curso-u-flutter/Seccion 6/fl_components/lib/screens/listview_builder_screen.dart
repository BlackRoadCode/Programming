import 'package:flutter/material.dart';

class ListViewBuilderScreen extends StatelessWidget {
   
  const ListViewBuilderScreen({Key? key}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: const Text('Infinite Scroll & Pull Refresh'),
      ),
      body: const Center(
         child: Text('ListViewBuilderScreen'),
      ),
    );
  }
}