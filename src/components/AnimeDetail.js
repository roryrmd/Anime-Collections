import React from 'react';
import './AnimeDetails.css';
import { useQuery } from '@apollo/client';
import { GET_DETAIL } from '../gql/QueryGetById';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import Spinner from './Spinner';

function AnimeDetail() {
  const {id} = useParams();
  const { loading, error, data } = useQuery(GET_DETAIL, {variables: {"id": id}});
  console.log(data);

  const Loading = styled.div`
        position: absolute;
        width: 300px;
        height: 200px;
        z-index: 15;
        top: 50%;
        left: 50%;
        margin: -100px 0 0 -150px;
    `

  return (
    <>
    {loading ? (
        <Loading>
            <Spinner />
        </Loading>

        ) : error ? (
            <p>Error: {error}</p>
        ) : (
            <div>
              <div className="app">
                <div className="details">

                  <div className="big-img">
                    <img src={data.Media.coverImage['extraLarge']} alt=""/>
                  </div>

                  <div className="box">
                    <div className="row">
                      <h2>{data.Media.title['romaji']}</h2>
                      <span><strong>Episodes : {data.Media.episodes} / {data.Media.status}</strong></span>
                    </div>
                    <div className="row">
                      <p><i><b>
                          Genre : {data.Media.genres.map((genre) => {
                          return genre
                          }).join(",")}
                      </b></i></p>
                    </div>
                    <div className="row">
                      <p><strong>Status : {data.Media.status}</strong></p>
                    </div>
                    <div className="row">
                      {data.Media.description}
                      {console.log(data.Media.description)}
                    </div>
                    <div className="row"></div>
                    <div className="row"></div>
                    <button className="cart">Add to collection</button>
                  </div>

                </div>
              </div>
            </div>
        )}
    </>
  )
}

export default AnimeDetail

