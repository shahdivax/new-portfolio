"use client";

import { PlanetCanvas } from "./Planet";

export function EarthCanvas() {
  return (
    <PlanetCanvas
      mapSrc="/textures/earth/earth_day_1k.jpg"
      specularSrc="/textures/earth/earth_spec_1k.jpg"
      cloudsSrc="/textures/earth/earth_clouds_1k.jpg"
      cloudsAlphaSrc="/textures/earth/earth_clouds_trans_1k.jpg"
      tiltDeg={23.4}
      speed={0.15}
      camera={[0, 0, 2.9]}
    />
  );
}

