import { FoodBoxProps } from '@/interfaces/FoodBoxProps';

export const FoodBox: React.FC<FoodBoxProps> = ({
  title,
  isSelected,
  onSelect,
  icon
}) => {

  const iconClassName = `text-2xl ${isSelected || 'group-hover:text-white'}`;

  return (
    <div 
      className={`group flex items-center justify-start p-4 border-2 rounded-lg cursor-pointer transition-colors duration-300 
        ${isSelected ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-gray-600 border-gray-600'}
        hover:bg-blue-700 hover:border-blue-700`}
      onClick={onSelect}
    >
      <span className={iconClassName}>{icon}</span>
      <div className="ml-4">
        <h3 className={`text-lg font-semibold group-hover:text-white ${isSelected ? 'text-white' : 'text-gray-600'}`}>{title}</h3>
      </div>
    </div>
  );
}