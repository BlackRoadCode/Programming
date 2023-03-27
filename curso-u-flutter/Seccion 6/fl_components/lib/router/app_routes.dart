import 'package:flutter/material.dart';

import 'package:fl_components/models/models.dart';
import '../screens/screens.dart';

class AppRoutes{

  static const initialRoute = 'home';

  static final menuOptions = <MenuOption>[
    // MenuOption(route: 'home',      name: 'Home Screen',         screen: const HomeScreen(),       icon: Icons.home ),
    MenuOption(route: 'alert',      name: 'Alert Screen',             screen: const AlertScreen(),            icon: Icons.warning ),
    MenuOption(route: 'animated',   name: 'Animated Screen',          screen: const AnimatedScreen(),         icon: Icons.play_circle_outline ),
    MenuOption(route: 'avatar',     name: 'Avatar Screen',            screen: const AvatarScreen(),           icon: Icons.person ),
    MenuOption(route: 'card',       name: 'Card Screen',              screen: const CardScreen(),             icon: Icons.card_membership ),
    MenuOption(route: 'input',      name: 'Input Screen',             screen: const InputsScreen(),           icon: Icons.input ),
    MenuOption(route: 'listView1',  name: 'List View 1 Screen',       screen: const Listview1Screen(),        icon: Icons.list ),
    MenuOption(route: 'listView2',  name: 'List View 2 Screen',       screen: const Listview2Screen(),        icon: Icons.list_alt_outlined ),
    MenuOption(route: 'slider',     name: 'Slider Screen',            screen: const SliderScreen(),           icon: Icons.sledding_rounded ),
    MenuOption(route: 'listviewbs', name: 'ListView Builder Screen',  screen: const ListViewBuilderScreen(),  icon: Icons.list_sharp ),
  ];

  static Map<String, Widget Function(BuildContext)> getAppRoutes(){
    Map<String, Widget Function(BuildContext)> appRoutes = {};

      appRoutes.addAll({ 'home': ( BuildContext context ) => const HomeScreen() });
      
      for( final option in menuOptions ){
        appRoutes.addAll({ option.route:( BuildContext context ) => option.screen });
      }

    return appRoutes;
  }

  static Route<dynamic> onGenerateRoute( RouteSettings settings) {
    return MaterialPageRoute(
      builder: (context) => const Listview2Screen()
    );
  }

}