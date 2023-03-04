import { useState } from 'react';

const ThemePicker = () => {
  const [theme, setTheme] = useState('violet');
  const rootEl = document.getElementById('root');
  rootEl.style.setProperty('--theme-color', `var(--${theme})`);

  return (
    <div className="theme-container">
      <div className="example-section">
        <input
          type="radio"
          name="theme"
          onChange={(e) => setTheme(e.target.value)}
          value="violet"
        />
        <input
          type="radio"
          name="theme"
          onChange={(e) => setTheme(e.target.value)}
          value="green"
        />
        <input
          type="radio"
          name="theme"
          onChange={(e) => setTheme(e.target.value)}
          value="blue"
        />
      </div>
    </div>
  );
};

export default ThemePicker;
