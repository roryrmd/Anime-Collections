import { gql } from "@apollo/client";

export const GET_DETAIL = gql`
query ($id: Int) { # Define which variables will be used in the query (id)
    Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
        id
        title {
            romaji
            english
            native
        }
        genres
        coverImage {
            extraLarge
            large
            medium
            color
        }
        episodes
        description
        status
        }
    }
`;