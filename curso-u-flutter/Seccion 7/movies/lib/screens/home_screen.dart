import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:movies/providers/movies_provider.dart';
import 'package:movies/widgets/widgets.dart';

class HomeScreen extends StatelessWidget {
   
  const HomeScreen({Key? key}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {

    final moviesProvider = Provider.of<MoviesProvider>(context);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Películas en Cines'),        
        centerTitle: true,
        actions: [
          IconButton(
            onPressed: () {}, 
            icon: const Icon(Icons.search)
          )          
        ],
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            CardSwiper( movies: moviesProvider.onDisplayMovies ),
            const MovieSlider(),
          ],
        ),
      )
    );
  }
}