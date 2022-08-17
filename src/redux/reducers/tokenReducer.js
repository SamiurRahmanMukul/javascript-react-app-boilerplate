import {
  DELETE_TOKEN_CREATE_NETWORK, DELETE_TOKEN_DEPLOY_DATA, DELETE_TOKEN_FROM_DATA, SET_TOKEN_CREATE_NETWORK, SET_TOKEN_DEPLOY_DATA, SET_TOKEN_FORM_DATA
} from '../constants/tokenConstant';

const initialState = {
  // token create network
  tokenCreateNetwork: 'mainnet',

  // token create from data
  tokenFromData: {},

  // token deploy data
  tokenDeployData: {}
};

// eslint-disable-next-line default-param-last
const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    // token create network
    case SET_TOKEN_CREATE_NETWORK:
      return {
        ...state,
        tokenCreateNetwork: action.payload
      };
    case DELETE_TOKEN_CREATE_NETWORK:
      return {
        ...state,
        tokenCreateNetwork: 'mainnet'
      };

    // token create from data
    case SET_TOKEN_FORM_DATA:
      return {
        ...state,
        tokenFromData: action.payload
      };
    case DELETE_TOKEN_FROM_DATA:
      return {
        ...state,
        tokenFromData: {}
      };

    // token deploy data
    case SET_TOKEN_DEPLOY_DATA:
      return {
        ...state,
        tokenDeployData: action.payload
      };
    case DELETE_TOKEN_DEPLOY_DATA:
      return {
        ...state,
        tokenDeployData: {}
      };

    default:
      return state;
  }
};

export default tokenReducer;
