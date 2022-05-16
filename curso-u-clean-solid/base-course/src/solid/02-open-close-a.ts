import { PhotosService, PostService, TodoService } from './02-open-close-b';
import { HttpClient } from './02-open-close-c';

(async () => {

    const _httpClient = new HttpClient();

    const todoService = new TodoService( _httpClient );
    const postService = new PostService( _httpClient );
    const photosService = new PhotosService( _httpClient );

    const todos = await todoService.getTodoItems();
    const posts = await postService.getPosts();
    const photos = await photosService.getPhotos();
    
    
    console.log({ todos, posts, photos });
    

})();