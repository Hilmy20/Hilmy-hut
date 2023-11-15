function tampilkanSemuaMenu () {
$.getJSON('data/pizza.json', function (data) {
    let menu = data.menu;
    $.each(menu, function (i, item) {
        $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3"><img src="img/menu/' + item.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + item.nama + '</h5><p class="card-text">' + item.deskripsi + '</p><h5 class="card-title">Rp.' + item.harga + '<a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>');
    });
});
}

tampilkanSemuaMenu()

$('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    $('h1').html(kategori);

    if(kategori == 'All Menu'){
        tampilkanSemuaMenu()
        return
    }

    $.getJSON('data/pizza.json', function (data) {
        let menu = data.menu;
        let content = '';  // Fixed the typo in the variable name

        $.each(menu, function (i, item) {  // Changed 'data' to 'item' inside the loop
            if (item.kategori == kategori.toLowerCase()) {
                content += '<div class="col-md-4"><div class="card mb-3"><img src="img/menu/' + item.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + item.nama + '</h5><p class="card-text">' + item.deskripsi + '</p><h5 class="card-title">Rp.' + item.harga + '<a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';
            }
        });

        $('#daftar-menu').html(content);
    });
});
