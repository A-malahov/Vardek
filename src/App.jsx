
import './App.css'
import {Canvas} from "@react-three/fiber";
import {OrbitControls, PerspectiveCamera} from '@react-three/drei'
import {useControls} from 'leva';
import './App.css';
import AddBox from "./components/AddBox";
import AddLights from "./components/AddLights";
import AddSphere from "./components/AddSphere";
import AddTrack from "./components/AddTrack";
import AddDoor from "./components/AddDoor";
function App() {
    const {doorScale} = useControls('Door Scale', {
        doorScale: 1,
    })

  return (
    <div className="App">
        <Canvas
            style={{background: "#58ada1"}}
            shadows={true}>
            <OrbitControls/>
            <AddLights/>
            <AddBox/>
            <AddDoor scale={doorScale}/>
            <AddSphere/>
            <AddTrack position={[10, -0.3, 10]}/>
            <PerspectiveCamera makeDefault position={[-6, 3.9, 6.21]} fov={50} near={1} far={200}/>
        </Canvas>
    </div>
  )
}

export default App
