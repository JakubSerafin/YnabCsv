import * as React from "react"
import { ITransformator } from "../logic/Transformations/transformator";
import { VoidTransformator } from "../logic/Transformations/VoidTransformation";
import Select from 'react-select';
// import 'react-select/dist/react-select.es';

interface IFiledMapperProp
{
    input:string;
    transformatorsTypes: string[]

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
                    {this.buildDropdown()}
                    
               </div>
    }

    public addAnother = () =>
    {
        const newTransformators = this.state.transformators;
        newTransformators.push(new VoidTransformator);
        this.setState({transformators: newTransformators});
    }

    private buildDropdown()
    {
        return   <Select
        name="form-field-name"
        value="ohoho"
        onChange={this.onChange}
        options={[
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' },
        ]}
      />
    //     return <div className="dropdown" onChange={this.onChange}>
    //     <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //       Add new transformation
    //     </button>
    //     <div className="dropdown-menu">
    //     {this.props.transformatorsTypes.map(tt=>
    //       <a className="dropdown-item" href="#" onClick={this.onChange}  key={tt} >{tt}</a>        
    //     )}
    //     </div>
    //   </div>
    }

    private onChange = (e:any) => {alert("changed")}
}