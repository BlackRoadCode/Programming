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
  }

  @override
  void dispose() {
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {

    final nowPlayingMovies  = ref.watch( nowPlayingMoviesProvider );
    final slideshowMovies  = ref.watch( moviesSlideshowProvider );

    if ( slideshowMovies.isEmpty ) return const CircularProgressIndicator();

    return Column(
      children: [
        const CustomAppbar(),
        MoviesSlideshow( movies: slideshowMovies ),
        const SizedBox( height: 20 ),
        MovieHorizontalListview( 
          movies: nowPlayingMovies ,
          title: 'En Cines',
          subtitle: "2068",
        ),
      ],
    );
  }
}