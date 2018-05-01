import { ITransformator } from "./transformator";

export class VoidTransformator implements ITransformator
{
    public type: string = 'VoidTransformation';
    public Transformate(input: string): string {
        return input;
    }

}

