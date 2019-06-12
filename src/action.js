export const USER_CREATE = 'USER_CREATE'
export const USER_UPDATE = 'USER_UPDATE'
export const USER_DELETE = 'USER_DELETE'


export const createUser = ({ name, position }) => {
  return { type: USER_CREATE, data: { name, position } }
}

export const updateUser = ({ id, name, position }) => {
  return { type: USER_UPDATE, data: { id, name, position } }
}

export const deleteUser = ({ id, name, position }) => {
  return { type: USER_DELETE, data: { id, name, position } }
}