import { BiotipoBoxProps } from "@/interfaces/BiotipoBoxProps";

export const BiotipoBox: React.FC<BiotipoBoxProps> = ({
  title,
  description,
  imageSrc,
  isSelected,
  onSelect,
}) => {
  return (
    <div 
      className={`group flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors duration-300 
        ${isSelected ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-gray-600 border-gray-600'}
        hover:bg-blue-700 hover:border-blue-700`}
      onClick={onSelect}
    >
      <img src={imageSrc} alt={title} className="w-16 h-16 mr-4" />
      <div>
        <h3 className={`text-lg font-semibold group-hover:text-white ${isSelected ? 'text-white' : 'text-gray-600'}`}>{title}</h3>
        <p className={`text-sm group-hover:text-white ${isSelected ? 'text-white' : 'text-gray-600'}`}>{description}</p>
      </div>
    </div>
  );
};