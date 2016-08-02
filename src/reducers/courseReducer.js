/**
 * Created by apple on 6/10/16.
 */
import * as types from '../actions/actionTypes'
import initialState from './initialState';

export default function courseReducer(state = initialState.authors,action){
  switch(action.type){
    case types.LOAD_COURSES_SUCCESS :
        return action.courses
    case types.CREATE_COURSE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.course)
      ];

    case types.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];
    default: return state;
  }
}
