import 'package:flutter/material.dart';

class DetailsScreen extends StatelessWidget {
   
  const DetailsScreen({Key? key}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {

    final String movie = ModalRoute.of(context)?.settings.arguments.toString() ?? 'no-movie';

    return Scaffold(
      body: CustomScrollView(
        physics: const BouncingScrollPhysics(),
        slivers: [
           const _CustomAppbar(),
          SliverList(
            delegate: SliverChildListDelegate([
                const _PosterAndTitle()
            ])
          ),
        ],
      )
    );
  }
}

class _CustomAppbar extends StatelessWidget {
  const _CustomAppbar({super.key});

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
          child: const Text(
            'movie.title',
            style: TextStyle(
              fontSize: 16
            ),
          ),
        ),
        background: const FadeInImage(
          placeholder: AssetImage( 'assets/img/loading.gif' ), 
          image: NetworkImage('https://via.placeholder.com/300x400'),
          fit: BoxFit.cover,
        ),
      ),
    );
  }
}

class _PosterAndTitle extends StatelessWidget {
  const _PosterAndTitle({super.key});

  @override
  Widget build(BuildContext context) {

    final TextTheme textTheme = Theme.of(context).textTheme;

    return Container(
      margin: const EdgeInsets.only( top: 20 ),
      padding: const EdgeInsets.symmetric( horizontal: 20 ),
      child: Row(
        children: [
          ClipRRect(
            borderRadius: BorderRadius.circular(20),
            child: const FadeInImage(
              placeholder: AssetImage( 'assets/img/no-image.jpg' ), 
              image: NetworkImage('https://via.placeholder.com/200x300'),
              height: 150,
            ),
          ),

          const SizedBox(width: 20), 

          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'movie.title',
                overflow: TextOverflow.ellipsis, 
                maxLines: 2,
                style: TextStyle(
                  color: Theme.of(context).primaryColor,
                  fontSize: textTheme.headlineSmall?.fontSize
                ),
              ),
              Text(
                'movie.originalTitle',
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
                  Text('movie.voteAverage', style: TextStyle( fontSize: textTheme.bodySmall?.fontSize ),)
                ],
              )
            ],
          )
        ],
      ),
    );
  }
}