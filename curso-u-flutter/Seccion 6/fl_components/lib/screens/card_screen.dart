import 'package:flutter/material.dart';

class CardScreen extends StatelessWidget {
  const CardScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Center(child: Text('Card screen')),
        ),
        body: ListView(
          padding: const EdgeInsets.symmetric(horizontal: 50, vertical: 25),
          children: [
            Card(
              child: Column(
                children: [
                  ListTile(
                    leading: Icon(
                      Icons.adb,
                      color: Theme.of(context).primaryColor,
                    ),
                    title: const Text('título'),
                    subtitle: const Text(
                        'Laboris exercitation velit officia occaecat. Do laboris nostrud consectetur est incididunt laboris eiusmod anim. Adipisicing et ex anim mollit enim magna consequat labore pariatur reprehenderit'),
                  )
                ],
              ),
            )
          ],
        ));
  }
}
