import { useMemo, useState } from "react";

const companies = [
    { name: "Cognizant", pre: "Java,Python", ctc: 4.5 },
    { name: "Capgemini", pre: "PHP,Selenium", ctc: 4.5 },
    { name: "IBM", pre: "SpringBoot,Jython", ctc: 4.5 },
    { name: "Accenture", pre: "FastAPI,Javalin", ctc: 4.5 },
    { name: "HP", pre: "Swift,React", ctc: 4.5 },
    { name: "Amazon", pre: "RasberyPI", ctc: 4.5 }
];

export const AllCompanies = ({
    deletedCompanies,
    setDeletedCompanies
}) => {
    const [deletion, setDeletion] = useState("");
    // remove in original
    const newOne = useMemo(() => {
        return companies.filter((each) => {
            return !deletedCompanies.some(
                (deleted) => deleted.name === each.name
            );
        });
    }, [deletedCompanies]);

    const removeCompany = (company) => {
        // // Store complete company object in trash
        setDeletedCompanies([
            ...deletedCompanies,
            company
        ]);
        setDeletion(company.name);
    };

    return (
        <>
            <h1>Available Companies</h1>
            {
                newOne.map((org) => (
                    <div>
                        <h2 onClick={() => removeCompany(org)}>
                            {org.name}</h2>
                        <ul>
                            <li>{org.pre}</li>
                            <li>{org.ctc}</li>
                        </ul>
                    </div>
                ))
            }
        </>
    );
};