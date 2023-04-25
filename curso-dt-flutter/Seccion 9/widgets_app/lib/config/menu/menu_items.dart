import 'package:flutter/material.dart';

class MenuItem{

  final String title;
  final String subTitle;
  final String route;
  final IconData icon;

  const MenuItem({
    required this.title, 
    required this.subTitle, 
    required this.route, 
    required this.icon
  });

}

const appMenuItems = <MenuItem>[
  MenuItem(
    title: 'Botones', 
    subTitle: 'Varios botones en flutter', 
    route: '/buttons', 
    icon: Icons.smart_button_sharp
  ),
  
  MenuItem(
    title: 'Tarjetas', 
    subTitle: 'Un contenedor estilizado', 
    route: '/cards', 
    icon: Icons.card_membership_sharp
  ),
  
  MenuItem(
    title: 'Animated', 
    subTitle: 'Aniumaciones', 
    route: '/animated', 
    icon: Icons.animation_sharp
  ),
  
  MenuItem(
    title: 'Infinite Scroll', 
    subTitle: 'Un scroll infinito con carga asíncrona', 
    route: '/infinite', 
    icon: Icons.screen_share_outlined
  ),

];