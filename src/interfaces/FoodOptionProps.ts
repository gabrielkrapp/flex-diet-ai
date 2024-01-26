export interface FoodOptionProps {
  foodSelections: Record<string, boolean>;
  setFoodSelections: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}