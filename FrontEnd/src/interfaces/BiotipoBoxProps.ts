export interface BiotipoBoxProps {
    title: string;
    description: string;
    imageSrc: string;
    isSelected: boolean;
    onSelect: () => void;
}