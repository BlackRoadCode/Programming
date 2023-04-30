import 'package:animate_do/animate_do.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class SlideInfo {

  final String title;
  final String caption;
  final String imageUrl;

  SlideInfo(
    this.title, 
    this.caption, 
    this.imageUrl
  );

}

final slides = <SlideInfo>[
  SlideInfo('Busca la comida', 'Sunt amet quis cupidatat proident duis aliquip culpa quis cupidatat cillum laborum quis ullamco non.', 'assets/img/1.png'),
  SlideInfo('Entrega rápida', 'Elit laboris eu nostrud occaecat officia elit voluptate tempor nostrud irure sunt.', 'assets/img/2.png'),
  SlideInfo('Disfruta la comida', 'Adipisicing sunt sunt esse non ea consequat ullamco esse non sit id.', 'assets/img/3.png')
];

class AppTutorialScreen extends StatefulWidget {

  static const name = 'tutorial_screen';
   
  const AppTutorialScreen({Key? key}) : super(key: key);

  @override
  State<AppTutorialScreen> createState() => _AppTutorialScreenState();
}

class _AppTutorialScreenState extends State<AppTutorialScreen> {

  final PageController pageViewController = PageController();
  bool endReached = false;

  @override
  void initState() {
    super.initState();
    
    pageViewController.addListener((){
      final page = pageViewController.page ?? 0;
      if ( !endReached && page >= slides.length - 1.5 ){
        setState(() {
          endReached = true;
        });
      }
    });
  }

  @override
  void dispose() {
    pageViewController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
       appBar: AppBar(
           title: const Text('AppTutorialTitle'),
       ),
      body: Stack(
        children: [
          PageView(
            controller: pageViewController,
            physics: const BouncingScrollPhysics(),
            children: slides.map( (slideData) => _Slide(
              title: slideData.title, 
              caption: slideData.caption, 
              imageUrl: slideData.imageUrl
            )).toList()
          ),

          Positioned(
            right: 20,
            top: 50,
            child: TextButton(
              onPressed: () => context.pop(),
              child: const Text('Skip >>')
            )
          ),

          endReached ?
          Positioned(
            bottom: 30,
            right: 30,
            child: FadeInRight(
              from: 15,
              delay: const Duration( milliseconds: 800 ),
              child: FilledButton(
                onPressed: () => context.pop(),
                child: const Text('Finalizar Tutorial')
              ),
            )
          ) : const SizedBox()

        ],
      )
    );
  }
}

class _Slide extends StatelessWidget {

  final String title;
  final String caption;
  final String imageUrl;

  const _Slide({
    required this.title, 
    required this.caption, 
    required this.imageUrl
  });

  @override
  Widget build(BuildContext context) {

    final titleStyle = Theme.of(context).textTheme.titleLarge;
    final captionStyle = Theme.of(context).textTheme.bodyLarge;

    return Padding(
      padding: const EdgeInsets.symmetric( horizontal: 30 ),
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Image(image: AssetImage(imageUrl)),
            const SizedBox( height: 20 ),

            Text( title, style: titleStyle, ),
            const SizedBox( height: 10 ),
            
            Text( caption, style: captionStyle, ),
          ],
        ),
      ),
    );
  }
}