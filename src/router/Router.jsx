import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../view/pages/Login";
import Register from "../view/pages/Register";
import Home from "../view/pages/Home";
import Popularmovies from "../view/pages/Popularmovies";
import Details from "../view/pages/Details";
import Familymovies from "../view/pages/Familymovies";
import Westernnmovies from "../view/pages/Westernmovies";
import Warmovies from "../view/pages/Warmovies";
import Search from "../view/pages/Search";
import TrailerFamily from "../view/videos/TrailerFamily";
import TrailerPopular from "../view/videos/TrailerPopular";
import TrailerWar from "../view/videos/TrailerWar";
import TrailerWestern from "../view/videos/TrailerWestern";

const Stack = createNativeStackNavigator();
export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={Home}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Popular"
          component={Popularmovies}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="Family"
          component={Familymovies}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="War"
          component={Warmovies}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Western"
          component={Westernnmovies}
          options={{ headerShown: false }}
        />    
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TrailerFamily"
          component={TrailerFamily}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TrailerPopular"
          component={TrailerPopular}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TrailerWar"
          component={TrailerWar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TrailerWestern"
          component={TrailerWestern}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

