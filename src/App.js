import React, { useState } from 'react';
import './App.css';
import MonacoEditor from 'react-monaco-editor'
function App() {
  const [code] = useState("")
  let [ed] = useState()

  const editorDidMount = (editor, monaco) => {
    editor.focus();
    ed = editor
  }

  const onChange = (newValue, e) => {
    // console.log('onChange', newValue, e);
    // let lineNumber = e.changes[0].range.startLineNumber
    var position = ed.getPosition();
    var text = ed.getValue(position);
    var splitedText = text.split("\n");
    var lineText = splitedText[position.lineNumber - 1];;
    console.log(lineText)

    if (lineText.indexOf('*') > -1) {
      let numOfAsterisk = lineText.split("*").length - 1;
      setUnicodeChar(numOfAsterisk)
    }
  }

  const setUnicodeChar = (asterisks) => {
    let characters = ["⊖ ", "⊙ ", "⊘ "];
    for (let i = 0; i < asterisks; i++) {
      characters.push(characters.shift());
    }
    return characters[0];
  }

  return (
    <div className="App">
      <MonacoEditor
        width="100vw"
        height="100vh"
        language="javascript"
        theme="vs-dark"
        value={code}
        // options={options}
        onChange={onChange}
        editorDidMount={editorDidMount}
      />
    </div>
  );
}

export default App;
// import React, { useState } from 'react';
// import './App.css';
// import MonacoEditor from 'react-monaco-editor'

// class App extends React.Component {
//   state = {
//     ed: '',
//     code: ''
//   }
//   editorDidMount = (editor, monaco) => {
//     editor.focus();
//     this.setState({
//       ed: editor
//     })
//   }

//   onChange = (newValue, e) => {
//     console.log('onChange', newValue, e);
//     let lineNumber = e.changes[0].range.startLineNumber

//     if (newValue === '* ') {
//       console.log('change to -')
//       console.log(this.state.ed.getValue())
//     }
//   }
//   render() {
//     return (
//       <div className="App">
//         <MonacoEditor
//           width="100vw"
//           height="100vh"
//           language="javascript"
//           theme="vs-dark"
//           value={this.state.code}
//           // options={options}
//           onChange={this.onChange}
//           editorDidMount={this.editorDidMount}
//         />
//       </div>
//     )
//   }
// }

// export default App;
