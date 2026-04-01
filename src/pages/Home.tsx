import type { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { tags, technologies } from "../data/projects";
import TagContext from "../components/tagContext";

const Home: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <section className="page">
            <h2>{t("hello")}</h2>
            <p>{t("title")}</p>
            <p>{t("intro")}</p>
            <h2>{t("skills")}</h2>
            <p className="taglist"><strong>Technologies:</strong>
            {Object.entries(technologies).filter((e, ) => (e[1].mastery != undefined)).map((tag, ) => (
                    <TagContext tag={tag[0]}/>
                ))
            }
            </p>
            <p className="taglist"><strong>Soft-skills:</strong>{
                Object.entries(tags).filter((e ) => (e[1].mastery != undefined)).map((tag, ) => (
                    <TagContext tag={tag[0]}/>
                ))
            }
            </p>
        </section>
    );
};

export default Home;

