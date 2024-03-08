import * as React from 'react';
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
    <div className="overflow-x-auto relative shadow-lg rounded-lg bg-gradient-to-b from-white to-17AD9F dark:from-gray-800 dark:to-gray-700">
      <table className="w-full text-sm text-left text-gray-700 dark:text-gray-400">
        <thead className="text-xs uppercase bg-gradient-to-r from-gray-100 to-17AD9F dark:from-gray-700 dark:to-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6 font-medium">
              Refeição
            </th>
            <th scope="col" className="py-3 px-6 font-medium">
              Descrição
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="py-4 px-6 whitespace-nowrap">
                {row.meal}
              </td>
              <td className="py-4 px-6">
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}