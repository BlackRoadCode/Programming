import 'package:flutter/material.dart';
import 'package:movies/widgets/widgets.dart';

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
                const _PosterAndTitle(),
                const _Overview(),
                const _Overview(),
                const _Overview(),
                const _Overview(),
                const CastingCards(),
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
          padding: const EdgeInsets.only(bottom: 10),
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

class _Overview extends StatelessWidget {
  const _Overview({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric( horizontal: 20, vertical: 10 ),
      child: Text(
        'Deserunt reprehenderit nulla ex laborum eiusmod est. Dolor irure magna nisi amet ullamco exercitation irure sit fugiat mollit ea sint excepteur fugiat. Tempor eu sunt enim irure sint nisi sint exercitation occaecat. Sit sunt nisi deserunt esse duis nostrud ut cillum fugiat esse. Quis dolore culpa ullamco non est enim nisi laborum culpa magna exercitation commodo sint. Ea non incididunt eu tempor nostrud in et voluptate ullamco ipsum consequat dolor.',
        textAlign: TextAlign.justify,
        style: Theme.of(context).textTheme.titleMedium
      ),
    );
  }
}