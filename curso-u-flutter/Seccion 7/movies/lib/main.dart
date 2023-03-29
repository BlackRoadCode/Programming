import 'package:flutter/material.dart';

import 'package:movies/screens/screens.dart';
import 'package:movies/themes/app_theme.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Películas',
      debugShowCheckedModeBanner: false,
      initialRoute: 'home',
      theme: AppTheme.lightTheme,
      routes: {
        'home':  ( _ ) => const HomeScreen(),
        'details':  ( _ ) => const DetailsScreen(),
      },
    );
  }
}