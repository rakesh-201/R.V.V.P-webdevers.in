# Generated by Django 3.0.6 on 2020-05-23 14:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('segments', '0002_contact'),
    ]

    operations = [
        migrations.CreateModel(
            name='Dairy',
            fields=[
                ('D_id', models.AutoField(primary_key=True, serialize=False)),
                ('id', models.IntegerField(max_length=10000)),
                ('D_desc', models.CharField(max_length=1000)),
                ('date', models.DateField(auto_now_add=True)),
            ],
        ),
    ]