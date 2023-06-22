import {createRoot} from "react-dom/client"

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>'

// Render your React component instead
const app = document.getElementById('app')
const root = createRoot(app as any)
root.render(<p>Hello, world</p>);
