import {useRef} from 'react'
import {useGLTF} from '@react-three/drei'
import * as THREE from 'three';
import {useFrame} from "@react-three/fiber";

useGLTF.preload('/models/track-draco.glb')

function AddMesh(props) {
    const {geometry, material, scale,name} = props;
    const config = {receiveShadow: true, castShadow: true, 'material-roughness': 1}
    const bird1 = useRef();
    const newMaterial = new THREE.MeshPhongMaterial({
        map: material.map
    })
    if(name === 'Plane005_ColorPalette_0' || name === 'Plane049_ColorPalette_0' || name === 'Plane050_ColorPalette_0'
        || name === 'Plane051_ColorPalette_0' || name === 'Plane059_ColorPalette_0'){
        newMaterial.castShadow = false;
    }

    useFrame((_,delta)=>{
        if(bird1.current){
            if(bird1.current.receiveShadow){
                bird1.current.receiveShadow = false;
                bird1.current.castShadow = false;

            }
            bird1.current.rotation.y += delta / 3.5
        }

    })



    // Plane005_ColorPalette_0
    return <mesh scale={scale} ref={(name === 'Plane049_ColorPalette_0' || name === 'Plane050_ColorPalette_0'
        || name === 'Plane051_ColorPalette_0' || name === 'Plane059_ColorPalette_0') ? bird1 : null} geometry={geometry} material={newMaterial} {...config} />

}

export function AddTrack(props) {
    const {nodes} = useGLTF('./models/track-draco.glb')

    const meshes = Object.entries(nodes);
    const track = meshes.map((e, index) => {

        if (e[1].type === 'Mesh') {
            return <AddMesh scale={10} key={index} name={e[1].name} geometry={e[1].geometry}
                            material={e[1].material}/>
        }
    })
    return (
        <group  {...props} >
            {track}
        </group>
    )
}

export default AddTrack;
