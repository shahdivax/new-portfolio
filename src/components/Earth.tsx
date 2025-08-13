"use client";

import { PlanetCanvas } from "./Planet";

export function EarthCanvas() {
  return (
    <PlanetCanvas
      mapSrc="https://huggingface.co/datasets/diabolic6045/divax-portfolio/resolve/main/public/textures/earth/earth_day_1k.jpg"
      specularSrc="https://huggingface.co/datasets/diabolic6045/divax-portfolio/resolve/main/public/textures/earth/earth_spec_1k.jpg"
      cloudsSrc="https://huggingface.co/datasets/diabolic6045/divax-portfolio/resolve/main/public/textures/earth/earth_clouds_1k.jpg"
      cloudsAlphaSrc="https://huggingface.co/datasets/diabolic6045/divax-portfolio/resolve/main/public/textures/earth/earth_clouds_trans_1k.jpg"
      tiltDeg={23.4}
      speed={0.15}
      camera={[0, 0, 2.9]}
    />
  );
}

