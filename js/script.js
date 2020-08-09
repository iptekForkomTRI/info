$('.ps').on('click', function(e){

	//ambil is href
	var tujuan = $(this).attr('href');
	//tangkap elemen
	var elementujuan = $(tujuan);

	//pindahkan scroll
	$('html, body').animate({
		scrollTop: elementujuan.offset().top -50
	}, 700, 'swing');

	e.preventDefault();
});