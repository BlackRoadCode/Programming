import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:cinemapedia/presentation/providers/movies/movies_providers.dart';
import 'package:cinemapedia/presentation/widgets/widgets.dart';

class HomeScreen extends StatelessWidget {

  static const name = 'home_screen'; 
   
  const HomeScreen({Key? key}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
       appBar: AppBar(
           title: const Text('HomeTitle'),
       ),
      body: const _HomeView(),
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
  Widget build(BuildContext context) {

    final nowPlayingMovies  = ref.watch( nowPlayingMoviesProvider );

    if ( nowPlayingMovies.isEmpty ) return const CircularProgressIndicator();

    return Column(
      children: [

        const CustomAppbar(), 

        MoviesSlideshow(movies: nowPlayingMovies)
        
      ],
    );
  }
}