$(() => {
	
	
	$("#artTony").append(`<h1 id="tony">Tony</h1>`);

	$("#TMessage").append(`<h3>Happy Birthday!!!</h3><br><h5> Shane & Shiela</h5>`).hide();
	
	toggleElements();
	function toggleElements() {
			$("#tony").on("click", function () {
			$(this).next().toggle();
			$("#TMessage").toggle("slow");
		});
	}
	
	
});