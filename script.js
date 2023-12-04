function createDom(root) {
  if (typeof root === 'string') {
    // If root is a string, create a text node
    return document.createTextNode(root);
  }

  // Create an element node
  const element = document.createElement(root.type);

  // Set attributes if they exist
  if (root.attributes) {
    for (const [key, value] of Object.entries(root.attributes)) {
      element.setAttribute(key, value);
    }
  }

  // Add children if they exist
  if (root.children) {
    for (const child of root.children) {
      const childNode = createDom(child);
      element.appendChild(childNode);
    }
  }

  return element;
}

// Example usage:
const inputElement = createDom({
  type: 'input',
  attributes: {
    class: 'my-input',
    type: 'password',
    placeholder: 'type your password',
  },
});

const paragraphElement = createDom({
  type: 'p',
  children: [
    'Hello',
    {
      type: 'strong',
      children: ['World']
    }
  ],
});

// Append the created elements to the body for demonstration
document.body.appendChild(inputElement);
document.body.appendChild(paragraphElement);


module.exports=createDom

