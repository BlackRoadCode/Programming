import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:widgets_app/presentation/providers/providers.dart' show counterProvider, themeNotifierProvider;

class CounterScreen extends ConsumerWidget {

  static const name = 'counter_screen';
   
  const CounterScreen({Key? key}) : super(key: key);
  
  @override
  Widget build(BuildContext context, WidgetRef ref) {

    final int clickCounter = ref.watch( counterProvider );
    final bool isDarkMode = ref.watch( themeNotifierProvider ).isDarkMode;

    return Scaffold(
       appBar: AppBar(
           title: const Text('Counter Screen'),
           actions: [
              IconButton(
                icon: Icon( isDarkMode ? Icons.dark_mode_outlined : Icons.light_mode_outlined ),
                onPressed: (){
                  ref.read( themeNotifierProvider.notifier ).toggleDarkMode();
                }, 
              )
           ],
       ),
      body: Center(
         child: Text(
          'Valor: $clickCounter',
          style: Theme.of(context).textTheme.titleLarge,
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          ref.read( counterProvider.notifier ).state++;
          // ref.read(counterProvider.notifier).update( (state) => state + 1 );
        },
        child: const Icon( Icons.add ),
      ),
    );
  }
}