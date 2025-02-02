# @igloo-ui/action-menu

## 1.1.0

### Minor Changes

- 6e2e96a: Added the disablePortal prop for when you don't want the dropdown to be appended to the end of the body. False by default so it won't break the current behavior.

### Patch Changes

- Updated dependencies [6e2e96a]
- Updated dependencies [08a062e]
- Updated dependencies [6e2e96a]
  - @igloo-ui/dropdown@1.3.0
  - @igloo-ui/list@0.2.1

## 1.0.0

### Major Changes

- 4ff1942: Fixed some styling issues with the Action Menu. Moved two callbacks in action menu from ActionMenuProps to the props of the option.

  ## BREAKING CHANGE

  ActionMenu is called differently when using the callbacks for when an option is clicked or determining if the menu is closed on select. They were removed from ActionMenuProps and added to the option props instead.

### Patch Changes

- Updated dependencies [4ff1942]
- Updated dependencies [0b8a62f]
  - @igloo-ui/list@0.2.0
  - @igloo-ui/dropdown@1.2.0

## 0.1.2

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.
- Updated dependencies [a41e1d4]
  - @igloo-ui/dropdown@1.1.4
  - @igloo-ui/list@0.1.3

## 0.1.1

### Patch Changes

- bf478b5: Added missing tests. Fixed missing code in stories when clicking 'Show code'. Updated Dropdown mock. Added new optional prop highlightToday to help with test snapshots.
- Updated dependencies [bf478b5]
  - @igloo-ui/dropdown@1.1.3

## 0.1.0

### Minor Changes

- 3f50827: Feat: The initial release of the action menu component

### Patch Changes

- Updated dependencies [3f50827]
  - @igloo-ui/dropdown@1.1.2
