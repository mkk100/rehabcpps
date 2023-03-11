import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default function BladderDiary() {
    function generateTable() {
        const rows = [];

        for (let i = 0, j = 6; i < 18; i++, j++) {
            const hour = j < 12 ? j : j - 12;
            const ampm = j < 12 ? "am" : "pm";
            const time = `${hour === 0 ? "12 " : hour} ${ampm}`;
            rows.push(
                <TableRow>
                    <TableCell align="left">
                        {time}
                    </TableCell>
                    <TableCell align="left">
                        <TextField id="outlined-basic" label="second(sec)" variant="outlined" className='' />
                    </TableCell>
                    <TableCell align="left">
                        <TextField id="outlined-basic" label="ounces(oz)" variant="outlined" />
                    </TableCell>
                    <TableCell align="left">
                        <Checkbox {...label} color="secondary" />
                    </TableCell>
                    <TableCell align="left">
                        <Checkbox {...label} color="secondary" />
                    </TableCell>
                </TableRow>
            )
        }
        return rows;
    }
    return (<div className='mx-auto'>
        <TableContainer component={Paper} >
            <Table sx={{ minWidth: 650 }} aria-label="simple table" className="scale-90">
                <TableHead>
                    <TableRow>
                        <TableCell>Time</TableCell>
                        <TableCell align="left">Void (Urination)</TableCell>
                        <TableCell align="left">Water Intake</TableCell>
                        <TableCell align="left">Bowel</TableCell>
                        <TableCell align="left">Leakage</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {generateTable()}
                </TableBody>
            </Table>
        </TableContainer>
        <Button variant="contained" href="/" className=''>
            Save Changes
        </Button>

    </div>)
}