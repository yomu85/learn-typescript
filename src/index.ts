enum Theme {
  Light = "light-theme",
  Dark = "dark-theme",
  System = "system-theme"
}

function applyTheme(theme: Theme): void {
  const className = theme;
  console.log(`Theme applied: ${className}`);
}

applyTheme(Theme.Dark);
// applyTheme("light-theme"); // ❌ 

console.log(Theme.Dark); // "dark-theme"
console.log(Theme.System); // "system-theme"
console.log(Theme.Light); // "light-theme"