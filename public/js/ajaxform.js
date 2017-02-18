$('#winpopup').on('show.bs.modal', function (event) {
	var link = $(e.relatedTarget);
    $(this).find(".modal-body").load(link.attr("href"));
})