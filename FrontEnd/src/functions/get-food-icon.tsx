import { GiChickenOven, GiManualJuicer, GiMilkCarton, GiSlicedBread } from 'react-icons/gi';
import { FaAppleAlt, FaCarrot, FaEgg, FaFish } from 'react-icons/fa';
import { TbMeat } from 'react-icons/tb';
import { CiWheat } from 'react-icons/ci';
import { PiPlant } from 'react-icons/pi';

export const getFoodIcon = (food: string) => {
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