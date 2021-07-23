export const concatPlaceholder = (type, value) => {
	let newPlaceholder = '';
	if (type === 'mail') {
		newPlaceholder = `${value
			.toLowerCase()
			.replace(/ /g, '')}@gmail.com`;
	} else if (type === 'web') {
		newPlaceholder = `www.${value
			.toLowerCase()
			.replace(/ /g, '')}.com.mx`;
	} else if (type === 'textarea') {
		newPlaceholder = `Una descripcion sobre ${value}`;
	}
	return newPlaceholder;
};

export const generateID = () => {
	let id = Math.random().toString(36).substring(7);
	return id;
};

export const lorem = () => {
	return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non mauris non elit volutpat gravida. Sed lacinia laoreet diam et fermentum. Aenean velit nisl, volutpat ut eros facilisis, hendrerit accumsan justo. Pellentesque sit amet arcu sed sapien fermentum porttitor sodales ac massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis quam mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Etiam cursus leo diam, ac dictum tellus porttitor sed. Proin viverra vel ex maximus laoreet. Aliquam ornare dapibus erat eget.';
};
