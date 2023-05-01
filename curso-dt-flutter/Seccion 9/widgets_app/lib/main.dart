import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:widgets_app/config/config.dart' show AppTheme, appRouter;

void main() => runApp(
  const ProviderScope(
    child: MyApp()
  )
);

class MyApp extends StatelessWidget {
  const MyApp({ super.key });

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      debugShowCheckedModeBanner: false,
      theme: AppTheme(selectedColor: 1).getTheme(),
      title: 'Flutter Widgets',
      routerConfig: appRouter,
    );
  }
}