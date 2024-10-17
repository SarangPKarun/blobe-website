import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'

const Target = () => {
    const targetRef = useRef()

    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf')

    return (
        <mesh>
            <primitive />
        </mesh>
    )
}

export default Target