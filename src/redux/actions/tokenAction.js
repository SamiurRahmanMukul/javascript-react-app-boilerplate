import {
  DELETE_TOKEN_CREATE_NETWORK, DELETE_TOKEN_DEPLOY_DATA, DELETE_TOKEN_FROM_DATA, SET_TOKEN_CREATE_NETWORK, SET_TOKEN_DEPLOY_DATA, SET_TOKEN_FORM_DATA
} from '../constants/tokenConstant';

// make a action to set token create network
export const setTokenCreateNetwork = (network) => ({
  type: SET_TOKEN_CREATE_NETWORK,
  payload: network
});

// make a action to delete token create network
export const deleteTokenCreateNetwork = () => ({
  type: DELETE_TOKEN_CREATE_NETWORK,
  payload: null
});

// make a action to set token create from data
export const setTokenFormData = (data) => ({
  type: SET_TOKEN_FORM_DATA,
  payload: data
});

// make a action to delete token create from data
export const deleteTokenFromData = () => ({
  type: DELETE_TOKEN_FROM_DATA,
  payload: {}
});

// make a action to set token deploy data
export const setTokenDeployData = (data) => ({
  type: SET_TOKEN_DEPLOY_DATA,
  payload: data
});

// make a action to delete token deploy data
export const deleteTokenDeployData = () => ({
  type: DELETE_TOKEN_DEPLOY_DATA,
  payload: {}
});
