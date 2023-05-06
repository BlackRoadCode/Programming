import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:cinemapedia/presentation/providers/providers.dart';
import 'package:cinemapedia/presentation/widgets/widgets.dart';

class HomeScreen extends StatelessWidget {

  static const name = 'home_screen'; 
   
  const HomeScreen({Key? key}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: _HomeView(),
      bottomNavigationBar: CustomBottomNavigation(),
    );
  }
}

class _HomeView extends ConsumerStatefulWidget {
  const _HomeView();

  @override
  _HomeViewState createState() => _HomeViewState();
}

class _HomeViewState extends ConsumerState<_HomeView> {

  @override
  void initState() {
    super.initState();
    ref.read( nowPlayingMoviesProvider.notifier ).loadNetxPage();
    ref.read( popularMoviesProvider.notifier ).loadNetxPage();
    ref.read( upcomingMoviesProvider.notifier ).loadNetxPage();
    ref.read( topRatedMoviesProvider.notifier ).loadNetxPage();
  }

  @override
  void dispose() {
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {

    final slideshowMovies  = ref.watch( moviesSlideshowProvider );
    final nowPlayingMovies  = ref.watch( nowPlayingMoviesProvider );
    final popularMovies  = ref.watch( popularMoviesProvider );
    final upcomingMovies  = ref.watch( upcomingMoviesProvider );
    final topRatedMovies  = ref.watch( topRatedMoviesProvider );

    if ( slideshowMovies.isEmpty ) return const CircularProgressIndicator();

    return CustomScrollView(
      slivers: [

        const SliverAppBar(
          floating: true,
          flexibleSpace: FlexibleSpaceBar(
            title: CustomAppbar(),
            centerTitle: true,
          ),
        ),

        SliverList(
          delegate: SliverChildBuilderDelegate(
            (context, index) {
              return Column(
                children: [
                  MoviesSlideshow( movies: slideshowMovies ),
                  
                  const SizedBox( height: 20 ),
                  
                  MovieHorizontalListview(  
                    movies: nowPlayingMovies ,
                    title: 'En Cines',
                    subtitle: "2068",
                    loadNetxPage: () => ref.read( nowPlayingMoviesProvider.notifier ).loadNetxPage(),
                  ),
                  
                  MovieHorizontalListview( 
                    movies: upcomingMovies ,
                    title: 'Próximamente',
                    subtitle: "En este mes",
                    loadNetxPage: () => ref.read( upcomingMoviesProvider.notifier ).loadNetxPage(),
                  ),
                  
                  MovieHorizontalListview( 
                    movies: popularMovies ,
                    title: 'Populares',
                    subtitle: "",
                    loadNetxPage: () => ref.read( popularMoviesProvider.notifier ).loadNetxPage(),
                  ),
                  
                  MovieHorizontalListview( 
                    movies: topRatedMovies ,
                    title: 'Mejor Calificadas',
                    subtitle: "De todos los tiempos",
                    loadNetxPage: () => ref.read( topRatedMoviesProvider.notifier ).loadNetxPage(),
                  ),

                  const SizedBox( height: 20 )
                  
                ],
              );
            },
            childCount: 1
        ))

      ]
    );
  }
}