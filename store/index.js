import {configureStore} from '@reduxjs/toolkit';
import data from './album';
import photo from './photo';
import token from './token';

export default configureStore({
  reducer: {
    data: data,
    photo: photo,
    token: token,
  },
});
