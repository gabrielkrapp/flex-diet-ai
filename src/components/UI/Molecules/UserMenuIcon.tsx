import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UserMenu from './UserMenu';
import { useState } from 'react';

export const UserMenuIcon = () => {
  const [openMenu, setMenuOpen] = useState<Element | null>(null);

  const openUserMenu = (event: React.MouseEvent<Element>) => {
    setMenuOpen(event.currentTarget);
  };

  return (
    <>
      <AccountCircleIcon 
        sx={{ 
          fontSize: 40,
          cursor: 'pointer',
          '&:hover': {
            color: 'primary.main',
            transform: 'scale(1.1)',
          }
        }} 
        onClick={openUserMenu}
      />
      <UserMenu openMenu={openMenu} setMenuOpen={setMenuOpen} />
    </>
  );
}