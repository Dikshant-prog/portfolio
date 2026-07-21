import {
  createContext,
  useState,
  useEffect,
} from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "light" ? "dark" : "light"
    );
  };

  useEffect(() => {

    localStorage.setItem("theme", theme);

    document.body.className = "";

    document.body.classList.add(
      theme === "dark" ? "bg-dark" : "bg-light"
    );

  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
