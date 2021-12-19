import SEO from "@/components/seo";
import Cube from "@/components/cube/cube";

import styles from "./page.module.scss";

export default function Page() {
  return (
    <div className={styles.container}>
      <SEO />
      <div className={styles.left}>
        <div className={styles.content}>
          <h1>Cube</h1>
          <h2>/kjuːb/</h2>
          <p>
            In geometry, a cube is a three-dimensional solid object bounded by
            six square faces, facets or sides, with three meeting at each
            vertex. The cube is the only regular hexahedron and is one of the
            five Platonic solids. It has 6 faces, 12 edges, and 8 vertices. The
            cube is also a square parallelepiped, an equilateral cuboid and a
            right rhombohedron. It is a regular square prism in three
            orientations, and a trigonal trapezohedron in four orientations. The
            cube is dual to the octahedron. It has cubical or octahedral
            symmetry. The cube is the only convex polyhedron whose faces are all
            squares.
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <Cube />
      </div>
    </div>
  );
}
