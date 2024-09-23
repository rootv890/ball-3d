// Enable Model Cast Shadow

export function castShadow ( model )
{
    model.scene.children.forEach( mesh =>
    {
        mesh.castShadow = true;
    } );
}
