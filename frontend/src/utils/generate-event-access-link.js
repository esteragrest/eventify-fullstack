export const generateEventAccessLink = (eventId, accessLink) =>
	`${import.meta.env.VITE_BASE_URL}/events/${eventId}?accessLink=${accessLink}`;
