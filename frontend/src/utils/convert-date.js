export const convertDate = (dateString) => {
	const [day, month, year] = dateString.split('.');
	return `${year}-${month}-${day}`;
};
