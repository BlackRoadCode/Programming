import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'package:cinemapedia/presentation/providers/providers.dart';
import 'package:cinemapedia/presentation/widgets/widgets.dart';

class HomeView extends ConsumerStatefulWidget {
  const HomeView({super.key});

  @override
  HomeViewState createState() => HomeViewState();
}

class HomeViewState extends ConsumerState<HomeView> {

  @override
  void initState() {
    super.initState();
    ref.read( nowPlayingMoviesProvider.notifier ).loadNetxPage();
    ref.read( popularMoviesProvider.notifier ).loadNetxPage();
    ref.read( topRatedMoviesProvider.notifier ).loadNetxPage();
    ref.read( upcomingMoviesProvider.notifier ).loadNetxPage();
  }

  @override
  void dispose() {
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {

    final initialLoading = ref.watch( initialLoadingProvider );

    if ( initialLoading ) return const FullScreenLoader();

    final slideshowMovies  = ref.watch( moviesSlideshowProvider );
    final nowPlayingMovies  = ref.watch( nowPlayingMoviesProvider );
    final popularMovies  = ref.watch( popularMoviesProvider );
    final topRatedMovies  = ref.watch( topRatedMoviesProvider );
    final upcomingMovies  = ref.watch( upcomingMoviesProvider );

    return Visibility(
      visible: !initialLoading,
      child: CustomScrollView(
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
      ),
    );
  }
}