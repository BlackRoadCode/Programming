import 'package:flutter/material.dart';

class CustomTextField extends StatelessWidget {
  
  final bool obscureText;
  final IconData? icon;
  final IconData? suffixIcon;
  final String obscuringCharacter;
  final String? helperText;
  final String? hintText;
  final String? labelText;
  final TextInputType? textInputType;

  final String formProperty;
  final Map<String, String> formValues;

  const CustomTextField({
    super.key, 
    this.helperText, 
    this.hintText, 
    this.icon, 
    this.labelText, 
    this.obscureText = false, 
    this.obscuringCharacter = '•',
    this.suffixIcon, 
    this.textInputType, 
    required this.formProperty, 
    required this.formValues, 
  });

  @override
  Widget build(BuildContext context) {
    return TextFormField(
      autofocus: false,
      keyboardType: textInputType,
      obscureText: obscureText,
      obscuringCharacter: obscuringCharacter,
      initialValue: '',
      textCapitalization: TextCapitalization.words,
      onChanged: (value) => formValues[formProperty] = value,
      autovalidateMode: AutovalidateMode.onUserInteraction,
      validator: (value) {
        if( value == null ) return 'Este campo es requerido';
        return value.length < 3 ? 'Mínimo 3 caracteres' : null;
      },
      decoration: InputDecoration(
        icon: icon == null ? null : Icon( icon ),
        suffixIcon: suffixIcon == null ? null : Icon( suffixIcon ),
        hintText: hintText,
        labelText: labelText,
        helperText: helperText,
      ),
    );
  }
}