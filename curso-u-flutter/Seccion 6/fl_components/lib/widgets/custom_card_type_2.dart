import 'package:flutter/material.dart';

class CustomCardType2 extends StatelessWidget {

  const CustomCardType2({ 
    super.key, 
    required this.imageUrl, 
    this.imageText 
  });

  final String imageUrl;
  final String? imageText;

  @override
  Widget build(BuildContext context) {
    return Card(
      clipBehavior: Clip.antiAlias,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(15)
      ),
      elevation: 10,
      shadowColor: Theme.of(context).primaryColor,
      child: Column(
        children: [
         FadeInImage(
            image: NetworkImage( imageUrl ),
            placeholder: const AssetImage('assets/img/jar-loading.gif'),
            width: double.infinity,
            height: 240,
            fit: BoxFit.cover,
            fadeInDuration: const Duration(milliseconds: 500),
          ),

          if( imageText != null )
            Container(
              alignment: AlignmentDirectional.centerEnd,
              padding: const EdgeInsets.only( right: 10, top: 10, bottom: 10 ),
              child: Text( imageText! )
            )
        ],
      ),
    );
  }
}