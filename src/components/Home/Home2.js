import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import './Home.css';

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DEIXE <span className="purple"> ME </span> APRESENTAR
            </h1>
            <p style={{ textAlign: "justify" }}> Formado em Análise de Sistemas há  29 anos, onde atuei como analista de sistemas por 10 anos e atualmente como desenvolvedor há 20 anos.      
            </p>
            <p style={{ textAlign: "justify" }}>Experiência em processos de engenharia de software, com participação em todas as fases (concepção, elaboração, criação e entrega). Minhas experiências passam por SQL Server, Oracle Server, Mysql, Firebird,  Postgresql, Mongodb, linguagem de programação Java, Php, Python, Javascript e seus principais frameworks.</p>
            
            <p style={{ textAlign: "justify" }}>Obtive bagagem profissional trabalhando em empresas renomadas e consolidadas no país e no exterior, como bancos, universidades, auditoria, publicidade, indústria, engenharia e tecnologia. Além do conhecimento avançado em técnicas de programação OO seguindo os design patterns e metodologias exigidas no mercado.</p>
            <p style={{ textAlign: "justify" }}>Além das experiências tecnológicas, já atuei líder técnico em setores de pesquisa e desenvolvimento, com foco em agilizar processos, possuindo autonomia nas tomadas de decisão. Como gestor e analista de negócios já atuei coordenando e implementando projetos, gerindo equipes e demandas,  implantando projetos e administrando sua manutenção, trabalhando com métodos ágeis a mais de 10 anos.


            </p>
            <p style={{ textAlign: "justify" }}>
            Sou freelancer, consultor e professor part-time há mais de 5 anos e disponibilizo meu conhecimento para obter mais experiência em diferentes projetos de diferentes áreas, empresas de porte e segmento variados me conectando a outros profissionais de qualidade, compartilhando conhecimentos e aprendendo constantemente.
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              {/* <img src={myImg} className="img-fluid" alt="avatar" /> */}
              <div className="profile-picture">
                <div className="profile-picture-background"></div>
             </div>

            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>PARA ME ENCONTRAR </h1>
            <p>
              Fique a vontade<span className="purple"> em me </span>contatar
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
