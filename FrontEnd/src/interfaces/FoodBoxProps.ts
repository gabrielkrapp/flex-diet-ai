export interface FoodBoxProps {
    title: string;
    isSelected: boolean;
    onSelect: () => void;
    icon: React.ReactNode;
    isDisabled: boolean;
}