
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:movies/models/models.dart';

class MoviesProvider extends ChangeNotifier{

  final String _apiKey = 'f3d2f08df9ec3917075a079ab6b6b2d3';
  final String _baseUrl = 'api.themoviedb.org';
  final String _language = 'es-ES';

  List<Movie> onDisplayMovies = [];
  List<Movie> popularMovies = [];
  
  Map<int, List<Cast>> movieCast = {};
  
  int _popularPage = 0;

  MoviesProvider(){
    getOnDisplayMovies();
    getPopularMovies();
  }

  Future<String> _getJsonData( String endpoint, [int page = 1] ) async {
      var url = Uri.https( _baseUrl, endpoint, { 
      'api_key': _apiKey, 
      'language': _language, 
      'page':'$page' 
    });
    
    final response = await http.get(url);
    return response.body;
  }

  getOnDisplayMovies() async {
    final jsonData = await _getJsonData('3/movie/now_playing');
    final nowPlayingResponse = NowPlayingResponse.fromJson( jsonData );
    onDisplayMovies = nowPlayingResponse.results;
    notifyListeners();
  }
  
  getPopularMovies() async {
    _popularPage++;
    final jsonData = await _getJsonData('3/movie/popular', _popularPage);
    final popularResponse = PopularResponse.fromJson( jsonData );
    popularMovies = [ ...popularMovies, ...popularResponse.results];
    notifyListeners();
  }

  Future<List<Cast>> getCastMovie( int movieId ) async {
    final jsonData = await _getJsonData('3/movie/$movieId/credits');
    final creditsResponse = CreditsResponse.fromJson( jsonData );
    movieCast[movieId] = creditsResponse.cast;
    return creditsResponse.cast;
  }

}