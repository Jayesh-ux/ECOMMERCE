"use client"

import { createContext, ReactElement, useEffect, useState } from "react";

const MyThemeContext = createContext({
  isDarkTheme: true,
  toggleThemeHandler: () => {},
});

interface ThemePropsInterface {
  children?: JSX.Element | Array<JSX.Element>;
}

export function MyThemeContextProvider(
  props: ThemePropsInterface
): ReactElement {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    initialThemeHandler();
  }, []);

  function isLocalStorageEmpty(): boolean {
    return !localStorage.getItem("isDarkTheme");
  }

  function initialThemeHandler(): void {
    if (isLocalStorageEmpty()) {
      localStorage.setItem("isDarkTheme", `true`);
      document.querySelector("body")!.classList.add("dark");
      setIsDarkTheme(true);
    } else {
      const isDarkThemeValue: boolean = JSON.parse(localStorage.getItem("isDarkTheme")!);
      isDarkThemeValue && document.querySelector("body")!.classList.add("dark");
      setIsDarkTheme(isDarkThemeValue);
    }
  }

  function toggleThemeHandler(): void {
    const isDarkThemeValue: boolean = JSON.parse(localStorage.getItem("isDarkTheme")!);
    setIsDarkTheme(!isDarkThemeValue);
    toggleDarkClassToBody();
    setValueToLocalStorage();
  }

  function toggleDarkClassToBody(): void {
    document.querySelector("body")!.classList.toggle("dark");
  }

  function setValueToLocalStorage(): void {
    localStorage.setItem("isDarkTheme", `${!isDarkTheme}`);
  }

  return (
    <MyThemeContext.Provider value={{ isDarkTheme, toggleThemeHandler }}>
      {props.children}
    </MyThemeContext.Provider>
  );
}

export default MyThemeContext;