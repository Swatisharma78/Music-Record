import React from 'react'
import FilterSort from '../Components/FilterSort'
import MusicRecords from './MusicRecords'
import styled from "styled-components";


const Homepage = () => {
  return (
    <div>
    <HomepageWrapper>
    <FilterSortWrapper>
    <FilterSort/>
    </FilterSortWrapper>
    <MusicRecordsWrapper>
    <MusicRecords/>
    </MusicRecordsWrapper>
    </HomepageWrapper>
    </div>
  )
}

export default Homepage


const HomepageWrapper=styled.div`
display:flex;
height:100vh;
`;

const FilterSortWrapper=styled.div`
width:200px;
border:1px solid red;
`;

const MusicRecordsWrapper=styled.div`
width:100%;
border:1px solid blue;
display:grid;
grid-template-columns:repeat(auto-fit, minmax(300px,max-content));
justify-content:center;
grid-gap:10px;
`