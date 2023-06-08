import Example from "./components/Example";
import HydrationHandler from "./components/layout/HydrationHandler";

export default function Home() {

  return (
    <HydrationHandler>
      <Example />
    </HydrationHandler>
  )
}
