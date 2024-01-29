import React from 'react';
import { DietOptionBox } from '../Atoms/DietOptionBox';
import { DietOptionProps } from '@/interfaces/DietOptionProps';
import { dietItems } from '@/statics/dietNames';

export const DietOption: React.FC<DietOptionProps> = ({dietOptions, setDietOptions}) => {

  const handleSelectDiet = (diet: string) => {
    setDietOptions(diet);
  };

  return (
    <div className="flex justify-around items-center space-x-4 mb-4 mt-8">
      {dietItems.map(dietName => (
        <DietOptionBox
          key={dietName}
          title={dietName}
          isSelected={dietOptions === dietName.toLowerCase()}
          onSelect={() => handleSelectDiet(dietName.toLowerCase())}
        />
      ))}
    </div>
  );
};