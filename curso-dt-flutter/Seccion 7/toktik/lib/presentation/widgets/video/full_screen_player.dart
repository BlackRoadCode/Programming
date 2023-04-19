import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';

class FullScreenPlayer extends StatefulWidget {

  final String caption;
  final String videoUrl;

  const FullScreenPlayer({
    super.key, 
    required this.caption,
    required this.videoUrl 
  });

  @override
  State<FullScreenPlayer> createState() => _FullScreenPlayerState();
}

class _FullScreenPlayerState extends State<FullScreenPlayer> {

  late VideoPlayerController controller;

  @override
  void initState() {
    super.initState();

    controller = VideoPlayerController.asset( widget.videoUrl )
    ..setVolume(0)
    ..setLooping(true)
    ..play();
  }

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {

    return FutureBuilder(
      future: controller.initialize(),
      builder: (context, snapshot) {
        
        return const Center( child: CircularProgressIndicator( strokeWidth: 2 ), );

      },
    );
  }
}