import { gql } from "@apollo/client";

export const GET_ANIME = gql`
    query ($page: Int, $perPage: Int) {
        Page(page: $page, perPage: $perPage) {
            pageInfo {
                total
                perPage
            }
            media(type: ANIME, sort: FAVOURITES_DESC) {
                id
                title {
                    romaji
                    english
                    native
                    }
                type
                genres
                coverImage {
                    extraLarge
                    large
                    medium
                    color
                }
                bannerImage
                description
                episodes
                status
            }
        }
    }
`;