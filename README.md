## Routes

- [`/getweather/:city`]("https://weather-api-phisix.vercel.app/getweather/") ( _Current weather_ )

  example: [`/getweather/kolkata`](https://weather-api-phisix.vercel.app/getweather/kolkata)

  ```json
  {
    "weather": [
      {
        "id": 721,
        "main": "Haze",
        "description": "haze",
        "icon": "50n"
      }
    ],
    "main": {
      "temp": 24.97,
      "pressure": 1014,
      "humidity": 69
    },
    "visibility": 3200,
    "wind": {
      "speed": 2.06,
      "deg": 10
    },
    "sys": {
      "type": 1,
      "id": 9114,
      "country": "IN",
      "sunrise": 1701477022,
      "sunset": 1701516084
    },
    "name": "Kolkata"
  }
  ```

- [`/getforecast/:city`]("https://weather-api-phisix.vercel.app/getforecast/") ( *5 day weather forecast* )

  example: [`/getforecast/kolkata`](https://weather-api-phisix.vercel.app/getforecast/kolkata)

  ```json
  {
    "list": [
      {
        "dt": 1701540000,
        "main": {
          "temp": 24.67,
          "feels_like": 24.79,
          "temp_min": 24.06,
          "temp_max": 24.67,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 1013,
          "humidity": 61,
          "temp_kf": 0.61
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 60
        },
        "wind": {
          "speed": 2.7,
          "deg": 35,
          "gust": 3.44
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-12-02 18:00:00"
      },
      {}, //9 items
      {}, //9 items
      {}, //9 items
      {} //9 items
    ],
    "location": "Kolkata, IN",
    "sunrise": "2 Dec 2023, 06:00:22 am IST",
    "sunset": "2 Dec 2023, 04:51:24 pm IST"
  }
  ```
