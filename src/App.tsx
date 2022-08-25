import * as React from "react";
import "./styles.css";
import { UPlot } from "react-uplot";
import tooltipPlugin from "./plugin";
import uPlot from "uplot";
export default function App() {
  const sync = {
    cursor: {
      sync: {
        key: "charts"
      }
    }
  };

  return (
    <div className="App">
      <UPlot
        options={{
          height: 400,
          width: 400,
          ...sync,
          series: [
            {},
            {
              stroke: "black",
              label: "CTR"
            }
          ],
          plugins: [tooltipPlugin()]
        }}
        data={[
          [0, 1, 2, 3, 4],
          [2, 2.1, 2.6, 2.8, 3]
        ]}
      />
      <UPlot
        options={{
          height: 400,
          width: 400,
          ...sync,
          series: [
            {},
            {
              stroke: "black",
              label: "CTR",
              paths: uPlot.paths.bars()
            }
          ]
          // plugins: [tooltipPlugin()]
        }}
        data={[
          [0, 1, 2, 3, 4],
          [2, 2.1, 2.6, 2.8, 3]
        ]}
      />
      <UPlot
        options={{
          height: 400,
          width: 400,
          ...sync,
          series: [
            {},
            {
              stroke: "red",
              fill: "rgba(255,0,0,0.1)"
            }
          ]
          // plugins: [tooltipPlugin()]
        }}
        data={[
          [0, 1, 2, 3, 4],
          [2, 2.1, 2.6, 2.8, 3]
        ]}
      />
    </div>
  );
}
