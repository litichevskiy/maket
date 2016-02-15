(function(){

	const
		CLASS_NAME = 'itemList';

	var humanList = document.querySelector('.list');


		humanList.addEventListener('click', changeClass, true );

		function changeClass ( event ) {
			var target = event.target;

			while( true ){

				if ( target === humanList ) return;

				if ( target.parentElement !== humanList ) {

					target = target.parentElement
				}

				if ( target.parentElement === humanList ) {

					if ( target.classList.contains( CLASS_NAME ) ) {

						target.classList.toggle('active');
						return;
					}
				}
			}
		};


})();