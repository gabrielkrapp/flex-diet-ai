import { FoodOptionProps } from '@/interfaces/FoodOptionProps';
import { FoodBox } from '../Atoms/FoodBox';
import { GiChickenOven, GiManualJuicer, GiMilkCarton, GiSlicedBread } from 'react-icons/gi';
import { FaAppleAlt, FaCarrot, FaEgg, FaFish } from 'react-icons/fa';
import { TbMeat } from 'react-icons/tb';
import { CiWheat } from 'react-icons/ci';
import { PiPlant } from 'react-icons/pi';

export const FoodOption: React.FC<FoodOptionProps> = ({ foodSelections, setFoodSelections, selectedDiet }) => {

  const handleSelectFood = (food: string) => {
    setFoodSelections(prevOptions => {
      const updatedOptions = { ...prevOptions };
      updatedOptions[food] = !updatedOptions[food];
      return updatedOptions;
    });
  };;

  const getIcon = (food: string) => {
    switch (food) {
      case 'Aves':
        return <GiChickenOven className="w-8 h-8" />;
      case 'Peixe':
        return <FaFish className="w-8 h-8" />;
      case 'Carne':
        return <TbMeat className="w-8 h-8" />;
      case 'Leite':
        return <GiMilkCarton className="w-8 h-8" />;
      case 'Fruta':
        return <FaAppleAlt className="w-8 h-8" />;
      case 'Legumes':
        return <FaCarrot className="w-8 h-8" />;
      case 'Ovo':
        return <FaEgg className="w-8 h-8" />;
      case 'Cereais':
        return <CiWheat className="w-8 h-8" />;
      case 'Pães':
        return <GiSlicedBread className="w-8 h-8" />;
      case 'Suco':
        return <GiManualJuicer className="w-8 h-8" />;
      case 'Vegetais':
        return <PiPlant className="w-8 h-8" />;
      default:
        return null;
    }
  };

  const foodItems = [
    "Aves", "Peixe", "Carne", "Leite", "Fruta", "Legumes", "Ovo", "Cereais", "Pães", "Suco", "Vegetais"
  ];

  const isDisabled = (food: string) => {
    if (selectedDiet === "vegana" && ["Aves", "Peixe", "Carne", "Leite", "Ovo"].includes(food)) {
      return true;
    }
    if (selectedDiet === "vegetariana" && ["Aves", "Peixe", "Carne"].includes(food)) {
      return true;
    }
    return false;
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-5">
      {foodItems.map(food => (
        <FoodBox
          key={food}
          title={food}
          isSelected={!!foodSelections[food]}
          icon={getIcon(food)}
          onSelect={() => handleSelectFood(food)}
          isDisabled={isDisabled(food)}
        />
      ))}
    </div>
  );
};