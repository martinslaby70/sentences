import React, {useState, useRef, useEffect } from 'react'
import { v4 as uuid } from 'uuid';
import AvatarPicker from './avatarPicker';

//redux
import { useDispatch } from 'react-redux';

const SentenceForm = () => {
    
    const dispatch = useDispatch();

    const [who, setWho] = useState('');
    const [what, setWhat] = useState('');
    const [when, setWhen] = useState('');
    const [where, setWhere] = useState('');

    const [foreground, setForeground] = useState('#ffffff');
    const [background, setBackground] = useState('#222034');

    const whoRef = useRef<HTMLInputElement | null>(null);
    const whatRef = useRef<HTMLInputElement | null>(null);
    const whenRef = useRef<HTMLInputElement | null>(null);
    const whereRef = useRef<HTMLInputElement | null>(null);
    const submitButtonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (whoRef.current?.validity.valid && whatRef.current?.validity.valid && whenRef.current?.validity.valid && whereRef.current?.validity.valid)
            submitButtonRef.current?.classList.add('valid')
        else
            submitButtonRef.current?.classList.remove('valid')
    },[who, what, when, where])
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const date = new Date();
        const formatedDate = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;
        
        dispatch({
            type: "ADD_SENTENCE",
            payload: {
                id: uuid(),
                created: formatedDate,
                sentence: {
                    who,
                    what,
                    when,
                    where
                },
                avatar: {
                    foreground,
                    background
                }
            }
        })

        
        if (whoRef.current && whatRef.current && whenRef.current && whereRef.current)
            whoRef.current.value = whatRef.current.value = whenRef.current.value = whereRef.current.value = ''; 

        setWho('');
        setWhen('');
        setWhere('');
        setWhat('');
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>

            <div className="formgroup">
                <label>Who ?</label>
                <input type="text" placeholder="Mark" minLength={3} maxLength={20} onChange={(e) => setWho(e.target.value)} ref={whoRef} required />
            </div>
            <div className="formgroup">
                <label>What ?</label>
                <input type="text" placeholder="is coding" minLength={3} maxLength={40} onChange={(e) => setWhat(e.target.value)} ref={whatRef} required />
            </div>
            <div className="formgroup">
                <label>When ?</label>
                <input type="text" placeholder="today" minLength={3} maxLength={20} onChange={(e) => setWhen(e.target.value)} ref={whenRef} required />
            </div>
            <div className="formgroup">
                <label>Where ?</label>
                <input type="text" placeholder="on his computer" minLength={3} maxLength={30} onChange={(e) => setWhere(e.target.value)} ref={whereRef} required />
            </div>          

            <AvatarPicker 
                setBackgroundColor={setBackground} 
                setForegroundColor={setForeground} 
                backgroundColor={background} 
                foregroundColor={foreground}
            />

            <button type="submit" ref={submitButtonRef}>Add sentence</button>
        </form>
    )
}

export default SentenceForm;