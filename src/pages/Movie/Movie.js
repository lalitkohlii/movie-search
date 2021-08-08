import { Box } from 'grommet'
import React from 'react'
import { useParams } from 'react-router-dom';

function Movie() {
    let { id } = useParams();
    return (
        <div>
           <Box>
               Movie {id}
           </Box>
        </div>
    )
}

export default Movie
