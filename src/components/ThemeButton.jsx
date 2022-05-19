import React from 'react'
import { changeTheme } from '../redux/slices/interfaceSlice'
import { Button } from 'react95'
import { useDispatch } from 'react-redux'



export default function ThemeButton() {
    const dispatch = useDispatch()

  return (
      <Button active onClick={() => { dispatch(changeTheme()) }}> Change Theme</Button>
  )
}
