// console.log('hello');
$(document).ready(function() {
		$('button').on('click', function(e) {
			var textAreaData = $('textarea#data').val();
			e.preventDefault();
			// console.log(textAreaData)
			$.ajax({
				url: '/csv',
				method: 'POST',
				contentType: 'application/json',
				data: textAreaData,
				success: function(data) {
					console.log('this is data ', data)
				},
				error: function(err) {
					console.log('you have an err: ', err)
				}
			});
		});
		
	}
);