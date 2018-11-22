// @flow
import Options, { type OptionsFormat } from './options';
import { onKeyDown, onPaste } from './handlers';
import core from './core';

/**
 * A Slate plugin to handle keyboard events in code blocks.
 */

function EditCode(optsParam?: OptionsFormat = {}): Object {
    const opts = new Options(optsParam);

    const corePlugin = core(opts);
    return {
        ...corePlugin,

        onKeyDown: (event, change, next) => {
            // GOLERYCHANGE
            let result = onKeyDown.bind(null, opts)(event, change, change);
            if (!result) next();
        },
        onPaste: (event, change, next) => {
            // GOLERYCHANGE
            let result = onPaste.bind(null, opts)(event, change, change);
            if (!result) next();
        },
    };
}

export default EditCode;
