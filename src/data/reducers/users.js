import {successFetchUsers} from '../actions/users';

const initialState = {
  users: [],
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case successFetchUsers.type:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
}
