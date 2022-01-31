import React from "react"; import { TableHead, Paper, Table, TableContainer, TableRow, TableCell, TableBody } from '@material-ui/core'
import _ from "underscore";
import Shimmer from "react-js-loading-shimmer";

const Point = (props) => {
    return (<>
        <div className="col-lg-12 col-12">

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead style={{ backgroundColor: "#d31f33" }}>
                        <TableRow  >
                            <TableCell style={{ fontSize: "15px", color: "white", fontWeight: "bolder" }}>Total Points</TableCell>
                            <TableCell style={{ fontSize: "15px", color: "white", fontWeight: "bolder" }}>{_.isEmpty(props.data)?<Shimmer/>:props.data.total_point}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                            key=''
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >  <TableCell component="th" scope="row">Dip in</TableCell>
                            <TableCell align="right" style={{ fontSize: "10px" }}>{_.isEmpty(props.data)?<Shimmer/>:props.data.dipin}</TableCell>
                        </TableRow>
                        <TableRow
                            key=''
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >  <TableCell component="th" scope="row">Dip-out</TableCell>
                            <TableCell align="right" style={{ fontSize: "10px" }}>{_.isEmpty(props.data)?<Shimmer/>:props.data.shoutin}</TableCell>
                        </TableRow>
                        <TableRow
                            key=''
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >  <TableCell component="th" scope="row">Reviews</TableCell>
                            <TableCell align="right" style={{ fontSize: "10px" }}>{_.isEmpty(props.data)?<Shimmer/>:props.data.feedback}</TableCell>
                        </TableRow>
                        <TableRow
                            key=''
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >  <TableCell component="th" scope="row">Inviting Friends</TableCell>
                            <TableCell align="right" style={{ fontSize: "10px" }}>{_.isEmpty(props.data)?<Shimmer/>:props.data.invite}</TableCell>
                        </TableRow>
                        <TableRow
                            key=''
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >  <TableCell component="th" scope="row">Ordering</TableCell>
                            <TableCell align="right" style={{ fontSize: "10px" }}>{_.isEmpty(props.data)?<Shimmer/>:props.data.order}</TableCell>
                        </TableRow>
                        <TableRow
                            key=''
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >  <TableCell component="th" scope="row">Table Booking</TableCell>
                            <TableCell align="right" style={{ fontSize: "10px" }}>{_.isEmpty(props.data)?<Shimmer/>:props.data.total_point}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    </>)
}
export default Point