import { Avatar, Box, Container, Rating, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

const TestimonialSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        lazyLoad: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
     
        autoplaySpeed: 4000,
        cssEase: "linear",
  
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
      const [reviews,setReviews] = useState([])
      useEffect(()=>{
          fetch("http://localhost:8000/api/reviews")
          .then(res=>res.json())
          .then(data=>setReviews(data.data.data))
      },[])
    return (
        <Container>
               <Typography sx={{textAlign:"center",mt:2,mb:8,color:"#0c4b65",fontSize:"44px",fontWeight:800}}  variant="h6" gutterBottom component="div">
                   Testimonials
      </Typography>
        <Slider {...settings}>
          {reviews.map((dt)=>(
             <Box key={dt._id}>
                          <Box>
                  
                  <Box sx={{background: "#fff",boxShadow: "0px 14px 22px rgb(42 135 158 / 14%)",borderRadius: "12px"}}>
                    <Box >
                    <Avatar
                 
                  src={dt?.user?.photoURL}
                  style={{
                      width: 120,
                      height: 120,
                      border: "1px solid lightgray",
                      padding: 7,
                      marginBottom: 20,
                      margin:" 0px auto"
                  }}
              />
                    </Box>
                    <Box>
                    <Typography variant="body1" sx={{textAlign:"center",mt:4,color:"#0c4b65",fontSize:"24px",fontWeight:800}} gutterBottom>
          {dt?.user?.displayName}
        </Typography>
        
                    <Typography variant="body2" sx={{textAlign:"center",color:"#0c4b65",fontSize:"14px",fontWeight:200,mt:3}} gutterBottom>
                    {dt?.description}
        </Typography>
  <Box sx={{textAlign:"center",mt:3,color:"#faaf00"}}>    <Rating
                        name="half-rating-read"
                        defaultValue={dt?.rating}
                        precision={0.5}
                        readOnly
                      /></Box>
        
                     
                    </Box>
                  </Box>
                </Box>
             </Box> 
          ))}
        </Slider>
 
        </Container>
    );
};

export default TestimonialSlider;