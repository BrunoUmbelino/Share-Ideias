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
`;

export const UserPhoto = styled.div`
  svg {
    font-size: 3rem;
  }
  grid-area: photo;
  padding: 1rem;
`;

export const UserName = styled.div`
  grid-area: name;
  padding: 1rem;
`;

export const Content = styled.div`
  min-height: 80px;
  grid-area: content;
  padding: 1rem;
`;

export const Reactions = styled.div`
  grid-area: reactions;
  display: flex;
  justify-content: space-around;
  padding: 1rem;
`;

export const ReactionWrap = styled.div`
  color: #ffffff58;

  svg {
    &:hover {
      cursor: pointer;
    }
  }
`;
