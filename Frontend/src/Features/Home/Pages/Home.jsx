import Logout from '../../Auth/Components/Logout'
import FaceExpression from '../../Expression/Components/FaceExpression'
import Player from '../Components/Player'
import { useSong } from '../Hooks/useSong'
import '../Styles/home.scss'

const Home = () => {
    const { getSong } = useSong()
    return (
        <div className="home-container">
            <Logout />
            <FaceExpression onClick={(expression) => getSong({ mood: expression })} />
            <Player />
        </div>
    )
}

export default Home