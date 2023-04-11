import 'package:flutter/material.dart';

class CustomNavigationBar extends StatelessWidget {
  const CustomNavigationBar({super.key});

  @override
  Widget build(BuildContext context) {
    return BottomNavigationBar(
      items: const [
        BottomNavigationBarItem(
          icon: Icon( Icons.qr_code_2_outlined ),
          label: 'QR READER'
        ),
        BottomNavigationBarItem(
          icon: Icon( Icons.qr_code_2_outlined ),
          label: 'QR READER'
        ),
      ]);
  }
}