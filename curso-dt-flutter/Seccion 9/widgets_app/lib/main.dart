import 'package:flutter/material.dart';
import 'package:widgets_app/config/config.dart' show AppTheme, appRouter;

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      debugShowCheckedModeBanner: false,
      theme: AppTheme(selectedColor: 2).getTheme(),
      title: 'Material App',
      routerConfig: appRouter,
    );
  }
}