import * as React from "react";
import { ITransformator } from "../../logic/Transformations/transformator";



export interface ITransformationCompomnentProps
{
    onTransformationSetted: (transformator:ITransformator) => void 
}

export abstract class TransformationComponent extends React.Component<ITransformationCompomnentProps,{}>
{
    
}