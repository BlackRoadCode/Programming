import 'package:flutter/material.dart';

const Color _customColor = Color(0xFFF1660A);
const List<Color> _colorThemes = [
  _customColor,
  Colors.black,
  Colors.red,
  Colors.blueGrey,
  Colors.yellow,
  Colors.cyanAccent,
  Colors.pink,
];

class AppTheme{

  final int selectedColor;

  AppTheme({ this.selectedColor = 4 })
    : assert ( selectedColor >= 0 && selectedColor <= _colorThemes.length - 1 , 'Colors must be betwen 0 and ${ _colorThemes.length - 1 }' );

  ThemeData theme(){
    return ThemeData(
        useMaterial3: true,
        colorSchemeSeed: _colorThemes[selectedColor],
      );
  }

}