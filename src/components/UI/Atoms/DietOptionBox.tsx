import { MdOutlineFastfood, MdOutlineGrass, MdOutlineLocalFlorist } from 'react-icons/md';
import { DietOptionBoxProps } from '@/interfaces/DietOptionBoxProps';

export const DietOptionBox: React.FC<DietOptionBoxProps> = ({
  title,
  isSelected,
  onSelect,
}) => {
  const getIcon = (title: string) => {
    const iconClassName = `w-6 h-6 ${isSelected || 'group-hover:text-white'}`;
    switch (title) {
      case 'Carnívora':
        return <MdOutlineFastfood className={iconClassName} />;
      case 'Vegana':
        return <MdOutlineGrass className={iconClassName} />;
      case 'Vegetariana':
        return <MdOutlineLocalFlorist className={iconClassName} />;
      default:
        return null;
    }
  };

  return (
    <div 
      className={`group flex items-center justify-start p-4 border-2 rounded-lg cursor-pointer transition-colors duration-300 
        ${isSelected ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-gray-600 border-gray-600'}
        hover:bg-blue-700 hover:border-blue-700`}
      onClick={onSelect}
    >
      {getIcon(title)}
      <div className="ml-4">
        <h3 className={`text-lg font-semibold group-hover:text-white ${isSelected ? 'text-white' : 'text-gray-600'}`}>{title}</h3>
      </div>
    </div>
  );
};
