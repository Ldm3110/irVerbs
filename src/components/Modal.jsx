import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { VerbRender } from './VerbRender';
import VERBS from '../ressource/verbs';

const style = {
    borderRadius: "8px",
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

const styleLi = {
    cursor: 'pointer',
}

function findVerb(verb) {
    return VERBS.find(v => v.French === verb)
}

export default function BasicModal({ searchTerm, filteredVerbs }) {
    const [open, setOpen] = useState(false);
    const [verb, setVerb] = useState("")


    const handleOpen = (e) => {
        setVerb(findVerb(e.currentTarget.textContent))
        setOpen(true)
    }
    const handleClose = () => setOpen(false);

    return (
        <div>
            {searchTerm && filteredVerbs.length > 0 && <ul className="mt-5 list-unstyled">
                {filteredVerbs.map(verb => (
                    <li key={verb.base} onClick={handleOpen} style={styleLi}>
                        <strong>{verb.French}</strong>
                    </li>
                ))}
            </ul >}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {<VerbRender randomVerb={verb} />}
                </Box>
            </Modal>
        </div>
    );
}
