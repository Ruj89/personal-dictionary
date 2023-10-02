

export class TextToSpeechService {
    url = `https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=${process.env.REACT_APP_API_KEY}`;

    async speak(text: string, from: string = "en-US") {
        let url = this.url;
        const data = {
            'input': {
                'text': text
            },
            'voice': {
                "languageCode": from,
                "name": "en-US-Neural2-J"
            },
            "audioConfig": {
                "audioEncoding": "MP3",
                "effectsProfileId": [
                    "small-bluetooth-speaker-class-device"
                ],
                "pitch": 0,
                "speakingRate": 1
            },
        };
        const request = {
            headers: {
                "content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(data),
            method: "POST"
        };

        let res = await (await fetch(url, request)).json();

        return res.audioContent;
    }
}