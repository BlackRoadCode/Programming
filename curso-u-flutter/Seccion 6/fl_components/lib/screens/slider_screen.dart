import 'package:flutter/material.dart';

class SliderScreen extends StatefulWidget {
   
  const SliderScreen({Key? key}) : super(key: key);

  @override
  State<SliderScreen> createState() => _SliderScreenState();
}

class _SliderScreenState extends State<SliderScreen> {

  double _sliderValue = 200;
  bool _sliderEnabled = true;
  // String imageUrl = 'https://i.pinimg.com/originals/9c/30/84/9c3084c759600e775dd1f53b01c6cf53.jpg';
  String imageUrl = 'https://cdn.shoplightspeed.com/shops/632400/files/16488266/king-king-3bpl-tenor-trombone.jpg';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Slider Screen'),
        centerTitle: true,
      ),
      body: Column(
        children: [
          Slider.adaptive(
            min: 150,
            max: 600,
            activeColor: Theme.of(context).primaryColor,
            value: _sliderValue, 
            onChanged: _sliderEnabled 
            ? (value) {
                print(value);
                _sliderValue = value;
                setState(() {});
              }
            : null
          ),

          // Checkbox(
          //   value: _sliderEnabled, 
          //   onChanged: (value) {
          //     _sliderEnabled = value ?? true;
          //     setState(() {});
          //   },
          // ),

          // CheckboxListTile(
          //   activeColor: Theme.of(context).primaryColor,
          //   title: const Text('Habilitar Slider'),
          //   value: _sliderEnabled, 
          //   onChanged: (value) => setState(() { _sliderEnabled = value ?? true; }),
          // ),

          // Switch(
          //   activeColor: Theme.of(context).primaryColor,
          //   value: _sliderEnabled, 
          //   onChanged: (value) => setState(() { _sliderEnabled = value; }),
          // ),

          SwitchListTile(
            activeColor: Theme.of(context).primaryColor,
            title: const Text('Habilitar Slider'),
            value: _sliderEnabled, 
            onChanged: (value) => setState(() { _sliderEnabled = value; }),
          ),

          Expanded(
            child: SingleChildScrollView(
              child: Image(
                image: NetworkImage(imageUrl),
                fit: BoxFit.contain,
                width: _sliderValue,
              ),
            ),
          ),

          const AboutListTile()

        ],
      )
    );
  }
}