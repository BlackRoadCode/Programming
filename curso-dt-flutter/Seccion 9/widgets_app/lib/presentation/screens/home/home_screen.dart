import 'package:flutter/material.dart';
import 'package:widgets_app/config/config.dart'; // show MenuItem, appMenuItems
import 'package:widgets_app/presentation/screens/screens.dart' show ButtonsScreen; 

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Widgets en Flutter'),  
      ),
      body:  const _HomeView(),
    );
  }
}

class _HomeView extends StatelessWidget {
  const _HomeView();

  @override
  Widget build(BuildContext context) {

    return ListView.builder(
      itemCount: appMenuItems.length,
      itemBuilder: ( BuildContext context, int index ) {
        final menuItem = appMenuItems[index];
        return _CustomLisTile( menuItem: menuItem );
      },
    );

  }
}

class _CustomLisTile extends StatelessWidget {

  const _CustomLisTile({
    required this.menuItem,
  });

  final MenuItem menuItem;

  @override
  Widget build( BuildContext context ) {

    final colors = Theme.of(context).colorScheme;

    return ListTile(
      leading: Icon(menuItem.icon, color: colors.primary),
      trailing: Icon( Icons.arrow_forward_ios_sharp, color: colors.primary, ),
      title: Text(menuItem.title),
      subtitle: Text(menuItem.subTitle),
      onTap: () { 

        Navigator.pushNamed( context, menuItem.route );

        // Navigator.of(context).push(
        //   MaterialPageRoute(
        //     builder: (context) => const ButtonsScreen(),
        //   )
        // );
      },
    );
  }
}