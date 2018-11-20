// Import React!
import * as React from 'react';
import {Editor} from 'slate-react';
import {Value} from 'slate';
import {AddCode, CodeBlockPlugin} from "../plugins/codeblockplugin/CodeBlockPlugin";
import { ParagraphPlugin } from "@canner/slate-icon-shared";
import 'antd/lib/select/style/index.css';
import Toolbar from '../components/Toolbar';
import EditPrism from "slate-prism";

import Prism from 'prismjs';
import PrismJava from 'prismjs/components/prism-java';
import PrismJson from 'prismjs/components/prism-json';
import PrismTsx from 'prismjs/components/prism-tsx';
import PrismJsx from 'prismjs/components/prism-jsx';
//import PrismPlsql from 'prismjs/components/prism-plsql';
import PrismScss from 'prismjs/components/prism-scss';
import PrismBash from 'prismjs/components/prism-bash';
import PrismCsharp from 'prismjs/components/prism-csharp';

const initialValue = Value.fromJSON({
    document: {
        nodes: [
            {
                object: 'block',
                type: 'paragraph',
                nodes: [
                    {
                        object: 'text',
                        leaves: [
                            {
                                text: 'for (var i = 0; i < 10; i++) {}',
                            },
                        ],
                    },
                ],
            },
        ],
    },
})

type AppState = {
    value: object
}

// let plugins = [
//     CodeBlockPlugin(),
//     ParagraphPlugin(),
// ];

let plugins = [
    EditPrism({
        onlyIn: node => node.type === "code_block",
        getSyntax: node => node.data.get("syntax")
    }),
    CodeBlockPlugin(null)];

class App extends React.Component<void, AppState> {
    // Set the initial value when the app is first constructed.
    state = {
        value: initialValue,
    };

    // On change, update the app's React state with the new editor value.
    onChange = ({value}) => {
        console.log(value);
        this.setState({value})
    };

    editor: object;

    ref = editor => {this.editor = editor};

    // Render the editor.
    render() {

        return <div>
            <Toolbar editor={this.editor} onChange={this.onChange}/>
            <Editor value={this.state.value} onChange={this.onChange} plugins={plugins}
            ref={this.ref}/>
        </div>;
    }
}

export default App;