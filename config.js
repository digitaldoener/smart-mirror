var config = {
    // Language for the mirror (currently not implemented)
    language: "en", // not used yet
    greeting: ["Hi, Andi!", "Hi, sexy"], // An array of greetings to randomly choose from
    // forecast.io
    forecast: {
        key: "02f5947eb30d855153eedefb91ae233a", // Your forecast.io api key
        units: "auto" // See forecast.io documentation if you are getting the wrong units
    },
    // Calendar (An array of iCals)
    calendar: {
        icals: [],
        maxResults: 9, // Number of calender events to display (Defaults is 9)
        maxDays: 365 // Number of days to display (Default is one year)
    },
    // Giphy
    giphy: {
        key: "" // Your Gliphy API key
    },
    traffic: {
        key: "", // Bing Maps API Key
        mode: "Driving", // Possibilities: Driving / Transit / Walking
        origin: "", // Start of your trip. Human readable address.
        destination: "", // Destination of your trip. Human readable address.
        name: "work", // Name of your destination ex: "work"
        reload_interval: 5 // Number of minutes the information is refreshed
    }
};
