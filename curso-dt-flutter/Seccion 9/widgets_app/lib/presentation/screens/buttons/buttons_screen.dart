import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class ButtonsScreen extends StatelessWidget {

  static const String name = 'buttons_screen';
   
  const ButtonsScreen({Key? key}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
       appBar: AppBar(
           title: const Text('ButtonsTitle'),
       ),
      body: const _ButtonsView(),
      floatingActionButton: FloatingActionButton(
        child: const Icon( Icons.arrow_back_ios_new_sharp ),
        onPressed: () {
          context.pop();
        },
      ),
    );
  }
}

class _ButtonsView extends StatelessWidget {
  const _ButtonsView();

  @override
  Widget build(BuildContext context) {

    final colors = Theme.of(context).colorScheme;

    return SizedBox(
      width: double.infinity,
      child: Padding(
        padding: const EdgeInsets.symmetric( horizontal: 15, vertical: 20 ),
        child: Wrap(
          spacing: 15,
          alignment: WrapAlignment.center,
          children: [
    
            ElevatedButton(
              onPressed: (){}, 
              child: const Text('Elevated')),
    
            const ElevatedButton(
              onPressed: null, 
              child: Text('Elevated Disabled')),
    
            ElevatedButton.icon(
              onPressed: (){}, 
              icon: const Icon(Icons.access_alarm_sharp), 
              label: const Text('Elevated.Icon')),
    
            FilledButton(
              onPressed: (){}, 
              child: const Text('Filled')),
            
            FilledButton.icon(
              icon: const Icon( Icons.adb_rounded ),
              onPressed: (){}, 
              label: const Text('Filled Icon')),

            OutlinedButton(
              onPressed: (){}, 
              child: const Text('Outlined')),
            
            OutlinedButton.icon(
              icon: const Icon( Icons.workspace_premium_outlined ),
              onPressed: (){}, 
              label: const Text('Outlined')),

            TextButton(
              onPressed: (){}, 
              child: const Text('Text')),
            
            TextButton.icon(
              icon: const Icon( Icons.text_fields_sharp ),
              onPressed: (){}, 
              label: const Text('Text')),

            // TODO: Custom button

            IconButton(
              onPressed: (){}, 
              icon: const Icon( Icons.wine_bar_sharp )),

            IconButton(
              onPressed: (){}, 
              icon: const Icon( Icons.wine_bar_sharp ),
              style: ButtonStyle(
                backgroundColor: MaterialStatePropertyAll( colors.primary ),
                iconColor: const MaterialStatePropertyAll( Colors.white )
              ),
              ),
            
          ],
        ),
      ),
    );
  }
}