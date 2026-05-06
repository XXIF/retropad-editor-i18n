{
	let fileInputs = document.querySelectorAll('input[type=file]');
	fileInputs.forEach(elem => {
		let fspan = document.getElementById(elem.id + '-filename');

		if (fspan)
			elem.addEventListener('change', event => {
				let name = '';
				switch (event.target.files.length) {
					case 0:
						name = __('browse');
						break;

					case 1:
						name = event.target.files[0].name;
						break;

					default:
						name = event.target.files.length + __('files-count');
				}
				fspan.innerHTML = name;

			});
	});
}
