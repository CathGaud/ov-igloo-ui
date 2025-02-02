import { useLayoutEffect } from 'react';
import {
  LexicalEditor,
  COMMAND_PRIORITY_LOW,
  BLUR_COMMAND,
  FOCUS_COMMAND,
} from 'lexical';

// eslint-disable-next-line max-len
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

export function OnFocusPlugin({
  onFocus,
  onBlur,
}: {
  onFocus: (editor: LexicalEditor) => void;
  onBlur: (editor: LexicalEditor) => void;
}): null {
  const [editor] = useLexicalComposerContext();

  useLayoutEffect(() => {
    if (onFocus) {
      return editor.registerCommand(
        FOCUS_COMMAND,
        () => {
          onFocus(editor);
          return false;
        },
        COMMAND_PRIORITY_LOW
      );
    }

    return () => null;
  }, [editor, onFocus]);

  useLayoutEffect(() => {
    if (onBlur) {
      return editor.registerCommand(
        BLUR_COMMAND,
        () => {
          onBlur(editor);
          return false;
        },
        COMMAND_PRIORITY_LOW
      );
    }

    return () => null;
  }, [editor, onBlur]);

  return null;
}
