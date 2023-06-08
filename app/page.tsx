import Example from "./components/Example";
import HydrationHandler from "./components/layout/HydrationHandler";

export default function Home() {

  return (
    <main>
      <HydrationHandler>
        <Example />
      </HydrationHandler>
    </main>
  )
}
