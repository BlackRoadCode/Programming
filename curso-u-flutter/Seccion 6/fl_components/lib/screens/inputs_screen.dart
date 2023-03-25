import 'package:flutter/material.dart';

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
            children: [
              TextFormField(
                decoration: const InputDecoration(
                  icon: Icon(Icons.person),
                  iconColor: Colors.amber,
                  // prefixIcon: Icon( Icons.ac_unit_outlined ),
                  // prefixIconColor: Colors.blueGrey,
                  suffixIcon: Icon( Icons.account_tree_rounded ),
                  suffixIconColor: Colors.red,
                  hintText: 'Nombre del usuario',
                  labelText: 'Nombre *',
                  helperText: 'Solo letras',
                  focusedBorder: OutlineInputBorder(
                    borderSide: BorderSide(
                      color: Colors.amber
                    ), borderRadius: BorderRadius.only(
                      bottomLeft: Radius.circular(20), 
                      topRight: Radius.circular(20)
                    ),
                  ),
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.only(
                      bottomLeft: Radius.circular(20), 
                      topRight: Radius.circular(20)
                    ),
                  )
                ),
                autofocus: false,
                initialValue: '',
                textCapitalization: TextCapitalization.words,
                onChanged: (value) {
                  print('value: $value');
                },
                validator: (value) {
                  if( value == null ) return 'Este campo es requerido';
                  return value.length < 3 ? 'Mínimo 3 caracteres' : null;
                },
                autovalidateMode: AutovalidateMode.onUserInteraction,
              )
            ],
          ),
          ),
      )
    );
  }
}