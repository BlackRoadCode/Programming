import 'package:flutter/material.dart';

import '../widgets/widgets.dart';

class InputsScreen extends StatelessWidget {
   
  const InputsScreen({Key? key}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {

    final GlobalKey<FormState> myFormKey = GlobalKey<FormState>();

    final Map<String, String> formValues = {
      'first_name' : '',
      'email'      : '',
      'password'   : '',
      'role'       : 'admin'
    };

    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: const Text('Inputs Screen'),
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.symmetric( horizontal: 20, vertical: 10 ),
          child: Form(
            key: myFormKey,
            child: Column(
              children: [
                const SizedBox( height: 30, ),

                CustomTextField( 
                  labelText: 'Nombre', 
                  helperText: 'Mínimo 3 caracteres', 
                  hintText: 'Ingresa tu nombre', 
                  icon: Icons.person, 
                  suffixIcon: Icons.person_add_alt_1, 
                  formProperty: 'first_name', 
                  formValues: formValues,),
                const SizedBox( height: 30, ),

                CustomTextField( labelText: 'Email', helperText: 'Ingresa un email válido', hintText: 'Correo', icon: Icons.email, textInputType: TextInputType.emailAddress,  formProperty: 'email', formValues: formValues,),
                const SizedBox( height: 30, ),
                
                CustomTextField( labelText: 'Password', helperText: 'Mínimo 3 caracteres 2 mayusculas un número', hintText: 'Password', icon: Icons.password_sharp, obscureText: true, obscuringCharacter: '*',  formProperty: 'password', formValues: formValues, ),
                const SizedBox( height: 30 ),
                
                DropdownButtonFormField(
                  items: const [ 
                    DropdownMenuItem( value: 'Admin',     child: Text('Admin') ),
                    DropdownMenuItem( value: 'SuperUser', child: Text('SuperUser') ),
                    DropdownMenuItem( value: 'Developer', child: Text('Developer') ),
                    DropdownMenuItem( value: 'User',      child: Text('User') ),
                  ], 
                  onChanged: (value){
                    // formValues['role'] = value!; // también funciona
                    formValues['role'] = value  ?? 'Admin';
                  },
                ),

                const SizedBox( height: 30 ),
                ElevatedButton(
                  onPressed: () {
                    // FocusScope.of(context).requestFocus( FocusNode() );
                    FocusManager.instance.primaryFocus?.unfocus();

                    if ( !myFormKey.currentState!.validate() ) {
                      print('Formulario no válido');
                      return;
                    }

                    print(formValues);
                  }, 
                  child: const Center( child: Text('Manda formulario') )
                )
              ],
            ),
          ),
        ),
      )
    );
  }
}
