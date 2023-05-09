const Box = (props) => {
    return (
      <mesh
        {...props}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'#960f2a'} />
      </mesh>
    )
  }

  export default Box;