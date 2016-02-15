(function(){

	const
		CLASS_NAME = 'itemList';

	var humanList = document.querySelector('.list');


		humanList = document.addEventListener('click', changeClass );

		function changeClass ( event ) {
			var target = event.target;

			if ( target.classList.contains( CLASS_NAME ) ) {

				target.classList.toggle('active');
			}
		};


})()