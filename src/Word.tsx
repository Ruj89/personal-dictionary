import { useEffect, useState } from "react";
import { useTextToSpeechService, useTranslationService } from "./UtilitiesServiceContext";

function Word(props: { word: string }) {
    const translationService = useTranslationService();
    const textToSpeechService = useTextToSpeechService();
    const [translation, setTranslation] = useState("");
    const [audio, setAudio] = useState("");

    useEffect(() => {
        (async () => {
            setTranslation(await translationService.translate(props.word));
            let base64Audio = await textToSpeechService.speak(props.word)
            setAudio(`data:audio/mpeg;base64,${base64Audio}`);
        })()
    }, [])

    return (
        <tr>
            <td>{props.word}</td>
            <td>{translation}</td>
            <td><audio controls id="audioPlayer" src={audio}>
                Il tuo browser non supporta l'elemento audio.
            </audio></td>
        </tr>
    )
}

export default Word