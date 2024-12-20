export const getToken: () => string = () => {
	return window.localStorage.getItem("token") || ""
}
