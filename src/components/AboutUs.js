import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => (
  <div className="content-wrapper">
    <div className="page-header">
      <div
        className="page-header-bg"
        style={{ background: `url(/images/page-header-img.jpg)` }}
      />
      <Container>
        <Row>
          <Col md={10}>
            <h1>ABOUT US</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="mt-30 mb-30">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <div class="section-title">
              <h2 class="title">Our story</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, mea ad idque detraxit, cu soleat
              graecis invenire eam. Vidisse suscipit liberavisse has ex, vocibus
              patrioque vim et, sed ex tation reprehendunt. Mollis volumus no
              vix, ut qui clita habemus, ipsum senserit est et. Ut has soluta
              epicurei mediocrem, nibh nostrum his cu, sea clita electram
              reformidans an.
            </p>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <div class="section-title">
              <h2 class="title">Our vision</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, mea ad idque detraxit, cu soleat
              graecis invenire eam. Vidisse suscipit liberavisse has ex, vocibus
              patrioque vim et, sed ex tation reprehendunt. Mollis volumus no
              vix, ut qui clita habemus, ipsum senserit est et. Ut has soluta
              epicurei mediocrem, nibh nostrum his cu, sea clita electram
              reformidans an.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <blockquote class="blockquote">
              <p>
                Ei prima graecis consulatu vix, per cu corpora qualisque
                voluptaria. Bonorum moderatius in per, ius cu albucius
                voluptatum. Ne ius torquatos dissentiunt. Brute illum utroque eu
                quo. Cu tota mediocritatem vis, aliquip cotidieque eu ius, cu
                lorem suscipit eleifend sit.
              </p>
              <footer class="blockquote-footer">John Doe</footer>
            </blockquote>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <div class="section-title">
              <h2 class="title">Our goal</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, mea ad idque detraxit, cu soleat
              graecis invenire eam. Vidisse suscipit liberavisse has ex, vocibus
              patrioque vim et, sed ex tation reprehendunt. Mollis volumus no
              vix, ut qui clita habemus, ipsum senserit est et. Ut has soluta
              epicurei mediocrem, nibh nostrum his cu, sea clita electram
              reformidans an.
            </p>
            <p>
              Lorem ipsum dolor sit amet, mea ad idque detraxit, cu soleat
              graecis invenire eam. Vidisse suscipit liberavisse has ex, vocibus
              patrioque vim et, sed ex tation reprehendunt. Mollis volumus no
              vix, ut qui clita habemus, ipsum senserit est et. Ut has soluta
              epicurei mediocrem, nibh nostrum his cu, sea clita electram
              reformidans an.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default AboutUs;
