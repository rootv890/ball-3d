import * as THREE from 'three';

// Materials
export const floor1Material = new THREE.MeshStandardMaterial(
    { color: 'limegreen' }
);
export const floor2Material = new THREE.MeshStandardMaterial( {
    color: 'greenyellow'
} );
export const floor3Material = new THREE.MeshStandardMaterial( {
    color: 'orangered'
} );

export const wallMaterial = new THREE.MeshStandardMaterial( {
    color: 'slateGrey'
} );

export const obstacleMaterial = new THREE.MeshStandardMaterial( {
    color: 'tomato'
} );


//  Geometery
export const floorGeometry = new THREE.BoxGeometry( 1, 1, 1 );
