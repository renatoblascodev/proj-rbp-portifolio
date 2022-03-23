import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Tenho 50 anos, brasileiro, pai de 3 filhos, marido, comunicativo, crossfiteiro, gosto de correr, ler, estudar, ensinar,  palestrar, sou mestre em programação neurolinguística, reservo meu tempo para mim, família, amigos e para as coisas de Deus.    
          </p>
         
         <p  style={{ textAlign: "justify" }}>
            Não atuo por obrigação mais sim porque gosto aprendi que se você não possui um talento para determinada coisa você tem que suar muito para conseguir chegar nos objetivos que determinando em nossa vida, sempre mantendo a sua moral e ética com sigo mesmo que com as pessoas que estão a nossa volta.
         </p>

         <p  style={{ textAlign: "justify" }}>
           </p>

          

          <p style={{ color: "rgb(155 126 172)" }}>
            "Esforce-se para construir coisas que façam a diferença!"{" "}
          </p>
          <footer className="blockquote-footer">Rbp.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
