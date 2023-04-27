### `React Weather application`
Simple app written in ReactJS that returns information to the user about current and forecast weather in four locations in Finland:
- Jyväskylä
- Tampere
- Espoo
- Kuopio

The app uses the Open Weather Map API to retrieve data. In order to access the API, a key is required that can be obtained by signing up (free-of-charge). Details can be found at: 

https://home.openweathermap.org/users/sign_up 

Once this is done, create an .env file in the root of the project:  

![Screenshot 2023-04-27 182157](https://user-images.githubusercontent.com/62894074/234909529-b6a39a19-beb3-48c8-a52d-49aa3925e794.png)

Add the following fields plus your secret key:

![Screenshot 2023-04-27 182059](https://user-images.githubusercontent.com/62894074/234909214-760eca20-ae51-43db-a759-46e350f2b20c.png)

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
