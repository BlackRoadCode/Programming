
import 'package:cinemapedia/domain/entities/actor.dart';
import 'package:cinemapedia/infrastructure/models/moviedb/credits_response.dart';

class ActorMapper {

  static Actor castToEntity( Cast cast ) => Actor(
    id          : cast.id, 
    name        : cast.name, 
    profilePath : ( cast.profilePath != '' )
                  ? 'https://image.tmdb.org/t/p/w500${ cast.profilePath }'
                  : 'https://www.farmaciacacho.com/wp-content/themes/apexclinic/images/no-image/No-Image-Found-400x264.png', 
    character   : cast.character
  );

}
