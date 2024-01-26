import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { ModalDietProps } from '@/interfaces/ModalDietProps';
import { useCreateDiet } from '@/hooks/useCreateDiets';
import { DietOption } from './DietOption';
import { useState } from 'react';
import { Button, Typography } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  height: '70%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

export const ModalDiet: React.FC<ModalDietProps> = ({ modalOpen, setModalOpen }) => {
  const handleClose = () => setModalOpen(false);
  const { mutate, isLoading, isError } = useCreateDiet();
  const [dietOptions, setDietOptions] = useState('');

  const handleCreateDiet = () => {
    mutate(dietOptions);
    setModalOpen(false)
  };

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Typography variant="h6" className="text-lg font-semibold text-center text-gray-800 mb-3">Selecione um tipo de dieta</Typography>
          <DietOption dietOptions={dietOptions} setDietOptions={setDietOptions} />
          <Button 
            variant="outlined"
            color="inherit"
            onClick={() => handleCreateDiet()}
            sx={{ 
              mt: 10, 
              display: 'block', 
              width: '50%', 
              marginLeft: 'auto', 
              marginRight: 'auto',
              borderColor: '#000',
              color: '#000',
              '&:hover': {
                borderColor: 'primary.main',
                backgroundColor: 'primary.main',
                color: '#fff',
              }
            }}
          >
            Criar dieta
          </Button>
        </Box>
      </Modal>
    </div>
  );
};