import {
  SET_SCROLL_TOP,
  SET_WINDOW_DIMENSIONS,
  SET_LOADED_IMAGE
} from '../constants/actions.js';

export default function uiReducer(state = {loadedImages: [], windowHeight: 100, scrollTop: 0}, action) {

  const {type, data} = action;

  switch (type) {

    case SET_WINDOW_DIMENSIONS:
      return Object.assign({}, state, {windowHeight: data.height, windowWidth: data.width});

    case SET_SCROLL_TOP:
      return Object.assign({}, state, {scrollTop: data});

    case SET_LOADED_IMAGE:
      return (state.loadedImages.indexOf(data) === -1)
        ?
        Object.assign({}, state, {loadedImages: [...state.loadedImages, data]})
        :
        state;

    default:
      return state;

  }

}
