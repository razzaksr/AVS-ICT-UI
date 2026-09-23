export const Trash = ({ deletedCompanies }) => {
    return (
        <>
            <h1>Trash</h1>
            {
                deletedCompanies.map((company) => (
                    <div>
                        <h2>{company.name}</h2>
                        <ul>
                            <li>{company.pre}</li>
                            <li>{company.ctc}</li>
                        </ul>
                    </div>
                ))
            }
        </>
    );
};