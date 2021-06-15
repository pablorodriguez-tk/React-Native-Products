import {Usuario} from '../interfaces/appInterfaces';

export interface AuthState {
  errorMessage: string;
  status: 'cheking' | 'authenticated' | 'not-authenticated';
  token: string | null;
  user: Usuario | null;
}

type AuthAction =
  | {type: 'signUp'; payload: {token: string; user: Usuario}}
  | {type: 'logout'}
  | {type: 'addError'; payload: string}
  | {type: 'removeError'}
  | {type: 'notAuthenticated'};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'addError':
      return {
        ...state,
        errorMessage: action.payload,
        status: 'not-authenticated',
        user: null,
        token: null,
      };

    case 'removeError':
      return {
        ...state,
        errorMessage: '',
      };

    case 'signUp':
      return {
        ...state,
        errorMessage: '',
        status: 'authenticated',
        token: action.payload.token,
        user: action.payload.user,
      };

    case 'logout':
    case 'notAuthenticated':
      return {
        ...state,
        status: 'not-authenticated',
        token: null,
        user: null,
      };

    default:
      return state;
  }
};
