
# Bicycle Online Store

Bicycle Online Store is a web application that allows users to view and purchase bicycles. This README provides an overview of the project, how to install and use it, and important details about the code structure.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Code Structure](#code-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Getting Started

Before you can use the Bicycle Online Store, you need to set it up on your local machine.

### Prerequisites

To run the project, you'll need the following software and dependencies:

- Node.js (v14.0.0 or higher)
- Git (optional)

### Installation

Follow these steps to install and run the project:

1. Clone the repository:

   ```bash
   git clone https://github.com/priyankawadle/theBicycleShop.git
   ```

2. Navigate to the project directory:

   ```bash
   cd theBicycleShop
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   node index.js
   ```

The Bicycle Online Store is now up and running on your local machine.

## Usage

The Bicycle Online Store is accessible through a web browser. To interact with it, follow these steps:

1. Open your web browser.
2. Visit `http://localhost:3001` in the address bar.

You can now browse and interact with the bicycle listings. The main page displays a selection of bicycles, and you can click on a specific bicycle to see its details.

## Features

The Bicycle Online Store offers the following key features:

- **Browse Bicycles**: View a list of available bicycles on the main page.
- **View Bicycle Details**: Click on a bicycle to see its details on a separate page.
- **Display Discount**: If a bicycle has a discount, it will be clearly displayed.
- **Star Ratings**: Bicycles have star ratings to indicate their popularity or quality.

## Code Structure

The code for this project is structured as follows:

- `server.js`: The main Node.js server that handles incoming HTTP requests.
- `data/data.json`: Contains data about the bicycles available in the store.
- `view/`: Directory containing HTML templates used to render pages.
- `public/`: Directory for serving static assets like images, CSS, and SVG icons.

## Contributing

We welcome contributions to the Bicycle Online Store. If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Make your changes.
3. Create a pull request, describing the changes you've made and their purpose.

Please make sure to adhere to our code of conduct and contribute in a respectful and collaborative manner.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

We would like to acknowledge the use of the following resources in this project:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
