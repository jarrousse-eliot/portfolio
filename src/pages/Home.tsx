import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

const Home: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <section className="page">
            <h2>{t("hello")}</h2>
            <p>{t("title")}</p>
            <p>{t("intro")}</p>
        <section>
    );
};

export default Home;

