import { useRouter } from 'next/router';
import { useFetchDietDetails } from '@/hooks/useFetchDietDetails';
import { LoadingComponent } from '@/components/UI/Atoms/LoadingComponent';
import { CustomAlert } from '@/components/UI/Atoms/Alerts';
import TableDiet from '@/components/UI/Molecules/TableDiet';
import { Navbar } from '@/components/UI/Organisms/Navbar';
import { FiArrowLeft } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const DietDisplayPage = () => {
  const router = useRouter();
  const { dietId } = router.query;
  const { data: dietDetails, isLoading, isError } = useFetchDietDetails(dietId as string);

  useEffect(() => {
    if (!dietDetails && !isLoading && isError) {
      router.push('/');
      <CustomAlert severity="error">Detalhes da dieta não encontrados.</CustomAlert>
    }
  }, [dietDetails, isLoading, isError, router]);

  const handleBack = () => {
    router.push('/');
  };

  if (isLoading) return <LoadingComponent />;

  return (
    <>
      <Navbar />
      <div className="p-10">
        <div className="container mx-auto">
          <div className="flex items-center justify-center">
            <button 
              className="absolute left-10 top-30 text-teal-700 hover:text-teal-900 text-3xl"
              onClick={handleBack}
            >
              <FiArrowLeft />
            </button>
            <h1 className="text-4xl font-bold text-center">Detalhes da Dieta</h1>
          </div>
          {dietDetails && (
            <div className="flex flex-col items-center justify-center">
              <TableDiet dietDetails={dietDetails} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DietDisplayPage;