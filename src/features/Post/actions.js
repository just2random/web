import combine from 'utils/combine';
/*
 * EXPORTING REDUCERS and SAGAS
 */
import getPosts, { getPostsReducer } from './actions/getPosts';
import getPostsByAuthor, { getPostsByAuthorReducer } from './actions/getPostsByAuthor';
import getTopPosts, { getTopPostsReducer } from './actions/getTopPosts';
import getPost, { getPostReducer } from './actions/getPost';
import searchPost, { searchPostReducer } from './actions/searchPost';
import publishContent, { publishContentReducer } from './actions/publishContent';
import { updateDraftReducer } from './actions/updateDraft';
import resteem, { resteemReducer } from './actions/resteem';
import postReducer from 'features/Post/reducer';
import postRefresh, { postRefreshReducer } from './actions/refreshPost';
import { moderatePostManager, setModeratorManager, moderatePostReducer } from './actions/moderatePost';

export const initialState = {
  draft: {
    url: '#',
    title: 'Title',
    tagline: 'Short Description',
    permlink: null,
    description: '',
    tags: [],
    images: [],
    author: null,
    active_votes: [],
    payout_value: 0,
    children: 0,
    beneficiaries: [],
    is_active: true,
    is_verified: false,
    verified_by: null,
  },
  posts: {},
  authorPosts: {},
  authorStatus: {},
  topPosts: {},
  topStatus: {},
  dailyRanking: {},
  isPostLoading: false,
  isLoading: false,
  isPublishing: false,
  currentPostKey: null,
  searchTerm: '',
  isSearching: false,
  searchResult: [],
};

export const reducer = (state = initialState, action) => combine(
  [
    updateDraftReducer,
    getPostsReducer,
    getPostsByAuthorReducer,
    getTopPostsReducer,
    getPostReducer,
    searchPostReducer,
    publishContentReducer,
    postReducer,
    resteemReducer,
    postRefreshReducer,
    moderatePostReducer,
  ],
  state,
  action,
);

// All sagas to be loaded
export default [
  getPosts,
  getPostsByAuthor,
  getTopPosts,
  getPost,
  searchPost,
  publishContent,
  resteem,
  postRefresh,
  moderatePostManager,
  setModeratorManager,
];
