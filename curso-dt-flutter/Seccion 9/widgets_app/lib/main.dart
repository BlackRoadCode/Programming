import 'package:flutter/material.dart';
import 'package:widgets_app/config/config.dart' show AppTheme;
void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: AppTheme(selectedColor: 2).getTheme(),
      title: 'Material App',
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Nuevos cambios a la app'),
          centerTitle: true,
        ),
        body: Center(
          child: FilledButton(onPressed: () {}, child: const Text('Verificador de temas')),
        ),
      ),
    );
  }
}