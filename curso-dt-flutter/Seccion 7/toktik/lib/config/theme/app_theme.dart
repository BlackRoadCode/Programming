
import 'package:flutter/material.dart';

class AppTheme{

  ThemeData getTheme() => ThemeData(
    useMaterial3: true,
    brightness: Brightness.dark,
    textTheme: const TextTheme( bodyMedium:TextStyle( fontSize: 60, color: Colors.red ) )
  );

}