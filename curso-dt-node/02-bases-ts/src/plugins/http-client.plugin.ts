import axios from 'axios';

export const httpPlientPlugin = {

    get: async(url:string) => {
        const { data } = await axios.get( url );
        return data;
    },

    post: async(url:string, body:any) => { 
        throw new Error('Not Implemented');
     },

    put: async(url:string, body:any) => { 
        throw new Error('Not Implemented');
     },

    delete: async(url:string) => { 
        throw new Error('Not Implemented');
     },

};
