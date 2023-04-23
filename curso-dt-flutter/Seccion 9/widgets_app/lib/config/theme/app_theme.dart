import 'package:flutter/material.dart';

final List<Color> colors = [
  Colors.black,
  Colors.white,
  Colors.orange,
];

class AppTheme {
  final int selectedColor;

  AppTheme({ this.selectedColor = 0 })
      : assert(selectedColor >= 0, 'Selected color must be greater than 0'),
        assert(selectedColor <= colors.length - 1, 'Selected color must be less or equal than ${ colors.length - 1 }');

  ThemeData getTheme() => ThemeData(
    useMaterial3: true,
    colorSchemeSeed: colors[ selectedColor ]
  );
  
}
