import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DietDetail } from '@/interfaces/DietDetailProps';
import { TableRowData } from '@/interfaces/TableRowDataProps';

interface TableDietProps {
  dietDetails: DietDetail;
}

export default function TableDiet({ dietDetails }: TableDietProps) {
  function createRow(meal: string, description: string): TableRowData {
    return { meal, description };
  }

  const rows = [
    createRow('Café da Manhã', dietDetails.breakfast),
    createRow('Almoço', dietDetails.lunch),
    createRow('Jantar', dietDetails.dinner)
  ];

  return (
    <TableContainer component={Paper} className="shadow-lg rounded-lg overflow-hidden my-5">
      <Table className="min-w-full">
        <TableHead className="bg-teal-700">
          <TableRow>
            <TableCell className="text-white font-bold" style={{ width: '30%' }}>Refeição</TableCell>
            <TableCell className="text-white font-bold" align="center" style={{ width: '70%' }}>Descrição</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.meal}
              </TableCell>
              <TableCell align="center">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}