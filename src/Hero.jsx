import styles from "./hero.module.css";

export default function Hero() {
  return (
    <main className={styles.container}>
      <section className={styles.heroText}>
        <p>
          A audição é a porta de entrada para o mundo; cuidar dela é garantir
          que cada som, cada palavra e cada emoção possam ser plenamente
          vividos.
        </p>
      </section>

      <section>
        <p>ALGUMA IMAGEM AQUI</p>
      </section>
    </main>
  );
}
