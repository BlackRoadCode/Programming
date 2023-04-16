import 'package:flutter/material.dart';
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
    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.symmetric( horizontal: 10 ),
        child: Column(
          children: [
            Expanded(
              child: ListView.builder(
                itemCount: 10,
                itemBuilder: (context, index) {
                  return ( index % 2 == 0 )
                  ? const HerMessageBubble()
                  : const MyMessageBubble( message:'Este es el mensaje y le cambio' );
                },
              )
            ),
          
            const Padding(
              padding: EdgeInsets.all(8.0),
              child: MessageFieldBox(),
            )
          ],
        ),
      ),
    );
  }
}