export default (state, { type, payload }) => {
    switch (type) {


    case 'START_FETCH':
        return { ...state, loading: true }
    
    case 'FINISHED_FETCH':
        return { ...state, loading: false }
    
    case 'SET_POSTS':
        return { ...state, blogPosts: payload }

    case 'SET_POST':
        return { ...state, currentBlogPost: payload }

    case 'ADD_POST':
        return { ...state, blogPosts: [...state.blogPosts,payload]}

    case 'DELETE_POST':
        return {
            ...state,
            blogPosts: state.blogPosts.filter(post => post.id !== payload)
        }

    default:
        return state
    }
}
