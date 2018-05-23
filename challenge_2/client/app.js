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
					var dataArray = data.split('\n');
					console.log('cool data array====', data)
					// var fakeHTML = "";


					for (var i = 0; i < dataArray.length; i++) {
						$('#csv').append($(`<div>${dataArray[i]}</div>`))
					}
					// var child = document.getElementById('csv');
					// child.innerHTML = data;
				},
				error: function(err) {
					console.log('you have an err: ', err)
				}
			});

		});


});
