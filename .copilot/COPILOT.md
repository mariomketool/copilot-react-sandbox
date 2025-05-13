# Project Coding Standards

## Writing Components

Every component must live in it's own directory. The directory name should match the name of the component. The component must be placed inside an `index.jsx` file.

All components must tailwind classes when applying any styles.

### Anatomy of a component

Here is an example for what a component directory might look like. The `index.jsx` file is required.

```js
📂 MyComponent
|-- index.jsx         // Required - The component is the default export.
|-- styles.jsx        // Optional - if component uses tailwind classes or applies styles.
|-- server.jsx        // Optional - perform server side operations.
|-- translations.json // Optional - set translations keys.
|-- constants.jsx     // Optional - Add related strings to be reused.
|-- helpers.jsx       // Optional - Add helper methods specific to this component.
```

## Component styles and CSS

All styles should be implemented using tailwind classes.
