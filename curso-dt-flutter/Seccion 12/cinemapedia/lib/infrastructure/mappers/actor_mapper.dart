
import 'package:cinemapedia/domain/entities/actor.dart';
import 'package:cinemapedia/infrastructure/models/moviedb/credits_response.dart';

class ActorMapper {

  static Actor castToEntity( Cast cast ) => Actor(
    id          : cast.id, 
    name        : cast.name, 
    profilePath : ( cast.profilePath == null )
                  ? 'https://t4.ftcdn.net/jpg/04/08/24/43/360_F_408244382_Ex6k7k8XYzTbiXLNJgIL8gssebpLLBZQ.jpg'
                  : 'https://image.tmdb.org/t/p/w500${ cast.profilePath }', 
    character   : cast.character
  );

}
