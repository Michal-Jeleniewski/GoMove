import {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import './Profile.css';
import {Context} from "../../App";

function Profile() {
    const userData = useContext(Context).userData;

    const [ownedActivities, setOwnedActivities] = useState([]);
    const [allUserActivities, setAllUserActivities] = useState([]);
    const navigate = useNavigate();

    function displayActivities(activities) {
        if (activities.length > 0) {
            return (
                <div className="activities">
                    <h3>{activities === ownedActivities ? "Owned" : "Take part"}</h3>
                    <div className="activities-container">
                        {activities.map(activity =>
                            <div
                                className="activity-card"
                                key={activity.activityId}
                                onClick={() => navigate(`/activity-page/${activity.activityId}`)}
                            >
                                <img src={activity.activityPhotoUrl} alt={activity.title} className="activity-image"/>
                                <div className="activity-details">
                                    <h3>{activity.date}</h3>
                                    <h3>{activity.time}</h3>
                                    <h3>{activity.title}</h3>
                                    <h3>{activity.city}</h3>
                                    <h3>{activity.address}</h3>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            );
        }
        return <h3>User has no activities</h3>;
    }

    async function fetchOwnedActivities(userId) {
        const response = await fetch(
            `http://localhost:8080/activities/user/${userId}`, {
                headers: {Authorization: localStorage.getItem("jwt")}
            })
        const data = await response.json();
        setOwnedActivities(data);
    }

    async function fetchAllUserActivities(userId) {
        const response = await fetch(
            `http://localhost:8080/activities/participant/${userId}`, {
                headers: {Authorization: localStorage.getItem("jwt")}
            })
        const activities = await response.json();
        setAllUserActivities(activities);
    }

    useEffect(() => {
        if (Object.keys(userData).length !== 0) {
            fetchOwnedActivities(userData.userId);
            fetchAllUserActivities(userData.userId);
        }
    }, [userData]);


    return (
        <div>
            <h1>{userData.username}</h1>
            <h3>{userData.userId}</h3>
            <h3>{userData.city}</h3>
            <h3>{userData.description}</h3>
            <h3>{userData.preferredActivity}</h3>
            {displayActivities(allUserActivities)}
            {displayActivities(ownedActivities)}
            <img src={userData.userPhotoUrl} width="500" height="500"/>
            <button onClick={() => navigate("/additional-info-form")}>Update info</button>
        </div>
    )
}

export default Profile;