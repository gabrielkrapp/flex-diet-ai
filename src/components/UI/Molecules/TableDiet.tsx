import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../../../styles/TableDiet.css';

function createRow(
  meal: string,
  description: string,
  calories: number,
) {
  const formattedDescription = description.replace(/, /g, "\n");
  return { meal, description, calories, formattedDescription };
}

const rows = [
  createRow('Café da Manhã', 'Ovos mexidos (3 unidades), Pão integral (2 fatias), Aveia (3 colheres de sopa), Banana (1 unidade), Leite integral (1 copo)', 350),
  createRow('Almoço', 'Arroz integral (1 xícara), Feijão (1 concha), Peito de frango grelhado (150g), Brócolis cozidos (1 xícara), Abacate (1/2 unidade)', 450),
  createRow('Jantar', 'Quinoa cozida (1 xícara), Salmão grelhado (150g), Aspargos grelhados (1 xícara), Batata doce cozida (1 média)', 400)
];

export default function TableDiet() {
  return (
    <TableContainer component={Paper} className="shadow-lg rounded-lg overflow-hidden my-5">
      <Table className="min-w-full">
        <TableHead className="bg-teal-700">
          <TableRow>
            <TableCell className="text-white font-bold" style={{ width: '20%' }}>Refeição</TableCell>
            <TableCell className="text-white font-bold" align="center" style={{ width: '50%' }}>Alimentos</TableCell>
            <TableCell className="text-white font-bold" align="center" style={{ width: '30%' }}>Calorias</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.meal} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.meal}
              </TableCell>
              <TableCell align="center" className="description-cell">{row.formattedDescription}</TableCell>
              <TableCell align="center">{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}