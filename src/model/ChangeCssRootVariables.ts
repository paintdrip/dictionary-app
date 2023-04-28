import { Theme } from '../context/ThemeContext';

export function changeCssRootVariables(theme: Theme) {
  const root = document.querySelector(':root') as HTMLElement;

  const components = ['bgcolor', 'textcolor', 'inputcolor'];

  components.forEach((component) => {
    root.style.setProperty(`--${component}-default`, `var(--${component}-${theme})`);
  });
}
