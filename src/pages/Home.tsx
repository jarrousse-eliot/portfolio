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
            <p className="taglist"><strong>Tech:</strong>{
                Object.values(tags).filter((e, ) => (e.mastery != undefined)).map((tag, ) => (
                    <TagContext tag={tag.name}/>
                ))
            }
            {Object.values(technologies).filter((e, ) => (e.mastery != undefined)).map((tag, ) => (
                    <TagContext tag={tag.name}/>
                ))
            }
            </p>
        </section>
    );
};

export default Home;

