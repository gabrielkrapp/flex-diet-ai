import { AppName } from "../Atoms/AppName";
import { UserMenuIcon } from "../Molecules/UserMenuIcon";

export const Navbar = () => {

  return (
    <nav className="bg-white shadow-lg py-4">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="flex justify-start">
            <AppName />
          </div>
          <div className="flex justify-end">
            <UserMenuIcon />
          </div>
        </div>
    </nav>
  );
};
