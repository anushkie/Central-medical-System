import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCarousel,
  CCarouselCaption,
  CCarouselControl,
  CCarouselIndicators,
  CCarouselInner,
  CCarouselItem,
  CCol,
  CRow 
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

const slides = [
  'imgs/c1.jpg',
  'imgs/c2.jpg',

  'imgs/c3.jpg',

]

const Carousels = () => {
  const [activeIndex] = useState(1)

  return (
      
      <CCol xs="18" xl="7">
     
          <h3 class=" display-4 text-primary ml-3 my-3 text-center">
                Events
              </h3>         
            <CCarousel animate autoSlide={3000}>
              <CCarouselIndicators/>
              <CCarouselInner>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[0]} alt="slide 1"/>
                  <CCarouselCaption><h3></h3><p></p></CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[1]} alt="slide 2"/>
                  <CCarouselCaption></CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[2]} alt="slide 3"/>
                  <CCarouselCaption></CCarouselCaption>
                </CCarouselItem>
              </CCarouselInner>
              <CCarouselControl direction="prev"/>
              <CCarouselControl direction="next"/>
            </CCarousel>
      
      </CCol>
  )
}

export default Carousels
