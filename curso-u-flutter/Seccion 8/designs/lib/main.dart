import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:designs/screens/screens.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {

    SystemChrome.setSystemUIOverlayStyle( SystemUiOverlayStyle.light );

    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Material App',
      initialRoute: 'basic_design', 
      routes: {
        'basic_design'  : ( _ ) => const BasicDesignScreen(),
        'home_design'   : ( _ ) => const HomeScreen(),
        'scroll_design' : ( _ ) => const ScrollDesignScreen(),
      }
    );
  }
}
