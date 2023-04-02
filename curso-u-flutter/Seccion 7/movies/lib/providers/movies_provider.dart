
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http
;
import 'package:movies/models/models.dart';

class MoviesProvider extends ChangeNotifier{

  final String _apiKey = 'f3d2f08df9ec3917075a079ab6b6b2d3';
  final String _baseUrl = 'api.themoviedb.org';
  final String _language = 'es-ES';

  List<Movie> onDisplayMovies = [];

  MoviesProvider(){
    print('movies provider inicializado');

    getOnDisplayMovies();
  }

  getOnDisplayMovies() async {
    var url = Uri.https( _baseUrl, '3/movie/now_playing', { 
      'api_key': _apiKey, 
      'language': _language, 
      'page':'1' 
    });
    
    final response = await http.get(url);
    final nowPlayingResponse = NowPlayingResponse.fromJson(response.body);
    onDisplayMovies = nowPlayingResponse.results;
    notifyListeners();
  }

}