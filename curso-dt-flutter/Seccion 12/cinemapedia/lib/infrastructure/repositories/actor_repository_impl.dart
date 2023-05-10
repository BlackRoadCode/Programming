import 'package:cinemapedia/domain/datasources/actors_datasource.dart';
import 'package:cinemapedia/domain/repositories/actors_repository.dart';
import 'package:cinemapedia/domain/entities/actor.dart';

class ActorRepositiryImpl extends ActorsRepository{

  final ActorsDatasource datasource;
  ActorRepositiryImpl( this.datasource );

  @override
  Future<List<Actor>> getActorsByMovie(String movieId) {
    return datasource.getActorsByMovie(movieId);
  }

}