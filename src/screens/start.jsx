import React, { useEffect, useState } from 'react'
import {
    AppBar,
    Toolbar,
    TextField,
    Desktop,
    Button,
    List,
    ListItem,
    Divider
} from 'react95';



export const Start = (props) => {
    const [open, setOpen] = React.useState(false);

    return (
        <div>
            <AppBar style={{
                position: 'fixed',
                top: '95vh',
                bottom: '0',
                left: '0'
            }}>
                <Toolbar style={{ justifyContent: 'space-between' }}>
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                        <Button onClick={() => setOpen(!open)} active={open} style={{ fontWeight: 'bold' }}>
                            <img src='https://storybook.react95.io/static/media/logo.2a9c21d8.png' alt='react95 logo' style={{ height: '20px', marginRight: 4 }} />
                            Start
                        </Button>
                        {open && (
                            <List
                                style={{
                                    position: 'absolute',
                                    left: '0',
                                    bottom: '100%'
                                }}
                                onClick={() => setOpen(false)}>
                                <ListItem>
                                    <span role='img' aria-label='👨‍💻'>
                                        👨‍💻
                                    </span>
                                    Profile
                                </ListItem>
                                <ListItem>
                                    <span role='img' aria-label='📁'>
                                        📁
                                    </span>
                                    My account
                                </ListItem>
                                <Divider />
                                <ListItem disabled>
                                    <span role='img' aria-label='🔙'>
                                        🔙
                                    </span>
                                    Logout
                                </ListItem>
                            </List>
                        )}
                    </div>

                    <TextField placeholder='Search...' width={150} />
                </Toolbar>
            </AppBar>

            {/* content */}
            <main className='m-2'>

                <Desktop onClick={() => { alert('hi') }} backgroundStyles={{ background: 'green' }} >
                    <h1 className='text-center mt-4'>PROJECT 1</h1>
                </Desktop>
                <br />
                <Desktop backgroundStyles={{ background: 'orange' }}>
                    <h1 className='text-center mt-4'>PROJECT 2</h1>
                </Desktop>
                <br />

                <Desktop backgroundStyles={{ background: 'yellow' }}>
                    <h1 className='text-center mt-4'>PROJECT 3</h1>

                </Desktop>
            </main>
        </div>
    );
}
