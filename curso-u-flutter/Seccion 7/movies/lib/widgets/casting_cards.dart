import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:movies/providers/movies_provider.dart';
import '../models/models.dart';

class CastingCards extends StatelessWidget {

  final int movieId;

  const CastingCards({
    super.key, 
    required this.movieId
  });

  @override
  Widget build(BuildContext context) {

    final moviesProvider = Provider.of<MoviesProvider>(context, listen: false);

    return FutureBuilder(
      future: moviesProvider.getCastMovie(movieId),
      builder: ( _ , AsyncSnapshot<List<Cast>> snapshot) {

        if ( !snapshot.hasData ) {
          return Container(
            height: 220,
            child: const CupertinoActivityIndicator(radius: 30),
          );
        }

        final List<Cast> cast = snapshot.data!;
        
        return Container(
          width: double.infinity,
          height: 220,
          margin: const EdgeInsets.only( bottom: 30 ),
          child: ListView.builder(
            itemCount: cast.length,
            scrollDirection: Axis.horizontal,
            itemBuilder: (BuildContext context, int index) => _CastCard( actor: cast[index], ),
          ),
        );

      },
    );

  }
}

class _CastCard extends StatelessWidget {

  final Cast actor;

  const _CastCard({
    super.key, 
    required this.actor
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(horizontal: 10),
      width: 110,
      height: 120,
      child: Column(
        children: [
          ClipRRect(
            borderRadius: BorderRadius.circular(20),
            child: FadeInImage(
              placeholder: const AssetImage( 'assets/img/no-image.jpg' ), 
              image: NetworkImage( actor.fullProfilePath ),
              height: 140,
              width: 100,
              fit: BoxFit.cover,
            ),
          ),
          
          const SizedBox(height: 5),
          
          Text(
            actor.name,
            maxLines: 2,
            overflow: TextOverflow.ellipsis,
            textAlign: TextAlign.center,
          ),

          const SizedBox(height: 5),

          Text(
            actor.character ?? '',
            maxLines: 2,
            overflow: TextOverflow.ellipsis,
            textAlign: TextAlign.center,
            style: TextStyle(
              color: Theme.of(context).primaryColor
            ),
          ),
        ],
      ),
    );
  }
}