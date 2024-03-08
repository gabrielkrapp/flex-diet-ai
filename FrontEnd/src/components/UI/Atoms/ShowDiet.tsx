import { useRouter } from 'next/router';
import { ShowDietProps } from '@/interfaces/ShowDietProps';
import React from 'react';

export const ShowDiet: React.FC<ShowDietProps> = ({ diets }) => {
  const router = useRouter();

  const navigateToDietDetails = (dietId: string) => {
    router.push({
      pathname: `/diet/${dietId}`
    });
  };

  return (
    <div className="flex flex-wrap justify-start items-center m-4">
      {diets.map((diet, index) => (
        <div
          key={diet.id}
          onClick={() => navigateToDietDetails(diet.id)}
          className="w-32 h-32 m-2 border-2 border-black rounded-lg flex justify-center items-center font-mono text-sm bg-white hover:border-[#18E1C2] hover:bg-[#18E1C2] hover:text-white cursor-pointer transform hover:scale-110 transition-transform"
        >
          <div className="text-center p-2">
            <div>{`Dieta ${index + 1}`}</div>
          </div>
        </div>
      ))}
    </div>
  );
};