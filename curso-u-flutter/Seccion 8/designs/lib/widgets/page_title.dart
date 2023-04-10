import 'package:flutter/material.dart';

class PageTitle extends StatelessWidget {
  const PageTitle({super.key});

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      bottom: false,
      child: Container(
        margin: const EdgeInsets.symmetric( horizontal: 30, vertical: 10 ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: const [
            Text('Classify transaction', style: TextStyle( fontSize: 20, fontWeight: FontWeight.bold, color: Colors.white ) ),
            SizedBox( height: 10 ),
            Text('In in ad laboris duis tempor laboris duis tempor.', style: TextStyle( fontSize: 17, color: Colors.white )),
          ]
        ),
      ),
    );
  }
}