// To parse this JSON data, do
//
//     final personResponse = personResponseFromMap(jsonString);

import 'dart:convert';

class PersonResponse {
    PersonResponse({
        required this.adult,
        required this.alsoKnownAs,
        required this.biography,
        required this.birthday,
        required this.deathday,
        required this.gender,
        this.homepage,
        required this.id,
        required this.imdbId,
        required this.knownForDepartment,
        required this.name,
        required this.placeOfBirth,
        required this.popularity,
        required this.profilePath,
    });

    bool adult;
    List<dynamic> alsoKnownAs;
    String biography;
    DateTime birthday;
    DateTime deathday;
    int gender;
    dynamic homepage;
    int id;
    String imdbId;
    String knownForDepartment;
    String name;
    String placeOfBirth;
    double popularity;
    String profilePath;

    factory PersonResponse.fromJson(String str) => PersonResponse.fromMap(json.decode(str));

    String toJson() => json.encode(toMap());

    factory PersonResponse.fromMap(Map<String, dynamic> json) => PersonResponse(
        adult               : json["adult"],
        alsoKnownAs         : List<dynamic>.from(json["also_known_as"].map((x) => x)),
        biography           : json["biography"],
        birthday            : DateTime.parse(json["birthday"]),
        deathday            : DateTime.parse(json["deathday"]),
        gender              : json["gender"],
        homepage            : json["homepage"],
        id                  : json["id"],
        imdbId              : json["imdb_id"],
        knownForDepartment  : json["known_for_department"],
        name                : json["name"],
        placeOfBirth        : json["place_of_birth"],
        popularity          : json["popularity"]?.toDouble(),
        profilePath         : json["profile_path"],
    );

    Map<String, dynamic> toMap() => {
        "adult": adult,
        "also_known_as": List<dynamic>.from(alsoKnownAs.map((x) => x)),
        "biography": biography,
        "birthday": "${birthday.year.toString().padLeft(4, '0')}-${birthday.month.toString().padLeft(2, '0')}-${birthday.day.toString().padLeft(2, '0')}",
        "deathday": "${deathday.year.toString().padLeft(4, '0')}-${deathday.month.toString().padLeft(2, '0')}-${deathday.day.toString().padLeft(2, '0')}",
        "gender": gender,
        "homepage": homepage,
        "id": id,
        "imdb_id": imdbId,
        "known_for_department": knownForDepartment,
        "name": name,
        "place_of_birth": placeOfBirth,
        "popularity": popularity,
        "profile_path": profilePath,
    };
}
