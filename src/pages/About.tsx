import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

const About: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <section className="page">
            <h2>{t("about.title")}<h2>
            <p>{t("intro")}</p>
            <h3>{t("skills")}<h3>
            <ul>
                <li>HTML / CSS</li>
                <li>Javascript / Typescript</li>
                <li>React</li>
                <li>Git</li>
            </ul>
        </section>
    );
};

export default About;
