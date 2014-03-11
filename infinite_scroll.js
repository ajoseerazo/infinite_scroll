var root = 'http://localhost/c21pe/public';

jQuery.fn.infinite_scroll = function ( options ){

    var error = false;

    var baseUrl = options['url'];

    function loadData( options ){
        console.log( options );
        $.ajax({
            url: options['url'] +"?page="+ options['page'] + ( options['url_options'] ? options['url_options'] : "" ),
            type: 'get',
            jsonp: 'jsonp', 
            success: function(response, status, jqXHR){
                if( options['gif'] )
                    $(options['gif']).hide();

                if (jqXHR.status == 204 ){
                    if( options['error'] )
                        $(options['error']).show();
                    error = true;
                    return;
                }

                options['page'] = (response.current_page + 1);

                var data = {
                    data: response.data
                }

                templateHtml = Handlebars.compile( options['template'] );
                $(options['appendTo']).append(templateHtml( data ));

            },
            error: function(){
                if( options['gif'] )
                    $(options['gif']).hide();

                if( options['error'] )
                        $(options['error']).show();
                error = true;
                return;
            },
            beforeSend: function(){
                if( options['gif'] )
                    $(options['gif']).show()
            }
        });
    }

    loadData(options);

    $(this).scroll( function(){
        if( $(this).scrollTop() + $(this).height() == $(document).height() ){
            if( !error )
              loadData( options );
        }
    }); 
}