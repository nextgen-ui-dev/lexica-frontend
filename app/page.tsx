import Example from "./components/home/Example";
import HydrationHandler from "./components/core/layout/HydrationHandler";

export default function Home() {

  return (
    <HydrationHandler>
      <Example />
    </HydrationHandler>
  )
}
