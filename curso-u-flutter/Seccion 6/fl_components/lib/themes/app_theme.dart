import 'package:flutter/material.dart';

class AppTheme {
  static const Color primary = Colors.black;
  static const Color primaryDark = Colors.blueGrey;

  static final ThemeData lightTheme = ThemeData.light().copyWith(
        primaryColor: primary,
        appBarTheme: const AppBarTheme(
          color: primary,
          elevation: 0,
        ),
        textButtonTheme: TextButtonThemeData(
          style: TextButton.styleFrom(foregroundColor: primary),
        ),
        floatingActionButtonTheme: const FloatingActionButtonThemeData(
          elevation: 2,
          backgroundColor: primary,
        ),
        elevatedButtonTheme: ElevatedButtonThemeData(
          style: ElevatedButton.styleFrom(
            backgroundColor: primary,
            shape: const StadiumBorder(),
            elevation: 0
          )
        ),
        inputDecorationTheme: const InputDecorationTheme(
          iconColor: primary,
          suffixIconColor: primary,
          floatingLabelStyle: TextStyle( color: primary ),
          enabledBorder: OutlineInputBorder(
            borderSide: BorderSide( color: primary ),
            borderRadius: BorderRadius.only( bottomLeft: Radius.circular(20), topRight: Radius.circular(20) ),
          ),
          focusedBorder: OutlineInputBorder(
            borderSide: BorderSide( color: Colors.green ), 
            borderRadius: BorderRadius.only( bottomLeft: Radius.circular(20), topRight: Radius.circular(20) ),
          ),
          focusedErrorBorder: OutlineInputBorder(
            borderSide: BorderSide( color: Colors.red ), 
            borderRadius: BorderRadius.only( bottomLeft: Radius.circular(20), topRight: Radius.circular(20) ),
          ),
        )
      );

  static final ThemeData darkTheme = ThemeData.dark().copyWith(
        primaryColor: primaryDark,
        appBarTheme: const AppBarTheme(
          color: primaryDark,
          elevation: 0,
        ),
        textButtonTheme: TextButtonThemeData(
          style: TextButton.styleFrom(foregroundColor: primaryDark),
        ),
        floatingActionButtonTheme: const FloatingActionButtonThemeData(
          elevation: 2,
          backgroundColor: primaryDark,
        ),
        elevatedButtonTheme: ElevatedButtonThemeData(
          style: ElevatedButton.styleFrom(
            backgroundColor: primaryDark,
            shape: const StadiumBorder(),
            elevation: 0
          )
        ),
        inputDecorationTheme: const InputDecorationTheme(
          iconColor: primaryDark,
          suffixIconColor: primaryDark,
          floatingLabelStyle: TextStyle( color: primaryDark ),
          enabledBorder: OutlineInputBorder(
            borderSide: BorderSide( color: primaryDark ),
            borderRadius: BorderRadius.only( bottomLeft: Radius.circular(20), topRight: Radius.circular(20) ),
          ),
          focusedBorder: OutlineInputBorder(
            borderSide: BorderSide( color: Colors.green ), 
            borderRadius: BorderRadius.only( bottomLeft: Radius.circular(20), topRight: Radius.circular(20) ),
          ),
          focusedErrorBorder: OutlineInputBorder(
            borderSide: BorderSide( color: Colors.red ), 
            borderRadius: BorderRadius.only( bottomLeft: Radius.circular(20), topRight: Radius.circular(20) ),
          ),
        )
      );
}
