
import 'package:flutter/material.dart';
import 'package:yes_no_app/domain/entities/message.dart';

class ChatProvider extends ChangeNotifier{

  List<Message> messages =[
    Message(text: 'Hola mensaje 1', fromWho: FromWho.me ),
    Message(text: 'otro mensaje 2?', fromWho: FromWho.me ),
  ];

  Future<void> sendMessage( String text ) async {
    // TODO... 
  }



}