from django.db import models

# Create your models here.
class User(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=50)
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.username;
    
class Contact(models.Model):
    c_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=100)
    text = models.CharField( max_length=1000)
    
    def __str__(self):
        return self.text[0:50] + "...";

class Diary(models.Model):
    D_id = models.AutoField(primary_key=True)
    id = models.IntegerField()
    D_desc = models.CharField(max_length=1000)
    date = models.DateField(auto_now_add=True)
    
    def __str__(self):
        return self.D_desc[0:50] + "...";
    