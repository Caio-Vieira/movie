# Movie
<h3> Welcome to my repository.</h3>
<h3>This project is developed with React Native and Expo, facilitating development.</h3>
<h2>
<h3>It is a Mobile Movie APP that consumes the TMDB API, to have access it is necessary to make 'Registration and Login', where the user can browse through 4 categories of Movies,
having a 'Details' page, a 'Movie Search' page, which contains in addition to the search results has display of 4 trailers.</h3>
<h2>
<h3>To use this project you must follow the following installation steps.</h3>
<h3>1 - node_modules</h3>
  
````
   npm install

````
<h2>
<h3>For Login and Sign Up checks, you need to create the auth file.js inside the auth folder, and put your firebase settings.</h3>
<h3>2 - firebase </h3>

  ````
 npm install

 ````
<h2>
<h3>For use of environment variables.</h3>
<h3>3 - react-native-dotenv</h3>

````
npm install react-native-dotenv

````
<h2>
<h3>To consume API</h3>
<h3>4 - axios</h3>
  
````
npm install axios

````
<h2>
<h3>To use gradients in your project</h3>
<h3>5 - expo-linear-gradient</h3>

````
npx expo install  expo-linear-gradient

````
<h2>
<h3>For use of Trailers</h3>
<h3>6 - react-native-youtube</h3>
<h3>Following the installation steps at this link ⤵️<h4> https://lonelycpp.github.io/react-native-youtube-iframe/install</h4></h3>
<h3>Note: If the project is created with React Native CLI app, follow the instructions.</h3>
<h2>
<h3>Note: if you have this error below follow the steps.</h3>
<h3>ERROR in ./node_modules/react-native-web-webview/dist/postMock.html 1:0
Module parse failed: Unexpected token (1:0)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file.</h3>

  
````
  
npm install react-native-web-webview –save

````

<h3>Enter the project's NodeModule => find the webpack folder inside it => lib inside lib => confg folder inside the config => the default.js file. Going through the lines of the file will have a 'const rules', with JSON writing at the end of this writing inside the JSON add
<h2>

  
````
{
  test: /postMock.html$/,
  use: {
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
    },
  },
}

````

If you want to check in the Community, follow the link</h3>
<h3>community link   https://github.com/react-native-web-community/react-native-web-webview.</h3>
<h2>
<h3>To upload the project use</h3>

````
npx expo start

````
<h2>
<div display= "flex" margin="10">
<img align="center" alto="Caio-html" height="500" width="280" src="https://github.com/Caio-Vieira/movie/assets/129814574/0cefb7a8-b258-49aa-91a5-b059caed7e43">  
<img align="center alto="Caio-html"  height="500"  width="280" src="https://github.com/Caio-Vieira/movie_site/assets/129814574/e41eff40-538b-4a81-b7c4-3eccf7bb4964">

  
</div>
  







