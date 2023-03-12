$(document).ready(function() {
    $('#search').keyup(function() {
        var searchKorisnik = $(this).val();
        if(searchKorisnik != '') {
            $.ajax({
                url: 'https://api.github.com/search/users?q=' + searchKorisnik,
                type: 'GET',
                dataType: 'json',
                success: function(data) {
                    var results = '';
                    $.each(data.items, function(index, item) {
                        results += '<li><a href="' + item.html_url + '">' + item.login + '</a></li>';
                    });
                    $('#rezultat').html(results);
                }
            });
        } else {
            $('#rezultat').html('');
        }
    });

   
});
