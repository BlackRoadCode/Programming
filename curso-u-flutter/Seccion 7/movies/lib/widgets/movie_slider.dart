import 'package:flutter/material.dart';

import '../models/models.dart';

class MovieSlider extends StatefulWidget {

  final List<Movie> movies;
  final String? title;

  const MovieSlider({
    super.key, 
    required this.movies, 
    this.title,
  }); 

  @override
  State<MovieSlider> createState() => _MovieSliderState();
}

class _MovieSliderState extends State<MovieSlider> {

  final ScrollController scrollController = ScrollController();

  @override
  void initState() {
    super.initState();

    scrollController.addListener(() {

      if( scrollController.position.pixels >= scrollController.position.maxScrollExtent - 200 ){
        // llamar provider
        print('Obtener siguiente páginas');

      }

      print( scrollController.position.pixels );
      print( scrollController.position.maxScrollExtent );


      
    });

  }

  @override
  void dispose() {
    
    
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      height: 260,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [

          if ( widget.title != null )
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20),
              child: Text(widget.title!, style: const TextStyle( fontSize: 20, fontWeight: FontWeight.bold )),
            ), 

          const SizedBox(height: 5),

          Expanded(
            child: ListView.builder(
              controller: scrollController,
              scrollDirection: Axis.horizontal,
              itemCount: widget.movies.length,
              itemBuilder: ( _ , int index) => _MoviePoster( movie: widget.movies[index] ),
            ),
          ),
        ],
      ),
    );
  }
}

class _MoviePoster extends StatelessWidget {

  final Movie movie;

  const _MoviePoster({
    super.key, 
    required this.movie
  });

  @override
  Widget build(BuildContext context) {
    return Container(
  	  width: 130,
  	  height: 190,
  	  margin: const EdgeInsets.symmetric(horizontal: 10),
      child: Column(
        children: [

          GestureDetector(
            onTap: () => Navigator.pushNamed( context , 'details', arguments: 'movie-instance-slider'),
            child: ClipRRect(
              borderRadius: BorderRadius.circular(20),
                child: FadeInImage(
                  placeholder: const AssetImage( 'assets/img/no-image.jpg' ), 
                  image: NetworkImage(movie.fullPosterImg),
                  width: 130,
                  height: 190,
                  fit: BoxFit.cover,
                ),
            ),
          ),

          const SizedBox( height: 5, ),

          Text(
            movie.title,
            maxLines: 2,
            textAlign: TextAlign.center,
            overflow: TextOverflow.ellipsis,
          )
        ],
      ),
    );
  }
}