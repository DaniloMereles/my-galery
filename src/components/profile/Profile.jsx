//components
import Card from "../card/Card"

//styles
import './Profile.css'

const Profile = () => {
    return (
        <div className = "profile">
            <img src="https://i.imgur.com/jh6EOAE.png" className = "profile__avatar" alt="profile" />
            
            <h2 className = "profile__username">
                Rodney Cotton
            </h2>

            <p className = "profile__description">
                Helsinki, Finland
            </p>

            <div className = "profile__info">
                <Card title = "Posts" number = "100"/>
                <Card title = "Follower" number = "2,242"/>
                <Card title = "Following" number = "1,432"/>
            </div>
        </div>
    )
}

export default Profile