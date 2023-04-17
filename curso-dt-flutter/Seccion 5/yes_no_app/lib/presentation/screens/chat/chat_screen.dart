import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:yes_no_app/domain/entities.dart';

import 'package:yes_no_app/presentation/providers/chat_provider.dart';
import 'package:yes_no_app/presentation/widgets/widgets.dart';

class ChatScreen extends StatelessWidget {
   
  const ChatScreen({Key? key}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: const Padding(
          padding: EdgeInsets.all(4.0),
          child: CircleAvatar(
            backgroundImage: NetworkImage('https://images.mubicdn.net/images/cast_member/473141/cache-246348-1502681802/image-w856.jpg?size=200x'),
          ),
        ),
        title: const Text('Chat'),
        centerTitle: true,
      ),
      body: const _ChatView()
    );
  }
}

class _ChatView extends StatelessWidget {
  const _ChatView();

  @override
  Widget build(BuildContext context) {

    final chatProvider = context.watch<ChatProvider>();

    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.symmetric( horizontal: 10 ),
        child: Column(
          children: [
            Expanded(
              child: ListView.builder(
                controller: chatProvider.chatScrollController,
                itemCount: chatProvider.messageList.length,
                itemBuilder: (context, index) {
                 
                 final message = chatProvider.messageList[index];

                 return ( message.fromWho == FromWho.hers )
                 ? HerMessageBubble( message: message )
                 : MyMessageBubble(message: message);

                },
              )
            ),
          
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: MessageFieldBox( onValue: chatProvider.sendMessage ),
            )
          ],
        ),
      ),
    );
  }
}