import Button from "../Button";
import styles from "./style.module.css";

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className="container">

                <div className={styles.text}>
                    <h2 className={styles.h2_text}>Let Your Home
                        Be Unique
                    </h2>
                    <p className={styles.p_text}>There are many variations of the passages of lorem
                        Ipsum fromavailable,variations of the passages.
                    </p>
                </div>

                <Button title="Get Started" arrow bg='dark' />

            </div>
        </div>
    );
};

export default Banner;