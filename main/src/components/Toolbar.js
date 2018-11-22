import React from "react";

import {AddCode} from "../plugins/codeblockplugin/CodeBlockPlugin";

export default class Toolbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div><button onClick={(e)=>this._onCode(e)}>Code</button></div>;
    }

    _onCode(e) {
        let {getEditor, onChange} = this.props;
        AddCode(e, getEditor(), onChange);
    }
}
