import 'dart:ui';

import 'package:flutter/material.dart';

class CardTable extends StatelessWidget {
  const CardTable({super.key});

  @override
  Widget build(BuildContext context) {
    return Table(
      children: const [
        TableRow(
          children: [
            _SingleCard(circleAvatarBgColor: Colors.blueAccent, circleAvatarIcon: Icons.tablet_android, text: 'General',),
            _SingleCard(circleAvatarBgColor: Colors.amber, circleAvatarIcon: Icons.usb_outlined, text: 'USB',),
          ]
        ),

        TableRow(
          children: [
            _SingleCard(circleAvatarBgColor: Colors.deepPurple, circleAvatarIcon: Icons.password_sharp, text: 'Password',),
            _SingleCard(circleAvatarBgColor: Colors.lightGreen, circleAvatarIcon: Icons.emoji_nature_outlined, text: 'Naturaleza',),
          ]
        ),
        
        TableRow(
          children: [
            _SingleCard(circleAvatarBgColor: Colors.redAccent, circleAvatarIcon: Icons.fire_truck, text: 'Transport',),
            _SingleCard(circleAvatarBgColor: Colors.cyanAccent, circleAvatarIcon: Icons.account_tree_sharp, text: 'Network',),
          ]
        ),
       
       TableRow(
          children: [
            _SingleCard(circleAvatarBgColor: Colors.blueAccent, circleAvatarIcon: Icons.tablet_android, text: 'General',),
            _SingleCard(circleAvatarBgColor: Colors.amber, circleAvatarIcon: Icons.usb_outlined, text: 'USB',),
          ]
        ),
        
        TableRow(
          children: [
            _SingleCard(circleAvatarBgColor: Colors.deepPurple, circleAvatarIcon: Icons.password_sharp, text: 'Password',),
            _SingleCard(circleAvatarBgColor: Colors.lightGreen, circleAvatarIcon: Icons.emoji_nature_outlined, text: 'Naturaleza',),
          ]
        ),
        
        TableRow(
          children: [
            _SingleCard(circleAvatarBgColor: Colors.redAccent, circleAvatarIcon: Icons.fire_truck, text: 'Transport',),
            _SingleCard(circleAvatarBgColor: Colors.cyanAccent, circleAvatarIcon: Icons.account_tree_sharp, text: 'Network',),
          ]
        ),
      ],
    );
  }
}

class _SingleCard extends StatelessWidget {

  final Color circleAvatarBgColor;
  final IconData circleAvatarIcon;
  final String text;

  const _SingleCard({
    super.key, 
    required this.circleAvatarBgColor, 
    required this.circleAvatarIcon, 
    required this.text
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.all(15),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(20),
        child: BackdropFilter(
          filter: ImageFilter.blur( sigmaX: 5, sigmaY: 5 ),
          child: Container(
            height: 180,
            decoration: BoxDecoration(
              color: const Color.fromRGBO(62, 66, 107, 0.7),
              borderRadius: BorderRadius.circular(20)
            ),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                CircleAvatar(
                  backgroundColor: circleAvatarBgColor,
                  radius: 30,
                  child:  Icon( circleAvatarIcon, size: 35, color: Colors.white )
                ),
                const SizedBox( height: 15 ),
                Text( text , style: TextStyle( fontSize: 15, color: circleAvatarBgColor ),)
              ],
            ),
          ),
        ),
      ),
    );
  }
}

