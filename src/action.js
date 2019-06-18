export const USER_CREATE = 'USER_CREATE'
export const USER_UPDATE = 'USER_UPDATE'


export const createUser = ({ name, position }) => {
  return { type: USER_CREATE, data: { name, position } }
}

export const updateUser = ({ id, name, position }) => {
  return { type: USER_UPDATE, data: { id, name, position } }
}

//example
const fetchPosts = (subreddit) => async dispatch => {
  dispatch(createUser(subreddit))
  const result = await axios.post(`https://www.reddit.com/r/${subreddit}.json`)
  dispatch(actionCreator(result))
}
