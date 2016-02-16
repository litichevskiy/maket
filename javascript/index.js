(function(){

	const
		CLASS_NAME = 'itemList',
		MAX_DESCRIPTION_LENGTH = 100;

	var humanList = document.querySelector('.list');

		humanList.addEventListener('click', changeClass );

		window.onload = function (){
			var humanProfile =  document.querySelectorAll('.descriptionProfile');

			humanProfile.forEach = [].forEach;

			humanProfile.forEach(function(item){

				if (item.innerHTML.length > MAX_DESCRIPTION_LENGTH ) {

				}
			})
		};

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