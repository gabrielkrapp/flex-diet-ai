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
    className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors duration-300 
    ${isSelected ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-gray-600 border-gray-600'}
    hover:bg-gray-800 hover:border-gray-800 hover:text-white`}
      onClick={onSelect}
    >
      <img src={imageSrc} alt={title} className="w-16 h-16 mr-4" />
      <div>
        <h3 className={`text-lg font-semibold ${isSelected ? 'text-white' : 'text-gray-600'}`}>{title}</h3>
        <p className={`text-sm ${isSelected ? 'text-white' : 'text-gray-600'}`}>{description}</p>
      </div>
    </div>
  );
};