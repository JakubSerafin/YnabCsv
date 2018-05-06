import * as Csv from 'csv-parse'
import * as React from 'react';
import './App.css';
import {FieldMapper} from "./FileldMapper"
import {FilePreview} from './FilePreview'
import {ResultTransactions} from "./ResultTransactions"

import logo from '../logo.svg';

interface IAppState
{
  csvData:string[][];
}

class App extends React.Component<{},IAppState> {

 private fileInput: HTMLInputElement

 public constructor(props:any)
 {
   super(props);
   this.state = {csvData:[]};
 }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input ref={e=>this.fileInput=(e as HTMLInputElement)} type="file" onChange={this.handleNewFile} />
        <FieldMapper input="test1"  transformatorsTypes={["void", "oink" ]}/>
        <ResultTransactions Transactions={[]}/>
        <FilePreview file={this.state.csvData}/>
      </div>
    );
  }

  private handleNewFile = (e:any) =>
  {
    const file = this.fileInput.files as FileList;
    if(file !== null)
    {
      const fileReader = new FileReader()
      fileReader.onloadend = (event)=>
      { 
        Csv(fileReader.result,{delimiter:";"},(err,output)=>
        {
          if(err!==null)
          {
            // this.setState({fileName: err})  
          }
          else
          {
            this.setState({csvData: output})  
          }
        });
      }
      fileReader.readAsText(file[0],"Windows-1250");
    }
  }
}

export default App;
