import Modal from "./components/Modal";
import styles from "./exames.module.css";
import orelha from "./assets/orelha.jpg";

export default function ExamesPediatria() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleHeader}>
          <h1 className={styles.title}>Exames pediatria</h1>
          <p className={styles.pHeader}>
            Na audiologia pediátrica, tenho a chance de cuidar tanto das
            crianças quanto de seus pais, oferecendo apoio com relação às
            expectativas, ansiedades e preocupações sobre a audição. Quero
            contribuir para que seus filhos se desenvolvam de maneira saudável e
            segura, cercados de atenção, para que possam atingir todo o seu
            potencial, desde o nascimento, as primeiras palavras e a cada idade
            em que for necessário.
          </p>
        </div>
        <div className={styles.way}>
          <div className={styles.circle}></div>
          <div className={styles.line}></div>
        </div>
      </div>
      <h1 className={styles.title}>Audiometria Infantil</h1>

      <div className={styles.exames}>
        <div className={styles.modal}>
          <p>Audiometria com Reforço Visual (VRA)</p>

          <Modal triggerText="Saiba mais">
            <h1 className={styles.title}>
              Audiometria com Reforço Visual (VRA)
            </h1>
            Exame no qual a localização de estímulos sonoros será associada a
            apresentação de estímulos luminosos.
          </Modal>
        </div>
        <div className={styles.modal}>
          <p>Audiometria Lúdica Condicionada</p>

          <Modal triggerText="Saiba mais">
            <h1 className={styles.title}>Audiometria Lúdica Condicionada </h1>
            Semelhante ao método tradicional para adultos, também envolve
            condicionamento, porém o reforço positivo se dá por meio de uma
            brincadeira na qual a criança associa um ato motor ao estímulo
            sonoro.{" "}
          </Modal>
        </div>
      </div>
      <div className={styles.orelha}>
        <div className={styles.orelhaText}>
          <h1 className={styles.title}>Imitância Acústica</h1>
          <p>Avaliação das condições da orelha média.</p>
        </div>

        <img className={styles.orelhaImg} src={orelha} alt="imagem orelha" />
      </div>
      <h1 className={styles.title}>BERA / PEATE Pediátrico</h1>

      <div className={styles.exames}>
        <div className={styles.modal}>
          <p>BERA / PEATE Pediátrico</p>

          <Modal triggerText="Saiba mais">
            <h1>BERA / PEATE Pediátrico</h1>
            Criança não é uma miniatura do adulto e por essa razão o exame BERA
            / PEATE em bebês e crianças precisa, na grande maioria das vezes,
            ser mais detalhado e com mais informações para que tenhamos
            segurança de que a criança está tendo acesso aos níveis mínimos dos
            sons. <br /> <br />
            No exame BERA / PEATE Pediátrico utilizamos diferentes protocolos,
            como por exemplo, Frequência Específica e Resposta Auditiva de
            Estado Estável, para investigar diferentes regiões da audição
            (regiões dos sons graves, sons médios e sons graves).
            <p> Confira mais informações: </p>
            <ul>
              <li>Como acontece o exame?</li>
              <li>Como preparar a criança para o exame?</li>
              <li>Por que o exame é realizado em sono natural?</li>
              <li>BERA / PEATE sob sedação em algumas crianças: por que?</li>
            </ul>
          </Modal>
        </div>
      </div>
    </div>
  );
}
