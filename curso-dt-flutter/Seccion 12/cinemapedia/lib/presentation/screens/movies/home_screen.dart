import 'package:flutter/material.dart';
import 'package:cinemapedia/presentation/widgets/widgets.dart';
import 'package:cinemapedia/presentation/views/views.dart';

class HomeScreen extends StatelessWidget {

  static const name = 'home_screen'; 
<<<<<<< HEAD
  final Widget childView;
   
  const HomeScreen({
      super.key, 
      required this.childView
    });
=======
  final int pageIndex;
   
  const HomeScreen({
    super.key, 
    required this.pageIndex
  });

  final viewRoutes = const <Widget>[
    HomeView(),
    CategoriesView(),
    FavoritesView()
  ];
>>>>>>> definitiveway
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
<<<<<<< HEAD
      body: childView,
      bottomNavigationBar: const CustomBottomNavigation(),
=======
      body: IndexedStack(
        index: pageIndex,
        children: viewRoutes,
      ),
      bottomNavigationBar: CustomBottomNavigation( currentIndex: pageIndex ),
>>>>>>> definitiveway
    );
  }
}
