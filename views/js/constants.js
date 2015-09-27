
/* CONSTANT VALUES */

// Sample text values
var spanishText = "Take Your Notes Here",
    frenchText = "Take Your Notes Here",
    englishText = "Take Your Notes Here",
    germanText = "Take Your Notes Here",
    italianText = "Take Your Notes Here";

// Sample text values with SSML
var spanishSSML = "",
    frenchSSML = "<p><s>Consciente de son patrimoine spirituel et moral<break time='1s'/>, l'Union se fonde sur les valeurs <prosody rate='slow'>indivisibles</prosody> et universelles de dignité humaine, de liberté, d'égalité et de solidarité <break time='2s'/> elle repose sur <prosody pitch='x-high'> le principe de la démocratie </prosody> et le principe de l'État de droit <break time='3s'/>. Elle place la personne au coeur de son action en instituant la citoyenneté de l'Union et en créant un espace de liberté, de sécurité et de justice.</s></p>",
    englishSSML = "<p><s>Conscious of its spiritual and moral heritage <break time='1s'/>, the Union is founded on the <prosody rate='slow'>indivisible</prosody>, universal values of human dignity, freedom, equality and solidarity <break time='2s'/> it is based on the <prosody pitch='x-high'>principles of democracy</prosody> and the rule of law <break time='3s'/>. </s> <s> It places the individual at the heart of its activities, by establishing the citizenship of the Union and by creating an area of freedom, security and justice. </s></p>",
    germanSSML = "<p><s>In dem Bewusstsein ihres geistig-religiösen und sittlichen Erbes gründet sich die Union auf die unteilbaren und universellen Werte der Würde des Menschen<break time='1s'/>, der Freiheit, der Gleichheit und der Solidarität<break time='3s'/>. Sie beruht auf den <prosody pitch='x-high'>Grundsätzen der Demokratie</prosody> und der Rechtsstaatlichkeit<break time='3s'/>. Sie stellt den Menschen in den Mittelpunkt ihres Handelns, indem sie die Unionsbürgerschaft und einen Raum der Freiheit, der Sicherheit und des Rechts begründet.</s></p>",
    italianSSML = "Italian SSML is not presently supported";

window.SPEECH_SYNTHESIS_VOICES = {
    voices: [

    {
      "url": "https://stream.watsonplatform.net/text-to-speech/api/v1/voices/en-US_AllisonVoice", 
        "gender": "female", 
        "name": "en-US_AllisonVoice", 
        "language": "en-US", 
        "description": "English language with US dialect, female.  Higher-quality uncompressed Allison voice."
    }, 
    {
      "url": "https://stream.watsonplatform.net/text-to-speech/api/v1/voices/en-US_LisaVoice", 
      "gender": "female", 
      "name": "en-US_LisaVoice", 
      "language": "en-US", 
      "description": "English language with US dialect, female.  Higher-quality uncompressed Lisa voice."
    }, 
    {
      "url": "https://stream.watsonplatform.net/text-to-speech/api/v1/voices/en-US_MichaelVoice", 
      "gender": "male", 
      "name": "en-US_MichaelVoice", 
      "language": "en-US", 
      "description": "English language with US dialect, male voice.  The voice used by Watson Jeopardy system."
    }, 
    {
      "url": "https://stream.watsonplatform.net/text-to-speech/api/v1/voices/en-GB_KateVoice", 
      "gender": "female", 
      "name": "en-GB_KateVoice", 
      "language": "en-GB", 
      "description": "English language with UK dialect, female.  Higher-quality uncompressed Kate voice."
    },    
    {
      "url": "https://stream.watsonplatform.net/text-to-speech/api/v1/voices/fr-FR_ReneeVoice", 
      "gender": "female", 
      "name": "fr-FR_ReneeVoice", 
      "language": "fr-FR", 
      "description": "French language with French dialect, female.  Higher-quality uncompressed Renee voice."
    }, 
    {
      "url": "https://stream.watsonplatform.net/text-to-speech/api/v1/voices/de-DE_BirgitVoice", 
      "gender": "female", 
      "name": "de-DE_BirgitVoice", 
      "language": "de-DE", 
      "description": "German language with German dialect, female.  Higher-quality uncompressed Birgit voice."
    }, 
    {
      "url": "https://stream.watsonplatform.net/text-to-speech/api/v1/voices/de-DE_DieterVoice", 
      "gender": "male", 
      "name": "de-DE_DieterVoice", 
      "language": "de-DE", 
      "description": "German language with German dialect, male.  Higher-quality uncompressed Dieter voice."
    }, 
    {
      "url": "https://stream.watsonplatform.net/text-to-speech/api/v1/voices/it-IT_FrancescaVoice", 
      "gender": "female", 
      "name": "it-IT_FrancescaVoice", 
      "language": "it-IT", 
      "description": "Italian language with Italian dialect, female.  Higher-quality uncompressed Francesca voice."
    },
    {
      "url": "https://stream.watsonplatform.net/text-to-speech/api/v1/voices/es-ES_EnriqueVoice", 
      "gender": "male", 
      "name": "es-ES_EnriqueVoice", 
      "language": "es-ES", 
      "description": "LLSS Spanish Male Language with Castilian dialect. Enrique talent"
    },
    {
      "url": "https://stream.watsonplatform.net/text-to-speech/api/v1/voices/es-ES_LauraVoice", 
      "gender": "female", 
      "name": "es-ES_LauraVoice", 
      "language": "es-ES", 
      "description": "LLSS Spanish female Language with Castilian dialect. Laura talent"
    }, 
    {
      "url": "https://stream.watsonplatform.net/text-to-speech/api/v1/voices/es-US_SofiaVoice", 
      "gender": "female", 
      "name": "es-US_SofiaVoice", 
      "language": "es-US", 
      "description": "Spanish language with US dialect, female.  Higher-quality uncompressed Sofia voice."
    }    
  ]
}
