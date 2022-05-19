import {

    Table,
    TableDataCell,
    TableHead,
    TableRow,
    TableHeadCell,
    TableBody
} from 'react95';


export default function ArtistTable() {
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
              <TableRow>
                  <TableDataCell style={{ textAlign: 'center' }} >1</TableDataCell>
                  <TableDataCell>Drake</TableDataCell>
                  <TableDataCell style={{ textAlign: 'center' }}>
                      <span role='img' aria-label='pregnant'>
                          🤰
                      </span>
                  </TableDataCell>
              </TableRow>
              <TableRow>
                  <TableDataCell style={{ textAlign: 'center' }} >2</TableDataCell>
                  <TableDataCell>Kanye West</TableDataCell>
                  <TableDataCell style={{ textAlign: 'center' }}>
                      <span role='img' aria-label='church'>
                          ⛪
                      </span>
                  </TableDataCell>
              </TableRow>
              <TableRow>
                  <TableDataCell style={{ textAlign: 'center' }} >3</TableDataCell>
                  <TableDataCell>J Cole</TableDataCell>
                  <TableDataCell style={{ textAlign: 'center' }}>
                      <span role='img' aria-label='brain'>
                          🧠
                      </span>
                  </TableDataCell>
              </TableRow>
              <TableRow>
                  <TableDataCell style={{ textAlign: 'center' }} >4</TableDataCell>
                  <TableDataCell>Kendrick Lamar</TableDataCell>
                  <TableDataCell style={{ textAlign: 'center' }}>
                      <span role='img' aria-label='art'>
                          🎨
                      </span>
                  </TableDataCell>
              </TableRow>
              <TableRow>
                  <TableDataCell style={{ textAlign: 'center' }} >5</TableDataCell>
                  <TableDataCell>Travis Scott</TableDataCell>
                  <TableDataCell style={{ textAlign: 'center' }}>
                      <span role='img' aria-label='fire'>
                          🔥
                      </span>
                  </TableDataCell>
              </TableRow>
          </TableBody>
      </Table>
  )
}
