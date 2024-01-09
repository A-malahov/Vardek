

function AddSphere() {



    return (
        <mesh position={[2,0.5,0]}  receiveShadow={true} castShadow={true}>
            <sphereGeometry  args={[1, 16, 16]}/>
            <meshStandardMaterial color={"pink"}/>
        </mesh>
    )

}

export default AddSphere;