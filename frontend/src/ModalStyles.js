const loginFormStyles = {
    content: {
        position: 'absolute',
        background: 'white',
        top: "30%",
        left: "35%",
        height: "38vh",
        width: "30vw",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        border: "4px solid #90ee90",
        color: "90ee90",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        transition: "height 0.5s, top 0.5s"
    }
};

const activityAddedModalStyles = {
    content: {
        position: "absolute",
        display: "flex",
        background: "white",
        flexDirection: "column",
        height: "7vh",
        top: "10%",
        left: "35%",
        transition: "height 0.5s, top 0.5s",
        border: "4px solid #90ee90",
        borderRadius: "8px",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
        textAlign: "center",
        maxWidth: "400px",
    }
}

const activityDeleteModalStyles = {
    content: {
        position: 'absolute',
        background: 'white',
        top: "30%",
        left: "35%",
        height: "25vh",
        width: "30vw",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        border: "4px solid #90ee90",
        color: "90ee90",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        transition: "height 0.5s, top 0.5s"
    }
};

export default {loginFormStyles, activityAddedModalStyles, activityDeleteModalStyles};