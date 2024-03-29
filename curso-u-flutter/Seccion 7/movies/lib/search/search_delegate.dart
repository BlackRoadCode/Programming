
import 'package:flutter/material.dart';
import 'package:movies/providers/movies_provider.dart';
import 'package:provider/provider.dart';

import '../models/models.dart';

class MovieSearchDelegate extends SearchDelegate{

  @override
  String? get searchFieldLabel => 'Buscar Película';

  @override
  List<Widget>? buildActions(BuildContext context) {
    return [
      IconButton(
        onPressed: () => query = '', 
        icon: const Icon( Icons.clear_outlined )
      )
    ];
  }

  @override
  Widget? buildLeading(BuildContext context) {
    return IconButton(
        onPressed: () {
          close(context, null);
        }, 
        icon: const Icon( Icons.arrow_back )
      );
  }

  @override
  Widget buildResults(BuildContext context) {
    return const Text('buildResults');
  }

  Widget _emptyContainer( BuildContext context ){
    return Container(
            child: Center(
              child: Icon( Icons.movie_creation_outlined, color: Theme.of(context).primaryColor, size: 100, ),
            ),
          );
  }

  @override
  Widget buildSuggestions(BuildContext context) {

    if( query.isEmpty ){
      return _emptyContainer(context);
    } 

    final moviesProvider = Provider.of<MoviesProvider>(context, listen: false);
    moviesProvider.getSuggestionsByQuery( query );

    return StreamBuilder(
      stream: moviesProvider.suggestionsStream,
      builder: ( _ , AsyncSnapshot<List<Movie>> snapshot) {
        
        if ( !snapshot.hasData ) return _emptyContainer( context );

        final searchResultsMovies = snapshot.data!;

        return ListView.builder(
          itemCount: searchResultsMovies.length,
          itemBuilder: ( _ , int index) => _MovieItem(movie: searchResultsMovies[index]),
        );
      },
    );
  }

} 

class _MovieItem extends StatelessWidget {

  final Movie movie;

  const _MovieItem({
    super.key, 
    required this.movie
  });

  @override
  Widget build(BuildContext context) {

    movie.heroId = 'search-${ movie.id }';

    return ListTile(
      leading: Hero(
        tag: movie.heroId!,
        child: FadeInImage(
          placeholder: const AssetImage('assets/img/no-image.jpg'), 
          image: NetworkImage(movie.fullPosterImg),
          width: 50,
          fit: BoxFit.contain,
        ),
      ),
      title: Text( movie.title ),
      subtitle: Text( movie.originalTitle ),
      onTap: () {
        Navigator.pushNamed(context, 'details', arguments: movie );
      },
    );
  }
}