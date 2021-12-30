import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from 'antd';
import { withRouter } from 'react-router-dom';
import { API_KEY, API_URL, IMAGE_BASE_URL } from "../../../Config";
import MainImage from "./Sections/MainImage";

function LandingPage(props) {

  const [Movies, setMovies] = useState([])
  const [MainMovieImage, setMainMovieImage] = useState(null)

  useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=kr-KR&page=1`;

    fetch(endpoint)
    .then(response => response.json())
    .then(response => {
      setMovies([response.results])
      setMainMovieImage(response.results[0])
    })

  }, [])


  return (
    <div style={{width: '100%', margin: '0'}}>
      {/* Main Image */}
      {/* MainMovieImage&& 의 의미는 MainMovieImage가 있으면 &&뒤의 내용을 실행해라는 의미, 즉 정보를 가져오기전에 랜더링 되어서 오류나는것을 방지 */}
      {/* 페이지 틀어서 console 찍어보면 해당 movie 의 이미지 파일 이름이 backdrop_path에 저장되어있음 */}
      {/* image가 이제 해당 image 정보를 가지고 있는것이고, 이것을 MainImage.js 파일에 props을 이용하여 뿌려줘야한다 */}
      {MainMovieImage &&
        <MainImage
          image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
          title={MainMovieImage.original_title}
          text={MainMovieImage.overview}
        />
      }

      <div style={{ width: '85%', margin: '1rem auto'}}>

        <h2>Movies by latest</h2>
        <hr/>

        {/* Movie Grid Cards */}

      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button> Load More </button>
      </div>
    </div>
  )
}

export default LandingPage
