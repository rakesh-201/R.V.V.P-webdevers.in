
![Banner](https://github.com/rakesh-201/R.V.V.P-webdevers.in/blob/master/INHERITANCE/segments/static/B%20Site.gif)

<!-- # B_Site :man_with_probing_cane: :woman_with_probing_cane: -->

B_Site is a voice controlled website built for a class of specially-abled people viz. blind people.

The Moto with which B_Site was built is `Internet and its services should be accessible to all regardless of disability`.

This website provides users services like Daily News, access to 200+ latest songs and a Dairy for noting down the user's favourite moments, all of them operated orally.

## Motivation :sunrise_over_mountains:

- The internet is currently at its very best worldwide. It have a lot of useful content which most of us leverage. Right from latest songs to live news, right from domain fundamentals to answers to your complicated questions, right from watching videos to connecting with your friends via video meets, it has all of them.

- However, there are people who cannot leverage this internet. Yes, I am talking about specially-abled people.

- So, we decided to help a category of such people viz. blind people, through this project. 



## Issues to Tackle :mountain:

- Blind people do not have vision, which leads to the following difficulties while using an application:

    - They cannot locate buttons present on the screen, and hence are not able to navigate through the application.

    - They cannot determine the screen on which they are currently browsing.

    - They cannot use the keyboard/keypad for typing-in the requirements (e.g., searching for a song, searching for a particular news article, etc.).

- So, when devicing a solution we need to take care of these difficulties, in our solution.
## Features :star2:

**Voice Controlled Operations**

- Our project has a voice-controlled operation system, which allows the users to ask for a particular task (e.g., navigating to a different screen, playing a particular song, etc.) by orally commanding the website.

- A general flow goes as follows:

    - The website first tells the user the current page which is being displayed.

    - The website then provides the possible options the user has, on this page.

    - Then, it waits for some threshold time and repeats the options again. After 3 such tries, if the user does on respond, the website goes in a temporal sleep mode and wakes up again when the user responds.

    - After getting a response, the website performs the coresponding task.

    - This task could be related to navigation to a different screen or playing a specific song or playing latest news, etc.

**News Section**

- This section provides the users with the latest news, by commumnicated the information orally.

- When the user navigates to this page, the page first tells the user 50 top general news.

- After these news are completed, the page provides the user with four options as follows:
    
    - Play Top 50 Sports News.
    
    - Play Top 50 Bussiness News.
    
    - Play Top 50 Bollywood News.
    
    - Don't play anything.

- The user can select any one of these options by repeating the option.

- This page provides real-time news using [NEWS API](https://newsapi.org/), which is a JSON API and provides a variety of news articles.

- This page also displays the news in cards, so that other people (non-blind) can read them.


**Music Section**


- This section is the biggest section of this project, comprising over 200 latest songs.

- These songs are categorized using three schemes as follows:

    - **Categorized By Year Of Release:**

        - In this section, the songs are categorized by the year of release into two categories, i.e. songs released in 2020 and songs released in 2019.

    - **Categorized By Artist:**

        - In this section, the songs are categorized according to the artist of the song into six categories, i.e. songs by _Arijit Singh_, songs by _Atif_, songs by _Lata Mangeshkar_, songs by _Asha Bhosle_, songs by _Kishor Kumar_, and songs by _Md. Rafi_.

    - **Categorized By Language:**

        - In this section, the songs are categorized by the language used in the song into three categories, i.e. _Hollywood_ songs, _Bollywood_ songs, and _Marathi_ songs.

- This section has an in-built media player, which provides various features like shuffling, fast forwarding, skipping, looping, etc.

- Considering, the users' preference for using dark themes while listening to songs, we have integrated the dark mode feature in this section.


**Diary Section**

- People often like to have a diary wherein they can write their personal secrets, their likes, their dislikes, and other personal things.

- In the case of Blind people, most of them find it difficult to maintain a diary. There are multiple reasons for it, and one of them is a lack of writing ability.

- So, we tried to solve this problem through this section. In this section, the users can orally speak what they want to save, and then this page will convert the speech to text and save this text.

- This text can be accessed at a later point in time and also can be deleted.

## Technology Stack :hammer_and_wrench:

**Client:** HTML, CSS, JS, Bootstrap

**Server:** Python Django

**Database:** SQLite


## Installation & Setup :gear:

Clone B_Site using the following command:

```bash
  git clone https://github.com/rakesh-201/R.V.V.P-webdevers.in.git
```

Now, download the dependencies using the following:

```bash
  cd INHERITANCE
  pip install -r requirements.txt
```

Next-up, run the following commands to setup the database:

```bash
  python manage.py makemigrations
  python manage.py migrate
```

Finally, start the project using the following command:

```bash
  python manage.py runserver
```

You can access the project by going to the following link in your browser:

```bash
  http://127.0.0.1:8000/
```

## Future Scope :stars:

- The music section is not completely voice-controlled, some features in this section, e.g., adding a song to a favorite list, are not yet feasible through voice commands. Such features can be made voice-controlled.

- New sections/features, e.g., oral web search, can be added.

- A mobile app for this website can be built for smartphone users.

## Contest Details :man_technologist:	

**INHERITANCE, 2020**
    
This project is built as a Final Submission for _INHERITANCE_, 2020, a mentorship program conducted by _Community of coders, VJTI_.

**TEAM MEMBERS**
    
- Rakesh Rajpurohit - [Email](mailto:rakesh.rajpurohit.rr.rr.201@gmail.com)
- Vishal Bajrang Dange - [Email](dangebvishal@gmail.com)
- Vedant Deepak Mondkar - [Email](vedantmondkar2002@gmail.com)
- Prashant Tukaram Bhala - [Email](prashanttb151100@gmail.com)

**MENTORS**
- Riya Gupta
- Hrim Gandhi
- Akshat Salva