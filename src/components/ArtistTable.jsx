import { useDispatch } from 'react-redux';
import {

    Table,
    TableDataCell,
    TableHead,
    TableRow,
    TableHeadCell,
    TableBody
} from 'react95';
import { changeArtist } from '../redux/slices/interfaceSlice';


export default function ArtistTable() {


    const dispatch = useDispatch();

  return (
      <Table>
          <TableHead>
              <TableRow head>
                  <TableHeadCell>Rank</TableHeadCell>
                  <TableHeadCell>Artist Name</TableHeadCell>
                  <TableHeadCell disabled> Emoji</TableHeadCell>
              </TableRow>
          </TableHead>
          <TableBody>
              <TableRow onClick={() => { dispatch(changeArtist('https://open.spotify.com/embed/artist/3TVXtAsR1Inumwj472S9r4?utm_source=generator'))}}>
                  <TableDataCell style={{ textAlign: 'center' }} >1</TableDataCell>
                  <TableDataCell>Drake</TableDataCell>
                  <TableDataCell style={{ textAlign: 'center' }}>
                      <span role='img' aria-label='pregnant'>
                          🤰
                      </span>
                  </TableDataCell>
              </TableRow>
              <TableRow onClick={() => { dispatch(changeArtist('https://open.spotify.com/embed/artist/5K4W6rqBFWDnAN6FQUkS6x?utm_source=generator')) }}>
                  <TableDataCell style={{ textAlign: 'center' }} >2</TableDataCell>
                  <TableDataCell>Kanye West</TableDataCell>
                  <TableDataCell style={{ textAlign: 'center' }}>
                      <span role='img' aria-label='church'>
                          ⛪
                      </span>
                  </TableDataCell>
              </TableRow>
              <TableRow onClick={() => { dispatch(changeArtist('https://open.spotify.com/embed/artist/6l3HvQ5sa6mXTsMTB19rO5?utm_source=generator')) }}>
                  <TableDataCell style={{ textAlign: 'center' }} >3</TableDataCell>
                  <TableDataCell>J Cole</TableDataCell>
                  <TableDataCell style={{ textAlign: 'center' }}>
                      <span role='img' aria-label='brain'>
                          🧠
                      </span>
                  </TableDataCell>
              </TableRow>
              <TableRow onClick={() => { dispatch(changeArtist('https://open.spotify.com/embed/artist/2YZyLoL8N0Wb9xBt1NhZWg?utm_source=generator')) }}>
                  <TableDataCell style={{ textAlign: 'center' }} >4</TableDataCell>
                  <TableDataCell>Kendrick Lamar</TableDataCell>
                  <TableDataCell style={{ textAlign: 'center' }}>
                      <span role='img' aria-label='art'>
                          🎨
                      </span>
                  </TableDataCell>
              </TableRow>
              <TableRow onClick={() => { dispatch(changeArtist('https://open.spotify.com/embed/artist/55Aa2cqylxrFIXC767Z865?utm_source=generator')) }}>
                  <TableDataCell style={{ textAlign: 'center' }} >5</TableDataCell>
                  <TableDataCell>Lil Wayne</TableDataCell>
                  <TableDataCell style={{ textAlign: 'center' }}>
                      <span role='img' aria-label='fire'>
                          🍭
                      </span>
                  </TableDataCell>
              </TableRow>
          </TableBody>
      </Table>
  )
}
