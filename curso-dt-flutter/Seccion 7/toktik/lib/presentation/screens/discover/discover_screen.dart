import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:toktik/presentation/providers/discover_provider.dart';

class DiscoverScreen extends StatelessWidget {
   
  const DiscoverScreen({Key? key}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {

    final discoverProvider = context.watch<DiscoverProvider>();

    return Scaffold(
      body: Center(
         child: ListView.builder(
           itemCount: discoverProvider.videos.length,
           itemBuilder: (BuildContext context, int index) {
             return const Text( 'sfdfsd' );
           },
         ),
      ),
    );
  }
}