import PluginEditCode from "golery-slate-code-block";
import { CODE, CODE_LINE, PARAGRAPH } from "@canner/slate-constant/lib/blocks";
import {codeBlockNode, codeLineNode} from "@canner/slate-editor-renderer/lib/codeBlockNode";


export function AddCode(e, change, onChange)
{
    let typeName = CODE;
    let codePlugin = PluginEditCode({
        onlyIn: node => node.type === typeName
    });

    //const { onChange, change, syntaxKey } = this.props;
    let syntaxKey = "syntax";
    let haveCodeBlock = codePlugin.utils.isInCodeBlock(change.value);
    e.preventDefault();

    if (haveCodeBlock) {
        onChange(codePlugin.changes.unwrapCodeBlock(change, PARAGRAPH));
    } else {
        let lang = "javascript";
        let newChange = change.setBlocks({
            data: { [syntaxKey]: lang }
        });

        onChange(codePlugin.changes.wrapCodeBlock(newChange));
    }
}

export const CodeBlockPlugin = opt => {
    const options = Object.assign(
        {
            codeType: CODE,
            codeLineType: CODE_LINE,
            getSyntax: node => node.data.get("syntax")
        },
        opt
    );

    return {
        renderNode: (props , editor, next) => {
            if (props.node.type === options.codeType) {
                return codeBlockNode(options)(props);
            } else if (props.node.type === options.codeLineType) {
                return codeLineNode()(props);
            } else
                return next();
        }
    };
};


