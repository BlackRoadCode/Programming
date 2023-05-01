import 'package:flutter/material.dart';

final List<Color> colors = [
  Colors.black,
  Colors.white,
  Colors.orange,
  Colors.pink,
  Colors.green,
  Colors.blueGrey,
  Colors.purple,
  Colors.teal,
  Colors.red,
];

class AppTheme {
  final int selectedColor;
  final bool isDarkMode;

  AppTheme({ 
    this.selectedColor = 0,
    this.isDarkMode = false
  })
      : assert(selectedColor >= 0, 'Selected color must be greater than 0'),
        assert(selectedColor <= colors.length - 1, 'Selected color must be less or equal than ${ colors.length - 1 }');

  ThemeData getTheme() => ThemeData(
    useMaterial3: true,
    brightness: isDarkMode ? Brightness.dark : Brightness.light,
    colorSchemeSeed: colors[ selectedColor ],
    appBarTheme: const AppBarTheme(
      centerTitle: false,
    )
  );

  AppTheme copyWith({
    int? selectedColor,
    bool? isDarkMode
  }) => AppTheme(
    selectedColor: selectedColor ?? this.selectedColor,
    isDarkMode: isDarkMode ?? this.isDarkMode
  );
  
}
