import PostCard from "./PostCard";
import { StyledPostMain, StyledPostMainContainer } from "./PostMain.styled";

const PostMain = ({ title, content }) => {
    return (
        <StyledPostMainContainer>
            <StyledPostMain>
                <PostCard title={title} content={content} />
                <PostCard title="Test post" content="This is a base test post just to see what happens." />
            </StyledPostMain>
        </StyledPostMainContainer>
    );
};

export default PostMain; 