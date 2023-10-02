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
<h3> For Login and Registration verifications, it is necessary to create an auth folder with auth.js file inside the
auth.js and put your firebase settings.</h3>
<h3>2 - firebase </h3>

  ````
 npm install firebase

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
<h3>Ready to render use the command</h3>

````
npx expo start

````


<h2>
<div display= "flex" align="center">
<img align="center" alto="Caio-home"  height="500" width="278" src="https://github.com/Caio-Vieira/movie/assets/129814574/0cefb7a8-b258-49aa-91a5-b059caed7e43">  
<img align="center" alto="Caio-login"  height="500"  width="278" src="https://github.com/Caio-Vieira/movie_site/assets/129814574/e41eff40-538b-4a81-b7c4-3eccf7bb4964">
</div>
<h2>
<div display= "flex" align="center">
<img align="center" alto="Caio-movie"  height="500" width="278" src="https://github.com/Caio-Vieira/movie_site/assets/129814574/2c17185d-5fcc-4c53-a8fa-caa835c03e68">  
<img align="center" alto="Caio-movie"  height="500"  width="278" src="https://github.com/Caio-Vieira/movie_site/assets/129814574/5941eb37-bbc9-48d7-b650-c2604f3794d8">
</div>
<h2>
<div display= "flex" align="center">
<img align="center" alto="Caio-search"  height="500" width="278" src="https://github.com/Caio-Vieira/movie_site/assets/129814574/ae740141-e856-490b-8823-a31bbd58d6b4">  
<img align="center" alto="Caio-search"  height="500"  width="278" src="https://github.com/Caio-Vieira/movie_site/assets/129814574/17df887c-089d-404c-b0fc-eee8845f4131">
</div>
<h2>
<div display= "flex" align="center">
<img align="center" alto="Caio-detail"  height="500" width="278" src="https://github.com/Caio-Vieira/movie_site/assets/129814574/ccaed9c2-c547-4f54-85fc-088130ee4af2">  
<img align="center" alto="Caio-traler"  height="500"  width="278" src="https://github.com/Caio-Vieira/movie_site/assets/129814574/a9604f5c-54bb-496c-ae2d-605216dd2d29">
</div>




  







