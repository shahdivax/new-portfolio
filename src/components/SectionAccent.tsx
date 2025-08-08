"use client";

import { PlanetCanvas } from "./Planet";

export function MoonBadge() {
  return (
    <div className="relative h-24 w-24 sm:h-28 sm:w-28">
      <PlanetCanvas mapSrc="/textures/moon/moon_1k.jpg" camera={[0, 0, 2.6]} tiltDeg={6.7} speed={0.08} />
    </div>
  );
}

export function MarsBadge() {
  return (
    <div className="relative h-24 w-24 sm:h-28 sm:w-28">
      <PlanetCanvas mapSrc="/textures/mars/mars_1k.jpg" camera={[0, 0, 2.6]} tiltDeg={25} speed={0.06} />
    </div>
  );
}

