export interface DietOptionProps {
    dietOptions: string;
    setDietOptions: (option: string) => void;
    setFoodSelections: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
    foodSelections: Record<string, boolean>;
}