# React-Basic-Setup

1. Create Folder ex : Test Project
2. Cd Test Project
3. Install NPM AND NODE of latest version
- Node: v14.16.1
- NPM: 6.14.12
- React: 17.0.2
- React-dom: 17.0.2
- Webpack: 5.30.0
- These are used in the development of this project.
4. Run > npm init 
- Steps of questions will be asked
- Package.json will be created
5. Install basic requirements:
     npm install --save-dev @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli webpack-dev-server babel-loader css-loader style-loader html-webpack-plugin
6. If any unhandled exception errors occurs , update node version simply.
7. Create directory like this:
 ``` 
    .
    |-- dist
    |   |-- 04ca8e9d7b0c7a5ab9d2.woff
    |   |-- 407849620088cc1565b6.woff2
    |   |-- d4e708d7fe7c3e143e78.png
    |   `-- main.js
    |-- index.html
    |-- package-lock.json
    |-- package.json
    |-- public
    |-- src
    |   |-- index.js
    |   |-- my-font.ttf
    |   |-- my-font.woff
    |   |-- my-font.woff2
    |   |-- rgukt.png
    |   `-- style.css
    `-- webpack.config.js
  ```
 8. Regarding webpack configuration, refer webpack docs
 9. Handled fonts,images with loaders in webpack
 10. publicPath plays crucial role in webpack
