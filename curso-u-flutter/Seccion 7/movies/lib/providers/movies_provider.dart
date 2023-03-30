
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class MoviesProvider extends ChangeNotifier{

  MoviesProvider(){
    print('movies provider inicializado');

    getOnDisplayMovies();
  }

  getOnDisplayMovies() async {
    var url = Uri.https('api.themoviedb.org', '/3/movie/now_playing', { 'api_key': 'f3d2f08df9ec3917075a079ab6b6b2d3', 'language':'es-ES', 'page':'1' });
    var response = await http.get(url);

    print('$response.body');
  }

}