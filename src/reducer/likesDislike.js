const initialState = {
    posts: []
  };

const likeDislike = (state = initialState, action) => {
    switch (action.type) {
        case 'LIKE_POST':
            console.log(action)
            return {
                ...state,
                posts: state.posts.map(post => {
                  if (post.id === action.id) {
                    return {
                      ...post,
                      likes: !!post.likes ? post.likes.concat(action.uid) : [action.uid]
                    }
                  }
                  return post;
                })
              };
        case 'DISLIKE_POST':
            return {
                // count: state.count - 1,
                // id: state.id.filter(id => id != action.payload)
            }
        default: return initialState
    }
}
export default likeDislike