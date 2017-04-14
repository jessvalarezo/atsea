import {
  FETCH_CONTAINER_ID
} from '../constants/ActionTypes'

const initialState = {
    containerId: '',
}
const customer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_CONTAINER_ID}_ACK`:
      return {
            ...state,
            ...action.payload
        }
    case `${FETCH_CONTAINER_ID}_ERR`:
        return {
            ...state,
            customerId: ''
        }
    default:
      return state
  }
}

export default container