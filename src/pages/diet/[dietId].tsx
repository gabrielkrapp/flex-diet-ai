import { useRouter } from 'next/router';
import { useFetchDietDetails } from '@/hooks/useFetchDietDetails';
import { LoadingComponent } from '@/components/UI/Atoms/LoadingComponent';
import { CustomAlert } from '@/components/UI/Atoms/Alerts';

export const DietDisplayPage = () => {
  const router = useRouter();
  const { dietId } = router.query;
  const { data: dietDetails, isLoading, isError } = useFetchDietDetails(dietId);

  if (isLoading) return <LoadingComponent />;
  if (isError) {
    router.push(`/`);
    <CustomAlert severity="error">Ocorreu um erro ao carregar suas dietas.</CustomAlert>
  }

  return (
    <div>
      <h1>Detalhes da Dieta</h1>
      {dietDetails && (
        <div>
          {/* Tabela com detalhes da dieta*/}
        </div>
      )}
    </div>
  );
};