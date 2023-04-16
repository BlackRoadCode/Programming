

import 'package:flutter/material.dart';
import 'package:yes_no_app/domain/entities.dart' show Message, FromWho; // TODO: Validate show

class ChatProvider extends ChangeNotifier{

  List<Message> messages = [
    Message( text: 'Hola Mundo', fromWho: FromWho.me ),
    Message( text: 'Alguna pregunta?', fromWho: FromWho.me ),
  ];

  Future<void> sendMessage( String text ) async {
    // TODO: implpementar send message
  }

}