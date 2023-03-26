import 'package:flutter/material.dart';

class CustomTextField extends StatelessWidget {
  
  final String? hintText;
  final String? labelText;
  final String? helperText;
  final IconData? icon;
  final IconData? suffixIcon;

  const CustomTextField({
    super.key, 
    this.hintText, 
    this.labelText, 
    this.helperText, 
    this.icon, 
    this.suffixIcon,
  });

  @override
  Widget build(BuildContext context) {
    return TextFormField(
      decoration: InputDecoration(
        icon: icon == null ? null : Icon( icon ),
        suffixIcon: suffixIcon == null ? null : Icon( suffixIcon ),
        hintText: hintText,
        labelText: labelText,
        helperText: helperText,
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
    );
  }
}