import { DirectMapTransformation } from "./DirectMapTransformation";
import { TransformationComponent, ITransformationCompomnentProps } from "./ITransformationComponent";


export class TransformatorComponentFactory
{
    public static GetTypes():string[]
    {
        return ["oink"]
    }

    public static GetTransformatorCompoment(type:string, props:ITransformationCompomnentProps): TransformationComponent
    {
        return new DirectMapTransformation(props)
    }
}