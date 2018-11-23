import React from "react";

import {toggleCode} from "../plugins/codeblockplugin/CodeBlockPlugin";

export default class Toolbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div><button onClick={(e)=>this._onCode(e)}>Code</button></div>;
    }

    _onCode(e) {
        let {getEditor, onChange} = this.props;
        toggleCode(e, getEditor(), onChange, "javascript");
    }
}
