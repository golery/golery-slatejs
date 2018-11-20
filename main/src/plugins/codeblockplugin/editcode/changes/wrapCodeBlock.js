// @flow
import { type Change } from 'slate';

import type Options from '../options';

import wrapCodeBlockByKey from './wrapCodeBlockByKey';

/**
 * Wrap current block into a code block.
 */
function wrapCodeBlock(opts: Options, change: Change): Change {
    const { value } = change;
    const { startBlock, selection } = value;

    // Convert to code block
    wrapCodeBlockByKey(opts, change, startBlock.key);

    // Move selection back in the block
    change
        .moveToStartOfNode(change.value.document.getDescendant(startBlock.key))
        .moveAnchorTo(startBlock.key, selection.startOffset)
        .moveFocusTo(startBlock.key, selection.startOffset);

    return change;
}

export default wrapCodeBlock;
