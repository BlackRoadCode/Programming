(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) { }
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string
        ) { }
    }

    class InputEvents {
        constructor(  ) { }

        setFocus(){ console.log('ejecutando setFocus()') };
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    interface htmlElementProps{
        id: string;
        type: HtmlType;
        value: string;
        placeholder: string;
    }

    class InputElement{
        public htmlElement:HtmlElement;
        public inputAttributes: InputAttributes;
        public inputEvents: InputEvents;

        constructor({ id, type, value, placeholder }:htmlElementProps){
            this.htmlElement = new HtmlElement( id, type );
            this.inputAttributes = new InputAttributes( value, placeholder );
            this.inputEvents = new InputEvents();
        }
    }

    const nameField = new InputElement(
        { 
            id:'txtInput',
            type:'input',
            value:'Pepe',
            placeholder: 'Enter first name'
        }
    );

    console.log({ nameField });
    nameField.inputEvents.setFocus();

})()