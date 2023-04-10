import 'package:flutter/material.dart';

class CustomBottomNavigation extends StatelessWidget {
  const CustomBottomNavigation({super.key});

  @override
  Widget build(BuildContext context) {
    return BottomNavigationBar(
      showSelectedLabels: false,
      showUnselectedLabels: false,
      selectedItemColor: Colors.pink,
      unselectedItemColor: const Color.fromRGBO(116, 117, 152, 1),
      backgroundColor: const Color.fromRGBO(55, 57, 84, 1),
      items: const [
        BottomNavigationBarItem(
          icon: Icon( Icons.calendar_month, size: 30, ),
          label: 'data'
        ),
        BottomNavigationBarItem(
          icon: Icon( Icons.poll_outlined, size: 30, ),
          label: 'data'
        ),
        BottomNavigationBarItem(
          icon: Icon( Icons.person, size: 30, ),
          label: 'data'
        ),
      ]
    );
  }
}