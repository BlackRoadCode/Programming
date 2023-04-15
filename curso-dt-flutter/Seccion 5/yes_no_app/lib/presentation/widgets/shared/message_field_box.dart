import 'package:flutter/material.dart';

class MessageFieldBox extends StatelessWidget {
  const MessageFieldBox({super.key});

  @override
  Widget build(BuildContext context) {
    
    final outlineInputBorder = UnderlineInputBorder(
          borderSide: const BorderSide(color: Colors.transparent),
          borderRadius: BorderRadius.circular(40)
    );

    final inputDecoration = InputDecoration(
      enabledBorder: outlineInputBorder,
      focusedBorder: outlineInputBorder,
      filled: true,
      suffixIcon: IconButton(
        onPressed: () {
          print('Valor de la caja de texto');
        }, 
        icon: const Icon(Icons.send)
      ),
    );

    return TextFormField(
      decoration: inputDecoration,
      onFieldSubmitted: (value) { 
        print('submit value: $value');
      },

      onChanged: (value) {
        print('Changed: $value');
      },
    );
  }
}
