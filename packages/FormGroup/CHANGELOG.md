# @igloo-ui/form-group

## 1.0.2

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.
- Updated dependencies [a41e1d4]
  - @igloo-ui/helper-text@0.2.9

## 1.0.1

### Patch Changes

- 621de79: fix the error of the documentation in relation to the use of the `FormGroup`

## 1.0.0

### Major Changes

- 9b9ec61: Changed some props of form group to allow different types of messages to be added and not just errors

## 0.1.3

### Patch Changes

- 6ee9c45: Updated anything causing errors or warnings in the browser console

## 0.1.2

### Patch Changes

- 0640409: Update @igloo-ui/icons to 1.6.0
- 0640409: udpate classnames to 2.3.2

## 0.1.1

### Patch Changes

- d971143: All tests were updated to use testing library and not enzyme

## 0.1.0

### Minor Changes

- b8729ca: Feat: Initial release of the form group component
