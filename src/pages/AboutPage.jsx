import {Link} from "react-router-dom"
import Card from "../component/shared/Card"

const AboutPage=()=>{
    return (
        <Card>
            <div className="about">
                <h1>About this project</h1>
                <p>This is a React app to leave feedback for a project or service</p>
                <p>Version:1.0.0</p>

                <p>
                    <Link to="/">Back to home</Link>
                </p>
            </div>
        </Card>
    )
}

export default AboutPage