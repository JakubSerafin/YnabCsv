import * as React from 'react';

interface IFilePrevierProp
{
    file: string[][]
}

export class FilePreview extends React.Component<IFilePrevierProp,{}> {

    public render()
    {
        const content = this.props.file.length>0? this.renderFile(this.props.file): this.renderPlaceholder();

        return <div> {content}
        </div>
    }
    

    private renderFileRow(cells:string[]|undefined, isHeader:boolean ) 
    {
        if(cells!==undefined)
        {
            return cells.map(
                c=>isHeader?
                <th key={c.toString()}>{c}</th> : 
                <td key={c.toString()} >{c}</td>);
        }
        return null;
    }

    private renderFile = (file:string[][]) =>
    {
        const headerRow = file.shift();
        const rows = file.map(r=><tr key='a' >{this.renderFileRow(r,false)}</tr>)
        return  <table>
                    <thead>
                        {this.renderFileRow(headerRow,true)}
                    </thead>
                    <tbody>
                        rows
                    </tbody>
                    {rows}
                </table>
        
    }

    private renderPlaceholder = () => 
    {
        return <div> select a file first </div>
    }
}

export default FilePreview; 