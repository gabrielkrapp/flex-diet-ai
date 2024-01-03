import { CreateDiet } from "@/components/UI/Atoms/CreateDiet"
import { ShowDiet } from "@/components/UI/Atoms/ShowDiet"
import { Navbar } from "@/components/UI/Organisms/Navbar"

function Home() {
  return (
    <main>
      <Navbar />
      <div className="w-full items-center justify-center font-mono text-sm lg:flex mt-5">
        <CreateDiet />
        <ShowDiet />
      </div>
    </main>
  )
}

export default Home