const fs = require('fs');
const path = require('path');

const yalcDir = path.resolve(__dirname, '.yalc');
const targetDependency = '@spectrum-web-components/card';

fs.readdirSync(yalcDir).forEach(component => {
  const packageJsonPath = path.join(yalcDir, component, 'package.json');
  
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = require(packageJsonPath);
    
    const dependencies = packageJson.dependencies || {};
    const devDependencies = packageJson.devDependencies || {};

    if (dependencies[targetDependency] || devDependencies[targetDependency]) {
      console.log(`El componente ${component} usa ${targetDependency}`);
    }
  }
});
