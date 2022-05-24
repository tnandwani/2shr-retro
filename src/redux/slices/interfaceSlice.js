import {
    createSlice
} from '@reduxjs/toolkit'


export const interfaceSlice = createSlice({
    name: 'interfaceSlice',
    initialState: {
        window: 'none',
        theme: 0,
        bgColor: '#000',
        textColor: '#fff',
        tooltip: "That does not work",
        artist: 'https://open.spotify.com/embed/artist/3TVXtAsR1Inumwj472S9r4?utm_source=generator',
        highscore: 0,
    },
    reducers: {
        updateWindow: (state, action) => {
            state.window = action.payload
        },
        changeTheme: (state) => {
            if (state.theme < 13) {
                state.theme++;
            } else {
                state.theme = 0;
            }
        },
        changeColor: (state, action) => {
            state.bgColor = action.payload;
            state.textColor = invertHex(action.payload)
        },
        getTooltip: (state) => {
            const randomWords = [
                "This doesn't work",
                "Not this one either",
                "Nope- fake button",
                "Wrong Again",
                "Almost had it",
                "That one looked real",
                "Gotcha Again",
                "I'll take that as a compliment"
            ]
            state.tooltip = randomWords[(Math.floor(Math.random() * randomWords.length)) - 1];
        },
        changeArtist: (state, action) => {
            state.artist = action.payload;
        },
        setScoreState: (state, action) => {
            console.log(action.payload)
            state.highscore = action.payload;
        },

    },
})

function invertHex(hexcolor) {
    hexcolor = hexcolor.replace("#", "");
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);
    var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? 'black' : 'white';
}

export const {
    // Action creators are generated for each case reducer function
    updateWindow,
    changeTheme,
    changeColor,
    getTooltip,
    changeArtist,
    setScoreState
} = interfaceSlice.actions

export default interfaceSlice.reducer
