

import 'package:flutter/material.dart';
import 'package:yes_no_app/config/helpers/get_yes_no_answer.dart';
import 'package:yes_no_app/domain/entities.dart' show Message, FromWho; // TODO: Validate show

class ChatProvider extends ChangeNotifier{

  final ScrollController chatScrollController = ScrollController();
  final GetYesNoAnswer getYesNoAnswer = GetYesNoAnswer();

  List<Message> messageList = [
    Message( text: 'Hola Mundo', fromWho: FromWho.me ),
    Message( text: 'Alguna pregunta?', fromWho: FromWho.me ),
  ];

  Future<void> sendMessage( String text ) async {
    if( text.isEmpty ) return;
    
    final Message message = Message(text: text, fromWho: FromWho.me);
    messageList.add( message );

    if( text.endsWith('?') ){
      herReply();
    }

    notifyListeners();
    moveScrollToBottom();
  }

  Future<void> herReply() async {
    final herMessage = await getYesNoAnswer.getAnswer();
  }
  
  Future<void> moveScrollToBottom() async {
    await Future.delayed( const Duration(milliseconds: 100) );

    chatScrollController.animateTo(
      chatScrollController.position.maxScrollExtent, 
      duration: const Duration( milliseconds: 300 ), 
      curve: Curves.easeOut
    );
  }

}