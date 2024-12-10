const setTheme = (theme: string) => {
	if (theme === "dark") {
		document.documentElement.setAttribute("data-theme", theme)
		localStorage.setItem("theme", theme)
	} else {
		document.documentElement.removeAttribute("data-theme")
		localStorage.removeItem("theme")
	}
}

export { setTheme }
