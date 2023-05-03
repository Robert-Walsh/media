import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get('http://localhost:3005/users')
    
    //Dev testing only
    await pause(1000)
    
    return response.data
})


//Dev testing only
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration)
    })
}

export { fetchUsers }