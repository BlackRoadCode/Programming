import 'package:cinemapedia/config/constants/environment.dart';
import 'package:cinemapedia/infrastructure/mappers/movie_mapper.dart';
import 'package:cinemapedia/infrastructure/models/moviedb/moviedb_response.dart';
import 'package:dio/dio.dart';
import 'package:cinemapedia/domain/datasources/movies_datasource.dart';
import 'package:cinemapedia/domain/entities/movie.dart';

class MoviedbDatasource extends MoviesDatasource{

  final dio = Dio( BaseOptions(
    baseUrl: 'https://api.themoviedb.org/3',
    queryParameters: {
      'api_key': Environment.theMovieDBKey,
      'language': 'es-MX'
    }

  ));

  @override
  Future<List<Movie>> getNowPlaying({ int page = 1 }) async {

    // hacemos la llamada al endpoint y almacenamos el resultado en response.
    final response = await dio.get('/movie/now_playing');

    // creamos una variable movieDBResponse en la que vamos a almacenar la conversión desde el modelo
    // creado previamente en quicktype
    final movieDBResponse = MovieDbResponse.fromJson( response.data );

    // Creamos una nueva variable con el tipo que vamos a necesitar, aquí es donde el mapper convierte el resultado
    // al tipo de datos que vamos a manejar en nuestra aplicación, dependiendo del datasource usaremos un mapper
    // u otro. También hacemos un filtro con where() para dicriminar películas que no tengan poster
    final List<Movie> movies = movieDBResponse.results
    .where(( moviedb ) => moviedb.posterPath != 'no-poster')
    .map(( moviedb ) => MovieMapper.movieDBToEntity( moviedb )).toList();

    return movies;
  }

}