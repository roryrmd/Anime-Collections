import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ANIME } from "../gql/QueryGetAll";
import { Link, useParams } from "react-router-dom";
import styled from '@emotion/styled';
import Spinner from './Spinner';
import './Card.css';

function GetAnime() {
    const [ page, setPage ] = useState(1);
    const { loading, error, data } = useQuery(GET_ANIME, {variables: {"page": page, "perPage": 10}});
    console.log(data);

    const Button = styled.button`
        padding: 8px;
        background-color: skyblue;
        font-size: 16px;
        border-radius: 6px;
        color: black;
        font-weight: bold;
        &:hover {
            color: white;
        }
        margin-top: 40px;
        margin-bottom: 30px;
    `
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
                {data.Page.media.map((anime) => {
                    return (
                    <div className='card-container'>
                        <div className='image-container'>
                            <img src={anime.bannerImage} alt='' />
                        </div>
                        <div className='card-content'>
                            <div className='card-title'>
                                <h3>{anime.title["english"]}</h3>
                            </div>
                        </div>
                        <div className='card-body'>
                            <p><i>
                                Genre : {anime.genres.map((genre) => {
                                return genre
                                }).join(",")}
                            </i></p>
                        </div>
                        <div className='btn'>
                            <button>
                                <a href='#'>
                                    <Link to={"/detail/"+anime.id}>Detail</Link>
                                </a>
                            </button>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    );
                })}
                    <Button style={{float: "left", marginLeft: "30px"}} onClick={ (page <= 1) ? () => setPage((prev) => prev) : () => setPage((prev) => prev - 1) }>Previous Page</Button>
                    <Button style={{float: "right", marginRight: "30px"}} onClick={ (page >= 50) ? () => setPage((prev) => prev) : () => setPage((prev) => prev + 1) }>Next Page</Button>
                </div>
            )}
        </>
    );
}

export default GetAnime;