import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensaje:string='';
  elemento:any;

  constructor( public _chatService:ChatService ) { 
    this._chatService.cargarMensajes().subscribe( () => { 

      setTimeout( () => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      },20 );
     } );
   }

  ngOnInit(): void { 
    this.elemento = document.getElementById('app-mensajes');
   }

  enviarMensaje(){
    console.log(this.mensaje);

    if ( this.mensaje.length === 0 ){
      return ;
    }

    this._chatService.agregarMensaje( this.mensaje ).then( () =>{
      this.mensaje='';

    } ).catch( (err) => {
      console.log('Error al enviar', err);
      
    } );
  }



}
