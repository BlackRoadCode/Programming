import 'package:flutter/material.dart';
import 'package:fl_components/router/app_routes.dart';

void main() => runApp( const MyApp() );

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build( BuildContext context ) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Material App',
      initialRoute: AppRoutes.initialRoute,
      routes: AppRoutes.getAppRoutes(),
      onGenerateRoute: (settings) => AppRoutes.onGenerateRoute(settings),
      theme: ThemeData.light().copyWith(
        primaryColor: Colors.orange,
        appBarTheme: const AppBarTheme( 
          color: Colors.orange,
          elevation: 2,
        )
      ),
    );
  }
}
