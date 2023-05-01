import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:widgets_app/presentation/providers/providers.dart' show isDarkModeProvider;

class ThemeChangerScreen extends ConsumerWidget {

  static const name = 'theme_changer';
   
  const ThemeChangerScreen({Key? key}) : super(key: key);
  
  @override
  Widget build(BuildContext context, WidgetRef ref) {

    final bool isDarkMode = ref.watch( isDarkModeProvider );

    return Scaffold(
       appBar: AppBar(
           title: const Text('Theme Changer'),
           actions: [
            IconButton(
                icon: Icon( isDarkMode ? Icons.dark_mode_outlined : Icons.light_mode_outlined ),
                onPressed: (){
                  // ref.read( isDarkModeProvider.notifier ).update( (state) => !state );
                }, 
              )
           ],
       ),
      body: const _ThemeChangerView()
    );
  }
}

class _ThemeChangerView extends StatelessWidget {
  const _ThemeChangerView();

  @override
  Widget build(BuildContext context) {
    return const Placeholder();
  }
}