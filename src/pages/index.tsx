import React from 'react';
import { CreateDiet } from "@/components/UI/Atoms/CreateDiet";
import { ShowDiet } from "@/components/UI/Atoms/ShowDiet";
import { Navbar } from "@/components/UI/Organisms/Navbar";
import { LoadingComponent } from '@/components/UI/Atoms/LoadingComponent';
import { useCreateDiet } from '@/functions/create-diet';

function Home() {
  const { mutate, isLoading } = useCreateDiet();

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <main>
      <Navbar />
      <div className="w-full items-center justify-center font-mono text-sm lg:flex mt-5">
        <CreateDiet createDietHandler={() => mutate()} />
        <ShowDiet />
      </div>
    </main>
  );
}

export default Home;