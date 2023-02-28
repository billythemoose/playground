import PostCard from "./PostCard";
import { StyledPostMain, StyledPostMainContainer } from "./PostMain.styled";

const PostMain = ({ title, content }) => {
    return (
        <StyledPostMainContainer>
            <StyledPostMain>
                <PostCard title={title} content={content} />
            </StyledPostMain>
        </StyledPostMainContainer>
    );
};

export default PostMain; 