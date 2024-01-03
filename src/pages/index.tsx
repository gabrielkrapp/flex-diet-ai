import { useEffect, useState } from 'react';
import { CreateDiet } from "@/components/UI/Atoms/CreateDiet";
import { ShowDiet } from "@/components/UI/Atoms/ShowDiet";
import { Navbar } from "@/components/UI/Organisms/Navbar";
import { LoadingComponent } from '@/components/UI/Atoms/LoadingComponent';
import { useCreateDiet } from '@/hooks/useCreateDiets';
import { useFetchDiets } from '@/hooks/useFetchDiets';
import { CustomAlert } from '@/components/UI/Atoms/Alerts';

function Home() {
  const { mutate, isLoading, isError } = useCreateDiet();
  const { data: diets, refetch } = useFetchDiets();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    refetch();
  }, []);

  const handleCreateDiet = () => {
    mutate();
  };

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <main>
      <Navbar />
      {isError && (
        <CustomAlert severity="error">Ocorreu um erro ao carregar suas dietas.</CustomAlert>
      )}
      <div className="w-full items-center justify-center font-mono text-sm lg:flex mt-5">
        <CreateDiet createDietHandler={handleCreateDiet} />
        {diets && diets.length > 0 && <ShowDiet diets={diets} />}
      </div>
    </main>
  );
}

export default Home;