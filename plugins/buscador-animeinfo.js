import translate from '@vitalets/google-translate-api';
import {Anime} from '@shineiichijo/marika';
import _translate from './_translate.js';
const tradutor = _translate.plugins.buscador_animeinfo
 // Para configurar o idioma, na raiz do projeto altere o arquivo config.json
  // Para configurar el idioma, en la raíz del proyecto, modifique el archivo config.json.
  // To set the language, in the root of the project, modify the config.json file.

const client = new Anime();
const handler = async (m, {conn, text, usedPrefix}) => {
  if (!text) return m.reply(`*${tradutor.texto1}*`);
  try {
    const anime = await client.searchAnime(text);
    const result = anime.data[0];
    const resultes = await translate(`${result.background}`, {to: 'es', autoCorrect: true});
    const resultes2 = await translate(`${result.synopsis}`, {to: 'es', autoCorrect: true});
    const AnimeInfo = `
${tradutor.texto2[0]} ${result.title}
${tradutor.texto2[1]}* ${result.type}
${tradutor.texto2[2]} ${result.status.toUpperCase().replace(/\_/g, ' ')}
${tradutor.texto2[3]} ${result.episodes}
${tradutor.texto2[4]} ${result.duration}*
${tradutor.texto2[5]} ${result.source.toUpperCase()}
${tradutor.texto2[6]} ${result.aired.from}
${tradutor.texto2[7]} ${result.aired.to}
${tradutor.texto2[8]} ${result.popularity}
${tradutor.texto2[9]} ${result.favorites}
${tradutor.texto2[10]} ${result.rating}
${tradutor.texto2[11]} ${result.rank}
${tradutor.texto2[12]} ${result.trailer.url}
${tradutor.texto2[13]} ${result.url}
${tradutor.texto2[14]} ${resultes.text}
${tradutor.texto2[15]} ${resultes2.text}`;
    conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, m);
  } catch {
    throw `${tradutor.texto3}`;
  }
};
handler.command = /^(anime|animeinfo)$/i;
export default handler;
