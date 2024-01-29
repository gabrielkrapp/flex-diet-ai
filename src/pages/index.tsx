import { useEffect, useState } from 'react';
import { CreateDiet } from "@/components/UI/Atoms/CreateDiet";
import { ShowDiet } from "@/components/UI/Atoms/ShowDiet";
import { Navbar } from "@/components/UI/Organisms/Navbar";
import { LoadingComponent } from '@/components/UI/Atoms/LoadingComponent';
import { useCreateDiet } from '@/hooks/useCreateDiets';
import { useFetchDiets } from '@/hooks/useFetchDiets';
import { CustomAlert } from '@/components/UI/Atoms/Alerts';
import { ModalDiet } from '@/components/UI/Molecules/ModalDiet';

function Home() {
  const { data: diets, refetch, isLoading, isError } = useFetchDiets();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    //refetch();
  }, []);

  // if (isLoading) return <LoadingComponent />;

  const handleOpenModal = () => {
    setModalOpen(true)
  }

  return (
    <main>
      <Navbar />
      {isError && (
        <CustomAlert severity="error">Ocorreu um erro ao carregar suas dietas.</CustomAlert>
      )}
      <div className="w-full items-center justify-center font-mono text-sm lg:flex mt-5">
        <CreateDiet handleOpenModal={handleOpenModal} />
        {diets && diets.length > 0 && <ShowDiet diets={diets} />}
      </div>
      <ModalDiet setModalOpen={setModalOpen} modalOpen={modalOpen} />
    </main>
  );
}

export default Home;