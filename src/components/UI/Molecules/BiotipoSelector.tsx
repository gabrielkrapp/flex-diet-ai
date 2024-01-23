import { BIOTIPO_DESCRIPTIONS } from '@/utils/BiotiposDescriptios';
import { BiotipoBox } from '../Atoms/BiotipoBox';
import { BiotipoSelectorProps } from '@/interfaces/BiotipoSelectorProps';

export const BiotipoSelector: React.FC<BiotipoSelectorProps> = ({ onChange, selectedBiotipo, error, errorMessage }) => {

  return (
    <div className="flex flex-col space-y-4 pr-20 pl-20">
      <BiotipoBox 
        title="Ectomorfo"
        description={BIOTIPO_DESCRIPTIONS.Ectomorfo}
        imageSrc="/assets/ectomorfo.png"
        isSelected={selectedBiotipo === "Ectomorfo"}
        onSelect={() => onChange("Ectomorfo")}
       />
       <BiotipoBox
        title="Mesomorfo"
        description={BIOTIPO_DESCRIPTIONS.Mesomorfo}
        imageSrc="/assets/mesomorfo.png"
        isSelected={selectedBiotipo === "Mesomorfo"}
        onSelect={() => onChange("Mesomorfo")}
       />
       <BiotipoBox
        title="Endomorfo"
        description={BIOTIPO_DESCRIPTIONS.Endomorfo}
        imageSrc="/assets/endomorfo.png"
        isSelected={selectedBiotipo === "Endomorfo"}
        onSelect={() => onChange("Endomorfo")}
       />
      {error && (
        <p className="text-red-600 text-sm mt-2">{errorMessage}</p>
      )}
    </div>
    );
};
