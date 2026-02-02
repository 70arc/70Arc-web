import HeroVector from "@/components/sections/HeroVector";
import Capabilities from "@/components/sections/Capabilities";
import Atmosphere from "@/components/sections/Atmosphere";
import Telemetry from "@/components/sections/Telemetry";
import Transmission from "@/components/sections/Transmission";
import ExitVector from "@/components/sections/ExitVector";

export default function Home() {
  return (
    <main>
      {/* Entry Vector - Hero */}
      <HeroVector />

      {/* Floating Capabilities */}
      <Capabilities />

      {/* Atmosphere Nebula */}
      <Atmosphere />

      {/* Telemetry About */}
      <Telemetry />

      {/* Transmission Contact */}
      <Transmission />

      {/* Exit Vector - Footer */}
      <ExitVector />
    </main>
  );
}
