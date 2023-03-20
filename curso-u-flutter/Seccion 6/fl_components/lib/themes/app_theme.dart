import 'package:flutter/material.dart';

class AppTheme {
  static const Color primary = Colors.black;
  static const Color primaryDark = Colors.deepOrange;

  static final ThemeData lightTheme = ThemeData.light().copyWith(
      primaryColor: primary,
      appBarTheme: const AppBarTheme(
        color: primary,
        elevation: 0,
      ));
  
  static final ThemeData darkTheme = ThemeData.light().copyWith(
      primaryColor: primary,
      appBarTheme: const AppBarTheme(
        color: primaryDark,
        elevation: 0,
      ));
}
