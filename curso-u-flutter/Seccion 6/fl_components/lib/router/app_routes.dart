import 'package:flutter/material.dart';

import 'package:fl_components/models/models.dart';
import '../screens/screens.dart';

class AppRoutes{

  static const initialRoute = 'home';

  static final menuOptions = <MenuOption>[
    MenuOption(route: 'home',      name: 'Home Screen',         screen: const HomeScreen(),       icon: Icons.home ),
    MenuOption(route: 'listView1', name: 'List View 1 Screen',  screen: const Listview1Screen(),  icon: Icons.list ),
    MenuOption(route: 'listView2', name: 'List View 2 Screen',  screen: const Listview2Screen(),  icon: Icons.list_alt_outlined ),
    MenuOption(route: 'alert',     name: 'Alert Screen',        screen: const AlertScreen(),      icon: Icons.warning ),
    MenuOption(route: 'card',      name: 'Card Screen',         screen: const CardScreen(),       icon: Icons.card_membership ),
  ];

  static Map<String, Widget Function(BuildContext)> getAppRoutes(){
    Map<String, Widget Function(BuildContext)> appRoutes = {};
      
      for( final option in menuOptions ){
        appRoutes.addAll({ option.route:( BuildContext context ) => option.screen });
      }

    return appRoutes;
  }


  // static Map<String, Widget Function(BuildContext)> routes = {
  //       'home':( BuildContext context ) => const HomeScreen(),
  //       'listView1':( BuildContext context ) => const Listview1Screen(),
  //       'listView2':( BuildContext context ) => const Listview2Screen(),
  //       'alert':( BuildContext context ) => const AlertScreen(),
  //       'card':( BuildContext context ) => const CardScreen(),
  // };

  static Route<dynamic> onGenerateRoute( RouteSettings settings) {
        return MaterialPageRoute(
          builder: (context) => const Listview2Screen()
        );
  }

}