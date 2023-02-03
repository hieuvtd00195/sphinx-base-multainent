import type { Direction } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { __DEV__ } from 'config';
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import createAppTheme from 'theme';
import type { FCC } from 'types/react';
import LocalStorage from 'utils/LocalStorage';

interface Settings {
  direction?: Direction;
  mode: 'light' | 'dark' | 'default';
}

export interface SettingsContextValue {
  settings: Settings;
  updateSettings: (update: Settings) => void;
}

const initialSettings: Settings = {
  direction: 'ltr',
  mode: 'light',
};

const SettingsContext = createContext<SettingsContextValue | null>(null);

if (__DEV__) {
  SettingsContext.displayName = 'SettingsContext';
}

const SettingsProvider: FCC = (props) => {
  const { children } = props;
  const [settings, setSettings] = useState<Settings>(initialSettings);
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const defaultMode = isDarkMode ? 'dark' : 'light';

  useEffect(() => {
    const settings = LocalStorage.get('settings', initialSettings);
    if (Object.keys(settings).every((key) => key in initialSettings)) {
      setSettings(settings);
    }
  }, []);

  const updateSettings = useCallback((updatedSettings: Settings): void => {
    setSettings(updatedSettings);
    LocalStorage.set('settings', updatedSettings);
  }, []);

  const theme = useMemo(() => {
    const { mode } = settings;
    return createAppTheme({
      ...settings,
      mode: mode === 'default' ? defaultMode : mode,
    });
  }, [settings, defaultMode]);

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SettingsContext.Provider>
  );
};

const SettingsConsumer = SettingsContext.Consumer;
export { SettingsContext as default, SettingsProvider, SettingsConsumer };
