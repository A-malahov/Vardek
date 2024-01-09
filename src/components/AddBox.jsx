

function AddBox() {



    return (
        <mesh  receiveShadow={true} castShadow={true}>
            <boxGeometry attach='geometry' args={[1, 1, 1]}/>
            <meshStandardMaterial color={"pink"}/>
        </mesh>
    )

}

export default AddBox;