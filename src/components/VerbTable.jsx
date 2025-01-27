export function VerbTable({ randomVerb }) {

    return <>
        <h4 className="mb-5 5 text-center"><strong>{randomVerb.French}</strong></h4>

        <table className="table table-striped">
            <thead>
                <tr className="text-center">
                    <th>Infinitif</th>
                    <th>Simple Past</th>
                    <th>Participe Passé</th>
                </tr>
            </thead>
            <tbody>
                <tr className="text-center">
                    <td>{randomVerb.base}</td>
                    <td>{randomVerb.pSimple}</td>
                    <td>{randomVerb.pParticiple}</td>
                </tr>
            </tbody>
        </table>
    </>
}