import PacmanLoader from "react-spinners/PacmanLoader";

export default function Spinner() {

    return (
        <>
            <PacmanLoader
                size={100}
                margin={8}
                color="rgb(0, 33, 65)"
                cssOverride={{}}
                loading={true}
                speedMultiplier={1}
            />
        </>
    );
}
