import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Carousel from 'react-bootstrap/lib/Carousel';



class App extends React.Component {

  render () {

    return(
      <div>
        <Button>按钮</Button>
          <Carousel interval={1000}>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" style={{width:'100%'}} src="http://img2.3lian.com/2014/f4/198/d/89.jpg"/>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" style={{width:'100%'}} src="http://img2.3lian.com/2014/f6/44/d/22.jpg"/>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" style={{width:'100%'}} src="http://online.sccnn.com/desk/826/1600green_4012.jpg"/>
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>


      </div>
    )
  }
}

export default App;
