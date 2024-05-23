import { Article } from "./Article";
export const Section = () => {
  return (
    <div>
      <section>
        <article>
          <h1>Je suis un titre h1 dans un article qui est dans une section</h1>
          <h3>
            Alors que moi je suis un petit titre de type h3 qui est dans
            l'article qui est dans une section
          </h3>
          <p>
            On en parle de moi ? Je suis qu'un simple paragraphe dans un article
            et dans une section
          </p>
        </article>
      </section>
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
    </div>
  );
};
