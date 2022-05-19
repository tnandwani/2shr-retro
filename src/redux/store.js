import {
    configureStore
} from '@reduxjs/toolkit'


import interfaceSlice from '../redux/slices/interfaceSlice'
export default configureStore({
    reducer: {
        interface: interfaceSlice,
        
    },
})
