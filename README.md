# AscndiaNavbar Component

The AscndiaNavbar component is a reusable React component designed to create a customizable navigation bar with dropdown menu functionality. It allows you to easily integrate a responsive navigation bar into your React application.

## Installation

You can install the AscndiaNavbar component via npm or yarn:

```bash
git clone https://github.com/yourusername/ascndia-navbar.git
```
Replace yourusername with your GitHub username.

Please note that this component is implemented in TypeScript, so you will need to manually install all other required dependencies, including Tailwind CSS, React, and TypeScript.

## Usage

To use the AscndiaNavbar component, you need to import it into your React application and provide the necessary props. Here's a basic example of how to use it:

```bash
import React from 'react';
import AscndiaNavbar from 'ascndia-navbar';

function MyNavbar() {
  const navbarStyles = {
    nav: 'your-nav-styles',
    title: 'your-title-styles',
    dropdown: 'your-dropdown-styles',
    li: 'your-li-styles',
    hamburger: 'your-hamburger-styles',
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
