import React from 'react';
import { DietOptionBox } from '../Atoms/DietOptionBox';
import { DietOptionProps } from '@/interfaces/DietOptionProps';

export const DietOption: React.FC<DietOptionProps> = ({dietOptions, setDietOptions}) => {

  const handleSelectDiet = (diet: string) => {
    setDietOptions(diet);
  };

  return (
    <div className="flex justify-around items-center space-x-4 mb-4 mt-8">
      <DietOptionBox
        title="Carnívora"
        isSelected={dietOptions === "carnivora"}
        onSelect={() => handleSelectDiet("carnivora")} />
      <DietOptionBox
        title="Vegana"
        isSelected={dietOptions === "vegana"}
        onSelect={() => handleSelectDiet("vegana")}
      />
      <DietOptionBox
        title="Vegetariana"
        isSelected={dietOptions === "vegetariana"}
        onSelect={() => handleSelectDiet("vegetariana")}
      />
    </div>
  );
};