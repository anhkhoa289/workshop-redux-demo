import React, { useState } from 'react';
import { connect } from 'react-redux'
import { createUser, updateUser, deleteUser } from './action'
import './style.css'




function App(props) {
  const [user, setUser] = useState({ id: '', name: '', position: '' })



  const validate = (id = user.id) => {
    if (id !== '' && Math.ceil(id) >= 0) {
      return props.userList[+id]
    }
    return false
  }




  const onChangeId = (e) => {
    const userId = e.target.value
    if (validate(userId)) {
      const result = props.userList[+userId]
      setUser(result ? { id: +userId, ...result } : { id: '', name: '', position: '' })
    }
  }
  const onChangeName = (e) => setUser({ ...user, name: e.target.value })
  const onChangePosition = (e) => setUser({ ...user, position: e.target.value })


  const onCreate = () => props.createUser(user)
  const onSave = () => validate() ? props.updateUser(user) : ''
  const onDelete = () => props.deleteUser(user)




  return (
    <div className="App">
      <h3>List user</h3>
      <div><span>Id</span><span>Name</span><span>Position</span></div>
      {
        props.userList.map((item, key) =>
          <div key={key}>
            <span>{key}</span>
            <span>{item.name}</span>
            <span>{item.position}</span>
          </div>
        )
      }

      <h3>User Func</h3>
      <div>
        <label>
          Id: <input type='text' defaultValue={user.id} onChange={onChangeId} />
        </label>
        <label>
          Name: <input type='text' value={user.name} onChange={onChangeName} />
        </label>
        <label>
          Position: <input type='text' value={user.position} onChange={onChangePosition} />
        </label>
        <button onClick={onCreate}>Create</button>
        <button onClick={onSave}>Save</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}







const mapStateToProps = state => ({
  userList: state.user.userList,
})

const mapDispatchToProps = dispatch => ({
  createUser: user => dispatch(createUser(user)),
  updateUser: user => dispatch(updateUser(user)),
  deleteUser: user => dispatch(deleteUser(user)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
