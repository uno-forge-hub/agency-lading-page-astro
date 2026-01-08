export const initAppTheme = () => {
    const themeSwitchers = document.querySelectorAll("[data-theme-switcher]");
    const docElement = document.documentElement;

    const getStoredTheme = () => {
        if (typeof localStorage !== "undefined") {
            return localStorage.getItem("theme");
        }
        return null;
    };

    const getSystemTheme = () => {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    };

    const getEffectiveTheme = () => {
        const storedTheme = getStoredTheme();
        if (storedTheme === "dark" || storedTheme === "light") {
            return storedTheme;
        }
        return getSystemTheme();
    };

    const applyTheme = (theme) => {
        docElement.classList[theme === "dark" ? "add" : "remove"]("dark");
    };

    const updateActiveState = (activeTheme) => {
        themeSwitchers.forEach((switcher) => {
            const switcherTheme = switcher.getAttribute("data-theme");
            if (switcherTheme === activeTheme) {
                switcher.setAttribute("data-state", "active");
            } else {
                switcher.removeAttribute("data-state");
            }
        });
    };

    const setTheme = (theme) => {
        if (theme === "system") {
            localStorage.removeItem("theme");
            applyTheme(getSystemTheme());
        } else {
            localStorage.setItem("theme", theme);
            applyTheme(theme);
        }
        updateActiveState(theme);
    };

    const storedTheme = getStoredTheme();
    const initialTheme = storedTheme || "system";
    applyTheme(getEffectiveTheme());
    updateActiveState(initialTheme);

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
        if (!getStoredTheme()) {
            applyTheme(getSystemTheme());
        }
    });

    themeSwitchers.forEach((switcher) => {
        switcher.addEventListener("click", (e) => {
            e.preventDefault();
            const theme = switcher.getAttribute("data-theme")
            if (theme) {
                setTheme(theme);
            }
        });
    });
};