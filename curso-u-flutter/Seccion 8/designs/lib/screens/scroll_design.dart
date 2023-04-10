import 'package:flutter/material.dart';

class ScrollDesignScreen extends StatelessWidget {
   
  const ScrollDesignScreen({Key? key}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: PageView(
        scrollDirection: Axis.vertical,
        children: const [
          StepOne(),
          StepTwo()
        ],
      )
    );
  }
}

class StepOne extends StatelessWidget {
  const StepOne({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        Background(),
        
        MainContent()
      ],
    );
  }
}

class MainContent extends StatelessWidget {
  const MainContent({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    
    const textStyle = TextStyle( color: Colors.white, fontSize: 55, fontWeight: FontWeight.bold );

    return SafeArea(
      bottom: false,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          const SizedBox( height: 25 ),
          const Text('11°', style: textStyle ),
          const Text('Miércoles', style: textStyle ),
          Expanded(child: Container()),
          const Icon( Icons.keyboard_arrow_down_outlined, size: 100, color: Colors.white, )
        ],
      ),
    );
  }
}

class Background extends StatelessWidget {
  const Background({
    super.key
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      color: const Color(0xff30BAD6),
      height: double.infinity,
      alignment: Alignment.topCenter,
      child: const Image( image: AssetImage('assets/img/scroll.png') )
    );
  }
}

class StepTwo extends StatelessWidget {
  const StepTwo({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: const Color(0xff30BAD6),
      child: Center(
        child: TextButton(
          
          onPressed: () => Navigator.pushNamed(context, 'basic_design'), 
          style: TextButton.styleFrom(
            backgroundColor: Colors.blueAccent,
            shape: const StadiumBorder(),
          ),
          child: const Padding(
            padding: EdgeInsets.symmetric(horizontal: 40, vertical: 15),
            child: Text('Regresar al HOME', style: TextStyle(color: Colors.white, fontSize: 30),),
          )
        )
      ),
    );
  }
}