import { Theme } from './settings/types';
import { FendyCoRelumeSemuaHalaman } from './components/generated/FendyCoRelumeSemuaHalaman';

let theme: Theme = 'light';

function App() {
  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  return (
    <>
      <FendyCoRelumeSemuaHalaman />
    </>
  ); // %EXPORT_STATEMENT%
}

export default App;
