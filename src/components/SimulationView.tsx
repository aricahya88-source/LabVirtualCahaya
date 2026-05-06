import { useRef, useState } from "react";
import type { Lab, LabParameters } from "../types/lab";
import { WaveScene, type WaveSceneHandle } from "./WaveScene";
import { ParameterPanel } from "./ParameterPanel";
import { defaultParameters } from "../data/defaultParameters";

type SimulationViewProps = {
  lab: Lab;
};

export function SimulationView({ lab }: SimulationViewProps) {
  const [parameters, setParameters] = useState<LabParameters>(defaultParameters);
  const waveSceneRef = useRef<WaveSceneHandle | null>(null);

  function changeParameters(next: Partial<LabParameters>) {
    setParameters((current) => ({ ...current, ...next }));
  }

  return (
    <section className="simulation-layout">
      <div className="simulation-main">
        <div className="simulation-title-row">
          <div>
            <p className="eyebrow">Simulasi Laser</p>
            <h2>{lab.title}</h2>
            <p>{lab.subtitle}</p>
          </div>
        </div>
        <WaveScene ref={waveSceneRef} labId={lab.id} parameters={parameters} />
      </div>

      <div className="simulation-sidebar">
        <ParameterPanel
          activeLabId={lab.id}
          parameters={parameters}
          onChange={changeParameters}
          onReset={() => setParameters(defaultParameters)}
          onStartAR={() => void waveSceneRef.current?.startAR()}
        />
      </div>
    </section>
  );
}
