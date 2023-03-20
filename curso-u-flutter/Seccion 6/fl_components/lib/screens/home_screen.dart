import 'package:fl_components/themes/app_theme.dart';
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
      ),
      body: ListView.separated(
        itemBuilder: (context, i) => ListTile(
          leading: Icon( menuOptions[i].icon, color: AppTheme.primary ),
          title: Text(menuOptions[i].name),
          trailing: const Icon(Icons.arrow_forward_ios_outlined, color: AppTheme.primary,),
          onTap: (){
            Navigator.pushNamed(context, menuOptions[i].route);
          },
        ), 
        itemCount: menuOptions.length,
        separatorBuilder: ( _ , __ ) => const Divider(), 
      )
    );
  }
}