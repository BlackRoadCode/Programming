import 'package:flutter/material.dart';

class SliderScreen extends StatefulWidget {
   
  const SliderScreen({Key? key}) : super(key: key);

  @override
  State<SliderScreen> createState() => _SliderScreenState();
}

class _SliderScreenState extends State<SliderScreen> {

  double _sliderValue = 100;
  String imageUrl = 'https://i.pinimg.com/originals/9c/30/84/9c3084c759600e775dd1f53b01c6cf53.jpg';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Center(
          child: Text('Slider Screen'),
        ),
      ),
      body: Column(
        children: [
          Slider.adaptive(
            min: 50,
            max: 500,
            activeColor: Theme.of(context).primaryColor,
            value: _sliderValue, 
            onChanged: (value) {
              print(value);
              _sliderValue = value;
              setState(() {});
            },
          ),

          Image(
            image: NetworkImage(imageUrl),
            fit: BoxFit.contain,
            width: _sliderValue,
          )
        ],
      )
    );
  }
}