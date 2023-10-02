export class TranslationService {
    url = `https://translation.googleapis.com/language/translate/v2?key=${process.env.REACT_APP_API_KEY}`;

    async translate(text: string, from: string = "en") {
        let url = this.url;
        url += '&q=' + encodeURI(text);
        url += `&source=${from}`;
        url += `&target=it`;

        let res = await (await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        })).json();
        return res.data.translations[0].translatedText;
    }
}