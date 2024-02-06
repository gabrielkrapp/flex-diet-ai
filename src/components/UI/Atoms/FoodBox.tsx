import { FoodBoxProps } from "@/interfaces/FoodBoxProps";

export const FoodBox: React.FC<FoodBoxProps> = ({
  title,
  isSelected,
  onSelect,
  icon,
  isDisabled
}) => {
  return (
    <div 
      className={`group flex items-center justify-start p-4 border-2 rounded-lg transition-colors duration-300 
      ${isSelected ? 'bg-[#18E1C2] text-white border-[#18E1C2]' : 'bg-white text-gray-600 border-gray-600'}
      ${!isDisabled && 'hover:bg-[#18E1C2] hover:border-[#18E1C2]'} 
      ${isDisabled ? 'bg-white border-gray-600 opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      onClick={!isDisabled ? onSelect : undefined}
    >
      <span className={`text-2xl ${isDisabled ? 'text-gray-600' : 'group-hover:text-white'}`}>{icon}</span>
      <div className="ml-4">
        <h3 className={`text-lg font-semibold ${isDisabled ? 'text-gray-600' : 'group-hover:text-white'}`}>{title}</h3>
      </div>
    </div>
  );
};
