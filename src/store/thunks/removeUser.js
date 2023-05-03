import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


const removeUser = createAsyncThunk('users/remove', async (user) => {
    await axios.delete(`http://localhost:3005/users/${user.id}`)

    //Dev testing only
    await pause(1000)
    
    return user  
})


//Dev testing only
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration)
    })
}

export { removeUser }   