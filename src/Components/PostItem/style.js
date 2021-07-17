import styled from "styled-components";

export const ListItem = styled.li`
  width: 100%;
  display: grid;
  grid-template-areas:
    "photo name"
    "photo content"
    "photo reactions";

  grid-template-columns: 1fr 6fr;
  grid-template-rows: auto;
  border-bottom: 1px solid black;
  color: var(--white);
  padding-top: 1rem;
`;

export const UserPhoto = styled.div`
  svg {
    font-size: 4rem;
  }
  grid-area: photo;
  padding: 1rem;

  @media screen and (max-width: 500px) {
    svg {
      font-size: 2rem;
    }
  }
`;

export const UserName = styled.div`
  grid-area: name;
  padding: 1.5rem 1rem 0.5rem 1rem; ;
`;

export const Content = styled.div`
  color: #ffffffd8;
  grid-area: content;
  padding: 0.5rem 1rem;
`;

export const Reactions = styled.div`
  grid-area: reactions;
  display: flex;
  justify-content: space-around;
  padding: 1rem;
`;

export const ReactionWrap = styled.div`
  color: var(--white);

  .like {
    color: var(--green);
  }

  .love {
    color: #e0245e;
  }

  svg {
    margin: 0 10px;
    &:hover {
      cursor: pointer;
    }
  }
`;
