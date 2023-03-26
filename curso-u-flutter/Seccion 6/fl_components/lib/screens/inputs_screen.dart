import 'package:flutter/material.dart';

import '../widgets/widgets.dart';

class InputsScreen extends StatelessWidget {
   
  const InputsScreen({Key? key}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Center(
          child: Text('Inputs y Forms'),
        ),
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.symmetric( horizontal: 20, vertical: 10 ),
          child: Column(
            children: const [
              CustomTextField( labelText: 'Nombre', helperText: 'Mínimo 3 caracteres', hintText: 'Ingresa tu nombre', icon: Icons.person, suffixIcon: Icons.person_add_alt_1,),
              SizedBox( height: 30, ),
              CustomTextField( labelText: 'Email', helperText: 'Ingresa un email válido', hintText: 'Password', icon: Icons.email),
              SizedBox( height: 30, ),
              CustomTextField( labelText: 'Password', helperText: 'Mínimo 3 caracteres 2 mayusculas un número', hintText: 'Password', icon: Icons.password_sharp),
            ],
          ),
          ),
      )
    );
  }
}