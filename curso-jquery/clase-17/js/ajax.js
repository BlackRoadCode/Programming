(function(){
    $.ajax({
        type:'GET',
        url:'http://www.json-generator.com/api/json/get/bYXQwtssPm',
        dataType:'json',

    }).done( function(data){

        console.log(data);
        
        var persons = data;
        
        let html = "";
        
        for (let i = 0 ; i < persons.length ; i++) {
            
            let person = persons[i];
            let tags = "";
            
            for (let j = 0; j < person.tags.length; j++) {
                tags += '<span class="badge bg-primary ms-1">' + person.tags[j] + "</span>";
            }

                html += '<tr>';
                html += '<td>'+ person.name +'</td>';
                html += '<td>'+ person.age +'</td>';
                html += '<td>'+ tags +'</td>';
                html += '</tr>';
            
        }

        $('#tablePersons').append(html);

    }).fail( function(){
        console.log('falló la petición');
    }).always( function(){
        console.log('Siempre se ejecuta');
    });

})();
