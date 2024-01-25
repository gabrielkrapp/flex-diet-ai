import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ModalDietProps } from '@/interfaces/ModalDietProps';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  height: '60%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export const ModalDiet: React.FC<ModalDietProps> = ({ modalOpen, setModalOpen }) => {
  const handleClose = () => setModalOpen(false);

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Modal das dietas
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Inserir as opções pertinentes
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}