import 'package:flutter/material.dart';

class BasicDesignScreen extends StatelessWidget {
   
  const BasicDesignScreen({Key? key}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          const Image( image: AssetImage('assets/img/landscape.jpg') ),

          const Title(),

          const ButtonsBar(),

          Container(
            margin: const EdgeInsets.symmetric( vertical: 15, horizontal: 25 ),
            child: const Text( 'loremAliquip ipsum excepteur voluptate culpa nulla mollit voluptate eiusmod est nisi laboris do. Lorem Lorem magna tempor quis enim enim. Lorem in aliqua dolore et exercitation in deserunt consectetur tempor ad reprehenderit. Ea nostrud tempor proident ea do sint quis amet aliquip ut aliquip. Dolore sint labore fugiat ipsum amet ullamco cillum ea ex. Velit commodo do elit in fugiat aliquip fugiat excepteur irure tempor ipsum.' ))
        ],
      ),
    );
  }
}

class Title extends StatelessWidget {

  const Title({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric( horizontal: 40, vertical: 20 ),
      child: Row(
        
        children: [
          
          Column( 
            crossAxisAlignment: CrossAxisAlignment.start,
            children: const [
              Text('Nombre del lago en la ciudad', style: TextStyle( fontSize: 17, fontWeight: FontWeight.bold ),),
              Text('Nombre del lago', style: TextStyle( fontSize: 17, color: Colors.black45 ),),
            ]
          ),

          Expanded(child: Container()),
          
          const Icon(Icons.star, color: Colors.red,),
    
          const Text('41', style: TextStyle( fontSize: 17 ))
        ],
      ),
    );
  }
}

class ButtonsBar extends StatelessWidget {
  const ButtonsBar({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric( vertical: 25 ),
      child: Row( 
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: const [
          _CustomButton( icon: Icons.phone, text: 'HOME', route: 'home_design' ),
          _CustomButton( icon: Icons.near_me, text: 'SCROLL', route: 'scroll_design', ),
          _CustomButton( icon: Icons.share, text: 'BASIC', route: 'basic_design' ),
        ]
      ),
    );
  }
}

class _CustomButton extends StatelessWidget {
  
  final IconData icon;
  final String text;
  final String route;

  const _CustomButton({
    super.key, 
    required this.icon, 
    required this.text, 
    required this.route,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        GestureDetector(
          child: Icon( icon, color:Colors.lightBlue, size: 26),
          onTap: () => Navigator.pushNamed( context , route),
        ),
        
        Text( text, style: const TextStyle( color:Colors.lightBlue, fontSize: 16 ),)
      ]
    );
  }
}