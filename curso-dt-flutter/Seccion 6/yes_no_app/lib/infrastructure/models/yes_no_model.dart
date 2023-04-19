import 'package:yes_no_app/domain/entities.dart';

class YesNoModel {
    YesNoModel({
        required this.answer,
        required this.forced,
        required this.image,
    });

    String answer;
    bool forced;
    String image;

    factory YesNoModel.fromJsonMap(Map<String, dynamic> json) => YesNoModel(
        answer: json["answer"],
        forced: json["forced"],
        image: json["image"],
    );

    Map<String, dynamic> toJson() => {
        "answer": answer,
        "forced": forced,
        "image": image,
    };

    Message toMessageEntity() => Message(
      text: answer == 'yes' ? 'Sí' : 'No', 
      fromWho: FromWho.hers,
      imageUrl: image
    );
}
