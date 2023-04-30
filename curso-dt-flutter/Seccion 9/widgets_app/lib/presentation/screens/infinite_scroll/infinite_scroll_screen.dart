import 'package:animate_do/animate_do.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class InfiniteScrollScreen extends StatefulWidget {

  static const name = 'infinite_screen';
   
  const InfiniteScrollScreen({Key? key}) : super(key: key);

  @override
  State<InfiniteScrollScreen> createState() => _InfiniteScrollScreenState();
}

class _InfiniteScrollScreenState extends State<InfiniteScrollScreen> {

  List<int> imagesIds = [ 1, 2, 3, 4, 5 ];
  final ScrollController scrollController = ScrollController();
  bool isLoading = false;
  bool isMounted = true;

  void addFiveImages(){
    final lastId = imagesIds.last;

    imagesIds.addAll(
      [1, 2, 3, 4, 5].map((e) => lastId + e)
    );
  }

  @override
  void initState() {
    super.initState();

    scrollController.addListener(() { 
      if( (scrollController.position.pixels + 500) >= scrollController.position.maxScrollExtent ){
        loadNextPage();
      }
    });
    
  }

  Future loadNextPage() async {

    if( isLoading ) return;
    isLoading = true;
    setState((){});

    await Future.delayed( const Duration( seconds: 2 ) );

    addFiveImages();

    isLoading = false;

    if( !isMounted ) return;

    setState((){});

    moveScrollToBottom();

  }

  Future<void> onRefresh() async {
    isLoading = true;
    setState(() {});

    await Future.delayed( const Duration( seconds: 2 ) );
    if( !isMounted ) return;

    isLoading = false;
    final lastId = imagesIds.last;
    imagesIds.clear();
    imagesIds.add(lastId + 1);
    addFiveImages();
    setState((){});
  }

  void moveScrollToBottom(){
    if( scrollController.position.pixels + 150 <= scrollController.position.maxScrollExtent ) return;

    scrollController.animateTo(
      scrollController.position.pixels + 120, 
      duration: const Duration( milliseconds: 400 ), 
      curve: Curves.fastOutSlowIn
    );
  }

  @override
  void dispose() {
    scrollController.dispose();
    isMounted = false;
    super.dispose();
  }

  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: MediaQuery.removePadding(
        context: context,
        removeTop: true,
        removeBottom: true,
        child: RefreshIndicator(
          strokeWidth: 2,
          onRefresh: onRefresh,
          child: ListView.builder(
            controller: scrollController,
            physics: const BouncingScrollPhysics(),
            itemCount: imagesIds.length,
            itemBuilder: (context, index) {
              return FadeInImage(
                width: double.infinity,
                height: 300,
                fit: BoxFit.cover,
                placeholder: const AssetImage('assets/img/jar-loading.gif'), 
                image: NetworkImage('https://picsum.photos/id/${ imagesIds[index] }/500/300')
              );
            },
          ),
        ),
      ),

      floatingActionButton: FloatingActionButton(
        onPressed: 
          isLoading 
            ? null
            : () => context.pop(),
        child: 
          isLoading 
            ? const CircularProgressIndicator()
            : FadeIn( duration: const Duration( milliseconds: 600 ), child: const Icon( Icons.arrow_back_ios_new_sharp )),
      ),
    );
  }
}