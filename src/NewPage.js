import React from 'react';
import { Table, TableHead, TableBody, TableCell, TableRow } from '@material-ui/core';

function NewPage({ loginStatus }) {

   //

   return (
      <>
               <h1>New Page</h1>
      <Table>
         <TableHead>
            <TableCell>Student Name</TableCell>
            <TableCell>Student Number</TableCell>
            <TableCell>A</TableCell>
            <TableCell>A</TableCell>
         </TableHead>
         <TableBody>
            <TableRow>
               <TableCell>
                  ABC
               </TableCell>
               <TableCell>
                  ABC
               </TableCell>
            </TableRow>
         </TableBody>
      </Table>

      </>

   );
}

export default NewPage;
