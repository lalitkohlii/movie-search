import { Box } from 'grommet'
import React, { useEffect, useState } from 'react'
import { getTrending } from '../../api/comman';

function Home() {
  const [state, setstate] = useState();
  const [page, setpage] = useState();
  const [results, setresults] = useState([]);
  const [total_pages, settotal_pages] = useState()
  const [total_results, settotal_results] = useState()
  var i = 0;
    return (
      <Box full onClick={()=>{
        getTrending().then(record =>{
         return record.data
        }).then(res => {
          setpage(res.page)
          setresults(res.results)
          settotal_pages(res.total_pages)
          settotal_results(res.total_results)
        }).catch(error => {
          console.log(error.response.data);
        })
      }}>
        Home
       <Box>
         Page No {page}
       </Box>
       <Box>
        Data {JSON.stringify(results)}
       </Box>
       <Box>
        Total Pages {total_pages}
       </Box>
       <Box>
        Total Results {total_results}
       </Box>
      </Box>
    )
}

export default Home
