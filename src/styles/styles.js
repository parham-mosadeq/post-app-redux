import styled from 'styled-components';
// Nav start
const Nav = styled.nav`
  background-color: skyblue;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;

    li {
      padding-top: 10px;
      padding-bottom: 10px;
      a {
        padding: 8px;
        text-decoration: none;
        color: #fff;
        text-transform: capitalize;
        cursor: pointer;
        letter-spacing: 1.1px;
        font-weight: lighter;
        transition: padding 0.3s linear;
      }

      a:hover {
        padding-top: 1.5rem;
      }
    }
  }

  /* mobile design */
  @media (max-width: 650px) {
    ul {
      display: ${(props) => (props.showMobileMenu ? 'block' : 'none')};
      li {
        a:hover {
          padding-top: 0;

          padding-left: 1.5rem;
        }
      }
    }
  }
`;

const Btn = styled.button`
  /* showing btn for smaller displays */
  @media (max-width: 650px) {
    margin: 0;
    padding: 0;
    position: absolute;
    right: 0;
    top: 0;
    border: 0;
    background-color: transparent;
    padding: 1rem;
    color: #fff;
    cursor: pointer;
    font-size: 15px;
    display: block;
  }

  /* hiding btn for larger displays */
  @media (min-width: 651px) {
    display: none;
  }
`;

// Nav end

// !write start

const MainContainer = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
`;

const Article = styled.article`
  background-color: whitesmoke;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 1.5rem;
  margin: 2rem;
`;

const TitleInput = styled.input`
  border: 0;
  text-align: center;
  padding: 9px 14px;
  border-radius: 9px;
  margin-bottom: 1rem;
  font-size: 14px;
  font-weight: lighter;
  letter-spacing: 0.9px;
  margin-left: auto;
  margin-right: auto;
  display: block;

  :focus {
    outline: 0;
  }
`;

const Body = styled.textarea`
  display: block;
  border: 0;
  text-align: left;
  padding: 9px 14px;
  border-radius: 9px;
  margin-bottom: 1rem;
  font-size: 14px;
  font-weight: lighter;
  letter-spacing: 0.9px;
  resize: none;

  :focus {
    outline: 0;
  }
`;

const WriteBtnContainer = styled.aside`
  background-color: lightblue;
  width: 80vw;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
  height: 75px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  button {
    border: none;
    padding: 6px 12px;
    border-radius: 12px;
    text-transform: capitalize;
    font-size: 13px;
    transition: box-shadow 0.3s ease;
    cursor: pointer;
  }

  button:hover {
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.4);
  }

  button:focus {
    outline: 0;
  }

  @media (min-width: 992px) {
    width: 35px;
  }

  @media (min-width: 1012px) {
    width: 30vw;
  }
  @media (min-width: 1500px) {
    width: 25vw;
  }
`;

const LinkContainer = styled.article`
  display: flex;
  justify-content: space-between;
  width: 20vw;
  margin-top: 1.5rem;
  text-transform: capitalize;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #fff;
  }
`;

// !write end

// !posts start

const MainContainerPosts = styled.main`
  min-height: 100vh;
  max-width: 100vw;
  background-color: #fff;
  margin: 0 auto;
  padding: 0.5rem 1rem;

  button {
    border: none;
    border-radius: 8px;
    padding: 7px 14px;
    display: block;
    margin: 2rem auto;
    text-transform: capitalize;
    font-family: sans-serif;
    letter-spacing: 1.4px;
    background: transparent;
    color: skyblue;
    font-weight: bold;
    cursor: pointer;
  }

  div {
    margin: 1rem;
    padding: 0.4rem;
    background-color: gray;
    border-radius: 10px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in;
    color: #ee4;
  }

  div:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  }
`;

// !posts end

// !post start

const MainContainerPost = styled.div`
  margin: 0;
  padding: 0;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    letter-spacing: 1.1px;
    color: #fff;
    font-weight: 300;
    text-align: center;
    word-break: keep-all;
  }

  h3 {
    margin: 0;
    padding: 0;
    text-align: center;
    margin-top: 0.3rem;
    font-weight: lighter;
    letter-spacing: 1.2px;
  }

  button {
    border: none;
    border-radius: 8px;
    padding: 7px 14px;
    display: block;
    margin: 2rem auto;
    text-transform: capitalize;
    font-family: sans-serif;
    letter-spacing: 1.4px;
    background: transparent;
    color: yellow;
    cursor: pointer;
    border-bottom: 1px solid;
    transition: border 0.2s linear;
  }

  button:active {
    border-bottom: none;
  }
`;

const Tags = styled.div`
  max-width: 250px;
  width: 250px;
  a {
    color: #fff;
    display: flex;
    text-decoration: none;
    cursor: pointer;
    display: block;
    padding-left: 1rem;
    margin: 0.3rem 0;
    text-transform: capitalize;
    letter-spacing: 1px;
  }
`;

// !post end


// !tags start 




// !tags end

export {
  Article,
  WriteBtnContainer,
  MainContainerPosts,
  Body,
  Btn,
  Nav,
  MainContainer,
  TitleInput,
  LinkContainer,
  MainContainerPost,
  Tags,
};
