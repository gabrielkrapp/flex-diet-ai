import { FoodOptionProps } from '@/interfaces/FoodOptionProps';
import { FoodBox } from '../Atoms/FoodBox';
import { foodItems } from '@/components/statics/foodNames';
import { isFoodDisabled } from '@/functions/food-disabled';
import { getFoodIcon } from '@/functions/get-food-icon';

export const FoodOption: React.FC<FoodOptionProps> = ({ foodSelections, setFoodSelections, selectedDiet }) => {

  const handleSelectFood = (food: string) => {
    setFoodSelections(prevOptions => {
      const updatedOptions = { ...prevOptions };
      updatedOptions[food] = !updatedOptions[food];
      return updatedOptions;
    });
  };;

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-5">
      {foodItems.map(food => (
        <FoodBox
          key={food}
          title={food}
          isSelected={!!foodSelections[food]}
          icon={getFoodIcon(food)}
          onSelect={() => handleSelectFood(food)}
          isDisabled={isFoodDisabled(selectedDiet, food)}
        />
      ))}
    </div>
  );
};