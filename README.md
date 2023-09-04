# AscndiaNavbar Component

The AscndiaNavbar component is a reusable React component designed to create a quick and customizable navigation bar with dropdown menu functionality. It allows you to easily build and integrate a responsive navigation bar into your React application.


## Installation

To install the AscndiaNavbar component, you can follow these steps:

1. Clone this repository to your local machine.

2. Include the component in your application.

```bash
git clone https://github.com/yourusername/ascndia-navbar.git
```
Replace yourusername with your GitHub username.

Please note that this component is implemented in TypeScript, so you will need to manually install all other required dependencies, including Tailwind CSS, React, and TypeScript.


## Usage

To use the AscndiaNavbar component, you need to import it into your React application and provide the necessary props. Here's a basic example of how to use it:

```typescript
import React from 'react';
import AscndiaNavbar from 'ascndia-navbar';

function MyNavbar() {
  const navbarStyles = {
    // write your styles here
    nav: 'bg-secondary_bg dark:bg-secondary_bg_dark fixed',
    title: 'font-semibold tracking-wide text-xl',
    dropdown: 'dark:bg-secondary_bg_dark bg-secondary_bg',
    li: 'text-base text-white dark:text-white',
    hamburger: 'bg-white',
  };

  const dropdownData = [
    {
      title: 'Button 1',
      onClick: () => {
        // Your button click logic here
      },
      type: 'button',
    },
    {
      title: 'Link 1',
      href: '/link1',
      type: 'link',
    },
  ];

  return (
    <AscndiaNavbar
      styles={navbarStyles}
      title="Your App"
      dropdownData={dropdownData}
    />
  );
}

export default MyNavbar;
```
Please make sure to include `hamburger.css` in your application.


## Props

`styles` (optional): An object that allows you to customize the styling of various elements within the navigation bar. You can specify CSS classes for the navigation bar (nav), title (title), dropdown container (dropdown), list items (li), and the hamburger icon (hamburger).

`title` (required): The title to be displayed in the navigation bar.

`dropdownData` (optional): An array of objects that define the items in the dropdown menu. To populate this array correctly, ensure that each object adheres to the interface that have been defined, including a `title` (string or function returning a string). Depending on the `type` property, you should either include an `onClick` function for buttons or an `href` for links.

### Button Interface
```bash
interface dropdownDataButtonInterface {
    title: (() => string) | string; 
    onClick : () => void;
    type:'button';
}
```

### Link Interface
```bash
interface dropdownDataNavigateInterface {
    title: (() => string) | string; 
    href: string;
    type:'link';
}
```
