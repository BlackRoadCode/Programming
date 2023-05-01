import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:widgets_app/config/config.dart' show AppTheme, appRouter;
import 'package:widgets_app/presentation/providers/providers.dart';

void main() => runApp(
  const ProviderScope(
    child: MyApp()
  )
);

class MyApp extends ConsumerWidget {
  const MyApp({ super.key });

  @override
  Widget build(BuildContext context, ref) {

    final bool isDarkMode = ref.watch( isDarkModeProvider );
    final int selectedColor = ref.watch( selectedColorProvider );

    return MaterialApp.router(
      debugShowCheckedModeBanner: false,
      theme: AppTheme( selectedColor: selectedColor, isDarkMode: isDarkMode ).getTheme(),
      title: 'Flutter Widgets',
      routerConfig: appRouter,
    );
  }
}