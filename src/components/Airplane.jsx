import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import PropTypes from "prop-types";

export function Airplane(props) {
  const { nodes, materials } = useGLTF("/models/airplane/model.glb");

  useEffect(() => {
    return () => {
      // Cleanup when component unmounts
      materials.place_holder.dispose();
      nodes.model.geometry.dispose();
    };
  }, [materials, nodes]);

  return (
    <group {...props}>
      <mesh {...nodes.model}>
        <meshStandardMaterial {...materials.place_holder} />
      </mesh>
    </group>
  );
}

Airplane.propTypes = {
  props: PropTypes.object
};

useGLTF.preload("/models/airplane/model.glb");