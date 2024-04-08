import { createAsyncThunk } from "@reduxjs/toolkit";
import { addTodo } from "../reducers/todo";
// import axios from "axios";

const api_url = "http://192.168.1.56:3000/phoneCategory"


export const fetchTodos = () => {
    return async  dispatch => {

        await fetch(api_url).then(res => res.json()).then(data => {
            data.forEach(element => {
               dispatch(addTodo(element)) 
            });
        }).catch(error => console.log(error))

    }
}

// export const deleteTodoApi = createAsyncThunk(
//     'todo/deleteTodos',
//     // async (id, thunkAPI) => {
//     //     try {
//     //         const response = await fetch(`${api_url}/${id}`, {
//     //             method: "DELETE"
//     //         });

//     //         if (response.ok) {
//     //             return id
//     //         } else {
//     //             const errorData = await response.json();
//     //             return thunkAPI.rejectWithValue(errorData);
//     //         }
//     //     } catch (error) {
//     //         return thunkAPI.rejectWithValue(error.message);
//     //     }
//     // }

//     async (id, thunkAPI) => await fetch(`${api_url}/${id}`, {
//         method: 'DELETE',
//     }).then(res => res.json()).then( () => {
//         return id
//     }).catch(error => thunkAPI.rejectWithValue(error.message) )
// )

// export const addTodoAPI = createAsyncThunk(
//     'todo/addTodoAPI',
//     // async (objTodo, thunkAPI) => {
//     //     console.log(objTodo);
//     //     try {
//     //         const response = await fetch(api_url, {
//     //             method: "POST",
//     //             headers: {
//     //                 'Accept': 'application/json',
//     //                 'COntent-Type': 'application/json'
//     //             },
//     //             body: JSON.stringify(objTodo)
//     //         })
//     //         const data = response.json();
//     //         if (response.ok) {
//     //             return data;

//     //         } else {
//     //             const errorData = await response.json();
//     //             return thunkAPI.rejectWithValue(errorData);
//     //         }
//     //     } catch (error) {

//     //         return thunkAPI.rejectWithValue(error.message);
//     //     }
//     // }
//     async (objTodo, thunkAPI) => await fetch(api_url, {
//         method: 'POST',
//         headers:{
//             'Accept': 'application/json',
//             'Content-Type': 'application/json' 
//         },
//         body: JSON.stringify(objTodo)
//     }).then(res => res.json()).then(data => {
//         return data
//     }).catch(err => thunkAPI.rejectWithValue(err.message) )
// )

// export const updateTodoApi = createAsyncThunk(
//     'todo/updateTodoApi',
//     // async (objUpdate, thunkAPI) => {
//     //     try {
//     //         const response = await fetch(`${api_url}/${objUpdate.id}`, {
//     //             method: 'PUT',
//     //             headers: {
//     //                 'Accept': 'application/json',
//     //                 'Content-Type': 'application/json'
//     //             },
//     //             body: JSON.stringify(objUpdate.data)
//     //         })

//     //         const data = await response.json()

//     //         if (response.ok) {
//     //             return data

//     //         } else {
//     //             const errorData = await response.json();
//     //             return thunkAPI.rejectWithValue(errorData);

//     //         }
//     //     } catch (error) {
//     //         return thunkAPI.rejectWithValue(error.message);
//     //     }
//     // }

//     async (objUpdate, thunkAPI) => await fetch(`${api_url}/${objUpdate.id}`, {
//         method: 'PUT',
//         headers:{
//             'Accept': 'application/json',
//             'Content-Type': 'application/json' 
//         },
//         body: JSON.stringify(objUpdate.data)
//     }).then(res => res.json()).then(data => {
//         return data
//     }).catch(err => thunkAPI.rejectWithValue(err.message) )
// )

// export const toggleTodoApi = createAsyncThunk(
//     'todo/toggleTodoApi',
//     // async (objUpdate,thunkAPI) => {
//     //     try {
//     //         const response = await fetch(`${api_url}/${objUpdate.id}`, {
//     //             method: 'PUT',
//     //             headers: {
//     //                 'Accept': 'application/json',
//     //                 'Content-Type': 'application/json'
//     //             },
//     //             body: JSON.stringify(objUpdate.data)
//     //         })

//     //         const data = await response.json()

//     //         if (response.ok) {
//     //             return data

//     //         } else {
//     //             const errorData = await response.json();
//     //             return thunkAPI.rejectWithValue(errorData);

//     //         }
//     //     } catch (error) {
//     //         return thunkAPI.rejectWithValue(error.message);
//     //     }
//     // }


//     async (objUpdate, thunkAPI) => await fetch(`${api_url}/${objUpdate.id}`, {
//         method: 'PUT',
//         headers:{
//             'Accept': 'application/json',
//             'Content-Type': 'application/json' 
//         },
//         body: JSON.stringify(objUpdate.data)
//     }).then(res => res.json()).then(data => {
//         return data
//     }).catch(err => thunkAPI.rejectWithValue(err.message) )
// )