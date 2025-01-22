export function VerbRender({ randomVerb }) {

    return <>
        <h4 className="mb-5"><strong>{randomVerb.French}</strong></h4>

        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <p><strong>Infinitif</strong></p>
                    <p>{randomVerb.base}</p>
                </div>
                <div className="col">
                    <p><strong>Simple Past</strong></p>
                    <p>{randomVerb.pSimple}</p>
                </div>
                <div className="col">
                    <p><strong>Participe Passé</strong></p>
                    <p>{randomVerb.pParticiple}</p>
                </div>
            </div>
        </div>
    </>
}