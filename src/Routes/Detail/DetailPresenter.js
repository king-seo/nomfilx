import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(5px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;
const Cover = styled.div`
  width: 30%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 10px;
`;
const ItemContainer = styled.div`
  margin: 10px 0;
`;
const Item = styled.span``;
const Divider = styled.span`
  margin: 0 10px;
`;
const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(225, 225, 225, 0.5);
`;
const Link = styled.a`
  color: red;
`;
const MoreInfo = styled.div`
  margin-top: 20px;
`;
const Botton = styled.a`
  margin-bottom: 20px;
  display: inline-block;
  width: 90px;
  height: 50px;
  background-color: rgba(225, 225, 225, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:hover {
    background-color: rgba(225, 225, 225, 0.1);
  }
`;
const Youtube = styled.iframe`
  width: 560px;
  height: 315px;
  /* display: none; */
`;
const MakerTitle = styled.div``;

const MakerLogo = styled.div`
  display: block;
  background-image: url(${props => props.bgUrl});
  height: 80px;
  width: 220px;
  margin: 20px 0;
  background-size: contain;
  resize: both;
  background-position: center center;
  background-repeat: no-repeat;
`;
const Collection = styled.div`
  height: 500px;
`;
const DetailPresenter = ({ result, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/noPosterSmall.png")
          }
        />
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>·</Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time[0]}
              min
            </Item>
            <Divider>·</Divider>
            {result.genres &&
              result.genres.map((genre, index) =>
                index === result.genres.length - 1
                  ? genre.name
                  : `${genre.name} / `
              )}
            <Divider>·</Divider>
            <Link
              href={`https://www.imdb.com/title/${result.imdb_id}`}
              target="_blank"
            >
              IMDB
            </Link>
            <Divider>·</Divider>
            <Link href={`${result.homepage}`}>🏠</Link>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
          <MoreInfo>
            <Botton>more info</Botton>
            <MakerTitle>company : </MakerTitle>
            <MakerLogo
              bgUrl={`https://image.tmdb.org/t/p/w300/${result.production_companies[0].logo_path}`}
              alt={`${result.production_companies[0].name}`}
            ></MakerLogo>
            <Youtube
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${result.videos.results[0].key}`}
              frameborder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></Youtube>
            <Collection>
              <Cover
                bgImage={
                  result.belongs_to_collection.poster_path
                    ? `https://image.tmdb.org/t/p/original${result.belongs_to_collection.poster_path}`
                    : require("../../assets/noPosterSmall.png")
                }
              />
              {result.belongs_to_collection.name}
            </Collection>
          </MoreInfo>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.prototype = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default DetailPresenter;
