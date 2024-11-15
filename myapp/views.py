
from django.shortcuts import render
from .models import Boton

def inicio(request):
    if request.method == "POST":
        boton_nombre = request.POST.get("boton")
        try:
            boton = Boton.objects.get(nombre=boton_nombre)
            boton.clicks += 1
            boton.save()
        except Boton.DoesNotExist:
            pass  # Si no existe el botón, no hacemos nada

    # Obtener los clics de cada botón
    botones = Boton.objects.all()
    contexto = {boton.nombre: boton.clicks for boton in botones}
    return render(request, 'inicio.html', {"botones": botones})
