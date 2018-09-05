# ChatterboxTranslator
Real-time Translation of Twitch Chat
> This project requires an extra entry in .env for an Yandex API key, available at [https://tech.yandex.com/translate/](https://tech.yandex.com/translate/) and added to the file like this
```javascript
YANDEX_KEY=[YANDEX API KEY] # e.g. YANDEX_KEY=trnsl.1.1.20....
```


## Instafluff ##
> *Come and hang out with us at the Comfiest Corner on Twitch!*

> https://twitch.tv/instafluff

> https://twitter.com/instafluffTV

## Credits ##
Thank you to all the participants of this project!

****

**KaletheQuick, fluffybluegalixyblooddog, prettypurplepuffypegasus, BountyHunterLani, MrRayKoma, mallesbixie, sparky_pugwash, MerlinLeWizard, Xynal, Instafluff, That_MS_Gamer, Jody_V, Instafriend, jellydance, ElysiaGriffin, mrbinary001, where_is_laughingman, Amarogine, HonestDanGames, kaisuke, CaseyGeske, generickTwitch, wietlol, stephan_try, RyanTFleming, Maayainsane, Infinityy_P, MacabreMan2, Lander03xD, Heart1lly, ArchimLeonh4rt, Zoraketh, Luk4s_, samchitto, dragonhyperking, Neo_TA, Lord_of_Conquest, BaconBastrd**

## Instructions ##

1. Install NodeJS - [https://nodejs.org/en/](https://nodejs.org/en/)
2. Open the directory in a Command Prompt/Terminal
3. Install Dependencies: `npm install`
4. Get a Twitch Chat OAuth Password Token - [http://twitchapps.com/tmi/](http://twitchapps.com/tmi/)
4. Create a file named `.env` that looks like this:
```javascript
PORT=8080
TWITCHUSER=[YOUR-USERNAME-HERE]
OAUTH=[YOUR-OAUTH-PASS HERE] # e.g. OAUTH=oauth:kjh12bn1hsj78445234
```
5. Run Server: `npm start`
6. View the webpage from your web browser! [http://localhost:8080](http://localhost:8080)
