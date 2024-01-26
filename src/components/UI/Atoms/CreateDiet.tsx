import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { CreateDietProps } from '@/interfaces/CreateDietProps';

export const CreateDiet: React.FC<CreateDietProps> = ({ handleOpenModal }) => {
  return (
    <div 
      className="w-32 h-32 border-2 border-black rounded-lg flex flex-col items-center justify-center font-mono text-sm bg-white hover:border-[#18E1C2] hover:bg-[#18E1C2] hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-200"
      onClick={handleOpenModal}
    >
      <div className="text-4xl mb-2">
        <AddIcon sx={{ fontSize: 40, color: 'inherit' }} />
      </div>
      <p>Criar Dieta</p>
    </div>
  );
};