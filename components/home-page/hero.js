import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/Anton.jpeg"
          alt="An image showing Anton"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Anton</h1>
      <p>I am a web developer - focused on frontend frameworks, like Next.js</p>
    </section>
  );
}

export default Hero;
