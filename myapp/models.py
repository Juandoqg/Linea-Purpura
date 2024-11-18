from django.db import models

class Boton(models.Model):
    nombre = models.CharField(max_length=50, unique=True)  
    clicks = models.PositiveIntegerField(default=0)# Número de clics
    numero = models.IntegerField(default=0)      
    imgBoton = models.CharField(max_length=50, default="")


    def __str__(self):
        return f"{self.nombre} ({self.clicks} clics)"