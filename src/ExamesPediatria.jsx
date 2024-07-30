import Modal from "./components/Modal";
import styles from "./exames.module.css";
export default function ExamesPediatria() {
  return (
    <div className={styles.container}>
      <h1>Audiometria Infantil</h1>

      <div className={styles.infantil}>
        <div className={styles.modal}>
          <p>Audiometria com Reforço Visual (VRA)</p>

          <Modal triggerText="Saiba mais">
            <h1>Audiometria com Reforço Visual (VRA)</h1>
            Audiometria com Reforço Visual (VRA) <br />
            Exame no qual a localização de estímulos sonoros será associada a
            apresentação de estímulos luminosos.
          </Modal>
        </div>
        <div className={styles.modal}>
          <p>Audiometria Lúdica Condicionada</p>

          <Modal triggerText="Saiba mais">
            <h1>Audiometria Lúdica Condicionada</h1>
            Semelhante ao método tradicional para adultos, também envolve
            condicionamento, porém o reforço positivo se dá por meio de uma
            brincadeira na qual a criança associa um ato motor ao estímulo
            sonoro.{" "}
          </Modal>
        </div>
      </div>
      <h1>Imitância Acústica</h1>

      <p>Avaliação das condições da orelha média.</p>

      <h1>BERA / PEATE Pediátrico</h1>

      <div className={styles.infantil}>
        <div className={styles.modal}>
          <p>BERA / PEATE Pediátrico</p>

          <Modal triggerText="Saiba mais">
            <h1>BERA / PEATE Pediátrico</h1>
            Criança não é uma miniatura do adulto e por essa razão o exame BERA
            / PEATE em bebês e crianças precisa, na grande maioria das vezes,
            ser mais detalhado e com mais informações para que tenhamos
            segurança de que a criança está tendo acesso aos níveis mínimos dos
            sons. <br /> No exame BERA / PEATE Pediátrico utilizamos diferentes
            protocolos, como por exemplo, Frequência Específica e Resposta
            Auditiva de Estado Estável, para investigar diferentes regiões da
            audição (regiões dos sons graves, sons médios e sons graves).
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
