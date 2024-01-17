import { BIOTIPO_DESCRIPTIONS } from '@/utils/BiotiposDescriptios';
import { BiotipoBox } from '../Atoms/BiotipoBox';
import { BiotipoSelectorProps } from '@/interfaces/BiotipoSelectorProps';

export const BiotipoSelector: React.FC<BiotipoSelectorProps> = ({ selectedBiotipo, onChange }) => {
  return (
    <div className="flex space-x-4">
      <BiotipoBox 
        title="Ectomorfo"
        description={BIOTIPO_DESCRIPTIONS.Ectomorfo}
        imageSrc="/assets/ectomorfo.jpg"
        isSelected={selectedBiotipo === "Ectomorfo"}
        onSelect={() => onChange("Ectomorfo")}
       />
       <BiotipoBox
        title="Mesomorfo"
        description="Breve descrição do Mesomorfo"
        imageSrc={BIOTIPO_DESCRIPTIONS.Mesomorfo}
        isSelected={selectedBiotipo === "Mesomorfo"}
        onSelect={() => onChange("Mesomorfo")}
       />
       <BiotipoBox
        title="Endomorfo"
        description="Breve descrição do Endomorfo"
        imageSrc={BIOTIPO_DESCRIPTIONS.Endomorfo}
        isSelected={selectedBiotipo === "Endomorfo"}
        onSelect={() => onChange("Endomorfo")}
       />
    </div>
    );
};
