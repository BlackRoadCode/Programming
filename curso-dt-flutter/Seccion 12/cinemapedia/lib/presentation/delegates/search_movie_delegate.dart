import 'package:flutter/material.dart';
import 'dart:async';
import 'package:animate_do/animate_do.dart';
import 'package:cinemapedia/domain/entities/movie.dart';
import 'package:cinemapedia/config/helpers/human_format.dart';

typedef SearchMoviesCallback = Future<List<Movie>> Function( String query );

class SearchMovieDelegate extends SearchDelegate<Movie?>{

  final SearchMoviesCallback searchMovies;
  StreamController<List<Movie>> debouncedMovies = StreamController.broadcast();
  Timer? _debounceTimer;

  SearchMovieDelegate({
    required this.searchMovies
  });

  void clearStreams(){
    debouncedMovies.close();
  }

  void _onQueryChanged( String query ) {

    if ( _debounceTimer?.isActive ?? false ) _debounceTimer!.cancel();

    _debounceTimer = Timer( const Duration( milliseconds: 500 ), () async {
      
      if( query.isEmpty ){
        debouncedMovies.add([]);
        return;
      }

      final movies = await searchMovies( query );

      debouncedMovies.add(movies);

    });

  }

  @override
  String get searchFieldLabel => 'Buscar película';

  @override
  List<Widget>? buildActions(BuildContext context) {
    return [
      
          FadeIn(
            animate: query.isNotEmpty,
            duration: const Duration( milliseconds: 150 ),
            child: IconButton(
              onPressed: () => query = '', 
              icon: const Icon( Icons.clear )
            ),
          ),
      
    ];
  }

  @override
  Widget? buildLeading(BuildContext context) {
    return IconButton(
      onPressed: (){
        clearStreams();
        close(context, null);
      }, 
      icon: const Icon( Icons.navigate_before )
    );
  }

  @override
  Widget buildResults(BuildContext context) {
    return const Text('Build Results');
  }

  @override
  Widget buildSuggestions(BuildContext context) {

    _onQueryChanged(query);
    
    return StreamBuilder(
      // future: searchMovies(query),
      stream: debouncedMovies.stream,
      builder: (context, snapshot) {

        final movies = snapshot.data ?? [];
        
        return ListView.builder(
          itemCount: movies.length,
          itemBuilder: (context, index) => _MovieSearchItem(
            movie: movies[index], 
            onMovieSelected: ( context, movie ){
              clearStreams();
              close( context, movie );
            },
          ),
        );
      },
    );
  }

}

class _MovieSearchItem extends StatelessWidget {

  final Movie movie;
  final Function onMovieSelected;

  const _MovieSearchItem({
    required this.movie, 
    required this.onMovieSelected
  });

  @override
  Widget build(BuildContext context) { 

    final textStyles = Theme.of(context).textTheme;
    final size = MediaQuery.of(context).size;

    return GestureDetector(
      onTap: () {
        onMovieSelected(context, movie);
      },
      child: Padding(
        padding: const EdgeInsets.symmetric( horizontal: 10, vertical: 5 ),
        child: Row(
          children: [
    
            // Image
            SizedBox(
              width: size.width * 0.2,
              child: ClipRRect(
                borderRadius: BorderRadius.circular(10),
                child: Image.network(
                  movie.posterPath,
                  loadingBuilder: (context, child, loadingProgress) => FadeIn(child: child),
                ),
              ),
            ),
    
            const SizedBox( width: 10 ),
            
            // Description
            SizedBox(
              width: size.width * 0.7,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text( movie.title, style: textStyles.titleMedium ),
    
                  ( movie.overview.length > 100 )
                    ? Text( '${movie.overview.substring(0, 100)}...' )
                    : Text( movie.overview ),
    
                  Row(
                    children: [
                      ( movie.voteAverage < 9.0 )
                      ? Icon( Icons.star_half, color: Colors.yellow.shade800, )
                      : Icon( Icons.star, color: Colors.yellow.shade800, ),
                      const SizedBox( width: 5 ),
                      Text( HumanFormats.number( movie.voteAverage, 1 ), style: textStyles.bodyMedium!.copyWith( color: Colors.yellow.shade900 ), )
                    ]
                  )
                ],
    
                
              ),
            ),
    
            
          ],
        ),
      ),
    );
  }
}