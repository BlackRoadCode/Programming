import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'package:movies/providers/movies_provider.dart';
import 'package:movies/themes/app_theme.dart';
import 'package:movies/screens/screens.dart';

void main() => runApp(const AppState());

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

class AppState extends StatelessWidget {
  const AppState({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider( create: ( _ ) => MoviesProvider(), lazy: false )
      ],
      child: const MyApp(),
    );
  }
}