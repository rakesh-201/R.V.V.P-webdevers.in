from playsound import playsound
import datetime
import multiprocessing
if 1:
    p = multiprocessing.Process(target=playsound, args=("home1.mp3",))
    p.start()
    input()
    p.terminate()

    
    
