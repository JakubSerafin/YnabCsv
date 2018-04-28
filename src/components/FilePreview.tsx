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
    
    private renderFileRow(cells:string[] )
    {
        return cells.map(c=><td key={c.toString()} >{c}</td>)
    }

    private renderFile = (file:string[][]) =>
    {
        const rows = file.map(r=><tr key='a' >{this.renderFileRow(r)}</tr>)
        return  <table>
                    {rows}
                </table>
        
    }

    private renderPlaceholder = () => 
    {
        return <div> select a file first </div>
    }
}

export default FilePreview; 