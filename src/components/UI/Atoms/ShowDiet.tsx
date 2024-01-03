import { ShowDietProps } from '@/interfaces/ShowDietProps';
import React from 'react';

export const ShowDiet: React.FC<ShowDietProps> = ({ diets }) => {
  return (
    <div>
      {diets.map((diet, index) => (
        <div key={index} className="w-32 h-32 border-2 border-black rounded-lg flex flex-col items-center justify-center font-mono text-sm bg-white hover:border-[#18E1C2] hover:bg-[#18E1C2] hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-200 ml-10">
          <p>{diet.name}</p>
        </div>
      ))}
    </div>
  );
};