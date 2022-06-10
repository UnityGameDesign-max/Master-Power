interface Readings{
    active_source: string,
    Q1_breaker: string,
    Q2_breaker: string,
    Q3_breaker: string,
    Q4_breaker: string,
    powerMeter: object
}
const REQUEST_API_URL : string = "http://mpt.dedicated.co.za:1880/api/tco_random_data";

export const getReading = () => {
    fetch(REQUEST_API_URL)
    .then(response => response.json())
    .then(data => data)
}

getReading();