import { useKeyboardControls } from "@react-three/drei";
const Interface = () =>
{

    const { forward, backward, leftward, rightward, jump } = useKeyboardControls( ( state ) => state );

    // const forward = useKeyboardControls( ( state ) => state.forward );
    // const backward = useKeyboardControls( ( state ) => state.backward );
    // const rightward = useKeyboardControls( ( state ) => state.rightward );
    // const leftward = useKeyboardControls( ( state ) => state.leftward );
    // const jump = useKeyboardControls( ( state ) => state.jump );
    console.log( jump );




    return (
        <div
            className="fixed top-0 left-0 w-full h-full select-none z-50">
            {/* Time */}
            <div className="time absolute top-[15%] left-0 w-full  text-white pointer-events-none text-3xl bg-[#00000044] py-2 text-center">
                0.00
            </div>
            <div className="time absolute top-[40%] left-0 w-full  flex justify-center items-center text-white text-7xl pointer-events-auto  bg-[#00000044] py-2 text-center">
                RESTART
            </div>


            {/* Controls */}
            {/* Controls */}
            <div className="controls">
                <div className="raw">
                    <div className={`key ${forward ? 'active' : ''} `}></div>
                </div>
                <div className="raw">
                    <div className={`key ${leftward ? 'active' : ''} `}></div>
                    <div className={`key ${backward ? 'active' : ''} `}></div>
                    <div className={`key ${rightward ? 'active' : ''} `}></div>
                </div>
                <div className="raw">
                    <div className={`key large ${jump ? 'active' : ''}`}></div>
                </div>
            </div>
        </div>

    );
};

export default Interface;
