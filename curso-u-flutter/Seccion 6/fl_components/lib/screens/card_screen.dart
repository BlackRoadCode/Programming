import 'package:flutter/material.dart';

import '../widgets/widgets.dart';

class CardScreen extends StatelessWidget {
  const CardScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Center(child: Text('Card screen')),
        ),
        body: ListView(
          padding: const EdgeInsets.symmetric(horizontal: 50, vertical: 25),
          children: const [
            CustomCardType1(),
            SizedBox( height: 20, ),
            CustomCardType2( imageUrl:'https://www.titanio.com.mx/wp-content/uploads/2022/09/VSAACI4RU5CEXICMPKYKS2KM4Y.jpg', imageText: 'El Cantante de los Cantantes', ),
            SizedBox( height: 20, ),
            CustomCardType1(),
            SizedBox( height: 20, ),
            CustomCardType2( imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF4WCdBUsiGLWoAvWSmiGgFJ6RGP8VVtsT1KQxl8SosSXGNIL4fC-VviyLegEVFuapZUc&usqp=CAU', imageText: 'El Ídolo', ),
            SizedBox( height: 20, ),
            CustomCardType2( imageUrl:'https://i.ytimg.com/vi/BNo0vkEYWRc/maxresdefault.jpg' ),
            SizedBox( height: 100, ),
          ],
        ));
  }
}
