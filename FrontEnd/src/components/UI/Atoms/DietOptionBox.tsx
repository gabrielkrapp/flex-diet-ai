import { DietOptionBoxProps } from '@/interfaces/DietOptionBoxProps';
import { getDietIcon } from '@/functions/get-diet-icon';

export const DietOptionBox: React.FC<DietOptionBoxProps> = ({
  title,
  isSelected,
  onSelect,
}) => {

  return (
    <div 
      className={`group flex items-center justify-start p-4 border-2 rounded-lg cursor-pointer transition-colors duration-300 
        ${isSelected ? 'bg-[#18E1C2] text-white border-[#18E1C2]' : 'bg-white text-gray-600 border-gray-600'}
        hover:bg-[#18E1C2] hover:border-[#18E1C2]`}
      onClick={onSelect}
    >
      {getDietIcon(title, isSelected)}
      <div className="ml-4">
        <h3 className={`text-lg font-semibold group-hover:text-white ${isSelected ? 'text-white' : 'text-gray-600'}`}>{title}</h3>
      </div>
    </div>
  );
};
