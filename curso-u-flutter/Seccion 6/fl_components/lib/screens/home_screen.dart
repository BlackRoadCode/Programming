import 'package:flutter/material.dart';

import 'package:fl_components/router/app_routes.dart';

class HomeScreen extends StatelessWidget {
   
  const HomeScreen({Key? key}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {

    final menuOptions = AppRoutes.menuOptions;

    return Scaffold(
      appBar: AppBar(
        title: const Center( child: Text('Home Screen') ),
        elevation: 2,
      ),
      body: ListView.separated(
        itemCount: menuOptions.length,
        itemBuilder: (context, i) => ListTile(
          leading: Icon( menuOptions[i].icon ),
          title: Text(menuOptions[i].name),
          trailing: const Icon(Icons.arrow_forward_ios_outlined),
          onTap: (){
            Navigator.pushNamed(context, menuOptions[i].route);
          },
        ), 
        separatorBuilder: ( _ , __ ) => const Divider(), 
      )
    );
  }
}