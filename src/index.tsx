import React = require('react');
import {createRoot} from 'react-dom/client'

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>'

// Render your React component instead
const app = document.getElementById('app')
const root = createRoot(app as any)
root.render(<h1>Hello, world</h1>);
