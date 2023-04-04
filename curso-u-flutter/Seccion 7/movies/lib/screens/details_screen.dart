import 'package:flutter/material.dart';
import 'package:movies/models/models.dart';
import 'package:movies/widgets/widgets.dart';

class DetailsScreen extends StatelessWidget {
   
  const DetailsScreen({Key? key}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {

    final Movie movie = ModalRoute.of(context)!.settings.arguments as Movie;

    return Scaffold(
      body: CustomScrollView(
        physics: const BouncingScrollPhysics(),
        slivers: [
          _CustomAppbar(
            appBarBackdropPath: movie.fullBackdropPath,
            appBarTitle: movie.title,
          ),
          SliverList(
            delegate: SliverChildListDelegate([
                _PosterAndTitle(
                  moviePoster: movie.fullPosterImg, 
                  movieTitle: movie.title, 
                  movieOriginalTitle: movie.originalTitle, 
                  movieVoteAverage: movie.voteAverage.toString(),
                ),

                _Overview(
                  movieOverview: movie.overview,
                ),

                const CastingCards(),
            ])
          ),
        ],
      )
    );
  }
}

class _CustomAppbar extends StatelessWidget {

  final String appBarTitle;
  final String appBarBackdropPath;

  const _CustomAppbar({
    super.key, 
    required this.appBarTitle, 
    required this.appBarBackdropPath
  });

  @override
  Widget build(BuildContext context) {
    return SliverAppBar(
      backgroundColor: Colors.red,
      expandedHeight: 200,
      floating: false,
      pinned: true,
      flexibleSpace: FlexibleSpaceBar(
        titlePadding: const EdgeInsets.all(0),
        centerTitle: true,
        title: Container(
          color: Colors.black26,
          width: double.infinity,
          alignment: Alignment.bottomCenter,
          padding: const EdgeInsets.only(bottom: 10),
          child: Text(
            appBarTitle,
            style: const TextStyle(
              fontSize: 16
            ),
          ),
        ),
        background: FadeInImage(
          placeholder: const AssetImage( 'assets/img/loading.gif' ), 
          image: NetworkImage( appBarBackdropPath ),
          fit: BoxFit.cover,
        ),
      ),
    );
  }
}

class _PosterAndTitle extends StatelessWidget {

  final String moviePoster;
  final String movieTitle;
  final String movieOriginalTitle;
  final String movieVoteAverage;

  const _PosterAndTitle({
    super.key, 
    required this.moviePoster, 
    required this.movieTitle, 
    required this.movieOriginalTitle, 
    required this.movieVoteAverage
  });

  @override
  Widget build(BuildContext context) {

    final TextTheme textTheme = Theme.of(context).textTheme;
    final size = MediaQuery.of(context).size;

    return Container(
      margin: const EdgeInsets.only( top: 20 ),
      padding: const EdgeInsets.symmetric( horizontal: 20 ),
      child: Row(
        children: [
          ClipRRect(
            borderRadius: BorderRadius.circular(20),
            child: FadeInImage(
              placeholder: const AssetImage( 'assets/img/no-image.jpg' ), 
              image: NetworkImage( moviePoster ),
              height: 150,
            ),
          ),

          const SizedBox(width: 20), 

          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              ConstrainedBox(
                constraints: BoxConstraints( maxWidth: size.width - 160 ),
                child: Text(
                  movieTitle,
                  overflow: TextOverflow.ellipsis, 
                  maxLines: 2,
                  style: TextStyle(
                    color: Theme.of(context).primaryColor,
                    fontSize: textTheme.headlineSmall?.fontSize
                  ),
                ),
              ),
              Text(
                movieOriginalTitle,
                overflow: TextOverflow.ellipsis, 
                style: TextStyle(
                  color: Theme.of(context).primaryColor,
                  fontSize: textTheme.titleMedium?.fontSize
                ),
              ),
              Row(
                children: [
                  const Icon(Icons.star_outline, size: 15, color: Colors.grey,),
                  const SizedBox( width: 5, ),
                  Text(movieVoteAverage, style: TextStyle( fontSize: textTheme.bodySmall?.fontSize ),)
                ],
              )
            ],
          )
        ],
      ),
    );
  }
}

class _Overview extends StatelessWidget {

  final String movieOverview;

  const _Overview({
    super.key, 
    required this.movieOverview
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric( horizontal: 20, vertical: 10 ),
      child: Text(
        movieOverview,
        textAlign: TextAlign.justify,
        style: Theme.of(context).textTheme.titleMedium
      ),
    );
  }
}