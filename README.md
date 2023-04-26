### `React Weather application`
Simple app written in ReactJS that returns information to the user about current and forecast weather in four locations in Finland:
- Jyväskylä
- Tampere
- Espoo
- Kuopio

The app uses the Open Weather Map API to retrieve data. In order to access the API, a key is required that can be obtained by signing up (free-of-charge). Details can be found at: 

https://home.openweathermap.org/users/sign_up 

Once this is done, create an .env file in the root of the project, add the following fields and your secret key:  

REACT_APP_API_URL=https://api.openweathermap.org

REACT_APP_API_KEY=yoursecretkey

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
