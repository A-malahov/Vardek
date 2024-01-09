import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

function AddDoor(props){
    const {scale} = props;
    const garment = useLoader(
        GLTFLoader,
        "./models/medieval_door.glb"
    );
const mesh=garment.scene;
    mesh.traverse((item) => {
        item.castShadow = true;
        item.receiveShadow = true;
    })

    return(
        <mesh position={[0,0,-2]} scale={scale}>
            <primitive object={mesh}/>
        </mesh>
    )
}

export default AddDoor;