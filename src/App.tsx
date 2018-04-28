import * as Csv from 'csv-parse'
import * as React from 'react';
import './App.css';

import logo from './logo.svg';

interface IAppState
{
  fileName:string;
}

class App extends React.Component<{},IAppState> {

 private fileInput: HTMLInputElement

 public constructor(props:any)
 {
   super(props);
   this.state = {fileName:'eee'};
 }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
         First, open a CSV File 
        </p>
        <input ref={e=>this.fileInput=(e as HTMLInputElement)} type="file" onChange={this.handleNewFile} />
        <div>file: {this.state.fileName}</div>
        
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
            this.setState({fileName: err})  
          }
          else
          {
            this.setState({fileName: output})  
          }
        });
      }
      fileReader.readAsText(file[0],"Windows-1250");
    }
  }
}

export default App;
