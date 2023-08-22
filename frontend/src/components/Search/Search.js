import {useEffect, useState} from "react";

function Search() {
    const [activities, setActivities] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedActivityType, setSelectedActivityType] = useState("")
    const [selectedCity, setSelectedCity] = useState("");
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");

    useEffect(() => {
        getActivities();
        getAllCities();
    }, [])

    async function getActivities() {
        const response = await fetch("http://localhost:8080/activities/future");
        const activitiesData = await response.json();
        setActivities(activitiesData);
    }

    async function getAllCities() {
        const response = await fetch("http://localhost:8080/activities/cities");
        const data = await response.json();
        setCities(data);
    }

    async function getFilteredActivities() {
        let response;
        if (selectedCity === "" && selectedActivityType === "") {
            response = await fetch("http://localhost:8080/activities/future");
        }
        else {
            let url = "http://localhost:8080/activities/filter?";
            if (selectedCity !== "") {
                url += `city=${selectedCity}&`
            }
            if (selectedActivityType !== "") {
                url += `type=${selectedActivityType}`
            }
            response = await fetch(url);
        }

        let filteredActivities = await response.json();

        if (dateFrom !== "") {
            filteredActivities = filteredActivities.filter(activity => activity.date >= dateFrom);
        }

        if (dateTo !== "") {
            filteredActivities = filteredActivities.filter(activity => activity.date <= dateTo);
        }

        setActivities(filteredActivities);
    }

    function resetFilter() {
        setSelectedActivityType("");
        setSelectedCity("");
        setDateFrom("");
        setDateTo("");
        getActivities();
    }

    return (
        <div>
            <div>
                Select activity type:
                <select
                    name="activitySelect"
                    onChange={event => setSelectedActivityType(event.target.value)}
                    value={selectedActivityType}
                >
                    <option value="">Select Activity Type</option>
                    <option value="RUNNING">Running</option>
                    <option value="WALKING">Walking</option>
                    <option value="CYCLING">Cycling</option>
                    <option value="SKATING">Skating</option>
                </select>
            </div>

            <div>
                <div>
                    Select City:
                    <select name="citySelect"
                            onChange={event => setSelectedCity(event.target.value)}
                            value={selectedCity}
                    >
                        <option value="">Select City</option>
                        {cities.map(city => <option key={city} value={city}>{city}</option>)}
                    </select>
                </div>
            </div>

            <div>
                <label htmlFor="dateFrom">Date from:</label>
                <input
                    value={dateFrom}
                    type="date"
                    id="dateFrom"
                    name="dateFrom"
                    onChange={(e) => setDateFrom(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="dateTo">Date to:</label>
                <input
                    value={dateTo}
                    type="date"
                    id="dateTo"
                    name="dateTo"
                    onChange={(e) => setDateTo(e.target.value)}/>
            </div>

            <div>
                <button onClick={() => getFilteredActivities()}>Filter</button>
            </div>

            <div>
                <button onClick={() => resetFilter()}>Reset Filter</button>
            </div>

            <div>
                {activities.map(activity => (
                    <div key={activity.activityId}>
                        <div>{activity.title}</div>
                        <div>{activity.activityType}</div>
                        <div>{activity.city}, {activity.street}</div>
                        <div>{activity.date}, {activity.time}</div>
                        <div>---------</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Search;