import 'package:flutter/material.dart';

class CustomCardType1 extends StatelessWidget {
  const CustomCardType1({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
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
          ),
          Padding(
            padding: const EdgeInsets.only(right: 5),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                TextButton(
                  onPressed: (){},
                  child: const Text('Cancelar'),
                  ),
                TextButton(
                  onPressed: (){}, 
                  child: const Text('Aceptar')),
              ],
            ),
          )
        ],
      ),
    );
  }
}