import { __DEV__ } from 'config';
import useRefresh from 'hooks/useRefresh';
import type { Dispatch } from 'react';
import { createContext, useEffect, useReducer } from 'react';
import {
  apiLogin,
  getUser,
  getUserDetails,
  signIn,
  signOut,
} from 'services/auth';
import type { User } from 'types/profile';
import type { FCC } from 'types/react';
import LocalStorage from 'utils/LocalStorage';
import Logger from 'utils/Logger';

type Login = typeof signIn;
type Logout = typeof signOut;
type Register = () => Promise<void>;

interface State {
  isInitialized: boolean;
  isAuthenticated: boolean;
  user: User | null;
}

export interface AuthContextStateValue extends State {
  login: Login;
  logout: Logout;
  register: Register;
}

type Action =
  | { type: 'AUTHORIZED'; payload: { user: User | null } }
  | { type: 'UNAUTHORIZED' }
  | { type: 'LOGOUT' };

const initialState: State = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const reducer = (state: State, action: Action) => {
  // console.log('state',state)
  switch (action.type) {
    case 'AUTHORIZED': {
      const { user } = action.payload;
      //   console.log('action.payload',action.payload)
      return {
        isInitialized: true,
        isAuthenticated: true,
        user,
      };
    }
    case 'UNAUTHORIZED': {
      return {
        isInitialized: true,
        isAuthenticated: false,
        user: null,
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    }
    default:
      return state;
  }
};

const AuthContextState = createContext<AuthContextStateValue | null>(null);
const AuthContextDispatch = createContext<Dispatch<Action> | null>(null);

if (__DEV__) {
  AuthContextState.displayName = 'AuthContext';
}

const AuthProvider: FCC = (props) => {
  const { children } = props;
  const [refresh, refetch] = useRefresh();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const accessToken = LocalStorage.get('accessToken');

    if (accessToken) {
      getUserDetails()
        .then((response) => {
          const { data: user } = response;
          console.log(user);
          if (user) {
            dispatch({ type: 'AUTHORIZED', payload: { user } });
          } else {
            dispatch({ type: 'UNAUTHORIZED' });
          }
        })
        .catch((error) => {
          Logger.log(error);
          dispatch({ type: 'UNAUTHORIZED' });
        });
    } else {
      dispatch({ type: 'UNAUTHORIZED' });
    }
  }, [refresh]);

  const login: Login = async (params) => {
    const response = await apiLogin(params);

    const { accessToken, refreshToken, userId, roleId } = response;

    if (accessToken && refreshToken && userId && roleId) {
      LocalStorage.set('accessToken', accessToken);
      LocalStorage.set('refreshToken', refreshToken);
      LocalStorage.set('roleId', roleId);
      LocalStorage.set('uid', userId);
      refetch();
    }

    return response;
  };

  const logout: Logout = async () => {
    console.log('abcdfe');
    // const response = await signOut();
    LocalStorage.clear();

    dispatch({ type: 'LOGOUT' });

    // return response;
    window.location.reload();
  };

  const register: Register = async (): Promise<void> => {
    // Register
  };

  return (
    <AuthContextState.Provider value={{ ...state, login, logout, register }}>
      <AuthContextDispatch.Provider value={dispatch}>
        {children}
      </AuthContextDispatch.Provider>
    </AuthContextState.Provider>
  );
};

const AuthConsumer = AuthContextState.Consumer;
export {
  AuthContextState as default,
  AuthProvider,
  AuthConsumer,
  AuthContextDispatch,
};
