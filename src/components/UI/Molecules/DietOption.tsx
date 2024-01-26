import React, { useState } from 'react';
import { DietOptionBox } from '../Atoms/DietOptionBox';
import { DietOptionProps } from '@/interfaces/DietOptionProps';

export const DietOption: React.FC<DietOptionProps> = () => {
  const [selectedDiet, setSelectedDiet] = useState('');

  const handleSelectDiet = (diet: string) => {
    setSelectedDiet(diet);
  };

  return (
    <div className="flex justify-around items-center space-x-4 mb-4 mt-8">
      <DietOptionBox
        title="Carnívora"
        isSelected={selectedDiet === "carnivora"}
        onSelect={() => handleSelectDiet("carnivora")} />
      <DietOptionBox
        title="Vegana"
        isSelected={selectedDiet === "vegana"}
        onSelect={() => handleSelectDiet("vegana")}
      />
      <DietOptionBox
        title="Vegetariana"
        isSelected={selectedDiet === "vegetariana"}
        onSelect={() => handleSelectDiet("vegetariana")}
      />
    </div>
  );
};