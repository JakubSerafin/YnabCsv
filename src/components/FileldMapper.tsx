import * as React from "react"
import { ITransformator } from "../logic/Transformations/transformator";
import { VoidTransformator } from "../logic/Transformations/VoidTransformation";

interface IFiledMapperProp
{
    input:string;

}

interface IFilledMapperState
{
    transformators: ITransformator[]
}

export class FieldMapper extends React.Component<IFiledMapperProp,IFilledMapperState> {

    constructor(props:IFiledMapperProp)
    {
        super(props);
        this.state = {transformators:[]}
    }
    public render()
    {
        const trasformators = this.state.transformators.map(transformator=> <span key='ttt' >tttt  </span>)
        return <div>
                    <span>{this.props.input}</span>
                    {trasformators}
                    <button onClick={this.addAnother} >Dodaj kolejny</button>
               </div>
    }

    public addAnother = () =>
    {
        const newTransformators = this.state.transformators;
        newTransformators.push(new VoidTransformator);
        this.setState({transformators: newTransformators});
    }
}