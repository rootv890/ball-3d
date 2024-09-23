import { useMemo, useState } from "react";
import BlockStart from "./BlockStart";
import { floor1Material, floorGeometry } from "./geoAndMat";
import LimboBlock from "./LimboBlock";
import TrapSpinnerBlock from "./TrapSpinner";
import AxeBlock from "./AxeBlock";
import BlockEnd from "./BlockEnd";
import Bounds from "./Bounds";


function Level ( { count = 3, types = [TrapSpinnerBlock, AxeBlock, LimboBlock] } )
{
    const blocks = useMemo( () =>
    {
        const blocks = [];
        for ( let i = 0; i < count; i++ )
        {
            const type = types[Math.floor( Math.random() * types.length )];
            blocks.push( type );
        }
        return blocks;

    }, [count, types] );

    const [speeds] = useState( {
        spinnerSpeed: 2,
        limboSpeed: 2
    } );




    return (
        <>
            {/* Block */}
            <BlockStart
                position={[0, 0, 0]}
                geometry={floorGeometry}
                material={floor1Material}
            />
            {
                blocks.map( ( Block, id ) =>
                (
                    <Block key={id} position={[0, 0, -( id + 1 ) * 4]} />
                ) )
            }
            <BlockEnd material={floor1Material} geometry={floorGeometry} position={[0, 0, -( ( count + 1 ) * 4 )]} />
            <Bounds length={count + 2} />
        </>
    );
}

export default Level;
