const axios = require("axios");

async function forecast(q) {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${q}&appid=${process.env.API_KEY}&units=metric`
  );
  const { list, city } = data;
  const {name,country, sunrise, sunset} = city
  let newlist = []
  for (let i = 1; i < list.length; i += 8) {
    newlist.push(list[i]);
  }
  // newlist.push(list[39])

  return {
    list: newlist,
    location: name + ", " + country,
    sunrise: convertUnixTimestampToIndianTime(sunrise),
    sunset: convertUnixTimestampToIndianTime(sunset)
  }
  // return result.data
}

// Function to convert Unix timestamp to human-readable date
function convertUnixTimestampToIndianTime(unixTimestamp) {
  // Create a new Date object with the provided Unix timestamp in milliseconds
  const date = new Date(unixTimestamp * 1000);

  const istDate = new Date(date.getTime());

  // Format the date components to a readable string
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'Asia/Kolkata', // Set timezone to Indian Standard Time
    timeZoneName: 'short',
  };

  const formattedDate = istDate.toLocaleString('en-IN', options);
  return formattedDate;
}


async function weather(q) {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${process.env.API_KEY}&units=metric`
  );

  const keysToKeep = ["weather", "main", "visibility","name","wind","sys"];

  const filteredData = Object.fromEntries(
    Object.entries(data)
      .map(([key, value]) => {
        if (keysToKeep.includes(key)) {
          if (key === "main" && typeof value === "object") {
            // Filtering the "main" nested object
            const mainKeysToKeep = ["temp", "humidity", "pressure"];
            const filteredMain = Object.fromEntries(
              Object.entries(value).filter(([nestedKey]) =>
                mainKeysToKeep.includes(nestedKey)
              )
            );
            return [key, filteredMain];
          }
          return [key, value];
        }
        return null; // Exclude keys not in keysToKeep
      })
      .filter(Boolean) // Remove null entries from map
  );
  return filteredData
}



module.exports = {
   forecast, weather
};
