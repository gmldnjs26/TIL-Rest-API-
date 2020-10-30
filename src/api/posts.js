import { posts } from './index.js';

// 학습 노트 데이티를 조회하는 API
function fetchPosts() {
  return posts.get('/');
}
// 학습 노트 1개를 조회하는 API
function fetchPost(postId) {
  return posts.get(postId);
}
// 학습노트 데이터를 생성하는 API
function createPost(postData) {
  return posts.post('/', postData);
}
// 학습노트 데이터를 삭제하는 API
function deletePost(postId) {
  return posts.delete(postId);
}
// 학습노트 데이터를 업데이트하는 API
function editPost(postId, postData) {
  return posts.put(postId, postData);
}

export { fetchPosts, createPost, deletePost, fetchPost, editPost };
