import type { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import {
    Typography,
    List,
    ListItem,
    Box,
    Avatar,
    Link,
} from "@mui/material";
import TagContext from "../components/tagContext";
import { formations } from "../data/formations";

const Formation: FunctionComponent = () => {
    const { t } = useTranslation(["common"]);

    return (
        <div className="page">
            <h2>
                {t("formations.title")}
            </h2>
            <List>
                {formations.map((formation, index) => {
                    const degreeKey = formation.degree.replace(/\s+/g, "").replace(/-/g, "");
                    const schoolKey = formation.school;

                    return (
                        <ListItem key={index} alignItems="flex-start">
                            {formation.logo && <Avatar src={formation.logo} sx={{ mr: 2 }} />}
                            <Box sx={{ flexGrow: 1 }}>
                                <Typography variant="h6">
                                    {t(`${degreeKey}`)}
                                </Typography>
                                {formation.link ? (
                                    <Link href={formation.link} target="_blank" rel="noopener">
                                        {schoolKey}
                                    </Link>
                                ) : (
                                    <Typography variant="body1">
                                        {schoolKey}
                                    </Typography>
                                )}
                                <Typography variant="body2" color="text.secondary">
                                    {formation.year}
                                </Typography>
                                {formation.skills && (
                                    <Box sx={{ mt: 1, display: "flex", flexWrap: "wrap", gap: 1 }}>
                                        {formation.skills.map((skill) => (
                                            <TagContext key={`${formation.school}-${skill}`} tag={skill} />
                                        ))}
                                    </Box>
                                )}
                            </Box>
                        </ListItem>
                    );
                })}
            </List>
        </div>
    );
};

export default Formation;
