import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ErrorBoundary from 'components/core/ErrorBoundary';
import GlobalCssBaseline from 'components/core/GlobalCssBaseline';
import SplashScreen from 'components/core/SplashScreen';
import { AuthProvider } from 'contexts/Auth';
import { SettingsProvider } from 'contexts/Settings';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

// Router
import router from 'router';

// Redux store
import store from 'store';

// React i18n
import 'locales';
import RoleProvider from 'contexts/RoleProvider';
import { NotificationProvider } from 'contexts/Notification';
import DialogProvider from 'contexts/Dialog';

// React query
const queryClient = new QueryClient();

const App = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <AuthProvider>
              <SettingsProvider>
			  <NotificationProvider>
			  <DialogProvider>
                <CssBaseline enableColorScheme />
                <GlobalCssBaseline />
                <RoleProvider>
                  <RouterProvider
                    router={router}
                    fallbackElement={<SplashScreen />}
                  />
                </RoleProvider>
				</DialogProvider>
				</NotificationProvider>
              </SettingsProvider>
            </AuthProvider>
          </QueryClientProvider>
        </Provider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;
