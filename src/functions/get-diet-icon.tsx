import { MdOutlineFastfood, MdOutlineGrass, MdOutlineLocalFlorist } from "react-icons/md";

export const getDietIcon = (title: string, isSelected: boolean) => {
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
