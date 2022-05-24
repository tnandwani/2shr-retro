import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Toolbar,
Button,
Tooltip} from 'react95'
import { getTooltip } from '../redux/slices/interfaceSlice';

export default function DisabledToolbar(props) {
  
  const dispatch = useDispatch()
  const toolText = useSelector((state) => state.interface.tooltip);

  return (
    <Toolbar>
      <Tooltip text={toolText} onMouseEnter={() => { dispatch(getTooltip()) }} enterDelay={100} leaveDelay={200}>
        <Button variant='menu' size='sm'>
          File
        </Button>
        <Button variant='menu' size='sm'>
          Edit
        </Button>

      </Tooltip>
      <Button variant='menu' size='sm' onClick = {()=> {window.open(props.github)}}>
        View Code
      </Button>
      <Button variant='menu' size='sm' onClick={() => { window.open(props.visit) }}>
        Visit Site
      </Button>
    </Toolbar>  )
}
