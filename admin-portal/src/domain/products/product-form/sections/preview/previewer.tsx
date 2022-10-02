import React from "react"
import { GLTFModel, AmbientLight, DirectionLight } from "react-3d-viewer";

const Previewer = ({ previewUrl, isFullView = false }) => {

    console.log(previewUrl);


    return (
        <div className="mt-large">
            {previewUrl && <GLTFModel
                height={isFullView ? window.innerHeight / 2 : window.innerHeight / 3/* + AND - AS DESIRED*/}
                width={isFullView ? window.innerWidth / 2 : window.innerWidth / 3 /* + AND - AS DESIRED*/}
                // src="./src/lib/model/DamagedHelmet.gltf"
                src={previewUrl}
            // src="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Buggy/glTF/Buggy.gltf"
            >
                <AmbientLight color={0xffffff} />
                <DirectionLight
                    color={0xffffff}
                    position={{ x: 100, y: 200, z: 100 }}
                />
                <DirectionLight
                    color={0xff00ff}
                    position={{ x: -500, y: 200, z: -100 }}
                />
            </GLTFModel>
            }
        </div>
    )
}


export default Previewer