import { StyledPostCard } from "./PostCard.styled";


const PostCard = ({ title, content, image }) => {
    return (
        <StyledPostCard>
            <header>
                <h1>{title}</h1>
            </header>
            <main>
                <p>{content}</p>
            </main>
        </StyledPostCard>
    )
}

export default PostCard; 