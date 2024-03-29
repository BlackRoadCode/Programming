import 'package:dio/dio.dart';
import 'package:cinemapedia/infrastructure/mappers/actor_mapper.dart';
import 'package:cinemapedia/infrastructure/models/moviedb/credits_response.dart';
import 'package:cinemapedia/domain/entities/actor.dart';
import 'package:cinemapedia/domain/datasources/actors_datasource.dart';
import 'package:cinemapedia/config/constants/environment.dart';

class ActorsMovieDbDatasource extends ActorsDatasource{

  final dio = Dio( BaseOptions(
    baseUrl: 'https://api.themoviedb.org/3',
    queryParameters: {
      'api_key': Environment.theMovieDBKey,
      'language': 'es-MX'
    }
  ));

  List<Actor> _jsonToMovies( Map<String, dynamic> json ){
    final actorDBResponse = CreditsResponse.fromJson(json);
    final List<Actor> actors = actorDBResponse.cast
    .map(( actor ) => ActorMapper.castToEntity( actor )).toList();

    return actors;
  }

  @override
  Future<List<Actor>> getActorsByMovie(String movieId) async {
    final response = await dio.get('/movie/$movieId/credits');
    return _jsonToMovies( response.data );
  }

}