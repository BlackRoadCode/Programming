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
    title: 'Progress indicator', 
    subTitle: 'Generales y controlados', 
    route: '/progress', 
    icon: Icons.refresh_sharp
  ),

  MenuItem(
    title: 'Snackbars y diálogos', 
    subTitle: 'Indicadores en pantalla', 
    route: '/snackbars', 
    icon: Icons.info_outlined
  ),

  MenuItem(
    title: 'Animated container', 
    subTitle: 'Stateful widget animator', 
    route: '/animated', 
    icon: Icons.square_outlined
  ),
  
  MenuItem(
    title: 'UI Controls + Tiles', 
    subTitle: 'Una serie de controles de Flutter', 
    route: '/controls', 
    icon: Icons.car_rental_outlined
  ),
  
  MenuItem(
    title: 'Introducción a la aplicación', 
    subTitle: 'Pequeño tutorial introductorio', 
    route: '/tutorial', 
    icon: Icons.wheelchair_pickup_sharp
  ),
  
  MenuItem(
    title: 'Infinite Scrolly Pull', 
    subTitle: 'Un scroll infinito con carga asíncrona', 
    route: '/infinite', 
    icon: Icons.list_alt_sharp
  ),

];