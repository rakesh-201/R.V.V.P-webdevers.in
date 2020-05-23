# import requests
# import json
# from gtts import gTTS
# import playsound
# import os

# def speak(text):
#     tts=gTTS(text=text, lang='en')
#     filename='voice.mp3'
#     tts.save(filename)
#     playsound.playsound(filename)
#     os.remove(filename)

# if __name__ == '__main__':
#     url = "http://newsapi.org/v2/top-headlines?country=in&apiKey=619d592e3df744d7afc8d8492e0de271"
#     news = requests.get(url).text
#     news_dict = json.loads(news)
#     arts = news_dict['articles']
#     for article in arts:
#         speak(article['title'])
#         print(article['title']) 

str = "Hello"
print(len(str))
