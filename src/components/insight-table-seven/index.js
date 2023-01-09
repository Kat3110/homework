import * as React from 'react';
import './insight-table-seven.css'
import InsightTitle from "../insight-title";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CapitalLetter from "../capital-letter";
import Button from "../button";

function InsightTableSeven(props) {

    function createData(rank, pm, authority, joined, text, emoji, image, link, video, file, time, access) {
        return {rank, pm, authority, joined, text, emoji, image, link, video, file, time, access};
    }

    const rows = [
        createData(
            1,
            {
                name: 'Aron H.',
                color: '#00A3FF',

            },
            'Manager',
            50,
            50,
            50,
            50,
            50,
            50,
            50,
            '10 minutes (average)',
            '10 min. ago'
        ),
        createData(
            2,
            {
                name: 'Yves Saint Laurent',
                color: '#8F00FF',

            },
            'Manager',
            50,
            50,
            50,
            50,
            50,
            50,
            50,
            '10 minutes (average)',
            '20 min. ago'
        ),
        createData(
            3,
            {
                name: 'Angelica',
                color: '#00A3FF',

            },
            'Manager',
            50,
            50,
            50,
            50,
            50,
            50,
            50,
            '10 minutes (average)',
            '30 min. ago'
        ),
        createData(
            4,
            {
                name: 'EDGAR',
                color: '#00A3FF',

            },
            'Manager',
            50,
            50,
            50,
            50,
            50,
            50,
            50,
            '10 minutes (average)',
            '1 hour ago'
        ),
        createData(
            5,
            {
                name: 'Hubert Benjamin',
                color: '#00E99E',

            },
            'Manager',
            50,
            50,
            50,
            50,
            50,
            50,
            50,
            '10 minutes (average)',
            '2 hours ago'
        ),
    ];

    const rowsHead = [
        'Rank', 'User', 'Authority', 'Joined', 'Text', 'Emoji', 'Images', 'Link', 'Video', 'File', 'Response time', 'Last access'
    ]

    return (
        <div className='insight-table'>
            <InsightTitle title={props.title} image={props.image} />
            <Button text='See all' />
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {rowsHead.map((row, index) => (
                                <TableCell align="left"
                                    key={index}
                                >{row}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left">{row.rank}</TableCell>
                                <TableCell align="left"
                                           sx={{
                                               display: 'flex',
                                               alignItems: 'center',
                                               gap: '0 5px'
                                }}>
                                    <CapitalLetter letter={row.pm.name[0]} bgColor={row.pm.color}/> {row.pm.name}
                                </TableCell>
                                <TableCell align="left">{row.authority}</TableCell>
                                <TableCell align="left">{row.joined}</TableCell>
                                <TableCell align="left">{row.text}</TableCell>
                                <TableCell align="left">{row.emoji}</TableCell>
                                <TableCell align="left">{row.image}</TableCell>
                                <TableCell align="left">{row.link}</TableCell>
                                <TableCell align="left">{row.video}</TableCell>
                                <TableCell align="left">{row.file}</TableCell>
                                <TableCell align="left">{row.time}</TableCell>
                                <TableCell align="left">{row.access}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default InsightTableSeven;


