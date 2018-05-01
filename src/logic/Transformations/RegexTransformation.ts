import { ITransformator } from "./transformator";

export class RegexTransformator implements ITransformator
{
    public type: string = 'RegexTransformers';
    // private regex: string;
    // private outputTemplate: string;
    constructor(regex:string, outputTemplate:string)
    {
        // this.outputTemplate = outputTemplate;
        // this.regex = regex;
    }

    public Transformate(input: string): string {
        return input;
    }
    
}