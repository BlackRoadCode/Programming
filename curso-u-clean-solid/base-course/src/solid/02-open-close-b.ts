import { HttpClient } from './02-open-close-c';

export class TodoService { 

    constructor( private _httpClient:HttpClient ){ }

    async getTodoItems() {
        const { data } = await this._httpClient.get('https://jsonplaceholder.typicode.com/todos/');
        return data;
    }
}

export class PostService {

    constructor( private _httpClient:HttpClient ){ }

    async getPosts() {
        const { data } = await this._httpClient.get('https://jsonplaceholder.typicode.com/posts');
        return data;
    }
}

export class PhotosService {

    constructor( private _httpClient:HttpClient ){ }

    async getPhotos() {
        const { data } = await this._httpClient.get('https://jsonplaceholder.typicode.com/photos');
        return data;
    }

}