import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { UserMenuProps } from '@/interfaces/UserMenuProps';

export default function UserMenu({ openMenu, setMenuOpen }: UserMenuProps) {
  const isOpen = Boolean(openMenu);
  const handleCloseMenu = () => {
    setMenuOpen(null);
  };

  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={openMenu}
        open={isOpen}
        onClose={handleCloseMenu}
        PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
        <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
      </Menu>
    </div>
  );
}