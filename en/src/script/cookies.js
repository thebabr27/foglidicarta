
if (!window.localStorage.getItem("cookies")) {
	$('#cookieModal').modal();
	$('#cookieModal').on('hidden.bs.modal', function (e) {
		window.localStorage.setItem("cookies", "true");
	})
}