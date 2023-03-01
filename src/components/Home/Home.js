import PostMain from "../Post/PostMain";
import { StyledContent, StyledHeading, StyledHome, StyledSearch } from "./Home.styled";


const Home = () => {
    return(
        <StyledHome>
            <StyledHeading>
                <div>
                    <header>
                        <h1>Playground</h1>
                        <a>dummy link</a>
                    </header>
                    <main>
                        <p>
                            This is a general purpose area for testing. Currently this site itself is the test subject. Will it break? 
                        </p>
                    </main>
                    <footer>
                        <span>
                            Dummy footer 
                        </span>
                    </footer>
                </div>
            </StyledHeading>
            <StyledContent>
                <StyledSearch>
                    <div>
                        <span>Posts</span>
                        <small>number of posts</small>
                    </div>
                    <input type="text" placeholder="Search for post" />
                </StyledSearch>
                <PostMain title="testing" content="here's some content" />
            </StyledContent>
        </StyledHome>
    )
}

export default Home; 