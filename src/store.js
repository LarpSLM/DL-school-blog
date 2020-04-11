import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import signInReducer from 'src/pages/sign-in/reduce';
import signUpReducer from "./pages/sign-up/reduce";
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {history} from 'src/history';
import addPostReducer from "./pages/newPostPage/reducer";
import thunk from 'redux-thunk';
import appReducer from "./pages/defaultPage/reducer";
import postsReducer from "./pages/allPosts/reducer";
import singlePostReducer from "./pages/post/reducer";
import myPostReducer from "./pages/my-post/reducer";

const logger = createLogger({
  collapsed: true
});

const middlewares = [routerMiddleware(history), logger, thunk];

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  app: appReducer,
  signIn: signInReducer,
  singUp: signUpReducer,
  newPostPage: addPostReducer,
  allPosts: postsReducer,
  post: singlePostReducer,
  myPost: myPostReducer,
});



const store = createStore(createRootReducer(history), applyMiddleware(...middlewares));

export default store;
