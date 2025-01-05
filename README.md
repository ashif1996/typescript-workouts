# TypeScript Workouts  

Welcome to the **TypeScript Workouts** repository! This repository is designed to help you enhance your TypeScript skills through a variety of practical exercises and a structured learning roadmap. Whether you're a beginner or an experienced developer transitioning to TypeScript, this repository offers an excellent starting point.  

## Table of Contents  

- [About the Repository](#about-the-repository)  
- [Project Structure](#project-structure)  
- [Features](#features)  
- [Getting Started](#getting-started)  
- [Usage](#usage)  
- [Roadmap & Notes](#roadmap--notes)  
- [Contributions](#contributions)  
- [License](#license)  

## About the Repository  

This repository contains a wide range of TypeScript exercises focusing on topics like arrays, functions, callbacks, patterns, error handling, and object manipulation. Each `.ts` file under the `workouts` folder represents a self-contained workout to help you practice and master TypeScript concepts. The repository also includes compiled JavaScript files in the `dist` folder.  

## Project Structure  

```plaintext  
typescript-workouts/  
├── dist/  
│   ├── add2DArray.js  
│   ├── arithmeticOperations.js  
│   ├── ... (compiled JavaScript files)  
├── workouts/  
│   ├── add2DArray.ts  
│   ├── arithmeticOperations.ts  
│   ├── ... (TypeScript files)  
├── .gitignore  
├── README.md  
├── package-lock.json  
├── package.json  
├── tsconfig.json  
```  

## Features  

- **Practical Workouts**: A wide variety of exercises to practice TypeScript concepts.  
- **Compiled JavaScript**: Includes precompiled JavaScript files for quick execution.  
- **Roadmap for Guidance**: Structured roadmap to help users focus on essential concepts.  

## Getting Started  

### Prerequisites  
- Install [Node.js](https://nodejs.org/).  
- Install TypeScript globally:  
  ```bash  
  npm install -g typescript  
  ```  

### Clone the Repository  
```bash  
git clone https://github.com/your-username/typescript-workouts.git  
cd typescript-workouts  
```  

### Install Dependencies  
```bash  
npm install  
```  

### Compile TypeScript Files  
```bash  
tsc  
```  

### Run Exercises  
Use Node.js to execute the compiled JavaScript files in the `dist` folder:  
```bash  
node dist/add2DArray.js  
```  

Or, directly run TypeScript files using `ts-node` (if installed):  
```bash  
npx ts-node workouts/add2DArray.ts  
```  

## Usage  

1. **Workouts**: Explore the `workouts` folder for TypeScript exercises.  
2. **Compilation**: Use `tsc` to compile `.ts` files into `.js`.  
3. **Execution**: Run the compiled files from the `dist` folder or use `ts-node` for direct execution.  

## Roadmap & Notes  

- 📖 [TypeScript Roadmap](https://roadmap.sh/typescript)  

Follow the roadmap to structure your learning and gain a deeper understanding of TypeScript concepts.  

## Contributions  

Contributions are welcome! Here's how you can contribute:  

1. Fork the repository.  
2. Create a new branch:  
   ```bash  
   git checkout -b feature-new-exercise  
   ```  
3. Commit your changes:  
   ```bash  
   git commit -m "Add new TypeScript workout: [Exercise Name]"  
   ```  
4. Push the branch:  
   ```bash  
   git push origin feature-new-exercise  
   ```  
5. Submit a pull request.  

## License  

This project is licensed under the [MIT License](LICENSE).  

## Acknowledgments  

Special thanks to the TypeScript community for their resources and support in advancing TypeScript skills.  

Happy Coding! 🚀  