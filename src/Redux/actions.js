import { useDispatch } from "react-redux"

// action types
export const USERM="USER"
export const ORDERM = "ORDER"
export const isAuth = "isAuth"

// Action Creators

export function addUser(val) { 
  return {type:USERM,payload:val}
}
export function addOrder(val) { 
  return {type:ORDERM,payload:val}
}
export function toggleisAuth(val) { 
  return {type:isAuth,payload:val}
}
